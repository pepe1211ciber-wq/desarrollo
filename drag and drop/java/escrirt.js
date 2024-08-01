document.addEventListener('DOMContentLoaded', () => {
    const tareas = document.querySelectorAll('.tarea');
    const completadas = document.querySelector('.completadas');

    tareas.forEach(tarea => {
        tarea.addEventListener('dragstart', dragStart);
        tarea.addEventListener('dragend', dragEnd);
        tarea.addEventListener('dblclick', editarTarea);
    });

    completadas.addEventListener('dragover', dragOver);
    completadas.addEventListener('dragenter', dragEnter);
    completadas.addEventListener('dragleave', dragLeave);
    completadas.addEventListener('drop', completarTarea);

    function dragStart() {
        this.classList.add('dragging');
    }

    function dragEnd() {
        this.classList.remove('dragging');
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('hovered');
    }

    function dragLeave() {
        this.classList.remove('hovered');
    }

    function completarTarea(e) {
        e.preventDefault();
        const tareaArrastrada = document.querySelector('.dragging');
        completadas.appendChild(tareaArrastrada);
        tareaArrastrada.classList.remove('dragging');
        tareaArrastrada.setAttribute('draggable', 'false'); // Deshabilita el arrastre
        tareaArrastrada.setAttribute('contenteditable', 'false'); // Deshabilita la edición
        tareaArrastrada.querySelector('.form-fecha').classList.add('hidden'); // Oculta el formulario de fecha
        this.classList.remove('hovered');
        tareaArrastrada.querySelector('.texto-tarea').innerText += ' - Completada'; // Añade texto adicional para indicar que está completada
    }

    function editarTarea() {
        this.setAttribute('contenteditable', 'true');
        this.focus();
        const formFecha = this.querySelector('.form-fecha');
        if (formFecha) {
            formFecha.classList.toggle('hidden'); // Muestra u oculta el formulario de fecha al editar la tarea
        }
    }
});
