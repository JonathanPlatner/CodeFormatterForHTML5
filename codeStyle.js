$(document).ready(function(){
 
	$('.csharp').each(function(){
		
	var text = $(this).html();

	var comments=CopyComments(text);
	text = RemoveComments(text);

	text = text.replace(GetKeywords(), '<span class="keyword">$&</span>');
	
	text = text.replace(GetClasses(), '<span class="class">$&</span>');
	
	text = text.replace(GetUserClasses(), '<span class="class">$&</span>');
	
	text=text.replace(/"([^"><]*)"(?!>)/g, '<span class="string">$&</span>');
	
	text=text.replace(/(?<!\w)(\d+\.\d+f|\d+\.\d+|\d+f|\d+)/g,'<span class="number">$&</span>')
	 
	text = AddComments(text,comments);
   
	$(this).html(text);
	});

});
