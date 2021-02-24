// eslint-disable-next-line import/no-cycle
import Character from './Character.js';

export default class Bowerman extends Character {
  getChar() {
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;

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
