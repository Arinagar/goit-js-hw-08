import Player from '@vimeo/player';
let vaultKey = 'videoplayer-current-time';
let memorySec = 0;
const player = new Player('vimeo-player');

function onPlay(data) {
  memorySec = localStorage.setItem(vaultKey, data.seconds);
}

player.on('timeupdate', onPlay);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player
  .setCurrentTime(memorySec)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        'the time was less than 0 or greater than the video’s duration';
        break;

      default:
        'player os broken';
        break;
    }
  });
