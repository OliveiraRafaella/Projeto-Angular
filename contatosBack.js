const { debug } = require('console');
const express = require('express');
const { appendFile } = require('fs');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const { response } = require('express');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var contatos = [
  { nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: { nome: "Oi", codigo: 14, categoria: "Celular",serial: '2I>?QX-/_!' } },
  { nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: { nome: "Vivo", codigo: 15, categoria: "Celular",serial: 'NY6EZY;I#2' } },
  { nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: { nome: "Tim", codigo: 41, categoria: "Celular",serial: '1=OG([SV9Q' } }
];

app.use(express.static(__dirname + '/public'));
// app.use(express.bodyParser());

var operadoras = [
  { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
  { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
  { nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
  { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
  { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 }
];

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/contatos', function (req, res) {
  res.json(contatos);
});

app.post('/contatos', function (req, res) {
  //console.log('REQ CONTATOS', req)
  contatos.push(req.body);
  res.json(true);
});

app.post('/del_contatos', function (req, res) {
  console.log(req.body);
  // res.send(req.body);
  
  for (i=0;i<contatos.length;i++){
    if((contatos[i]) === req.body){
      delete (contatos[i]); 
    }
  }
  res.send(req.body);
  
    // var name = req.body;
    // res.send(`Dados: ${name}`);
    // console.log(name); 
  });

app.get('/operadoras', function (req, res) {
  // console.log('Resposta',res.json(operadoras));
  res.json(operadoras)
});

app.listen(process.env.PORT || 8000);


// ERRO : Cannot set headers after they are sent to the client

// //  console.log(req.body.nome);
  // console.log(req.body);
  /* for (i = 0; i < contatos.length; i++) {

    //  if(contatos[i].nome != req.params.nome)
    //   console.log('dentro if',contatos[i].nome)
    if((contatos[i].nome + contatos[i].telefone) != (req.body[i].nome)){
      console.log('IF', contatos[i].nome)
    }

    // console.log(contatos[i].nome + contatos[i].telefone)
  }; */
  
  // res.send(req.body);
/*   
  for (i=0;i<contatos.length;i++){
    if((contatos.nome+contatos.telefone) != req.body){
      console.log('Json', req.body[i]);}
  } */