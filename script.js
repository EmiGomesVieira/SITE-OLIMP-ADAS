document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let isShowingAll = false;

    function moveToNextSlide() {
        index = (index + 1) % totalItems;
        document.querySelector('.carousel-inner').style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveToNextSlide, 3000); // Muda de slide a cada 3 segundos

    const toggleButton = document.getElementById('toggleRows');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const hiddenRows = document.querySelectorAll('.medal-row.hidden');
            if (isShowingAll) {
                hiddenRows.forEach(row => row.style.display = 'none');
                this.textContent = 'Ver Mais';
            } else {
                hiddenRows.forEach(row => row.style.display = 'flex');
                this.textContent = 'Voltar';
            }
            isShowingAll = !isShowingAll;
        });
    }
});
