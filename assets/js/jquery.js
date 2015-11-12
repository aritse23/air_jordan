$( document ).ready(function() {

	//Click CTA
	$('.jumpmanCTA').click(function(event){
		event.preventDefault();
		$('h1').animate({
			marginTop: '0',
			paddingTop: '1em',
			fontSize: '24px'
		});
		// $('hr').animate({
		// 	marginLeft: '10%',
		// 	width: '80%'
		// });
		$('h6').animate({
			fontSize: '10px'
		});
		$('.title').animate({
			width:'70%',
			right: '0'
		});
		$('.jumpmanCTA').hide('slow');
		$('.home').show('slow');
		$('#main').show().animate({
			top: '100px',
			bottom: '0'
		});

	})

	//Click Home Button
	$('.home').click(function(event){
		event.preventDefault();
		$('h1').animate({
			marginTop: '2em',
			paddingTop: '0',
			fontSize: '2em'
		});
		$('h6').animate({
			fontSize: '0.67em'
		});
		$('.title').animate({
			width:'100%'
		});
		$('.jumpmanCTA').show('slow');
		$('.home').hide('slow');
		$('#main').animate({
			top: '100%'
		}).hide('slow');
	})
});