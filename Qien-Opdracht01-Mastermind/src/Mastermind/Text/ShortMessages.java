package Mastermind.Text;

public class ShortMessages {
	
	String areYouSureToQuit;
	String areYouSureToQuitCurrentGame;
	String gameplayInputInstructions;
	
	public ShortMessages() {
			this.areYouSureToQuit = 
					"\nAre you sure you want to quit Mastermind?\n\n" +
					"ENTER " + '"' + "y" + '"' + " FOR YES.\n" +
					"ENTER " + '"' + "n" + '"' + " FOR NO.\n\n" +
					"Input: ";
			this.areYouSureToQuitCurrentGame = 
					"\nAre you sure you want to quit this game and go back to\n" +
				    "the main menu?\n\n" +
					"ENTER " + '"' + "y" + '"' + " FOR YES.\n" +
					"ENTER " + '"' + "n" + '"' + " FOR NO.\n\n" +
					"Input: ";
			this.gameplayInputInstructions =
					"ENTER FOUR LETTERS (a, b, c, d, e, or f) TO GUESS THE CODE.\n" +
					"ENTER " + '"' + "q" + '"' + " TO GO BACK TO THE MAIN MENU.\n\n";
		}
	
	public String getWrongOptionMessage (String input) {
		return "\n" + '"' + input + '"' + " is not a correct option, please try again!\n\n" +
				"Input: ";
	}
	
	public String getWrongCodeInputMessage(String input) {
		return "\n" + '"' + input + '"' + " is not a correct input, please try again!\n" +
				gameplayInputInstructions +
				"Input: ";
	}
	
	public String getWinningMessage(int amountOfGuesses) {
		return "\n*********************************************************\n" +
			   "********************** YOU WIN !!! **********************\n" +
			   "*********************************************************\n\n" +
			   "Amount of guesses: " + amountOfGuesses + ".\n\n" +
			   "PRESS ENTER TO RETURN TO THE MAIN MENU";	    
	}
	
	public String getAreYouSureToQuitCurrentGame() {
		return areYouSureToQuitCurrentGame;
	}
	
	public String getAreYouSureToQuit() {
		return areYouSureToQuit;
	}
	
	public String getGameplayInputInstructions() {
		return gameplayInputInstructions;
	}
}
