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
    let level1, level2, level3;
    return Promise.all([
     Level.create({description: 'You enter a large clearing with 2 paths to take'}),
     Level.create({description: 'You go left and see a stream ahead of you'}),
     Level.create({description: 'You land not-so-gracefully and see a lonely looking Flamingo staring at you up a small hill to the left. You also, just barely, hear the sound of a train off in the distance to the right.'})
     ])
    .then(levels => {
      level1 = levels[0];
      level2 = levels[1];
      level3 = levels[2];
    })
    .then(()=>{
      return Promise.all([
       //Level 1 Options
       Options.create({ description: 'Left', goToLevel: 2, answerText: 'You hear water to the left and decide to venture thataway' }),
       Options.create({ description: 'Right', goToLevel: 1, answerText: 'You follow the path to the right for some time until you realize... you\'re back at square one'}),
       //Level 2 Options
       Options.create({description: 'Jump in!', goToLevel: 1, answerText: 'You hop in and immediately realize "This was a mistake." The current pulls you quickly until you end up... at a familiar looking clearing'}),
       Options.create({ description: 'Sit and contemplate', goToLevel: 2, answerText: 'You sit and contemplate. This was not very productive.'}),
       Options.create({ description: 'Go back', goToLevel: 1, answerText: 'Swimming was never your forte, better head back and reassess'}),
       Options.create({ description: 'Grab sketchy looking vine', goToLevel: 3, answerText: 'Something something don\'t judge a book by its cover. You swing mightily across the river and happily land on the other side'}),
      //Level 3 Options
      Options.create({ description: 'Walk towards the fllamingo', goToLevel: 5, answerText: 'You head to the Flamingo and give him some crumbs you find in your jacket. Compassion was always your strong suit. The flamingo cranes its neck and caws, almost beckoning you to follow it, which you do'}),
      Options.create({description: 'Head to the train', goToLevel: 5, answerText: 'Flamingos are weird, all standing there on one leg with knees that bend the wrong way when they sit. Might as well go check out what this train is lugging' })
      ])

        //L1O2 = Level 1 Option 1
      .then(([L1O1, L1O2, L2O1, L2O2, L2O3, L2O4, L3O1, L3O2]) => {
        return Promise.all([
         level1.setOptions([L1O1, L1O2]),
         level2.setOptions([L2O1, L2O2, L2O3, L2O4]),
         level3.setOptions([L3O1, L3O2])
        ])
      })

    })
  })
}

seed()
  .then(() => console.log('database synced!'))
  .then(() => conn.close());
