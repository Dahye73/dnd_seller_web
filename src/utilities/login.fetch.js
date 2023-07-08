import { SERVER_URL } from "../const/const";

export async function loginFetch({ id, password }) {
  const result = await fetch(`${SERVER_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, password }),
  });
}
