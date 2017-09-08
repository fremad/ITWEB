function myfunc(){
    window.console.log("called get");
    $.ajax({
        url: "http://localhost:3000/data",
        method:'GET',
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

var formdata = {name:"Hans"}

function postfunc(){
    window.console.log("called post");
    $.ajax({
        url: "http://localhost:3000/data",
        method:'POST',
        data: formdata,
        error: function(jqXHR, textStatus, errorThrown){
            window.console.log("An Error occured");
        },
        success: function(data, textStatus, jqXHR){
            window.console.log(data)
            var tmp = JSON.parse(data)
          $("#results").append(tmp.name);
        }
      });
}

function doSomething() {
    
}

$('.my-form').submit(function(){
    myfunc();
})