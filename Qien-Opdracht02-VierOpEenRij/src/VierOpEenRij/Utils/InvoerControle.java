package VierOpEenRij.Utils;

public class InvoerControle {

	
	public boolean controleerInvoer(String invoer, String mogelijkeOpties) {
		
		if (invoer.length() == 1 && mogelijkeOpties.contains(invoer)) return true;
		else return false;
	}
	
	public boolean controleerInvoerEnOfSteenGespeeldKanWorden(char[][] spelbord, String invoer, String mogelijkeOpties) {
		
		if (invoer.length() != 1) return false;
		else if (!mogelijkeOpties.contains(invoer)) return false;
		
		boolean isDeKolomBeschikbaar = false;
		
		if (invoer.equals("a")) {
			if (spelbord[1][1] == '\u0000') isDeKolomBeschikbaar = true;
		} else if (invoer.equals("b")) {
			if (spelbord[1][3] == '\u0000') isDeKolomBeschikbaar = true;
		} else if (invoer.equals("c")) {
			if (spelbord[1][5] == '\u0000') isDeKolomBeschikbaar = true;
		} else if (invoer.equals("d")) {
			if (spelbord[1][7] == '\u0000') isDeKolomBeschikbaar = true;
		} else if (invoer.equals("e")) {
			if (spelbord[1][9] == '\u0000') isDeKolomBeschikbaar = true;
		} else if (invoer.equals("f")) {
			if (spelbord[1][11] == '\u0000') isDeKolomBeschikbaar = true;
		} else if (invoer.equals("g")) {
			if (spelbord[1][13] == '\u0000') isDeKolomBeschikbaar = true;
		}
		
		if (!isDeKolomBeschikbaar) return false;
		else return true;		
	}
}
