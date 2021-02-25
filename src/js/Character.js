/* eslint-disable no-constant-condition */
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    if (this.name.length <= 2 || this.name.length > 10) {
      this.getError('Не подходящее имя');
    } if (this.type !== 'Daemon' && this.type !== 'Bowerman' && this.type !== 'Swordsman' && this.type !== 'Magician' && this.type !== 'Undead' && this.type !== 'Zombie') {
      this.getError('Не подходящее имя класса');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getError(message) {
    try {
      throw new Error(message);
    } catch {
      console.error(message);
    }
  }
}
