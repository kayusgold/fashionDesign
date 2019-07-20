$(document).ready(function (){
    $.ajax({
        type : 'GET',
        url: 'http://localhost:3000/category',
        success: function(data){
            $("#all").click(function(){
                $("#banner").hide();
                data.map(function(fash){
                    $("#app").append(` <div class = "allfashion">
                        <img class = "photo" src = "${fash.image}"/>
                        <h1> ${fash.name} </h1>
                    </div>`
                
            ).join("")
        }) 
            });
            
        }

    })



})