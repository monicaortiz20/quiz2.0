

let score = 0;
let currentQuestion = 0;
const submitBtn = document.getElementById('submit')


       //++ 1 addevent listener para "siguiente" y va pasando las preguntas
//función asíncrona para traer pregs y resp de la API - PTE TERMINAR!!!! dentro de esta función tiene que ir toda la lógica del quiz
async function quizGame() {
    

    try {

        let responseQuiz = await fetch('https://opentdb.com/api.php?amount=13&category=17&difficulty=medium&type=multiple')
        let pregsQuiz = await responseQuiz.json()
        console.log(pregsQuiz.results)

        let quest = pregsQuiz.results[currentQuestion].question;
        console.log(quest);


        function paintQUest(num) {
            let arrayresp = [...pregsQuiz.results[num].incorrect_answers, pregsQuiz.results[num].correct_answer]; //para meter las 4 respuestas
            console.log(arrayresp);

            document.getElementById('question').innerHTML = `${quest}`
            document.getElementById('a_text').innerHTML = `${arrayresp[0]}`
            document.getElementById('b_text').innerHTML = `${arrayresp[1]}`
            document.getElementById('c_text').innerHTML = `${arrayresp[2]}`
            document.getElementById('d_text').innerHTML = `${arrayresp[3]}`
        
        }
        paintQUest(currentQuestion)
        
        let list = [0, 1, 2, 3]
        list = list.sort(() => Math.random() - 0.5) //para que la posición de la respuesta correcta vaya cambiando


        function getSelected() {
            let answer
            arrayresp.forEach(answerSel => {
                if (answerSel.checked) {
                    answer = answerSel.id
                }
            })
            return answer
        }


        submitBtn.addEventListener('click', () => {
            // const answer = getSelected()
            // if (answer) {
                // if (answer === pregsQuiz.results[currentQuestion].correct_answer) {
                //     score++
                // }

                currentQuestion++

                paintQUest(currentQuestion)

                if (currentQuestion < pregsQuiz.results.length) {
                    quizGame()
                } else {
                    quiz.innerHTML = `
              <h2>You answered ${score}/${pregsQuiz.results.length} questions correctly</h2>
  
              <button onclick="location.reload()">Reload</button>
              `
                }
            // }

        })








    } catch (error) {
        console.log(error)
    }
}

quizGame();





////// e.target.value /////







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