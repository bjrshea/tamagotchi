import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Backend Logic:

export class Tamagotchi {

  constructor() {
    this.foodLevel = 100;
    this.sleepLevel = 100;
    this.exerciseLevel = 100;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel = this.foodLevel - 10;
    }, 1000);
  }

  setRest() {
    setInterval(() => {
      this.sleepLevel = this.sleepLevel - 10;
    }, 1000);
  }

  setFitness() {
    setInterval(() => {
      this.exerciseLevel = this.exerciseLevel - 10;
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

  $("#start").click(function() {
    newTamagotchi.setHunger();
    newTamagotchi.setRest();
    newTamagotchi.setFitness();
    let currentProgress = 100;
    let interval = setInterval(function() {
        currentProgress -= 10;
        $("#dynamic")
        .css("width", currentProgress + "%")
        if (currentProgress >= 100)
          clearInterval(interval);
        if (currentProgress <= 0)
          clearInterval(interval);
    }, 1000);
  });

  $("#feed").click(function() {
    let currentHealth = parseInt($("#dynamic").css("width")) + 32.25;
    console.log(currentHealth);
    newTamagotchi.feed(10);
    $("#dynamic")
    .css("width", currentHealth + "px")
  });

  $("#rest").click(function() {
    let currentHealth = parseInt($("#dynamic").css("width")) + 32.25;
    console.log(currentHealth);
    newTamagotchi.sleep(10);
    $("#dynamic")
    .css("width", currentHealth + "px")
  });
  $("#exercise").click(function() {
    let currentHealth = parseInt($("#dynamic").css("width")) + 32.25;
    console.log(currentHealth);
    newTamagotchi.exercise(10);
    $("#dynamic")
    .css("width", currentHealth + "px")
  });
});
