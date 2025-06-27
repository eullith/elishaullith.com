window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  gtag('event', 'slide_view', {
  'slide_name': 'Question 1'
});
}

window.Script2 = function()
{
  var startTime = new Date().getTime();
window.slideStartTime = startTime;
}

window.Script3 = function()
{
  var endTime = new Date().getTime();
var timeSpent = Math.round((endTime - window.slideStartTime)/1000);  // in seconds

gtag('event', 'slide_time_spent', {
  'slide_name': 'Question 1',
  'time_spent_seconds': timeSpent
});
}

window.Script4 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question1_Result");

gtag('event', 'quiz_question', {
  'question_id': 'Question 1',
  'answer_result': result
});
}

window.Script5 = function()
{
  //Question correct
ga('send','event','Question','incorrect','Question 1');
}

window.Script6 = function()
{
  //Question correct
ga('send','event','Question','correct','Question 1');
}

window.Script7 = function()
{
  gtag('event', 'slide_view', {
  'slide_name': 'Question 2'
});
}

window.Script8 = function()
{
  var startTime = new Date().getTime();
window.slideStartTime = startTime;
}

window.Script9 = function()
{
  var endTime = new Date().getTime();
var timeSpent = Math.round((endTime - window.slideStartTime)/1000);  // in seconds

gtag('event', 'slide_time_spent', {
  'slide_name': 'Slide 1 - Introduction',
  'time_spent_seconds': timeSpent
});
}

window.Script10 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question2_Result");
var isCorrect = (result == "correct") ? "correct" : "incorrect";

gtag('event', 'quiz_question', {
  'question_id': 'Question 2',
  'answer_result': result
});
}

window.Script11 = function()
{
  //Question correct
ga('send','event','Question','incorrect','Question 2');
}

window.Script12 = function()
{
  //Question correct
ga('send','event','Question','correct','Question 2');
}

window.Script13 = function()
{
  gtag('event', 'slide_view', {
  'slide_name': 'Question 3'
});
}

window.Script14 = function()
{
  var startTime = new Date().getTime();
window.slideStartTime = startTime;
}

window.Script15 = function()
{
  var endTime = new Date().getTime();
var timeSpent = Math.round((endTime - window.slideStartTime)/1000);  // in seconds

gtag('event', 'slide_time_spent', {
  'slide_name': 'Slide 1 - Introduction',
  'time_spent_seconds': timeSpent
});
}

window.Script16 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question3_Result");
var isCorrect = (result == "correct") ? "correct" : "incorrect";

gtag('event', 'quiz_question', {
  'question_id': 'Question 3',
  'answer_result': result
});
}

window.Script17 = function()
{
  //Question correct
ga('send','event','Question','incorrect','Question 3');
}

window.Script18 = function()
{
  //Question correct
ga('send','event','Question','correct','Question 3');
}

};
