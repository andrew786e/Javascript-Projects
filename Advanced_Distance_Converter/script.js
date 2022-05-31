(function(){

    "use strict"

    var convertType = "miles" ;
	var heading = document.querySelector('h1') ;
	var intro = document.querySelector('p') ;
	var answer = document.getElementById('answer') ;
	var form = document.getElementById('convert') ;

	document.addEventListener('keydown',function(event){

		var key = event.code  ;

		if(key === 'KeyK'){
			convertType = 'kilometers' ;
			// Change heading 
			heading.innerHTML = "Kilometers to Miles Converter" ;
			intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles." ;
			answer.innerHTML = "" ;
			document.getElementById('distance').value = "" ;
			// Change intro paragraph
			// Change the value of the converterType variable

		}else if(key === 'KeyM'){
			convertType = 'miles' ;
			// Change heading 
			heading.innerHTML = "Miles to Kilometers Converter" ;
			intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to kilometers." ;
			answer.innerHTML = "" ;
			document.getElementById('distance').value = "" ;
			// Change intro paragraph
			// Change the value of the converterType variable
		}

	}) ;

	form.addEventListener('submit',function(event){

		event.preventDefault() ; 

		const distance = parseFloat(document.getElementById('distance').value) ;

		if(distance){
			// Converter M to K 1.609344
			// Converter K to M 0.621371192
			if(convertType === 'miles'){

				const converted = (distance * 1.609344).toFixed(3) ;
				answer.innerHTML = `${distance} miles converts to ${converted} kilometers` ;

			}else{

				const converted = (distance * 0.621371192).toFixed(3) ;
				answer.innerHTML = `${distance} kilometers converts to ${converted} miles` ;

			}

		}else{
			answer.innerHTML = "<h2> Please provide a number </h2>"
		}

	}) ;
})() ;