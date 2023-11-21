import User from '../../models/User.js';

export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.exists({ email });

    if (userExists) {
      return res.status(409).send('E-mail already in use!');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error occured, please try again.');
  }

  return res.send('user has been added to database');
};
