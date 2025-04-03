document.getElementById('openDialog').addEventListener('click', () => {
    document.getElementById('exerciseDialog').showModal();
});

document.getElementById('closeDialog').addEventListener('click', () => {
    document.getElementById('exerciseDialog').close();
});
