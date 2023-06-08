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

export const fetchDataLandingPage = async () => {
    try {
      const response = await axios.get('https://mern-staycation-server.vercel.app/api/v1/member/landing-page');
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error);
    }
  };

