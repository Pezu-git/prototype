import Character from './Character.js';

export default class Bowerman extends Character {
  // eslint-disable-next-line class-methods-use-this
  upp() {
    console.log('dfs');
  }
}
const Bowman = new Bowerman();
Bowman.upp();
