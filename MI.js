
(function($) {

  // Declaración del plugin.
  $.fn.color = function(options) {

     // Obtenemos los parámetros.//y los pasamos a arrray
    //  options = $.extend({}, $.fn.color.defaultOptions, options);

    this.each(function() {
      var element = $(this);
      element.css('color', options);
    });

    return this; 
  }

  $.fn.fondo = function(options) {

    this.each(function() {
      var element = $(this);
      element.css('background', options);
    });

    return this;
  }

  $.fn.tglclss = function(clasName) {

    this.each(function() {
      var element = $(this);
      if(element.hasClass(clasName)){
          element.removeClass(clasName);
      }else{
          element.addClass(clasName);
      }
    });

    return this;
  }

  $.fn.counter = function() {

    this.each(function() {
      var element = $(this);
      var max = element.attr("data-max");
      var c=0;
      console.log(c);
      if(c<=0){
          element.before('<span class="cntr"></span>');
      }
      element.keyup(function(){
          if(element.val().length>max){
              element.addClass('error');
          }else{
              element.removeClass('error');
          }
          element.siblings('span')[0].innerHTML=+element.val().length+'/'+max;
      });

    });

    return this;
  }

  $.fn.visible = function(op) {

    this.each(function() {
      var element = $(this);
     if(op){
         element.css({'opacity':'1'});
     }else{
         element.css({'opacity':'0'});
     }
    });

    return this;
  }

  $.fn.mactive = function() {

    this.click(function(){
      id = $(this).data().toggle;
      $("#"+id).tglclss("show");
    })

    return this;
  }

  $.fn.active = function(op) {

    if(op=="slider"){
      console.log("osmara");
    }

    return this;
  }

})(jQuery);
 