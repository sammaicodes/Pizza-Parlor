//Business Logic
function Pizza(toppings, size){
  this.toppings = toppings
  this.size = size
}

Pizza.prototype.cost = function(){
  //Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
  //extra topping = 3 dolls
  //small = 15 dolls + extra toppings
  //medium = 20 dolls + extra toppings
  //large = 27 dolls + extra toppings
  
  
}

//UI Logic
$(document).ready(function(){
  $("form.orderOnline").submit(function(event){
    event.preventDefault();

    let small = $("#small")[0].selected;
    let medium = $("#medium")[0].selected;
    let large = $("#large")[0].selected;

    let size;
    if (small === true){
      size = 15;
    }else if(medium === true){
      size = 20;
    }else{
      size = 27;
    }

    console.log(size)

    const allToppings = []
    $("input:checkbox[name=toppings]:checked").each(function() {
      allToppings.push(parseInt($(this).val()));
      
    });
    console.log(allToppings)

  })
})