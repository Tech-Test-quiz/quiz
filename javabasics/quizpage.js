let islogined=false;
let array = [
   {
       question: `What is the output of System.out.println(5 + 3 + "7")`,
       option1: "87",
       option2: "15",
       option3: "57",
       option4: "37",
       answer: "87"
   },
   {
      question: "Which keyword is used to define a constant in Java?",
      option1: "const",
      option2: "static",
      option3: "final",
      option4: "constant",
      answer: "final"
  },
  {
   question: "What is the default value of an int in Java?",
   option1: "0.0",
   option2: "0",
   option3: "null",
   option4: "false",
   answer: "0"
},
{
   question: "What is the correct way to declare a variable to store a character in Java?",
   option1: "character myChar;",
   option2: "char myChar;",
   option3: "Char myChar;",
   option4: "chr myChar;",
   answer: "char myChar;"
},
{
   question: "What is the output of System.out.println(9 / 2)?",
   option1: "4.5",
   option2: "4",
   option3: "5",
   option4: "2",
   answer: "4"
},
{
   question: "What does the static keyword mean in Java?",
   option1: "It means the variable or method belongs to the class, rather than any object of the class.",
   option2: " It means the variable or method belongs to a specific instance of a class.",
   option3: " It means the variable or method cannot be accessed outside the class.",
   option4: " It means the variable or method is constant.",
   answer: "It means the variable or method belongs to the class, rather than any object of the class."
},
{
   question: "What is the parent class of all classes in Java?",
   option1: "Main",
   option2: "Super",
   option3: "Parent",
   option4: "Object",
   answer: "Object"
},
{
   question: "Which method is called when an object is created?",
   option1: "initialize()",
   option2: "create()",
   option3: "new()",
   option4: "Constructor",
   answer: "Constructor"
},
{
   question: "What is the purpose of the break statement in Java?",
   option1: "It is used to terminate the loop or switch statement and transfer control to the statement immediately following the loop or switch.",
   option2: "It is used to continue to the next iteration of the loop.",
   option3: "It is used to exit from the method.",
   option4: "It is used to exit from the program.",
   answer: "It is used to terminate the loop or switch statement and transfer control to the statement immediately following the loop or switch."
},
{
   question: "What is the purpose of the this keyword in Java?",
   option1: "It refers to the current object",
   option2: " It refers to the superclass of the current class",
   option3: " It refers to the subclass of the current class",
   option4: " It refers to the parent object",
   answer: "It refers to the current object"
},
{
   question: `What is the output of System.out.println("Hello" + 1 + 2)?`,
   option1: "Hello",
   option2: "12",
   option3: "Hello12",
   option4: "3",
   answer:"Hello12"
},
{
   question: "How do you instantiate an ArrayList in Java?",
   option1: "ArrayList list = new ArrayList()",
   option2: "ArrayList<Type> list = new ArrayList<>()",
   option3: "List<Type> list = new List<>()",
   option4: "ArrayList<Type> list = new ArrayList()",
   answer: "ArrayList<Type> list = new ArrayList<>()"
},
{
   question: "Which loop is guaranteed to execute at least once?",
   option1: "For",
   option2: "While",
   option3: "Do-While",
   option4: "Foreach",
   answer: "Do-While"
},
{
   question: "What is the purpose of the super keyword in Java?",
   option1: "It is used to call the superclass constructor.",
   option2: " It is used to refer to the immediate parent class object.",
   option3: "It is used to call a superclass method.",
   option4: " It is used to access the superclass variables.",
   answer: " It is used to refer to the immediate parent class object."
},
{
   question: "What is the output of System.out.println(Math.max(10, 5))?",
   option1: "10",
   option2: "5",
   option3: "0",
   option4: "-1",
   answer: "10"
},
{
   question: "What is the correct syntax to declare a method in Java?",
   option1: "methodType methodName(parameters) { ... }",
   option2: "methodName(methodType parameters) { ... }",
   option3: "returnType methodName(parameters) { ... }",
   option4: "[access modifier] [return type] methodName([parameters])",
   answer: "[access modifier] [return type] methodName([parameters])"
},
{
   question: "Which class is used to read input from the keyboard in Java?",
   option1: "KeyboardReader",
   option2: "SystemReader",
   option3: "InputReader",
   option4: "Scanner",
   answer: "Scanner."
},
{
   question: "What is the purpose of the new keyword in Java?",
   option1: " It is used to instantiate a new object.",
   option2: " It is used to create a new class.",
   option3: " It is used to initialize a variable.",
   option4: "It is used to define a new method.",
   answer: " It is used to instantiate a new object."
},
{
   question: `What is the output of System.out.println("5" + 3)?`,
   option1: "8",
   option2: "53",
   option3: "15",
   option4: "35",
   answer: "53"
},
{
   question: "What is the purpose of the instanceof operator in Java?",
   option1: "It is used to test whether an object is an instance of a particular class or interface.",
   option2: " It is used to compare two objects.",
   option3: "It is used to check if an object is null.",
   option4: " It is used to create a new instance of a class.",
   answer: "It is used to test whether an object is an instance of a particular class or interface."
}
];

