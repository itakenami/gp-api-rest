import passport from "passport"; 
import {Strategy} from "passport-jwt";
import {ExtractJwt} from "passport-jwt";

module.exports = app => { 
    
    const cfg = app.libs.config; 
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.versionOneCompatibility({authScheme:"JWT"});
    opts.secretOrKey = cfg.jwtSecret;
    
    const strategy = new Strategy(opts, (payload, done) => { 
        console.log("Sistema Credenciado : "+payload.sistema+" - Usuario: "+payload.usuario);
        return done(null, {usuario: payload.usuario});
    }); 
    
    passport.use(strategy);
    
    return { 
        initialize: () => { 
            return passport.initialize(); 
        }, 
        authenticate: () => { 
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};
