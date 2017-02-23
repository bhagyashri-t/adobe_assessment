
$(document).ready(function() {

	$('#bulb').removeClass('bulb-on');
	$('#temperatureInput').val('65');

	$('#bulbButton').click(function() {
		$('#temperature').hide();
		$('#curtains').hide();
		$('#componentContainer').removeClass('componentTemperature');
		$('#bulb').show();

		$('#bulb').toggleClass('bulb-off');
		$('#bulb').toggleClass('bulb-on');
	});

	$('#temperatureInput').focusout(function() {
		var temp = ($(this).val() !== '') ? $(this).val() : '65';
		$(this).val(temp);
		$('#setTemp').text(temp);
	})
	
	$('#temperatureInput').keyup(function() {
		$('#bulb').hide();		
		$('#curtains').hide();
		$('#temperature').show();
		
		$('#componentContainer').addClass('componentTemperature');
		var setTemp = $(this).val();
		var color = "";
		$('#setTemp').text(setTemp);
		if(setTemp > 80) {
			color = 'rgba(' + setTemp + ',0,0,0.8)';			
		} else {
			if(setTemp >= 0) {
				color = 'rgba(0,0,'+ setTemp + ',0.8)'
			} else {
				color = '#ffffff';
				$('#temperature div').css('color', '#808080');
			}
		}
		$('#temperature').css('background-color', color);
	});

	$('#curtainButton').click(function() {
		$('#temperature').hide();
		$('#bulb').hide();
		$('#componentContainer').removeClass('componentTemperature');
		$('#curtains').show();
		$('.curtain-left').toggleClass('curtain-open');
	});	

	$('#increaseTemp').click(function() {
		var increasedTemp = Number($('#temperatureInput').val()) + 1;
		$('#temperatureInput').val(increasedTemp);
		$('#temperatureInput').keyup();
	});

	$('#decreaseTemp').click(function() {
		var decreasedTemp = Number($('#temperatureInput').val()) - 1;
		$('#temperatureInput').val(decreasedTemp);
		$('#temperatureInput').keyup();
	});
	
});