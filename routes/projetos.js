import util from "util";

module.exports = app => { 
    
    const Projeto = app.db.models.Projeto; 
    const Analista = app.db.models.Analista; 
    
    app.route("/projetos") 
        .all(app.auth.authenticate())
        /** 
        * @api {get} / Listar
        * @apiGroup Projetos 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiSuccess {Object[]} projetos Lista de projetos 
        * @apiSuccess {Number} projetos.id ID do projeto
        * @apiSuccess {String} projetos.nome Nome do projeto
        * @apiSuccess {String} projetos.data_inicio Data início do projeto
        * @apiSuccess {String} projetos.data_fim Data fim do projeto
        * @apiSuccessExample {json} Sucesso 
        * HTTP/1.1 200 OK 
        * {
        *   "projetos": [
        *       { 
        *           "id": 1, 
        *           "nome": "Projeto A",
        *           "data_inicio": "2016-01-01T00:00:00.000Z",
        *           "data_fim": "2016-12-31T00:00:00.000Z"
        *       },
        *       { 
        *           "id": 2, 
        *           "nome": "Projeto B",
        *           "data_inicio": "2016-01-01T00:00:00.000Z",
        *           "data_fim": "2016-12-31T00:00:00.000Z"
        *       }
        *   ]
        * }
        */
        .get((req, res) => { 
            Projeto.findAll({attributes:["id","nome","data_inicio","data_fim"]}).then(ps => { 
                res.json({projetos: ps}); 
            }); 
        }) 
        /** 
        * @api {post} / Criar 
        * @apiGroup Projetos 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiParam {String} nome Nome do projeto a ser criado
        * @apiParam {String} descricao Descrição do projeto a ser criado
        * @apiParam {String} data_inicio Data início do projeto a ser criado
        * @apiParam {String} data_fim Data fim do projeto a ser criado
        * @apiParam {Number[]} analistas Id dos analistas a ser vinculado
        * @apiParamExample {json} Entrada 
        *   {"nome": "Projeto A","descricao":"Descrição do Projeto A","data_inicio":"2016-01-01","data_fim":"2016-12-31","analistas":[2,3]}
        * @apiSuccess {Number} id ID do projeto
        * @apiSuccess {String} nome Nome do projeto
        * @apiSuccess {String} descricao Descrição do projeto
        * @apiSuccess {String} data_inicio Data início do projeto
        * @apiSuccess {String} data_fim Data fim do projeto
        * @apiSuccess {String} updated_at Data de atualização
        * @apiSuccess {String} created_at Data de criação
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 201 Created 
        *   {
        *       "id": 1,
        *       "nome": "Projeto A",
        *       "descricao": "Descrição do Projeto A",
        *       "data_inicio": "2016-01-01T00:00:00.000Z",
        *       "data_fim": "2016-12-31T00:00:00.000Z",
        *       "updated_at": "2016-03-17T16:24:01.900Z",
        *       "created_at": "2016-03-17T16:24:01.900Z"
        *   }
        * @apiErrorExample {json} Erro na criação
        *   HTTP/1.1 412 Precondition Failed 
        */
        .post((req, res) => { 
            
            Projeto.create(req.body).then(projeto => {
                  
                Analista.findAll({where: {'id': {in: req.body.analistas}}}).then(analistas => { 
                    projeto.setAnalista(analistas); 
                }); 
                    
                res.status(201).json(projeto);
                
            }).catch(error => { 
                res.status(412).json({msg: error.message});
            })
            
        }); 
           
    app.route("/projetos/:id") 
        .all(app.auth.authenticate())
        /** 
        * @api {get} /projetos/:id Visualizar
        * @apiGroup Projetos 
        * @apiHeader {String} Authorization Token de usuário 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiSuccess {Number} id ID do projeto
        * @apiSuccess {String} nome Nome do projeto
        * @apiSuccess {String} descricao Descrição do projeto
        * @apiSuccess {String} data_inicio Data início do projeto
        * @apiSuccess {String} data_fim Data fim do projeto
        * @apiSuccess {Object[]} analistas Analistas do projeto
        * @apiSuccess {Number} analistas.id Id do analista
        * @apiSuccess {String} analistas.nome Nome do analista
        * @apiSuccess {String} analistas.especialidade Especialidade do analista
        * @apiSuccess {String} updated_at Data de atualização
        * @apiSuccess {String} created_at Data de criação
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 200 OK 
        *   {
        *       "id": 46,
        *       "nome": "Projeto A",
        *       "descricao": Descrição do Projeto A,
        *       "data_inicio": "2016-01-01T00:00:00.000Z",
        *       "data_fim": "2016-12-31T00:00:00.000Z",
        *       "analistas": [
        *           {
        *               "id": 2,
        *               "nome": "Maria Carla",
        *               "especialidade": "Node",
        *               "analistas_projetos": {
        *                   "created_at": "2016-03-17T16:21:36.388Z",
        *                   "updated_at": "2016-03-17T16:21:36.388Z",
        *                   "projeto_id": 46,
        *                   "analista_id": 2
        *               }
        *           },
        *           {
        *               "id": 3,
        *               "nome": "João da Silva",
        *               "especialidade": "UML",
        *               "analistas_projetos": {
        *                   "created_at": "2016-03-17T16:21:36.388Z",
        *                   "updated_at": "2016-03-17T16:21:36.388Z",
        *                   "projeto_id": 46,
        *                   "analista_id": 3
        *               }
        *           }
        *       ]
        *   }
        * @apiErrorExample {json} ID não encontrada
        *   HTTP/1.1 404 Not Found 
        * @apiErrorExample {json} Erro ao obter por ID
        *   HTTP/1.1 412 Precondition Failed 
        */ 
        .get((req, res) => { 
            Projeto.findById(req.params.id,{  
                    include: [
                        {model: app.db.models.Analista, attributes: ["id","nome","especialidade"],as:'analistas'}
                    ],
                    attributes: ["id", "nome","descricao","data_inicio","data_fim"]
            }).then(result => {
                res.json(result)
            }).catch(error => { 
                res.status(412).json({msg: error.message}); 
            }); 
        }) 
        /** 
        * @api {put} /projetos/:id Alterar 
        * @apiGroup Projetos 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiParam {String} nome Nome do projeto a ser criado
        * @apiParam {String} descricao Descrição do projeto a ser criado
        * @apiParam {String} data_inicio Data início do projeto a ser criado
        * @apiParam {String} data_fim Data fim do projeto a ser criado
        * @apiParam {Number[]} analistas Id dos analistas a ser vinculado
        * @apiParamExample {json} Entrada 
        *   {"nome": "Projeto A","descricao":"Descrição do Projeto A","data_inicio":"2016-01-01","data_fim":"2016-12-31","analistas":[2,3]}
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 204 No Content
        * @apiErrorExample {json} Erro de atualização
        *   HTTP/1.1 412 Precondition Failed 
        */
        .put((req, res) => { 
            Projeto.update(req.body, {where: req.params}).then(result => {
                res.sendStatus(204)
            }).catch(error => { 
                res.status(412).json({msg: error.message}); 
            });
        }) 
        /** 
        * @api {delete} /projetos/:id Excluir 
        * @apiGroup Projetos 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 204 No Content
        * @apiErrorExample {json} Erro de exclusão
        *   HTTP/1.1 412 Precondition Failed 
        */
        .delete((req, res) => { 
            Projeto.destroy({where: {id: req.params.id}}).then(result => {
                res.sendStatus(204)
            }).catch(error => { 
                res.status(412).json({msg: error.message});
            }); 
        });
};