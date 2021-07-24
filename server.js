const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req, res)=>{
   res.send([
    {
    'id':1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '김재민',
    'birthday' : '931207',
    'gender' : '남',
    'job': '직장인'
    },
    {
      'id':2,
      'image' : 'https://placeimg.com/64/64/2',
      'name' : '차은우',
      'birthday' : '931207',
      'gender' : '남',
      'job': '직장인'
      },
      {
        'id':3,
        'image' : 'https://placeimg.com/64/64/3',
        'name' : '여지은',
        'birthday' : '931111',
        'gender' : '남',
        'job': '학생'
        }
   ]);
});


app.listen(port, ()=>console.log(`Listening on port ${port}`));