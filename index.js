$(document).ready(function() {
    $(".appCon").hide();
    $('#button').hide();
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/category',
        success: function(data) {
            $("#all").click(function() {
                $("#banner").hide();
                $('#button').show();
                var inform = ''
                data.map(function(fash) {
                    return inform += `
                    <div class = "fullApp">
                        <img class = "photo" src ="${fash.image}" alt="our image"/>
                        <h2 design-name> ${fash.name} </h2>
                        <p>the cost is # ${fash.cost}</p>
                        <p>${fash.description}</p>
                  </div>`
                }).join("");
                $(".appCon").show();
                $(".app").append(inform);

            });

        }
    });
    $('#button').click(function() {
        $.ajax({
            type: 'POST',
            URL: 'http://localhost:3000/category',
            dataType: "JSON",
            data: JSON.stringify({ "name": $("#name").val(), "type": $("#type").val(), "image": $("#image").val(), "description": $("#descript").val() }),
            success: function(data, status) {
                $(".app").append(inform);
            }
        });
    });
})