// QuizApp
"use strict";

// STEP 1: Question Bank

const questionBank = [
    {
        question: "Which Brazilian city hosted COP30, the UN climate conference in 2025?",
        choices: ["Rio de Janeiro", "Brasilia", "Belem", "Sao Paulo"],
        correctAnswer: 2
    },
    {
        question: "Which three countries hosted the 2026 FIFA World Cup?",
        choices: [
            "Spain, Portugal and Morocco",
            "USA, Canada and Mexico",
            "Brazil, Argentina and Chile",
            "Germany, France and Italy"
        ],
        correctAnswer: 1
    },
    {
        question: "Which city is scheduled to host the 2028 Summer Olympics?",
        choices: ["Paris", "Tokyo", "Los Angeles", "London"],
        correctAnswer: 2
    },
    {
        question: "Which two Italian locations are hosting the 2026 Winter Olympics?",
        choices: [
            "Rome and Naples",
            "Milan and Cortina d'Ampezzo",
            "Venice and Florence",
            "Turin and Palermo"
        ],
        correctAnswer: 1
    },
    {
        question: "Where is the headquarters of the United Nations?",
        choices: ["Geneva", "New York City", "Paris", "London"],
        correctAnswer: 1
    },
    {
        question: "Which organization leads international public health efforts?",
        choices: ["WHO", "WTO", "FIFA", "OPEC"],
        correctAnswer: 0
    },
    {
        question: "What does UNESCO primarily promote?",
        choices: [
            "Military cooperation",
            "Education, science and culture",
            "International banking",
            "Oil production"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the main role of the World Trade Organization?",
        choices: [
            "Regulating international trade rules",
            "Organizing the Olympic Games",
            "Managing global health emergencies",
            "Protecting endangered animals only"
        ],
        correctAnswer: 0
    },
    {
        question: "Which institution works to promote international monetary cooperation and financial stability?",
        choices: ["IMF", "UNICEF", "NATO", "UNESCO"],
        correctAnswer: 0
    },
    {
        question: "Which institution provides development financing to countries?",
        choices: ["FIFA", "World Bank", "Interpol", "WHO"],
        correctAnswer: 1
    },
    {
        question: "What is the main focus of the Paris Agreement?",
        choices: [
            "International tourism",
            "Climate change",
            "Global football",
            "Space exploration"
        ],
        correctAnswer: 1
    },
    {
        question: "How many Sustainable Development Goals (SDGs) did the United Nations adopt?",
        choices: ["10", "15", "17", "20"],
        correctAnswer: 2
    },
    {
        question: "What does the G20 bring together?",
        choices: [
            "Major economies to discuss global economic issues",
            "Only African countries",
            "Professional football clubs",
            "Space agencies only"
        ],
        correctAnswer: 0
    },
    {
        question: "Which country joined Brazil, Russia, India and China to form BRICS?",
        choices: ["Japan", "South Africa", "Canada", "Australia"],
        correctAnswer: 1
    },
    {
        question: "Which regional organization promotes cooperation among West African states?",
        choices: ["ASEAN", "ECOWAS", "NATO", "European Union"],
        correctAnswer: 1
    },
    {
        question: "Where is the headquarters of the African Union?",
        choices: ["Lagos", "Nairobi", "Addis Ababa", "Accra"],
        correctAnswer: 2
    },
    {
        question: "Which region does ASEAN primarily represent?",
        choices: [
            "Southeast Asia",
            "South America",
            "Northern Europe",
            "Central Africa"
        ],
        correctAnswer: 0
    },
    {
        question: "What is NATO primarily concerned with?",
        choices: [
            "Collective defence and security",
            "Global education",
            "International trade tariffs",
            "World health research"
        ],
        correctAnswer: 0
    },
    {
        question: "Which currency is used by many European Union member countries?",
        choices: ["Dollar", "Euro", "Yen", "Rupee"],
        correctAnswer: 1
    },
    {
        question: "What is OPEC primarily associated with?",
        choices: [
            "Oil-exporting countries",
            "International schools",
            "Global internet services",
            "Olympic sports"
        ],
        correctAnswer: 0
    },
    {
        question: "What is a major responsibility of the International Atomic Energy Agency (IAEA)?",
        choices: [
            "Promoting safe and peaceful uses of nuclear technology",
            "Organizing world elections",
            "Managing international football",
            "Controlling global shipping prices"
        ],
        correctAnswer: 0
    },
    {
        question: "Which United Nations agency focuses on the welfare and rights of children?",
        choices: ["UNICEF", "UNESCO", "WTO", "IMF"],
        correctAnswer: 0
    },
    {
        question: "Which UN agency works on food security and agriculture?",
        choices: ["FAO", "NATO", "FIFA", "ILO"],
        correctAnswer: 0
    },
    {
        question: "Which UN agency leads international efforts to protect refugees?",
        choices: ["UNHCR", "WTO", "OPEC", "Interpol"],
        correctAnswer: 0
    },
    {
        question: "Which organization promotes international labour standards and workers' rights?",
        choices: ["ILO", "FIFA", "IMF", "IAEA"],
        correctAnswer: 0
    },
    {
        question: "What is Interpol's main purpose?",
        choices: [
            "Helping police forces cooperate internationally",
            "Managing world currencies",
            "Running international schools",
            "Organizing climate conferences"
        ],
        correctAnswer: 0
    },
    {
        question: "Where is the International Court of Justice located?",
        choices: ["The Hague", "New York", "Geneva", "Brussels"],
        correctAnswer: 0
    },
    {
        question: "What does the International Criminal Court investigate and prosecute?",
        choices: [
            "Serious international crimes within its jurisdiction",
            "Minor traffic offences worldwide",
            "International sporting disputes only",
            "Global banking transactions"
        ],
        correctAnswer: 0
    },
    {
        question: "On which date is World Environment Day observed?",
        choices: ["June 5", "April 22", "March 8", "October 16"],
        correctAnswer: 0
    },
    {
        question: "When is Earth Day celebrated?",
        choices: ["January 1", "April 22", "June 5", "December 10"],
        correctAnswer: 1
    },
    {
        question: "On which date is World Water Day observed?",
        choices: ["March 22", "May 1", "July 11", "November 20"],
        correctAnswer: 0
    },
    {
        question: "When is World Food Day observed?",
        choices: ["October 16", "August 12", "February 14", "December 1"],
        correctAnswer: 0
    },
    {
        question: "When is International Women's Day celebrated?",
        choices: ["March 8", "April 7", "June 5", "September 21"],
        correctAnswer: 0
    },
    {
        question: "When is World Health Day observed?",
        choices: ["April 7", "March 22", "May 5", "October 24"],
        correctAnswer: 0
    },
    {
        question: "In which city is the Nobel Peace Prize ceremony traditionally held?",
        choices: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
        correctAnswer: 1
    },
    {
        question: "Who established the Nobel Prizes through his will?",
        choices: [
            "Albert Einstein",
            "Alfred Nobel",
            "Isaac Newton",
            "Alexander Fleming"
        ],
        correctAnswer: 1
    },
    {
        question: "What does AI stand for in modern technology?",
        choices: [
            "Automated Internet",
            "Artificial Intelligence",
            "Advanced Information",
            "Applied Integration"
        ],
        correctAnswer: 1
    },
    {
        question: "What is phishing in cybersecurity?",
        choices: [
            "A method of protecting computer screens",
            "A deceptive attempt to steal sensitive information",
            "A type of computer hardware",
            "A way to improve internet speed"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of these is a renewable energy source?",
        choices: ["Coal", "Solar energy", "Petroleum", "Natural gas"],
        correctAnswer: 1
    },
    {
        question: "Which gas is a major contributor to human-caused global warming?",
        choices: ["Oxygen", "Carbon dioxide", "Helium", "Neon"],
        correctAnswer: 1
    },
    {
        question: "What does biodiversity describe?",
        choices: [
            "The variety of living organisms",
            "The number of roads in a city",
            "The amount of money in a bank",
            "The speed of internet connections"
        ],
        correctAnswer: 0
    },
    {
        question: "Which UN Sustainable Development Goal focuses on climate action?",
        choices: [
            "Goal 4",
            "Goal 7",
            "Goal 13",
            "Goal 17"
        ],
        correctAnswer: 2
    },
    {
        question: "Which Japanese city hosted Expo 2025?",
        choices: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
        correctAnswer: 1
    },
    {
        question: "Which city hosted the 2024 Summer Olympic Games?",
        choices: ["Paris", "Beijing", "Athens", "Sydney"],
        correctAnswer: 0
    },
    {
        question: "How many teams are competing in the expanded 2026 FIFA World Cup format?",
        choices: ["32", "36", "40", "48"],
        correctAnswer: 3
    },

    // Five country-and-capital questions
    {
        question: "What is the capital city of Australia?",
        choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2
    },
    {
        question: "What is the capital city of Canada?",
        choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: 2
    },
    {
        question: "What is the capital city of Brazil?",
        choices: ["Rio de Janeiro", "Brasilia", "Sao Paulo", "Salvador"],
        correctAnswer: 1
    },
    {
        question: "What is the capital city of Japan?",
        choices: ["Kyoto", "Osaka", "Tokyo", "Nagoya"],
        correctAnswer: 2
    },
    {
        question: "What is the capital city of Nigeria?",
        choices: ["Lagos", "Kano", "Port Harcourt", "Abuja"],
        correctAnswer: 3
    },
  {
    question: "Which river is traditionally listed as the longest in the world?",
    choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswer: 0
  },
  {
    question: "What is the largest living bird?",
    choices: ["Emu", "Ostrich", "Albatross", "Emperor penguin"],
    correctAnswer: 1
  },
  {
    question: "Which land animal is the fastest?",
    choices: ["Cheetah", "Lion", "Pronghorn", "Horse"],
    correctAnswer: 0
  },
  {
    question: "What is the highest mountain above sea level?",
    choices: ["K2", "Mount Everest", "Denali", "Kangchenjunga"],
    correctAnswer: 1
  },
  {
    question: "Which country has the largest population in 2026?",
    choices: ["China", "India", "United States", "Indonesia"],
    correctAnswer: 1
  },
  {
    question: "Which country is often called the 'Giant of Africa'?",
    choices: ["Nigeria", "Kenya", "Egypt", "Ghana"],
    correctAnswer: 0
  },
  {
    question: "Who is the president of Russia?",
    choices: ["Vladimir Putin", "Dmitry Medvedev", "Mikhail Mishustin", "Sergey Lavrov"],
    correctAnswer: 0
  },
  {
    question: "Which animal is often used as a symbol of wisdom in popular culture?",
    choices: ["Owl", "Fox", "Eagle", "Dolphin"],
    correctAnswer: 0
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["African elephant", "Blue whale", "Giraffe", "Sperm whale"],
    correctAnswer: 1
  },
  {
    question: "Which continent is the largest by land area?",
    choices: ["Africa", "Asia", "North America", "Antarctica"],
    correctAnswer: 1
  },
  {
    question: "How many continents are commonly taught in the seven-continent model?",
    choices: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: 2
  },
  {
    question: "What is the smallest independent country in the world by area?",
    choices: ["Monaco", "Vatican City", "Malta", "San Marino"],
    correctAnswer: 1
  },
  {
    question: "What is the currency of Nigeria?",
    choices: ["Cedi", "Naira", "Rand", "Shilling"],
    correctAnswer: 1
  },
  {
    question: "Which of these countries is crossed by the Equator?",
    choices: ["Ecuador", "Morocco", "Japan", "Spain"],
    correctAnswer: 0
  },
  {
    question: "How many United Nations member states are there?",
    choices: ["190", "193", "195", "200"],
    correctAnswer: 1
  },
  {
    question: "Is there one universally agreed answer to who the most intelligent human is?",
    choices: ["Yes, it is always the same person", "Yes, it is the oldest person", "No, intelligence has different measures", "Yes, it is the person with the highest degree"],
    correctAnswer: 2
  },
  {
    question: "Is there one universally agreed 'best football player in the world'?",
    choices: ["Yes, the same player is always best", "No, it depends on criteria and opinion", "Yes, the tallest player", "Yes, the oldest player"],
    correctAnswer: 1
  },
  {
    question: "Which aircraft holds the record as the fastest crewed, powered aircraft?",
    choices: ["Concorde", "North American X-15", "SR-71 Blackbird", "Boeing 747"],
    correctAnswer: 1
  },
  {
    question: "Which club has won the most UEFA Champions League titles?",
    choices: ["Liverpool", "Real Madrid", "Manchester United", "AC Milan"],
    correctAnswer: 1
  },
  {
    question: "What is Manchester United's home stadium called?",
    choices: ["Anfield", "Old Trafford", "Wembley Stadium", "Etihad Stadium"],
    correctAnswer: 1
  },
  {
    question: "Who ranked first on Forbes' real-time billionaires list on October 21, 2026?",
    choices: ["Jeff Bezos", "Elon Musk", "Larry Page", "Michael Dell"],
    correctAnswer: 1
  },
  {
    question: "What is a female lion called?",
    choices: ["Lioness", "Doe", "Mare", "Ewe"],
    correctAnswer: 0
  },
  {
    question: "Which bird is known for reaching the fastest speeds in a dive?",
    choices: ["Peregrine falcon", "Ostrich", "Bald eagle", "Albatross"],
    correctAnswer: 0
  },
  {
    question: "Which river flows through Egypt?",
    choices: ["Nile", "Amazon", "Danube", "Mekong"],
    correctAnswer: 0
  },
  {
    question: "What is the capital of Nigeria?",
    choices: ["Lagos", "Abuja", "Kano", "Ibadan"],
    correctAnswer: 1
  },
  {
    question: "Which ocean is the largest?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: 2
  },
  {
    question: "Which animal is the largest land mammal?",
    choices: ["White rhinoceros", "African bush elephant", "Hippopotamus", "Giraffe"],
    correctAnswer: 1
  },
  {
    question: "Which country is home to Mount Everest?",
    choices: ["Nepal", "India", "Bhutan", "Pakistan"],
    correctAnswer: 0
  },
  {
    question: "What is the capital of Russia?",
    choices: ["St. Petersburg", "Moscow", "Kazan", "Sochi"],
    correctAnswer: 1
  },
  {
    question: "Which continent contains the Sahara Desert?",
    choices: ["Asia", "Africa", "Australia", "South America"],
    correctAnswer: 1
  },
  {
    question: "Which of these animals is known for using tools in the wild?",
    choices: ["Chimpanzee", "Koala", "Sheep", "Panda"],
    correctAnswer: 0
  },
  {
    question: "What is the capital of Australia?",
    choices: ["Sydney", "Canberra", "Melbourne", "Perth"],
    correctAnswer: 1
  },
  {
    question: "Which country is crossed by the Equator and includes the Galápagos Islands?",
    choices: ["Ecuador", "Peru", "Colombia", "Chile"],
    correctAnswer: 0
  },
  {
    question: "Which is the smallest continent by land area?",
    choices: ["Europe", "Australia", "Antarctica", "South America"],
    correctAnswer: 1
  },
  {
    question: "Which animal is the fastest in the sea according to commonly cited speed records?",
    choices: ["Sailfish", "Blue whale", "Sea turtle", "Manatee"],
    correctAnswer: 0
  },
  {
    question: "Who developed this QuizApp?",
    choices: ["Luna", "RantiDev", "Sundari", "Soma"],
    correctAnswer: 1
  },
  {
    question: "Which country is often nicknamed the 'Land of the Rising Sun'?",
    choices: ["China", "Japan", "Thailand", "South Korea"],
    correctAnswer: 1
  },
  {
    question: "Which planet is the largest in our solar system?",
    choices: ["Earth", "Saturn", "Jupiter", "Neptune"],
    correctAnswer: 2
  },
  {
    question: "What is the capital of Brazil?",
    choices: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    correctAnswer: 1
  },
  {
    question: "Which mammal lays eggs?",
    choices: ["Platypus", "Dolphin", "Bat", "Kangaroo"],
    correctAnswer: 0
  },
  {
    question: "Which country has the largest land area in the world?",
    choices: ["Canada", "China", "Russia", "United States"],
    correctAnswer: 2
  },
  {
    question: "What is the capital of France?",
    choices: ["Lyon", "Paris", "Marseille", "Nice"],
    correctAnswer: 1
  },
  {
    question: "What is the largest hot desert in the world?",
    choices: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Kalahari Desert"],
    correctAnswer: 1
  },
  {
    question: "Which country has the most natural lakes?",
    choices: ["Canada", "Brazil", "India", "Egypt"],
    correctAnswer: 0
  },
  {
    question: "Which animal is the tallest living land animal?",
    choices: ["Ostrich", "Giraffe", "Elephant", "Camel"],
    correctAnswer: 1
  },
  {
    question: "What is the capital of Ghana?",
    choices: ["Accra", "Kumasi", "Lagos", "Dakar"],
    correctAnswer: 0
  },
  {
    question: "Which country is home to the ancient city of Petra?",
    choices: ["Jordan", "Lebanon", "Iraq", "Iran"],
    correctAnswer: 0
  },
  {
    question: "Which mountain range separates much of Europe from Asia?",
    choices: ["Alps", "Andes", "Ural Mountains", "Rocky Mountains"],
    correctAnswer: 2
  },
  {
    question: "Which animal is known as the largest living reptile?",
    choices: ["Komodo dragon", "Saltwater crocodile", "Green anaconda", "Leatherback sea turtle"],
    correctAnswer: 1
  },
  {
    question: "Which country uses the yen as its currency?",
    choices: ["China", "Japan", "South Korea", "Vietnam"],
    correctAnswer: 1
  }
];


// STEP 2: Select HTML Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const quizRestartBtn = document.getElementById("quiz-restart-btn");
const playerNameInput = document.getElementById("player-name");

const progress = document.getElementById("progress");
const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const coinBalance = document.getElementById("coin-balance");
const finalCoins = document.getElementById("final-coins");
const backgroundMusic = document.getElementById("background-music");
const musicButtons = [
    document.getElementById("musicToggle"),
    document.getElementById("music-btn")
].filter(Boolean);

// STEP 3: Initialize Variables
const REWARD_PER_CORRECT_ANSWER = 10;
const QUESTIONS_PER_ATTEMPT = 50;
let currentQuestionIndex = 0;
let quizQuestions = [];
let score = 0;
let totalCoins = 0;
let selectedAnswer = null;
let answerSubmitted = false;
let musicEnabled = true;
let playerName = "";

function updateCoinDisplay() {
    coinBalance.textContent = `🪙 Coins: ${totalCoins}`;
    finalCoins.textContent = `🪙 ${totalCoins}`;
}

function selectQuizQuestions() {
    const shuffledQuestions = [...questionBank];

    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffledQuestions[i], shuffledQuestions[j]] =
            [shuffledQuestions[j], shuffledQuestions[i]];
    }

    quizQuestions = shuffledQuestions.slice(
        0,
        Math.min(QUESTIONS_PER_ATTEMPT, shuffledQuestions.length)
    );
}

