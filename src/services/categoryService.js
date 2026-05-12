const apiClient = require('./apiClient');
const { buildTriviaApiDataError } = require('./opentdbErrorHandler');

const getAllCategories = async () => {
  const response = await apiClient.get('/api_category.php');
  const categories = response?.data?.trivia_categories;

  if (!Array.isArray(categories)) {
    throw buildTriviaApiDataError('La API de trivia devolvio una respuesta invalida: "trivia_categories" no es un array.');
  }

  return categories;
};

module.exports = { getAllCategories };