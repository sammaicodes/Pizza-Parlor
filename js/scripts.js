//Business Logic
function Pizza(toppings, size){
  this.toppings = toppings
  this.size = size
}

Pizza.prototype.cost = function(){
    let choices = this.toppings;
    let toppingSum = (rackUp, currentTopping) => rackUp + currentTopping
    let toppingTotal = choices.reduce(toppingSum)

    let sizeChoice = this.size
    let sizePrice;
    if (sizeChoice === "small"){
      sizePrice = 15;
    }else if(sizeChoice === "medium"){
      sizePrice = 20;
    }else{
      sizePrice = 27;
    }
    return sizePrice + toppingTotal;
}

//UI Logic
$(document).ready(function(){
  $("form.orderOnline").submit(function(event){
    event.preventDefault();

    let small = $("#small")[0].selected;
    let medium = $("#medium")[0].selected;
    let large = $("#large")[0].selected;

    let sizeChoice;
    if (small === true){
      sizeChoice = "small";
    }else if(medium === true){
      sizeChoice = "medium";
    }else{
      sizeChoice = "large";
    }
    const allToppings = []
    $("input:checkbox[name=toppings]:checked").each(function() {
      allToppings.push(parseInt($(this).val()));   
    });
    let lunch = new Pizza(allToppings, sizeChoice);
    let total = lunch.cost();  
    $('.showCost').text(total);
    $('.showSize').text(lunch.size);
    $('#results').show();
  })
})