import jwt from "jwt-simple"; 

module.exports = app => { 
   
    /** 
    * @api {get} / Informações da API 
    * @apiGroup Info 
    * @apiSuccess {String} nome Nome da API 
    * @apiSuccess {String} descricao Descrição da API 
    * @apiSuccess {String} versao Versão da API
    * @apiSuccessExample {json} Sucesso 
    *   HTTP/1.1 200 OK 
    *   {nome: "GP-API",descricao: "API Node para Gestão de Projetos", versao:"1.0"} 
    */  
    app.get("/", (req, res) => { 
        res.json({nome: "GP-API",descricao: "API Node para Gestão de Projetos", versao:"1.0"});
    });
    
    const cfg = app.libs.config;
    
    /** 
    * @api {post} /token Obter Token 
    * @apiGroup Info 
    * @apiParam {String} chave Chave de valiação para obter token válido 
    * @apiParamExample {json} Entrada 
    *   { 
    *       "chave": "senha123"
    *   }
    * @apiSuccess {String} token Token de acesso a API 
    * @apiSuccessExample {json} Sucesso 
    *   HTTP/1.1 200 OK 
    *   {"token": "xyz.abc.123.hgf"} 
    * @apiError UnAuthorized Autenticação falhou
    * @apiErrorExample {json} Erro de autenticação
    *   HTTP/1.1 401 Unauthorized 
    */
    app.post("/token", (req, res) => { 
        
        if (req.body.chave) {
            
            const chave = req.body.chave; 
            
            if(chave=="vai123"){
                const payload = {sistema: "GP-API", usuario: "default"};    
                res.json({ token: jwt.encode(payload, cfg.jwtSecret) }); 
            } else { 
                res.sendStatus(401); 
            }
             
        } else { 
            res.sendStatus(401); 
        } 
        
    });
}