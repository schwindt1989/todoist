import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.todoist.com/rest/v2/",
  headers: {
    Authorization: `Bearer dfc2acb58c862fd47f3df1db9ac2f71c7965ff25`,
  },
});

export default instance;
