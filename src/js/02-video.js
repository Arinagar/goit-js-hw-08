import Player from '@vimeo/player';
const player = new Player('vimeo-player');
let vaultKey = 'videoplayer-current-time';

player.on('timeupdate', _.throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(vaultKey, data.seconds);
}

player.setCurrentTime(localStorage.getItem(vaultKey) || 0);
