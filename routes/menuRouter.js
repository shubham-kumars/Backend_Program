const express = require('express');
const router = express.Router();
const Menu = require('../models/menu.schema');
const { route } = require('./personRouter');
const Person = require('../models/Person.schema');


router.post('/menu', async (req,res)=>{
  try{
       const data = req.body;
       const response = await Menu.insertMany(data);
       console.log("Saved Data...");
       res.status(200).json(response);
  }catch(error){
        console.error('Error fetching persons:', error);
res.status(500).json({ error: 'Internal server error'});
  }
});

router.get('/showAllMenu', async (req,res)=>{
  try{
      const showAllMenu = await Menu.find();
      console.log("Show All Menu....")
      res.status(200).json(showAllMenu); 

  }catch(error){
    console.error('Error fetching persons:', error);
res.status(500).json({ error: 'Internal server error'});

  }
});

router.get('/menu/:taste', async (req,res)=>{
  try{
        const choiceTest = req.params.taste;
        const response = await Menu.find({taste:choiceTest});
        res.status(200).json(response);
  }catch(error){
      console.error('Error fetching persons:', error);
res.status(500).json({ error: 'Internal server error'});

  }
});


router.put('/menu/update/:id', async (req,res)=>{
try{

  const {id} = req.params;
  if(!id){
    res.status(400).json({massage:"NOT FOUND Id"});
  };

  const updateId = req.body;
  const response = await Menu.findByIdAndUpdate(id,updateId,{
    new:true,
    runValidators:true
  });

  if(!response){
    res.status(400).json({massage:"Id is NOT Found by Database...."})
  };

  res.status(200).json(response).json({massage:"Update Sucessfully...."});

}catch(error){
 console.error('Error fetching persons:', error);
res.status(500).json({ error: 'Internal server error'});

}
});

router.delete("/menu/delete/:id", async (req,res)=>{
  try{

    const {id} = req.params;
    if(!id){
      console.log("User id is not found....");
    };

    const response = await Menu.findByIdAndDelete(id);
    if(!response){
      console.log("Id is not valid in database....");
    };
    res.status(200).json({massage:"Data Deleted Sucessfully...."})


  }catch(error){
 console.error('Error fetching persons:', error);
res.status(500).json({ error: 'Internal server error'});

  }
})


module.exports = router;