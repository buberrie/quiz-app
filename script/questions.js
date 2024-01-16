// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Cascading Style Sheet",
      "Computer Style Sheet",
      "Creative Style Sheet",
      "Colorful Style Sheet",
    ],
  },
  {
    question: "What is the purpose of the JavaScript 'typeof' operator?",
    answer: "Identifying the type of a variable",
    options: [
      "Checking if a variable is defined",
      "Identifying the type of a variable",
      "Concatenating strings",
      "Declaring a new variable",
    ],
  },
  {
    question: "Which HTML tag is used for creating a hyperlink?",
    answer: "<a>",
    options: ["<link>", "<a>", "<hlink>", "<href>"],
  },
  {
    question:
      "What is the purpose of the 'localStorage' object in web development?",
    answer: "Storing data locally in the browser",
    options: [
      "Storing data locally in the browser",
      "Communicating with the server",
      "Handling server-side sessions",
      "Defining global variables",
    ],
  },
  {
    question: "What does AJAX stand for in the context of web development?",
    answer: "Asynchronous JavaScript and XML",
    options: [
      "Asynchronous JavaScript and XML",
      "Advanced JavaScript and XML",
      "Asynchronous JSON and XHTML",
      "Automated JavaScript and XML",
    ],
  },
  {
    question: "Which of the following is a CSS preprocessor?",
    answer: "SASS",
    options: ["SASS", "JSX", "TypeScript", "CoffeeScript"],
  },
  {
    question: "What does the 'async' keyword do in JavaScript?",
    answer: "Marks a function as asynchronous",
    options: [
      "Marks a function as asynchronous",
      "Defines a new variable",
      "Synchronously loads external scripts",
      "Adds an event listener",
    ],
  },
  {
    question: "In JavaScript, what is a closure?",
    answer: "A combination of function and lexical environment",
    options: [
      "A block of code",
      "A way to handle errors",
      "A combination of function and lexical environment",
      "A style of coding",
    ],
  },
  {
    question: "Which event is triggered when an HTML form is submitted?",
    answer: "onSubmit",
    options: ["onClick", "onSubmit", "onChange", "onFormSubmit"],
  },
  {
    question: "What is the purpose of the 'viewport' meta tag in HTML?",
    answer: "Controlling the zoom level",
    options: [
      "Adjusting font size",
      "Configuring the device's screen size",
      "Controlling the zoom level",
      "Specifying the document's character set",
    ],
  },
  {
    question: "What is the role of the 'box-sizing' property in CSS?",
    answer: "Defining box dimensions",
    options: [
      "Adjusting box shadows",
      "Defining box dimensions",
      "Styling borders",
      "Configuring box animations",
    ],
  },
  {
    question:
      "Which method is used to add a new element to the end of an array in JavaScript?",
    answer: "push()",
    options: ["push()", "add()", "append()", "insert()"],
  },
  {
    question: "What is the purpose of the 'z-index' property in CSS?",
    answer: "Specifying the stacking order of elements",
    options: [
      "Controlling the position of a flex container",
      "Specifying the stacking order of elements",
      "Configuring the zoom level",
      "Adjusting text indentation",
    ],
  },
  {
    question:
      "What is the significance of the 'DOMContentLoaded' event in JavaScript?",
    answer: "Fired when the DOM is ready for manipulation",
    options: [
      "Triggered when the page is fully loaded",
      "Fired when the DOM is ready for manipulation",
      "Indicates the start of an animation",
      "Marks the end of a script execution",
    ],
  },
  {
    question: "In CSS, what does the 'position: absolute' property do?",
    answer: "Positions an element relative to its normal position",
    options: [
      "Positions an element relative to its normal position",
      "Aligns an element to the right",
      "Floats an element to the left",
      "Centers an element horizontally"
    ]
  },
  {
    question: "What is the role of the 'alt' attribute in an HTML image tag?",
    answer: "Defining the image's alternative text",
    options: [
      "Assigning a unique identifier to the image",
      "Defining the image's alternative text",
      "Specifying the image format",
      "Controlling image transparency"
    ]
  },
  {
    question: "What is the purpose of the 'flexbox' layout in CSS?",
    answer: "Designing flexible box models",
    options: [
      "Creating responsive grid systems",
      "Handling asynchronous requests",
      "Designing flexible box models",
      "Styling hyperlinks"
    ]
  },
  {
    question: "Which HTML tag is used for creating an unordered list?",
    answer: "<ul>",
    options: [
      "<ol>",
      "<li>",
      "<ul>",
      "<list>"
    ]
  },
  {
    question: "What is the 'this' keyword referring to in JavaScript?",
    answer: "The global object",
    options: [
      "The previous element in an array",
      "The current function's scope",
      "The global object",
      "The calling object"
    ]
  },
  {
    question: "Which CSS property is used to add space between the border and content of an element?",
    answer: "padding",
    options: [
      "padding",
      "margin",
      "spacing",
      "gutter"
    ]
  }
];
