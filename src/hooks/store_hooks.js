import useSwr from "swr";
import { SERVER_URL } from "../const/const";

const storeFetcher = (url) =>
  fetch(url, {
    credentials: "include",
  }).then((res) => res.json());

export function useStore() {
  const { data, error, isLoading, mutate } = useSwr(
    `${SERVER_URL}/store`,
    storeFetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export const addMemoFetcher = async (memo) => {
  try {
    const result = await fetch(`${SERVER_URL}/store/memo`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memo,
      }),
    });

    const data = await result.json();

    if (!result.ok) {
      throw new Error(data.detail || "메모 추가 실패");
    }
  } catch (error) {
    throw new Error(error.message || "메모 추가 실패");
  }
};

export const deleteMemoFetcher = async (index) => {
  try {
    const result = await fetch(`${SERVER_URL}/store/memo`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        index,
      }),
    });

    const data = result.json();

    if (!result.ok) {
      throw new Error(data.detail || "메모 삭제 실패");
    }
  } catch (error) {
    throw new Error(error.message || "메모 삭제 실패");
  }
};
