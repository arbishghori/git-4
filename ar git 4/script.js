var cleanestCities = ["karachi", "karachi", "islamabad", "islamabad", "lahore", "lahore", "kakul",
"kakul", "abbottabad","abbottabad"];


var cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase(); var cleanestCities = ["karachi", "islamabad", "lahore", "kakul", "abbottabad"];
 for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
 alert("It's one of the cleanest cities");
 }
 }

