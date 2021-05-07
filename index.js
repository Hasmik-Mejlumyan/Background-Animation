const colors = ['#d63031', '#00b894', '#4caf50', '#81ecec', '#EE5A24', '#6F1E51', '#2196f3', '#e91e63', '#ffeb3b', '#74ff1d']

function createSquare() {
    const section = document.querySelector('section');
    const pTag = document.querySelector('p')
    const bg = colors[Math.floor(Math.random() * colors.length)];
    const square = document.createElement('span');
    let size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    square.style.borderRadius = '10px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';
    
    square.style.background = bg;
    
    section.append(square)

    square.addEventListener('click', () => {
        square.remove()
        pTag.innerHTML = +pTag.innerHTML + 1;     

            if(pTag.innerHTML === '5') {
                pTag.style.background = 'green'
                setTimeout(() => {
                    alert('It\'s good');
                    pTag.innerHTML = 0
                    pTag.style.background = 'rgb(128, 30, 0)'
                }, 400);
              
            }
    })
    
    setTimeout(() => {
        square.remove()
    }, 5000)
}

setInterval(createSquare, 100)



