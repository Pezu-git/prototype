import Character from './Character.js';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }

  getChar() {
    return {
      name: this.name,
      type: 'Magician',
      health: this.health,
      level: this.level,
      attack: this.attack,
      defence: this.defence,
    };
  }
}
