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


export const cancelEvent = async (id: string, config: any) => {
  try {
    const response = await axios.post(`${baseURl}/CancelEvent?id=${id}`, config);
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

