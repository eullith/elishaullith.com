window.InitUserScripts = function () {
  var player = GetPlayer();
  var object = player.object;
  var addToTimeline = player.addToTimeline;
  var setVar = player.SetVar;
  var getVar = player.GetVar;

  // ✅ Reusable quiz result sender
  function sendQuizResult(questionId, storylineVarName) {
    var result = player.GetVar(storylineVarName); // Expected: "correct" or "incorrect"
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

  window.Script1 = function () {
    gtag('event', 'slide_view', {
      'slide_name': 'Question 1'
    });
  };

  window.Script2 = function () {
    window.slideStartTime = new Date().getTime();
  };

  window.Script3 = function () {
    var timeSpent = Math.round((new Date().getTime() - window.slideStartTime) / 1000);
    gtag('event', 'slide_time_spent', {
      'slide_name': 'Question 1',
      'time_spent_seconds': timeSpent
    });
  };

  window.Script4 = function () {
    sendQuizResult("Question 1", "Question1_Result");
  };

  window.Script5 = function () {
    gtag('event', 'quiz_question', {
      'question_id': 'Question 1',
      'answer_result': 'incorrect'
    });
  };

  window.Script6 = function () {
    gtag('event', 'quiz_question', {
      'question_id': 'Question 1',
      'answer_result': 'correct'
    });
  };

  window.Script7 = function () {
    gtag('event', 'slide_view', {
      'slide_name': 'Question 2'
    });
  };

  window.Script8 = function () {
    window.slideStartTime = new Date().getTime();
  };

  window.Script9 = function () {
    var timeSpent = Math.round((new Date().getTime() - window.slideStartTime) / 1000);
    gtag('event', 'slide_time_spent', {
      'slide_name': 'Slide 1 - Introduction',
      'time_spent_seconds': timeSpent
    });
  };

  window.Script10 = function () {
    sendQuizResult("Question 2", "Question2_Result");
  };

  window.Script11 = function () {
    gtag('event', 'quiz_question', {
      'question_id': 'Question 2',
      'answer_result': 'incorrect'
    });
  };

  window.Script12 = function () {
    gtag('event', 'quiz_question', {
      'question_id': 'Question 2',
      'answer_result': 'correct'
    });
  };

  window.Script13 = function () {
    gtag('event', 'slide_view', {
      'slide_name': 'Question 3'
    });
  };

  window.Script14 = function () {
    window.slideStartTime = new Date().getTime();
  };

  window.Script15 = function () {
    var timeSpent = Math.round((new Date().getTime() - window.slideStartTime) / 1000);
    gtag('event', 'slide_time_spent', {
      'slide_name': 'Slide 1 - Introduction',
      'time_spent_seconds': timeSpent
    });
  };

  window.Script16 = function () {
    sendQuizResult("Question 3", "Question3_Result");
  };

  window.Script17 = function () {
    gtag('event', 'quiz_question', {
      'question_id': 'Question 3',
      'answer_result': 'incorrect'
    });
  };

  window.Script18 = function () {
    gtag('event', 'quiz_question', {
      'question_id': 'Question 3',
      'answer_result': 'correct'
    });
  };
};
