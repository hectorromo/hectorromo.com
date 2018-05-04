var choo = require('choo');
var app = choo();
var mainView = require('./views/main');

// app.state

app.route('/', mainView);
app.state = {
    projects: []
}

const container = document.getElementById('app')
const tree = app.start()
container.innerHTML = ''
container.appendChild(tree)