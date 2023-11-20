import User from '../../models/User.js';

export const postRegister = async (req, res) => {
  const user = await User.create({
    username: 'John',
    email: 'test@test.com',
    password: '123456',
  });

  return res.send('user has been added to database');
};
