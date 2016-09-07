


describe("Routes: Cargos", () => { 
    
    let token = "";
        
    it("Obtendo token válido", done => { 
        request.post("/token") 
            .send({"chave":"vai123"}) 
            .expect(200) 
            .end((err, res) => { 
                expect(res.body).to.include.keys("token"); 
                token = res.body.token;
                done(err); 
            }); 
    });
    
    let registro1 = "Analista de Sistemas";
    let registro2 = "Programador";
    let registro3 = "Arquiteto";
    
    describe("POST /cargos", () => {
        
        it("Criando registro1: "+registro1, done => { 
            request.post("/cargos") 
                .set("Authorization", `JWT ${token}`)
                .send(
                    {"nome":registro1}
                ) 
                .expect(201) 
                .end((err, res) => { 
                    expect(res.body.nome).to.eql(registro1); 
                    done(err); 
                }); 
        });
        
        it("Criando registro2: "+registro2, done => { 
            request.post("/cargos") 
                .set("Authorization", `JWT ${token}`)
                .send(
                    {"nome":registro2}
                ) 
                .expect(201) 
                .end((err, res) => { 
                    expect(res.body.nome).to.eql(registro2); 
                    done(err); 
                }); 
        });

    }); 
    
    describe("GET /cargos/:id", () => { 
        
        it("Obtendo registro1 [GET /cargos/1] = "+registro1, done => { 
            request.get("/cargos/1")
                .set("Authorization", `JWT ${token}`)
                .expect(200) 
                .end((err, res) => { 
                    expect(res.body.nome).to.eql(registro1); 
                    done(err); 
                }); 
        });

    }); 
    
    describe("PUT /cargos/:id", () => {
        
        it("Alterando registro1 para "+registro3+" [PUT /cargos/1]", done => { 
            request.put("/cargos/1") 
                .set("Authorization", `JWT ${token}`)
                .send(
                    {"nome":registro3}
                ) 
                .expect(204) 
                .end((err, res) => { 
                    done(err); 
                }); 
        });

    });
    
    describe("DELETE /cargos/:id", () => {
        
        it("Excluindo registro1 ", done => { 
            request.delete("/cargos/1") 
                .set("Authorization", `JWT ${token}`)
                .expect(204) 
                .end((err, res) => { 
                    done(err); 
                }); 
        });

    });
    
    describe("GET /cargos", () => { 
        
        it("Listando os registros", done => { 
            request.get("/cargos")
                .set("Authorization", `JWT ${token}`)
                .expect(200) 
                .end((err, res) => { 
                    expect(res.body).to.include.keys("cargos"); 
                    expect(res.body.cargos[0].nome).to.eql(registro2); 
                    done(err); 
                }); 
        });
        
    });
});
