var mongoose = require('mongoose');
var Ninja = mongoose.model('Ninja')
module.exports = {
  showall: function(req, res){
    Ninja.find({}, function(err, ninjas){
      if(err) { console.log(err);}
      res.render('index', {ninjas: ninjas})
  });
},

  showone: function(req, res){
    Ninja.find({_id: req.params.id}, function(err, ninja){
      if(err){console.log(err);}
      res.render('ninjas', {ninja: ninja})
  });
},

  createnew: function(req, res){
    var ninja = new Ninja({name: req.body.name, age: req.body.age, weapon: req.body.weapon});
    ninja.save(function(err){
      if(err){
            console.log(err);
      }
      else {
            res.redirect('/');
          }
      });
  },

  editpage: function(req, res){
    Ninja.find({_id: req.params.id}, function(err, ninja){
      if(err){
        console.log(err);
      }
      console.log(ninja);
      res.render('ninjasedit', {ninja: ninja})
    });
  },

  updateinfo: function(req, res){
    Ninja.update({_id: req.params.id}, {name : req.body.name, age: req.body.age, weapon: req.body.weapon}, function(err, ninjas){
      res.redirect("/");
      });
  },

  destroy: function(req, res){
    Ninja.remove({_id: req.params.id}, function(err){
      console.log(req.params.id)
      if (err){console.log(err)};
      res.redirect("/")
    });
  }


}
