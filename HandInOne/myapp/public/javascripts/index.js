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

function postfunc(){
    window.console.log("called post");
    $.ajax({
        url: "http://localhost:3000/data",
        method:'POST',
        error: function(){
            window.console.log("An Error occured");
        },
        success: function(html){
            window.console.log(html)
            var tmp = JSON.parse(html)
          $("#results").append(tmp.name);
        }
      });
}

function doSomething() {
    
}

$('.my-form').submit(function(){
    myfunc();
})