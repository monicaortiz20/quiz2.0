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


hideLog();
hideReg();







let arr = [];
localStorage.setItem("player",JSON.stringify(arr))


document.querySelector("#form-reg").addEventListener("submit", function(event) {
    event.preventDefault();
    let mailreg = event.target.mailreg.value;
    //let date = event.target.date.value;
    //let score = event.target.score.value;


    let obj = {
        //date: date,
        //score: score,
        mailreg: mailreg,
    }


    let newArray = JSON.parse(localStorage.getItem("player"));
    
    newArray.push(obj);
    
    localStorage.setItem("player", JSON.stringify(newArray));

    let player = JSON.parse(localStorage.getItem("player"));



    for (let i = 0; i < player.length; i++) {
        let printDate = document.createElement("p");
        printDate.innerHTML = `Fecha: ${player[i].date}`;
        document.body.appendChild(printDate);
    
        let printScore = document.createElement("p");
        printScore.innerHTML = `Puntuación: ${player[i].score}`;
        document.body.appendChild(printScore);
        
    }
   
});
