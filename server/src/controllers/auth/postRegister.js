import User from '../../models/User.js';
import Channel from '../../models/Channel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.exists({ username });

    if (userExists) {
      return res.status(409).send('Username already in use!');
    }

    const userEmailExists = await User.exists({ email });

    if (userEmailExists) {
      return res.status(409).send('E-mail already in use!');
    }

    const encryptedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS);

    const newChannel = await Channel.create({});

    const user = await User.create({
      username,
      // file deepcode ignore HTTPSourceWithUncheckedType: <please specify a reason of ignoring this>
      email: email.toLowerCase(),
      password: encryptedPassword,
      channel: newChannel._id,
    });

    // Create JWT token
    const token = jwt.sign(
      // user details which we would like to encrypt in JWT token
      {
        userId: user._id,
        email: user.email,
      },
      // secret
      process.env.TOKEN_KEY,
      // additional config
      {
        expiresIn: '8h',
      }
    );

    // Send success response back to the user with data of registered user and JWT
    return res.status(201).json({
      userDetails: {
        email: user.email,
        username,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error occurred, please try again.');
  }
};
