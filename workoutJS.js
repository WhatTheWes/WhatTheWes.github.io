function myFunction() {
		var x = document.getElementById("myLinks");
			if (x.style.display === "block") {
				x.style.display = "none";
			} else {
				x.style.display = "block";
		}
	}
	

function dayOneOn () {
	document.getElementById("day1").removeAttribute('hidden');
}

function dayTwoOn () {
	document.getElementById("day2").removeAttribute('hidden');
}

function dayThreeOn () {
	document.getElementById("day3").removeAttribute('hidden');
}

	
function cal1rm () {
	var reps = document.getElementById("calReps").value;
	var weight = document.getElementById("calWeight").value;
	var result = weight * (1 + reps / 30); 
	document.getElementById("1rmOutput").value = result;
}