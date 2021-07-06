package Mastermind.Text;

public class Instructions {
	
	private String instructions;
	
	public Instructions() {
		this.instructions =
				"\n*********************************************************\n" +
				"***************** WELCOME TO MASTERMIND *****************\n" +
				"*********************************************************\n\n" +		
				
				"GOAL OF THE GAME:\n\n" +
				
				"Try to break the secret code in the fewest number of\n" +
				"guesses.\n\n" +
				
				"INSTRUCTIONS:\n\n" +
				
				"1. The secret code is a combination of four different \n" +
				"   letters: a, b, c, d, e or f. It may contain duplicates.\n\n" +
		
				"2. The game is won if the player guesses the right \n" +
				"   combination in the right order.\n\n"+
		
				"3. On each turn, the player has to give an input of four\n" +
				"   letters.\n\n" +
				
				"4. The computer can only give one type of feedback per\n" +
				"   letter in the player's guess.\n\n" +
				
				"ENTER " + '"' + "n" + '"' + " FOR NEW GAME. \n" +
				"ENTER " + '"' + "q" + '"' + " FOR QUIT GAME. \n\n" +
				"Input: ";
	}
	
	public String getInstructions() {
		return instructions;
	}
	
}
