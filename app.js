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
  //Add up columns
    var tds = document.getElementById('priceTable').getElementsByTagName('td');
      var monthSum = 0;
      for(var i = 0; i< tds.length -1; i++){
         if(tds[i].className == 'countMonth'){
         monthSum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
        }
      }
      document.getElementById('firstMonthTotal').innerHTML = monthSum

      var tds = document.getElementById('priceTable').getElementsByTagName('td');
      var monthSum = 0;
      for(var i = 0; i< tds.length -1; i++){
         if(tds[i].className == 'countRecurring'){
         monthSum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
        }
      }
      document.getElementById('recurringTotal').innerHTML = monthSum

  // Dog Data Table Calc
    $("#dogCount").change(function(){
    if (document.getElementById("dogCheckbox").value == "true"){
      var dogCount= document.getElementById("dogCount").value;
      var dogMonthlyFee= 25*(dogCount);
      var dogDeposit= 200 + 50*((dogCount)-1);     
      var dogFee= 200 + 50*((dogCount)-1);
      $("#dogFeeChoice").html(dogCount + " Dog(s)");
      $("#dogFeeDescription").html("Non-refundable Fee");
      $("#dogFeeAmount").html(dogFee);
      $("#dogFeeFirstMonth").html(dogFee);
      
      $("#dogDepositChoice").html(dogCount + " Dog(s)");
      $("#dogDepositDescription").html("Refundable Deposit");
      $("#dogDepositAmount").html(dogDeposit);
      $("#dogDepositFirstMonth").html(dogDeposit);

      $("#dogMonthlyChoice").html(dogCount + " Dog(s)");
      $("#dogMonthlyDescription").html("Non-refundable Monthly");
      $("#dogMonthlyAmount").html(dogMonthlyFee);
      $("#dogMonthlyFirstMonth").html(dogMonthlyFee);
      $("#dogMonthlyRecurring").html(dogMonthlyFee);
    }else if(document.getElementById("dogCheckbox").value =="false"){

    }
      var tds = document.getElementById('priceTable').getElementsByTagName('td');
      var monthSum = 0;
      for(var i = 0; i< tds.length -1; i++){
         if(tds[i].className == 'countMonth'){
         monthSum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
        }
      }
      document.getElementById('firstMonthTotal').innerHTML = monthSum

      var tds = document.getElementById('priceTable').getElementsByTagName('td');
      var monthSum = 0;
      for(var i = 0; i< tds.length -1; i++){
         if(tds[i].className == 'countRecurring'){
         monthSum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
        }
      }
      document.getElementById('recurringTotal').innerHTML = monthSum
  });

    // Cat Data Table Calc
    $("#catCount").change(function(){
    if (document.getElementById("catCheckbox").value == "true"){
      var catCount= document.getElementById("catCount").value;
      var catMonthlyFee= 15*(catCount);
      var catDeposit= 200 + 50*((catCount)-1);     
      var catFee= 200 + 50*((catCount)-1);
      $("#catFeeChoice").html(catCount + " Cat(s)");
      $("#catFeeDescription").html("Non-refundable Fee");
      $("#catFeeAmount").html(catFee);
      $("#catFeeFirstMonth").html(catFee);
      
      $("#catDepositChoice").html(catCount + " Cat(s)");
      $("#catDepositDescription").html("Refundable Deposit");
      $("#catDepositAmount").html(catDeposit);
      $("#catDepositFirstMonth").html(catDeposit);

      $("#catMonthlyChoice").html(catCount + " Cat(s)");
      $("#catMonthlyDescription").html("Non-refundable Monthly");
      $("#catMonthlyAmount").html(catMonthlyFee);
      $("#catMonthlyFirstMonth").html(catMonthlyFee);
      $("#catMonthlyRecurring").html(catMonthlyFee);
    }else if(document.getElementById("catCheckbox").value =="false"){

    }
      var tds = document.getElementById('priceTable').getElementsByTagName('td');
      var monthSum = 0;
      for(var i = 0; i< tds.length -1; i++){
         if(tds[i].className == 'countMonth'){
         monthSum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
        }
      }
      document.getElementById('firstMonthTotal').innerHTML = monthSum

      var tds = document.getElementById('priceTable').getElementsByTagName('td');
      var monthSum = 0;
      for(var i = 0; i< tds.length -1; i++){
         if(tds[i].className == 'countRecurring'){
         monthSum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
        }
      }
      document.getElementById('recurringTotal').innerHTML = monthSum
  });


	
  //change value of pet checkboxs when checked
  $('#petCheckbox').change(function(){
     pcb = $(this);
     pcb.val(pcb.prop('checked'));
 });
  $('#dogCheckbox').change(function(){
     dcb = $(this);
     dcb.val(dcb.prop('checked'));
 });
  $('#catCheckbox').change(function(){
     ccb = $(this);
     ccb.val(ccb.prop('checked'));
 });
  //initially hide animal choices
  $('#dogCheckdiv').hide();
  $('#catCheckdiv').hide();
  //show anial chexkboxes if
  $('#petCheckbox').change(function(){
    if (document.getElementById("petCheckbox").value == "true"){
      console.log(true)
        $('#dogCheckdiv').show();
        $('#catCheckdiv').show();
    }else if (document.getElementById("petCheckbox").value == "false"){
      console.log(false)
      $('#dogCheckdiv').hide();
      $('#catCheckdiv').hide();
    }
  });
  //initially hide dogdropdown choices
  $('#dogDropdown').hide();
  $('#catDropdown').hide();
  //show dropdowns if
  $('#dogCheckbox').change(function(){
    if (document.getElementById("dogCheckbox").value == "true"){
      console.log(true)
        $('#dogDropdown').show();
        var dogCount= document.getElementById("dogCount").value;
      var dogMonthlyFee= 25*(dogCount);
      var dogDeposit= 200 + 50*((dogCount)-1);     
      var dogFee= 200 + 50*((dogCount)-1);
      $("#dogFeeChoice").html(dogCount + " Dog(s)");
      $("#dogFeeDescription").html("Non-refundable Fee");
      $("#dogFeeAmount").html(dogFee);
      $("#dogFeeFirstMonth").html(dogFee);
      
      $("#dogDepositChoice").html(dogCount + " Dog(s)");
      $("#dogDepositDescription").html("Refundable Deposit");
      $("#dogDepositAmount").html(dogDeposit);
      $("#dogDepositFirstMonth").html(dogDeposit);

      $("#dogMonthlyChoice").html(dogCount + " Dog(s)");
      $("#dogMonthlyDescription").html("Non-refundable Monthly");
      $("#dogMonthlyAmount").html(dogMonthlyFee);
      $("#dogMonthlyFirstMonth").html(dogMonthlyFee);
      $("#dogMonthlyRecurring").html(dogMonthlyFee);
    }else if (document.getElementById("dogCheckbox").value == "false"){
      console.log(false)
      $('#dogDropdown').hide();
      var dogCount= document.getElementById("dogCount").value;
      var dogMonthlyFee= 25*(dogCount);
      var dogDeposit= 200 + 50*((dogCount)-1);     
      var dogFee= 200 + 50*((dogCount)-1);
      $("#dogFeeChoice").html("Dog Fee");
      $("#dogFeeDescription").html("Non-refundable Fee");
      $("#dogFeeAmount").html(0);
      $("#dogFeeFirstMonth").html(0);
      
      $("#dogDepositChoice").html("Dog Deposit");
      $("#dogDepositDescription").html("Refundable Deposit");
      $("#dogDepositAmount").html(0);
      $("#dogDepositFirstMonth").html(0);

      $("#dogMonthlyChoice").html("Dog Monthly Fee");
      $("#dogMonthlyDescription").html("Non-refundable Monthly");
      $("#dogMonthlyAmount").html(0);
      $("#dogMonthlyFirstMonth").html(0);
      $("#dogMonthlyRecurring").html(0);
    }



  });
  $('#catCheckbox').change(function(){
    if (document.getElementById("catCheckbox").value == "true"){
      console.log(true)
        $('#catDropdown').show();
                var catCount= document.getElementById("catCount").value;
      var catMonthlyFee= 25*(catCount);
      var catDeposit= 200 + 50*((catCount)-1);     
      var catFee= 200 + 50*((catCount)-1);
      $("#catFeeChoice").html(catCount + " Cat(s)");
      $("#catFeeDescription").html("Non-refundable Fee");
      $("#catFeeAmount").html(catFee);
      $("#catFeeFirstMonth").html(catFee);
      
      $("#catDepositChoice").html(catCount + " Cat(s)");
      $("#catDepositDescription").html("Refundable Deposit");
      $("#catDepositAmount").html(catDeposit);
      $("#catDepositFirstMonth").html(catDeposit);

      $("#catMonthlyChoice").html(catCount + " Cat(s)");
      $("#catMonthlyDescription").html("Non-refundable Monthly");
      $("#catMonthlyAmount").html(catMonthlyFee);
      $("#catMonthlyFirstMonth").html(catMonthlyFee);
      $("#catMonthlyRecurring").html(catMonthlyFee);
    }else if (document.getElementById("catCheckbox").value == "false"){
      console.log(false)
      $('#catDropdown').hide();
            var catCount= document.getElementById("catCount").value;
      var catMonthlyFee= 25*(catCount);
      var catDeposit= 200 + 50*((catCount)-1);     
      var catFee= 200 + 50*((catCount)-1);
      $("#catFeeChoice").html("Cat Fee");
      $("#catFeeDescription").html("Non-refundable Fee");
      $("#catFeeAmount").html(0);
      $("#catFeeFirstMonth").html(0);
      
      $("#catDepositChoice").html("Cat Deposit");
      $("#catDepositDescription").html("Refundable Deposit");
      $("#catDepositAmount").html(0);
      $("#catDepositFirstMonth").html(0);

      $("#catMonthlyChoice").html("Cat Monthly Fee");
      $("#catMonthlyDescription").html("Non-refundable Monthly");
      $("#catMonthlyAmount").html(0);
      $("#catMonthlyFirstMonth").html(0);
      $("#catMonthlyRecurring").html(0);
    }
  });

  var oneBedroom= 850;
  var twoBedroom= 1000;
  $("#apartmentValue").change(function(){
    if (document.getElementById("apartmentValue").value == "one"){
      $("#apartmentChoice").html("One Bedroom Apartment");
      $("#apartmentDescription").html("750 Square Feet");
      $("#apartmentAmount").html(oneBedroom);
      $("#apartmentFirstMonth").html(oneBedroom);
      $("#apartmentRecurring").html(oneBedroom);
      $("#depositDescription").html("One Bedroom Apartment Deposit");
      $("#depositAmount").html(oneBedroom);
      $("#depositFirstMonth").html(oneBedroom);
      $("#depositRecurring").html(oneBedroom);
        var tds = document.getElementById('priceTable').getElementsByTagName('td');
  var monthSum = 0;
  for(var i = 0; i< tds.length -1; i++){
    if(tds[i].className == 'countMonth'){
      monthSum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
    }
  }
  document.getElementById('firstMonthTotal').innerHTML = monthSum
    }else if(document.getElementById("apartmentValue").value =="two"){
      $("#apartmentChoice").html("Two Bedroom Apartment");
      $("#apartmentDescription").html("950 Square Feet");
      $("#apartmentAmount").html(twoBedroom);
      $("#apartmentFirstMonth").html(twoBedroom);
      $("#apartmentRecurring").html(twoBedroom);
      $("#depositDescription").html("Two Bedroom Apartment Deposit");
      $("#depositAmount").html(twoBedroom);
      $("#depositFirstMonth").html(twoBedroom);
      $("#depositRecurring").html(twoBedroom);
    }
      var tds = document.getElementById('priceTable').getElementsByTagName('td');
      var monthSum = 0;
      for(var i = 0; i< tds.length -1; i++){
         if(tds[i].className == 'countMonth'){
         monthSum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
        }
      }
      document.getElementById('firstMonthTotal').innerHTML = monthSum

      var tds = document.getElementById('priceTable').getElementsByTagName('td');
      var monthSum = 0;
      for(var i = 0; i< tds.length -1; i++){
         if(tds[i].className == 'countRecurring'){
         monthSum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
        }
      }
      document.getElementById('recurringTotal').innerHTML = monthSum
  });

  


  //idk why but it is duplicated but this is t get rid of double arrows on the carousal
  $(".bx-controls-direction")[1].hide();


});

