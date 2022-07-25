
hideLog();
hideReg();


let score = [];
let currentQuestion = 0;



// Se declaran las variables para los contadores. "score" como un array vacío y "currentQuestion" como tipo numérico igualado a 0.


const submitBtn = document.getElementById('submit-quiz');

// Se declara la variable del botón para enviar la respuesta elegida y pasar a la siguiente pregunta. Se usa el DOM para traerlo desde HTML.



let localSdata = JSON.parse(localStorage.getItem("player"));





quizGame();

// Lo primero, se ejecuta la función quizGame, declarada en la línea 23 como función asíncrona.





async function quizGame() {

    try {
        let responseQuiz = await fetch('https://opentdb.com/api.php?amount=13&category=17&difficulty=medium&type=multiple')
        let pregsQuiz = await responseQuiz.json()

        // Trae de la API las preguntas. En concreto, trae un objeto al que hemos llamado "pregsQuiz".Uno de los elementos de "pregsQuiz" es un array llamado "results" que contiene 13 objetos (preguntas) con sus propiedades (enunciado, respuesta correcta, incorrecta... Copiar enlace en navegador para ver la estructura). Este enlace está generado desde la API, con una configuración previa desde la API en la que se determinan el nº de preguntas, la temática, dificultad...




        paintQUest(
            pregsQuiz.results[currentQuestion].incorrect_answers,
            pregsQuiz.results[currentQuestion].correct_answer,
            pregsQuiz.results[currentQuestion].question
        )

        // Se ejecuta la función "paintQUest", declarada en la línea 89 (fuera de la función asíncrona), que "pinta" el enunciado de la pregunta, la respuesta correcta y las 3 respuestas incorrectas de cada una de las preguntas correspondientes al contador "currentQuestion".






        submitBtn.addEventListener('click', () => {

            // Se asocia el botón con una función de escucha para cuando se haga click ejecute lo siguiente:

            checkGoodAnswer(pregsQuiz.results[currentQuestion].correct_answer, score)

            currentQuestion++;

            if (currentQuestion == pregsQuiz.results.length) {
                let totalScore = 0;
                score.forEach(sum1 => {
                    totalScore += sum1
                    //Cuando llega a la pantalla final, suma los elementos al array "score"
                })

                quiz.innerHTML = `
                    <br><br><br><br><br><br><br>
                    <h2>You answered ${totalScore}/${pregsQuiz.results.length} questions correctly</h2>
        
                    <button onclick="location.reload()">Reload</button>
                    `

                //window.location.href = "results.html";
                //localStorage.setItem("player",JSON.stringify(localSdata));
            } else {
                deleteRadio()

                paintQUest(
                    pregsQuiz.results[currentQuestion].incorrect_answers,
                    pregsQuiz.results[currentQuestion].correct_answer,
                    pregsQuiz.results[currentQuestion].question
                )

            }

        })

    } catch (error) {
        console.log(error)
    }

}


function paintQUest(bads, good, quest) {

    let arrayresp = [...bads, good]; //para meter las 4 respuestas
    // console.log(arrayresp, quest);
    arrayresp = arrayresp.sort(() => Math.random() - 0.5) //para que la posición de la respuesta correcta vaya cambiando

    document.getElementById('question').innerHTML = `${quest}`
    document.getElementById('a_text').innerHTML = `${arrayresp[0]}`
    document.getElementById('b_text').innerHTML = `${arrayresp[1]}`
    document.getElementById('c_text').innerHTML = `${arrayresp[2]}`
    document.getElementById('d_text').innerHTML = `${arrayresp[3]}`

}

function checkGoodAnswer(goodAnswer, score) {
    let answers = document.getElementsByName('answer')
    answers.forEach(element => {
        if (element.checked && document.getElementById(`${element.id}_text`).textContent == goodAnswer) {
            score.push(1);
        }
    })
}

function deleteRadio() {
    let answers = document.getElementsByName('answer')
    answers.forEach(element => {
        element.checked = false
    })
}














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


// Creación de la colección "users"

