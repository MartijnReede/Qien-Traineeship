package Ganzenbord.Tekst;

public class Berichten {
	
	private String welkomstmenu;
	private String wilJeHetSpelAfsluiten;
	private String vraagHetAantalSpelers;
	private String vraagWelkeMoeilijkheidsgraad;
	private String geenActieveSpeler;
	
	public Berichten() {
		this.welkomstmenu = 
				"**************************************************************************************\n" +
				"***************************** WELKOM BIJ HET GANZENBORD! *****************************\n" +
				"**************************************************************************************\n" +
				"                                                       ___\n"
				+ "                                                   ,-\"\"   `.\n"
				+ "                                                 ,'  _   e )`-._\n"
				+ "                                                /  ,' `-._<.===-'\n"
				+ "                                               /  /\n"
				+ "                                              /  ;\n"
				+ "                                  _.--.__    /   ;\n"
				+ "                     (`._    _.-\"\"       \"--'    |\n"
				+ "                     <_  `-\"\"                     \\\n"
				+ "                      <`-                          :\n"
				+ "                       (__   <__.                  ;\n"
				+ "                         `-.   '-.__.      _.'    /\n"
				+ "                            \\      `-.__,-'    _,'\n"
				+ "                             `._    ,    /__,-'\n"
				+ "                                \"\"._\\__,'< <____\n"
				+ "                                     | |  `----.`.\n"
				+ "                                     | |        \\ `.\n"
				+ "                                     ; |___      \\-``\n"
				+ "                                     \\   --<\n"
				+ "                                      `.`.<\n"
				+ "                                        `-'\n\n" +
				"VOER 'i' IN VOOR DE INSTRUCTIES.\n" +
				"VOER 'n' IN VOOR NIEUW SPEL.\n" +
				"VOER 'q' IN OM HET GANZENBORD AF TE SLUITEN.\n\n" +
				"Invoer: ";
		
		this.wilJeHetSpelAfsluiten =  
				"\nWeet je zeker dat je Ganzenbord wilt afsluiten?\n\n" +
				
				"VOER 'j' IN VOOR JA.\n" +
				"VOER 'n' IN VOOR NEE.\n\n" +
				
				"Invoer: ";	
		
		this.vraagWelkeMoeilijkheidsgraad = 
				"\nWelke moeilijkheidsgraad is gewenst?\n\n" +
				"VOER '1' IN VOOR MAKKELIJK.\n" +
				"VOER '2' IN VOOR MIDDELMATIG.\n" +
				"VOER '3' IN VOOR MOEILIJK.\n\n" +
				"Invoer: ";
		
		this.vraagHetAantalSpelers =
				"\nVOER HET AANTAL SPELERS IN (1 - 6).\n\n" +
				"Invoer: ";
		
		this.geenActieveSpeler = 
				"\nHet spel is afgelopen! Iedere speler is uitgeschakeld en er is geen winnaar.\n\n" +
				"DRUK OP ENTER OM TERUG TE GAAN NAAR HET HOOFDMENU.";
	}
	
	public String getBerichtVerkeerdeInvoer(String invoer, String opties) {
		
		String optiesUitgeschreven = "";
		
		for (int i = 0; i < opties.length(); i++) {
			optiesUitgeschreven += "'" + Character.toString(opties.charAt(i)) + "'";
			if (i < opties.length() - 1) optiesUitgeschreven += ", ";
		}
		
		return "\n" + "'" + invoer + "'" + " is geen mogelijke keuze, voer nogmaals een keuze in.\n"
				+ "Er kan gekozen worden uit: " + optiesUitgeschreven + ".\n\n" +
				"Invoer: ";
	}
	
	public String getGeenNaamIngevuld(int spelerNummer) {
		return "\nSpeler " + spelerNummer + " heeft geen naam ingevoerd.\n\n" +
			   "VOER DE NAAM IN VAN SPELER " + spelerNummer + ".\n\n" +
			   "Invoer: ";
	}
	
	public String getWelkomstmenu() {
		return welkomstmenu;
	}
	
	public String getWilJeHetSpelAfsluiten() {
		return wilJeHetSpelAfsluiten;
	}
	
	public String getVraagHetAantalSpelers() {
		return vraagHetAantalSpelers;
	}
	
	public String getVraagWelkeMoeilijkheidsgraad() {
		return vraagWelkeMoeilijkheidsgraad;
	}
	
	public String getGeenActieveSpeler() {
		return geenActieveSpeler;
	}
}
