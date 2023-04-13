
//referencias html

const dblOnline    = document.querySelector('#dblOnline')
const dblOftline   = document.querySelector('#dblOftline')
const txtMessage   = document.querySelector('#txtMessage')
const btnEnviar    = document.querySelector('#btnEnviar')

const socketClient = io()

//on es para escuchar un evento
socketClient.on('connect', ()=>{
    console.log('Conectado');

    dblOnline.style.display = ''
    dblOftline.style.display = 'none'
})

socketClient.on('disconnect', ()=>{
    console.log('Desconectado del servidos');
    
    dblOnline.style.display = 'none'
    dblOftline.style.display = ''
})
socketClient.on('envio-msg-server', 'received of client')



btnEnviar.addEventListener('click', () => {
    const mensaje = txtMessage.value
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date()
    }

    console.log(mensaje);
    socketClient.emit('enviar-mensaje', payload)
})