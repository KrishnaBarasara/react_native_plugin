import { ToastAndroid, Platform, Alert } from 'react-native';

export const showToast = (message: string, type?: 'success' | 'error') => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert(type === 'error' ? 'Error' : 'Info', message);
  }
};
