var card;
var skillflag = 0;

function keyReleased(){
	noStroke();
	switch(keyCode)
	{
		case 48:
			card = new card0;
			skillflag = 1;
			break;

		case 49:
			card = new card1;
			skillflag = 1;
			break;

		case 50:
			card = new card2;
			skillflag = 1;
			break;

		case 51:
			card = new card3;
			skillflag = 1;
			break;

		case 52:
			card = new card4;
			skillflag = 1;
			break;
		
		case 53:
			card = new card5;
			skillflag = 1;
			break;

		case 54:
			card = new card6;
			skillflag = 1;
			break;

		case 55:
			card = new card7;
			skillflag = 1;
			break;

		case 56:
			card = new card11;
			skillflag = 1;
			break;

		case 57:
			card = new card13;
			skillflag = 1;
			break;

		case 81:
			card14();
			break;
	
	}
}

function skillRun(){
	if (skillflag == 1) {
		card.run();
	}
}