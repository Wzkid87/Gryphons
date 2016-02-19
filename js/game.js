var Game = {
	intGPIncome: 10,
	intMaxGP: 1000,
	intCurrentGP: 0,
	
	GPIncomeDisplay: undefined,
	GPMaxDisplay: undefined,
	GPCurrentDisplay: undefined ,
	
	init: function(incomes) {
		var self = this;
		
		this.GPIncomeDisplay = $('#primaryIncome');
		this.GPMaxDisplay = $('#maxGP');
		this.GPCurrentDisplay = $('#currentGP') ;
		
	}
	
	fnGenerateGP: function() {
		If (this.intCurrentGP < this.intMaxGP) {
		this.intCurrentGP += this.intGPIncome/10;
		};

	
	this.handle = window.setInterval(function() {
		self.tick();
		}, 100);
	};
	
	tick: function() {
		
	}
	
}
