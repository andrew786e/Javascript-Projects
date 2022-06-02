(function(){
    "use strict"

    const detailsForm = document.querySelector('#destination_details_form') ;


    detailsForm.addEventListener('submit' , handleFormSubmit) ;

    function handleFormSubmit(event){
        event.preventDefault() ;

        if( document.getElementById('title').innerHTML === "My Wish List"){
            document.querySelector("#destinations_container").innerHTML = "" ;
        }

        // 1.extract the value from each form field 
        const destName = event.target.elements["name"].value ;
        const destLocation = event.target.elements["location"].value ;
        const destPhoto = event.target.elements["photo"].value ;
        const destDescription = event.target.elements["description"].value ;
        // 2. clear out the form fields

        for(var i = 0 ; i < detailsForm.length; i++){
            detailsForm.elements[i].value = "" ;
        }
        // 3. run a function that creates the new card

        const destCard = createDestinationCard(destName,destLocation,destPhoto,destDescription) ;

        // 4. if needed, change the header at the top of the destination list

        const wishListContainer = document.getElementById('destinations_container') ;


        if(wishListContainer.children.length === 0){
            document.getElementById('title').innerHTML = "My Wish List" ;
        }

        if(document.getElementById('title').innerHTML === "My Wish List"){

        }
        // 5. add the card 
        document.querySelector("#destinations_container").appendChild(destCard) ;

    }

    function createDestinationCard(name, loaction, photoURL, description){

        const card = document.createElement("div") ;
        card.className = 'card' ;

        const img = document.createElement("img") ;
        img.setAttribute('alt', name) ;


        const constantPhotoUrl ="images/signpost.jpg" ;

        if(photoURL.length === 0){
            img.setAttribute('src', constantPhotoUrl) ;
        }else{
            img.setAttribute('src' , photoURL) ;
        } 

        card.appendChild(img) ;


        const cardBody = document.createElement("div") ;
        cardBody.className = "card-body" ;

        const cardTitle = document.createElement("h3") ;
        cardTitle.innerText = name ;
        cardBody.appendChild(cardTitle) ;

        const cardSubtitle = document.createElement("h4") ;
        cardSubtitle.innerText = name ;
        cardBody.appendChild(cardSubtitle) ;


        if(description.length !== 0){
            var cardText = document.createElement("p") ;
            cardText.className = "card-text" ;
            cardText.innerText = description ;
            cardBody.appendChild(cardText) ;
        }

        const cardDeleteBtn = document.createElement("button") ;
        cardDeleteBtn.innerText = "Remove" ; 

        cardDeleteBtn.addEventListener("click" , removeDestination) ;
        cardBody.appendChild(cardDeleteBtn) ;

        card.appendChild(cardBody) ;

        return card ;
    }

    function removeDestination(event){
        const card = event.target.parentElement.parentElement ;
        card.remove() ;
        document.getElementById('title').innerHTML = "Enter Destination Details" ;
    }
})() ;
