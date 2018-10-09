import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Backend Logic:

export class Tamagotchi {

  constructor() {
    this.foodLevel = 100;
    this.exerciseLevel = 100;
    this.sleepLevel = 100;
  }

  runAway() {
    if (this.foodLevel <= 0 || this.sleepLevel <= 0 || this.exerciseLevel <= 0) {
      alert("you died bro")
    } else {
      return false;
    }
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

  // let currentProgress = newTamagotchi.foodLevel;
  $("#start").click(function() {
    let newTamagotchi = new Tamagotchi();
    // newTamagotchi.setHunger();
    // newTamagotchi.setRest();
    // newTamagotchi.setFitness();

    let masterClock = setInterval(function() {
        newTamagotchi.foodLevel = newTamagotchi.foodLevel - 10;
        newTamagotchi.sleepLevel = newTamagotchi.sleepLevel - 10;
        newTamagotchi.exerciseLevel = newTamagotchi.exerciseLevel - 10;

        console.log(newTamagotchi.foodLevel);
        $("#hunger").css("width", newTamagotchi.foodLevel + "%");
        newTamagotchi.runAway();
        if (newTamagotchi.foodLevel <= 0) {
          clearInterval(masterClock);
        }

        console.log(newTamagotchi.exerciseLevel);
        $("#fitness").css("width", newTamagotchi.exerciseLevel + "%");
        newTamagotchi.runAway();
        if (newTamagotchi.exerciseLevel <= 0) {
          clearInterval(masterClock);
        }
        console.log(newTamagotchi.sleepLevel);
        $("#sleep").css("width", newTamagotchi.sleepLevel + "%");
        newTamagotchi.runAway();
        if (newTamagotchi.sleepLevel <= 0) {
          clearInterval(masterClock);
        }
      }, 1000);


    $("#feed").click(function() {
      newTamagotchi.feed(20);
    });

    $("#exercise").click(function() {
      newTamagotchi.exercise(15);
    });

    $("#rest").click(function() {
      newTamagotchi.sleep(25);
    });


  });


  // $("#rest").click(function() {
  //   let currentHealth = parseInt($("#sleep").css("width")) + 32.25;
  //   console.log(currentHealth);
  //   newTamagotchi.sleep(10);
  //   $("#sleep")
  //   .css("width", currentHealth + "px")
  // });
  //
  // $("#exercise").click(function() {
  //   let currentHealth = parseInt($("#sleep").css("width")) + 32.25;
  //   console.log(currentHealth);
  //   newTamagotchi.exercise(10);
  //   $("#sleep")
  //   .css("width", currentHealth + "px")
  // });
});
