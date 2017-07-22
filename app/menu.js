var levelData;

var menuState = {
	
	init: function(levelData) {
		if (!levelData) {
			levelData = 0;
		}

		this.levelData = levelData;
	},

	create: function() {
		
		game.stage.backgroundColor = '#000000';

		var namedLabel = game.add.text(80, 80, 'Game States Test', { font: '50px Arial', fill: '#ffffff'});

		var startLabel01 = game.add.text(140, 200, 'press the "W" key to jump to level01', { font: '25px Arial', fill: '#ffffff'});
		var startLabel02 = game.add.text(140, 240, 'press the "E" key to jump to level02', { font: '25px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		var ekey = game.input.keyboard.addKey(Phaser.Keyboard.E);

		wkey.onDown.addOnce(this.jump_level01, this);
		ekey.onDown.addOnce(this.jump_level02, this);

	},

	jump_level01: function() {
		game.state.start('level01');
	},

	jump_level02: function() {
		game.state.start('level02');
	}
};