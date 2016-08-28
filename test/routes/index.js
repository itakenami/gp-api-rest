describe("Routes: Index", () => { 

    
    //beforeEach(done => {
    //        console.log("Rodou antes 1");
    //    });
    
    describe("GET /", () => { 
        it("Verifica nome e versão da API", done => { 
            request.get("/") 
            .expect(200) 
            .end((err, res) => { 
                const expected = {
                    "nome": "GP-API",
                    "descricao": "API Node para Gestão de Projetos",
                    "versao": "1.0"
                }; 
                expect(res.body.nome).to.eql("GP-API");
                expect(res.body.versao).to.eql("1.0"); 
                done(err); 
            }); 
        }); 
    });
    
    describe("POST /token", () => { 
        
        //beforeEach(done => {
            // Código de pré-teste 
        //});
        
        it("Não enviando senha ", done => { 
            request.post("/token") 
                .expect(401)
                .end((err, res) => { 
                    done(err); 
                });
        });
        
        it("Enviando senha errada ", done => { 
            request.post("/token") 
                .send({"token":"errada"}) 
                .expect(401)
                .end((err, res) => { 
                    done(err); 
                });
        });
        
        it("Retornou token autenticado", done => { 
            request.post("/token") 
                .send({"token":"vai123"}) 
                .expect(200) 
                .end((err, res) => { 
                    expect(res.body).to.include.keys("token"); 
                    done(err); 
                }); 
        });

    }); 
});
