import Character from './Character.js';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }

  getChar() {
    return {
      name: this.name,
      type: 'Swordsman',
      health: this.health,
      level: this.level,
      attack: this.attack,
      defence: this.defence,
    };
  }
}
