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
