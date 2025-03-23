const toggleButton = document.getElementById('toggle');
        const body = document.body;

        toggleButton.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
            }
        });