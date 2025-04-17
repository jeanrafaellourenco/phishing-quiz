// Quiz questions and answers
const quiz = [
  {
    q: "O que é phishing?",
    options: [
      { text: "Um tipo de malware que infecta computadores", correct: false },
      { text: "Uma tentativa de enganar alguém para obter dados pessoais", correct: true },
      { text: "Um firewall avançado para proteção online", correct: false },
      { text: "Um tipo de antivírus que bloqueia ameaças", correct: false },
    ],
    explanation:
      "Phishing é uma técnica de engenharia social onde criminosos se passam por entidades confiáveis para roubar informações sensíveis como senhas e dados de cartão.",
  },
  {
    q: "Qual o objetivo principal de um ataque de phishing?",
    options: [
      { text: "Instalar atualizações de segurança no sistema", correct: false },
      { text: "Coletar dados confidenciais como senhas e informações bancárias", correct: true },
      { text: "Melhorar a performance do computador da vítima", correct: false },
      { text: "Corrigir bugs em aplicativos populares", correct: false },
    ],
    explanation:
      "Ataques de phishing visam obter informações confidenciais como credenciais de login, números de cartão de crédito e dados bancários para uso fraudulento.",
  },
  {
    q: "Como identificar um e-mail de phishing?",
    options: [
      { text: "Linguagem alarmista, urgência e erros gramaticais", correct: true },
      { text: "Assinatura profissional e logotipos oficiais", correct: false },
      { text: "Sem erros ortográficos e com formatação perfeita", correct: false },
      { text: "Design bonito e links para redes sociais", correct: false },
    ],
    explanation:
      "E-mails de phishing frequentemente contêm senso de urgência, erros gramaticais, remetentes suspeitos e solicitações incomuns de informações pessoais.",
  },
  {
    q: "O que você deve fazer ao receber um e-mail suspeito?",
    options: [
      { text: "Clicar nos links para verificar se são legítimos", correct: false },
      { text: "Reportar ao time de segurança e não interagir com o conteúdo", correct: true },
      { text: "Encaminhar a amigos para alertá-los sobre a ameaça", correct: false },
      { text: "Ignorar e deletar sem reportar a ninguém", correct: false },
    ],
    explanation:
      "Nunca clique em links suspeitos. O correto é reportar ao departamento de segurança da sua organização e não interagir com o conteúdo de forma alguma.",
  },
  {
    q: "Sites falsos de phishing geralmente:",
    options: [
      { text: "Copiam o layout e visual de sites legítimos", correct: true },
      { text: "Têm domínios oficiais terminados em .gov ou .org", correct: false },
      { text: "Nunca usam certificados HTTPS ou cadeados de segurança", correct: false },
      { text: "São facilmente identificáveis por seus designs amadores", correct: false },
    ],
    explanation:
      "Sites de phishing frequentemente imitam sites legítimos com grande precisão visual, mas geralmente têm URLs diferentes ou sutilmente modificados.",
  },
  {
    q: "Qual destas é uma característica comum em mensagens de phishing?",
    options: [
      { text: "Comunicação personalizada mencionando seu histórico", correct: false },
      { text: "Solicitação para atualizar informações com urgência", correct: true },
      { text: "Contato direto por telefone para confirmar a mensagem", correct: false },
      { text: "Assinatura digital verificável da empresa", correct: false },
    ],
    explanation:
      "Mensagens de phishing frequentemente criam um senso de urgência para que você aja rapidamente sem pensar, como 'Sua conta será bloqueada em 24 horas'.",
  },
  {
    q: "Qual destas práticas ajuda a se proteger contra phishing?",
    options: [
      { text: "Usar a mesma senha em todos os sites para lembrar facilmente", correct: false },
      { text: "Verificar o URL antes de inserir informações sensíveis", correct: true },
      { text: "Clicar em links de e-mails que parecem ser de seu banco", correct: false },
      { text: "Compartilhar informações pessoais quando solicitado por e-mail", correct: false },
    ],
    explanation:
      "Sempre verifique o URL na barra de endereços antes de inserir informações. Phishers frequentemente usam URLs que parecem legítimos, mas têm pequenas diferenças.",
  },
  {
    q: "O que é spear phishing?",
    options: [
      { text: "Phishing direcionado a pessoas específicas com informações personalizadas", correct: true },
      { text: "Phishing que usa apenas mensagens de texto (SMS)", correct: false },
      { text: "Phishing que ataca apenas dispositivos móveis", correct: false },
      { text: "Phishing que ocorre apenas em redes sociais", correct: false },
    ],
    explanation:
      "Spear phishing é um ataque direcionado que usa informações específicas sobre o alvo para criar mensagens altamente personalizadas e convincentes.",
  },
  {
    q: "Qual é a melhor forma de verificar se um e-mail do seu banco é legítimo?",
    options: [
      { text: "Responder ao e-mail pedindo confirmação", correct: false },
      { text: "Clicar no link e verificar se o site parece oficial", correct: false },
      { text: "Ligar diretamente para o banco usando o número oficial", correct: true },
      { text: "Verificar se o e-mail tem o logotipo do banco", correct: false },
    ],
    explanation:
      "Nunca use informações de contato fornecidas no e-mail suspeito. Sempre use canais oficiais como o número no verso do seu cartão ou site oficial acessado diretamente.",
  },
  {
    q: "Por que ataques de phishing continuam sendo eficazes?",
    options: [
      { text: "Porque as pessoas não usam antivírus", correct: false },
      { text: "Porque exploram a psicologia humana e emoções como medo e urgência", correct: true },
      { text: "Porque os firewalls não conseguem bloqueá-los", correct: false },
      { text: "Porque são impossíveis de detectar tecnicamente", correct: false },
    ],
    explanation:
      "Phishing explora fatores humanos como confiança, medo, curiosidade e urgência, tornando-o eficaz mesmo com pessoas tecnicamente informadas.",
  },
]

