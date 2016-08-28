import express from "express"; 
import consign from "consign"; 

const app = express();

consign({verbose: false}) 
    .include("/libs/config.js") 
    .then("/db.js") 
    .then("/auth.js")
    .then("/libs/middlewares.js")
    .into(app);

console.info("Preparando para inciar scripts de teste");
console.log("========================================");
console.log("Recriando banco de dados...");
app.db.sequelize.sync({force: true}).done(() => { 
    console.log("Banco Recriado = OK"); 
    console.log("Inciando script de teste...");
});

