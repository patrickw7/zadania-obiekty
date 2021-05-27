const tableGenerator = {
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateIncTable(lng) {
    const newArr = [];
    for (let i = 0; i < lng; i++) {
      const randomNum = Math.floor(Math.random() * lng);
      newArr.push(randomNum);
    }
    return newArr;
  },
  generateRandomTable(lng, min, max) {
    const randomArr = [];
    for (let i = 0; i < lng; i++) {
      randomArr.push(this.randomNumber(min, max));
    }
    return randomArr;
  },
  generateTableFromText(str) {
    const arr = [];

    if (typeof str !== 'string') {
      return arr;
    }
    return str.split(' ');
  },
  getMaxFromTable(arr) {
    return Math.max.apply(null, arr);
  },
  getMinFromTable(arr) {
    return Math.min.apply(null, arr);
  },
  delete(arr, index) {
    return arr.splice(index, 1);
  },

};
