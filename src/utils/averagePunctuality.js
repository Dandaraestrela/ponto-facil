export const getAveragePunctuality = (punctualityList) => {
  let sumPunctuality = 0;

  punctualityList.forEach((element) => {
    sumPunctuality += 100 - Number.parseInt(element.percentualPontualidade);
  });

  return sumPunctuality / punctualityList.length;
};
