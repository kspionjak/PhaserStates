var preloadState = {
	preload: function() {
		var loadingLabel = game.add.text(80, 150, 'loading...', { font: '30px Courier', fill: '#ffffff'});
	},

	create: function() {

		// Calling the menu state
		game.state.start('menu');
	}	
};