import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userEmailExists = await User.exists({ email });

    if (userEmailExists) {
      return res.status(409).send('E-mail already in use!');
    }

    const userNameExists = await User.exists({ username });

    if (userNameExists) {
      return res.status(409).send('Username already in use!');
    }

    const encryptedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // Create JWT token
    const token = jwt.sign(
      // user details which we would like to encrypt in JWT token
      {
        userId: user._id,
        email,
      },
      // secret
      process.env.TOKEN_KEY,
      // additional config
      {
        expiresIn: '8h',
      }
    );

    // Send succes response back to the user with data of registered user and JWT
    return res.status(201).json({
      userDetails: {
        email,
        username,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error occured, please try again.');
  }

  return res.send('user has been added to database');
};
