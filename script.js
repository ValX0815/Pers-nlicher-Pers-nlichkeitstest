const questions = [
  {
    question: "Welcher dieser Gegenstände spiegelt dein inneres Wesen am besten wider?",
    answers: [
      "Ein Löffel mit Identitätskrise (er glaubt, er sei eine Gabel)",
      "Eine Socke, die schon lange ihren Zwilling verloren hat",
      "Ein Kaugummi-Automat, der nur noch Kieselsteine ausspuckt",
      "Eine Tür, die sich immer schließt, aber nie öffnet"
    ]
  },
  {
    question: "Was ist das Erste, das du tun würdest, wenn du morgen als Pinguin aufwachst?",
    answers: [
      "Einen Anzug anziehen – jetzt bin ich wirklich schick",
      "Einen Fisch suchen und dann überlegen, ob ich ihn wirklich essen will",
      "Mich bei der Arbeit krankmelden – wird schwer, die Tastatur mit Flossen zu benutzen",
      "Eine Eisfabrik gründen"
    ]
  },
  {
    question: "Welche dieser Situationen bereitet dir am meisten Angst?",
    answers: [
      "Ein Kühlschrank, der dich beim Vorbeigehen anspricht",
      "Eine Tür, die sich öffnet, obwohl niemand sie berührt hat",
      "Eine Ente, die dich seit Stunden unverändert anstarrt",
      "Die Tatsache, dass dieser Test vielleicht doch tiefere Bedeutung hat"
    ]
  },
  {
    question: "Was würdest du tun, wenn du in einem Aufzug bist und plötzlich stehen bleibst?",
    answers: [
      "Den Aufzug freundlich ansprechen und ihm versichern, dass es nicht deine Schuld war",
      "Ein imaginäres Gespräch mit dem Aufzugsmensch führen und dabei so tun, als würde es sich um ein vertrauliches Gespräch handeln",
      "Einfach anfangen, laut zu singen und hoffen, dass sich irgendetwas verändert",
      "Vom Aufzug verlangen, dass er sich entschuldigt und dann die Tür öffnet"
    ]
  },
  {
    question: "Du bist ein Würstchen. Was passiert jetzt?",
    answers: [
      "Du sprichst mit den anderen Würstchen über den Sinn des Lebens",
      "Du rollst dich in die Ecke und wartest auf die Grillparty",
      "Du versuchst, die perfekte Wurstform zu erreichen",
      "Du kämpfst gegen eine imaginäre Wurst-Armee"
    ]
  },
  {
    question: "Wenn du ein unsichtbares Wesen wärst, was würdest du tun?",
    answers: [
      "Dich bei der nächsten Supermarktkasse unsichtbar machen und einfach Sachen in den Korb legen",
      "Zu einem Konzert gehen und die Bühne stürmen, aber alle denken, es sei der Wind",
      "An einem Tisch sitzen und die Leute mit unsichtbaren Witzen zum Lachen bringen",
      "In einem öffentlichen Park auf Bänken tanzen und tun, als wären es fliegende Teppiche"
    ]
  }
];

const results = [
  "Du bist ein visionärer Denker, aber leider nur in Bezug auf unwichtige Dinge.",
  "Du hast das Herz eines Löwen, aber die Geduld einer überreifen Banane.",
  "Du bist der geborene Anführer… eines geheimen Clubs, der nie Mitglieder hat.",
  "Herzlichen Glückwunsch! Du bist offiziell der Meister des Zufalls!"
];

let step = 0;
let selectedAnswers = [];

function showQuestion() {
  const questionContainer = document.getElementById("question");
  const answersContainer = document.getElementById("answers");

  questionContainer.innerHTML = questions[step].question;

  answersContainer.innerHTML = "";
  questions[step].answers.forEach((answer, index) => {
    const answerButton = document.createElement("button");
    answerButton.innerHTML = answer;
    answerButton.onclick = () => handleAnswer(answer);
    answersContainer.appendChild(answerButton);
  });

  document.getElementById("next-button").classList.add("hidden");
}

function handleAnswer(answer) {
  selectedAnswers.push(answer);

  if (step < questions.length - 1) {
    step++;
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultText = document.getElementById("result-text");
  resultText.innerHTML = `${results[Math.floor(Math.random() * results.length)]} <br><br> Deine Antworten wurden von der KI geprüft, und es ist offiziell: Du bist ein Mensch. Es sei denn, du bist ein außerirdischer Agent in menschlicher Form – aber das ist eine andere Geschichte. April, April!`;

  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");
}

function restartTest() {
  step = 0;
  selectedAnswers = [];
  document.getElementById("result-container").classList.add("hidden");
  document.getElementById("question-container").classList.remove("hidden");
  showQuestion();
}

showQuestion();

