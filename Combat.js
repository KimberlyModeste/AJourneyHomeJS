class Combat{
	// string will be equal to move option to be compared during combat phase
	// options will be A for attack M for magic and D for defend
	playersMove;
	enemyMove;
	cUser = Player.getInstance();
	cMonster;

	Combat(){}
	
	async startCombat(monster){ 
		this.cMonster = monster;
		do 
		{
			await this.combatPhase(this.playersMove,  this.enemyMove);
			console.log("\n")

		}while(!this.deathCheck(this.cMonster.getHealth()) && !this.deathCheck(this.cUser.getCurrentHealth()));
	}

	deathCheck(deathHealth) {
		if (deathHealth <= 0)
			return true;// if true player or monster returns a bool saying he has died
		else
			return false;// if false player or monster returns a bool saying they are still alive
	}

	async deathOfPlayer(death)  {
		if (death == true) {
			await charText("\nSo this is it, you have died. You put up a worthy fight, but sometimes "
					+ "that's just not \nenough. On the bright side it's a game you can try again.\n", 50);
			user.setIsDone(true)
		}
	}

	async deathOfMonster(death)  {
		if (death == true) {
			await charText("\n"+"You have defeated " + this.cMonster.getType()+"!\n");
			if (this.cMonster.isMedal() == true) {
				this.cUser.setMedals(this.cMonster.getType());
			}
			this.cUser.setCurrency(this.cMonster.getWorth());
			await charText("You have earned " + this.cMonster.getWorth() + " Currency! You have " + this.cUser.getCurrency() + " Currency!\n");//currency
			this.cUser.setMagic(1);
			this.cMonster.setMagic(1);
			// set up what happens after a fight
		}
	}

	maxHealthCheck(HcHealth) {
		if (HcHealth > this.cUser.getBaseHealth())// if current health is greater than max
			return this.cUser.getBaseHealth();// return max
		else
			return HcHealth;// else return current
	}

	async castMagicPlayer()  {
		let number = Math.floor(Math.random() * 3);// pick a number for a spell
		let combatHealth;
		if (number == 0) {
			combatHealth = this.cMonster.getHealth();
			combatHealth = combatHealth - this.cUser.getMagic();// take the magic level of player during current fight and
															// hit for that much damage
			this.cMonster.setHealth(combatHealth);
			await charText("You shot a fireball that hit for " + this.cUser.getMagic() + " damage!\n");
			await this.deathOfMonster(this.deathCheck(combatHealth));// find out if monster died to the hit to end the fight and
														// continue with the game
		} else if (number == 1) {
			combatHealth = this.cUser.getCurrentHealth();
			combatHealth = combatHealth + this.cUser.getMagic();// heals player for mount equal to their magic stat
			combatHealth = this.maxHealthCheck(combatHealth);// if health is higher than max health set to max
			this.cUser.setCurrentHealth(combatHealth);
			await charText("You cast a defensive spell that combines a barrier and a cure!\n");
		} else if (number == 2) {
			this.cUser.setMagic(this.cUser.getMagic() + 1);// increase magic stat by 1
			await charText("You experience a surge of power that makes you feel more attune to your magic!\n");
			await charText("Magic power level " + this.cUser.getMagic()+"\n");
		}
	}

	async castMagicMonster()  {
		let combatHealth;
		let number = Math.floor(Math.random() * 3);// pick a number for a spell
		if (number == 0) {
			combatHealth = this.cUser.getCurrentHealth();
			combatHealth = combatHealth - this.cMonster.getMagic();// take the magic level of player during current fight and
																// hit for that much damage
			this.cUser.setCurrentHealth(combatHealth);
			await charText(this.cMonster.getType() + " struck you with lighting for " + this.cMonster.getMagic() + " damage!\n");
			await this.deathOfPlayer(this.deathCheck(combatHealth));// find out if monster died to the hit to end the fight and
														// continue with the game
		} else if (number == 1) {
			combatHealth = this.cMonster.getHealth();
			combatHealth = combatHealth + 1;// monster heals 1 always from magic due to no health ceiling on it
			this.cMonster.setHealth(combatHealth);
			await charText(this.cMonster.getType() + " gained 1 health by drinking a potion!\n");
		} else if (number == 2) {
			this.cMonster.setMagic(this.cUser.getMagic() + 1); // increase magic stat by 1
			await charText(this.cMonster.getType() + " powers up with a mystical power!\n");
			await charText("Magic power level " + this.cMonster.getMagic()+"\n");
		}
	}

	async hitPlayer()  {
		let combatHealth;
		combatHealth = this.cUser.getCurrentHealth(); // take current health
		combatHealth = combatHealth - this.cMonster.getAttack();// subtract monsters attack for damage output
		this.cUser.setCurrentHealth(combatHealth); // set equal to players health to save current health
		await charText(this.cMonster.getType() + " strikes you with a physical attack that deals " + this.cMonster.getAttack()
				+ " damage!\n");
		// find out if player died to the hit to end the game
		await this.deathOfPlayer(this.deathCheck(combatHealth));// find out if player died to the hit to end the game
	}

	// same logic as above but for monster
	async hitMonster()  {
		let combatHealth;
		combatHealth = this.cMonster.getHealth();
		combatHealth = combatHealth - (this.cUser.getCurrentAttack()+1);// deal damage equal to the players attack stat
		this.cMonster.setHealth(combatHealth);
		await charText("You strike with your sword and deal " + (this.cUser.getCurrentAttack()+1) + " damage!\n");
		await this.deathOfMonster(this.deathCheck(combatHealth));// find out if monster died to the hit to end the fight and continue
													// with the game
	}

	async drawAttack()  {
		let combatHealth;
		let enemyCombatHealth;
		await charText("You and " + this.cMonster.getType() + " both swing wildly, clacking weapons and as they "
				+ "ricochet off each other!\nYou both get hit by your own weapons taking 1 damage!\n");
		
		combatHealth = this.cUser.getCurrentHealth(); // take current health
		combatHealth = combatHealth - 1;// remove 1 health for attack tie
		this.cUser.setCurrentHealth(combatHealth);
		enemyCombatHealth = this.cMonster.getHealth(); // take current health
		enemyCombatHealth = enemyCombatHealth - 1;// remove 1 health for attack tie
		this.cMonster.setHealth(enemyCombatHealth);
		await this.deathOfPlayer(this.deathCheck(combatHealth));
		await this.deathOfMonster(this.deathCheck(enemyCombatHealth));// find out if monster died to the hit to end the fight and
														// continue
		// with the game
		
	}
	async drawMagic()  {

		await this.castMagicPlayer();// player uses their spell
		if(this.deathCheck(this.cMonster.getHealth())==false) {
		await this.castMagicMonster();// monster uses their spell
		await charText("Good thing those spells did not intertwine,\n "
				+ "legend has it that when spell collide both casters will be shape shifted! \n");}
	}
	async drawDefense()  {
		let combatHealth;
		let enemyCombatHealth;
		combatHealth = this.cUser.getCurrentHealth(); // take current health
		combatHealth = combatHealth + 1;// add 1 health for defense tie
		combatHealth = this.maxHealthCheck(combatHealth);// if health is higher than max health set to max
		this.cUser.setCurrentHealth(combatHealth);
		enemyCombatHealth = this.cMonster.getHealth(); // take current health
		enemyCombatHealth = enemyCombatHealth + 1;// add 1 health for defense tie
		this.cMonster.setHealth(enemyCombatHealth);
		await charText("What? Are you both too scared to attack? This fight can't end till some one attacks!\n");

	}

	async defenseOfPlayer()  {
		let defenseDiffrence = this.cUser.getCurrentDefense() - this.cMonster.getAttack();// find out difference between players
		let combatHealth;															// defense and enemies attack
		combatHealth = this.cUser.getCurrentHealth();
		if (defenseDiffrence <= 0)// if the difference is 0 or less then don't include in math
		{
			combatHealth = combatHealth + 1;
			combatHealth = this.maxHealthCheck(combatHealth);// if health is higher than max health set to max
			this.cUser.setCurrentHealth(combatHealth);

		} else// add the difference to the math as they earned more health recovery;
		{
			combatHealth = combatHealth + 1 + defenseDiffrence;
			combatHealth = this.maxHealthCheck(combatHealth);// if health is higher than max health set to max
			this.cUser.setCurrentHealth(combatHealth);
		}
		await charText("You have countered their attack and had enough time to heal your wound!\n");
	}

	async defenseOfMonster()  {
		await charText(this.cMonster.getType()+" has stopped your attack with ease, you should be scared how simple that was for them!\n");
	}

	async combatPhase(playerMove, enemyMove)  {
		
		await charText("It's time to fight your opponent"+"\n");
		await this.cMonster.displayMonsterStats();
		
		console.log("\n")
		await charText("Type A for attack, M for magic, D for defense, or S for your stats(THIS IS CAP SENSITIVE)");

		enemyMove = 1 + Math.floor(Math.random() * 3);// pick monsters move
		
		for (let i = 0; i < 1; i--)
		{
			await waitForEnter()
			playerMove = getUserInput()
			if (playerMove.charAt(0) == 'A' || playerMove.charAt(0) == 'M' || playerMove.charAt(0) == 'D' || playerMove.charAt(0) == 'S') {
				i=2;
			}
			else
			{
				console.log("\n")
				await charText("Type A for attack, M for magic, D for defense, or S for your stats(THIS IS CAP SENSITIVE)");
			}
		}
		console.log('\n')
		console.log('\n')
		
		
		if (playerMove.charAt(0) == 'A' && enemyMove == 1)// attack draw
		{
			await this.drawAttack();
			await this.cUser.displayStats();// display health
		}

		else if (playerMove.charAt(0) == 'M' && enemyMove == 2)// magic draw
		{
			await this.drawMagic();
			await this.cUser.displayStats();// display health
		}

		else if (playerMove.charAt(0) == 'D' && enemyMove == 3)// defense draw
		{
			await this.drawDefense();
			await this.cUser.displayStats();// display health
		}

		else if (playerMove.charAt(0) == 'A' && enemyMove == 2)// attack the monster
		{
			await this.hitMonster();
			await this.cUser.displayStats();// display health
		}

		else if (playerMove.charAt(0) == 'M' && enemyMove == 1)// attack the player
		{
			await this.hitPlayer();
			await this.cUser.displayStats();// display health
		} 
		else if (playerMove.charAt(0) == 'D' && enemyMove == 1)// player defends
		{
			await this.defenseOfPlayer();
			await this.cUser.displayStats();// display health
		} 
		else if (playerMove.charAt(0) == 'A' && enemyMove == 3)// monster defends
		{
			await this.defenseOfMonster();
			await this.cUser.displayStats();// display health

		} 
		else if (playerMove.charAt(0) == 'M' && enemyMove == 3)// magic cast by player
		{
			await this.castMagicPlayer();
			await this.cUser.displayStats();// display health
		} 
		else if (playerMove.charAt(0) == 'D' && enemyMove == 2)// magic cast by monster
		{
			await this.castMagicMonster();
			await this.cUser.displayStats();// display health
		} 
		else if (playerMove.charAt(0) == 'S') 
		{
			await this.cUser.displayAllStats();
		}

	}
}