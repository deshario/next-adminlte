import { atom } from "recoil";

export const deviceState = atom({
  key: "deviceState",
  default: "Xioami"
});

export const usersState = atom({
  key: 'usersState',
  default: []
})