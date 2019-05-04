var express = require('express');
var app = express(); 
app.get('/api/pokemon/:id', function(req, res){
if(req.params.id>0 && req.params.id<152)
{
	var mymod=require('./data.js');
	var pokemon= mymod.pokedetails(req.params.id);
	var result=
	{
	   id :  parseInt(req.params.id) ,
	   Name :    pokemon[0],
	   Sprite :  pokemon[1]
	}
}
else
{
	res.status(404).send('Sorry!!NO POKEMON IS FOUND!!!');
}
res.send(result);
});
app.get('*', function(req, res){
   res.status(404).send('Sorry!!The requested URL is not found!!!');   
})
app.listen(8006);
