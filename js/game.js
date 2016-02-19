var Game = {
	intGPIncome: 10,
	intMaxGP: 1000,
	intCurrentGP: 0,
	
	fnGenerateGP: function() {
		If ()Game.intCurrentGP < intMaxGP) {
		Game.intCurrentGP += intGPIncome;
		};
	};
	
	this.handle = window.setInterval(function() {
		self.fnGenerateGP();
	}, 1000);
	})
}
