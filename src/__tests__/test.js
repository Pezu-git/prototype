/* eslint-disable no-undef */

// import '../js/app.js';
import '../js/Character.js';
import '../js/Bowerman.js';
import '../js/Swordsman.js';
import '../js/Magician.js';
import '../js/Daemon.js';
import '../js/Undead.js';
import '../js/Zombie.js';
// import Character from '../js/Character.js';
// import Swordsman from '../js/Swordsman.js';

test('first test', () => {
  expect(new Character('dds', 'Deamon')).toBe({
    name: 'dds',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
  expect(new Bowerman('dds', 'Bowerman')).toBe({
    name: 'dds',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
  expect(new Magician('dds', 'Magician')).toBe({
    name: 'dds',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
  expect(new Swordsman('dds', 'Sworsman')).toBe({
    name: 'dds',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
  expect(new Undead('dds', 'Undead')).toBe({
    name: 'dds',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
  expect(new Zombie('dds', 'Zombie')).toBe({
    name: 'dds',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
