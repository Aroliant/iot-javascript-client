var config = {
	developer_key 	: '',
	application_key : '',
	interval		: 5000,
	location		: '',
	attributes  	: '',
	app_type		: ''
};

var attr  		= 	{};
var ultra_val 	=	0;

var sambaa = {
	getValue : function(a){
		if(config.app_type=='controller'){
			if(attr.hasOwnProperty(a)){
				return attr[a];
			}else{
				return 0;
			}	
		}else{
			return ultra_val;
		}
			
	},
	updateElement : function(location,a){
		config.location = location;
		config.attributes = a;
	}
};

try{
	console.log($);
}
catch(e){
	alert('Unable to load jQuery');
}

setInterval(function () {

//Sending AJAX Request
$.ajax({	
method: "GET",
url: "http://www.aroliant.com/app/sambaa/requestHandler.php",
data: { 
	developer_key: config.developer_key,
	application_key: config.application_key
	}
})
.done(function( APP ) {
	try{
		APP = JSON.parse(APP);
		attr = APP;
		document.querySelector(config.location).innerHTML = attr[config.attributes];
	}catch(e){
		document.querySelector(config.location).innerHTML =APP;
		ultra_val =APP;
	}
	
})
.fail(function() {
	console.log('Unable to connect Internet');
});

},config.interval);