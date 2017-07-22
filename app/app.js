var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game-area');

game.state.add('boot', bootState);
game.state.add('preload', preloadState);
game.state.add('menu', menuState);
game.state.add('level01', level01State);
game.state.add('level02', level02State);
// game.state.add('app', appState);

game.state.start('boot');
