var pos = 0,test , test_status , question , choice, choices, chA, chB, chC, chD,  correct = 0; ;
var questions = [
["Who was the only player to score a fifty and take five wickets in a match ?", "Jacques Kallis", "Yuvraj Singh", "Shawn Watson" , "Shahid Afridi" , "B"],
["Kevin O'Brien scored tha fastest fifty in world cup in how many balls ?", "37", "40", "45" ,"50" ,  "B"],
["Sachin Tendulkar scored his 18000 runs during the 2011 World cup. Against whom did he reach this landmark  ?", "England", "Australia", "Pakistan" ,"South Africa" ,  "B"],
["Who is the official ambessoder of World cup 2011 ?", "Sachin Tendulkar", "Sunil Gavaskar", "Saurabh Gaungly" ,"Kapil Dev" ,  "A"],
["Which team broke Australia's 34 match unbeaten streak in world cups, extending back to the 1999 tournament ?", "India", "Sri Lanka", "South Africa", "Pakistan","D"],
["Which is the only full-member nation to have been bowled out for less than 100 two times in world cup /" , "Sri Lanka", "Pakistan", "Bangladesh", "West Indies", "C"],
["Enraged Bangladesh fans stoned which team's bus, allegedly mistaking it for their own ?", "India", "South Africa", "West Indies", "England", "C" ],
["When was the opening ceremony of Cricket world Cup 2011 ?", "1 January 2011", "17 february 2011", "15 January 2011", "12 February 2011","B"],
["What was India's margin of victory over Bangladesh on 19/2/2011 in Cricket Word Cup 2011 ?", " 100 runs", "87 runs", "6 wickets", "4 wickets", "B"],
["Who were all out for 69 runs against New Zealand on 20/2/2011 in Cricket World Cup 2011 ?", "Bermuda", "Ireland", "Kenya", "Scotland", "C"]
];
function _(x){
return document.getElementById(x);
}
function renderQuestion(){
test = _("test");
if(pos >= questions.length){
test.innerHTML = "<h2> You got " +correct+ " out of " +questions.length+ " questions correct.</h2>"; 
_("test_status").innerHTML = "Test Completed!";
pos = 0;
correct = 0;
return false;
}
_("test_status").innerHTML = " Question "+(pos+1)+" of "+questions.length;
question = questions[pos][0]; 
chA = questions[pos][1]; 
chB = questions[pos][2]; 
chC = questions[pos][3];
chD = questions[pos][4]; 
test.innerHTML = "<h3>"+question+"</h3>";
test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
test.innerHTML += "<button onclick='checkAnswer()' id='buttons' >Submit Answer</button>"; 
}
function checkAnswer(){
choices = document.getElementsByName("choices");
for(var i =0; i<choices.length; i++){
if(choices[i].checked){
choice = choices[i].value;
}
}
if (choice == questions[pos][5]){
correct++;
}
pos++;
renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
