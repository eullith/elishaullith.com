window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var screenName = player.GetVar("SlideTitle");

gtag('event', 'screen_view', {
  'screen_name': screenName
});

gtag('event', 'course_started', {
  'course_name': 'Dashboard Test',
  'timestamp': new Date().toISOString()
});
}

window.Script2 = function()
{
  var player = GetPlayer();
var screenName = player.GetVar("SlideTitle");

gtag('event', 'screen_view', {
'screen_name': screenName
});
}

window.Script3 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question1_Result"); // This must be set to "correct" or "incorrect"
var slideName = player.GetVar("SlideTitle");
var questionID = player.GetVar("Q1");

 gtag('event', 'quiz_question', {
 	'course_name': 'Dashboard Test',
 	'slide_name': slideName, 
    'question_id': questionID,
    'answer_result': result
});
}

window.Script4 = function()
{
  var player = GetPlayer();
var screenName = player.GetVar("SlideTitle");

gtag('event', 'screen_view', {
'screen_name': screenName
});
}

window.Script5 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question2_Result");
var slideName = player.GetVar("SlideTitle");
var questionID = player.GetVar("Q2");

gtag('event', 'quiz_question', {
  'course_name': 'Dashboard Test',
 	'slide_name': slideName,
  'question_id': questionID,
  'answer_result': result
});
}

window.Script6 = function()
{
  var player = GetPlayer();
var screenName = player.GetVar("SlideTitle");

gtag('event', 'screen_view', {
'screen_name': screenName
});
}

window.Script7 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question3_Result");
var slideName = player.GetVar("SlideTitle");
var questionID = player.GetVar("Q3");

gtag('event', 'quiz_question', {
  'course_name': 'Dashboard Test',
 	'slide_name': slideName, 
  'question_id': questionID,
  'answer_result': result
});
}

window.Script8 = function()
{
  var player = GetPlayer();
var screenName = player.GetVar("SlideTitle");

gtag('event', 'screen_view', {
  'screen_name': screenName
});
}

window.Script9 = function()
{
  var player = GetPlayer();
var totalScore = player.GetVar("Quiz1.ScorePoints");
var scorePercent = player.GetVar("Quiz1.ScorePercent");

gtag('event', 'quiz_score', {
	'total_score': totalScore,
	'score_percent': scorePercent,
	'timestamp': new Date().toISOString()
});
}

};
