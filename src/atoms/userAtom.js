import {atom} from 'recoil';

const userAtom = atom({
  key:"userAtom",
  default: JSON.parse(localStorage.getItem("bms-user"))
})

export default userAtom;