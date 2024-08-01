document.querySelectorAll('.color-selector').forEach(item => {
    item.addEventListener('input', event => {
        const id = event.target.id;
        const color = event.target.value;
        document.getElementById('div' + id.slice(-1)).style.backgroundColor = color;
    });
});
