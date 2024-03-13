import app from './app';

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(' ');
  console.log('Escuntando na porta ', port);
  console.log(`http://localhost:${port}`);
});
