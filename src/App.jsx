import React, { useEffect } from 'react';
import './App.css';
import Routers from './routers/Routers';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { toastState } from './state/AppAtom';
import { useRecoilState } from 'recoil';

function App() {
  const [showToast, setShowToast] = useRecoilState(toastState);

  useEffect(() => {
    if (!!showToast.message && !!showToast.type) {
      notify(showToast);
    }
  }, [showToast]);

  const notify = ({ type, message }) => {
    switch (type) {
      case "error":
        toast.error(message);
        break;
      case "success":
        toast.success(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      case "info":
        toast.info(message);
        break;
    }
  };

  return (
    <div className="App">
      
      <div className="w-full mt-1">
        <ToastContainer />
        <Routers />
      </div>
    </div>
  );
}

export default App;
