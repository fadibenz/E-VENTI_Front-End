import axios from 'axios';
const baseURl = 'https://2cpibackend.azurewebsites.net/api/Users';

export const followUser = async (id: string, config: any) => {
  try {
    const response = await axios.post(
      `${baseURl}/FollowUser?subjectId=${id}`,
      null,
      config
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const unfollowUser = async (id: string, config: any) => {
  try {
    const response = await axios.post(
      `${baseURl}/UnfollowUser?subjectId=${id}`,
      null,
      config
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = async (id: string, config: any) => {
  try {
    const response = await axios.get(
      `${baseURl}/GetUserDetails?subjectId=${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFollowersList = async (id: string, config: any) => {
  try {
    const response = await axios.get(
      `${baseURl}/FollowersList?userId=${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const getFollowingList = async (id: string, config: any) => {
  try {
    const response = await axios.get(
      `${baseURl}/FollowingList?userId=${id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const updateUser= async ( config: any, data: any) => {
  try {
    const response = await axios.put(
      `${baseURl}/UpdateUserProfile`,
      data ,config
    );
    console.log(response)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

