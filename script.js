const quizData = [
    {
        help: " ",
        question: "1. Ποιό είναι το όνομα του θύματος;",
        a: "Kenny Weishuhn",
        b: "Kenneth Weishuhn",
        c: "Oliver Weishuhn",
        correct: "b",
    },
    {
        help: " ",
        question: "2. Που φοιτούσε ο Kenneth;",
        a: "Γυμνάσιο, North O'Brien",
        b: "Λύκειο, South O'Brien",
        c: "Γυμνάσιο, South O'Brien",
        correct: "c",
    },
    {
        help: " ",
        question: "3. Πως χαρακτηρίστικε ο εκφοβισμός του;",
        a: "επιθετικός, ανελέητος, συντριπτικός",
        b: "άγριος, συντριπτικός, ολέθριος",
        c: "συντριπτικός, επιθετικός, βίαιος",
        correct: "a",
    },
    {
        help: " ",
        question: "4. Ποια ήταν συσκεύη και το μέσο που λάμβανε τις απειλές;",
        a: "Η/Υ, Instagram",
        b: "Κινητό Τηλέφωνο, Facebook",
        c: "Tablet, Twitter",
        correct: "b",
    },
    {
        help: " ",
        question: "5. Γιατί δεχόταν απειλές;",
        a: "Για την καταγωγή του",
        b: "Για την εμφάνιση του",
        c: "Για την σεξουαλικότητα του",
        correct: "c",
    },
    {
        help: " ",
        question: "6. Ποσό καιρό πριν την αυτοκτονία του είχε εκδηλωθεί;",
        a: "Έναν μήνα",
        b: "Μία εβδομάδα",
        c: "Ένα χρόνο",
        correct: "a",
    },
    {
        help: " ",
        question: "7. Ποια ήταν η αιτία θανάτου του Kenneth;",
        a: "Αυτοκτονία",
        b: "Δολοφωνία",
        c: "Φυσικά αίτια",
        correct: "a",
    },
    {    
        help: " ",
        question: "8. Πόσο ετών ήταν ο Kenneth όταν αυτοκτόνησε;",
        a: "15",
        b: "14",
        c: "12",
        correct: "b",
    },
    {
        help: " ",
        question: "9. Πότε τελείωσε την ζωή του;",
        a: "Απρίλιο, 2002",
        b: "Αύγουστο, 2012",
        c: "Απρίλιο, 2012",
        correct: "c",
    },
    {
        help: " ",
        question: "10. Ποιός τον βρήκε νεκρό;",
        a: "Η μητέρα του",
        b: "Η αδελφή του",
        c: "Ο πατριός του",
        correct: "c",
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
           1. Kenneth Weishuhn <br>
           2. Γυμνάσιο, South O'Brien <br>
           3. επιθετικός, ανελέητος, συντριπτικός <br>
           4. Κινητό Τηλέφωνο, Facebook <br>
           5. Για την σεξουαλικότητα του <br>
           6. Έναν μήνα <br>
           7. Αυτοκτονία <br>
           8. 14 <br>
           9. Απρίλιο, 2012 <br>
           10. Ο πατριός του <br>
           </h2>

           <button onclick="location.reload()">Try Again?</button>
           `
       }
    }
})