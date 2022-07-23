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
