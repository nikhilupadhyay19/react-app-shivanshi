import { TimeOut_Sec } from './config';

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(`Request is taking too long... More than ${s} seconds...`);
    }, s * 1000);
  });
};

export const getJson = async (url, errMsg = 'Something went wrong...') => {
  try {
    const res = await Promise.race([fetch(url), timeout(TimeOut_Sec)]);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`${errMsg} ,,, ${res.status} ,,, ${data.message}`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};

export const promisifyGeoLocationAPI = () => {
  return new Promise((resolve, reject) => {
    return Geolocation.getCurrentPosition(
      (success) => {
        return resolve(success);
      },
      (error) => {
        return reject(error);
      }
    );
  });
};
