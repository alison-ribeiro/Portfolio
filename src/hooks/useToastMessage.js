import { useState } from "react";


function useToastMessage(){
  const [toastMessage, setToastMessage] = useState({
    bg: "",
    message: "",
    isLoading: false,
    icon: '',
  });


  const handleToastMessage = (bg, message, isLoading, icon, timeout) => {
    setToastMessage({
      bg,
      message,
      isLoading,
      icon,
    });

    setTimeout(() =>{
      setToastMessage({
        ...toastMessage,
        isLoading: false
      })
    }, timeout);
  }
  return {toastMessage, handleToastMessage};
}

export default useToastMessage;
