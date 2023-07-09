import Team from './user';

const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  level: 1,
  attack: 40,
  defence: 10,
  health: 100,
};
const swordsman = {
  name: 'Маг',
  type: 'Magiciann',
  attack: 20,
  level: 1,
  defence: 10,
  health: 100,
};
const daemon = {
  name: 'Демон',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 40,
  defence: 15,
};

const team = new Team([bowman, swordsman, daemon]);

for (const item of team) {
  console.log(item.next().value);
  console.log(item.next().value);
}
