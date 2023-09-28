class Race{
	name = "Human"
	allRaces = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
	
	constructor(){}
	setRace() {
		this.name = this.allRaces[Math.floor(Math.random() * this.allRaces.length)];
	}
	getRace(){
		return this.name;
	}
}

export default Race