// Game variables
let currentQuestion = 0
let score = 0
let lives = 3
let answered = false
let selectedQuestions = []

// Sound effects
const sounds = {
  correct: new Audio("public/audio/mixkit-fantasy-game-success-notification-270.wav"),
  incorrect: new Audio("public/audio/mixkit-retro-video-game-bubble-laser-277.wav"),
  gameOver: new Audio("public/audio/mixkit-drum-roll-566.wav"),
  click: new Audio("public/audio/mixkit-fantasy-game-success-notification-270.wav"),
  win: new Audio("public/audio/mixkit-fantasy-game-success-notification-270.wav"),
}

// Background music
const backgroundMusic = new Audio("public/audio/background-music.mp3")
backgroundMusic.loop = true
backgroundMusic.volume = 0.2

// Game settings
let musicEnabled = true
let soundEnabled = true

// Initialize the game
function initGame() {
  // Shuffle and select questions
  selectedQuestions = shuffleArray([...quiz]).slice(0, 5)

  // Setup settings modal
  const settingsModal = document.getElementById("settings-modal")
  const closeSettings = document.getElementById("closeSettings")
  const musicToggle = document.getElementById("musicToggle")
  const soundToggle = document.getElementById("soundToggle")

  // Setup share button
  const shareBtn = document.getElementById("shareBtn")

  closeSettings.addEventListener("click", () => {
    if (soundEnabled) playSound('click')
    settingsModal.style.display = "none"
  })

  // Close modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === settingsModal) {
      settingsModal.style.display = "none"
    }
  })

  // Music toggle
  musicToggle.checked = musicEnabled
  musicToggle.addEventListener("change", function () {
    musicEnabled = this.checked

    if (musicEnabled) {
      if (document.getElementById("quiz-screen").style.display === "flex") {
        backgroundMusic.play()
      }
    } else {
      backgroundMusic.pause()
    }
  })

  // Sound toggle
  soundToggle.checked = soundEnabled
  soundToggle.addEventListener("change", function () {
    soundEnabled = this.checked

    // Atualizar o volume de todos os efeitos sonoros imediatamente
    for (const key in sounds) {
      if (sounds.hasOwnProperty(key)) {
        
      }
    }
  })

  // Share button
  shareBtn.addEventListener("click", () => {
    if (soundEnabled) playSound('click')
    shareScore()
  })
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// Start the quiz
function startQuiz() {
  if (soundEnabled) playSound('click')

  // Start background music
  if (musicEnabled) {
    backgroundMusic.play()
    isMusicPlaying = true
  }

  initGame()
  document.getElementById("start-screen").style.display = "none"
  document.getElementById("quiz-screen").style.display = "flex"
  showQuestion()
}

