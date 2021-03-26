import axios from "axios";

const fetchApi = async (urlName, data) => {
  try {
    if (urlName === "delete") {
      let response = await axios.delete(`http://localhost:8000/${urlName}`, {
        withCredentials: true,
      });
      return response;
    } else if (urlName === "logout") {
      let response = await axios.post(`http://localhost:8000/${urlName}`, {
        withCredentials: true,
      });
      return response;
    } else {
      let response = await axios.post(
        `http://localhost:8000/${urlName}`,
        data,
        { withCredentials: true }
      );
      return response;
    }
  } catch (error) {
    return error.response;
  }
};

export default fetchApi;
