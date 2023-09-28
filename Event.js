class Event {
	isAmbushed = false;
	hasHouse = false;
	eUser = Player.getInstance();
	monster;
	goodEvents = ["You found a chest with a good item! +1"/*something*/,"You found a potion! +1 Base Health"
			/*Change base health*/,	"You've helped a stranger and they gave you a stat buff!"/*What stat buff?*/, "A bar fight "
			+ "starts and people are placing bets, you accidentally place bets on the short kid \nand end up winning the whole pot."
			+ " Also advice for the future, dwarves don't mess around."/*Currency number*/];
	neutralEvents = ["When you weren't looking, wolves made off with your food!","You see a funny looking rock. "
			+ "You examine it real hard to find out... it's a rock! What a surprise!", "You see a shadow in the corner of your eye."
			+ " You, against reason, follow the shadow, getting yourself \nlost. You spend some time wandering to find the path again.",
			"You find yourself in a small town and someone is playing the didgeridoo. You think what if they \ndidgeri-didn't?", "You"
			+ " stop to rest for a while and when you wake you you find a Pegasus drinking from the river \nnearby. You try to get a "
			+ "closer look but you startle it and it takes off into the sky. So majestic."];
	badEvents = ["Enemy will have a health increase!" /*What damage*/, "Taken an arrow to the knee! -1 Hp"
					/*Decrease health*/, "You find a tavern and have a feast! You got food poisoning. base hp - 1"
					/*Set take away 1*/, "You see a little ball of light.... then another... and another! They're so pretty and warm "
					+ "looking. \nYou start to follow these small balls of light into the forest. You reach out to touch one and "
					+ "\nit's warm... \n\nYou find yourself weak in the forest alone, the lights dissipate... hp=1"/*Make health equal 1*/ ];
	allMonsters = ["Ork","Goblin","Skeleton","Succubus","Incubus","Mimic","Dark Knight"];
	bossEvents = ["As you settle down for a rest in Bippy village, you hear whispers of a terrible beast who \nis "
					+ "the cause of panic to the people of the village. Even the knights of this area are \nscared to take on this beast! "
					+ "For it is said that if you dare take on this creature, you will \nnever return. \nDo YOU want to risk life and limb to "
					+ "take on this task for the good of the people? [Y]/[N]", "Legend tells of a creature, that lives in the lake of Lerna. A "
					+ "creature whose said \nto be huge and have three snake like heads. That place, is close to where you stand now. "
					+ "\nWill YOU be the slayer of this creature? [Y]/[N]", "It causes the earth to shiver. A titan has awakened and it is "
					+"angry. Many innocents may \nbe harmed if the quaking of the earth continues. \nWill you take on the mantle and defeat "
					+ "this titan? [Y]/[N]"];

	async startUp(){
		let randNum = 9
		// let randNum = Math.floor(Math.random() * 13) 
		console.log('\n')
		if(randNum >= 0 && randNum <= 2)
		{
			await this.goodRNG();
		}
		
		else if(randNum >= 3&&randNum <= 5)
		{
			await this.neutralRNG();
		}
		else if (randNum >= 6 &&randNum <= 8)
		{
			await this.badRNG();
		}

		else if (randNum >= 9&&randNum <= 11) 
		{
			await this.whoAmbushed();
		}

		else
		{
			await this.bossFight();
		}
	}

	async bossFight()  
	{
		let number = this.eUser.getMedalCounter();
		if(number < 3) 
		{
			await charText(this.bossEvents[number], 50);
			await waitForEnter();
			if(getUserInput().charAt(0) == 'Y'||getUserInput().charAt(0) == 'y')
			{
				await charText("You're a brave soul "+this.eUser.getPlayerName()+"! Well, I hope you're as skillful as you are brave.", 50);
				if(number==0)
				{
					this.monster= new Monsters("Dragon");
				}
				
				else if(number==1)
				{
					this.monster= new Monsters("Hydra");
				}
				
				else if(number==2)
				{
					this.monster= new Monsters("Rock Titan");
				}
				this.isAmbushed = true;
			}
			else 
				await charText("That is probably the wisest choice. Doing something brave today means death in a few hours after all.", 50);
		}
	}

	async goodRNG() 
	{
		let number = Math.floor(Math.random() * this.goodEvents.length);
		let randExtra; 
	
		//Good item
		if (number == 0)
		{
			randExtra = Math.floor(Math.random() * 2);
			
			if(randExtra == 0)
			{	
				this.eUser.setBaseAttack(this.eUser.getBaseAttack()+1);
				await charText(this.goodEvents[number]+" Attack", 50);
			}
			
			else if(randExtra == 1)
			{	
				this.eUser.setBaseDefense(this.eUser.getBaseDefense()+1);
				await charText(this.goodEvents[number]+" Defense", 50);
			}
			
				
		}
		
		//Base health up
		else if (number == 1)
		{
			this.eUser.setBaseHealth(this.eUser.getBaseHealth()+1);
			await charText(this.goodEvents[number], 50);
		}
			
		//Stat up
		else if (number == 2)
		{
			randExtra = Math.floor(Math.random() * 3)
			if (randExtra == 0) 
			{
				this.eUser.setBaseHealth(this.eUser.getBaseHealth()+1);
				await charText(this.goodEvents[number]+" +1 Base Health", 50);
			}
			
			else if (randExtra == 1) 
			{
				this.eUser.setBaseAttack(this.eUser.getBaseAttack()+1);
				await charText(this.goodEvents[number]+" +1 Base Attack", 50);
			}
			
			else if (randExtra == 1) 
			{
				this.eUser.setBaseDefense(this.eUser.getBaseDefense()+1);
				await charText(this.goodEvents[number]+" +1 Base Defense", 50);
			}
			
		
		}
		
		//currency
		else if (number == 3)
		{
			this.eUser.setCurrency(this.eUser.getCurrency()+5000);
			await charText(this.goodEvents[number]+" +"+this.eUser.getCurrency()+" Currency", 50);
		}
			
	}

	async neutralRNG()
	{
		let number = Math.floor(Math.random() * this.neutralEvents.length);
		await charText(this.neutralEvents[number], 50);
		
	}

	async badRNG() 
	{
		let number = Math.floor(Math.random() * this.badEvents.length); 
		//Enemy Buff...
		if (number == 0)
		{
			await this.whoAmbushed();
			this.monster.setHealth(this.monster.getHealth()+1);
			console.log('\n')
		}
		
		//Arrow to knee
		else if (number == 1)
		{
			this.eUser.setCurrentHealth(this.eUser.getCurrentHealth()-1);
		}
		//Food Poisioning	
		else if (number == 2)
		{
			this.eUser.setCurrentHealth(this.eUser.getCurrentHealth()-1);
		}
		else if (number == 3)
		{
			this.eUser.setCurrentHealth(1);
		}
		await charText(this.badEvents[number], 50);
	}

	async whoAmbushed() 
	{
		let number = Math.floor(Math.random() * this.allMonsters.length);
		this.isAmbushed = true;
		this.monster = new Monsters(this.allMonsters[number]);
		await charText("Uh oh! You ran into something!", 50);
	}

	thisIsAmbushed() {
		return this.isAmbushed;
	}

	setAmbushed(isAmbushed) {
		this.isAmbushed = isAmbushed;
	}

	getMonster() {
		return this.monster;
	}
	
}