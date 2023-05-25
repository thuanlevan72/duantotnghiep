import React, { useState } from "react";
import axios from "axios";

const Product = () => {
  const [registerData, setRegisterData] = useState({
    userName: "123",
    avatar: null,
    password: "123",
    status: 0,
    decentralizationId: 0,
  });

  const handleInputChange = (event) => {
    if (event.target.name === "avatar") {
      setRegisterData({
        ...registerData,
        avatar: event.target.files[0],
      });
    } else {
      setRegisterData({
        ...registerData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    console.log()
    formData.append("userName", registerData.userName);
    formData.append("Avatar", registerData.avatar);
    formData.append("password", registerData.password);
    formData.append("status", registerData.status);
    formData.append("decentralizationId", registerData.decentralizationId);

    axios
      .post("https://localhost:7064/api/Login/register-user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Xử lý phản hồi từ API
        console.log(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        value={registerData.userName}
        onChange={handleInputChange}
      />
      <input type="file" name="avatar" onChange={handleInputChange} />
      <input
        type="password"
        name="password"
        value={registerData.password}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="status"
        value={registerData.status}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="decentralizationId"
        value={registerData.decentralizationId}
        onChange={handleInputChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Product;
