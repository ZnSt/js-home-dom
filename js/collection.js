const colorPickerOprion = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#F4CAF5" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D83" },
  { label: "pink", color: "#5678D5" },
  { label: "indigo", color: "#987H56" },
];

const colorPickerContEl = document.querySelector(".js-color-picker");

// const elements = colorPickerOprion.map((option) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   return buttonEl;
// });
// console.log(elements);

// // OLDSKOOOL
// for (let i = 0; i < colorPickerOprion.length; i += 1) {
//   const option = colorPickerOprion[i];

//   const buttonEl = document.createElement("button");
//   buttonEl.type = "button";
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   elements.push(buttonEl);
// }

// const makeColorPickerOptions = (options) => {
//   return options.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.type = "button";
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     return buttonEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOprion);
// colorPickerContEl.append(...elements);
