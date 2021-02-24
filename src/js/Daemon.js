// eslint-disable-next-line import/no-cycle
import Character from './Character.js';

export default class Daemon extends Character {
  getChar() {
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;

    return {
      name: this.name,
      type: 'Deamon',
      health: this.health,
      level: this.level,
      attack: this.attack,
      defence: this.defence,
    };
  }
}
