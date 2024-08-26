import {  toast } from "../../methods";
// import { errors } from "../../constants";
export default function handleErrors(error) {
  console.log(error?.response);
  const response = error?.response;
  if (!response) return toast({ text: "Network error", type: "error" });
  const message = response?.data?.errors?.message;
  // const errorCode = response.data.code;
  const isPaymentError = response?.status === 504;
  if (isPaymentError) return;
  if (response?.status === 141) logout(true);
  if(message) toast({ text : message , type: "error" });
    
  // const text = errors[errorCode];
  // if (text) return toast({ text, type: "error" });
}