import { notification } from "antd";
import axios from "axios";
import { Endpoints } from "../network/Endpoints";

export async function login(formData) {
  try {
    const response = await axios({
      url: Endpoints.login,
      method: "POST",
      data: formData,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    notification.success({
      message: "Login Success",
      description: "You're login successful",
    });

    return { success: true };
  } catch (error) {
    notification.error({
      message: "Login Failed",
      description: "Login Failed ! Please try again",
    });
    return { success: false };
  }
}

export async function signup(formData) {
  try {
    await axios({
      url: Endpoints.signup,
      data: formData,
      method: "POST",
    });
    notification.success({
      message: "Signup Success",
      description: "Your signup is success, you can login now..",
    });
    return { success: true };
  } catch (error) {
    notification.error({
      message: "Signup Failed",
      description: "Signup Failed please try again...",
    });
    return { success: false };
  }
}
