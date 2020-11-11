import  axios from "axios"

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
         'Bearer ngpOvzgcKTMHwWdE5G2kdsPd2q3zb9ZxHtuJ5Qb0jU87--UlKMebky3-Tped8VURmxErCOeU5VkV-tDtRz2Ck5FvRLsnGeLMa3mvTzTRoEuNnAJvtg2-jEm9s8JDX3Yx'

    }
});

