const app    = require('./src/app');
const config = require('./src/config/env');

app.listen(config.port, () => {
  console.log(`✅ BFF Trivia corriendo en http://localhost:${config.port}`);
  console.log(`📡 API externa: ${config.triviaApi.baseUrl}`);
  console.log('');
  console.log('Endpoints disponibles:');
  console.log(`  GET http://localhost:${config.port}/health`);
  console.log(`  GET http://localhost:${config.port}/api/categories`);
  console.log(`  GET http://localhost:${config.port}/api/questions`);
  console.log('');
  console.log('Ejemplo con parámetros:');
  console.log(`  GET http://localhost:${config.port}/api/questions?amount=10&category=24`);

});
