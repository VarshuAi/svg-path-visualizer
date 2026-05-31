
            const input = document.getElementById('svg-d');
            const render = document.getElementById('svg-render-path');

            function draw() {
                render.setAttribute('d', input.value);
            }
            input.addEventListener('input', draw);
            draw();
        