import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

const throttled = throttle(timeup, 1000);

player.on('timeupdate', throttled);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function timeup(event) {
  console.log(event);
}
