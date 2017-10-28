const conn = require('./conn');
const { User, Level, Options } = require('./index').models;
const generateRandomAnimalName = require('random-animal-name-generator');

const seed = () => {
  return conn.sync({ force: true })
  .then(() => {
    return Promise.all([
     User.create({ name: generateRandomAnimalName(), color: '#000001'}),
     User.create({ name: generateRandomAnimalName(), color: '#AAABBB'})
    ])
  })
  .then(() => {
    let level1, level2;
    return Promise.all([
     Level.create({description: 'You enter a large clearing with 2 paths to take'}),
     Level.create({description: 'You go left and see a stream ahead of you'})
     ])
    .then(([_level1, _level2]) => {
      level1 = _level1;
      level2 = _level2;
    })
    .then(()=>{
      return Promise.all([
       //Level 1 Options
       Options.create({ description: 'Left', goToLevel: 2, answerText: 'You hear water to the left and decide to venture thataway' }),
       Options.create({ description: 'Right', goToLevel: 1, answerText: 'You follow the path to the right for some time until you realize... you\'re back at square one'}),
       //Level 2 Options
       Options.create({description: '1', goToLevel: 1, answerText: 'Wee'}),
       Options.create({ description: '2', goToLevel: 3, answerText: 'answer'}),
       Options.create({ description: '3', goToLevel: 2, answerText: 'anotherAnswer'}),
       Options.create({ description: '4', goToLevel: 3, answerText:'final answer'})
       ])
        //L1O2 = Level 1 Option 1
      .then(([L1O1, L1O2, L2O1, L2O2, L2O3, L2O4]) => {
        return Promise.all([
         level1.setOptions([L1O1, L1O2]),
         level2.setOptions([L2O1, L2O2, L2O3, L2O4])
        ])
      })

    })
  })
}

seed()
  .then(() => console.log('database synced!'))
  .then(() => conn.close());
