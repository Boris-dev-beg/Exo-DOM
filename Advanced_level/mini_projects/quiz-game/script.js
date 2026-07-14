// ! Variables
const TabQuestions = [
  {
    id: 1,
    title: "What's the polical capital of Cameroon ?",
    correct_answer: 1,
    answers: [
      {
        id: 1,
        msg: "Yaounde",
      },
      {
        id: 2,
        msg: "Douala",
      },
      {
        id: 3,
        msg: "Garoua",
      },
      {
        id: 4,
        msg: "Bafoussam",
      },
    ],
  },
  {
    id: 2,
    title: "What's the largest ocean in the world ?",
    correct_answer: 3,
    answers: [
      {
        id: 1,
        msg: "The atlantic ocean",
      },
      {
        id: 2,
        msg: "The indian ocean",
      },
      {
        id: 3,
        msg: "The pacific ocean",
      },
      {
        id: 4,
        msg: "The artic ocean",
      },
    ],
  },
  {
    id: 3,
    title: "In what year did the French Revolution take place ?",
    correct_answer: 2,
    answers: [
      {
        id: 1,
        msg: "1815",
      },
      {
        id: 2,
        msg: "1789",
      },
      {
        id: 3,
        msg: "1945",
      },
      {
        id: 4,
        msg: "1776",
      },
    ],
  },
  {
    id: 4,
    title: "What's the main ingredient in guacamole ?",
    correct_answer: 2,
    answers: [
      {
        id: 1,
        msg: "The Tomato",
      },
      {
        id: 2,
        msg: "The Avocado",
      },
      {
        id: 3,
        msg: "The courgette",
      },
      {
        id: 4,
        msg: "The eggplant",
      },
    ],
  },
  {
    id: 5,
    title: "What's the fastest land animal in the world ?",
    correct_answer: 3,
    answers: [
      {
        id: 1,
        msg: "The Lion",
      },
      {
        id: 2,
        msg: "The Horse",
      },
      {
        id: 3,
        msg: "The cheetah",
      },
      {
        id: 4,
        msg: "The antelope",
      },
    ],
  },
  {
    id: 6,
    title: 'Who is the author of the famous novel "Le petit Prince" ?',
    correct_answer: 3,
    answers: [
      {
        id: 1,
        msg: "Victor Hugo",
      },
      {
        id: 2,
        msg: "Moliere",
      },
      {
        id: 3,
        msg: "Antoine de Saint-Exupery",
      },
      {
        id: 4,
        msg: "Jules Verne",
      },
    ],
  },
  {
    id: 7,
    title: "In which city are the Giza pyramids located ?",
    correct_answer: 1,
    answers: [
      {
        id: 1,
        msg: "Egypt",
      },
      {
        id: 2,
        msg: "Greece",
      },
      {
        id: 3,
        msg: "Mexico",
      },
      {
        id: 4,
        msg: "Italy",
      },
    ],
  },
  {
    id: 8,
    title: "What's the result of multiplying 7 by 8 ?",
    correct_answer: 3,
    answers: [
      {
        id: 1,
        msg: "15",
      },
      {
        id: 2,
        msg: "64",
      },
      {
        id: 3,
        msg: "56",
      },
      {
        id: 4,
        msg: "49",
      },
    ],
  },
  {
    id: 9,
    title: "What's the chemical symbol for Water ?",
    correct_answer: 4,
    answers: [
      {
        id: 1,
        msg: "CO2",
      },
      {
        id: 2,
        msg: "O2",
      },
      {
        id: 3,
        msg: "NaCl",
      },
      {
        id: 4,
        msg: "H2O",
      },
    ],
  },
  {
    id: 10,
    title: "How many colors are found on the cameroon flag ?",
    correct_answer: 2,
    answers: [
      {
        id: 1,
        msg: "2",
      },
      {
        id: 2,
        msg: "3",
      },
      {
        id: 3,
        msg: "4",
      },
      {
        id: 4,
        msg: "5",
      },
    ],
  },
];
let currentQuestion = 1;

// ! Collection
const question_section = document.getElementById("question");
const answers = document.getElementById("answers");

const result_container = document.getElementById("result-container");
const questions_container = document.getElementById("questions-container");

const btnback = document.getElementById("back");
const btnnext = document.getElementById("next");
const btn_try_again = document.getElementById("try_again");

let correctAnswer = 0;
let incorrectAnswer = 0;
// ! Functions
// ? Check Correct Answer
const check_value = (answer) => {
  answer.classList.add("selected");
  const AllElement = Array.from(answer.parentNode.children).filter(
    (child) => child !== answer,
  );
  const correct_answer = TabQuestions[currentQuestion - 1].correct_answer;
  if (correct_answer === parseInt(answer.value)) {
    answer.style.background = "green";
    correctAnswer += 1;
    setTimeout(changeCurrentQuestion, 1500);
  } else {
    answer.style.background = "red";
    incorrectAnswer += 1;
    AllElement.forEach((elt) => {
      if (parseInt(elt.value) === correct_answer) {
        elt.style.background = "green";
        elt.classList.add("selected");
      }
    });
    setTimeout(changeCurrentQuestion, 1500);
  }
};
// ? HandlerClick
const HandlerClick = () => {
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      check_value(answer);
    });
  });
};

// ? Change Question
const changeQuestion = (curr) => {
  answers.innerHTML = "";
  TabQuestions.map((question) => {
    if (curr === question.id) {
      question_section.innerHTML = `
        <p>${question.id}.</p>
          <h1>${question.title}</h1>
          `;
      question.answers.map((answer) => {
        answers.innerHTML += `
            <button value="${answer.id}" class="element answer">
                <p>${answer.id}.)</p>
                <h1 style="text-transform: capitalize">${answer.msg}</h1>
            </button>
            `;
      });
    }
  });
  HandlerClick();
};

// ? Hide question and show de result
const showResult = () => {
  result_container.style.display = "flex";
  questions_container.style.display = "none";
  const result_section = document.getElementById("result");
  result_section.innerHTML = `
  <h1 class="correct">${correctAnswer} corrects</h1>
  <h1 class="incorrect">${incorrectAnswer} incorrects</h1>`;
};
//? Change CurrentQuestion and call changeQuestion
const changeCurrentQuestion = () => {
  currentQuestion += 1;
  if (currentQuestion > TabQuestions.length) {
    showResult(correctAnswer, incorrectAnswer);
  } else if (currentQuestion === TabQuestions.length) {
    changeQuestion(TabQuestions.length);
  } else {
    changeQuestion(currentQuestion);
  }
  console.log(currentQuestion);
};
// ? Entry point
const onLoad = () => {
  btn_try_again.addEventListener("click", () => {
    if (currentQuestion >= TabQuestions.length) window.location.reload();
    currentQuestion = 1;
    console.log("reload");
  });
  btnback.addEventListener("click", () => {
    if (currentQuestion <= 1) {
      changeQuestion(1);
    } else {
      currentQuestion -= 1;
      changeQuestion(currentQuestion);
    }
    console.log(currentQuestion);
  });
  btnnext.addEventListener("click", changeCurrentQuestion);
  changeQuestion(1);
};

window.addEventListener("load", onLoad());
