package Ganzenbord;

import Ganzenbord.GameRunner.GameRunner;

public class Main {

	public static void main(String[] args) {
	
		boolean nieuwSpel = true;
		
		while (nieuwSpel) {
			GameRunner gameRunner = new GameRunner();
			nieuwSpel = gameRunner.nieuwSpel();
		}
		
		System.out.println("\nHet spel wordt afgesloten, tot ziens!");
	}
	
}
