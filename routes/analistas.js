module.exports = app => { 
    
    const Analista = app.db.models.Analista; 
    
    app.route("/analistas/especialidade/:especialidade") 
        .all(app.auth.authenticate())
        /** 
        * @api {get} /analistas/:especialidade Listar Especialistas
        * @apiGroup Analistas 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiSuccess {Object[]} analistas Lista de analistas 
        * @apiSuccess {Number} analistas.id ID do analista
        * @apiSuccess {String} analistas.nome Nome do analista
        * @apiSuccess {String} analistas.especialidade Especialidade do analista
        * @apiSuccess {Object} analistas.cargo Cargo do analista
        * @apiSuccess {Number} analistas.cargo.id ID do Cargo
        * @apiSuccess {String} analistas.cargo.nome Nome do Cargo
        * @apiSuccessExample {json} Sucesso 
        * HTTP/1.1 200 OK 
        * {
        *   "analistas": [
        *       { 
        *           "id": 1, 
        *           "nome": "João da Silva",
        *           "especialidade": "Java",
        *           "cargo": {
        *               "id": 2,
        *               "nome": "Programador"
        *           }
        *       },
        *       { 
        *           "id": 2, 
        *           "nome": "Maria das Dores",
        *           "especialidade": "Java"
        *           "cargo": {
        *               "id": 3,
        *               "nome": "Analista"
        *           }
        *       }
        *   ]
        * }
        */  
        .get((req, res) => { 
            Analista.getEspecialistas(req.params.especialidade,analistas => { 
                res.json({analistas: analistas}); 
            }); 
        }); 
    
    app.route("/analistas") 
        .all(app.auth.authenticate())
        /** 
        * @api {get} / Listar
        * @apiGroup Analistas 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiSuccess {Object[]} analistas Lista de analistas 
        * @apiSuccess {Number} analistas.id ID do analista
        * @apiSuccess {String} analistas.nome Nome do analista
        * @apiSuccess {String} analistas.especialidade Especialidade do analista
        * @apiSuccess {Object} analistas.cargo Cargo do analista
        * @apiSuccess {Number} analistas.cargo.id ID do Cargo
        * @apiSuccess {String} analistas.cargo.nome Nome do Cargo
        * @apiSuccessExample {json} Sucesso 
        * HTTP/1.1 200 OK 
        * {
        *   "analistas": [
        *       { 
        *           "id": 1, 
        *           "nome": "João da Silva",
        *           "especialidade": "JAVA",
        *           "cargo": {
        *               "id": 2,
        *               "nome": "Programador"
        *           }
        *       },
        *       { 
        *           "id": 2, 
        *           "nome": "Maria das Dores",
        *           "especialidade": ".NET"
        *           "cargo": {
        *               "id": 3,
        *               "nome": "Analista"
        *           }
        *       }
        *   ]
        * }
        */  
        .get((req, res) => { 
            Analista.findAll({
                include: [
                    {model: app.db.models.Cargo, attributes:["id","nome"], as:'cargo'}
                ],
                attributes:["id","nome","especialidade"]
            }).then(cs => { 
                res.json({analistas: cs}); 
            }); 
        }) 
        /** 
        * @api {post} / Criar 
        * @apiGroup Analistas 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiParam {String} nome Nome do analista a ser criado
        * @apiParam {String} especialidade Especialidade do analista a ser criado
        * @apiParam {Number} cargo_id Id do cargo a ser vinculado
        * @apiParamExample {json} Entrada 
        *   {"nome": "João da Silva","especialidade":"Node","cargo_id":1}
        * @apiSuccess {Number} id ID do analista
        * @apiSuccess {String} nome Nome do analista
        * @apiSuccess {String} especialidade Especialidade do analista
        * @apiSuccess {Number} cargo_id Id do cargo
        * @apiSuccess {String} updated_at Data de atualização
        * @apiSuccess {String} created_at Data de criação
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 201 Created 
        *   { 
        *       "id": 1, 
        *       "nome": "João da Silva",
        *       "especialidade":"Node",
        *       "cargo_id":1,
        *       "updated_at": "2016-03-14T17:28:27.308Z",
        *       "created_at": "2016-03-14T17:28:27.308Z"
        *   }
        * @apiErrorExample {json} Erro na criação
        *   HTTP/1.1 412 Precondition Failed 
        */  
        .post((req, res) => { 
            Analista.create(req.body).then(result => {
                res.status(201).json(result)
            }).catch(error => { 
                res.status(412).json({msg: error.message});
            })
        }); 
        
    app.route("/analistas/:id") 
        .all(app.auth.authenticate())
        /** 
        * @api {get} /analistas/:id Visualizar
        * @apiGroup Analistas 
        * @apiHeader {String} Authorization Token de usuário 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiSuccess {Number} id ID do analista
        * @apiSuccess {String} nome Nome do analista
        * @apiSuccess {String} especialidade Especialidade do analista
        * @apiSuccess {Object} cargo Cargo do analista
        * @apiSuccess {Number} cargo.id Id do cargo
        * @apiSuccess {String} cargo.nome Nome do cargo
        * @apiSuccess {String} updated_at Data de atualização
        * @apiSuccess {String} created_at Data de criação
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 200 OK 
        *   { 
        *       "id": 1, 
        *       "nome": "João da Silva",
        *       "especialidade":"Node",
        *       "cargo":{
        *           "id":1,
        *           "nome":"Programador"
        *       }
        *   }
        * @apiErrorExample {json} ID não encontrada
        *   HTTP/1.1 404 Not Found 
        * @apiErrorExample {json} Erro ao obter por ID
        *   HTTP/1.1 412 Precondition Failed 
        */
        .get((req, res) => { 
            Analista.findById(req.params.id,{  
                    include: [
                        { model: app.db.models.Cargo, attributes: ["id","nome"], as:'cargo'}
                    ],
                    attributes: ["id", "nome","especialidade"]
            }).then(result => {
                res.json(result)
            }).catch(error => { 
                res.status(412).json({msg: error.message}); 
            }); 
        }) 
        /** 
        * @api {put} /analistas/:id Alterar 
        * @apiGroup Analistas 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiParam {String} nome Nome do analista a ser criado
        * @apiParam {String} especialidade Especialidade do analista a ser criado
        * @apiParam {Number} cargo_id Id do cargo a ser vinculado
        * @apiParamExample {json} Entrada 
        *    {"nome": "João da Silva","especialidade":"Node","cargo_id":1}
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 204 No Content
        * @apiErrorExample {json} Erro de atualização
        *   HTTP/1.1 412 Precondition Failed 
        */
        .put((req, res) => { 
            Analista.update(req.body, {where: req.params}).then(result => {
                res.sendStatus(204)
            }).catch(error => { 
                res.status(412).json({msg: error.message}); 
            });
        }) 
        /** 
        * @api {delete} /analistas/:id Excluir 
        * @apiGroup Analistas 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 204 No Content
        * @apiErrorExample {json} Erro de exclusão
        *   HTTP/1.1 412 Precondition Failed 
        */
        .delete((req, res) => { 
            Analista.destroy({where: {id: req.params.id}}).then(result => {
                res.sendStatus(204)
            }).catch(error => { 
                res.status(412).json({msg: error.message});
            }); 
        });
};