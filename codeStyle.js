$(document).ready(function(){

	var accessorsRegex = /using|public|private|class|void|static|namespace/g;
	var baseTypesRegex = /int|float|bool|string|double|single|decimal|long/g;
	var userTypesRegex = /Transform|Rigidbody2D|Rigidbody|GameObject|Vector2|Vector3|Input/g;
	var baseTypes = ['float', 'int', 'string','bool','false','true'];
	var userTypes = ['Transform', 'Vector2', 'Vector3','GameObject'];
	var i;
   
	$('.csharp').each(function(){
		
	var text = $(this).html();
	
	//text = text.replace(/["'].+["']/g,'<font color="mediumspringgreen">$&</font>');
	//text = text.replace(/(?<!^)(?<=[^\w])(\d+\.\d+f|\d+\.\d+|\d+f|\d+)/g, '<font color="plum">$&</font>');
	//text = text.replace(/(?<=class\s)\w+|(?<=:).+(?=\{)/g, '<font color="orange">$&</font>'); //Class
	
	var comments=CopyComments(text);
	text = RemoveComments(text);
	text = text.replace(GetKeywords(), '<span class="keyword">$&</span>');
	
	text = text.replace(GetClasses(), '<span class="class">$&</span>'); //Accessors
	 
	text = AddComments(text,comments);
	//text=GetKeywords();
	//text = text.replace(/\w+(?=\()/g,'<font color="mediumspringgreen">$&</font>');
	//text = text.replace(/(\/\/.+)/g,'<span class="comment">$&</span>');
	
	//text = text.replace(baseTypesRegex,'<font color="deepskyblue">$&</font>');
	
	//text = text.replace(userTypesRegex,'<font color="orange">$&</font>');
	//text=text.split(' ');
	//text = text.join(' ');
   
	//text = text.replace(GetKeywords())
	//text = RemoveComments(text);
	//text = ReplaceText(text,GetKeywords(),'keyword');
	
	//text = text.replace(/\r\n\d+/g, '<font color="yellow">$&</font>');
   
   
	$(this).html(text);
	});

});
