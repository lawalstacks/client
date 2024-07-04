import {atom} from 'recoil';

const authScreenAtom = atom({
  key:"authScreens",
  default:"Login"
})

export default authScreenAtom;