import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmRhMzFmZWU2Y2NhM2M2OTRmYmI3NiIsImlhdCI6MTY1NjY2NTk3NCwiZXhwIjoxNjU2OTI1MTc0fQ.Ts6UuXhR5V70-BB64vZ19O4KGTdn3uHT5lDDCBuP5vs";

export const pubRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
//
