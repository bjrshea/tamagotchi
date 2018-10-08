import { Tamagotchi } from './../src/main.js';

describe('Tamagotchi', function() {
  let fuzzy = new Tamagotchi("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.sleepLevel = 10;
    fuzzy.exerciseLevel = 10;
    fuzzy.setHunger();
    fuzzy.setRest();
    fuzzy.setFitness();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
     fuzzy.foodLevel = 0;
     expect(fuzzy.runAway()).toEqual(true);
   });

   it('should get very hungry if 10 seconds pass without feeding', function() {
     jasmine.clock().tick(10001);
     expect(fuzzy.runAway()).toEqual(true);
   });

   it('should have a food level of 10 after 3001 milliseconds', function() {
     jasmine.clock().tick(3001);
     fuzzy.feed(3);
     expect(fuzzy.foodLevel).toEqual(10);
   });

   it('should have an exercise level of 10 after 7001 milliseconds', function() {
     jasmine.clock().tick(7001);
     fuzzy.exercise(7);
     expect(fuzzy.exerciseLevel).toEqual(10);
   });

   it('should have a sleep level of 10 after 2001 milliseconds', function() {
     jasmine.clock().tick(2001);
     fuzzy.sleep(2);
     expect(fuzzy.sleepLevel).toEqual(10);
   });

});
