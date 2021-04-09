//Business Logic
function Pizza(toppings, size){
  this.toppings = toppings
  this.size = size
}

Pizza.prototype.cost = function(){
  //small = 15
  //medium = 20
  //large = 27
}

//UI Logic
$(document).ready(function(){
  $("form.orderOnline").submit(function(event){
    event.preventDefault();

    let small = $("#small")[0].selected;
    let medium = $("#medium")[0].selected;
    let large = $("#large")[0].selected;





  })
  

})