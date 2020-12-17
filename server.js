const path = require('path');
const express = require('express');

const app = express();
const multer = require('multer');

app.use(express.static('public'))

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/');
    },
    filename: function(req, file, cb) {
        cb(null, 'formulario-padrao.json')
    }
});

const upload = multer({ storage });

app.get('/index.html', (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/getFormulario', (req,res)=>{
    const resposta = {
        jogo:req.query.jogo,
        plataforma: req.query.plataforma,
		preco:req.query.preco
    }
    res.end(JSON.stringify(resposta))
})

app.post('/ImportarArquivo', upload.single('file'),
function(req,res){
res.send('Envio feito com sucesso')
});


app.listen('3000', () => console.log('Running on 3000'));