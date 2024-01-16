//selecting all required elements
const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const timeLine = document.querySelector(".header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
startBtn.onclick = () => {
  infoBox.classList.add("activeInfo"); //show info box
};

// if exitQuiz button clicked
exitBtn.onclick = () => {
  infoBox.classList.remove("activeInfo"); //hide info box
};

// Shuffle function to randomly order  array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Shuffle the questions and options
  const shuffledQuestions = shuffleArray(questions);
  
  // Select 10 random questions to display
  const selectedQuestions = shuffledQuestions.slice(0, 10);

// if continueQuiz button clicked
continueBtn.onclick = () => {
  infoBox.classList.remove("activeInfo"); //hide info box
  quizBox.classList.add("activeQuiz"); //show quiz box
  showQuestions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(selectedQuestions.length * 15); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
};

let timeValue = selectedQuestions.length * 15;
let queCount = 0;
let queNumber = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restartQuiz = resultBox.querySelector(".buttons .restart");
const quitQuiz = resultBox.querySelector(".buttons .quit");

// if restartQuiz button clicked
restartQuiz.onclick = () => {
  quizBox.classList.add("activeQuiz"); //show quiz box
  resultBox.classList.remove("activeResult"); //hide result box
  timeValue = selectedQuestions.length * 15;
  queCount = 0;
  queNumber = 1;
  userScore = 0;
  widthValue = 0;
  showQuestions(queCount); //calling showQestions function
  queCounter(queNumber); //passing queNumber value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timeValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  timeText.textContent = "Time Left"; //change the text of timeText to Time Left
  nextBtn.classList.remove("show"); //hide the next button
};

// if quitQuiz button clicked
quitQuiz.onclick = () => {
  window.location.reload(); //reload the current window
};

const nextBtn = document.querySelector(".footer .next_btn");
const bottomQuesCounter = document.querySelector(".footer .total_que");

// if Next Que button clicked
nextBtn.onclick = () => {
  if (queCount < selectedQuestions.length - 1) {
    //if question count is less than total question length
    queCount++; //increment the queCount value
    queNumber++; //increment the queNumber value
    showQuestions(queCount); //calling showQestions function
    queCounter(queNumber); //passing queNumber value to queCounter
     nextBtn.classList.remove("show"); //hide the next button
  } else {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
  }
};


// getting questions and options from array in a shuffled way
function showQuestions(index) {
    const queText = document.querySelector(".que_text");

    // Choose the question for the current index
    const shuffledQuestion = {
        num: index + 1,
        question: selectedQuestions[index].question,
        options: shuffleArray([...selectedQuestions[index].options])
    };

    // Creating HTML for question and options
    let queTag = `<span>${shuffledQuestion.num}. ${shuffledQuestion.question}</span>`;
    let optionTag = '';

    shuffledQuestion.options.forEach((option) => {
     // Replace < and > with HTML entities
     option = option.replace(/</g, '&lt;').replace(/>/g, '&gt;');
     optionTag += `<div class="option" onclick="optionSelected(this)"><span>${option}</span></div>`;
    });

    queText.innerHTML = queTag; // adding new span tag inside queTag
    optionList.innerHTML = optionTag; // adding new div tag inside optionTag
}

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
    let userAns = answer.textContent; //getting user selected option
  let correctAns = questions[queCount].answer; //getting correct answer from array
  const allOptions = optionList.children.length; //getting all option items

  if (userAns == correctAns) {
    //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    console.log("Wrong Answer");

    for (i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAns) {
        //if there is an option which is matched to an array answer
        optionList.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        optionList.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  nextBtn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
  infoBox.classList.remove("activeInfo"); //hide info box
  quizBox.classList.remove("activeQuiz"); //hide quiz box
  resultBox.classList.add("activeResult"); //show result box
  const scoreText = resultBox.querySelector(".score_text");
  if (userScore > 9) {
    // if user scored more than 7
    //creating a new span tag and passing the user score number and total question number
    let scoreTag =
      "<span>and congrats! , You got <p>" +
      userScore +
      "</p> out of <p>" +
      selectedQuestions.length +
      "</p>&#x1F389;</span>";
    scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
  } else if (userScore > 4) {
    // if user scored more than 1
    let scoreTag =
      "<span>and nice , You got <p>" +
      userScore +
      "</p> out of <p>" +
      selectedQuestions.length +
      "</p>&#x1F601;</span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
    let scoreTag =
      "<span>and sorry , You got only <p>" +
      userScore +
      "</p> out of <p>" +
      selectedQuestions.length +
      "</p>&#x1F629;</span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(totalTime) {
    counter = setInterval(timer, 1000);

    function timer() {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        // Format minutes and seconds with leading zeros if needed
        let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

        // Update the timeCount element with the formatted time
        timeCount.textContent = formattedMinutes + ":" + formattedSeconds;

        // Decrement the total time value
        totalTime--;

        if (totalTime < 0) {
            // If timer is less than 0
            clearInterval(counter); // Clear counter
            timeText.textContent = "Time Off"; // Change the time text to "Time Off"
            const allOptions = optionList.children.length; //getting all option items
            let correctAns = questions[queCount].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(optionList.children[i].textContent == correctAns){ //if there is an option which is matched to an array answer
                    optionList.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    optionList.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                optionList.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            setTimeout(() => {
                showResult();
            }, 1500);
        }
    }
}


function startTimerLine(time) {
  counterLine = setInterval(timer, ((selectedQuestions.length * 15) * 1000) / 549 );
  function timer() {
    time += 1; //upgrading time value with 1
    timeLine.style.width = time + "px"; //increasing width of timeLine with px by time value
    if (time > 549) {
      //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine
    }
  }
}

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    selectedQuestions.length +
    "</p> Questions</span>";
  bottomQuesCounter.innerHTML = totalQueCounTag; //adding new span tag inside bottomQuesCounter
}
