window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function trackSlide() {
  var player = GetPlayer();
  var slideName = player.GetVar("Menu.SlideTitle") || "Unnamed Slide";

  // 1. Slide view
  gtag('event', 'slide_view', {
    'slide_name': slideName
  });

  // 2. Start timer
  if (!window.slideStartTime) {
    window.slideStartTime = new Date().getTime();
  }

  // 3. On exit or next button, track time
  window.addEventListener("beforeunload", function () {
    var endTime = new Date().getTime();
    var timeSpent = Math.round((endTime - window.slideStartTime) / 1000);

    gtag('event', 'slide_time_spent', {
      'slide_name': slideName,
      'time_spent_seconds': timeSpent
    });

    console.log(`slide_time_spent sent for: ${slideName}, time: ${timeSpent}s`);
  });
}
}

window.Script2 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question1_Result"); // should be "correct" or "incorrect"

if (typeof gtag === 'function' && result) {
  gtag('event', 'quiz_question', {
    'question_id': 'Question 1',
    'answer_result': result.toLowerCase()
  });
  console.log("GA4 event sent: Question 1 - " + result);
} else {
  console.warn("GA4 event NOT sent: missing gtag or result for Question 1");
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
  trackSlide();
}

window.Script6 = function()
{
  window.trackQuizQuestion = function(questionId, storylineVarName) {
  var player = GetPlayer();
  var result = player.GetVar(storylineVarName);

  if (!result) {
    console.warn(`No result found for ${questionId}`);
    return;
  }

  var answer_result = (result.toLowerCase() === "correct") ? "correct" : "incorrect";

  gtag('event', 'quiz_question', {
    'question_id': questionId,
    'answer_result': answer_result
  });

  console.log(`quiz_question event sent for ${questionId}: ${answer_result}`);
};
}

window.Script7 = function()
{
  //Question correct
gtag('send','event','Question','incorrect','Question 2');
}

window.Script8 = function()
{
  //Question correct
gtag('send','event','Question','correct','Question 2');
}

window.Script9 = function()
{
  gtag('event', 'slide_view', {
  'slide_name': 'Question 3'
});
}

window.Script10 = function()
{
  var startTime = new Date().getTime();
window.slideStartTime = startTime;
}

window.Script11 = function()
{
  var endTime = new Date().getTime();
var timeSpent = Math.round((endTime - window.slideStartTime)/1000);  // in seconds

gtag('event', 'slide_time_spent', {
  'slide_name': 'Slide 1 - Introduction',
  'time_spent_seconds': timeSpent
});
}

window.Script12 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Question3_Result");
var isCorrect = (result == "correct") ? "correct" : "incorrect";

gtag('event', 'quiz_question', {
  'question_id': 'Question 3',
  'answer_result': result
});
}

window.Script13 = function()
{
  //Question correct
gtag('send','event','Question','incorrect','Question 3');
}

window.Script14 = function()
{
  //Question correct
gtag('send','event','Question','correct','Question 3');
}

};
