const http =require('http');

const app =require('./App');
const config =require('./configs/default')

const port = process.env.PORT || config.port;

const server = http.createServer(app)

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
});