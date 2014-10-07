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
		$(this).css('background-color', 'orange');
	}); }



$('#btn1').click(function(event){
	$('.tile').each(function(index, element){

		if (parseInt(Math.random()*2)){
			check++;
			$(element).css('background-color', 'black')
			rotateCell($(element));
			setTimeout(function(){
				$(element).css('background-color', 'orange');
				hoverReset();
			} ,2000);

			setTimeout(function(){
				$(element).click(function(event){
					check--;
					if (check == 0){
						
						
						$(element).append('<img src=imageV.png width=100 height=100>')	
						$('#resultTrue').fadeIn();
						stage++;

						setTimeout(function(){
							$('#puzzleTop')
							.empty()
							.css({'height':110*stage + 'px', 'width':110*stage + 'px'});
							for (var i=0; i<stage*stage; i++){
								$('<div>').appendTo('#puzzleTop').attr('class', 'tile')

							}
							hoverReset();
						} ,1800);
					}
					
						$(element).css('background-color', 'blue');

						$(element).hover(function(event){
							$(this).css('background-color', 'blue');
						}, function(event){
							$(this).css('background-color', 'blue');
						}); 
					
				});
			} ,2300);


		} else {
			$(element).click(function(event){
				$(element).css('background-color', 'orange');
				$(element).append('<img src=imageX.jpg width=100 height=100>')
				setTimeout(function(){
					$(element).empty();
				} ,1000);
				$(element).hover(function(event){
					$(this).css('background-color', 'orange');
				}, function(event){
					$(this).css('background-color', 'orange');
				}); 
			});
		}

	});
});

