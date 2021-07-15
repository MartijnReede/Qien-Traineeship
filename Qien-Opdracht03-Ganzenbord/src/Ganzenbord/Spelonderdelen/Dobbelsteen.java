package Ganzenbord.Spelonderdelen;

import java.util.Random;

public class Dobbelsteen {
	
	public int gooiDeDobbelsteen() {
		Random rand = new Random();
		return rand.nextInt(6) + 1;
	}
	
}
