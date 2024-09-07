function calculateBmi() {
	const weight = document.getElementById("weight").value;
	const height = document.getElementById("height").value;
	const bmi = weight / (height ** 2);
	const category = getBmiCategory(bmi);
	document.getElementById("result").innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
}

function getBmiCategory(bmi) {
	if (bmi < 18.5) return "Underweight";
	else if (bmi < 25) return "Normal";
	else if (bmi < 30) return "Overweight";
	else return "Obese";
}
