var request = require('request');

request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
	if(!error && response.statusCode == 200 ){
	var parsedData = JSON.parse(body);
	console.log(parsedData.name + " lives in " + parsedData.address.city + " and his phone number is " + parsedData.phone + " and his company name is " + parsedData.company.name);
	}
	
});