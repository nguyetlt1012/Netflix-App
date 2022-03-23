import axios from "axios";
const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjQ4YjZiNjRmMTQwMWIxYzYxMDJlYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzc4NDg0NiwiZXhwIjoxNjQ4MjE2ODQ2fQ.kKZiGkjQ63K3Jg7HmOnvwQbwNODbO5bG_kXEr40PJNY";
export default axios.create({
  baseURL: "http://localhost:8800/api/",
  headers: {
    token: `Bearer ${access_token}`
  },
});
