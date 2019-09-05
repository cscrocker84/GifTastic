$(document).ready(function(){

    var displayedButtons = ["Dogs", "Cats", "Sharks", "Birds"];


    // create, dispaly, add data name to btns
    function renderButtons(){ 

        $("#buttons").empty();

        for (var i = 0; i < buttons.length; i++){

            var newButton = $("<button>") 
            newButton.attr("class", "btn btn-default");
            newButton.attr("id", "input")  
            newButton.attr("data-name", displayedButtons[i]); 
            newButton.text(displayedButtons[i]); 
            $("#buttons").append(newButton); 
        }
    }
            renderButtons(); 
