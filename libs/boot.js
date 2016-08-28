import https from "https"; 
import fs from "fs";

module.exports = app => { 
    if (process.env.NODE_ENV !== "test") {
        
        //Usar certificado https na pasta local
        /*
        const credentials = { 
            key: fs.readFileSync("gp-api.key", "utf8"), 
            cert: fs.readFileSync("gp-api.cert", "utf8") 
        }
        */
        
        app.db.sequelize.sync().done(() => { 
            app.listen(app.get("port"), () => {
            //Iniciar com https
            //https.createServer(credentials, app) .listen(app.get("port"), () => { 
                console.log(`\n\nGP API - porta ${app.get("port")}`); 
            });
        });
    }
}