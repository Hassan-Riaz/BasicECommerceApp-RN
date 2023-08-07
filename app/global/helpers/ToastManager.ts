import Toast from 'react-native-toast-message';

export const ToastManager = {
  showSuccessToast(title: string, description: string) {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: title,
      text2: description,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  },
  showErrorToast(title: string, description: string) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: title,
      text2: description,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  },
  showInformationToast(title: string, description: string) {
    Toast.show({
      type: 'info',
      position: 'top',
      text1: title,
      text2: description,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
  },
};

export default ToastManager;
