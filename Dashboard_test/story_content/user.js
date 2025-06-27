function sendQuizResult(questionId, storylineVarName) {
  var player = GetPlayer();
  var result = player.GetVar(storylineVarName); // should be "correct" or "incorrect"

  if (typeof gtag === 'function' && result) {
    gtag('event', 'quiz_question', {
      'question_id': questionId,
      'answer_result': result.toLowerCase()
    });
    console.log(`Sent quiz_question event: ${questionId} - ${result}`);
  } else {
    console.warn(`gtag not defined or result missing for ${questionId}`);
  }
}