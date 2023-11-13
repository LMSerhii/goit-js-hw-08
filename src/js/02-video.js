import Player from '@vimeo/player';
import storageManage from './storage';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const curTime = storageManage.load('videoplayer-current-time');

const throttled = throttle(getTimePoint, 1500);

const player = new Player(iframe);

player.on('timeupdate', throttled);
player.setCurrentTime(curTime);

function getTimePoint(event) {
  storageManage.save('videoplayer-current-time', event.seconds);
}
