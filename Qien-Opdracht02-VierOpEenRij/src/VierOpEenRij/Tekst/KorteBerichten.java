package VierOpEenRij.Tekst;

public class KorteBerichten {
	
	private String wilJeHetSpelAfsluiten;
	private String nieuwSpelGestart;
	
	public KorteBerichten() {
		this.wilJeHetSpelAfsluiten = 
				"\nWeet je zeker dat je Vier op een Rij wilt afsluiten?\n\n" +
				
				"VOER 'j' IN VOOR JA.\n" +
				"VOER 'n' IN VOOR NEE.\n\n" +
				
				"Invoer: ";		
		this.nieuwSpelGestart = 
				"**************************************************************\n" +
				"********************* NIEW SPEL GESTART! *********************\n" +
				"**************************************************************";
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
	
	public String getBerichtVerkeerdeInvoerOfKolomIsVol(String invoer) {
		return "\nEr kan geen steen gegooid worden in kolom: " + "'" + invoer + "'. Kijk goed naar \n" +
				"welke kolommen nog beschikbaar zijn en voer nogmaals een keuze in.\n\n" +
				"Invoer: ";
	}
	
	public String getWilJeHetSpelAfsluiten() {
		return wilJeHetSpelAfsluiten;
	}
	
	public String getNieuwSpelGestart() {
		return nieuwSpelGestart;
	}
}
