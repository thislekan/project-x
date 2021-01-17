export const navigateToBackend = (route) => {
  const { REACT_APP_BACKEND_URL } = process.env;
  const condition = route.startsWith("/");
  window.location.href = condition
    ? `${REACT_APP_BACKEND_URL}${route}`
    : `${REACT_APP_BACKEND_URL}/${route}`;
};

export const requestFn = async ({ url, method, body, headers }) => {
  try {
    const apiCall = await fetch(url, { method, body, headers });
    const feedback = await apiCall.json();
    return feedback;
  } catch (error) {
    return error;
  }
};