// STEP 4: Start the Quiz
function startQuiz() {
    playerName = playerNameInput.value.trim();

    if (!playerName) {
        playerNameInput.setCustomValidity("Please enter your name to start.");
        playerNameInput.reportValidity();
        playerNameInput.focus();
        return;
    }

    playerNameInput.setCustomValidity("");
    currentQuestionIndex = 0;
    score = 0;
    totalCoins = 0;
    selectedAnswer = null;
    answerSubmitted = false;

    startScreen.classList.add("hidden");
    resultsScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    nextBtn.textContent = "Next";
    updateCoinDisplay();
    selectQuizQuestions();

    loadQuestion();
    playBackgroundMusic();
}

// STEP 5: Load a Question
function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    progress.textContent =
        `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;

    questionElement.textContent = currentQuestion.question;

    choicesContainer.innerHTML = "";
    feedback.textContent = "";

    selectedAnswer = null;
    answerSubmitted = false;
    nextBtn.disabled = true;

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");

        button.textContent = choice;
        button.type = "button";

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        choicesContainer.appendChild(button);
    });
}

// STEP 6: Select an Answer
function selectAnswer(index) {
    if (answerSubmitted) {
        return;
    }

    selectedAnswer = index;

    const choiceButtons =
        choicesContainer.querySelectorAll("button");

    choiceButtons.forEach((button, buttonIndex) => {
        button.classList.toggle(
            "selected",
            buttonIndex === index
        );
    });

    nextBtn.disabled = false;
}

// STEP 7: Check Answer and Move Forward
function handleNextClick() {
    // Check the answer on the first click
    if (!answerSubmitted) {
        if (selectedAnswer === null) {
            return;
        }

        answerSubmitted = true;

        const currentQuestion =
            quizQuestions[currentQuestionIndex];

        const choiceButtons =
            choicesContainer.querySelectorAll("button");

        // Highlight the correct answer
        choiceButtons[currentQuestion.correctAnswer]
            .classList.add("correct");

        if (selectedAnswer === currentQuestion.correctAnswer) {
            score++;
            totalCoins += REWARD_PER_CORRECT_ANSWER;
            updateCoinDisplay();

            feedback.textContent = "Correct! Well done.";
        } else {
            choiceButtons[selectedAnswer]
                .classList.add("incorrect");

            feedback.textContent =
                "Incorrect! The correct answer is highlighted.";
        }

        // Prevent changing the answer
        choiceButtons.forEach(button => {
            button.disabled = true;
        });

        nextBtn.textContent =
            currentQuestionIndex === quizQuestions.length - 1
                ? "View Results"
                : "Next Question";

        return;
    }

    // Move to the next question on the next click
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        nextBtn.textContent = "Next";
        loadQuestion();
    } else {
        showResults();
    }
}

// STEP 8: Display Results
function showResults() {
    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");
    pauseMusic();

    finalScore.textContent =
        `${playerName}, you scored ${score}/${quizQuestions.length}!`;
    finalCoins.textContent = `🪙 ${totalCoins}`;

    const percentage =
        (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent =
            "Excellent! You answered every question correctly!";
    } else if (percentage >= 70) {
        resultMessage.textContent =
            "Great job! You have a good understanding of the subject.";
    } else if (percentage >= 40) {
        resultMessage.textContent =
            "Good effort! Keep practicing to improve your score.";
    } else {
        resultMessage.textContent =
            "Keep learning! Practice makes progress.";
    }
}

// STEP 9: Restart the Quiz
function restartQuiz() {
    resultsScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

    currentQuestionIndex = 0;
    score = 0;
    totalCoins = 0;
    selectedAnswer = null;
    answerSubmitted = false;

    nextBtn.textContent = "Next";
    updateCoinDisplay();
    backgroundMusic.currentTime = 0;
    pauseMusic();
}

// STEP 10: Attach Event Listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", handleNextClick);
restartBtn.addEventListener("click", restartQuiz);
quizRestartBtn.addEventListener("click", startQuiz);
playerNameInput.addEventListener("input", () => {
    playerNameInput.setCustomValidity("");
});


/* =========================================
   QUIZ APP MUSIC SYSTEM
========================================= */

backgroundMusic.volume = 0.08;

function updateMusicButtons() {
    musicButtons.forEach(button => {
        button.textContent = musicEnabled
            ? "🎵 Music: On"
            : "🔇 Music: Off";
        button.setAttribute("aria-pressed", String(musicEnabled));
    });
}

function pauseMusic() {
    backgroundMusic.pause();
}

function playBackgroundMusic() {
    if (!musicEnabled || quizScreen.classList.contains("hidden")) {
        return;
    }

    backgroundMusic.play().catch(error => {
        if (error.name !== "NotAllowedError") {
            console.error("Could not play QuizApp music:", error);
        }
    });
}

musicButtons.forEach(button => {
    button.addEventListener("click", () => {
        musicEnabled = !musicEnabled;
        updateMusicButtons();

        if (musicEnabled) {
            playBackgroundMusic();
        } else {
            pauseMusic();
        }
    });
});
updateMusicButtons();
updateMusicButtons();
