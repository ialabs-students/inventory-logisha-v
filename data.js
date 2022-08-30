const express = require("express");

console.log("Hii..! , I'm  Logisha");

const server = express();  // convert body to json(express.json) and keep it in a  body key in request  

server.use(express.json())    // midllevar method

var users = [];

var users1=[
   {id:'1',name: 'logisha' , dept: 'EEE', rank: 1, course: 'completed' },
   {id:'2',name: 'Akshaya' , dept: 'ECE', rank: 3, course: 'completed' },
   {id:'3',name: 'Dharani' , dept: 'EEE', rank: 11, course: 'completed' },
   {id:'4',name: 'Ishu' , dept: 'IT', rank: 15, course: 'completed' },
   {id:'5',name: 'Janani' , dept: 'EEE', rank: 6, course: 'completed' }
]

var emailValidator = (req, res, next) =>  {
     var userdata = req.body;
     if(userdata.email == undefined){
        res.status(400);
        res.send("Invalid request body , Email is mandatory");
     }
     next();
};


server.get("/hello",(req,res)=> {
   res.send("Hello welcomee!!");
});

//PATH PARAM 
server.get("/hello/:name", (req, res) => {
   res.send("Hi there, glad to meet you " + req.params.name);
});

//QUERY PARAM
server.get("/hi", (req, res) => {
   res.send("Hello there, glad to meet you " + req.query.name);
});
server.post("/register/users", (req, res) => {
   // console.log(req.body);
   users.push(req.body);
   res.send("user register succesfully")
});
server.put("/update/user", (req, res) => {
   // console.log(req.body);
   users.push(req.body);
   res.send("user register succesfully")
});
server.get("/fetch/user", (req, res) => {

   res.send(users)
});
//delete method
server.delete('/:id', function (req, res) {
   var found = users1.find(function (item) {
       return item.id === parseInt(req.params.id);
   });
   if (found) {
       let targetIndex = data.indexOf(found);
       users1.splice(targetIndex, 1);
   }
   res.sendStatus(204);
});

server.get("/fetch/user/:id", (req, res) => {
   var id = req.params.id;
   users.forEach(u => {
       if (u.id == id) {
           res.send(u);
       }
})
res.send({});
});
server.put('/:id', function (req, res) {
   var found = user1.find(function (item) {
       return item.id === parseInt(req.params.id);
   });
   if (found) {
       var updated = {
           id: found.id,
           name: req.body.name,
           dept:req.body.dept,
           rank: req.body.rank,
           completed: req.body.completed
       };
       var targetIndex = users1.indexOf(found);
       user1.splice(targetIndex, 1, updated);

       res.sendStatus(204);

   } else {

       res.sendStatus(404);

   }

});

server.listen(4000, () => {
   console.log("server running on port :4000");
});

