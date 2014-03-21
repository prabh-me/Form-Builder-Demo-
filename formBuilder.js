function debug(a){
	console.log(a);
}
function convertName(string){
	string = string.toLowerCase()
				.replace(/ /g,"-")
				.replace(/ç/g,"c")
				.replace(/ğ/g,"g")
				.replace(/ü/g,"u")
				.replace(/ş/g,"s")
				.replace(/ö/g,"o")
				.replace(/ı/g,"i");
	return string;
}


$('.hero-unit').on('sortable','.formBody');


$( ".formBody" ).sortable({
	placeholder: "alert alert-info",
	delay:300
});
$( ".formBody" ).disableSelection();


$('#formTabs a').click(function (e) {
	e.preventDefault();
	$(this).tab('show');
})

$('.formHeader').click(function(){
	$('#formTabs a.prop').tab('show');
});


var lipsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function contents(arg){
	if(arg == 'textField')$('.formBody').append('<li data-fieldnum="'		+ ($('.formItem.textField').size() + 1) +'" data-type="textField" class="formItem textField"><label >Text</label><input type="text" name="text"><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'textarea')$('.formBody').append('<li data-fieldnum="'		+ ($('.formItem.textarea').size() + 1) +'" data-type="textarea" class="formItem textarea"><label >Input</label><textarea name="text"></textarea><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'selectBox')$('.formBody').append('<li data-fieldnum="'		+ ($('.formItem.selectBox').size() + 1) +'" data-type="selectBox" class="formItem selectBox"><label >Input</label><select><option value="0">Option 1</option></select><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'radioButton')$('.formBody').append('<li data-fieldnum="'	+ ($('.formItem.radioButton').size() + 1) +'" data-type="radioButton" class="formItem radioButton"><div class="delete icon-remove-sign"></div><label for="radios">Text</label><ul><li><input type="radio" name="radios" value="opt1"/><span>Option 1</span></li><li><input type="radio" name="radios" value="opt2"/><span>Option 2</span></li><li><input type="radio" name="radios" value="opt3"/><span>Option 3</span></li></ul></li>');
	if(arg == 'checkBox')$('.formBody').append('<li data-fieldnum="'		+ ($('.formItem.radioButton').size() + 1) +'" data-type="checkBox" class="formItem checkBox"><div class="delete icon-remove-sign"></div><label for="checks">Checkbox</label><ul><li><input type="checkbox" name="checks" value="opt1"/><span>Option 1</span></li><li><input type="checkbox" name="checks" value="opt2"/><span>Option 2</span></li><li><input type="checkbox" name="checks" value="opt3"/><span>Option 3</span></li></ul></li>');
	if(arg == 'seperator')$('.formBody').append('<li data-fieldnum="'		+ ($('.formItem.break').size() + 1) +'" data-type="seperator" class="formItem break"><label>Başlık</label><hr><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'blank')$('.formBody').append('<li data-fieldnum="'			+ ($('.formItem.freeText').size() + 1) +'" data-type="blank" class="formItem freeText"><div class="lipsum">'+lipsum+'</div><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'name')$('.formBody').append('<li data-fieldnum="'			+ ($('.formItem.name').size() + 1) +'" data-type="name" class="formItem name"><label>Ad Soyad</label><span><input type="text" class="input-small"><small>Ad</small></span><span><input type="text" class="input-small"><small>Soyad</small></span><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'time')$('.formBody').append('<li data-fieldnum="'			+ ($('.formItem.time').size() + 1) +'" data-type="time" class="formItem time"><label>Zaman</label><span><input type="text" class="input-smaller"><small>Sa.</small></span><span><input type="text" class="input-smaller"><small>Dk.</small></span><span><input type="text" class="input-smaller"><small>Sn.</small></span><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'date')$('.formBody').append('<li data-fieldnum="'			+ ($('.formItem.date').size() + 1) +'" data-type="date" class="formItem date"><label>Tarih</label><span><input type="text" class="input-smaller"><small>Gün</small></span><span><input type="text" class="input-smaller"><small>Ay</small></span><span><input type="text" class="input-smaller year"><small>Yıl</small></span><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'website')$('.formBody').append('<li data-fieldnum="'		+ ($('.formItem.website').size() + 1) +'" data-type="website" class="formItem website"><label >Web Sitesi</label><span><input type="text" name="website" value="http://"><small>http://www.websitesi.com</small></span><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'email')$('.formBody').append('<li data-fieldnum="'			+ ($('.formItem.email').size() + 1) +'" data-type="email" class="formItem email"><label >Email Adresi</label><span><input type="text" name="email"><small>mail@websitesi.com</small></span><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'address')$('.formBody').append('<li data-fieldnum="'		+ ($('.formItem.address').size() + 1) +'" data-type="address" class="formItem address"><label>İletişim Adresi</label><span><input type="text" class="input-xlarge"><small>Mahalle / Sokak / Apt. / No.</small></span><span><input type="text" class="input-xlarge"><small>İlçe / İl</small></span><span><input type="text" class="input-xlarge"><small>Ülke</small></span><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'upload')$('.formBody').append('<li data-fieldnum="'			+ ($('.formItem.fileupload').size() + 1) +'" data-type="upload" class="formItem fileupload"><label >Dosya Upload</label><span><input type="file" name="userfile"><small>Dosya Seçin</small></span><div class="delete icon-remove-sign"></div></li>');
	if(arg == 'noField')$('#fieldProps').html('<div data-fieldnum="'		+ ($('.formItem.bir').size() + 1) +'" class="alert alert-error">Select an area from the right side.</div>');
	if(arg == 'noSelectedField')$('#fieldProps').html('<div data-fieldnum="'+ ($('.formItem.elemanı').size() + 1) +'" class="alert alert-error">Insert a field first.</div>');
}



$('table.items .btn').click(function(){
	var type = $(this).data('type');
	$('.formBody').append(contents(type));
	$('.formBody .formItem').removeClass('active');
});


$('.fieldProps').live('click',function(){
	if($('.formItem').size() < 1){
		$('#fieldProps').html(contents('noSelectedField'));
	}else if($('.formBody .formItem.active').size() < 1){
		$('#fieldProps').html(contents('noField'));
	}
});


$('.formBody .formItem').live('click',function(e){
	var type = $(this).data('type');
	
	// active class
	if($(this).hasClass('active')){
		$('#formTabs a.prop').tab('show');
		$('.formBody .formItem').removeClass('active');
	}else{
		$('.formBody .formItem').removeClass('active');
		$(this).addClass('active');		
	}

	if(e.target.classList[0] != 'delete'){
		// show properties tab
		$('#formTabs a.fieldProps').tab('show');
//elementContents($(this).data('type'),$(this).data('fieldnum'));
		var optionSize = $(this).find('select option').size();
		if($(this).data('type') == 'selectBox'){
			// selectbox
			$('#fieldProps').html('\
				<div class="elemProps" data-fieldnum="'+ $(this).data('fieldnum') +'" data-type="'+$(this).data('type')+'">' +
					'<label>Text</label>' +
					'<input type="text" class="labelInput" value="'+$(this).find('label').html()+'"/>' +
					'<label>Options</label>' +
					'<div class="options"></div>'+
					'<div class="btn addNewSelectOption"><i class="icon-plus"></i>Add new Option</div>'+
				'</div>');
			for(var i = 0; i < optionSize; i++){
				var html = $(this).find('select option:eq('+i+')').html();
				$('.elemProps .options').append('<div class="input-append"><input data-id="'+ i +'" value="'+html+'" id="appendedInputButton" type="text"><button class="btn" type="button"><i class="icon-remove"></i></button></div>');
			}
		}else if($(this).data('type') == 'radioButton'){
			$('#fieldProps').html('\
				<div class="elemProps" data-fieldnum="'+ $(this).data('fieldnum') +'" data-type="'+$(this).data('type')+'">' +
					'<label>Text</label>' +
					'<input type="text" class="labelInput" value="'+$(this).find('label').html()+'"/>' +
					'<label>Options</label>' +
					'<div class="options"></div>'+
					'<div class="btn addNewSelectOption"><i class="icon-plus"></i>Add new Option</div>'+
				'</div>');
			var size = $(this).find('input[type="radio"]').size();
			for(var i = 0;i<size;i++){
				var html = $(this).find('span:eq('+i+')').html();
				$('.elemProps .options').append('<div class="input-append"><input data-id="'+ i +'" value="'+html+'" id="appendedInputButton" type="text"><button class="btn" type="button"><i class="icon-remove"></i></button></div>');
			}
		}else if($(this).data('type') == 'checkBox'){
			$('#fieldProps').html('\
				<div class="elemProps" data-fieldnum="'+ $(this).data('fieldnum') +'" data-type="'+$(this).data('type')+'">' +
					'<label>Text</label>' +
					'<input type="text" class="labelInput" value="'+$(this).find('label').html()+'"/>' +
					'<label>Options</label>' +
					'<div class="options"></div>'+
					'<div class="btn addNewSelectOption"><i class="icon-plus"></i>Add new option</div>'+
				'</div>');
			var size = $(this).find('input[type="checkbox"]').size();
			for(var i = 0;i<size;i++){
				var html = $(this).find('span:eq('+i+')').html();
				$('.elemProps .options').append('<div class="input-append"><input data-id="'+ i +'" value="'+html+'" id="appendedInputButton" type="text"><button class="btn" type="button"><i class="icon-remove"></i></button></div>');
			}
		}else if($(this).data('type') == 'blank'){
			$('#fieldProps').html('\
				<div class="elemProps" data-fieldnum="'+ $(this).data('fieldnum') +'" data-type="'+$(this).data('type')+'">' +
					'<label>Serbest Yazı Alanı</label>' +
					'<textarea type="text" class="blank">'+$(this).find('.lipsum').html()+'</textarea>'+
				'</div>');
		}else{
			$('#fieldProps').html('\
				<div class="elemProps" data-fieldnum="'+ $(this).data('fieldnum') +'" data-type="'+$(this).data('type')+'">' +
					'<label>Text</label>' +
					'<input type="text" class="labelInput" value="'+$(this).find('label').html()+'"/>' +
				'</div>');
		}
	}
});

$('#appendedInputButton').live('keyup',function(){
	var num = $(this).parent().parent().parent().data('fieldnum');
	var type = $(this).parent().parent().parent().data('type');
	var id = $(this).data('id');
	if($(this).parents('.elemProps').data('type') == 'selectBox'){
		$('.formBody .formItem[data-fieldnum="'+num+'"] select option:eq('+id+')').html($(this).val());
	}else if($(this).parents('.elemProps').data('type') == 'radioButton'){
		$('.formBody .formItem[data-fieldnum="'+num+'"] span:eq('+id+')').html($(this).val());
	}else if($(this).parents('.elemProps').data('type') == 'checkBox'){
		$('.formBody .formItem[data-fieldnum="'+num+'"] span:eq('+id+')').html($(this).val());
	}
});

$('.formBody .delete').live('click',function(){
	$(this).parent().fadeOut(200,function(){
		$(this).remove();
		$('#formTabs a.fields').tab('show');
	});
});

$('.addNewSelectOption').live('click',function(){
	var num = $(this).parent().data('fieldnum');
	var type = $(this).parent().data('type');
	var id = $('.addNewSelectOption').parent().find('.options input:last').data('id');
	if(type == 'selectBox'){
		$('.elemProps .options').append('<div class="input-append"><input data-id="'+(id + 1)+'" value="" id="appendedInputButton" type="text"><button class="btn" type="button"><i class="icon-remove"></i></button></div>');
		$('.formBody .formItem[data-fieldnum="'+num+'"] select').append('<option>Add new Option</option>');
	}else if(type == 'radioButton'){
		$('.elemProps .options').append('<div class="input-append"><input data-id="'+(id + 1)+'" value="" id="appendedInputButton" type="text"><button class="btn" type="button"><i class="icon-remove"></i></button></div>');
		$('.formBody .formItem[data-fieldnum="'+num+'"][data-type="'+type+'"] ul').append('<li><input type="radio" name="radios"><span>Add new Option</span></li>');
	}else if(type == 'checkBox'){
		$('.elemProps .options').append('<div class="input-append"><input data-id="'+(id + 1)+'" value="" id="appendedInputButton" type="text"><button class="btn" type="button"><i class="icon-remove"></i></button></div>');
		$('.formBody .formItem[data-fieldnum="'+num+'"][data-type="'+type+'"] ul').append('<li><input type="checkbox" name="checks"><span>Add new Option</span></li>');
	}
});

$('textarea.blank').live('keyup',function(e){
	var num = $(this).parent().data('fieldnum');
	$('.freeText[data-fieldnum="'+num+'"]').html($(this).val());
});



$('input.labelInput').live('keyup',function(e){
	var num = $(this).parent().data('fieldnum');
	var type = $(this).parent().data('type');
	$('.formItem[data-fieldnum="'+num+'"][data-type="'+type+'"] label').html($(this).val());
});

$('.elemProps[data-formtype="normal"] input').live('keyup',function(e){
	var type = $(this).parent().data('type');
	var num = $(this).parent().data('fieldnum');
	$('.formItem[data-type="'+type+'"][data-fieldnum="'+num+'"] label').html($(this).val());
});

$('input[name="formName"]').keyup(function(e){
	var val = $(this).val();
	$('.formHeader .title').html(val);
});

$('input[name="formDesc"]').keyup(function(e){
	var val = $(this).val();
	$('.formHeader .desc').html(val);
});

$('.formBody input, .formBody select, .formBody textarea').live('click',function(e){
	e.preventDefault();
});

$('.input-append button.btn').live('click',function(){
	var id = $(this).parent().find('#appendedInputButton').data('id');
	var num = $(this).parents('.elemProps').data('fieldnum');
	var type = $(this).parents('.elemProps').data('type');
	
	if($(this).parents('.options').find('button.btn').size() > 1){
		if(type == 'radioButton' || type == 'checkBox'){
			$('.formItem[data-type="'+type+'"][data-fieldnum="'+num+'"] li:eq('+id+')').remove();
			$(this).parent().remove();
		}else if(type == 'selectBox'){
			$('.formItem[data-type="'+type+'"][data-fieldnum="'+num+'"] select option:eq('+id+')').remove();
			$(this).parent().remove();
		}
	}else{
		$('.formItem[data-type="'+type+'"][data-fieldnum="'+num+'"]').remove();
		$('.elemProps').remove();
		$('#formTabs a.fields').tab('show');
	}
});

$('.formBody input[type="text"], .formBody textarea').live('focus',function(){
	$(this).blur();
});