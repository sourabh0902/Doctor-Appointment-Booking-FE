const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API;

const BLOG_API_KEY = process.env.NEXT_PUBLIC_BLOG_API;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = async () => {
  try {
    const response = await axiosClient.get("categories?populate=*");
    return response.data;
  } catch (error) {
    console.error(`Error fetching Categories`, error);
    throw error;
  }
};

const getDoctor = async () => {
  try {
    const response = await axiosClient.get("doctors?populate=*");
    return response.data;
  } catch (error) {
    console.error(`Error fetching Categories`, error);
    throw error;
  }
};

const getDoctosByCategory = async (category) => {
  try {
    const response = await axiosClient.get(
      `doctors?filters[categories][Name][$in]=${category}&populate=*`
    );
    return response.data;
  } catch (error) {
    console.error("Error Fetching the desired doctor by category", error);
    throw error;
  }
};

const getDoctorsById = async (id) => {
  try {
    const response = await axiosClient.get(`doctors/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error("Error Fetching the desired doctor by ID", error);
    throw error;
  }
};

const getBlogs = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=3&apiKey=${BLOG_API_KEY}`
    );
    // const response = await axios.get(
    //   `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
    // );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error Fetching the Blogs", error);
    throw error;
  }
};

const bookAppointment = async (data) => {
  try {
    const response = await axiosClient.post("appointments", data);
    return response.data;
  } catch (error) {
    console.error("Error Creating the Appointment", error);
    throw error;
  }
};

const sendEmail = async (data) => {
  try {
    const response = await axios.post("/api/sendEmail", data);
    return response.data;
  } catch (error) {
    console.error("Error Sending the Email", error);
    throw error;
  }
};

const getUserAppointList = async (userEmail) => {
  try {
    const response = await axiosClient.get(
      `appointments?filters[Email][$eq]=${userEmail}&populate[doctor][populate][Image][populate][0]=url&populate=*`
    );
    return response.data;
  } catch (error) {
    console.error("Error Fetching the User Appointment List", error);
    throw error;
  }
};

const deleteAppointments = async (id) => {
  try {
    const response = await axiosClient.delete(`appointments/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error Deleting the User Appointment", error);
  }
};

export default {
  getCategory,
  getDoctor,
  getDoctosByCategory,
  getDoctorsById,
  getBlogs,
  bookAppointment,
  sendEmail,
  getUserAppointList,
  deleteAppointments,
};
