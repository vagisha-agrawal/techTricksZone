import {atom} from "recoil";

const navigateState = atom({
    key: "navigateState",
    default: "",
});

export {navigateState}