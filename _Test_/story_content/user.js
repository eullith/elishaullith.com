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

gtag('event', 'page_view', {
  'page_title': screenName
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

gtag('event', 'page_view', {
  'page_title': screenName
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
 	'page_title': slideName, 
    'question_id': questionID,
    'answer_result': result
});
}

window.Script4 = function()
{
  var player = GetPlayer();
var screenName = player.GetVar("SlideTitle");

gtag('event', 'page_view', {
  'page_title': screenName
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
 	'page_title': slideName,
  'question_id': questionID,
  'answer_result': result
});
}

window.Script6 = function()
{
  var player = GetPlayer();
var screenName = player.GetVar("SlideTitle");

gtag('event', 'page_view', {
  'page_title': screenName
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
 	'page_title': slideName, 
  'question_id': questionID,
  'answer_result': result
});
}

window.Script8 = function()
{
  var player = GetPlayer();
var totalScore = player.GetVar("ScorePoints");
var scorePercent = player.GetVar("ScorePercent");
var screenName = player.GetVar("SlideTitle");

gtag('event', 'quiz_score', {
	'screen_name': screenName,
	'total_score': totalScore,
	'score_percent': scorePercent,
	'timestamp': new Date().toISOString()
});
}

};
