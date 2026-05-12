const apiClient = require('./apiClient');
const {
  buildTriviaApiDataError,
  throwIfTriviaResponseCodeError,
} = require('./opentdbErrorHandler');

const getQuestions = async ({ amount, category }) => {
  const params = { amount };
  if (category !== undefined) params.category = category;

  const response = await apiClient.get('/api.php', { params });
  const { response_code, results } = response.data;

  throwIfTriviaResponseCodeError(response_code);

  if (!Array.isArray(results)) {
    throw buildTriviaApiDataError('La API de trivia devolvio una respuesta invalida: "results" no es un array.');
  }

  return results;
};

module.exports = { getQuestions };
