var util = require("util");

module.exports = app => { 
    
    const Cargo = app.db.models.Cargo; 
    
    app.route("/cargos")
        .all(app.auth.authenticate())
        /** 
        * @api {get} / Listar 
        * @apiGroup Cargos 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiSuccess {Object[]} cargos Lista de cargos 
        * @apiSuccess {Number} cargos.id ID do cargo
        * @apiSuccess {String} cargos.nome Nome do cargo 
        * @apiSuccessExample {json} Sucesso 
        * HTTP/1.1 200 OK 
        * {
        *   "cargos":[
        *       { 
        *           "id": 1, 
        *           "nome": "Analista de Sistemas"
        *       },
        *       { 
        *           "id": 2, 
        *           "nome": "Arquiteto de Software"
        *       }
        *   ]
        * }
        */  
        .get((req, res) => { 
            console.log("Executado por: "+req.user.usuario);
            Cargo.findAll({attributes:["id","nome"]}).then(cs => { 
                res.json({cargos: cs}); 
            }); 
        })
        /** 
        * @api {post} / Criar 
        * @apiGroup Cargos 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiParam {String} nome Nome do cargo a ser criado
        * @apiParamExample {json} Entrada 
        *   {"nome": "Analista de Sistemas"}
        * @apiSuccess {Number} id ID do cargo
        * @apiSuccess {String} nome Nome do cargo 
        * @apiSuccess {String} updated_at Data de atualização
        * @apiSuccess {String} created_at Data de criação
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 201 Created 
        *   { 
        *       "id": 1, 
        *       "nome": "Analista de Sistemas",
        *       "updated_at": "2016-03-14T17:28:27.308Z",
        *       "created_at": "2016-03-14T17:28:27.308Z"
        *   }
        * @apiErrorExample {json} Erro na criação
        *   HTTP/1.1 412 Precondition Failed 
        */  
        .post((req, res) => { 
            Cargo.create(req.body).then(result => {
                res.status(201).json(result);
            }).catch(error => { 
                res.status(412).json({msg: error.message});
            })
        }); 
        
    app.route("/cargos/:id") 
        .all(app.auth.authenticate())
        /** 
        * @api {get} /cargos/:id Visualizar 
        * @apiGroup Cargos 
        * @apiHeader {String} Authorization Token de usuário 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiSuccess {Number} id ID do cargo
        * @apiSuccess {String} nome Nome do cargo 
        * @apiSuccess {String} updated_at Data de atualização
        * @apiSuccess {String} created_at Data de criação
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 200 OK 
        *   { 
        *       "id": 1, 
        *       "nome": "Analista de Sistemas"
        *   }
        * @apiErrorExample {json} ID não encontrada
        *   HTTP/1.1 404 Not Found 
        * @apiErrorExample {json} Erro ao obter por ID
        *   HTTP/1.1 412 Precondition Failed 
        */
        .get((req, res) => { 
            Cargo.findById(req.params.id, { attributes: ["id", "nome"] }).then(result => {
                if(result==null){
                    res.status(404).json({msg: "id não encontrada"});    
                }else{
                    res.json(result);    
                }
            }).catch(error => { 
                res.status(412).json({msg: error.message}); 
            }); 
        }) 
        /** 
        * @api {put} /cargos/:id Alterar 
        * @apiGroup Cargos 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiParam {String} nome Nome do cargo a ser alterado
        * @apiParamExample {json} Entrada 
        *   {"nome": "Analista de Processos"}
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 204 No Content
        * @apiErrorExample {json} Erro de atualização
        *   HTTP/1.1 412 Precondition Failed 
        */
        .put((req, res) => { 
            Cargo.update(req.body, {where: req.params}).then(result => {
                res.sendStatus(204)
            }).catch(error => { 
                res.status(412).json({msg: error.message}); 
            });
        }) 
        /** 
        * @api {delete} /cargos/:id Excluir 
        * @apiGroup Cargos 
        * @apiHeader {String} Authorization Token do sistema 
        * @apiHeaderExample {json} Header 
        *   {"Authorization": "JWT xyz.abc.123.hgf"} 
        * @apiSuccessExample {json} Sucesso 
        *   HTTP/1.1 204 No Content
        * @apiErrorExample {json} Erro de exclusão
        *   HTTP/1.1 412 Precondition Failed 
        */
        .delete((req, res) => { 
            Cargo.destroy({where: {id: req.params.id}}).then(result => {
                res.sendStatus(204)
            }).catch(error => { 
                res.status(412).json({msg: error.message});
            }); 
        });
};