import Channel from '../../models/Channel.js';

export const emitChatHistory = async (socket, channelId) => {
  try {
    const channel = await Channel.findById(channelId).populate('messages');

    if (channel) {
      return socket.emit('chat-history', {
        channelId,
        messages: channel.messages.map((msg) => ({
          author: msg.author,
          content: msg.content,
        })),
      });
    }

    socket.emit('chat-history', {
      errorOccured: true,
    });
  } catch (error) {
    console.log(error);
    socket.emit('chat-history', {
      errorOccured: true,
    });
  }
};
