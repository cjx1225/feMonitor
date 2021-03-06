var http = require('http')
    , path = require('path')
    , app = require('./lib/http')
    , route = require('./routes')

app.set('views', __dirname + '/views');
app.set('engine', 'n-tpl');
app.static('public');

//路由
app.get('/', route.index);
//test
app.get('/test', route.test);
//启动
http.createServer(app).listen(80, '127.0.0.1');
console.log('port:80. You can 127.0.0.1')