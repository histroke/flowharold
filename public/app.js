const VERSION = '1.2.0';

function saludar (nombre) {
   return `Hola ${nombre}, bienvenido a coderider`;
}

function healthCheck () {
   return {
      status: 'ok',
      version: VERSION,
      timestamp: new Date().toISOString(),
      message: 'El servidor coderider funcionando correctamente'
   };
}

function verificarsistema(){
    const resultado = healthCheck();
    const statusdiv = document.getElementById('status');
    statusdiv.textContent = `${resultado.message} | ${resultado.timestamp}`;
    statusdiv.style.color = '#009b4c';
}
document.addEventListener('DOMContentLoaded', () => {
   document.getElementById('version').textContent ='v${VERSION}';
   verificarsistema();
});S