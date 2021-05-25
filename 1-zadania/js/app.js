// 1
const prod1 = {
  name: 'Gruszki',
  price: 7.99,
  weight: 1,
};

const prod2 = {
  name: 'Jabłka',
  price: 5.20,
  weight: 1,
};

console.log(`
Produkt numer jeden to: ${prod1.name}
Produkt numer dwa to: ${prod2.name}
Produkty razem kosztują ${(prod1.price + prod2.price).toFixed(2)} 
Produkty razem ważą ${prod1.weight + prod2.weight}kg`);

// 2
const currentUser = {
  name: 'Andrzej',
  surname: 'Kowalski',
  email: 'a.kowalski@hotmail.com',
  www: 'www.kowalski-architekt.com',
  userType: 'guest',
  show() {
    console.log(`Imie to: ${this.name}`);
    console.log(`Nazwisko to: ${this.surname}`);
    console.log(`Email kontaktowy to: ${this.email}`);
    console.log(`Strona ww to ${this.www}`);
    console.log(`Jego ranga to ${this.userType}`);
  },
};
currentUser.show();

// 3
const book = {
  title: 'Fraszki',
  author: 'Jan Kochanowski',
  pageCount: 179,
  publisher: 'Wydawnictwo Znak',
  showDetails() {
    for (const [key, value] of Object.entries(book)) {
      if (typeof value !== 'function') {
        console.log(key, value);
      }
    }
  },

};
