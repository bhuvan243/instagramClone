import { notification } from "antd";
import { Endpoints } from "../../network/Endpoints";
import axios from "axios";

export async function fetchAllUsers() {
  const token = localStorage.getItem("token");
  try {
    const response = await axios({
      url: Endpoints.users,
      method: "GET",
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
    // response.status => 401 | 403
    const users = response.data.result;
    return { success: true, data: users };
  } catch (error) {
    const status = error?.response?.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return { success: false, redirect: true };
    }
    notification.error({
      message: "Failed to fetch users",
      description: error.message,
    });
    return { success: false };
  }
}
