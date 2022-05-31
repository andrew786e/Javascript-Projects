(function(){
    document.getElementById('convert').addEventListener('submit',function(event){

        "use strict"
        event.preventDefault() ;

        // Gets value from the input form 
        const distance = parseFloat(document.getElementById('distance').value) ;



        console.log(distance) ;

        const answer = document.getElementById('answer') ;

        // Returns false for a letters and the number zero
        if(!distance){
            answer.innerHTML = "<h2> Please provide a number <\h2>"
        }else{
            const conversion = distance * 1.609344 ;
            // var roundedConversion = (Math.round(conversion * 1000))/ 1000;
            const roundedConversion = conversion.toFixed(3) ;
            answer.innerHTML = `<h2> ${distance} miles converts to kilometers ${roundedConversion} <\h2>`
        }
    });
})() ;