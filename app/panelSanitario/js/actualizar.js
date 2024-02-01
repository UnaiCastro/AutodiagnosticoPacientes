function esContraSegura(contra) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (re.test(contra))
        return true;
    else
        return false;
   
}
function comprobarContra() {
    eliminarHijo('contraNueva')
    let e = false
    let contraNueva = document.getElementById("actContraNueva").value
    let contraVieja = document.getElementById("actContraAct").value
    if (!esContraSegura(contraNueva)) {
        var er = document.createElement("p")
        er.setAttribute('class', 'text-danger')
        var t = document.createTextNode("La contraseña debe tener al menos 8 caracteres, con mayúsculas, minúsculas, números y caracteres especiales (. ! $)");
        er.setAttribute('id', 'eContraNueva')
        er.appendChild(t)
        document.getElementById("contraNueva").appendChild(er)
        e = true
    } else if (contraVieja == contraNueva) {
        var er = document.createElement("p")
        er.setAttribute('class', 'text-danger')
        var t = document.createTextNode("Las contraseñas no pueden ser iguales");
        er.setAttribute('id', 'eContraNueva')
        er.appendChild(t)
        document.getElementById("contraNueva").appendChild(er)
        e = true
    }

    if (!e) document.actContra.submit();
}



function eliminarHijo(id) {
    var el = document.getElementById(id)
    if (el.lastChild.nodeName == 'P') {
        el.removeChild(el.lastChild)
    }
}
