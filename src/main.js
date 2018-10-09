import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Backend Logic:

function randomGenerator(max) {
  return Math.random() * (max - 10) + 10;
}

export class Tamagotchi {

  constructor() {
    this.foodLevel = 100;
    this.exerciseLevel = 100;
    this.sleepLevel = 100;
  }

  runAway() {
    if (this.foodLevel <= 0 || this.sleepLevel <= 0 || this.exerciseLevel <= 0) {
      alert("you died bro");
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

  $("#start").click(function() {
    $("#start").hide();
    let newTamagotchi = new Tamagotchi();
    let masterClock = setInterval(function() {
        newTamagotchi.foodLevel = newTamagotchi.foodLevel - randomGenerator(10);
        newTamagotchi.exerciseLevel = newTamagotchi.exerciseLevel - randomGenerator(20);
        newTamagotchi.sleepLevel = newTamagotchi.sleepLevel - randomGenerator(15);
        console.log(newTamagotchi.foodLevel);
        let hungerLevel = $("#hunger").css("width", newTamagotchi.foodLevel + "%");

        let hunger = document.querySelector('#hunger');
        let hungerWidth= getComputedStyle(hunger);
        let hungerBarWidth = parseInt(hungerWidth.width);
        console.log(hungerBarWidth);
        if (hungerBarWidth <= 0) {
          $("#health-bar-box").hide();
          clearInterval(masterClock);
            $("#play-again").show();
        }

        console.log(newTamagotchi.exerciseLevel);
        let exerciseLevel = $("#fitness").css("width", newTamagotchi.exerciseLevel + "%");
        let fitness = document.querySelector('#fitness');
        let fitnessWidth= getComputedStyle(fitness);
        let fitnessBarWidth = parseInt(fitnessWidth.width);
        console.log(fitnessBarWidth);
        if (fitnessBarWidth <= 0) {
          $("#health-bar-box").hide();
          clearInterval(masterClock);
          $("#play-again").show();
        }

        console.log(newTamagotchi.sleepLevel);
        let sleepLevel = $("#sleep").css("width", newTamagotchi.sleepLevel + "%");
        let sleep = document.querySelector('#sleep');
        let sleepWidth= getComputedStyle(sleep);
        let sleepBarWidth = parseInt(sleepWidth.width);
        console.log(sleepBarWidth);
        if (sleepBarWidth <= 0) {
          $("#health-bar-box").hide();
          clearInterval(masterClock);
          $("#play-again").show();
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
  $("#play-again").click(function(){
    location.reload();
  });
});
