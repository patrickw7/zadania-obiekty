const text = {
  check(txt, word) {
    if (txt.includes(word)) {
      return true;
    } return false;
  },
  getCount(txt) {
    return txt.length;
  },
  getWordsCount(txt) {
    return txt.split(' ').length;
  },
  getCapitalize(txt) {
    const wordArr = txt.split(' ');
    const capitalizeWordsArr = wordArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    const newString = capitalizeWordsArr.join(' ').toString();

    return newString;
  },
  setMix(txt) {
    const letterArr = txt.split('');
    const evenLettersToCapitalArr = letterArr.map((letter, i) => (i % 2 === 0 ? letter.toUpperCase() : letter.toLocaleLowerCase()));
    const changedToString = evenLettersToCapitalArr.join('').toString();
    return changedToString;
  },
  generateRandom(lng) {
    const letterArr = ['a', 'b', 'x', 'd', 'f', 'r', 'q', 'p', 'o', 'c', 'l', 'i'];
    let word = '';

    for (let i = 0; i < lng; i++) {
      const index = Math.floor(Math.random() * letterArr.length);
      word += letterArr[index];
    }
    return word;
  },
};
