class Class{
	name = "Monk"
	allClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", 
	"Warlock", "Wizard"]

	constructor(){}
	setClass() {
		this.name = this.allClasses[Math.floor(Math.random() * this.allClasses.length)];
	}
	getClass(){
		return this.name;
	}
	
}

export default Class