export const createCard = (parent, countryName, countryCapital) => {
  const div = document.createElement("div");
  div.className = "card";
  const heading = document .createElement("h3");
  const nameText = document.createTextNode(countryName);
  heading.appendChild(nameText);
  const para = document.createElement("p");
  const capitalText =document.createTextNode(countryCapital);
  para.appendChild(capitalText);
  div.appendChild(heading);
  div.appendChild(para);
  parent.appendChild(div);
};