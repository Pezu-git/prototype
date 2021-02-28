/* eslint-disable no-constant-condition */
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    if (this.name.length <= 2 || this.name.length > 10) {
      throw new Error('Не подходящее имя');
    }
    if (this.type !== 'Daemon' && this.type !== 'Bowerman' && this.type !== 'Swordsman' && this.type !== 'Magician' && this.type !== 'Undead' && this.type !== 'Zombie') {
      throw new Error('Не подходящее имя класса');
    }
  }
}
