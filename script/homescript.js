

let arr = [];
localStorage.setItem("partidas",JSON.stringify(arr))

document.querySelector("#form-reg").addEventListener("#submit-reg", function(event) {
    event.preventDefault();
    let date = event.target.date.value;
    let score= event.target.score.value;

    let obj = {
        date: date,
        score: score
    }


    let newArray = JSON.parse(localStorage.getItem("partidas"));
    
    newArray.push(obj);
    
    localStorage.setItem("partidas", JSON.stringify(newArray));

    let partidas = JSON.parse(localStorage.getItem("partidas"));

    for (let i = 0; i < partidas.length; i++) {
        let printDate = document.createElement("p");
        printDate.innerHTML = `Fecha: ${partidas[i].date}`;
        document.body.appendChild(printDate);
    
        let printScore = document.createElement("p");
        printScore.innerHTML = `Puntuación: ${partidas[i].score}`;
        document.body.appendChild(printScore);
        
    }
   
});

