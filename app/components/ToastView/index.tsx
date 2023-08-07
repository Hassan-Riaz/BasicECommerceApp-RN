import React from "react";
import Toast, { BaseToast, BaseToastProps } from "react-native-toast-message";

const ToastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    info: (props: BaseToastProps) => (
      <BaseToast {...props} style={{borderLeftColor: 'white'}} />
    ),
  };

const ToastView: React.FC = (props) => {
//@ts-ignore
    return <Toast config={ToastConfig} ref={Toast.ref} />
}

export default ToastView;