import Player from '@vimeo/player';
import storageManage from './storage';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const curTime = storageManage.load('videoplayer-current-time');

const throttled = throttle(getTimePoint, 1500);

const player = new Player(iframe);

player.on('timeupdate', throttled);
player
  .setCurrentTime(curTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

function getTimePoint(event) {
  storageManage.save('videoplayer-current-time', event.seconds);
}
