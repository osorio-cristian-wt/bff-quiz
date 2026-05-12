const RESPONSE_CODE_ERRORS = {
  1: {
    statusCode: 404,
    message: 'No hay suficientes preguntas para los parametros indicados.',
  },
  2: {
    statusCode: 400,
    message: 'La API de trivia reporto parametros invalidos en la consulta.',
  },
  3: {
    statusCode: 502,
    message: 'La API de trivia reporto que el token de sesion no existe.',
  },
  4: {
    statusCode: 409,
    message: 'La API de trivia reporto que el token se quedo sin preguntas disponibles y requiere reinicio.',
  },
  5: {
    statusCode: 429,
    message: 'La API de trivia reporto limite de solicitudes. Intenta nuevamente en unos segundos.',
  },
};

const buildTriviaApiError = (responseCode) => {
  const mapped = RESPONSE_CODE_ERRORS[responseCode] || {
    statusCode: 502,
    message: `La API de trivia devolvio un codigo de respuesta desconocido: ${responseCode}.`,
  };

  const error = new Error(mapped.message);
  error.statusCode = mapped.statusCode;
  error.triviaResponseCode = responseCode;
  return error;
};

const throwIfTriviaResponseCodeError = (responseCode) => {
  if (responseCode !== 0) {
    throw buildTriviaApiError(responseCode);
  }
};

const buildTriviaApiDataError = (message) => {
  const error = new Error(message);
  error.statusCode = 502;
  return error;
};

module.exports = {
  buildTriviaApiDataError,
  buildTriviaApiError,
  throwIfTriviaResponseCodeError,
};