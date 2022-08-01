 const express = require('express');
 const cors = require('cors');
 const accountSid = "AC2763b7e23f404c498d0d0c51e9c8df12";
 const authToken = "39e34bb8e93287a875ad608e3b64e691";
 const client = require('twilio')(accountSid, authToken);

 const app=express();
 
 app.use(cors());
const port=process.env.PORT || 8000;
      
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.post('/twillo',async (req,res)=>{
 console.log('---body--',req.body);
  client.messages.create({body: req.body.message, from: '+18155545648', to: req.body.phone})
  .then(message => res.json(message.sid))
  .catch(err=> res.json(err));

})


 app.listen(port,()=>{
     console.log(`Server is running on port: ${port}`);
 })