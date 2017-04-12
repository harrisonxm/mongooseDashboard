var ninjas = require('../controllers/ninjas.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
    ninjas.showall(req, res)
  })

  app.get('/ninjas/new', function(req, res) {
    res.render("ninjasnew")
  })

  app.get('/ninjas/:id', function(req, res) {
    ninjas.showone(req, res)
  })


  app.post('/ninjas', function (req, res){
    ninjas.createnew(req, res)
  })

  app.get('/ninjas/edit/:id', function(req, res) {
    ninjas.editpage(req, res)
  })

  app.post('/ninjas/:id', function (req, res){
    ninjas.updateinfo(req, res)
  });

  app.post('/ninjas/destroy/:id', function (req, res){
    ninjas.destroy(req, res)
  });
  
}
