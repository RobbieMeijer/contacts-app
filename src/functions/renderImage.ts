const renderImage = (name: string) => {
  const imageObject = require(`../assets/${name}.svg`);
  return imageObject.default;
};

export default renderImage;
