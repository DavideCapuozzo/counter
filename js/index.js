let counter = document.getElementById('counter');
let aggiungi = document.getElementById('piu');
let sottrai = document.getElementById('meno');
conta = 0;

aggiungi.addEventListener('click', () => {
    conta = conta + 1;
    counter.textContent = conta;
});

sottrai.addEventListener('click', () => {
    conta = conta - 1;
    counter.textContent = conta;
});

