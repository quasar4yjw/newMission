var check = 0;

$('.tile').hover(function(event){
	$(this).css('background-color', 'pink');
}, function(event){
	$(this).css('background-color', 'orange');
}); 

$('#btn1').click(function(event){
	$('.tile').each(function(index, element){
		
		if (parseInt(Math.random()*2)){
		    check++;
			$(element).css('background-color', 'black')
			setTimeout(function(){
				$(element).css('background-color', 'orange');
			} ,2000);
            
            $(element).click(function(event){
            	check--;
            	if (check == 0){
                	$(element).append('<img src=imageV.png width=100 height=100>')	
                	}
            	$(element).css('background-color', 'blue');
            	
            	$(element).hover(function(event){
            		$(this).css('background-color', 'blue');
            	}, function(event){
            		$(this).css('background-color', 'blue');
            	}); 
            	
            });
            
            
		} else {
			$(element).click(function(event){
            	$(element).css('background-color', 'red');
            	$(element).append('<img src=imageX.jpg width=100 height=100>')
            	$(element).hover(function(event){
            		$(this).css('background-color', 'red');
            	}, function(event){
            		$(this).css('background-color', 'red');
            	}); 
            });
		}
	
	});
});

