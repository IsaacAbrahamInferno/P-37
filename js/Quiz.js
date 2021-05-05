class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
background("blue")

    //write code to show a heading for showing the result of Quiz
    textSize(20);
text(" results",350,20)
    //call getContestantInfo( ) here
Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
var y=280;

    //write code to add a note here'
    text("note the winner is highlighted in green",100,250)

    //write code to highlight contest who answered correctly
    for(var cont in allContestants){
      var correct="2"
      if(correct===allContestants[cont].answer) {
        fill("green")
      }
      else{
        fill("red")
      }
      text(allContestants[cont].name+":"+allContestants[cont].answer,150,y)
      y=y+20;
    }
    }
  }

}
