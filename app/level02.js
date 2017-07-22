var level02State = {

	init: function(levelData) {
		this.levelData = levelData++;
	},

	create: function() {
		game.stage.backgroundColor = "#440044";
		
		var LevelLabel = game.add.text(80, 80, 'This is LEVEL02', { font: '30px Arial', fill: '#ffffff'});
		var jumpLebel = game.add.text(140, 200, 'press the "E" to jump to MENU', { font: '25px Arial', fill: '#ffffff'});

		var ekey = game.input.keyboard.addKey(Phaser.Keyboard.E);
	
		ekey.onDown.addOnce(this.start, this);

	},

	start: function() {
		this.game.state.start('menu', true, false, levelData);
	}
};