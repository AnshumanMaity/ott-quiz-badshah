var readLineSync = require("readline-sync");
// console.log("How well do you know me ?");
var name = readLineSync.question("What is your name ?\n");
console.log("Welcome "+name+" to the OTT Quiz Badshah");

var score =0;
var highestScore=0;
// var nameOfHighestScorer="";

function evaluate(question,option,answer){
  
  console.log("\n"+question);
  var ans=readLineSync.question(option);
  console.clear();
  if(ans.toUpperCase()==answer.toUpperCase()){
    console.log("Right !!!");
    score=score+1;
  }
  else{
    console.log("Wrong!");
  }  
  console.log("\nYour Score is : "+score);
}

questions=[
  {question:"What is the other dimension in Stranger Things called?",option:"A)The down under\nB)The back to front\nC)The upside down\nD)The inside out\n",answer:"c"},
  {question:"In what U.S. state is Breaking Bad set?",option:"A)Texas\nB)Arizona\nC)New Mexico\nD)Utah\n",answer:"c"},
  {question:"What is the name of the fictional town where Stranger Things is set?",option:"A)Hawkins\nB)Chatswin\nC)Happiness\nD)Eerie\n",answer:"a"},
  {question:"Which series follows a family of adopted siblings who have superpowers?",option:"A)The Umbrella Academy\nB)The Defenders\nC)Space Force\nD)Raising Dion\n",answer:"a"},
  {question:"Riverdale is based on which famous comics?",option:"A)Harris\nB)Harvey\nC)Charlton\nD)Archie\n",answer:"d"}
  ];
  for(var i=0;i<questions.length;i++){
      evaluate(questions[i].question,questions[i].option,questions[i].answer);
  }
  // if(score>highestScore){
  //   highestScore=score;
  //   console.log("Congratulations, You are the highest Scorer.");
  // }
  // console.log("Top Score : "+highestScore);
  var highScore=[
    {
      name:'Sandeep',
      score:5
    },
    {
      name:"Rohan",
      score:4
    }
  ];
  var highest=false;
  console.log("\nLeader Board :\n");
  console.table(highScore);

  highScore.forEach( person => {
  if(score >=  person.score){
    highest = true;
  }
})
if(highest){
console.log("\n Wohhh! , "+name+", You are one of the Highest Scorer.\nPing me a screnshot of this to be in the leaderboard");
}
else{
  console.log("\n"+name+", Ping me to put your score on the board.")
}
