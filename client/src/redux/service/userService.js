import axiosInstance from "../../config/axios";
import axios from "axios";

const userService = {
  getAllUsers: () => axiosInstance.get("/user"),

  //   loginUser: (userData) => axiosInstance.post("/user/login", userData),
  loginUser: (userData) =>
    axios.post("http://localhost:3001/user/login", userData),

  updateUser: (userData) => axiosInstance.put("/user/update", userData),

  deleteUser: (userId) => axiosInstance.delete(`/user/delete/${userId}`),

  signupUser: (userData) => axiosInstance.post("/user/signup", userData),
};

export default userService;
