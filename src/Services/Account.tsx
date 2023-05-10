import axios from 'axios';
const baseURl = 'https://2cpibackend.azurewebsites.net/api/Account';

export const registerMe = async (data: any) => {
  try {
    if (data) {
      const response = await axios.post(`${baseURl}/Register`, data);
      console.log(response);
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const logMe = async (data: any) => {
  try {
    const response = await axios.post(`${baseURl}/Authenticate`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const logOff = async () => {
  try {
    const response = await axios.get(`${baseURl}/LogOff`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
