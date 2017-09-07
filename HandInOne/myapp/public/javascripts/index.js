function myfunc(){
    window.console.log("called");
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

function doSomething() {
    
}

$('.my-form').submit(function(){
    myfunc();
})