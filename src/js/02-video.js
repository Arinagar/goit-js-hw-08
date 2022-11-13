import Player from '@vimeo/player';
const player = new Player('vimeo-player');
let vaultKey = 'videoplayer-current-time';

player.on('timeupdate', _.throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(vaultKey, JSON.stringify(data.seconds));
}

function getSecondsfromLS() {
  const memorySec = JSON.parse(localStorage.getItem(vaultKey));
  if (memorySec) {
    player.setCurrentTime(memorySec);
  }
}

getSecondsfromLS();
