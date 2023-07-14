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

export const storeStartFetcher = async (startTime) => {
  try {
    const result = await fetch(`${SERVER_URL}/store/start`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startTime,
      }),
    });

    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.detail);
    }
  } catch (error) {
    throw new Error(error.message ?? "프로그램 시작 실패");
  }
};

export const storeEndFetcher = async () => {
  try {
    const result = await fetch(`${SERVER_URL}/store/end`, {
      method: "POST",
      credentials: "include",
    });

    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.detail);
    }
  } catch (error) {
    throw new Error(error.message ?? "프로그램 종료 실패");
  }
};
