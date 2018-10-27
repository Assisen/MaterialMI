var img = 1;
					var pos;
					$("#slc .slider-item").hide();
					$("#slc .slider-item:first").show();
					var items =  $("#slider .slider-content .slider-item");

					for (var i = 0; i < items.size(); i++) {
						$(".pagination").append("<span><i class='fa fa-circle'></i></span>");
					}

					$(".pagination > span").click(pagination);
					$("#btnn").click(next);
					$("#btnp").click(prev);

					function pagination(){
						$(".pagination > span").removeClass("active");
						$(this).addClass("active");
						pos = $(this).index()+1;
						$("#slc .slider-item").hide();
						$("#slc .slider-item:nth-child("+pos+")").fadeIn();

						img = pos;
					}	

					function next(){
						if(img >= items.size()){
							img=0;
						}
						img++;
						$("#slc .slider-item").hide();
						$("#slc .slider-item:nth-child("+img+")").fadeIn();
						pag(img);
					}

					function prev(){
						if(img <= 1){
							img=items.size()+1;
						}
						img--;
						$("#slc .slider-item").hide();
						$("#slc .slider-item:nth-child("+img+")").fadeIn();
						pag(img);
					}

					function pag(pos){
						$(".pagination > span").removeClass("active");
						$(".pagination > span:nth-child("+pos+")").addClass("active");
					}