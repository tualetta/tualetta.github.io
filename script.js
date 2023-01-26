const quizData = [
    {
        help: " ",
        question: "QUESTION 1",
        a: "1",
        b: "2",
        c: "3",
        correct: "b",
    },
    {
        help: " ",
        question: "QUESTION 2",
        a: "1",
        b: "2",
        c: "3",
        correct: "c",
    },
    {
        help: " ",
        question: "QUESTION 3",
        a: "1",
        b: "2",
        c: "3",
        correct: "a",
    },
    {
        help: " ",
        question: "QUESTION 4",
        a: "1",
        b: "2",
        c: "3",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const help = document.getElementById('help')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    help.innerText = currentQuizData.help
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <h2> The correct answers were: <br>
           b. <br>
           c. <br>
           a. <br>
           b.</h2>

           <button onclick="location.reload()">Try Again?</button>
           `
       }
    }
})