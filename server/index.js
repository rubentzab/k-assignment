const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const port = 3000;

const hbs = exphbs.create({
	extname: '.hbs',
	partialsDir: path.resolve('src/templates/partials'),
	layoutsDir: './',
	defaultLayout: 'index'
});

app.set('view engine', '.hbs');
app.engine('.hbs', hbs.engine);
app.set('views', path.resolve('src/templates'));
app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.render('main');
});

app.listen(port, () => {
	console.log(`server listening on port: ${port}`);
});