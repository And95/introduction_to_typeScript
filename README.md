Introdução ao TypeScript

Descrição: Criação de API utilizando os médodos GET e POST

Este endpoint retorna uma mensagem de saudação com base nos parâmetros de consulta fornecidos.
Método: GET
URL: https://intro-typescript-api.vercel.app

Parâmetros de Consulta:
- name (string, opcional): O nome do usuário a ser saudado;
- age (inteiro, opcional): A idade do usuário. Pode ser usada pela API para personalizar a mensagem de boas-vindas.

Comportamento:
- Se name e/ou age forem fornecidos, a API responde com um objeto JSON contendo uma mensagem de boas-vindas em português que pode incluir os valores fornecidos;
- Se os parâmetros estiverem ausentes ou inválidos, a API utiliza uma saudação genérica (por exemplo, dando as boas-vindas a um "Visitante").

Exemplo de Requisição GET: https://intro-typescript-api.vercel.app?name=André&age=30

----------------------------------------------------------------------------------------------

Este endpoint cria um novo usuário e retorna o recurso criado com campos derivados adicionais.
Método: POST
URL: https://intro-typescript-api.vercel.app
Content-Type: application/json

Body da Requisição:
- Envie um objeto JSON com os seguintes campos:
{
"name": "André",
"age": 30,
"email": "andre_teste@gmail.com"
}

