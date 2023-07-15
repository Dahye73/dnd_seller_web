import { SERVER_URL } from "../const/const";

export const uploadProduct = async (formData) => {
  try {
    const response = await fetch(`${SERVER_URL}/store/item`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (storeId, menuName) => {
  try {
    const file_name = storeId + "_" + menuName;
    const response = await fetch(`${SERVER_URL}/store/item/${file_name}`, {
      method: "POST",
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

// export const uploadProduct = async (formData) => {
//     try {
//       const response = await fetch("http://172.31.99.48:8000/store/item/`, {
//         method: "GET",
//         body: formData,
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   };
