const themeInit = () => {
  const themeLocalStorage = window.localStorage.getItem("theme");
  if (themeLocalStorage) {
    return themeLocalStorage;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default themeInit;
