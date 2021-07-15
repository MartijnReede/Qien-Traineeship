package Mastermind.Text;

public class Instructions {
	
	private String instructions;
	
	public Instructions() {
		this.instructions =
				"\n*********************************************************************\n" +
				"*********************** WELCOME TO MASTERMIND ***********************\n" +
				"*********************************************************************\n\n" +		
				
				"GOAL OF THE GAME:\n\n" +
				
				"Try to break the secret code in the fewest possible number of attempts.\n\n" +
				
				"INSTRUCTIONS:\n\n" +
				
				"1. The secret code is a combination of four different letters: a, b, c, \n" +
				"   d, e or f. It may contain duplicates.\n\n" +
		
				"2. On each turn, the player has to give an input of four letters.\n\n" +
				
				"3. For each attempt of guessing the code, the player will receive\n" +
				"   feedback in the form of two numbers. The first number represents \n" +
				"   the amount of correct letters positioned on the right spot. The\n" +
				"   second number represents the amount of correct letters that are NOT\n" +
				"   placed on the right spot.\n\n" +
				
				"EXAMPLE:\n\n" +
				
				"Secret code: 	eeaf\n" +
				"player's guess: egea\n\n" +
			
				"Amount of correct letters on the right spot: 1.\n" +
				"Amount of correct letters on the wrong spot: 2.\n\n" +
				
				"ENTER " + '"' + "n" + '"' + " FOR NEW GAME. \n" +
				"ENTER " + '"' + "q" + '"' + " FOR QUIT GAME. \n\n" +
				"Input: ";
	}
	
	public String getInstructions() {
		return instructions;
	}
	
}
