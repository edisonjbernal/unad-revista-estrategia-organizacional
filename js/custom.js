selectBackground = false;
backgroundHeader ="";

menuisOpen=function(){
  if($('#mainMenu').css('right')=='0px'){
    return 1;
  }
};

$('#iconMenu').click(function() {
  if(!selectBackground){
    backgroundHeader=$( '#header' ).css('background-color');
    console.log($( '#header' ).css('background-color'));
    selectBackground=true;
  }
  openMenu();
});

$('#closeMenu').click(function() {
  event.preventDefault();
  openMenu();
});

$('#mainMenu a').click(function() {

  if(menuisOpen()){ openMenu(); }

});


function openMenu(){

  if(menuisOpen()){
    $( '#mainMenu' ).animate({
      right:"-100%"
    }, 300, function() {

      $('#mainMenu').css('opacity',1);
      $( '#mainMenu' ).addClass('menuClose');
      // Animation complete.
    });
    $( '#header' ).animate({

    }, 300, function() {
      $( '#header' ).removeClass('menuOpened');
      // Animation complete.
    });

  }
  else{
    $('#mainMenu').css('opacity',0);
    $( '#header' ).addClass('menuOpened');
    $( '#mainMenu' ).removeClass('menuClose');
    $( '#mainMenu' ).animate({
      opacity: 1,
      right:"0px"
    }, 300, function() {
      // Animation complete.
    });
  }

}

jQuery(window).scroll(function(){
  jQuery(window).scrollTop()>40?(jQuery("header").addClass("fixed")):(jQuery("header").removeClass("fixed"))
});
