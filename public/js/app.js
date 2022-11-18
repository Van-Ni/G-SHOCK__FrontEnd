
// Products-thumb-slider
const thumbs = document.querySelector(".products-thumb-nav").children;
console.log(thumbs);
function changeImage(event) {
  document.querySelector(".products-thumb-imgg").src=event.children[0].src
  for(let i=0; i<thumbs.length; i++){
    thumbs[i].classList.remove("product-thumb-nav-item--active");
  }
  event.classList.add("product-thumb-nav-item--active");
}

  // Button + -
$('input.input-qty').each(function() {
  var $this = $(this),
    qty = $this.parent().find('.is-form'),
    min = Number($this.attr('min')),
    max = Number($this.attr('max'))
  if (min == 0) {
    var d = 0
  } else d = min
  $(qty).on('click', function() {
    if ($(this).hasClass('minus')) {
      if (d > min) d += -1
    } else if ($(this).hasClass('plus')) {
      var x = Number($this.val()) + 1
      if (x <= max) d += 1
    }
    $this.attr('value', d).val(d)
  })
})

