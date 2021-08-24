const express = require ('express');
const app = express();
const path = require('path');
const stories = require('./utils/stories')



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req,res)=>{
  res.render('index')
})

app.get('/clasicos', (req, res)=>{
    // stories.getAllStories((error, data)=>{
    //     if(error){
    //         return res.send({
    //             error
    //         })
    //     } 
                
    //     const JSONBody = JSON.parse(data);
        
        return res.render('pages/clasicos', {
            title:'La Flor Azul | Clásicos',
            stories
        });


    })
  



  app.get('/contemporaneos', (req,res)=>{
    res.render('pages/contemporaneos', {
        title:'La Flor Azul | Contemporáneos'
    })
  })
  
  app.get('/ruleta', (req,res)=>{
    res.render('pages/ruleta', {
        title:'La Flor Azul | Ruleta'
    })
  })
  
  app.get('/epistolas', (req,res)=>{
    res.render('pages/epistolas', {
        title:'La Flor Azul | Epístolas'
    })
  })
  
  app.get('/quienes_somos', (req,res)=>{
    res.render('pages/quienes_somos', {
        title:'La Flor Azul | Quienes somos'
    })
  })
  
  app.get('/notas', (req,res)=>{
    res.render('pages/notas', {
        title:'La Flor Azul | Notas'
    })
  })

app.listen(3000, ()=>{
    console.log('Funcionando en el puerto 3000')
})