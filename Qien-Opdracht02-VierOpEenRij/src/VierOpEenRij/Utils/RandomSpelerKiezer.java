package VierOpEenRij.Utils;

import java.util.Random;

public class RandomSpelerKiezer {
	
	public int kiesEenRandomSpeler() {

		Random rand = new Random(); 
		int speler = rand.nextInt(2);
		return speler;
	}
	
	
}
