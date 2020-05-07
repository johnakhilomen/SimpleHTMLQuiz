//Questions
//Answers

function GradeQuiz()
{
  for(var t = 0; t < 5; t++)
  {
    var ts = 'answer'+t;
    var radios = document.getElementsByName(ts);
    for (var radio of radios) {
    if (radio.checked) {
      console.log(radio.value);
    }
  }
}

}

var Questions = ["1. What is Biology?", "2. What is Chemistry", "3. Who is the president of the USA?", "4. What is the name of the US Vice Predident", "5. What is the full meaning of HTML?"];
var AnswersforQuestions= [
["A Scinece of Life", "B Scinece of Hate", "C Scinece of Love", "D Study of Plants"], 
["A Scinece of Life", "B Scinece of Hate", "C Scinece of Love", "D study of matter"], 
["A Scinece of Life", "B Scinece of Hate", "C D J Trump", "D Study of Plants"], 
["A Scinece of Life", "B Mike Pence", "C Scinece of Love", "D Study of Plants"], 
["A Hypertext Markup Language", "B Scinece of Hate", "C Scinece of Love", "D Study of Plants"]
];

var tyt = ["A", "B", "C", "D"];

for (var index = 0; index < Questions.length; index++)
{
  document.getElementById("quizdiv").innerHTML += "<p>" + Questions[index] +"</p>";
  for (var j = 0; j < AnswersforQuestions[index].length; j++)
  {
    document.getElementById("quizdiv").innerHTML += "<input type=radio id=answer"+index+" name=answer"+index+" value="+tyt[j]+" checked = false>"
    +AnswersforQuestions[index][j] + "<br>";

  }
}

document.getElementById("quizdiv").innerHTML += "<input type=submit value=Submit onclick=GradeQuiz()>";

