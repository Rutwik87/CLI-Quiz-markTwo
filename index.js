var readlineSync = require('readline-sync')
const chalk = require('chalk')


var data = [
  {
    question:"What was name of Harry's father?", 
    answer:"James"
  },
  {
    question:"At the end of Harry Potter and the Sorcerer's Stone, which professor removes his turban to reveal Voldemort on the back of his head?",
    answer:"Quirrel"
  },
  {
    question:"Who killed Dumbledore?",
    answer:"Severus Snape"
  },
  {
    question:"Who killed Sirius Black?",
    answer:"Bellatrix"
  },
  {
    question:"What is the name of broom gifted to Harry by Sirius?",
    answer:"Firebolt"
  }
]

var score = 0
var leaderScore = 4
var userName = ""
var houseName = ""

function welcomeScreen(){
  
  console.log(chalk.cyan("-----WELCOME TO HOGWARTS-----\n\n\n"))

  console.log(chalk.cyan("Put your wizarding knowledge to test by taking this Harry Potter Quiz\n"))


  userName = readlineSync.question(chalk.cyan("What is your name ?\n"))

  houseName = readlineSync.question(chalk.cyan("\nWhat house do you belong to ?\n"))

  console.log(chalk.white("\n"+ chalk.green(userName) + " of house "+ chalk.green(houseName)+", for every correct answer you will gain 1 point and lose 2 points for wrong answer\nLets Begin !!!!!\n\n"))

}

function check(question,answer) {
  var userAnswer = readlineSync.question(chalk.green(question) + "\n")

  if(userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log(chalk.green("Great!! You got that right.\n"))
    score++
  }
  else{
    console.log(chalk.red("Wrong Answer!!\n"))
    score = score - 2
  }

  if(score>0){
    console.log("Score: " + chalk.green(score))
  }
  else if (score === 0){
    console.log("Score: " + chalk.white(score))
  }
  else {
    console.log("Score: " + chalk.red(score))
  }
  
  console.log(chalk.yellow("---------------------------"))
}

function askQuestion(){
  for(var i = 0; i < data.length; i++){
    question = data[i].question
    answer = data[i].answer
    check(question,answer)
  }
}

function isLeader(score){
  console.log(chalk.white("=====================================\nThank You For Playing With Us!!"))
  if (score > leaderScore){
    leaderScore = score
    console.log(chalk.green("Congratulations " + userName+ "!!!\nYou are worthy of being a Wizard\n"))
  }
  else{
    console.log(chalk.green("Rutwik is highest scorer with score: " + leaderScore))
  }
}

welcomeScreen()
askQuestion()
isLeader(score)
