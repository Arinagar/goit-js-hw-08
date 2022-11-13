import Player from '@vimeo/player';
const player = new Player('vimeo-player');
let vaultKey = 'videoplayer-current-time';
let memorySec;

player.on('timeupdate', _.throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(vaultKey, JSON.stringify(data.seconds));
  // memorySec = JSON.parse(localStorage.getItem(vaultKey));
  // return memorySec;
  // console.log(memorySec);
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function getSecondsfromLS() {
  memorySec = JSON.parse(localStorage.getItem(vaultKey));
  player
    .setCurrentTime(memorySec)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          'the time was less than 0 or greater than the video’s duration';
          break;

        default:
          'player іs broken';
          break;
      }
    });
}

getSecondsfromLS();
