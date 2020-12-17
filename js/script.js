// check if touch device
function isTouchDevice(){
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var mq = function(query) {
    return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

// add class for body
if (isTouchDevice()) {
  $('body').addClass('touch-device');

  // navigation
  $('.nav-link-drop').on('click', function(e){
    e.preventDefault();
    $(this).next().toggleClass('visible');
  });
}

var accordionItemc = $('.accordion-item.c'),
    accordionHeadc = $('.accordion-head.c');

accordionHeadc.on('click', function(){
  accordionItemc.removeClass('active');
  $(this).parent().addClass('active');
});

var accordionItemt = $('.accordion-item.t'),
    accordionHeadt = $('.accordion-head.t');

accordionHeadt.on('click', function(){
  accordionItemt.removeClass('active');
  $(this).parent().addClass('active');
});

var navCollapse = $('.navbar-toggler');
var landingPic = $('.landing-pic');
var flag = 0;

navCollapse.on('click', function(){
  if(flag == 0) {
    landingPic.addClass('hide');
    flag = 1;
  }
  else {
    landingPic.removeClass('hide');
    flag = 0;
  }
});

$('input').focus(function() {
   $('footer').addClass('hide-footer');
});

$('input').focusout(function() {
   $('footer').removeClass('hide-footer');
});

function hideKeyboard(element) {
  element.setAttribute('readonly', 'readonly'); // Force keyboard to hide on input field.
  element.setAttribute('disabled', 'true'); // Force keyboard to hide on textarea field.
  setTimeout(function() {
      element.blur();  //actually close the keyboard
      // Remove readonly attribute after keyboard is hidden.
      element.removeAttribute('readonly');
      element.removeAttribute('disabled');
  }, 100);
}

function snackbar() {
  // retrieve focus
  hideKeyboard(document.getElementById('email'));
  
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2990);
}

var isVisible = false;

function anunciar() {
  var elem = document.getElementById("anunciar-overlay");

  if(isVisible) {
    elem.classList.add("disappear");
    setTimeout(() => {
      elem.classList.add("hidden");
      elem.classList.remove("disappear");
    }, 500);
  }
  else {
    document.querySelector('.sub-tick').innerHTML = "Anunciar";
    document.querySelector('.sub-button').classList.remove('sub-button__circle');

    elem.classList.remove("hidden");
    elem.classList.add("appear");
    setTimeout(() => {
      elem.classList.remove("appear");
    }, 500);
  }

  isVisible = !isVisible;

}

let button = document.querySelector('.sub-button');
let buttonText = document.querySelector('.sub-tick');

const tickMark = "<svg width=\"38\" height=\"25\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

if(buttonText) {
  buttonText.innerHTML = "Anunciar";
}

if(button) {
  button.addEventListener('click', function() {
    buttonText.innerHTML = tickMark;
    setTimeout(() => {
      anunciar();
    }, 300);
    this.classList.add('sub-button__circle');
  });
}