export default class Team {
  constructor(characters) {
    this.characters = characters;
  }

  // это генератор
  // и здесь есть доступ к this
  // остаётся лишь правильно написать yield

  * [Symbol.iterator]() {
    let i = 0;
    const chars = this.characters;
    for (i = 0; i < chars.length; i += 1) {
      yield chars[i];
    }
  }
}
