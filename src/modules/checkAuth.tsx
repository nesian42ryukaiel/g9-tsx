import axios from "axios";
import Base64 from "./Base64";
import { pServerLink } from "../pseudoLinks/links";

export default function checkAuth(id, pw, name, auth) {
  const tok = id + ":" + pw + ":" + name;
  const hash = Base64.encode(tok);
  const Basic = "Basic " + hash;
  return axios
    .get(pServerLink + "/auth", { headers: { Authorization: Basic } })
    .then((res) => {
      auth[0] = res.data[0];
      auth[1] = res.data[1];
      auth[2] = res.data[2];
    });
}
