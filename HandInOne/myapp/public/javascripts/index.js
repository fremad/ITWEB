function myfunc(){
    window.console.log("called get");
    $.ajax({
        url: "http://localhost:3000/data",
        error: function(){
            window.console.log("An Error occured");
        },
        success: function(html){
            window.console.log(html)
            var tmp = JSON.parse(html)
          $("#results").append(tmp.name);
        }
      });
};


function postfunc(){
    var formdata = {name: $('#ex1').val()}
    
    JSON.stringify();

    window.console.log(formdata);
    $.ajax({
        url: "http://localhost:3000/api",
        method:'POST',
        data: formdata,
        error: function(jqXHR, textStatus, errorThrown){
            window.console.log("An Error occured");
            window.console.log(errorThrown);
        },
        success: function(data, textStatus, jqXHR){
            window.console.log(data)
        }
      });
}



function postexercisefunc(){

    var pathname = window.location.pathname; // Returns path only

        pathname = pathname.replace('/data/','');
        window.console.log(pathname);
    
    var formdata = {
        exercise: $('#ex1').val(),
        description: $('#ex2').val(),
        exset: $('#ex3').val(),
        reps: $('#ex4').val()
}
    // JSON.stringify();

    window.console.log(pathname);
    $.ajax({
        url: "http://localhost:3000/api/"+pathname+"/exercise",
        method:'POST',
        data: formdata,
        error: function(jqXHR, textStatus, errorThrown){
            window.console.log("An Error occured");
            window.console.log(errorThrown);
        },
        success: function(data, textStatus, jqXHR){
            window.console.log(data)
        }
      });
}



function doSomething() {
    
}

$('.my-form').submit(function(){
    myfunc();
})