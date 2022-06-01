function myFunction() {
		var x = document.getElementById("myLinks");
			if (x.style.display === "block") {
				x.style.display = "none";
			} else {
				x.style.display = "block";
		}
	}
	
function testFunction () {
	var deadliftInput = document.getElementById("deadlift").value; 
	document.getElementById("1").innerHTML = deadliftInput;
    }