// Display current question
function showQuestion() {
  const q = selectedQuestions[currentQuestion]
  answered = false

  document.getElementById("question").textContent = q.q
  document.getElementById("progress").textContent = `${currentQuestion + 1}/${selectedQuestions.length}`
  document.getElementById("score").textContent = score
  document.getElementById("lives").textContent = lives

  const optionsDiv = document.getElementById("options")
  optionsDiv.innerHTML = ""

  document.getElementById("feedback-container").style.display = "none"
  document.getElementById("nextBtn").style.display = "none"

  // Shuffle options for each question
  const shuffledOptions = shuffleArray([...q.options])

  shuffledOptions.forEach((opt, index) => {
    const div = document.createElement("div")
    div.className = "option"
    div.textContent = opt.text
    div.dataset.index = index

    div.onclick = () => {
      if (answered) return
      answered = true

      // Show feedback
      document.getElementById("feedback-container").style.display = "flex"
      document.getElementById("feedback-text").textContent = q.explanation

      if (opt.correct) {
        if (soundEnabled) playSound('correct')
        div.classList.add("correct")
        document.getElementById("feedback-icon").textContent = "✓"
        document.getElementById("feedback-icon").style.color = "var(--correct)"
        score += 100
        document.getElementById("score").textContent = score
      } else {
        if (soundEnabled) playSound('incorrect')
        div.classList.add("incorrect")
        document.getElementById("feedback-icon").textContent = "✗"
        document.getElementById("feedback-icon").style.color = "var(--incorrect)"
        lives--
        document.getElementById("lives").textContent = lives

        // Highlight the correct answer
        optionsDiv.querySelectorAll(".option").forEach((option, idx) => {
          if (shuffledOptions[idx].correct) {
            option.classList.add("correct")
          }
        })
      }

      document.getElementById("nextBtn").style.display = "flex"

      // Check if game over due to no lives
      if (lives <= 0) {
        setTimeout(() => {
          gameOver()
        }, 1500)
      }
    }

    optionsDiv.appendChild(div)
  })
}

// Move to next question
function nextQuestion() {
  if (soundEnabled) playSound('click')
  currentQuestion++

  if (currentQuestion < selectedQuestions.length) {
    showQuestion()
  } else {
    gameOver()
  }
}

// Game over
function gameOver() {
  document.getElementById("quiz-screen").style.display = "none"
  document.getElementById("game-over-screen").style.display = "flex"

  const finalScoreElement = document.getElementById("final-score")
  finalScoreElement.textContent = score

  const resultTitle = document.getElementById("result-title")
  const resultMessage = document.getElementById("result-message")

  if (lives > 0) {
    if (soundEnabled) playSound('win')
    resultTitle.textContent = "MISSÃO CUMPRIDA!"
    resultTitle.style.color = "var(--correct)"

    // Determine message based on score
    if (score === selectedQuestions.length * 100) {
      resultMessage.textContent = "Perfeito! Você é um especialista em segurança digital!"
    } else if (score >= selectedQuestions.length * 70) {
      resultMessage.textContent = "Muito bom! Você tem ótimos conhecimentos sobre phishing!"
    } else {
      resultMessage.textContent = "Bom trabalho! Continue aprendendo sobre segurança online."
    }
  } else {
    if (soundEnabled) playSound('gameOver')
    resultTitle.textContent = "GAME OVER"
    resultTitle.style.color = "var(--incorrect)"
    resultMessage.textContent = "Você perdeu todas as vidas. Tente novamente e aprenda mais sobre phishing!"
  }

  // Add score animation
  animateValue(finalScoreElement, 0, score, 1500)
}

