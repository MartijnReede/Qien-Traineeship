package Mastermind.GameRunner;

import java.util.Scanner;

import Mastermind.Text.Instructions;
import Mastermind.Text.ShortMessages;
import Mastermind.Utils.FeedbackOnGuessGenerator;
import Mastermind.Utils.InputChecker;
import Mastermind.Utils.SecretCodeGenerator;

public class GameRunner {
	
	private Instructions instructions;
	private ShortMessages shortMessages;
	private InputChecker inputChecker;
	private Scanner scanner;
	private String input;
	private SecretCodeGenerator secretCodeGenerator;
	private FeedbackOnGuessGenerator feedbackOnGuessGenerator;
	private String code;
	private boolean gameWon = false;
	private int amountOfGuesses = 0;
	
	
	public GameRunner() {
		instructions = new Instructions();
		shortMessages = new ShortMessages();
		scanner = new Scanner(System.in);
		inputChecker = new InputChecker();
		secretCodeGenerator = new SecretCodeGenerator();
		feedbackOnGuessGenerator = new FeedbackOnGuessGenerator();
	}
	
	public String newGame() {
		
		//SHOWING MAIN MENU AND GAME INSTRUCTIONS
		
		System.out.print(instructions.getInstructions());
		input = scanner.nextLine().toLowerCase();
		
		while (inputChecker.checkOptionInput(input, "qn") == false) {
			System.out.print(shortMessages.getWrongOptionMessage(input));
			input = scanner.nextLine().toLowerCase();
		}
		
		// CHECKS IF THE PLAYER REALY WANTS TO QUIT MASTERMIND
		
		if (input.equals("q")) {
			
			System.out.print(shortMessages.getAreYouSureToQuit());
			input = scanner.nextLine().toLowerCase();
			
			while (inputChecker.checkOptionInput(input, "yn") == false) {
				System.out.print(shortMessages.getWrongOptionMessage(input));
				input = scanner.nextLine().toLowerCase();
			}
			
			if (input.equals("y")) return "q";
			else return "";
			
		} else {
			
			// STARTS A NEW GAME
			
			System.out.println("\n**********************************************************");
			System.out.println("******************** Loading new game ********************");
			sleep();
			System.out.println("***************** Generating secret code *****************");
			code = secretCodeGenerator.generateSecretCode();
			sleep();
			System.out.println("************************ START!!! ************************");
			System.out.println("**********************************************************\n\n");
			
			System.out.print(shortMessages.getGameplayInputInstructions());
			
			while (!gameWon) {
				
				System.out.print("Input: ");
				input = scanner.nextLine().toLowerCase();
				
				while (inputChecker.checkCodeInput(input, "abcdef") == false) {
					System.out.print(shortMessages.getWrongCodeInputMessage(input));
					input = scanner.nextLine().toLowerCase();
				}
				
				// WHEN PLAYER CHOOSES TO QUIT THE CURRENT GAME
				
				if (input.equals("q")) {
					System.out.print(shortMessages.getAreYouSureToQuitCurrentGame());
					input = scanner.nextLine().toLowerCase();
					
					while (inputChecker.checkOptionInput(input, "yn") == false) {
						System.out.print(shortMessages.getWrongOptionMessage(input));
						input = scanner.nextLine().toLowerCase();
					}
					
					if (input.equals("y")) return "";
					else System.out.println("\nThe game continues...\n");
				
				// WHEN PLAYER TAKES A GUESS
					
				} else {
					
					amountOfGuesses ++;
					
					// WHEN PLAYER WINS
					
					if (code.equals(input)) {
						System.out.println(shortMessages.getWinningMessage(amountOfGuesses));
						input = scanner.nextLine();
						return "";
					
					// WHEN PLAYER DOESN'T WIN
					
					} else {
						
						int[] feedback = feedbackOnGuessGenerator.getFeedbackOnGuess(input, code);
						System.out.println("\nAmount of guesses: " + amountOfGuesses);
						System.out.println("Amount of correct letters on the correct position: " + feedback[0] + ".");
						System.out.println("Amount of correct letters on the wrong position:   " + feedback[1] + ".\n");

					}
				}
			}
		}
		return "";
	}
	
	public void sleep() {
		try {
			Thread.sleep(1000);
		} catch (Exception e) {
			
		}
	}
}
