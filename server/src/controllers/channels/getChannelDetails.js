export const getChannelDetails = async (req, res) => {
  return res.status(200).json({
    id: 1,
    title: 'Channel',
    description: 'Dummy decription',
    username: 'Tibi',
    isOnline: false,
    streamUrl: 'http',
  });
};
