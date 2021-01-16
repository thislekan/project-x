import { ApiParams } from "./type";

export const navigateToBackend = (route: string) => {
  const { BACKEND_URL } = process.env;
  const condition = route.startsWith("/");
  window.location.href = condition ? `${BACKEND_URL}${route}` : `${BACKEND_URL}/${route}`;
};

export const requestFn = async ({ url, method, body, headers }: ApiParams) => {
  try {
    const apiCall = await fetch(url, { method, body, headers });
    const feedback = await apiCall.json();
    return feedback;
  } catch (error) {
    return error;
  }
};
