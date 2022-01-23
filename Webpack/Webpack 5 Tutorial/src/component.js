import logo from './logo.svg';

function component() {
  // create HTML elements
  let mainUI = document.createElement('main');
  let paragraphUI = document.createElement('p');
  let imgUI = document.createElement('img');

  // append elements onto mainUI elemnt that you going to return.
  mainUI.append(paragraphUI);
  paragraphUI.append(imgUI);

  // set the image elements source and alternative properties.
  imgUI.src = logo;
  imgUI.alt = `svg - logo`;

  return mainUI;
}

export default component;
