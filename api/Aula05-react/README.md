# Implementando um CRUD de contatos com REST API
### Nesta aula, será implementado um CRUD de contatos de usuários. Para isso, será conectado o frontend à API do MOCKAPI, cujo gateway encontra-se logo abaixo. Siga as orientações do exercício e implemente as features solicitadas.
### O que será feito na aula
#### Bibliotecas utilizadas - Tailwind css, Axios e Vite
Nesta aula, aprenderemos a implementar um CRUD de contatos de usuários usando uma API REST. Para isso, usaremos a API do MOCKAPI, que fornece um gateway para testar APIs REST.<br/><hr/>
Gateway: https://65a73b6794c2c5762da65259.mockapi.io/contacts.
<hr/>

### Os tópicos abordados na aula serão:

- Como conectar o frontend a uma API REST
- Como realizar operações CRUD (Create, Read, Update e Delete) em uma API REST
Instruções do exercício

### Após a aula, você deverá implementar um CRUD de contatos de usuários usando a API do MOCKAPI. O exercício deverá conter as seguintes funcionalidades:

- Criação de contatos
- Listagem de contatos
- Atualização de contatos
- Exclusão de contatos

## Exercício
1 - Em App.jsx refatore o código de modo que o campo de criar contato se torne um componente.<br/>
2 - Em App.jsx refatore o código de modo que o campo de listar contatos se torne um componente. <br/>
3 - Crie um estado para receber as informações preenchidas pelo usuário no cadastro de novo contato. <br/>
4 - Ao clicar em adicionar contato deverá ser feita uma requisição ao gateway fornecido através do arquivo index.js presente na pasta API para salvar o novo contato no mockAPI.<br/>
Obs: Já existe um const api que tem um objeto com as assinaturas da função de get, post , put e delete.Adapte-as para obter comportamento conforme os exemplos dados no arquivo ExemploApi.js
<br/>
5 - Garanta que ao carregar a página seja feita uma requisição ao gateway fornecido do mockapi para obter todos os contatos da lista telefônica. <br/>
Dica: Utilize o useEffect para isso.
<br/>
6 - Crie um estado para receber o array com contatos obtidos da requisição GET e utilize esse estado para renderizar os contatos do componente da lista de contatos.
<br/>
Obs: Se a lista de contatos estiver vazia a mensagem "Esperando novos contatos" deverá ser exibida.
<br/>
7 - Ao clicar no botão editar do contato da lista deverá ser acionado o Dialog que terá nos campos de input as informações do usuário selecionado.<br/>
Obs: o estado showModal é utilizado para gerar a condição para renderização do mesmo. Utilize-o para implementar essa feature do botão de editar.<br/>
8 - Ao preencher todos os campos de edição e clicar em editar contato, uma requisição do tipo PUT deveria ser feita ao gateway do mockapi e o contato deverá ser atualizado.<br/>
Obs: Ao finalizar a requisição com sucesso, feche o modal do Dialog. Em caso de falha, alerte o usuário.
<br/>
9 - No botão de deletar, confirme com o usuário se o mesmo deseja realmente deletar o contato. Caso afirmativo, faça a requisição de DELETE ao mockapi e efetue a operação.<br/>

### Desafio
<hr/>
1 - Implemente um botão de ordenação crescente e decrescente  [  ordem alfabética ]  de contatos. <br/>
2 - Adicione um campo de busca que filtre os contatos de acordo com o que o usuário digitou no campo de busca.



