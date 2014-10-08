var stage = 2;
var check = 0;
function rotateCell(element){

	element.animate({  borderSpacing: 180 }, {
		step: function(now,fx) {
			$(this).css('-webkit-transform','rotatey('+(now)+'deg)'); 
			$(this).css('-moz-transform','rotatey('+(now)+'deg)');
			$(this).css('transform','rotatey('+(now)+'deg)');
		},
		duration:'slow'
	},'linear');
}

function hoverReset(){ 
	$('.tile').hover(function(event){
		$(this).css('background-color', 'pink');

	}, function(event){
		$(this).css('background-color', 'darkorange');
	}); }

$('#btnStart').hover(function(event){
	$(this).css('background-color', 'pink').css('color', 'black');

}, function(event){
	$(this).css('background-color', 'darkorange').css('color', 'white');
}); 



$('#btnStart').click(function(event){
	check = 0;
	$('.tile').each(function(index, element){

		if (parseInt(Math.random()*2)){
			rotateCell($(element));
			check++;

			$(element).css('background-color', 'black');

			setTimeout(function(){
				$(element).css('background-color', 'darkorange');
				hoverReset();
			} ,2000);

			setTimeout(function(){
				$(element).click(function(event){
					check--;
					if (check == 0){


						$(element).append('<img src=imageV.png width=100 height=100>')	
						$('#resultTrue').fadeIn().fadeOut(1500);
						stage++;

						setTimeout(function(){
							$('#puzzleTop')
							.empty()
							.css({'height':110*stage + 'px', 'width':110*stage + 'px'});
							for (var i=0; i<stage*stage; i++){
								$('<div>').appendTo('#puzzleTop').attr('class', 'tile')

							}

						} ,2000);
					}

					$(element).css('background-color', 'crimson');

					$(element).hover(function(event){
						$(this).css('background-color', 'crimson');
					}, function(event){
						$(this).css('background-color', 'crimson');
					}); 

				});
			} ,2300);


		} else {
			$(element).click(function(event){
				$(element).css('background-color', 'darkorange');
				$(element).append('<img src=imageX.jpg width=100 height=100>')
				setTimeout(function(){
					$(element).empty();
				} ,1000);
				$(element).hover(function(event){
					$(this).css('background-color', 'darkorange');
				}, function(event){
					$(this).css('background-color', 'darkorange');
				}); 
			});
		}

	});
});

