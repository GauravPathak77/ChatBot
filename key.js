const Configuration = require("openai").Configuration;
const OpenAIApi = require("openai").OpenAIApi;

const gpt = async (prompt, API) => {
  const config = new Configuration({
    apiKey: API,
  });

  const openai = new OpenAIApi(config);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2048,
    temperature: 1,
  });

  console.log(response.data.choices[0].text);
  return response.data.choices[0].text;
};

module.exports = gpt;
