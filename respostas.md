# Respostas das Questões Teóricas - Atividade Karaokê

### 1. Qual é a diferença entre os status codes 200, 201, 400, 404 e 500? Em qual situação cada um deve ser retornado?
- **200 OK:** Indica requisição bem-sucedida (buscas, atualizações e exclusões).
- **201 Created:** Indica que um novo recurso foi criado com sucesso (usado no POST).
- **400 Bad Request:** Indica erro na requisição do cliente (ex: faltou enviar um campo obrigatório).
- **404 Not Found:** Indica que o recurso buscado não existe (ex: ID inexistente).
- **500 Internal Server Error:** Indica um erro inesperado no servidor.

### 2. Por que é importante definir o cabeçalho Content-Type: application/json?
Informa ao cliente que a resposta está formatada em JSON, permitindo que navegadores e aplicações interpretem e leiam os dados corretamente.

### 3. O que é o padrão DAO (Data Access Object) e qual a vantagem dele?
É um padrão que isola a lógica de manipulação de dados das rotas do Express. A vantagem é a separação de responsabilidades: as rotas cuidam de receber e responder requisições HTTP, enquanto o DAO cuida de salvar e buscar os dados.

### 4. Por que exportamos uma instância do MusicaDAO e qual padrão isso caracteriza?
Exportamos uma instância para que toda a aplicação compartilhe a mesma lista de músicas na memória. Isso caracteriza o padrão **Singleton**.

### 5. Qual a diferença entre POST e PUT?
- **POST:** Usado para criar um novo recurso.
- **PUT:** Usado para atualizar ou substituir um recurso existente identificado por um ID.