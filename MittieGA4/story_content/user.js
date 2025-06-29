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
var pagetitle = player.GetVar("PageTitle");

gtag('event', 'page_view', {
  page_title: pagetitle,
  page_location: window.location.href
});
}

window.Script2 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Q1"); // Make sure this matches your variable name exactly

if (result && result.toLowerCase() === "correct") {
  gtag('send', 'event', 'Question', 'correct', 'Question 1');
  console.log("Sent: Question 1 - correct");
} else {
  gtag('send', 'event', 'Question', 'incorrect', 'Question 1');
  console.log("Sent: Question 1 - incorrect");
}
}

window.Script3 = function()
{
  Get Var Pagetitle from Storylune
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

gtag('send', 'screenview', {screenName: pagetitle});
}

window.Script4 = function()
{
  var player = GetPlayer();
var result = player.GetVar("Q2"); // Make sure this matches your variable name exactly

if (result && result.toLowerCase() === "correct") {
  gtag('send', 'event', 'Question', 'correct', 'Question 2');
  console.log("Sent: Question 2 - correct");
} else {
  gtag('send', 'event', 'Question', 'incorrect', 'Question 2');
  console.log("Sent: Question 2 - incorrect");
}
}

window.Script5 = function()
{
  Get Var Pagetitle from Storylune
var player = GetPlayer();
var pagetitle = player.GetVar("PageTitle");

gtag('send', 'screenview', {screenName: pagetitle});
}

};
