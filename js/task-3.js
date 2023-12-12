'use strict';

function getElementWidth(content, padding, border) {
  // для отримання наведеного нижче результату, спочатку потрібно перетворити допустимі символи у числа.
  let contentWidth = Number.parseFloat(content);
  // тут дійсно пропустила момент із плаваючою крапкою - виправила.
  let paddingWidth = Number.parseFloat(padding);
  let borderWidth = Number.parseFloat(border);
  // після чого проводимо математичні дії для отримання необхідного результату.
  return contentWidth + paddingWidth * 2 + borderWidth * 2;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
