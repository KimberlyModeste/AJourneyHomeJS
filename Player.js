class Player {
	static singlePlayer = null;
	playerName = "You"
	baseHealth = 8;
	baseAttack = 1;
	baseDefense = 1;
	baseSpeed = 1;
	currentHealth = 8;
	currentAttack = 0;
	currentDefense = 1;
	currentSpeed = 1;
	magic = 1 ;
	currency = 0;

	//private ArrayList
	medals = [];
	medalCounter = 0;
	//myRace;
	//myClass;
	hasDarkvision = false;
	hasMagic = false;
	proWeapons = []
	level = 1;
	exp = 0;
	isDone = false;

	constructor()
	{
		this.setPlayerName("You");
		//myRace = new Race ();
		//myClass = new Class ();
	}
	
	setPlayerName(name)
	{
		this.name = name
	}
	getPlayerName(){
		return this.name
	}

	static getInstance(){
		if(this.singlePlayer == null)
			this.singlePlayer = new Player()
		return this.singlePlayer
	}

	static getInstance(name){
		if(this.singlePlayer == null)
		{
			this.singlePlayer = new Player()
			this.singlePlayer.setPlayerName(name) 
		}
		return this.singlePlayer
	}

	/*//Race of Player
	getRace(){
		return this.myRace
	}*/

	/*//Class of Player
	getClass(){
		return this.myClass
	}*/


	//Money
	getCurrency() {
		return this.currency;
	}
	setCurrency(currency) {
		this.currency += currency;
	}

	//Overall maximum Health
	getBaseHealth() {
		return this.baseHealth;
	}
	setBaseHealth(baseHealth) {
		this.baseHealth = baseHealth;
	}

	//Overall maximum Attack
	getBaseAttack() {
		return this.baseAttack;
	}
	setBaseAttack(baseAttack) {
		this.baseAttack = baseAttack;
	}

	//Overall maximum Defense
	getBaseDefense() {
		return this.baseDefense;
	}
	setBaseDefense(baseDefense) {
		this.baseDefense = baseDefense;
	}


	//Overall Basic Speed
	getBaseSpeed(){
		return this.baseSpeed;
	}
	setBaseSpeed(baseSpeed){
		this.baseSpeed = baseSpeed;
	}

	//These can be above the base if there is a temporary stat buff
	//Or below if there's a disadvantage like a weaker attack

	//The health that will be decreased when attacked
	getCurrentHealth() {
		return this.currentHealth;
	}
	setCurrentHealth(currentHealth) {
		this.currentHealth = currentHealth;
	}

	getCurrentAttack() {
		return this.currentAttack;
	}
	setCurrentAttack(currentAttack) {
		this.currentAttack = currentAttack;
	}

	getCurrentDefense() {
		return this.currentDefense;
	}
	setCurrentDefense(currentDefense) {
		this.currentDefense = currentDefense;
	}

	getCurrentSpeed() {
		return this.currentSpeed;
	}
	setCurrentSpeed(currentSpeed) {
		this.currentSpeed = currentSpeed;
	}

	setIsDone(done){
		this.isDone = done
	}

	getIsDone(){
		return this.isDone
	}

	//If the player has Darkvision
	getHasDarkvision() {
		return this.hasDarkvision;
	}
	setHasDarkvision(hasDarkvision) {
		this.hasDarkvision = hasDarkvision;
	}

	//If the player has magic
	getHasMagic() {
		return this.hasMagic;
	}
	setHasMagic(hasMagic) {
		this.hasMagic = hasMagic;
	}

	/*//Weapons that they're good at
	getProWeapons() {
		return this.proWeapons;
	}
	addProWeapons(proWeapons) {
		this.proWeapons.push(proWeapons);
	}*/

	//For the hero ending if we have time
	//Maybe we can make more big monsters and once 
	//the player has 3 they have the hero title
	getMedals() {
		return this.medals;
	}

	setMedals(medal) {
		this.medals[this.medalCounter] = medal;
		this.medalCounter++;
	}
	getMedalCounter() {
		return this.medalCounter;
	}
	
	async medalWin() 
	{

		if (this.getMedalCounter()==3)
		{
			console.log('\n')
			await charText("You have collected 3 medals and became a legend!", 50);
			console.log('\n')
			await charText("Congratulations on getting the good ending 2 of 2!", 50);
		}

	}

	getMagic() {
		return this.magic;
	}
	setMagic(magic) {
		this.magic = magic;
	}

	/*//Levels and Exp
	setLevel(level){
		this.level = level;
	}
	getLevel(){
		return this.level;
	}

	getExp(){
		return this.exp;
	}
	setExp(exp){
		this.exp+=exp;

		switch(true){
			case (getExp() >= 300 && getExp() < 900):
				if(getLevel() == 1)
				{
					setLevel(2);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 900 && getExp() < 2700):
				if(getLevel() == 2)
				{
					setLevel(3);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 2700 && getExp() < 6500):
				if(getLevel() == 3)
				{
					setLevel(4);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 6500 && getExp() < 14000):
				if(getLevel() == 4)
				{
					setLevel(5);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 14000 && getExp() < 23000):
				if(getLevel() == 5)
				{
					setLevel(6);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 23000 && getExp() < 34000):
				if(getLevel() == 6)
				{
					setLevel(7);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 34000 && getExp() < 48000):
				if(getLevel() == 7)
				{
					setLevel(8);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 48000 && getExp() < 64000):
				if(getLevel() == 8)
				{
					setLevel(9);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 64000 && getExp() < 85000):
				if(getLevel() == 9)
				{
					setLevel(10);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 85000 && getExp() < 100000):
				if(getLevel() == 10)
				{
					setLevel(11);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 100000 && getExp() < 120000):
				if(getLevel() == 11)
				{
					setLevel(12);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 120000 && getExp() < 140000):
				if(getLevel() == 12)
				{
					setLevel(13);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 140000 && getExp() < 165000):
				if(getLevel() == 13)
				{
					setLevel(14);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 165000 && getExp() < 195000):
				if(getLevel() == 14)
				{
					setLevel(15);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 195000 && getExp() < 225000):
				if(getLevel() == 15)
				{
					setLevel(16);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 225000 && getExp() < 265000):
				if(getLevel() == 16)
				{
					setLevel(17);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 265000 && getExp() < 305000):
				if(getLevel() == 17)
				{
					setLevel(18);
					setRandUpgrade();
				}
			break;

			case (getExp() >= 305000 && getExp() < 355000):
				if(getLevel() == 18)
				{
					setLevel(19);
					setRandUpgrade();
				}
			break;

			case (getExp() < 355000):
				if(getLevel() == 19)
				{
					setLevel(20);
					setRandUpgrade();
				}
			break;

			default:
			break;
		}		

	}

	//Fix up the leveling system later
	setRandUpgrade(){
		int coin = Math.floor(Math.random() * 4)

		
		switch (coin){
			case 0: setBaseHealth(getBaseHealth()+2); break;
			case 1: setBaseAttack(getBaseAttack()+2); break;
			case 2: setBaseDefense(getBaseDefense()+2); break;
			case 3: setBaseSpeed(getBaseSpeed()+2); break;
			default: break;
		}
	}

	*/
	
	//health and new health
	displayStats()
	{
		console.log(this.playerName +"\t"+ this.currentHealth +" Hp");
	}
	displayAllStats()
	{
		console.log(this.playerName +"\t"+ this.currentHealth +" / "+ this.baseHealth+" HP");
		// console.log("\nLevel: "+ this.level);
		// console.log("\nExp: "+ this.exp );
		// console.log("\nRace: " + race);
		// console.log("\nClass: " + myClass);
		console.log("\nAttack: "+ this.currentAttack +" / "+ this.baseAttack) ;
		console.log("\nDefense: "+ this.currentDefense +" / "+ this.baseDefense);
		console.log("\nSpeed: "+ this.currentSpeed  +" / "+ this.baseSpeed);
		console.log("\nCurrency: "+ this.currency);
	}

}