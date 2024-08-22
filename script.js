document.getElementById('aboutIcon').addEventListener('click', function () {
    document.getElementById('about').classList.remove('hidden');
});

document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('about').classList.add('hidden');
});

// Additional JavaScript functionalities can be added here
