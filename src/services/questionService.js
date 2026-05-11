const apiClient = require('./apiClient');

const getQuestions = async ({ amount, category }) => {
  const params = { amount };
  if (category !== undefined) params.category = category;

  const response = await apiClient.get('/api.php', { params });
  const { response_code, results } = response.data;

  if (response_code === 1) {
    const error = new Error('No hay suficientes preguntas para los parámetros indicados');
    error.statusCode = 404;
    throw error;
  }

  if (response_code === 2) {
    const error = new Error('Parámetros inválidos en la consulta a la API de trivia');
    error.statusCode = 400;
    throw error;
  }

  return results;
};

module.exports = { getQuestions };
