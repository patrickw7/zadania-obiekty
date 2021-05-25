// 1

const spaceShip = {
  name: 'Enterprise',
  currentLocation: 'Earth',
  flyDistance: 0,
  flyTo(place, distance) {
    this.currentLocation = place;
    this.flyDistance = distance;
  },
  showInfo() {
    console.log(`
    Informacje o statku:
    --------------------
    Statek ${this.name}
    doleciał do miejsca ${this.currentLocation}
    Statek przeleciał już całkowity dystans ${this.flyDistance}km
    `);
  },
  meetClingon() {
    const drawsNum = 100;
    let positive = 0;

    for (let i = 0; i < drawsNum; i++) {
      const randomNum = Math.floor(Math.random() * 2);
      if (randomNum > 0) {
        positive++;
      }
    }
    if (positive > (drawsNum / 2)) {
      console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
    } else {
      console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`);
    }
  },
};
spaceShip.flyTo("Mars", 1200);
spaceShip.showInfo();
spaceShip.meetClingon()