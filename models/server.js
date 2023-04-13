const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.paths = {
           /*  auth:       '/api/auth', */
           
        } 

        // Middlewares
        this.middlewares();
        //sockets

        this.sockets()

        
        
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

        

    }

    routes() {
        
        /* this.app.use( this.paths.auth, require('../routes/auth')); */
        
    }
    sockets(){
        this.io.on("connection", (socket) => {
            // send a message to the client
            console.log('Cliente conectado', socket.id);

            socket.on('disconnect', () => {
                console.log('client desconectado', socket.id);
            })
             
            //payload = al primer argumento que recibo para esta funcion
            socket.on('enviar-mensaje', ( payload )=> {
               
                this.on('envio-msg-server', 'send of server')
            })
        })
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;