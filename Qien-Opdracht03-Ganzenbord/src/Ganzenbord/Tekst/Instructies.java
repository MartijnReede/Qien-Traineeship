package Ganzenbord.Tekst;

public class Instructies {
	
	private String instructies;
	
	public Instructies() {
		this.instructies = 
				"\n************************************* INSTRUCTIES *************************************\n\n" +
				
				"ALGEMEEN:\n\n" +
				"Bereik (als eerste) de finish om het spel te winnen. De finish is plaats 63 op het bord.\n" +
				"Elke speler start op plaats 1. Om beurten mag de dobbelsteen gegooid worden. Het aantal \n" +
				"gegooide ogen mag de speler aan plaatsen vooruit. Sommige plaatsen hebben speciale\n" +
				"eigenschappen, deze staan hieronder beschreven en verschillen per moeilijkheidsgraad.\n\n" +

				"MAKKELIJK:\n\n" +
				"- 23, gevangenis: De speler mag niet meer meespelen.\n" +
				"- 25 en 45: Ga terug naar start.\n" +
				"- 10, 20, 30, 40, 50 en 60: Het aantal gegooide ogen mag nogmaals vooruit gelopen worden.\n" +
				"- 63, finish: De speler die deze plaats bereikt heeft gewonnen. Het is toegestaan om hoger\n" +
				"  dan 63 uit te komen.\n\n" +
				
				"MIDDELMATIG:\n\n" +
				"- Om te winnen moet de speler precies op plaats 63 uitkomen. De speler moet teruglopen\n" +
				"  vanaf plaats 63 als hij/zij niet precies uitkomt.\n" +
				"- De eigenschappen van de plaatsen zijn hetzelfde als bij het makkelijke niveau.\n\n" +
				
				"MOEILIJK\n\n" +
				"- 6, brug: Ga verder naar plaats 12.\n" +
				"- 19, herberg: Sla een beurt over.\n" +
				"- 31, put: Wie hier komt moet er blijven tot een andere speler passeert om bevrijd te\n" +
				"  worden. De bevrijde speler mag de volgende beurt weer meespelen. De speler die een\n" +
				"  andere speler bevrijdt kan op dat moment niet zelf ook in de put vallen.\n"+
				"- 42, doolhof: Ga terug naar plaats 39.\n" +
				"- 52, gevangenis: Drie beurten overslaan.\n" +
				"- 58, dood: Ga terug naar start.\n" +
				"- 63, finish: De speler die hier als eerste precies op uitkomt heeft gewonnen. De speler\n" +
				"  moet teruglopen vanaf plaats 63 als hij/zij niet precies uitkomt\n\n" +
		
				"DRUK OP ENTER OM TERUG TE GAAN NAAR HET HOOFDMENU";
	}
	
	
	public String getInstructies() {
		return instructies;
	}
}
