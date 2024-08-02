import { toast } from 'react-hot-toast';
import { followChannel as followChannelRequest } from '../../api';

export const useFollowChannel = () => {
  const followChannel = async (channelId, onSucces) => {
    const responseData = await followChannelRequest(channelId);

    if (responseData.error) {
      return toast.error(responseData.exception?.response?.data || 'Error occured when trying to follow the channel!');
    }

    toast.success('Channel followed successfully.');

    onSucces(true);
  };

  return {
    followChannel,
  };
};