const createUser = (user) => {
    db.collection("users")
      .add(user)
      .then((docRef) => console.log("Document written with ID: ", docRef.id))
      .catch((error) => console.error("Error adding document: ", error));
  };
  







// Login con mail + pass

  const signInUser = (email,password) =>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        console.log(`se ha logado ${user.email} ID:${user.uid}`)
        alert(`se ha logado ${user.email} ID:${user.uid}`)
        console.log(user);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });
}



// Unlogin mail + pass

const signOut = () => {
    let user = firebase.auth().currentUser;

    firebase.auth().signOut().then(() => {
        console.log("Sale del sistema: "+user.email)
      }).catch((error) => {
        console.log("hubo un error: "+error);
      });
}


// DOM log & unlog

document.getElementById("form-log").addEventListener("submit",function(event){
    event.preventDefault();
    let email = event.target.elements.mail-log.value;
    let pass = event.target.elements.pass-log.value;
    signInUser(email,pass)
})
document.getElementById("unlog").addEventListener("click", signOut);














// Auth Firebase con mail + pass (Sigh up -> registrarse)

const signUpUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Inicio sesión (Sigh in -> iniciar sesión):
        let user = userCredential.user;
        console.log(`se ha registrado ${user.email} ID:${user.uid}`)
        alert(`se ha registrado ${user.email} ID:${user.uid}`)
        // ...

        // Creación del usuario en Firestore a la misma vez que se hace el registro (no sería necesario para el registro en sí)
        createUser({
          id: user.uid,
          email: user.email,
        });
  
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("Error en el sistema: "+errorMessage);
      });
  };
  
  //Credenciales creadas para demostración:
  //monica@mail.com (123456)
  //nacho@mail.com (1234567)
  



  // Uso del DOM para recoger los valores introducidos en los inputs de "mailreg", "passreg" y "passregrep" y guardarlos en sus respectivas variables al pulsar "submit"
  document.getElementById("form-reg").addEventListener("submit",function(event){
      //event.preventDefault();
      let email = event.target.elements.mailreg.value;
      let pass = event.target.elements.passreg.value;
      let pass2 = event.target.elements.passregrep.value;
  
      // Declaración que obliga a coincidir los campos de "pass" y "pass2"
      pass===pass2?signUpUser(email,pass):alert("error password");
  })


  













/*

    // Subir a firestore puntuaciones y fechas

    const createScore = (score) => {
        db.collection("users")
          .add(score)
          .then((docRef) => console.log("Document written with ID: ", docRef.id))
          .catch((error) => console.error("Error adding document: ", error));
      };
      
      
      
      // 2:
      
      document.getElementById('#form-reg').addEventListener('submit', (event) => {
        event.preventDefault();
          
          let nameUser = event.target.namereg.value;
          let emailUser = event.target.mailreg.value;
          let password = event.target.passreg.value;
    
          createUser({
            nameUser,
            emailUser,
            password,
          });
        });


*/




//para obtener toda la info de nuestra BBDD
/*
db.collection("user").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data())
    });
});
*/






/*
//para crear colecciones

document.getElementById('submit-reg').addEventListener('click', () => {

    let nameUser = document.getElementById('namereg').innerHTML
    let emailUser = document.getElementById('mailreg').innerHTML
    let password = document.getElementById('passreg').innerHTML

    db.collection("user").add({
        name: `${nameUser}`,
        email: `${emailUser}`,
        password: `${password}`,
        //score: `${score}`,
        //date: "",
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
});
*/









// Funciones index

function showLog() {
    log = document.getElementById('form-log');
    log.style.display = 'flex';
    hideReg();
}

function hideLog() {
    log = document.getElementById('form-log');
    log.style.display = 'none';
}

function showReg() {
    reg = document.getElementById('form-reg');
    reg.style.display = 'flex';
    hideLog();
}

function hideReg() {
    reg = document.getElementById('form-reg');
    reg.style.display = 'none';
}

function hideBoth() {
    reg = document.getElementById('form-reg');
    reg.style.display = 'none';
    log = document.getElementById('form-log');
    log.style.display = 'none';
}



