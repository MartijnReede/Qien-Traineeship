package Mastermind;

import Mastermind.GameRunner.GameRunner;

public class Main {
	
	public static void main(String[] args) {
		
		boolean runNewGame = true;
		
		while (runNewGame) {
			GameRunner newGame = new GameRunner();
			runNewGame = newGame.newGame();
		}
		
		System.out.println("\nQuitting Mastermind, thanks for playing!");
	}
}
