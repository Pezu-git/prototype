/* eslint-disable no-undef */

import Daemon from '../js/Daemon.js';
import Bowerman from '../js/Bowerman.js';
import Magician from '../js/Magician.js';
import Swordsman from '../js/Swordsman.js';
import Undead from '../js/Undead.js';
import Zombie from '../js/Zombie.js';
import Character from '../js/Character.js';

test('first test', () => {
  const daemon = new Daemon('Name', 'Daemon');
  const expectedDaemon = {
    name: 'Name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(expectedDaemon);
  const bowerman = new Bowerman('Name', 'Bowerman');
  const expectedBowerman = {
    name: 'Name',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowerman).toEqual(expectedBowerman);

  const magician = new Magician('Name', 'Magician');
  const expectedMagician = {
    name: 'Name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(expectedMagician);
  const swordsman = new Swordsman('Name', 'Swordsman');
  const expectedSwordsman = {
    name: 'Name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(expectedSwordsman);
  const undead = new Undead('Name', 'Undead');
  const expectedUndead = {
    name: 'Name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(expectedUndead);
  const zombie = new Zombie('Name', 'Zombie');
  const expectedZombie = {
    name: 'Name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(expectedZombie);
  function failCharacterName(a, b) {
    // eslint-disable-next-line no-new
    new Character(a, b);
  }
  expect(() => {
    failCharacterName('I', 'Daemon');
  }).toThrow('Не подходящее имя');

  function failCharacterClass(a, b) {
    // eslint-disable-next-line no-new
    new Character(a, b);
  }
  expect(() => {
    failCharacterClass('Name', 'daemon');
  }).toThrow('Не подходящее имя класса');
});
