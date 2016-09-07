


describe("Routes: Analistas", () => { 
    
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
    
    let registro1 = "João Souza";
    let registro2 = "Maria Carla";
    let registro3 = "Davi Viana";
    
    describe("POST /analistas", () => {
        
        it("Criando registro1: "+registro1, done => { 
            request.post("/analistas") 
                .set("Authorization", `JWT ${token}`)
                .send(
                    {
                        "nome":registro1,
                        "especialidade":"Java",
                        "cargo_id":2
                        
                    }
                ) 
                .expect(201) 
                .end((err, res) => { 
                    expect(res.body.nome).to.eql(registro1); 
                    done(err); 
                }); 
        });
        
        it("Criando registro2: "+registro2, done => { 
            request.post("/analistas") 
                .set("Authorization", `JWT ${token}`)
                .send(
                    {
                        "nome":registro2,
                        "especialidade":"Node",
                        "cargo_id":2
                        
                    }
                ) 
                .expect(201) 
                .end((err, res) => { 
                    expect(res.body.nome).to.eql(registro2); 
                    done(err); 
                }); 
        });

    }); 
    
    describe("GET /analistas/:id", () => { 
        
        it("Obtendo registro1 [GET /analistas/1] = "+registro1, done => { 
            request.get("/analistas/1")
                .set("Authorization", `JWT ${token}`)
                .expect(200) 
                .end((err, res) => { 
                    expect(res.body.nome).to.eql(registro1); 
                    done(err); 
                }); 
        });

    }); 
    
    describe("PUT /analistas/:id", () => {
        
        it("Alterando registro1 para "+registro3+" [PUT /analistas/1]", done => { 
            request.put("/analistas/1") 
                .set("Authorization", `JWT ${token}`)
                .send(
                    {
                        "nome":registro3,
                        "especialidade":"Java",
                        "cargo_id":2
                        
                    }
                ) 
                .expect(204) 
                .end((err, res) => { 
                    done(err); 
                }); 
        });

    });
    
    describe("DELETE /analistas/:id", () => {
        
        it("Excluindo registro1 ", done => { 
            request.delete("/analistas/1") 
                .set("Authorization", `JWT ${token}`)
                .expect(204) 
                .end((err, res) => { 
                    done(err); 
                }); 
        });

    });
    
    describe("GET /analistas", () => { 
        
        it("Listando os registros", done => { 
            request.get("/analistas")
                .set("Authorization", `JWT ${token}`)
                .expect(200) 
                .end((err, res) => { 
                    expect(res.body).to.include.keys("analistas"); 
                    expect(res.body.analistas[0].nome).to.eql(registro2); 
                    done(err); 
                }); 
        });
        
    });
});
