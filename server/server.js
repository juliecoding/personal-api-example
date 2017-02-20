const express = require('express');
const bodyParser = require('body-parser');
const user = require('./user');
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
app.use(middleware.addHeaders);

app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation);
app.get('/api/occupations', mainCtrl.getOccupations);
app.get('/api/occupations/latest', mainCtrl.getLastJob);
app.get('/api/hobbies', mainCtrl.getHobbies);
app.get('/secrets/:username/:pin', middleware.verify, mainCtrl.getSecrets);

app.put('/api/changename/:one/:two/:three/:four', mainCtrl.changeName);

app.post('/api/addSomething', mainCtrl.addSomething)



const port = 3535;
app.listen(port, () => {
  console.log('listening on: ', port);
})
