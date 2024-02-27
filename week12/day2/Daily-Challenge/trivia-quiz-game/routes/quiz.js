const express = require('express');
const router = express.Router();
const triviaQuestions = require('../modules/trivia.js');

let currentQuestionIndex = 0;
let score = 0;

router.get('/quiz', (req, res)=>{
    const currentQuestion = triviaQuestions[currentQuestionIndex]
    res.json({ question: currentQuestion.question})
})

router.post('/quiz', (req, res)=>{
    const currentQuestion = triviaQuestions[currentQuestionIndex]
    const submittedAnswer = req.body.answer;

    if(submittedAnswer.toLowerCase()=== currentQuestion.answer.toLowerCase()){
        score++;
        res.json({message: "correct answer!"})
    }else{
        res.json({message: "incorret answer!"})
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= triviaQuestions.length) {
        res.json({ message: "Quiz finished! Check your final score at /quiz/score." });
      }

    res.json({ question: currentQuestion.question})
})

router.get('/quiz/score', (req, res) => {
    res.json({ score: score });
  });

  module.exports = router;