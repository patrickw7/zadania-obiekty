class Car {
  constructor(name, brand, engine, mile, age) {
    this.name = name;
    this.brand = brand;
    this.engine = engine;
    this.mile = mile;
    this.age = age;
  }

  printDetails() {
    console.log(`
    -----------------------
    Nazwa samochodu to ${this.name},
    Marka samochodu to ${this.brand},
    Silnik o mocy ${this.engine},
    Przejechał już ${this.mile} mili,
    Wiek samochodu to ${this.age} lat
    `);
  }
}

const fiat = new Car('Punto', 'Fiat', 'renault', 612, 5);
console.log(fiat);

// 2
class Enemy {
  constructor(name, live, speed, attack, posX) {
    this.name = name;
    this.live = live;
    this.speed = speed;
    this.attack = attack;
    this.posX = posX;
  }

  move() {
    console.log(`Jestem ${this.name} i znajduje się na pozycji ${this.posX - this.speed}`);
  }

  attackEnemy(player) {
    console.log(`Jestem ${this.name} i atakuje gracza ${player.name} z pozycji ${player.posX} z siłą ${this.attack}`);
  }

  hit(player) {
    const enemy = player;
    if (player.live <= 0) {
      console.log(`Przeciwnik o imieniu ${enemy.name} właśnie zginął z rąk ${this.name}`);
    } else {
      console.log(`Jestem ${this.name} i uderzam gracza ${player.name} (teraz ma ${enemy.live--} zycia)`);
    }
  }
}

const zombie = new Enemy('Zombie', 5, 2, 20, 30);
const shadow = new Enemy('Shadow', 5, 30, 10, 60);
shadow.move();
shadow.attackEnemy(zombie);
shadow.hit(zombie);

// 3
class Slider {
  constructor(type, slideCount, currentSlide) {
    this.type = type;
    this.slideCount = slideCount;
    this.currentSlide = currentSlide;
  }

  showSlide() {
    console.log(`Obecnie mamy ${this.currentSlide}`);
  }

  nextSlide() {
    this.currentSlide++;

    if (this.currentSlide > this.slideCount) {
      this.currentSlide = 0;
    }
    this.showSlide();
  }

  prevSlide() {
    this.currentSlide--;

    if (this.currentSlide < 0) {
      this.currentSlide = this.slideCount;
    }
    this.showSlide();
  }
}

class SliderAnime extends Slider {
  constructor(slideCount, currentSlide) {
    super();
    this.type = 'animated';
    this.slideCount = slideCount;
    this.currentSlide = currentSlide;
  }

  animate() {
    console.log(`Animuje slide ${this.currentSlide}`);
  }
}

const travelBanner = new Slider('travel', 5, 1);
travelBanner.nextSlide();

const sportBanner = new SliderAnime(4, 1);
sportBanner.animate();
