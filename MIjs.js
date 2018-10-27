$(document).ready(function(){
    //funcion del menu
    $("#tggmenu").click(function(e){
        e.preventDefault();
        var id = e.target.dataset.targ;
        $("#"+id).tglclss('active');
    });

    $("input").focus(function(){
        $(this).siblings().addClass("labelActive");
   });
   $("textarea").focus(function(){
      $(this).siblings('label').addClass("txtActive");
  });
 
   $("input").focusout(function(){
        if($(this).val()!=""){
            $(this).siblings().addClass("labelActive");
        }else{
            $(this).siblings().removeClass("labelActive");
        }
    });

   $("textarea").focusout(function(){
        if($(this).val()!=""){
            $(this).siblings().addClass("txtActive");
        }else{
            $(this).siblings().removeClass("txtActive");
        }
    });

    $("input[type=range]").on('mousemove', function() {
        var padre = $(this).parent();
        var yo = $(this);
        var hermano =  $(this).siblings('.rangeCounter');
        var ancho = yo.width();
        hermano.visible(true);

        mate = ((ancho-12)/100)*yo.val();
        hermano.css({'left':(mate-2.5)+'px'});
        hermano.children('span')[0].innerHTML=yo.val();
        $(this).on('mouseout',function(){
            hermano.visible(false);
        });
        if($(this).hasClass('blue')){
            yo.css({'background':'linear-gradient(to right, #1976D2 '+yo.val()+'%,#9E9E9E '+yo.val()+'%)'});
        }
    });

    $('.submenu').click(function(e){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
        $(this).children('.children').slideToggle();
    });
    $('.MI-nav-logo i').click(function(e){
        var id = e.target.dataset.tt;
        if($(id).hasClass('active')){
            $(id).removeClass('active');
            $('.overside').css({'display':'none'});
        }else{
            $(id).addClass('active');
            $('.overside').css({'display':'block'});
        }
        $('.overside').click(function(){
            $(id).removeClass('active');
            $(this).css({'display':'none'});
        });
    });

    //funcion del menu
    $("#tggmenu").click(function(e){
        e.preventDefault();
        var id = e.target.dataset.targ;
        if($("#"+id).hasClass("active")){$("#"+id).removeClass("active");}else{$("#"+id).addClass("active");}                                                      
    });

    /*=============MENU=============*/
    $(".nav-link.drop-toggle").click(function(){
      id = $(this).data().toggle;
      $("#"+id).tglclss("show");
    });






    $(".nav-link").click(function(e){
            e.preventDefault();
            $("ul.nav.nav-tabs li.nav-item a.nav-link").removeClass("active");
            $(this).tglclss("active");

            if($(this).data().toggle=="tab"){
                $(".tab-content div.tab-pane").removeClass("show");
                var id = $(this).attr("href");
                $(id).tglclss("show");
            }
        });
    /* ===================================================== */
    /* ============================ SELECTS ================ */
    /* ===================================================== */


    /* ============================ Copia elementos ================== */
        // $("select.mi").each(function (){
        //     $(this).hide();
        //     $(this).after("<div id='dv' class='MI-select-dv'><span class='caret'>▼</span><input type='miselect' value='Elige una opcion' data-toggle='#lss' readonly id='npt'><ul id='lss' class=''></ul></div>");
        //     select_padre = $(this);
        //     hijos_select = $(this).children("option");
        //     hermano_div = $(this).siblings("div");
        //     ul = $(hermano_div).children("ul");
        //     hijos_select.each(function (){
        //         hijo = $(this);
        //         $(ul).append("<li>"+hijo.text()+"</li>");
        //     });
        //     hermano_div.children("input").val(select_padre.data().content);
        // });

    /* ============================ Funcion de mostrar y seleccionar ================== */
        var i =0;
        
        // $("input[type=miselect]").click(function (){

        //     $("input[type=miselect]").each(function (){
        //         $(this).siblings("ul").removeClass("show");
        //     });

        //     var this_e = $(this);
        //     var select = $(this).parent().siblings("select");
        //     var target = $(this).siblings("ul");  

        //     $(target).tglclss("show");

        //     target.children("li").click(function (){
        //         if(i<2){
        //             select.trigger('change');
        //             select.trigger('click');
        //             i++
        //         }

        //         target_element = $(this);
        //         target.children("li").removeClass("active");
        //         target_element.addClass("active");
        //         select.children("option").attr("selected",false);

        //         select.children("option").each(function (){
        //             abuelo_hijo = $(this);
        //             if(abuelo_hijo.index()==target_element.index()){
        //                 target.removeClass("show");
        //                 this_e.val(target_element.text());
        //                 abuelo_hijo.attr("selected",true);
        //                 return true;
        //             }
        //         });
        //     });
        //         i=0;
            
        // });


    /* ============================ Ocultar si se da 
    click en otro lado ================== */

        $("*:not(input[type=miselect])").on("click", function(){
            if ($("input[type=miselect]").siblings("ul").hasClass("show")){
                $("input[type=miselect]").siblings("ul").removeClass("show");
            }
        });
             
        $("input[type=miselect]").on("click", function(event){
            $("input[type=miselect] ul").slideToggle();
            event.stopImmediatePropagation(); //Detengo la inmediata propagación del evento
        });

    /* ============================ FIN SELECTS ================== */


            $("button").click(function(){
                if($(this).data().c=="main"){
                    target = $(this).data().target;
                    $(target).tglclss("show");
                }
            }); 
});

        