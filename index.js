if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
        this.navigator.serviceWorker
        .register("serviceWorker.js")
        .then(function(registro){
            console.log("Service worker registrado com sucesso", registro);
        })
        .catch(function (erro){
            console.log("Service worker não registrou", erro);
        });
    });
}