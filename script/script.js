const quizData = [
    {
        question: "¿Quién muere en el primer episodio de la primera temporada?",
        a: "Joffry Baratheon",
        b: "Eddard Stark",
        c: "Tyrion Lannister",
        d: "Nadie muere",
        correct: "b",
    },
    {
        question: "¿Quién es la madre de Jon Stark?",
        a: "Sansa Stark",
        b: "Catelyn Stark",
        c: "Cersei Lannister",
        d: "Ni Jon lo sabe",
        correct: "d",
    },
    {
        question: "¿Cuál de las siguientes NO es una familia de Juego de tronos?",
        a: "Tyrell",
        b: "Bolton",
        c: "Borbon",
        d: "Stark",
        correct: "c",
    },
    {
        question: "¿Cuándo recibió Daenerys sus huevos de dragón?",
        a: "En Astapor, como regalo de bienvenida",
        b: "Con Khal Drogo al saber que iba a ser padre",
        c: "Fue un regalo de boda de Magister Ilyrio",
        d: "Se los encontraron por el camino",
        correct: "d",
    },
  
  
  ];



  const quiz= document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')
  
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
  
      //deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
  /*
  function deselectAnswers() {
      answerEls.forEach(answerEl => answerEl.focus = false)
  }
  */
  
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
  
             <button onclick="location.reload()">Reload</button>
             `
         }
      }
  })





/*

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCzZ7cOiBFSKZ21yBwNg3mps1764mSJOpo",
    authDomain: "quiz2-f87e2.firebaseapp.com",
    projectId: "quiz2-f87e2",
    storageBucket: "quiz2-f87e2.appspot.com",
    messagingSenderId: "346823333135",
    appId: "1:346823333135:web:0db11aaaca9f09df5e5a7a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//para llamar a la bbdd
const db = firebase.firestore();


//para crear colecciones
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });


//para obtener toda la info de nuestra BBDD

db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data())
    });
});

*/