// Share score
function shareScore() {
  const text = `Eu marquei ${score} pontos no Phishing Quiz! Você consegue fazer melhor? Jogue agora: https://jeanrafaellourenco.github.io/phishing-quiz/`

  // Check if Web Share API is supported
  if (navigator.share) {
    navigator
      .share({
        title: "Phishing Quiz - Minha Pontuação",
        text: text,
        url: "https://jeanrafaellourenco.github.io/phishing-quiz/",
      })
      .catch((error) => {
        console.log("Erro ao compartilhar:", error)
        fallbackShare(text)
      })
  } else {
    fallbackShare(text)
  }
}

// Substituir o alert por um hint visual
function fallbackShare(text) {
  // Create a temporary input to copy the text
  const input = document.createElement("textarea")
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand("copy")
  document.body.removeChild(input)

  // Mostrar hint visual em vez de alert
  const shareHint = document.getElementById("share-hint")
  shareHint.style.display = "flex"

  // Esconder o hint após 3 segundos
  setTimeout(() => {
    shareHint.style.display = "none"
  }, 3000)
}

// Restart the game
function restartGame() {
  if (soundEnabled) playSound('click')
  currentQuestion = 0
  score = 0
  lives = 3

  document.getElementById("game-over-screen").style.display = "none"
  document.getElementById("start-screen").style.display = "flex"
}

// Animate counting for score
function animateValue(element, start, end, duration) {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    element.textContent = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

// Track if music is playing
let isMusicPlaying = false

// Initialize event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Preload background image
  const img = new Image()
  img.src = ""

  // Initialize game settings and event listeners
  initGame()
})


// === CONTROLE DE VOLUME ADICIONADO ===

// === Volume Control ===
// musicSlider já declarado anteriormente
const sfxSlider = document.getElementById("sfxVolume");

if (musicSlider) {
  musicSlider.addEventListener("input", () => {
    backgroundMusic.volume = parseFloat(musicSlider.value);
  });
}

if (sfxSlider) {
  sfxSlider.addEventListener("input", () => {
    for (const key in sounds) {
      if (sounds[key] instanceof Audio) {
        sounds[key].volume = parseFloat(sfxSlider.value);
      }
    }
  });
}


// === AJUSTE DE VOLUME ===

// === Volume Padrão Global ===
let currentSfxVolume = 0.1;
let currentMusicVolume = 0.2;

if (musicSlider) {
  musicSlider.addEventListener("input", () => {
    currentMusicVolume = parseFloat(musicSlider.value);
    backgroundMusic.volume = currentMusicVolume;
  });
}

if (sfxSlider) {
  sfxSlider.addEventListener("input", () => {
    currentSfxVolume = parseFloat(sfxSlider.value);
  });
}

// Reproduzir som com volume ajustado
function playSoundEffect(name) {
  if (sounds[name]) {
    sounds[name].volume = currentSfxVolume;
    sounds[name].currentTime = 0;
    sounds[name].play();
  }
}



function playSound(name) {
  const sfxSlider = document.getElementById("sfxVolume");
  if (soundEnabled && sounds[name]) {
    sounds[name].volume = sfxSlider ? parseFloat(sfxSlider.value) : 0.1;
    sounds[name].currentTime = 0;
    sounds[name].play();
  }
}


const musicSlider = document.getElementById("musicVolume");
if (musicSlider) {
  musicSlider.addEventListener("input", e => {
    backgroundMusic.volume = parseFloat(e.target.value);
  });
}



// Garantir escopo global para funções usadas em onclick no HTML
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.restartGame = restartGame;



if (typeof startQuiz !== "undefined") window.startQuiz = startQuiz;
if (typeof nextQuestion !== "undefined") window.nextQuestion = nextQuestion;
if (typeof restartGame !== "undefined") window.restartGame = restartGame;