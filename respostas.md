1. Qual é a diferença entre os status codes 200, 201, 400, 404 e 500? Em qual situação cada um deve ser retornado?
200 OK: Indica que a requisição foi realizada com sucesso, como em buscas, atualizações e exclusões.
201 Created: Indica que um novo recurso foi criado com sucesso, como no POST.
400 Bad Request: Indica que existe algum problema nos dados enviados pelo cliente, como quando falta um campo obrigatório.
404 Not Found: Indica que o recurso solicitado não foi encontrado, como ao buscar uma música com um ID inexistente.
500 Internal Server Error: Indica que ocorreu um erro inesperado no servidor.
2. Por que é importante definir o cabeçalho Content-Type: application/json?

O Content-Type: application/json informa que os dados enviados na requisição estão no formato JSON. Isso permite que o servidor interprete corretamente os dados recebidos. No nosso projeto, ele é utilizado principalmente nas requisições POST e PUT.

3. O que é o padrão DAO (Data Access Object) e qual a vantagem dele?

É um padrão que isola a lógica de manipulação de dados das rotas do Express. A vantagem é a separação de responsabilidades: as rotas cuidam de receber e responder requisições HTTP, enquanto o DAO cuida de salvar, buscar, atualizar e remover os dados.

4. Por que exportamos uma instância do MusicaDAO e qual padrão isso caracteriza?

Exportamos uma instância para que toda a aplicação compartilhe a mesma lista de músicas na memória. Isso caracteriza o padrão Singleton.

5. Qual a diferença entre POST, PUT e PATCH?
POST: Usado para criar um novo recurso.
PUT: Usado para atualizar ou substituir um recurso existente identificado por um ID.
PATCH: Usado para fazer uma atualização parcial de um recurso, alterando apenas alguns de seus dados.