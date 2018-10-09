import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Backend Logic:

export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.exerciseLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setRest() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }

  setFitness() {
    setInterval(() => {
      this.exerciseLevel--;
    }, 1000);
  }

  runAway() {
    if (this.foodLevel || this.sleepLevel || this.exerciseLevel <= 0) {
      return true;
    } else {
      return false;
    }
  }

  feed(amount) {
    this.foodLevel +=amount;
  }

  sleep(amount) {
    this.sleepLevel +=amount;
  }

  exercise(amount) {
    this.exerciseLevel +=amount;
  }
}

// Frontend Logic:

$(document).ready(function() {

  let newTamagotchi = new Tamagotchi();
  newTamagotchi.setHunger();
  newTamagotchi.setRest();
  newTamagotchi.setFitness();

  $("#feed").click(function() {
    var currentProgress = 100;
    var interval = setInterval(function() {
        currentProgress -= 10;
        $("#dynamic")
        .css("width", currentProgress + "%")
        .attr("aria-valuenow", currentProgress)
        if (currentProgress >= 100)
            clearInterval(interval);
    }, 1000);
  });

  $("#feed").click(function() {
    newTamagotchi.feed(10);
    console.log(newTamagotchi.foodLevel);
  });
  $("#rest").click(function() {
    newTamagotchi.sleep(10);
  });
  $("#exercise").click(function() {
    newTamagotchi.exercise(10);
  });
});
