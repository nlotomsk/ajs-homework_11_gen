import Team from '../user';


test('Создание объекта', () => {
  const bowman = {
    name: 'Лучник',
    type: 'Bowman',
    attack: 40,
    level: 1,
    defence: 10,
    health: 100,
  };
  const swords = {
    name: 'Маг',
    type: 'Swordsman',
    attack: 20,
    level: 1,
    defence: 10,
    health: 100,
  };
  const zavmag = {
    name: 'ЗавМаг',
    type: 'ZavMag',
    attack: 40,
    level: 1,
    defence: 15,
    health: 100,
  };

  const team = new Team([bowman, swords, zavmag]);

  const result = [];

  for (const item of team) {
    result.push(item.next().value);
    result.push(item.next().value);
  }

  const correct = [
    {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Лучник',
      type: 'Bowman',
    },
    {
      attack: 20,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Маг',
      type: 'Swordsman',
    },
  ];

  expect(result).toEqual(correct);
});
