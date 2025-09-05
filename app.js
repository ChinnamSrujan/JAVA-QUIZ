// Java Quiz Application JavaScript
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function startQuiz() {
    const numQuestions = parseInt(document.getElementById('num-questions').value);
    
    // Select random questions
    currentQuiz = getRandomQuestions(numQuestions);
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;

    // Update UI
    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('total-questions').textContent = currentQuiz.length;
    
    displayQuestion();
}

function getRandomQuestions(num) {
    const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(num, allQuizQuestions.length));
}

function displayQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;
    document.getElementById('question-text').textContent = question.question_text;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.className = 'option';
        li.textContent = option;
        li.onclick = () => selectOption(li, String.fromCharCode(97 + index)); // a, b, c, d
        optionsContainer.appendChild(li);
    });
    
    document.getElementById('submit-btn').disabled = true;
    selectedAnswer = null;
}

function selectOption(element, answer) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Select current option
    element.classList.add('selected');
    selectedAnswer = answer;
    document.getElementById('submit-btn').disabled = false;
}

function submitAnswer() {
    if (!selectedAnswer) return;
    
    const question = currentQuiz[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct_answer;
    
    if (isCorrect) {
        score++;
        document.getElementById('current-score').textContent = score;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuiz.length) {
        setTimeout(displayQuestion, 500);
    } else {
        setTimeout(showResults, 500);
    }
}

function showResults() {
    const totalQuestions = currentQuiz.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('results-container').classList.remove('hidden');
    
    document.getElementById('final-score').textContent = `${score}/${totalQuestions}`;
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('correct-answers').textContent = score;
    document.getElementById('incorrect-answers').textContent = totalQuestions - score;
    document.getElementById('final-percentage').textContent = `${percentage}%`;
    
    let message = '';
    if (percentage >= 80) {
        message = '🌟 Excellent! You have a great understanding of Java!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Keep practicing to improve further!';
    } else if (percentage >= 40) {
        message = '📚 Not bad! Consider reviewing the concepts and try again!';
    } else {
        message = '💪 Keep studying! Practice makes perfect!';
    }
    
    document.getElementById('performance-message').textContent = message;
}

function restartQuiz() {
    document.getElementById('results-container').classList.add('hidden');
    document.getElementById('quiz-setup').classList.remove('hidden');
}

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log(`Java Quiz loaded with ${allQuizQuestions.length} questions`);
});
