import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { getChannelsettings } from '../../api/api';

export const useChannelSettings = () => {
  const [channelSettings, setChannelSettings] = useState(null);

  const fetchChannelSettings = async () => {
    const response = await getChannelsettings();

    if (response.error) {
      return toast.error(
        response.exception?.response?.data ||
          'Error occured when fetching channel settings!'
      );
    }

    setChannelSettings({
      username: response.data.username,
      title: response.data.title,
      description: response.data.description,
      avatarUrl: response.data.avatarUrl,
      streamKey: response.data.streamKey,
    });
  };

  const saveSettings = async () => {
    //
  };

  useEffect(() => {
    fetchChannelSettings();
  });

  return {
    isFetching: !channelSettings,
    channelSettings,
    saveSettings,
  };
};
