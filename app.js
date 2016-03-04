$(document).ready(function(){

	$('#locationModal').click(function(){
  	$('.ui.modal')
  		.modal('show');
  });
  $('.slider1').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 10
  });
  $('.ui.checkbox').checkbox();
  //change value of pet checkbox when checked
  $('#petCheckbox').change(function(){
     pcb = $(this);
     pcb.val(pcb.prop('checked'));
 });
  $('#dogCheckbox').change(function(){
     pcb = $(this);
     pcb.val(pcb.prop('checked'));
 });
  $('#catCheckbox').change(function(){
     pcb = $(this);
     pcb.val(pcb.prop('checked'));
 });
  //initially hide animal choices
  $('#dogCheckbox').hide();
  $('#catCheckbox').hide();
  //
  $('#petCheckbox').change(function(){
    if (document.getElementById("petCheckbox").value == "true"){
      console.log(true)
        $('#dogCheckbox').show();
        $('#catCheckbox').show();
    }else if (document.getElementById("petCheckbox").value == "false"){
      console.log(false)
      $('#dogCheckbox').hide();
      $('#catCheckbox').hide();
    }
  });


  $(".bx-controls-direction")[1].hide();


});


// var applicationFee= 40
// var oneBedroom= 850
// var twoBedroom= 1000
// var dogMonthlyFee= 25
// var catMonthlyFee= 15
// var dogDeposit= 200
// var catDeposit= 200
// var dogFee= 200
// var catFee= 200
// var oneBedroomSecurity = 850
// var twoBedroomSecurity = 1000


// var oneTimeExpenses= function(){
//   var oneTimeExpenses = 0;
//    oneTimeExpenses += applicationFee
//    if()
// }

// var monthlyExpenses =