var Game = {
	intGPIncome: 10,
	intMaxGP: 1000,
	intCurrentGP: 0,
	
	GPIncomeDisplay: undefined,
	GPMaxDisplay: undefined,
	GPCurrentDisplay: undefined ,
	
	handle: undefined ,
	
	init: function() {
		var self = this;
		
		this.GPIncomeDisplay = $('#primaryIncome');
		this.GPMaxDisplay = $('#maxGP');
		this.GPCurrentDisplay = $('#currentGP') ;
		

	
	this.handle = window.setInterval(function() {
		self.tick();
		}, 100);
},
	
		fnGenerateGP: function() {
		If (this.intCurrentGP < this.intMaxGP) {
		this.intCurrentGP = this.intCurrentGP + this.intGPIncome/10;
		}
	},
	
	tick: function() {
		this.fnGenerateGP();
		
		this.GPCurrentDisplay.text(this.intCurrentGP.toFixed(2));
	},
	
};

Game.init();
