package Mastermind;

import Mastermind.GameRunner.GameRunner;

public class Main {
	
	public static void main(String[] args) {
		
		String runNewGame = "";
		
		while (!runNewGame.equals("q")) {
			GameRunner newGame = new GameRunner();
			runNewGame = newGame.newGame().toLowerCase();
		}
		
		System.out.println("\nQuitting Mastermind, thanks for playing!");
	}
}
