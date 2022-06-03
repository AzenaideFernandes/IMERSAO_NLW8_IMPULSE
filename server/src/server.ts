import express from 'express'
import { prisma } from './prisma'; 
const app = express();

app.use(express.json());

/* app.get('/users', (req, res) =>  {
  return res.send('Helo Word');
}) */

/* app.post('/feedbacks', (req, res) =>  {
  //console.log(req.body);
  const{type, comment, screenshot} = req.body;
  const feedback =  prisma.feedback.create({
    data: {
      type: req.body.type,
      comment: req.body.comment,
      screenshot: req.body.screenshot,
    }
  }) 
  return res.status(201).json({ data: feedback });
}); */

app.post('/feedbacks', async (req, res) =>  {
  //console.log(req.body);
  const { type, comment, screenshot } = req.body;
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  }) 

  return res.status(201).json({data: feedback });
});

  /* app.post('/feedbacks', async(req, res) =>  {
    const{type, comment, screenshot} = req.body;
    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
  return res.status(201).json({ data: feedback});
}); */

app.listen(3333, () => {
  console.log('HTTP sever running!');

});

// Prisma
//SQLite
// GET = Buscar Informações
// POST = Cadastrar Informações
// PUT =  Atualizar Informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE =  Deletar uma Informação
