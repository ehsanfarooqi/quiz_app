const data = {
  react: [
    {
      question: "Which is the most popular JavaScript framework?",
      options: ["Angular", "React", "Svelte", "Vue"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "Which company invented React?",
      options: ["Google", "Apple", "Netflix", "Facebook"],
      correctOption: 3,
      points: 10,
    },
    {
      question: "What's the fundamental building block of React apps?",
      options: ["Components", "Blocks", "Elements", "Effects"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What's the name of the syntax we use to describe the UI in React components?",
      options: ["FBJ", "Babel", "JSX", "ES2015"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How does data flow naturally in React apps?",
      options: [
        "From parents to children",
        "From children to parents",
        "Both ways",
        "The developers decides",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "How to pass data into a child component?",
      options: ["State", "Props", "PropTypes", "Parameters"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "When to use derived state?",
      options: [
        "Whenever the state should not trigger a re-render",
        "Whenever the state can be synchronized with an effect",
        "Whenever the state should be accessible to all components",
        "Whenever the state can be computed from another state variable",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "What triggers a UI re-render in React?",
      options: [
        "Running an effect",
        "Passing props",
        "Updating state",
        "Adding event listeners to DOM elements",
      ],
      correctOption: 2,
      points: 20,
    },
    {
      question: 'When do we directly "touch" the DOM in React?',
      options: [
        "When we need to listen to an event",
        "When we need to change the UI",
        "When we need to add styles",
        "Almost never",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question: "In what situation do we use a callback to update state?",
      options: [
        "When updating the state will be slow",
        "When the updated state is very data-intensive",
        "When the state update should happen faster",
        "When the new state depends on the previous state",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question:
        "If we pass a function to useState, when will that function be called?",
      options: [
        "On each re-render",
        "Each time we update the state",
        "Only on the initial render",
        "The first time we update the state",
      ],
      correctOption: 2,
      points: 30,
    },
    {
      question:
        "Which hook to use for an API request on the component's initial render?",
      options: ["useState", "useEffect", "useRef", "useReducer"],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "Which variables should go into the useEffect dependency array?",
      options: [
        "Usually none",
        "All our state variables",
        "All state and props referenced in the effect",
        "All variables needed for clean up",
      ],
      correctOption: 2,
      points: 30,
    },
    {
      question: "An effect will always run on the initial render.",
      options: [
        "True",
        "It depends on the dependency array",
        "False",
        "In depends on the code in the effect",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question:
        "When will an effect run if it doesn't have a dependency array?",
      options: [
        "Only when the component mounts",
        "Only when the component unmounts",
        "The first time the component re-renders",
        "Each time the component is re-rendered",
      ],
      correctOption: 3,
      points: 20,
    },
  ],
  javaScript: [
    {
      question:
        "What is a legal JavaScript syntax for creating a BigInt number ?",
      options: [
        "1234567890123456789m",
        "1234567890123456789max",
        "NaN",
        "1234567890123456789n",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question: "What will the following code return: Boolean(10 > 9) ?",
      options: ["false", "true", "NaN", "1"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "How do you declare a JavaScript variable ?",
      options: ["var carName;", "v carName;", "variable carName"],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which event occurs when the user clicks on an HTML element ?",
      options: ["onmouseclick", "onmouseover", "onclick", "onchange"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How can you detect the client's browser name ?",
      options: ["browser.name", "client.navName", "navigator.appName"],
      correctOption: 2,
      points: 20,
    },
    {
      question: "JavaScript is the same as Java.",
      options: ["False", "True"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "How do you find the number with the highest value of x and y ?",
      options: ["ceil(x, y)", "Math.ceil(x, y)", "Math.max(x, y)", "top(x, y)"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How to write an IF statement in JavaScript ?",
      options: ["if (i == 5)", "if i = 5", "if i = 5 then", "if i == 5 then"],
      correctOption: 0,
      points: 10,
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      options: [
        'alertBox("Hello World");',
        'msgBox("Hello World")',
        'msg("Hello World");',
        'alert("Hello World");',
      ],
      correctOption: 3,
      points: 10,
    },
    {
      question: "Inside which HTML element do we put the JavaScript ?",
      options: ["<javascript>", "<script>", "<scripting>", "<js>"],
      correctOption: 1,
      points: 10,
    },
  ],
  html: [
    {
      question: "The <p> tap is used for: ",
      options: ["Paragraph", "page", "Pointer", "Parser"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "Waht is the output of this code ? <div class='sum'>(3+6)/2</div>",
      options: ["4", "(3+6)/2", "4.5", "6"],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "HTML elements are divided into two categories: block level and inline elements.",
      options: ["True", "False"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "The navigation menu of a webpage can only be placed in the <nav> tag.",
      options: ["True", "False"],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "To make the table have the whole width of the viewer's browser window irrespective of its width, you should specify a table width of:",
      options: ["50%", "1000px", "100%", "600px"],
      correctOption: 2,
      points: 10,
    },

    {
      question:
        "When using the <script> tap, we can either use the 'src' attribute to link of write the Javascript inside the element.",
      options: ["True", "False"],
      correctOption: 0,
      points: 10,
    },
  ],
  python: [
    {
      question: "What is the output of this code ? x = [1,3,5]; print(x in x)",
      options: ["[1,3,5]", "False", "Error", "True"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "Waht is the output of this code ? x = 0b0010; print(x)",
      options: ["0", "0b1010", "1", "2"],
      correctOption: 3,
      points: 20,
    },
    {
      question: "What is the output of this code ? print('Hello World\")",
      options: ["Error", "Hello World", '"Hello World"'],
      correctOption: 0,
      points: 10,
    },
    {
      question: 'What is the output of this code ? print(2**(1=="1"))',
      options: ["2", "1", "Error", "True"],
      correctOption: 1,
      points: 20,
    },
    {
      question: "Which of these variable names is valid ?",
      options: ["print", "12foo", "good_days", "a-variable"],
      correctOption: 2,
      points: 10,
    },

    {
      question:
        'Waht is the output of this code ? var = "70.0"; print(int(var))',
      options: ["Error", '"70"', "70", "70.0"],
      correctOption: 0,
      points: 20,
    },
    {
      question: "Waht is the output of this code ? print(3**3%7)",
      options: ["3", "0", "6", "Error"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "Waht is the output of this code ? a = 'a'; print(type(a))",
      options: [
        "<class 'varchar'>",
        "<class 'string'>",
        "<class 'str'>",
        "<class 'char'>",
      ],
      correctOption: 2,
      points: 20,
    },
  ],
  cPlus: [
    {
      question:
        "Which data type is used to create a variable that should store text ?",
      options: ["String", "string", "myString", "Txt"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "How do you create a variable with the numeric value 5 ?",
      options: ["num x = 5;", "double x = 5;", "x = 5;", "int x = 5;"],
      correctOption: 3,
      points: 20,
    },
    {
      question: "Which method can be used to find the length of a string ?",
      options: ["getLength()", "len()", "length()", "getSize()"],
      correctOption: 2,
      points: 10,
    },
    {
      question:
        "WThe value of a string variable can be surrounded by single quotes.",
      options: ["True", "False"],
      correctOption: 1,
      points: 20,
    },
    {
      question: "How do you create a function in C++ ?",
      options: [
        "functionName[]",
        "(functionName)",
        "functionName()",
        "functionName",
      ],
      correctOption: 2,
      points: 10,
    },

    {
      question:
        "Which method can be used to find the highest value of x and y ?",
      options: ["max(x,y)", "largest(x,y)", "maxNum(x,y)", "maximum(x,y)"],
      correctOption: 0,
      points: 20,
    },
    {
      question:
        "How do you create a reference variable of an existing variable ?",
      options: [
        "With the REF word",
        "With the ref word",
        "With the & operator",
        "With the * operator",
      ],
      correctOption: 2,
      points: 10,
    },
    {
      question: "Which statement is used to stop a loop ?",
      options: ["stop", "break", "return", "exit"],
      correctOption: 1,
      points: 20,
    },
  ],
  java: [
    {
      question:
        "Which data type is used to create a variable that should store text ?",
      options: ["String", "string", "myString", "Txt"],
      correctOption: 0,
      points: 10,
    },
    {
      question: "How do you create a variable with the numeric value 5 ?",
      options: ["num x = 5;", "double x = 5;", "x = 5;", "int x = 5;"],
      correctOption: 3,
      points: 20,
    },
    {
      question: "How do you create a variable with the floating number 2.8 ?",
      options: [
        "int x = 2.8f;",
        "x = 2.8f;",
        "float x = 2.8f;",
        "byte x = 2.8f;",
      ],
      correctOption: 2,
      points: 10,
    },
    {
      question:
        "Which method can be used to return a string in upper case letters ?",
      options: ["tuc()", "toUpperCase()", "upperCase()", "touppercase()"],
      correctOption: 1,
      points: 20,
    },
    {
      question:
        "In Java, it is possible to inherit attributes and methods from one class to another.",
      options: ["False", "True"],
      correctOption: 0,
      points: 10,
    },

    {
      question:
        "Which keyword is used to import a package from the Java API library ?",
      options: ["lib", "package", "getlib", "import"],
      correctOption: 3,
      points: 20,
    },
  ],
};
export default data;
