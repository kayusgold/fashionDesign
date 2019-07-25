$(document).ready(function() {
    $(".appCon").hide();

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/category',
        success: function(data) {
            $("#all").click(function() {
                $("#banner").hide();

                var inform = ''
                data.map(function(fash) {
                    return inform += `
                    <div class = "fullApp">
                        <img class = "photo" src ="${fash.image}" alt="our image"/>
                        <h2 design-name> ${fash.name} </h2>
                        <p> Type : ${fash.type} </p>
                        <p>the cost is # ${fash.cost}</p>
                        <p>${fash.description}</p>
                        <div class="btn btn-group btn-block" id="all">
                            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id = "update">Update</a>
                            <a href="#" class="btn btn-danger" id = "delete">Delete</a>
                        </div>
                        
                  </div>`
                }).join("");
                $(".appCon").show();
                $(".app").append(inform);

            });

        }
    });

    /////////////////////////////////////////////////////////////////////
    ////////// POSTING DESIGN DETAILS TO JSON FILE  /////////////////////
    /////////////////////////////////////////////////////////////////////

    // $('#button').click(function() {
    //     let name = $("#name").val();
    //     let type  = $("#type").val();
    //     let cost = $("#cost").val();
    //     let image = $("#image").val();
    //     let des = $("#description").val();
    //     var data = { name: name, type : type, cost : cost, image : image, description : des };    
    //         var stringData = JSON.stringify(data);
    //         console.log(stringData); 
    //         $.ajax({    
    //             type: "POST",    
    //             url: "http://localhost:3000/category",    
    //             data: stringData,    
    //             contentType: "application/json; charset=utf-8",    
    //             dataType: "json",    
    //             success: OnSucces,    
    //             error: OnError    
    //         });     
    //             function OnSucces(response) {    
    //                 if (response == 1) {    
    //                     alert('Category Added Successfully !!!');    
    //                     reset();    
    //                 }    
    //                 else {    
    //                     alert(response);    
    //                 }    
    //             }    
    //             function OnError(response) {    
    //                 alert(response);    
    //             }

    // });
    var myForm = document.getElementById('myForm');

    myForm.onsubmit = function(evt) {
        evt.preventDefault();
        var _this = this;
        var imageUploader = document.getElementById('imageUploader');

        var reader = new FileReader();
        reader.addEventListener(
            'load',
            function() {
                var dataArr = {};

                for (var i = 0; i < _this.elements.length; i++) {
                    var element = _this.elements[i];
                    if (element.name) dataArr[element.name] = element.value;
                }
                dataArr['image'] = reader.result;

                var stringD = JSON.stringify(dataArr);

                $.ajax({
                    type: 'POST',
                    url: 'http://localhost:3000/category',
                    data: stringD,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: OnSucces,
                    error: OnError
                });
            },
            false
        );
        reader.readAsDataURL(imageUploader.files[0]);

        function OnSucces(response) {
            alert('Category Added Successfully !!!');
            window.location.reload();
        }

        function OnError(response) {
            alert("An error was encountered");
        }

        /////////////////////////////////////////////////////////////////////
        ////////// UPDATING DESIGN DETAILS TO JSON FILE  /////////////////////
        /////////////////////////////////////////////////////////////////////

        // $("#update").click(function(idd) {

        //     var idd = idd.id;
        //     $.ajax({
        //         type: "POST",
        //         contentType: "application/json; charset=utf-8",
        //         url: 'http://localhost:3000/category',
        //         data: "{'id':'" + idd + "'}",
        //         dataType: "json",
        //         success: function(response) {
        //             var info = response.split('`');
        //             $('#name').val(info[1]);
        //             $('#type').val(info[2]);
        //             $('#cost').val(info[3]);
        //             $('#description').val(info[4]);
        //             $('#image').val(info[5]);
        //             $('#id').val(idd);

        //         },
        //         error: function(response) {}
        //     });
        // })
    };
});