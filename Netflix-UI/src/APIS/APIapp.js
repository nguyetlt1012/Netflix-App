import axios from "axios";
const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjQ4YjZiNjRmMTQwMWIxYzYxMDJlYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjcwOTM5MSwiZXhwIjoxNjQ3MTQxMzkxfQ.qi-dwXmpkr1J2QJl9reKq24adOlh2uwbdgwTrNsSAwU";
export default axios.create({
  baseURL: "http://localhost:8800/api/",
  headers: {
    token: `Bearer ${access_token}`,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
