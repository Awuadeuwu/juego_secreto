    let numeroSecreto;
    let intentos;
    let numeroSorteado= [];
    let numeroMaximo= 10;

    function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML =texto;
    }

    function intentoDeUsuario(){
        let numeroUsuario = parseInt(document.querySelector('input').value);
        if(numeroUsuario===numeroSecreto){
            asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else{
            if(numeroUsuario>numeroSecreto){
                asignarTextoElemento('p', 'El número secreto es menor.');
            }else{
                asignarTextoElemento('p', 'El número secreto es mayor.');
            }
            intentos++
            limpiarCaja();
        }
        return;
    }
    
    function limpiarCaja(){
        document.querySelector('input').value = '';
    }

    function generarNumeroSecreto(){
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        console.log(numeroSorteado);    

        if(numeroSorteado.length == numeroMaximo){
            asignarTextoElemento('p', 'Números sorteados!');
        }
        else{
        if(numeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            numeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    }

    function condicionesIniciales(){
        asignarTextoElemento('h1','Juego número secreto!');
        asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}.`)
        numeroSecreto = generarNumeroSecreto();
        intentos=1;
    }

    function reiniciarJuego(){
        // Primero, necesitamos limpiar la caja de texto.
        limpiarCaja();
        // Indicar mensaje de intervalo de números.
        // Generar el número aleatorio.
        // Deshabilitar el boton de nuevo juego.
        condicionesIniciales()

        // Inicializar el número de intentos.
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    }
    condicionesIniciales()