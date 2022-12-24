let express = require ('express');
let path = require('path');

let app = express();

app.listen (3000, function(){
   console.log('Se levantó el servidor ');
});


let publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));


let homePath = path.resolve(__dirname,'./views/home.html');

app.get('/',function(req,res){
   res.sendFile(homePath);
});












