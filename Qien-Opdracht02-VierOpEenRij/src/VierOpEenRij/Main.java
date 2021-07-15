package VierOpEenRij;

import VierOpEenRij.GameRunner.GameRunner;

public class Main {

	public static void main(String[] args) {
	
		boolean nieuwSpel = true;
		
		while (nieuwSpel) {
			GameRunner gameRunner = new GameRunner();
			nieuwSpel = gameRunner.nieuwSpel();
		}
		
		System.out.println("Het spel wordt afgesloten, tot ziens!");
	}
}
