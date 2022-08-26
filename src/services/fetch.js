let backEndURL = "http://localhost:3000";

console.log(backEndURL);

if (process.env.NODE_ENV !== "development") {
  backEndURL = "https://play-up-back-end.herokuapp.com";
}

export default function playUpFetch(url, configObj) {
  return fetch(backEndURL + url, configObj);
}
