(function(){
    document.getElementById('convert').addEventListener('submit',function(event){
        event.preventDefault() ;

        // Gets value from the input form 
        var distance = document.getElementById('distance').value ;

        distance = parseFloat(distance) ;

        console.log(distance) ;

        var answer = document.getElementById('answer') ;

        // Returns false for a letters and the number zero
        if(!distance){
            answer.innerHTML = "<h2> Please provide a number <\h2>"
        }else{
            var conversion = distance * 1.609344 ;
            // var roundedConversion = (Math.round(conversion * 1000))/ 1000;
            var roundedConversion = conversion.toFixed(3) ;
            answer.innerHTML = `<h2> ${distance} miles converts to kilometers ${roundedConversion} <\h2>`
        }
    });
})() ;