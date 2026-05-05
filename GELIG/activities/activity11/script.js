function showFor() {
    let num = document.getElementById("forNum").value;
    let text = document.getElementById("forText").value;
    let output = "";
 
    for (let i = 1; i <= num; i++) {
        output += i + ". " + text + "<br>";
    }
 
    document.getElementById("forOutput").innerHTML = output;
}
 
function clearFor() {
    document.getElementById("forOutput").innerHTML = "";
}
 
// WHILE LOOP
function showWhile() {
    let num = document.getElementById("whileNum").value;
    let text = document.getElementById("whileText").value;
    let output = "";
    let i = 1;
 
    while (i <= num) {
        output += i + ". " + text + "<br>";
        i++;
    }
 
    document.getElementById("whileOutput").innerHTML = output;
}
 
function clearWhile() {
    document.getElementById("whileOutput").innerHTML = "";
}
 
// DO-WHILE LOOP
function showDo() {
    let num = document.getElementById("doNum").value;
    let text = document.getElementById("doText").value;
    let output = "";
    let i = 1;
 
    if (num > 0) {
        do {
            output += i + ". " + text + "<br>";
            i++;
        } while (i <= num);
    }
 
    document.getElementById("doOutput").innerHTML = output;
}
 
function clearDo() {
    document.getElementById("doOutput").innerHTML = "";
}