let k = 0;
var rate=0;
let second = 20;
let sno = document.getElementById("sno");
let question = document.getElementById("question");
let opt1 = document.getElementById("option1");
let opt2 = document.getElementById("option2");
let opt3 = document.getElementById("option3");
let opt4 = document.getElementById("option4");
let startcontainer = document.getElementById("startcontainer");
let wrapper = document.getElementById("wrapper");
let qno = document.getElementById("qno");
let score = document.getElementById("score");
let time = document.getElementById("time");
qno.innerHTML = array.length;
let scores = 0;
let testbtn=document.getElementById("testbtn");
testbtn.addEventListener("click",start);

document.addEventListener("keyup",(event)=>{
   if(event.code=="Enter")
   {
      start();
   }
   else if(event.code=="Backspace")
   {
      back();
   }
})

function start() {
   startcontainer.style.display = "none";
   wrapper.style.display = "block";
   update();
}

function update() {
   second = 20;
   score.innerHTML = scores;
   sno.innerHTML = k + 1;
   question.innerHTML = array[k].question;
   opt1.innerHTML = array[k].option1;
   opt2.innerHTML = array[k].option2;
   opt3.innerHTML = array[k].option3;
   opt4.innerHTML = array[k].option4;
   clearInterval(timer);
   timer = setInterval(timechange, 1000);
}


document.querySelectorAll('[onclick="select(this.id)"]').forEach(element => {
   element.onclick = () => select(element.id);
});
function select(eventid) {
   let clickedid = document.getElementById(eventid);
   let word = clickedid.innerHTML;
   if (word === array[k].answer) {
      clickedid.classList.toggle("green");
      k++;
      scores++;
      setTimeout(cssupdate, 1000);
      changequestion();
   } else {
      clickedid.classList.toggle("red");
      k++;
      setTimeout(cssupdate, 1000);
      changequestion();
   }
}

function cssupdate() {
   opt1.classList.remove("green");
   opt2.classList.remove("green");
   opt3.classList.remove("green");
   opt4.classList.remove("green");
   opt1.classList.remove("red");
   opt2.classList.remove("red");
   opt3.classList.remove("red");
   opt4.classList.remove("red");
}

let timer = setInterval(timechange, 1000);

function timechange() {
   second--;
   time.innerHTML = second;
   if (second === 0) {
      k++;
      changequestion();
   }
}

function changequestion() {
   if (k + 1 > array.length) {
      clearInterval(timer);
      setTimeout(Resultquiz, 1000);
   } else {
      clearInterval(timer);
      second = 20;
      setTimeout(update, 1000);
   }
}

function Resultquiz() {
   wrapper.style.display = "none";
   let show = document.getElementById("show");
   let scoreshow = document.getElementById("scoreshow");
   scoreshow.style.display = "flex";
   bar();
}

document.getElementById("backbtn").addEventListener("click", function() {
   window.history.back();
   islogined=true;
   localStorage.setItem("login",islogined);
});

function bar()
{
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = scores*5;
let speed = 80;
var rate=rate+progressEndValue;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #0E0E0E ${progressValue * 3.6}deg,
      #034731 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
    add(progressEndValue);
  }
}, speed);
}


// database work

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, get, child, update as updateDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


const firebaseConfig = {
   apiKey: "AIzaSyAseNADDgo6lzHNGBb5fHIHmQYTZqz4kF0",
    authDomain: "tech-test-62abd.firebaseapp.com",
    projectId: "tech-test-62abd",
    storageBucket: "tech-test-62abd.appspot.com",
    messagingSenderId: "86653276561",
    appId: "1:86653276561:web:d36aea88828a292206ca30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function add(itemrate) {

   const userRef = ref(db, 'user/' + localStorage.getItem("mail"));

   get(userRef).then((snapshot) => {
       if (snapshot.exists()) {
           const userData = snapshot.val(); 
              
           // Construct an object with the data you want to update.
           const updatepoints = {
               points : itemrate
           };

           // Update the data on the Firebase Realtime Database.
           updateDatabase(child(userRef, "Java Basics 1"), updatepoints)
           
       }
   });
}
