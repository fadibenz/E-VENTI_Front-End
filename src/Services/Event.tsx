import axios from 'axios';
const baseURl = 'https://2cpibackend.azurewebsites.net/api/Events';


export const getEventDetails = async (id: string, config: any ) => {
    try {
        const response = await axios.get(`${baseURl}/GetEventDetails?id=${id}`, config);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const createEvent = async (body:any, config: any) => {
  try {
    const response = await axios.post(
      `${baseURl}/CreateEvent`,
      body,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error.request.response);
  }
};


export const cancelEvent = async (id: string, config: any) => {
  try {
    const response = await axios.post(`${baseURl}/CancelEvent?id=${id}`,null, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const getEventList = async (id: string, config: any) => {
  try {
    const response = await axios.get(`${baseURl}/GetEventsList`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const getCategoryList = async (config: any) => {
  try {
    const response = await axios.get(`${baseURl}/CategoryList`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
