$(document).ready(function(){

	var accessorsRegex = /using|public|private|class|void/g;
	var baseTypesRegex = /int|float|bool|string|double|single|decimal|long/g;
	var userTypesRegex = /Transform|Rigidbody2D|Rigidbody|GameObject|Vector2|Vector3|Input/g;
	var baseTypes = ['float', 'int', 'string','bool','false','true'];
	var userTypes = ['Transform', 'Vector2', 'Vector3','GameObject'];
	var i;
   
	$('.code').each(function(){
		
	var text = $(this).html();
	
	text = text.replace(/["'].+["']/g,'<font color="mediumspringgreen">$&</font>');
	//text = text.replace(/(?<!^)(?<=[^\w])(\d+\.\d+f|\d+\.\d+|\d+f|\d+)/g, '<font color="plum">$&</font>');
	text = text.replace(/(?<=class\s)\w+|(?<=:).+(?=\{)/g, '<font color="orange">$&</font>'); //Class
	text = text.replace(accessorsRegex, '<font color="deepskyblue">$&</font>'); //Accessors

	//text = text.replace(/\w+(?=\()/g,'<font color="mediumspringgreen">$&</font>');
	text = text.replace(/(\/\/.+)/g,'<font color="gray">$&</font>');
	
	text = text.replace(baseTypesRegex,'<font color="deepskyblue">$&</font>');
	
	text = text.replace(userTypesRegex,'<font color="orange">$&</font>');
	
   
   
   
	
	
	text = text.replace(/\r\n\d+/g, '<font color="yellow">$&</font>');
   
   
	$(this).html(text);
	});

});