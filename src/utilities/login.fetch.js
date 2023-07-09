import { SERVER_URL } from "../const/const";

export async function loginFetch(storeId, storePassword) {
  try {
    const result = await fetch(`${SERVER_URL}/store/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        storeId,
        storePassword,
      }),
    });

    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.detail);
    }

    return data;
  } catch (error) {
    // error handling.
    throw new Error(error.message);
  }
}
