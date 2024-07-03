import {atom} from 'recoil';

const authScreenAtom = atom({
  key:"authScreens",
  default:"Signup"
})

export default authScreenAtom;