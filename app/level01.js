var level01State = {

	init: function(levelData) {
		this.levelData = levelData++;
	},

	create: function() {
		game.stage.backgroundColor = "#448844";
		
		var LevelLabel = game.add.text(80, 80, 'This is LEVEL01', { font: '30px Arial', fill: '#ffffff'});
		var jumpLebel = game.add.text(140, 200, 'press the "W" to jump to MENU', { font: '25px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
	
		wkey.onDown.addOnce(this.start, this);

	},

	start: function() {
		this.game.state.start('menu', true, false, levelData);
	}
};