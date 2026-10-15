import { PermissionsAndroid, Platform, Linking } from 'react-native';

export const checkPermission = async (permission: any) => {
  if (Platform.OS === 'android') {
    return await PermissionsAndroid.check(permission);
  }
  return true;
};

export const requestPermission = async (permission: any) => {
  if (Platform.OS === 'android') {
    const result = await PermissionsAndroid.request(permission);
    return result === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
};

export const openSettings = () => Linking.openSettings();
