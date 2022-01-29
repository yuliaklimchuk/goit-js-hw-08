import throttle from 'lodash/throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let playerSecond;
const startVideoSecond = localStorage.getItem("videoplayer-current-time") ?? 0;

player.setCurrentTime(startVideoSecond);

player.on('timeupdate', throttle(function (data) {
    playerSecond = data.seconds;
    localStorage.setItem('videoplayer-current-time', playerSecond);
}, 1000));


