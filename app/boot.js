var bootState = {
	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);

		// Calling the preload state
		game.state.start('preload');
	}
};