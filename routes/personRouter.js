const express = require('express');
const router = express.Router();
const Person = require('../models/Person.schema');

router.post('/person', async (req,res)=>{
  try{

    const data = req.body;
    const response = await Person.insertMany(data);
    console.log("Data Saved");
    res.status(200).json(response);

  }catch(error){
    console.log(error);
    res.json(400).json({Error:"Interal Server " , Error});
    
  }
});

router.get("/persondata", async(req,res)=>{
  try{
      const showAllData = await  Person.find()
      res.status(200).json(showAllData)

  }catch(error){
    console.error('Error fetching persons:', error);
res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/person/:role', async (req,res)=>{
  try{
      const personRole = req.params.role;
      const response = await Person.find({role:personRole});
      res.status(200).json(response);

  }catch(error){
console.error('Error fetching persons:', error);
res.status(500).json({ error: 'Internal server error'});

  }
});


router.put('/person/update/:id', async (req,res)=>{
try{
  const {id} = req.params;
  if(!id){
    res.status(400).json({error:"Not Found Id..."})
  };

   const viewdata = req.body;
   const response = await Person.findByIdAndUpdate(id,viewdata,{
     new: true, // return updated document
      runValidators: true, // schema rules check karega
   })
       res.status(200).json(response);
}catch(error){
     console.error('Error fetching persons:', error);
res.status(500).json({ error: 'Internal server error'});

}});


router.delete('/person/delete/:id',async (req,res)=>{
  try{

    const {id} = req.params;
    if(!id){
      res.status(400).json({error:"NOT Valid Id "})
    }
    const response = await Person.findByIdAndDelete(id);

    if(!response){
      res.status(400).json({error:"Id is Not Found In DATABASE..."})
    }
    res.status(200).json({massage:"Data Deleted Sucessfully..."});


  }catch(error){
    console.error('Error fetching persons:', error);
res.status(500).json({ error: 'Internal server error'});

  }
})

module.exports = router;