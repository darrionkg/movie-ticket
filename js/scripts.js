// Business Logic for AddressBook
function TicketList(totalPrice) {
  this.totalPrice = totalPrice
}

TicketList.prototype.addToTotal = function(ticket) {
    this.totalPrice += ticket;
}

function Ticket(childrenPrice, adultPrice, experiencedPrice) {
  this.childrenPrice = childrenPrice,
  this.adultPrice = adultPrice,
  this.experiencedPrice = experiencedPrice
}

Ticket.prototype.setBasePrice = function() {
    this.childrenPrice = 2.00;
    this.adultPrice = 4.00;
    this.experiencedPrice = 3.00;

}

Ticket.prototype.raisePrice = function() {
  this.childrenPrice = 4.00;
  this.adultPrice =6.00;
  this.experiencedPrice = 5.00;
}

Ticket.prototype.calculateTotal = function(childrenCount, adultCount, experiencedCount) {
  var totalTickets1 = this.childrenPrice * childrenCount;
  var totalTickets2 = this.adultPrice * adultCount;
  var totalTickets3 = this.experiencedPrice * experiencedCount;
  var total = totalTickets1 + totalTickets2 + totalTickets3;
  return "$" + total;
}

  //var timeSelect = $("selectTime").val();
$(document).ready(function() {
  var children = 0;
  var adult = 0;
  var experienced = 0;
  var ticket = new Ticket(children, adult, experienced);
  $("#the-form").submit(function(event) {
    event.preventDefault();
    $('#show-totalPrice').show();
    var childrenCount = $('#childrenInput').val();
    var adultCount = $('#adultInput').val();
    var experiencedCount = $('#experiencedInput').val();
    var movieTime = $('#selectTime').val();
    if(movieTime === "normalTime") {
      ticket.setBasePrice();
    } else {
      ticket.raisePrice();
    }
    var total = ticket.calculateTotal(childrenCount, adultCount, experiencedCount);
    $(".total").text(total);
    // $('#childrenPrice, #adultPrice, #experiencedPrice').show();


    $('.input-number-increment').click(function() {
      var $input = $(this).parents('.input-number-group').find('.input-number');
      var val = parseInt($input.val(), 10);
      $input.val(val + 1);
    });

    $('.input-number-decrement').click(function() {
      var $input = $(this).parents('.input-number-group').find('.input-number');
      var val = parseInt($input.val(), 10);
      $input.val(val - 1);
    })
  });
});
