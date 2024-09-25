const questions = [
    {
        question: "Qual é o valor de 7 x 8?",
        options: ["54", "56", "64", "72"],
        answer: 1
    },
    {
        question: "Quem pintou a 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: 2
    },
    {
        question: "Qual é a fórmula química da água?",
        options: ["H₂O", "CO₂", "O₂", "H₂O₂"],
        answer: 0
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');
        
        q.options.forEach((option, i) => {
            const li = document.createElement('li');
            li.innerHTML = `<input type="radio" name="q${index}" value="${i}"> ${option}`;
            optionsList.appendChild(li);
        });
        
        questionElement.appendChild(optionsList);
        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            score++;
        }
    });
    return score;
}

document.getElementById('submit').addEventListener('click', () => {
    const score = calculateScore();
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
    resultElement.classList.remove('hidden');
});

// Carregar o quiz ao iniciar
loadQuiz();
