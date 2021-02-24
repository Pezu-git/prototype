import Character from './Character.js';

export default class Zombie extends Character {
  getChar() {
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;

    return {
      name: this.name,
      type: 'Zombie',
      health: this.health,
      level: this.level,
      attack: this.attack,
      defence: this.defence,
    };
  }
}
