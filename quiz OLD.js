counter_correct = 0;

OnStart();


//Called when application is started.

function Random_M_Test() {
	random1 = Math.random()*10;
	number1 = Math.round(random1);
	random2 = Math.random()*10;
	number2 = Math.round(random2);
	q = number1 + "*" + number2 + " = ?";
	a = number1*number2;
	Test(q, a)
}

function Random_M2_Test() {
	number1 = Math.round(Math.random()*10);
	number2 = Math.round(Math.random()*10);
	q = number1 + "*" + number2 + " = ?";
	a = number1*number2;
	Test(q, a)
}

function Random_A_Test() {
	number1 = Math.round(Math.random()*10);
	number2 = Math.round(Math.random()*10);
	q = number1 + "+" + number2 + " = ?";
	a = number1+number2;
	Test(q, a)
}

function OnStart()
{
    name = prompt("Please enter your name:");

    age = prompt("How old are you?");

    alert("Hello, " + name + "! Welcome to Math Quiz!");

    if (age <= 7) {
        // quiz for kids 7 years and under
  		Random_A_Test()
  		Random_A_Test()
  		Random_A_Test()
    } else if (age <= 13) {
        Random_M_Test();
        Random_M_Test();
        Random_M_Test();
    } else {
        Random_M2_Test()
        Random_M2_Test()
        Random_M2_Test()
    }


    alert("you had " + counter_correct + " correct answers. Thank you for participating and good night!")
}

function Test(question, correct_answer)
{
    answer = prompt(question);

    if (answer == correct_answer ) {
        alert("Correct! Well done, " + name);
        counter_correct = counter_correct + 1;
    }
    else {
        alert("Incorect! The answer is " + correct_answer);
    }
}
