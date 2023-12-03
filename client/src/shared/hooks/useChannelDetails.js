import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { getChannelDetails as getChannelDetailsRequest } from '../../api/api';

export const useChannelDetails = () => {
  const { channelDetails, setChannelDetails } = useState(null);

  const getChannelDetails = async (id) => {
    const responseData = getChannelDetailsRequest(id);

    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          'Error occured when fetching channel details!'
      );
    }

    setChannelDetails(response.data);
  };

  return {
    channelDetails,
    isFetching: !channelDetails,
    getChannelDetails,
  };
};
