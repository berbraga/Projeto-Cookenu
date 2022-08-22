# Projeto-Cookenu

## O QUE É?

    Simulação se uma rede social na qual os usuarios podem dividir informações relevantes sobre comidas que tenham experimentado. Ela possui todas as funcionalidades mais comuns das redes sociais:

### Cadastro:

    O USUARIO precisa informar o seu8 e-mail, nome, senha para realizar o cadastro: a senha deve ter no mínimo 6 caracteres.

    Retorno: um token.

**Método:** POST
**Path:** `/signup`

**Entradas:**

    Body

    ```json
        {
            "name": "Alice",
            "email": "alice@lbn.com",
            "password": "123456"
        }
    ```

**Saídas**

    Body

    ```json
        {
            "access_token": "token de acesso"
        }
    ```

### Login:

    Para realizar o login, apenas necessario informar o E-mail e a senha corretamente.

    Retorno: token.

**Método:** POST
**Path:** `/login`

**Entradas:**

    Body

    ```json
        {
            "email": "alice@lbn.com",
            "password": "123456"
        }
    ```

**Saídas**

    Body

    ```json
        {
            "access_token": "token de acesso"
        }
    ```

### Informação do proprio perfil:

    Apartir do token de autenticação fornecido, o usuario deve ser capaz de ver as suas informações não sensíveis salvas no banco (id e E-mail).

**Método:** GET
**Path:** `/user/profile`

**Entradas:**

    Headers

    ```
        Authorization: "token de autenticação"
    ```

**Saídas**

    Body

        ```json
            {
            "id": "id do usuário",
            "name": "Alice",
            "email": "alice@lbn.com"
            }
        ```

### Criar receitas:

    O usuário deve poder criar uma receita. A receita deve ter os seguintes atributos:

    * Título,
    * Descrição/modo de preparo
    * Data de criação

**Método:** POST
**Path:** `/recipe`

**Entradas:**

    Headers

        ```
            Authorization: "token de autenticação"
        ```

    Body

        ```json
            {
                "title": "título da receita",
                "description": "descrição da receita"
            }
        ```

### Seguir usuário:

    Um usuário deve poder seguir outros usuários. Para isso, ele deve fornecer o id do usuário que deseja seguir. Um usuário seguir outro, não significa que "esse outro" está seguindo o primeiro.

### Feed:

    Um usuário deve poder visualizar as receitas criadas pelos usuários que ele segue
