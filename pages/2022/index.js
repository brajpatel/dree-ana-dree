const message = document.getElementById('message');

message.addEventListener('mouseleave', () => {
    window.scrollTo(0, document.body.scrollHeight);
})

const mainImg = document.getElementById('main-img');
mainImg.addEventListener('mouseenter', () => {
    aneurysm.play();
    sa.play();
})

const items = document.querySelectorAll('span');

items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        switch(item.textContent) {
            case 'Lath Rian Oune Vi':
                lathri.play();

            case 'Focus':
                focus.play();

            case 'Never Falter':
                never.play();

            case 'Sa Ana Sa':
                sa.play();

            case 'Always Trust Your Spirit':
                trus.play();

            default:
                return;
        }
    })
})

const aneurysm = document.createElement('audio');
aneurysm.setAttribute('src', 'assets/aneurysm.mp3');

const lathri = document.createElement('audio');
lathri.setAttribute('src', 'assets/lathri.ogg');

const focus = document.createElement('audio');
focus.setAttribute('src', 'assets/focus.ogg')

const never = document.createElement('audio');
never.setAttribute('src', 'assets/never.ogg')

const sa = document.createElement('audio');
sa.setAttribute('src', 'assets/sa.ogg')

const trus = document.createElement('audio');
trus.setAttribute('src', 'assets/trus.ogg')
