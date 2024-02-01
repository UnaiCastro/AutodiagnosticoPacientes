function eliminar_cita(id) {
    fetch('server/eliminar_cita.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'id=' + id ,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Eliminado correctamente:', data);
        
        location.reload();
    })
    .catch(error => console.error('Error al actualizar el estado:', error));
}
