var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "What was used for blood in the movie Psycho?",
  answers: ["catsup", "corn sryup and food coloring", "chocolate syrup", "real blood"],
  correctAnswer: "chocolate syrup"
}, {
  question: "The movie When a Stranger Calls is based on which urban legend?",
  answers: ["Someone hiding in your backseat", "The kidney thief", "The babysitter and the stranger upstaris", "The ever ringing telephone"],
  correctAnswer: "The babysitter and the stranger upstairs"
}, {
  question: "In the movie Carrie, how does Carrie kill her mother?",
  answers: ["Burns her", "Hangs her", "Knifes her", "Shoots her"],
  correctAnswer: "Knifes her"
}, {
  question: "What was the name of the boy who drown in Friday the Thirteen?",
  answers: ["Billy Scott", "Jeremy Willis", "Jason Vorhees", "Mikey Riese"],
  correctAnswer: "Jason Vorhees"
}, {
  question: "What horror movie featured a gourmet cannibal?",
  answers: ["Friday the 13th", "Texas Chainsaw Massacre", "Silence of the Lambs", "Burnt Offerings"],
  correctAnswer: "Silence of the Lambs"
}, {
  question: "Which movie, starring Brad Pitt, featured the Seven Deadly Sins from the Bible?",
  answers: ["Fear No Evil", "Seven", "Scream", "Saw"],
  correctAnswer: "Seven"
}, {
  question: "What Horror movie makes you believe that everyone has died, when they have not?",
  answers: ["Friday the 13th", "Nightmare on Elm Street", "Aprils Fool's Day", "Carrie"],
  correctAnswer: "April Fool's Day"
}, {
  question: "What famous villian stalks children in their dreams?",
  answers: ["Jason Vorhees", "Leatherface", "Freddy Kreuger", "Hannibal lector"],
  correctAnswer: "Freddy Kreuger"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
