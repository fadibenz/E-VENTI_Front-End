import axios from 'axios';
import { getEventDetails } from './Event';
const baseURl = 'https://2cpibackend.azurewebsites.net/api/Subscriptions';

export const subscribeList = async (id: string, config: any) => {
  try {
    const response = await axios.get(
      `${baseURl}/SubscribersList?eventId=${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const subscribe = async (id: string, config: any) => {
  try {
    const response = await axios.post(
      `${baseURl}/Subscribe?eventId=${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const Unsubscribe = async (id: string, config: any) => {
  try {
    const response = await axios.post(
      `${baseURl}/Unsbscribe?eventId=${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveEvent = async (id: string, config: any) => {
  try {
    const response = await axios.post(
      `${baseURl}/SaveEvent?eventId=${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const unsaveEvent = async (id: string, config: any) => {
  try {
    const response = await axios.post(
      `${baseURl}/UnsaveEvent?eventId=${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const organizedList = async (id: string, config: any) => {
  try {
    const response = await axios.get(
      `${baseURl}/OrganizedEventList?eventId=${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSavedList = async (config: any) => {
  try {
    const response = await axios.get(`${baseURl}/SavedEventsList`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const organizedEventList = async (id: string, config: any) => {
  try {
    const response = await axios.get(
      `${baseURl}/OrganizedEventList?Id=${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
