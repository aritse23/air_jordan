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

	});
	//Toggles Nav Menu button
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		//Toggles Nav List
		$('.nav-list').slideToggle('slow');
		$('.current').toggle('slow');
	});

	//Clicking on Story
	$('.story-butt').click(function(event){
		event.preventDefault();
		//closes list and changes burger icon
		$('.nav-list').slideToggle('slow');
		$('#nav-icon').toggleClass('open');
		//show story content, hide the rest
		$('#story').show('slow');
		$('#trademarks').hide('slow');
		$('#usage').hide('slow');
		//adds current class to Story
		$('#story').addClass('current');
		$('#trademarks').removeClass('current');
		$('#usage').removeClass('current');
	});
	$('.trademarks-butt').click(function(event){
		event.preventDefault();
		//closes list and changes burger icon
		$('.nav-list').slideToggle('slow');
		$('#nav-icon').toggleClass('open');
		//show trademarks content, hide the rest
		$('#story').hide('slow');
		$('#trademarks').show('slow');
		$('#usage').hide('slow');
		//adds current class to trademarks
		$('#story').removeClass('current');
		$('#trademarks').addClass('current');
		$('#usage').removeClass('current');
	});
	$('.usage-butt').click(function(event){
		event.preventDefault();
		//closes list and changes burger icon
		$('.nav-list').slideToggle('slow');
		$('#nav-icon').toggleClass('open');
		//show usage content, hide the rest
		$('#story').hide('slow');
		$('#trademarks').hide('slow');
		$('#usage').show('slow');
		//adds current class to usage
		$('#story').removeClass('current');
		$('#trademarks').removeClass('current');
		$('#usage').addClass('current');
	});
});