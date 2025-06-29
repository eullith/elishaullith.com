window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  gtag('event', 'test_event', {
  'test_param': 'hello_from_storyline'
});
}

window.Script2 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question1_Result"); // This must be set to "correct" or "incorrect"

if (result && typeof gtag === 'function') {
  gtag('event', 'quiz_question', {
    'question_id': 'Question 1',
    'answer_result': result.toLowerCase()
  });
  console.log("GA4 quiz_question sent:", result);
} else {
  console.warn("gtag not defined or Question1_Result missing");
}
}

window.Script3 = function()
{
  //Question correct
ga('send','event','Question','incorrect','Question 1');
}

window.Script4 = function()
{
  //Question correct
ga('send','event','Question','correct','Question 1');
}

window.Script5 = function()
{
  gtag('event', 'slide_view', {
  'slide_name': 'Question 2'
});
}

window.Script6 = function()
{
  var startTime = new Date().getTime();
window.slideStartTime = startTime;
}

window.Script7 = function()
{
  var endTime = new Date().getTime();
var timeSpent = Math.round((endTime - window.slideStartTime)/1000);  // in seconds

gtag('event', 'slide_time_spent', {
  'slide_name': 'Slide 1 - Introduction',
  'time_spent_seconds': timeSpent
});
}

window.Script8 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question2_Result");
var isCorrect = (result == "correct") ? "correct" : "incorrect";

gtag('event', 'quiz_question', {
  'question_id': 'Question 2',
  'answer_result': result
});
}

window.Script9 = function()
{
  //Question correct
ga('send','event','Question','incorrect','Question 2');
}

window.Script10 = function()
{
  //Question correct
ga('send','event','Question','correct','Question 2');
}

window.Script11 = function()
{
  gtag('event', 'slide_view', {
  'slide_name': 'Question 3'
});
}

window.Script12 = function()
{
  var startTime = new Date().getTime();
window.slideStartTime = startTime;
}

window.Script13 = function()
{
  var endTime = new Date().getTime();
var timeSpent = Math.round((endTime - window.slideStartTime)/1000);  // in seconds

gtag('event', 'slide_time_spent', {
  'slide_name': 'Slide 1 - Introduction',
  'time_spent_seconds': timeSpent
});
}

window.Script14 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question3_Result");
var isCorrect = (result == "correct") ? "correct" : "incorrect";

gtag('event', 'quiz_question', {
  'question_id': 'Question 3',
  'answer_result': result
});
}

window.Script15 = function()
{
  //Question correct
ga('send','event','Question','incorrect','Question 3');
}

window.Script16 = function()
{
  //Question correct
ga('send','event','Question','correct','Question 3');
}

};
