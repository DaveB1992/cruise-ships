function Controller() {
  this.initialiseSea();
}

Controller.prototype.initialiseSea = function initialiseSea() {
  const backgrounds = ['../css/images/water0.png', '../css/images/water1.png'];
  let backgroundIndex = 0;
  window.setInterval(() => {
    document.querySelector('#viewport').style.backgroundImage = `url('${
      backgrounds[backgroundIndex % backgrounds.length]
    }')`;
    backgroundIndex += 1;
  }, 1000);
};
