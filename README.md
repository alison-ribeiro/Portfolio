# Meu Portfólio em React

Este é o meu portfólio pessoal, desenvolvido em React, que apresenta meus projetos do GitHub e atualiza automaticamente as informações do meu perfil, incluindo a foto de perfil.

## Recursos

- Consumo de dados do GitHub: Utiliza a API do GitHub para exibir informações sobre os meus repositórios, incluindo nome, descrição, linguagem e link para o repositório.
- Integração com EmailJS: Permite que os visitantes do meu portfólio entrem em contato comigo por meio de formulários de contato, usando o EmailJS para enviar mensagens por e-mail.
- Estilização com Styled Components: Utiliza o Styled Components para criar estilos e componentes reutilizáveis, mantendo uma aparência elegante e coesa em todo o site.
- Atualização automática de dados do GitHub: As informações sobre os projetos e a foto de perfil são atualizadas automaticamente por meio de requisições à API do GitHub.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para a criação de interfaces de usuário.
- Axios: Biblioteca para fazer requisições HTTP para a API do GitHub.
- Styled Components: Biblioteca para estilização com CSS-in-JS.
- EmailJS: Serviço de envio de e-mails fácil de usar para formulários de contato.
- [Outras dependências e bibliotecas que você tenha usado]

## Configurando Variáveis de Ambiente

Este projeto depende de variáveis de ambiente para funcionar corretamente. Certifique-se de configurar as seguintes variáveis de ambiente antes de executar o projeto:

- `REACT_APP_EMAILJS_SERVICE_ID`: ID do serviço EmailJS.
- `REACT_APP_EMAILJS_TEMPLATE_ID`: ID do modelo EmailJS.
- `REACT_APP_EMAILJS_USER_ID`: ID do usuário EmailJS.

### Como Configurar as Variáveis de Ambiente

1. Clone este repositório para a sua máquina local.

2. Crie um arquivo `.env` na raiz do projeto.

3. Abra o arquivo `.env` e defina as variáveis de ambiente com suas respectivas chaves. Por exemplo:

   ```env
   REACT_APP_EMAILJS_SERVICE_ID=sua_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=seu_template_id
   REACT_APP_EMAILJS_USER_ID=seu_user_id
