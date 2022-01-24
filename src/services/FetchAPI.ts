import axios from 'axios';

/**
 * This service allows us to have a scalable solution to fetching resources.
 * Meaning it can be used anywhere to fetch any resource, not just a single one.
 */
const FetchAPI = {
  get: async (url: string, params?: object) => {
    const response = await axios.get(url, { params });
    return response.data;
  },
};

export default FetchAPI;
