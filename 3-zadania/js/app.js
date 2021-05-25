const book = {
  users: [],
  addUser(name, age, phone) {
    const user = { name, age, phone };
    this.users.push(user);
  },
  showUsers() {
    console.log('Wszyscy użytkownicy w książce');
    this.users.forEach((user) => console.log(user));
  },
  findByName(name) {
    return this.users.find((user) => (user.name === name));
  },
  findByPhone(phone) {
    return this.users.find((user) => (user.phone === phone));
  },
  getCount() {
    console.log(`W tabeli jest: ${this.users.length} uzytkownikow`);
  },
};
