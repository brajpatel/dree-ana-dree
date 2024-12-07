// noises on ball move
const noise1 = new Audio('./assets/noises/noise-1.mp3');
const noise1dupe = new Audio('./assets/noises/noise-1-dupe.mp3');
const noise2 = new Audio('./assets/noises/noise-2.mp3');
const noise2dupe = new Audio('./assets/noises/noise-2-dupe.mp3');
const noise3 = new Audio('./assets/noises/noise-3.mp3');
const noise3dupe = new Audio('./assets/noises/noise-3-dupe.mp3');
const noise4 = new Audio('./assets/noises/noise-4.mp3');
const noise4dupe = new Audio('./assets/noises/noise-4-dupe.mp3');
const noise5 = new Audio('./assets/noises/noise-5.mp3');
const noise5dupe = new Audio('./assets/noises/noise-5-dupe.mp3');


// bops to bop to
const bop1 = new Audio('./assets/bops/bop-1.wav');
const bop2 = new Audio('./assets/bops/bop-2.wav');
const bop2Krump = new Audio('./assets/bops/bop-2-krump.wav'); 
const bop3 = new Audio('./assets/bops/bop-3.wav');

// message audios
const messageAudio1 = new Audio('./assets/messages/message-1.wav');
const messageAudio2 = new Audio('./assets/messages/message-2.wav');
const messageAudio3 = new Audio('./assets/messages/message-3.wav');
const messageAudio4 = new Audio('./assets/messages/message-4.wav');
const messageAudio5 = new Audio('./assets/messages/message-5.wav');

// message texts
const shrekBg = document.querySelector('.shrek-bg');
const shrekImage = document.querySelector('.shrek');
const message1 = document.querySelector('.message-one');
const message2 = document.querySelector('.message-two');
const message3 = document.querySelector('.message-three');
const message4 = document.querySelector('.message-four');
const message5 = document.querySelector('.message-five');

let ballCount = 1;
let messageCount = 1;

const ball = document.querySelector('.ball');
ball.addEventListener('mouseover', adjustBall);

const messageBox = document.querySelector('.message-box');
const sequenceButton = document.querySelector('.sequence-button');
sequenceButton.addEventListener('click', playSequence);

function adjustBall() {
    if (ballCount === 40) {
        ball.classList.add('button');
        ball.textContent = 'Click to chlay';

        ball.removeEventListener('mouseover', adjustBall);
        ball.addEventListener('click', pageTransition);
    }
    else {
        let words = ['Chlay', 'Sa', 'Ana', 'Bruh', 'Dree', 'Bum'];
        let wordsNum = Math.floor(Math.random() * words.length);

        ball.textContent = words[wordsNum];

        let top = Math.floor(Math.random() * 75);
        let left = Math.floor(Math.random() * 75);

        ball.style.top = top + '%';
        ball.style.left = left + '%';

        let noises = [noise1, noise1dupe, noise2, noise2dupe, noise3, noise3dupe, noise4, noise4dupe, noise5, noise5dupe];
        let noisesNum = Math.floor(Math.random() * noises.length);

        noises[noisesNum].play();
    }

    ballCount++;
}

function pageTransition() {
    ball.classList.add('ball-exit');
    noise2.play();

    setTimeout(() => {
        shrekBg.classList.add('display');
        shrekImage.classList.add('display');
        shrekImage.classList.add('enter');

        bop1.play();

        setTimeout(() => {
            messageBox.classList.add('display');
            message1.classList.add('display');
            sequenceButton.classList.add('display');

            setTimeout(() => {
                messageAudio1.play();
                
                setTimeout(() => {
                    noise4.play();
                }, 3000);
            }, 500)
        }, 6500)
    }, 7000)
}

function playSequence() {
    noise2.play();

    switch(messageCount) {
        case 1:
            message1.classList.add('exit');
            messageAudio1.pause();

            shrekImage.classList.remove('enter');
            shrekImage.classList.add('keep');


            setTimeout(() => {
                message2.classList.add('display');
                messageAudio2.play();
                sequenceButton.disabled = true;

                setTimeout(() => {
                    noise3.play();
                }, 1600);

                setTimeout(() => {
                    bop2.play();
                    shrekImage.classList.add('grandma');
                    shrekImage.src = './assets/images/shrek-roar.jpg';

                    setTimeout(() => {
                        shrekImage.src = './assets/images/shrek.jpg';
                        shrekImage.classList.remove('grandma');
                    }, 14000);

                    setTimeout(() => {
                        playSequence();
                    }, 15000);
                }, 5000);
            }, 3000);
            break;

        case 2:
            message2.classList.add('exit');
            
            setTimeout(() => {
                message3.classList.add('display');
                messageAudio3.play();

                setTimeout(() => {
                    noise4.play();
                }, 1050);

                setTimeout(() => {
                    noise3.play();
                }, 7000);

                setTimeout(() => {
                    const visions = document.querySelector('.visions');
                    visions.classList.add('display');
                }, 5500);
                
                setTimeout(() => {
                    setTimeout(() => {
                        shrekImage.classList.add('adjust');
                        shrekImage.src = './assets/images/karma.jpg';
                    }, 2000);

                    setTimeout(() => {
                        sequenceButton.disabled = false;
                        bop3.play();
                    }, 2500);

                    setTimeout(() => {
                        shrekImage.classList.add('karma');
                    }, 6900);

                    setTimeout(() => {
                        shrekImage.classList.remove('karma');
                    }, 35500);
                }, 12000);
            }, 3000);
            break;

        case 3:
            message3.classList.add('exit');
            messageAudio3.pause();
            bop3.pause();
            
            setTimeout(() => {
                shrekImage.classList.remove('adjust');
                shrekImage.classList.remove('karma');
                shrekImage.src = './assets/images/shrek.jpg';                
            }, 500);

            setTimeout(() => {
                message4.classList.add('display');
                messageAudio4.play();
            }, 3000);
            break;

        case 4:
            message4.classList.add('exit');
            messageAudio4.pause();

            setTimeout(() => {
                message5.classList.add('display');
                messageAudio5.play();
                sequenceButton.textContent = 'Chlay one more time';

                sequenceButton.addEventListener('click', () => {
                    message5.remove();
                    sequenceButton.remove();

                    messageAudio5.pause();
                    bop2Krump.play();

                    shrekBg.style.backgroundImage = "url('./assets/images/shrek-bg-fried.jpg')";
                    shrekImage.classList.add('final');
                    shrekImage.classList.remove('display');
                    shrekImage.src = './assets/images/shrek-roar-fried.jpg';

                    setTimeout(() => {
                        window.location.reload()
                    }, 4000);
                })
            }, 3000);
            break;
    }

    messageCount++;
}