$(document).ready(function(){

	var randomNumber
	var uptownKitties
	var plazaKitties
	var southendKitties
	var nodaKitties
	var kittiesFound
	var wins
	var losses

	wins= 0
	losses= 0
	kittiesFound = 0
	

	randomNumber = Math.floor((Math.random() * 121) + 19);
		$("#spaceAvailable").html(randomNumber)

	uptownKitties = Math.floor((Math.random() * 13) + 1);
	plazaKitties = Math.floor((Math.random() * 13) + 1);
	southendKitties = Math.floor((Math.random() * 13) + 1);
	nodaKitties = Math.floor((Math.random() * 13) + 1);


	$("#uptown").on("click", function(){
		kittiesFound = uptownKitties+kittiesFound
		$("#score").html(kittiesFound)
		
		if (kittiesFound>randomNumber) {
			alert("You overcrowded the shelter!")
			randomNumber = Math.floor((Math.random() * 121) + 19);
			$("#spaceAvailable").html(randomNumber)
			kittiesFound=0
			$("#score").html(kittiesFound)
			losses++
			$("#losses").html(losses)

			uptownKitties = Math.floor((Math.random() * 13) + 1);
			plazaKitties = Math.floor((Math.random() * 13) + 1);
			southendKitties = Math.floor((Math.random() * 13) + 1);
			nodaKitties = Math.floor((Math.random() * 13) + 1);
		} //end loss if statement

		else if (kittiesFound == randomNumber) {
			alert("Yay! All of the kitties found a home!")
			randomNumber = Math.floor((Math.random() * 121) + 19);
			$("#spaceAvailable").html(randomNumber)
			kittiesFound=0
			$("#score").html(kittiesFound)
			wins++
			$("#wins").html(wins)

			uptownKitties = Math.floor((Math.random() * 13) + 1);
			plazaKitties = Math.floor((Math.random() * 13) + 1);
			southendKitties = Math.floor((Math.random() * 13) + 1);
			nodaKitties = Math.floor((Math.random() * 13) + 1);
		}//end else if win		
	})//end uptown kitties

		$("#plaza").on("click", function(){
		kittiesFound = plazaKitties+kittiesFound
		console.log(kittiesFound)
		$("#score").html(kittiesFound)
		
		if (kittiesFound>randomNumber) {
			alert("You overcrowded the shelter!")
			randomNumber = Math.floor((Math.random() * 121) + 19);
			$("#spaceAvailable").html(randomNumber)
			kittiesFound=0
			$("#score").html(kittiesFound)
			losses++
			$("#losses").html(losses)

			uptownKitties = Math.floor((Math.random() * 13) + 1);
			plazaKitties = Math.floor((Math.random() * 13) + 1);
			southendKitties = Math.floor((Math.random() * 13) + 1);
			nodaKitties = Math.floor((Math.random() * 13) + 1);
		} //end loss if statement

		else if (kittiesFound == randomNumber) {
			alert("Yay! All of the kitties found a home!")
			randomNumber = Math.floor((Math.random() * 121) + 19);
			$("#spaceAvailable").html(randomNumber)
			kittiesFound=0
			$("#score").html(kittiesFound)
			wins++
			$("#wins").html(wins)

			uptownKitties = Math.floor((Math.random() * 13) + 1);
			plazaKitties = Math.floor((Math.random() * 13) + 1);
			southendKitties = Math.floor((Math.random() * 13) + 1);
			nodaKitties = Math.floor((Math.random() * 13) + 1);
		}//end else if win		
	})//end plaza kitties

	$("#SouthEnd").on("click", function(){
		kittiesFound = southendKitties+kittiesFound
		$("#score").html(kittiesFound)
		if (kittiesFound>randomNumber) {
			alert("You overcrowded the shelter!")
			randomNumber = Math.floor((Math.random() * 121) + 19);
			$("#spaceAvailable").html(randomNumber)
			kittiesFound=0
			$("#score").html(kittiesFound)
			losses++
			$("#losses").html(losses)

			uptownKitties = Math.floor((Math.random() * 13) + 1);
			plazaKitties = Math.floor((Math.random() * 13) + 1);
			southendKitties = Math.floor((Math.random() * 13) + 1);
			nodaKitties = Math.floor((Math.random() * 13) + 1);			
		} //end loss if statement

		else if (kittiesFound == randomNumber) {
			alert("Yay! All of the kitties found a home!")
			randomNumber = Math.floor((Math.random() * 121) + 19);
			$("#spaceAvailable").html(randomNumber)
			kittiesFound=0
			$("#score").html(kittiesFound)
			wins++
			$("#wins").html(wins)

			uptownKitties = Math.floor((Math.random() * 13) + 1);
			plazaKitties = Math.floor((Math.random() * 13) + 1);
			southendKitties = Math.floor((Math.random() * 13) + 1);
			nodaKitties = Math.floor((Math.random() * 13) + 1);
		}//end else if win

	})//end southend kitties

	$("#NoDa").on("click", function(){
		kittiesFound = nodaKitties+kittiesFound
		$("#score").html(kittiesFound)
		
		if (kittiesFound>randomNumber) {
			alert("You overcrowded the shelter")
			randomNumber = Math.floor((Math.random() * 121) + 19);
			$("#spaceAvailable").html(randomNumber)
			kittiesFound=0
			$("#score").html(kittiesFound)
			losses++
			$("#losses").html(losses)

			uptownKitties = Math.floor((Math.random() * 13) + 1);
			plazaKitties = Math.floor((Math.random() * 13) + 1);
			southendKitties = Math.floor((Math.random() * 13) + 1);
			nodaKitties = Math.floor((Math.random() * 13) + 1);
		} //end loss statement

		else if (kittiesFound == randomNumber) {
			alert("Yay! All of the kitties found a home!")
			randomNumber = Math.floor((Math.random() * 121) + 19);
			$("#spaceAvailable").html(randomNumber)
			kittiesFound=0
			$("#score").html(kittiesFound)
			wins++
			$("#wins").html(wins)

			uptownKitties = Math.floor((Math.random() * 13) + 1);
			plazaKitties = Math.floor((Math.random() * 13) + 1);
			southendKitties = Math.floor((Math.random() * 13) + 1);
			nodaKitties = Math.floor((Math.random() * 13) + 1);
		}//end else if win		

	})//end noda kitties

})//end document ready