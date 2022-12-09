import AsyncStorage from '@react-native-async-storage/async-storage';

// export const USER_OBJECT = 'USER_OBJECT';
// export const USER_TOKEN = 'USER_TOKEN';
export const DISCLAIMER_SATSTUS = 'DISCLAIMER_SATSTUS'; //true acceted false not accpeted yet
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const CORELATION_ID = 'CORELATION_ID';

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    // saving error
    return false;
  }
};

export const readData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    return null;
    // error reading value
  }
};

export const clearAsynStorage = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e) {
    // saving error
    return false;
  }
};
