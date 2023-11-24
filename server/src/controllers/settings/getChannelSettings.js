import User from '../../models/User.js';

export const getChannelSettings = async (req, res) => {
  try {
    const { userId } = req.user;

    console.log(userId);

    return res.status(200).send('this route is secured');
  } catch (error) {
    return res.status(500).send('Something went wrong!');
  }
};
