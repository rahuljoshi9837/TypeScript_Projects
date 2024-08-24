type Question = {
    id: string;
    text: string;
    options: { [key: string]: string };
    correctAnswer: string;
};

let questions: Question[] = [];

async function loadQuestions(): Promise<void> {
    try {
        const response = await fetch('questions.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        questions = await response.json();
        renderQuestions();
    } catch (error) {
        console.error('Failed to load questions:', error);
    }
}

function renderQuestions(): void {
    const form = document.getElementById("quizForm") as HTMLFormElement;

    questions.forEach(question => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
        <h3>${question.text}</h3>
        ${Object.entries(question.options).map(([key, value]) => `
          <label>
            <input type="radio" name="${question.id}" value="${key}"> ${key}. ${value}
          </label>
        `).join('')}
      `;
        form.appendChild(questionDiv);
    });
}

function calculateResults(): void {
    const form = document.getElementById("quizForm") as HTMLFormElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    questions.forEach(question => {
        const selectedOption = (form.elements.namedItem(question.id) as RadioNodeList).value;
        if (selectedOption === question.correctAnswer) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        }
    });

    resultDiv.innerHTML = `Correct answers: ${correctAnswers} <br> Wrong answers: ${wrongAnswers}`;
}

document.addEventListener("DOMContentLoaded", () => {
    loadQuestions().then(() => {
        document.getElementById("submitBtn")?.addEventListener("click", calculateResults);
    });
});
