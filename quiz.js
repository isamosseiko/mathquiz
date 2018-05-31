
name = prompt("Please enter your name:");

age = prompt("How old are you?");

alert("Hello, " + name + "! Welcome to Math Quiz!");

for (i = 0; i <3; i++)
{
	a = Math.random();
	a = a * 10;
	a = Math.round(a);
	
	b = Math.random();
	b = b * 10;
	b = Math.round(b);

	if (age < 7)
	{
		c = a + b;
	
		answer = prompt (a +"+"+ b + "=?");
	
		if (answer == c)
		{
			alert ("correct! Well done!");
		}
		else 
		{
			alert("Incorrect! the answer is " + c );
		}
	}
	else
	{
		c = a * b;
	
		answer = prompt (a +"*"+ b + "=?");
	
		if (answer == c)
		{
			alert ("correct! Well done!");
		}
		else 
		{
			alert("Incorrect! the answer is " + c );
		}
	}
}

	prompt("Did you like the math quiz?");
	
	alert("bye!");