async function waitForEnter() {
	await listenForEnter();
}

function listenForEnter(){
	return new Promise((resolve) => {
		uinput = document.getElementById("cmd")
		document.addEventListener('keypress', onKeyHandler);
		function onKeyHandler(e) {
			if (e.key === 'Enter') {
				document.removeEventListener('keypress', onKeyHandler);
				resolve();
			}
		}
	});
}


function mySetTimeout(c, time){
	return new Promise(resolve =>{
		setTimeout(()=>{resolve()}, time)
		console.log(c)
	})
}

async function charText(sentence, time){
	let pause = time * 4
	for(let i = 0; i < sentence.length; i++)
	{	
		if(sentence.charAt(i) === '.' || sentence.charAt(i) === ',' || sentence.charAt(i) === '?' || sentence.charAt(i) === '!' )
		{
			await mySetTimeout(sentence.charAt(i), pause)
		}
		else
		{
			await mySetTimeout(sentence.charAt(i), time)
		}
	}
}

function getUserInput() {
	return document.getElementById('myInput').innerHTML
}
//console.log(document.getElementById('myInput').innerHTML)
async function JourneyHome(){

	let user = Player.getInstance();
	let monster = null;
	let combat = null
	let event = null;
	
	await waitForEnter()
	console.log('\n')
	await charText('You wake up to find yourself in an unfamiliar place. Where are you? WHO are you? \nWhat is your name?', 100)
	await waitForEnter()
	if(getUserInput() != "")
	{
		user.setPlayerName(getUserInput())
	}
	console.log('\n')
	await charText(user.getPlayerName() + '. Your name is ' + user.getPlayerName() + '. Remembering, you sigh a breath of relief, ' + 'but you still don\'t\nknow where you are. Find your way home.', 100);
	console.log(' [Press Enter to Continue]')
	do{
		await waitForEnter()
		if(!getUserInput())
		{
			event = new Event();
			await event.startUp();

			if(event.thisIsAmbushed())
			{
				console.log('\n')
				monster = event.getMonster()
				event.setAmbushed(false)
				combat = new Combat()
				await combat.startCombat(monster)
			}
			if(user.getCurrency()>=50000)
			{
				let randNum = Math.floor(Math.random() * 4);
				if (randNum == 3)
				{
					console.log("\n")
					await charText("You've saved up quite a bit of money! Maybe you can buy a house! Do you want to buy "+
					"\na house? [Y] [N]", 50)
					
					await waitForEnter()
					if(getUserInput().charAt(0) == 'Y'|| getUserInput().charAt(0) == 'y')
					{
						user.setCurrency(user.getCurrency()-50000)
						console.log('\n')
						await charText("You've bought a house and found your own home!\nCongratulations on getting the good ending 1 of 2!", 50)

						user.setIsDone(true)
					}
					
					else
					{
						console.log("\n")
						await charText("Oh, that's unfortunate. Next time maybe!", 50);
					}
				}
			}
			else if(user.getMedalCounter()>=3)
			{
				let randNum = Math.floor(Math.random() * 4);
				if (randNum == 3)
				{
					user.medalWin();		
					user.setIsDone(true)
				}
			}
		}
		else{
			if (getUserInput().charAt(0) === 'S' || getUserInput().charAt(0) === 's')
			{
				user.displayAllStats();
			}
		}
		console.log('\n')
		console.log(" [Press Enter to Continue]");

	}while(!user.getIsDone())

	console.log("[Restart the Page to Play Again!]")
}
