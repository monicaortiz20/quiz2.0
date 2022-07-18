const quizDB = [
    {
        "response_code": 0,
        "results": [
            {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "medium",
                "question": "What mineral has the lowest number on the Mohs scale?",
                "correct_answer": "Talc",
                "incorrect_answers": [
                    "Quartz",
                    "Diamond",
                    "Gypsum"
                ]
            },
            {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Which element has the atomic number of 7?",
                "correct_answer": "Nitrogen",
                "incorrect_answers": [
                    "Oxygen",
                    "Hydrogen",
                    "Neon"
                ]
            },
            {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Au on the Periodic Table refers to which element?",
                "correct_answer": "Gold",
                "incorrect_answers": [
                    "Silver",
                    "Oxygen",
                    "Nickel"
                ]
            },
            {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Which one of these scientists conducted the Gold Foil Experiment which concluded that atoms are mostly made of empty space?",
                "correct_answer": "Ernest Rutherford",
                "incorrect_answers": [
                    "Joseph John Thomson",
                    "Archimedes",
                    "Niels Henrik David Bohr"
                ]
            },
            {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Myopia is the scientific term for which condition?",
                "correct_answer": "Shortsightedness",
                "incorrect_answers": [
                    "Farsightedness",
                    "Double Vision",
                    "Clouded Vision"
                ]
            },
            {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "medium",
                "question": "A positron is an antiparticle of a what?",
                "correct_answer": "Electron",
                "incorrect_answers": [
                    "Neutron",
                    "Proton",
                    "Photon"
                ]
            },
            {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Which chemical element was originally known as Alabamine?",
                "correct_answer": "Astatine",
                "incorrect_answers": [
                    "Selenium",
                    "Antimony",
                    "Molybdenum"
                ]
            },
            {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "medium",
                "question": "What is the scientific term for &#039;taste&#039;?",
                "correct_answer": "Gustatory Perception",
                "incorrect_answers": [
                    "Olfaction",
                    "Somatosensation",
                    "Auditory Perception"
                ]
            },
            {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "medium",
                "question": "The medial meniscus forms which part of what joint in the human body?",
                "correct_answer": "Knee",
                "incorrect_answers": [
                    "Elbow",
                    "Ankle",
                    "Shoulder"
                ]
            },
            {
                "category": "Science & Nature",
                "type": "multiple",
                "difficulty": "medium",
                "question": "Where did the Great Storm of 1987 make landfall at, first?",
                "correct_answer": "Cornwall",
                "incorrect_answers": [
                    "Surrey",
                    "Wales",
                    "The Midlands"
                ]
            }
        ]
    }
]




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
