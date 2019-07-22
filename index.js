$(document).ready(function() {
    $(".app").hide();
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
                    <div>
                    <div>
                      <img class = "photo" src ="${fash.image}" alt="our image"/>
                      <h1>${fash.id} ${fash.name} </h1>
                      <p>the cost is # ${fash.cost}</p>
                      <p>${fash.description}</p>
                      </div>
                  </div>`
                }).join("");
                $(".app").show();
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