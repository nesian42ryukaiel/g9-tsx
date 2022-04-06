import axios from "axios";
import { pServerLink } from "../pseudoLinks/links";

export default async function registerMember(id, pw, name, doSignup) {
  const newmem = {
    [id]: {
      id: id,
      pw: pw,
      name: name,
    },
  };
  console.log(newmem);
  console.log(typeof newmem);
  try {
    const res = await axios.post(pServerLink + "/auth", newmem);
    doSignup[0] = true;
    console.log(res.data);
    console.log("New member!");
  } catch (error) {
    console.log(error);
    doSignup[0] = false;
  }
}
