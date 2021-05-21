//Countdown Timer should run 10...1
function startCountdown() {

    var count = 10;
    //countdowntimer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 9
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 1
        count = count - 1;

    }, 1000); //set wait time as 1 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 8

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1; 

    }, 2000); //set wait time as 2 sec

    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 7

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 3000); //set wait time as 3 sec

    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 6

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 4000); //set wait time as 3 sec

    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 5

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 5000); //set wait time as 4 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 4

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 6000); //set wait time as 5 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 3

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 7000); //set wait time as 6 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 2

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 8000); //set wait time as 7 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display 1

        document.getElementById("countdownTimer").innerHTML = count;

        //decrease the count by 1

        count = count - 1;

    }, 9000); //set wait time as 8 sec


    setTimeout(function () {
        //After 1 sec the code will run here
        //the countdowntimer should display BlASTOFF!!!

        document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!";

        //decrease the count by 1

        count = count - 1;

    }, 10000); //set wait time as 9 sec which in turn is to 10 to blastoff


}
