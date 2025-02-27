import {atom} from "recoil";

const navigateState = atom({
    key: "navigateState",
    default: "",
});

const toastState = atom({
  key:'toastState',
  default:{}
})

export {navigateState, toastState}