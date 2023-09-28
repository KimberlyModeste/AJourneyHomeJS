class Monsters {
type; 
mUser = Player.getInstance();
health;
attack;
defense;
speed;
xp;
magic = 1;
worth;
deathStaus = false;
medal = false;
hasMagic = false;
magictype = "Fire";



constructor(type)
	{
		switch(type)
		{
			//Not sure how to implement magic right now
			case "Dragon":
			let coin = Math.floor(Math.random() * 10)
			switch (coin){
				case 0:
				this.type = "Adult Black Dragon";
				// this.magictype = "Acid";
				this.defense = 12;
				this.health = 50;
				this.attack = 6;
				this.magic = 5;
				// this.xp = 11500;
				break;

				case 1:
				this.type = "Adult Blue Dragon";
				// this.magictype = "Lightning";
				this.defense = 8;
				this.health = 43;
				this.attack = 10;	
				this.magic = 5;
				// this.xp = 15000;
				break;

				case 2:
				this.type = "Adult Brass Dragon";
				// this.magictype = "Fire";
				this.defense = 8;
				this.health = 34;
				this.attack = 12;	
				this.magic = 5;
				// this.xp = 10000;
				break;

				case 3:
				this.type = "Adult Bronze Dragon";
				// this.magictype = "Lightning";
				this.defense = 5;
				this.health = 41;
				this.attack = 14;	
				this.magic = 5;
				// this.xp = 13000;
				break;

				case 4:
				this.type = "Adult Copper Dragon";
				// this.magictype = "Acid";
				this.defense = 9;
				this.health = 39;
				this.attack = 5;	
				this.magic = 5;
				// this.xp = 11500;
				break;

				case 5:
				this.type = "Adult Gold Dragon";
				// this.magictype = "Fire";
				this.defense = 13;
				this.health = 47;
				this.attack = 5;	
				this.magic = 5;
				// this.xp = 18000;
				break;
				
				case 6:
				this.type = "Adult Green Dragon";
				// this.magictype = "Poison";
				this.defense = 9;
				this.health = 36;
				this.attack = 8;	
				this.magic = 5;
				// this.xp = 13000;
				break;

				case 7:
				this.type = "Adult Red Dragon";
				// this.magictype = "Fire";
				this.defense = 14;
				this.health = 45;
				this.attack = 10;	
				this.magic = 5;
				// this.xp = 18000;
				break;

				case 8:
				this.type = "Adult Silver Dragon";
				// this.magictype = "Cold";
				this.defense = 8;
				this.health = 50;
				this.attack = 9;	
				this.magic = 5;
				// this.xp = 15000;
				break;

				case 9:
				this.type = "Adult White Dragon";
				// this.magictype = "Cold";
				this.defense = 8;
				this.health = 39;
				this.attack = 5;	
				this.magic = 5;
				// this.xp = 10000;
				break;

			}

			this.speed = 10;
			this.worth = 40000;
			this.medal = true;
			break;

			case "Rock Titan":
			this.type = "Stone Giant";
			this.defense = 15;
			this.health = 40;
			this.attack = 11;
			// this.xp = 2900;
			this.speed = 5;
			this.worth = 16100;
			this.medal = true;
			break;

			case "Hydra":
			this.type = "Hydra";
			this.defense = 15;
			this.health = 45;
			this.attack = 10; 
			// this.xp = 3900;
			this.speed = 15;
			this.worth = 18000;
			break;

			case "Dark Knight":
			this.type = "Dark Knight";
			// this.magictype = "Poison";
			this.defense = 15;
			this.health = 30;
			this.attack = 9; 
			this.magic = 5;
			// this.xp = 18000;
			this.speed = 5;
			this.worth = 40000;
			this.medal = true;
			break;

			case "Goblin":
			this.type = "Goblin";
			this.defense = 5;
			this.health = 7;
			this.attack = 5; 
			this.xp = 50;
			this.speed = 30;
			this.worth = 575;
			break;

			case "Succubus":
			this.type = "Succubus";
			this.defense = 15;
			this.health = 20;
			this.attack = 5; 
			this.magic = 32;
			this.xp = 1100;
			this.speed = 30;
			this.worth = 9200;
			break;

			case "Incubus":
			this.type = "Incubus";
			this.defense = 17;
			this.health = 20;
			this.attack = 5; 
			this.magic = 32;
			this.xp = 1100;
			this.speed = 30;
			this.worth = 9200;
			break;

			case "Ork":
			this.type = "Ork";
			this.defense = 13;
			this.health = 15;
			this.attack = 9; 
			this.xp = 100;
			this.speed = 30;
			this.worth = 1150;	
			break;

			case "Skeleton":
			this.type = "Skeleton";
			this.defense = 13;
			this.health = 13;
			this.attack = 5; 
			this.xp = 50;
			this.speed = 30;
			this.worth = 575;
			break;

			case "Mimic":
			this.type = "Mimic";
			this.health = this.mUser.getBaseHealth();
			this.attack =  this.mUser.getBaseAttack();
			this.defense = this.mUser.getBaseDefense();
			this.magic = this.mUser.getMagic();
			this.speed = this.mUser.getBaseSpeed();
			this.worth = 4600;
			break;

			default:
			this.type = "Banana";
			this.health = 1;
			this.attack = 0;
			this.defense = 0;
			this.worth = 50000; 
			break;
		}
			
		
	}

	/*//This is for after implemetning player levels
	constructor(type)
	{
		switch(type)
		{
			//Not sure how to implement magic right now
			case "Dragon":
			coin = Math.floor(Math.random() * 10)
			switch (coin){
				case 0:
				this.type = "Adult Black Dragon";
				this.magictype = "Acid";
				this.defense = 19;
				this.health = 195;
				this.attack = 13;	//13, 15, 17; 13+rand(3)+2 
				this.magic = 54;
				this.xp = 11500;
				break;

				case 1:
				this.type = "Adult Blue Dragon";
				this.magictype = "Lightning";
				this.defense = 19;
				this.health = 225;
				this.attack = 14;	
				this.magic = 66;
				this.xp = 15000;
				break;

				case 2:
				this.type = "Adult Brass Dragon";
				this.magictype = "Fire";
				this.defense = 18;
				this.health = 175;
				this.attack = 13;	
				this.magic = 45;
				this.xp = 10000;
				break;

				case 3:
				this.type = "Adult Bronze Dragon";
				this.magictype = "Lightning";
				this.defense = 19;
				this.health = 212;
				this.attack = 14;	
				this.magic = 66;
				this.xp = 13000;
				break;

				case 4:
				this.type = "Adult Copper Dragon";
				this.magictype = "Acid";
				this.defense = 18;
				this.health = 184;
				this.attack = 13;	
				this.magic = 54;
				this.xp = 11500;
				break;

				case 5:
				this.type = "Adult Gold Dragon";
				this.magictype = "Fire";
				this.defense = 19;
				this.health = 256;
				this.attack = 15;	
				this.magic = 66;
				this.xp = 18000;
				break;
				
				case 6:
				this.type = "Adult Green Dragon";
				this.magictype = "Poison";
				this.defense = 19;
				this.health = 207;
				this.attack = 13;	
				this.magic = 56;
				this.xp = 13000;
				break;

				case 7:
				this.type = "Adult Red Dragon";
				this.magictype = "Fire";
				this.defense = 19;
				this.health = 256;
				this.attack = 15;	
				this.magic = 63;
				this.xp = 18000;
				break;

				case 8:
				this.type = "Adult Silver Dragon";
				this.magictype = "Cold";
				this.defense = 19;
				this.health = 253;
				this.attack = 15;	
				this.magic = 58;
				this.xp = 15000;
				break;

				case 9:
				this.type = "Adult White Dragon";
				this.magictype = "Cold";
				this.defense = 18;
				this.health = 200;
				this.attack = 13;	
				this.magic = 54;
				this.xp = 10000;
				break;

			}

			this.speed = 40;
			this.worth = 40000;
			this.medal = true;
			break;

			case "Rock Titan":
			this.type = "Stone Giant";
			this.defense = 17;
			this.health = 126;
			this.attack = 19;
			this.xp = 2900;
			this.speed = 40;
			this.worth = 16100;
			this.medal = true;
			break;

			case "Hydra":
			this.type = "Hydra";
			this.defense = 15;
			this.health = 172;
			this.attack = 10; 
			this.xp = 3900;
			this.speed = 30;
			this.worth = 18000;
			break;

			case "Dark Knight":
			this.type = "Dark Knight";
			this.magictype = "Poison";
			this.defense = 20;
			this.health = 180;
			this.attack = 9; 
			this.magic = 35;
			this.xp = 18000;
			this.speed = 30;
			this.worth = 40000;
			this.medal = true;
			break;

			case "Goblin":
			this.type = "Goblin";
			this.defense = 15;
			this.health = 7;
			this.attack = 5; 
			this.xp = 50;
			this.speed = 30;
			this.worth = 575;
			break;

			case "Succubus":
			this.type = "Succubus";
			this.defense = 15;
			this.health = 66;
			this.attack = 5; 
			this.magic = 32;
			this.xp = 1100;
			this.speed = 30;
			this.worth = 9200;
			break;

			case "Incubus":
			this.type = "Incubus";
			this.defense = 17;
			this.health = 68;
			this.attack = 5; 
			this.magic = 32;
			this.xp = 1100;
			this.speed = 30;
			this.worth = 9200;
			break;

			case "Ork":
			this.type = "Ork";
			this.defense = 13;
			this.health = 15;
			this.attack = 9; 
			this.xp = 100;
			this.speed = 30;
			this.worth = 1150;	
			break;

			case "Skeleton":
			this.type = "Skeleton";
			this.defense = 13;
			this.health = 13;
			this.attack = 5; 
			this.xp = 50;
			this.speed = 30;
			this.worth = 575;
			break;

			case "Mimic":
			this.type = "Mimic";
			this.health = this.mUser.getBaseHealth();
			this.attack =  this.mUser.getBaseAttack();
			this.defense = this.mUser.getBaseDefense();
			this.magic = this.mUser.getMagic();
			this.speed = this.mUser.getBaseSpeed();
			this.worth = 4600;
			break;

			default:
			this.type = "Banana";
			this.health = 1;
			this.attack = 0;
			this.defense = 0;
			this.worth = 20; 
			break;
		}
			
		
	}*/

	getType() {
		return this.type;
	}
	getHealth() {
		return this.health;
	}
	setHealth(health) {
		this.health = health;
	}
	
	getAttack() {
		return this.attack;
	}
	setAttack(attack) {
		this.attack = attack;
	}
	
	getDefense() {
		return this.defense;
	}
	setDefense(defense) {
		this.defense = defense;
	}
	
	isDeathStaus() {
		return this.deathStaus;
	}
	setDeathStaus(deathStaus) {
		this.deathStaus = deathStaus;
	}

	isMedal() {
		return this.medal;
	}

	async displayMonsterStats()
	{
		console.log("\n")
		await charText(this.type +"\t"+ this.health +" HP");
	}

	getWorth() {
		return this.worth;
	}
	
	getMagic() {
		return this.magic;
	}
	setMagic(magic) {
		this.magic = magic;
	}

	getHasMagic() {
		return this.hasMagic;
	}
	setHasMagic(hasMagic) {
		this.hasMagic = hasMagic;
	}

	getMagictype() {
		return this.magictype;
	}
	setMagictype(magictype) {
		this.magictype = magictype;
	}
}