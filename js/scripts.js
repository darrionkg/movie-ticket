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
    this.childrenPrice *= 2.00;
    this.adultPrice *= 4.00;
    this.experiencedPrice *= 3.00;
    var totalPrice = this.childrenPrice + this.adultPrice + this.experiencedPrice
    return totalPrice;
}

Ticket.prototype.raisePrice = function() {
  this.childrenPrice *= 4.00;
  this.adultPrice *=6.00;
  this.experiencedPrice *= 5.00;
  var totalPrice = this.childrenPrice + this.adultPrice + this.experiencedPrice
  return totalPrice;
}

var children = 0;
var adult = 0;
var experienced = 0;
var ticket = new Ticket(children, adult, experienced);
var total;

$(document).ready(function() {
  $('.normalTime').click(function() {
    total = ticket.setBasePrice();
  });
  $('.peakTime').click(function() {
    total = ticket.raisePrice();
  });
  $("#the-form").submit(function(event) {
    event.preventDefault();
    var children = $('#childrenInput').val();
    var adult = $('#adultInput').val();
    var experienced = $('#experiencedInput').val();
    $(".total").text(total);
    $('#childrenPrice, #adultPrice, #experiencedPrice').show();
    $('.input-number-increment').click(function() {
      var $input = $(this).parents('.input-number-group').find('.input-number');

      var val = parseInt($input.val(), 10);
      console.log(val);
      $input.val(val + 1);
    });

    $('.input-number-decrement').click(function() {
      var $input = $(this).parents('.input-number-group').find('.input-number');
      var val = parseInt($input.val(), 10);
      $input.val(val - 1);
    })
  });
});
