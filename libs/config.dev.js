import logger from "./logger.js";

module.exports = { 
    database: "kmkqnmrf", 
    username: "kmkqnmrf", 
    password: "eCd-MQaehdCJqMo7bOQa89l79pwmInMd", 
    params: { 
        dialect: "postgres", 
        host: 'pellefant-01.db.elephantsql.com', 
        //logging: true,
        logging: (sql) => { 
            logger.info(`[${new Date()}] ${sql}`);
        }, 
        define: { 
            underscored: true
        }
    },
    jwtSecret: "GP#_API_%#@!", 
    jwtSession: {session: false}
};
