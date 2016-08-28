define({ "api": [
  {
    "type": "delete",
    "url": "/analistas/:id",
    "title": "Excluir",
    "group": "Analistas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de exclusão",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/analistas.js",
    "groupTitle": "Analistas",
    "name": "DeleteAnalistasId"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Listar",
    "group": "Analistas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "analistas",
            "description": "<p>Lista de analistas</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analistas.id",
            "description": "<p>ID do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analistas.nome",
            "description": "<p>Nome do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analistas.especialidade",
            "description": "<p>Especialidade do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "analistas.cargo",
            "description": "<p>Cargo do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analistas.cargo.id",
            "description": "<p>ID do Cargo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analistas.cargo.nome",
            "description": "<p>Nome do Cargo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 200 OK \n{\n  \"analistas\": [\n      { \n          \"id\": 1, \n          \"nome\": \"João da Silva\",\n          \"especialidade\": \"JAVA\",\n          \"cargo\": {\n              \"id\": 2,\n              \"nome\": \"Programador\"\n          }\n      },\n      { \n          \"id\": 2, \n          \"nome\": \"Maria das Dores\",\n          \"especialidade\": \".NET\"\n          \"cargo\": {\n              \"id\": 3,\n              \"nome\": \"Analista\"\n          }\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/analistas.js",
    "groupTitle": "Analistas",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/analistas/:especialidade",
    "title": "Listar Especialistas",
    "group": "Analistas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "analistas",
            "description": "<p>Lista de analistas</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analistas.id",
            "description": "<p>ID do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analistas.nome",
            "description": "<p>Nome do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analistas.especialidade",
            "description": "<p>Especialidade do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "analistas.cargo",
            "description": "<p>Cargo do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analistas.cargo.id",
            "description": "<p>ID do Cargo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analistas.cargo.nome",
            "description": "<p>Nome do Cargo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 200 OK \n{\n  \"analistas\": [\n      { \n          \"id\": 1, \n          \"nome\": \"João da Silva\",\n          \"especialidade\": \"Java\",\n          \"cargo\": {\n              \"id\": 2,\n              \"nome\": \"Programador\"\n          }\n      },\n      { \n          \"id\": 2, \n          \"nome\": \"Maria das Dores\",\n          \"especialidade\": \"Java\"\n          \"cargo\": {\n              \"id\": 3,\n              \"nome\": \"Analista\"\n          }\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/analistas.js",
    "groupTitle": "Analistas",
    "name": "GetAnalistasEspecialidade"
  },
  {
    "type": "get",
    "url": "/analistas/:id",
    "title": "Visualizar",
    "group": "Analistas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "especialidade",
            "description": "<p>Especialidade do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "cargo",
            "description": "<p>Cargo do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cargo.id",
            "description": "<p>Id do cargo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cargo.nome",
            "description": "<p>Nome do cargo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 200 OK \n{ \n    \"id\": 1, \n    \"nome\": \"João da Silva\",\n    \"especialidade\":\"Node\",\n    \"cargo\":{\n        \"id\":1,\n        \"nome\":\"Programador\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ID não encontrada",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Erro ao obter por ID",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/analistas.js",
    "groupTitle": "Analistas",
    "name": "GetAnalistasId"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Criar",
    "group": "Analistas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do analista a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "especialidade",
            "description": "<p>Especialidade do analista a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cargo_id",
            "description": "<p>Id do cargo a ser vinculado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada ",
          "content": "{\"nome\": \"João da Silva\",\"especialidade\":\"Node\",\"cargo_id\":1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "especialidade",
            "description": "<p>Especialidade do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cargo_id",
            "description": "<p>Id do cargo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 201 Created \n{ \n    \"id\": 1, \n    \"nome\": \"João da Silva\",\n    \"especialidade\":\"Node\",\n    \"cargo_id\":1,\n    \"updated_at\": \"2016-03-14T17:28:27.308Z\",\n    \"created_at\": \"2016-03-14T17:28:27.308Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro na criação",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/analistas.js",
    "groupTitle": "Analistas",
    "name": "Post"
  },
  {
    "type": "put",
    "url": "/analistas/:id",
    "title": "Alterar",
    "group": "Analistas",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do analista a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "especialidade",
            "description": "<p>Especialidade do analista a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cargo_id",
            "description": "<p>Id do cargo a ser vinculado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada ",
          "content": "{\"nome\": \"João da Silva\",\"especialidade\":\"Node\",\"cargo_id\":1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de atualização",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/analistas.js",
    "groupTitle": "Analistas",
    "name": "PutAnalistasId"
  },
  {
    "type": "delete",
    "url": "/cargos/:id",
    "title": "Excluir",
    "group": "Cargos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de exclusão",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/cargos.js",
    "groupTitle": "Cargos",
    "name": "DeleteCargosId"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Listar",
    "group": "Cargos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cargos",
            "description": "<p>Lista de cargos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cargos.id",
            "description": "<p>ID do cargo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cargos.nome",
            "description": "<p>Nome do cargo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 200 OK \n{\n  \"cargos\":[\n      { \n          \"id\": 1, \n          \"nome\": \"Analista de Sistemas\"\n      },\n      { \n          \"id\": 2, \n          \"nome\": \"Arquiteto de Software\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/cargos.js",
    "groupTitle": "Cargos",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/cargos/:id",
    "title": "Visualizar",
    "group": "Cargos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do cargo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do cargo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 200 OK \n{ \n    \"id\": 1, \n    \"nome\": \"Analista de Sistemas\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ID não encontrada",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Erro ao obter por ID",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/cargos.js",
    "groupTitle": "Cargos",
    "name": "GetCargosId"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Criar",
    "group": "Cargos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do cargo a ser criado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada ",
          "content": "{\"nome\": \"Analista de Sistemas\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do cargo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do cargo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 201 Created \n{ \n    \"id\": 1, \n    \"nome\": \"Analista de Sistemas\",\n    \"updated_at\": \"2016-03-14T17:28:27.308Z\",\n    \"created_at\": \"2016-03-14T17:28:27.308Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro na criação",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/cargos.js",
    "groupTitle": "Cargos",
    "name": "Post"
  },
  {
    "type": "put",
    "url": "/cargos/:id",
    "title": "Alterar",
    "group": "Cargos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do cargo a ser alterado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada ",
          "content": "{\"nome\": \"Analista de Processos\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de atualização",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/cargos.js",
    "groupTitle": "Cargos",
    "name": "PutCargosId"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Informações da API",
    "group": "Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome da API</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Descrição da API</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "versao",
            "description": "<p>Versão da API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 200 OK \n{nome: \"GP-API\",descricao: \"API Node para Gestão de Projetos\", versao:\"1.0\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Info",
    "name": "Get"
  },
  {
    "type": "post",
    "url": "/token",
    "title": "Obter Token",
    "group": "Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chave",
            "description": "<p>Chave de valiação para obter token válido</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada ",
          "content": "{ \n    \"chave\": \"senha123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso a API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 200 OK \n{\"token\": \"xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnAuthorized",
            "description": "<p>Autenticação falhou</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Erro de autenticação",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Info",
    "name": "PostToken"
  },
  {
    "type": "delete",
    "url": "/projetos/:id",
    "title": "Excluir",
    "group": "Projetos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de exclusão",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/projetos.js",
    "groupTitle": "Projetos",
    "name": "DeleteProjetosId"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Listar",
    "group": "Projetos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "projetos",
            "description": "<p>Lista de projetos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "projetos.id",
            "description": "<p>ID do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projetos.nome",
            "description": "<p>Nome do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projetos.data_inicio",
            "description": "<p>Data início do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "projetos.data_fim",
            "description": "<p>Data fim do projeto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 200 OK \n{\n  \"projetos\": [\n      { \n          \"id\": 1, \n          \"nome\": \"Projeto A\",\n          \"data_inicio\": \"2016-01-01T00:00:00.000Z\",\n          \"data_fim\": \"2016-12-31T00:00:00.000Z\"\n      },\n      { \n          \"id\": 2, \n          \"nome\": \"Projeto B\",\n          \"data_inicio\": \"2016-01-01T00:00:00.000Z\",\n          \"data_fim\": \"2016-12-31T00:00:00.000Z\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/projetos.js",
    "groupTitle": "Projetos",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/projetos/:id",
    "title": "Visualizar",
    "group": "Projetos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Descrição do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data_inicio",
            "description": "<p>Data início do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data_fim",
            "description": "<p>Data fim do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "analistas",
            "description": "<p>Analistas do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analistas.id",
            "description": "<p>Id do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analistas.nome",
            "description": "<p>Nome do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analistas.especialidade",
            "description": "<p>Especialidade do analista</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 200 OK \n{\n    \"id\": 46,\n    \"nome\": \"Projeto A\",\n    \"descricao\": Descrição do Projeto A,\n    \"data_inicio\": \"2016-01-01T00:00:00.000Z\",\n    \"data_fim\": \"2016-12-31T00:00:00.000Z\",\n    \"analistas\": [\n        {\n            \"id\": 2,\n            \"nome\": \"Maria Carla\",\n            \"especialidade\": \"Node\",\n            \"analistas_projetos\": {\n                \"created_at\": \"2016-03-17T16:21:36.388Z\",\n                \"updated_at\": \"2016-03-17T16:21:36.388Z\",\n                \"projeto_id\": 46,\n                \"analista_id\": 2\n            }\n        },\n        {\n            \"id\": 3,\n            \"nome\": \"João da Silva\",\n            \"especialidade\": \"UML\",\n            \"analistas_projetos\": {\n                \"created_at\": \"2016-03-17T16:21:36.388Z\",\n                \"updated_at\": \"2016-03-17T16:21:36.388Z\",\n                \"projeto_id\": 46,\n                \"analista_id\": 3\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "ID não encontrada",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Erro ao obter por ID",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/projetos.js",
    "groupTitle": "Projetos",
    "name": "GetProjetosId"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Criar",
    "group": "Projetos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do projeto a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Descrição do projeto a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data_inicio",
            "description": "<p>Data início do projeto a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data_fim",
            "description": "<p>Data fim do projeto a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "analistas",
            "description": "<p>Id dos analistas a ser vinculado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada ",
          "content": "{\"nome\": \"Projeto A\",\"descricao\":\"Descrição do Projeto A\",\"data_inicio\":\"2016-01-01\",\"data_fim\":\"2016-12-31\",\"analistas\":[2,3]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Descrição do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data_inicio",
            "description": "<p>Data início do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data_fim",
            "description": "<p>Data fim do projeto</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de criação</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 201 Created \n{\n    \"id\": 1,\n    \"nome\": \"Projeto A\",\n    \"descricao\": \"Descrição do Projeto A\",\n    \"data_inicio\": \"2016-01-01T00:00:00.000Z\",\n    \"data_fim\": \"2016-12-31T00:00:00.000Z\",\n    \"updated_at\": \"2016-03-17T16:24:01.900Z\",\n    \"created_at\": \"2016-03-17T16:24:01.900Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro na criação",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/projetos.js",
    "groupTitle": "Projetos",
    "name": "Post"
  },
  {
    "type": "put",
    "url": "/projetos/:id",
    "title": "Alterar",
    "group": "Projetos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header ",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do projeto a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Descrição do projeto a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data_inicio",
            "description": "<p>Data início do projeto a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data_fim",
            "description": "<p>Data fim do projeto a ser criado</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "analistas",
            "description": "<p>Id dos analistas a ser vinculado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada ",
          "content": "{\"nome\": \"Projeto A\",\"descricao\":\"Descrição do Projeto A\",\"data_inicio\":\"2016-01-01\",\"data_fim\":\"2016-12-31\",\"analistas\":[2,3]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso ",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de atualização",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/projetos.js",
    "groupTitle": "Projetos",
    "name": "PutProjetosId"
  }
] });
