var express = require('express');
var cors = require('cors');
require('dotenv').config()
//npm i multer
const multer = require('multer')
const upload = multer()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//in the front end, the form goes to /api/fileanalyse is a post, and name is upfile. need to add middleware to multer to add the file to the req.file
app.post('/api/fileanalyse', upload.single('upfile'),(req,res)=>{
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
