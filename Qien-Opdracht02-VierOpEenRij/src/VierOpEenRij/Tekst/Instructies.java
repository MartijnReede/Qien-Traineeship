package VierOpEenRij.Tekst;

public class Instructies {
	
	private String instructies;
	
	public Instructies() {
		this.instructies = 
				"***************************************************************\n" +
			    "***************** WELKOM BIJ VIER OP EEN RIJ! *****************\n" +
				"***************************************************************\n\n" +
			    
				"INSTRUCTIES:\n\n" +
				
				"1. Probeer je tegenstander te verslaan door als eerste vier \n" +
				"   stenen van dezelfde kleur op een rij te krijgen. Dit kan \n" +
				"   horizontaal, verticaal of diagonaal.\n\n" +
				
				"2. De spelers mogen om de beurt een steen in het spelbord \n" +
				"   gooien. De computer bepaald welke speler mag beginnen.\n\n" +
				
				"VOER 'n' IN VOOR EEN NIEUW SPEL.\n" +
				"VOER 'q' IN OM HET SPEL AF TE SLUITEN.\n\n" +
				"Invoer: ";
	}
	
	public String getInstructies() {
		return instructies;
	}
	
}
