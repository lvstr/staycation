import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function errorResponseHandler(error) {
  if (error) {
    let message;
    if (error.message) {
      if (error.message.status === 500) message = "Soemthing Went Wrong";
      else message = error.message;
      console.log(message);
      toast(message);
      return Promise.reject(error);
    }
  }
}

export default errorResponseHandler;
