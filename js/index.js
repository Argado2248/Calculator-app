let numberOutput = (""); //Sätter en tom variabel för konsol loggat nummer output. 

const buttonSelector1 = document.getElementById("btnOne"); //Fångar knappen som trycks på.
buttonSelector1.addEventListener("click", function(){ //Skapar en eventlistener som kollar klick.
    numberOutput += 1; //Sätter variabeln i början till vad knappens värde är. 
    console.log(numberOutput); //Konsol loggar värdet. 
});

const buttonSelector2 = document.getElementById("btnTwo"); //Samma som tidigare
buttonSelector2.addEventListener("click", function(){
    numberOutput += 2;
    console.log(numberOutput);
});

const buttonSelector3 = document.getElementById("btnThree"); //Samma som tidigare
buttonSelector3.addEventListener("click", function(){
    numberOutput += 3
    console.log(numberOutput);
});

const buttonSelector4 = document.getElementById("btnFour"); //Samma som tidigare
buttonSelector4.addEventListener("click", function(){
    numberOutput += 4
    console.log(numberOutput);
});

const buttonSelector5 = document.getElementById("btnFive"); //Samma som tidigare
buttonSelector5.addEventListener("click", function(){
    numberOutput += 5
    console.log(numberOutput);
});

const buttonSelector6 = document.getElementById("btnSix"); //Samma som tidigare
buttonSelector6.addEventListener("click", function(){
    numberOutput += 6
    console.log(numberOutput);
});

const buttonSelector7 = document.getElementById("btnSeven"); //Samma som tidigare
buttonSelector7.addEventListener("click", function(){
    numberOutput += 7
    console.log(numberOutput);
});

const buttonSelector8 = document.getElementById("btnEight"); //Samma som tidigare
buttonSelector8.addEventListener("click", function(){
    numberOutput += 8
    console.log(numberOutput);
});

const buttonSelector9 = document.getElementById("btnNine"); //Samma som tidigare
buttonSelector9.addEventListener("click", function(){
    numberOutput += 9
    console.log(numberOutput);
});

const buttonSelectorAdd = document.getElementById("btnAdd"); 
buttonSelectorAdd.addEventListener("click", function(){
    numberOutput += "+"; //Sätter + så att jag kan använda "eval" som kommer senare. 
    console.log(numberOutput);
});

const buttonSelectorMinus = document.getElementById("btnMinus");
buttonSelectorMinus.addEventListener("click", function(){
    numberOutput += "-"; //Samma som +
    console.log(numberOutput);
});

const buttonSelectorDivide = document.getElementById("btnDivide");
buttonSelectorDivide.addEventListener("click", function(){
    numberOutput += "/"; //Samma som +
    console.log(numberOutput);
});

const buttonSelectorTimes = document.getElementById("btnTimes");
buttonSelectorTimes.addEventListener("click", function(){
    numberOutput += "*"; //Samma som +
    console.log(numberOutput);
});

const buttonSelectorReset = document.getElementById("btnClear");
buttonSelectorReset.addEventListener("click", function(){
    numberOutput = ""; //Sätter första variabeln till tom igen för att starta om
    console.log(numberOutput);
})

const buttonSelectorEquals = document.getElementById("btnEqual");
buttonSelectorEquals.addEventListener("click", function(){
    const result = eval(numberOutput); //skapar uträkningen, eval är hjälten här. 
    console.log(result);
})

