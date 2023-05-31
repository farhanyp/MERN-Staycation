import axios from "axios";

export const numberFormat = (number) => {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
};

export const toMostPicked = (value) => {
  console.log(value);
  window.scrollTo({
    top: value,
    behavior: "smooth",
  });
};

export const callApiLandingPage = () => {
  axios.get('http://localhost:3001/api/v1/member/landing-page').then((res) => console.log(res))
}
