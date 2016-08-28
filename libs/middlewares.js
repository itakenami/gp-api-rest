import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan"; 
import cors from "cors"; 
import compression from "compression";
import helmet from "helmet"; 
import logger from "./logger.js";

module.exports = app => { 
    app.set("port", 3000); //define a porta de execucao
    //app.set("port", process.env.PORT); //Configuração para rodar no C9
    app.set("json spaces", 4); 
    app.use(morgan("common", { 
        stream: { 
            write: (message) => { 
                logger.info(message); 
            } 
        } 
    })); 
    app.use(helmet());
    app.use(cors({ 
        origin: ["*"], 
        methods: ["GET", "POST", "PUT", "DELETE"], 
        allowedHeaders: ["Content-Type", "Authorization"] 
    }));
    app.use(compression());
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        delete req.body.id; 
        next(); 
    });
    app.use(express.static("public"));
}