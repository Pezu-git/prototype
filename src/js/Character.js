
// eslint-disable-next-line import/no-cycle
import Daemon from './Daemon.js';

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Не подходящее имя');
    }
    this.getChar();
  }

  getChar() {
    if (this.type === 'Daemon') {
      const deamon = new Daemon(this.name, this.type);
      deamon.getChar();
    }
  }
}
