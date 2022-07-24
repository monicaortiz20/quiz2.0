let date = new Date();
let save = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()+" a las "+date.getHours() + ":" + date.getMinutes();

let localSdata = JSON.parse(localStorage.getItem("player"));