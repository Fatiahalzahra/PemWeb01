//menangkap semmua element a
document.querySelectorAll("#opts a").forEach((a) =>
    //jika di klik akan menjalankan fungsi computerchoice
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
 );
 function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;
    
    //menangkap element result dengan queryselector untuk menampung
    // nilai hasil dari game 
    let pilihanComputer = document.querySelector("#result");
    
    //membuat array pilihan untuk komputer
    let choices = ["Rock","Paper","scissors"]

    //pilihan random untuk komputer
    pilihanComputer.innerHTML = 
       choices[Math.round(Math.random () * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

//jika pilihan komputer dan pilihan user sama (draw)
if (pilihanUser == pilihanComputer) {
    alert("DRAW");
}

//jika pilihan user yang menang 
if (pilihanUser == "Rock" && pilihanComputer == "Paper") {
    alert("YOU WIN");
}

else if(pilihanUser=="Paper" && pilihanComputer == "scissors"){ 
    alert("YOU WIN")
}
else if(pilihanUser=="Scissors" && pilihanComputer == "Rock"){ 
    alert("YOU WIN")
}

//jika pilihan komputer yang menang 
if (pilihanUser == "Rock" && pilihanComputer == "Paper") {
    alert("YOU WIN");    
}
else if(pilihanUser=="Paper" && pilihanComputer == "scissors"){ 
    alert("YOU WIN")
}
else if(pilihanUser=="Scissors" && pilihanComputer == "Rock"){ 
    alert("YOU WIN")
}

 }