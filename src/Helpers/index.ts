import { Buffer } from 'buffer';
// import inherits from 'inherits';


export const getDate = (dateAndTime: string) => {
  const date = new Date(dateAndTime);
  // Get date components
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  // Get time components
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const dateData = {
    day: day,
    month: month.toString().substring(0,4),
    time: `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`,
  };
  return dateData;
};


function base64Decode(str:string) {
  const base64Url = str.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}

export function getExpirationTime(token : string) {
  const payload = base64Decode(token);
  if (payload && payload.exp) {
    return new Date(payload.exp * 1000);
  }
  return null;
}


