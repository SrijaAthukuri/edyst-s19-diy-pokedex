var express = require('express');
var app = express(); 
app.get('/api/pokemon/:id', function(req, res){
if(req.params.id>0 && req.params.id<152)
{
	var mymod=require('./data.js');
	var pokemon= mymod.pokedetails(req.params.id);
	var result=
	{
	 "pokemon" : {
	   id :  parseInt(req.params.id) ,
	   name :    pokemon[0],
	   sprite :  pokemon[1]
	 }
	}
	res.send(result);
}
else
{
	res.status(404).send('Sorry!!NO POKEMON IS FOUND!!!');
}

});
app.get('*', function(req, res){
   res.status(404).send('Sorry!!The requested URL is not found!!!');   
})
app.listen(8006);
