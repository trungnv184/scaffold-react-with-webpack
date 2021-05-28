export default () => {
  const div = document.createElement("div");
  const image = document.createElement("img");
  image.src = "https://picsum.photos/seed/picsum/200/300";
  image.width = 200;
  image.height = 300;

  div.style.cssText = "border: 1px solid red; width: 100%; heigh: 300px; margin-top: 16px";
  div.appendChild(image);

  document.body.appendChild(div);
};
