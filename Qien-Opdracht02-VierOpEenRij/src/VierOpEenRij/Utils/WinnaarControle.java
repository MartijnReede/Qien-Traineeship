package VierOpEenRij.Utils;

public class WinnaarControle {
	
	private int zoekDezelfdeSteenRijPos;
	private int zoekDezelfdeSteenKolomPos;
	
	public boolean isErEenWinnaar(char[][] spelbord, int rijPosLaatsteZet, int kolomPosLaatsteZet) {
		
		char kleurHuidigeSpeler = spelbord[rijPosLaatsteZet][kolomPosLaatsteZet];
		int aantalStenenOpEenRij = 1;
		
		//HORIZONTAAL
		
		resetZoekPosities(rijPosLaatsteZet, kolomPosLaatsteZet);
		
		while (!(zoekDezelfdeSteenKolomPos < 3) && spelbord[zoekDezelfdeSteenRijPos][zoekDezelfdeSteenKolomPos - 2] == kleurHuidigeSpeler) {
			aantalStenenOpEenRij ++;
			zoekDezelfdeSteenKolomPos -= 2;
		}
		
		resetZoekPosities(rijPosLaatsteZet, kolomPosLaatsteZet);
		
		while (!(zoekDezelfdeSteenKolomPos > 11) && spelbord[zoekDezelfdeSteenRijPos][zoekDezelfdeSteenKolomPos + 2] == kleurHuidigeSpeler) {
			aantalStenenOpEenRij ++;
			zoekDezelfdeSteenKolomPos += 2;
		}
	
		if (aantalStenenOpEenRij >= 4) return true;
		
		//VERTICAAL
		
		resetZoekPosities(rijPosLaatsteZet, kolomPosLaatsteZet);
		aantalStenenOpEenRij = 1;
		
		while (!(zoekDezelfdeSteenRijPos < 2) && spelbord[zoekDezelfdeSteenRijPos - 1][zoekDezelfdeSteenKolomPos] == kleurHuidigeSpeler) {
			aantalStenenOpEenRij ++;
			zoekDezelfdeSteenRijPos --;
		}
		
		resetZoekPosities(rijPosLaatsteZet, kolomPosLaatsteZet);
	
		while (!(zoekDezelfdeSteenRijPos > 5) && spelbord[zoekDezelfdeSteenRijPos + 1][zoekDezelfdeSteenKolomPos] == kleurHuidigeSpeler) {
			aantalStenenOpEenRij ++;
			zoekDezelfdeSteenRijPos ++;
		}
		
		if (aantalStenenOpEenRij >= 4) return true;
		
		//DIAGONAAL LINKSONDER NAAR RECHTSBOVEN
		
		resetZoekPosities(rijPosLaatsteZet, kolomPosLaatsteZet);
		aantalStenenOpEenRij = 1;
		
		while (!(zoekDezelfdeSteenRijPos > 5) && !(zoekDezelfdeSteenKolomPos < 3) && spelbord[zoekDezelfdeSteenRijPos + 1][zoekDezelfdeSteenKolomPos - 2] == kleurHuidigeSpeler) {
			aantalStenenOpEenRij ++;
			zoekDezelfdeSteenRijPos ++;
			zoekDezelfdeSteenKolomPos -= 2;
		}
		
		resetZoekPosities(rijPosLaatsteZet, kolomPosLaatsteZet);
		
		while (!(zoekDezelfdeSteenRijPos < 2) && !(zoekDezelfdeSteenKolomPos > 11) && spelbord[zoekDezelfdeSteenRijPos - 1][zoekDezelfdeSteenKolomPos + 2] == kleurHuidigeSpeler) {
			aantalStenenOpEenRij ++;
			zoekDezelfdeSteenRijPos --;
			zoekDezelfdeSteenKolomPos += 2;
		}
		
		if (aantalStenenOpEenRij >= 4) return true;
		
		//DIAGONAAL LINKSBOVEN NAAR RECHTSONDER
		
		resetZoekPosities(rijPosLaatsteZet, kolomPosLaatsteZet);
		aantalStenenOpEenRij = 1;
		
		while (!(zoekDezelfdeSteenRijPos < 2) && !(zoekDezelfdeSteenKolomPos < 3) && spelbord[zoekDezelfdeSteenRijPos - 1][zoekDezelfdeSteenKolomPos - 2] == kleurHuidigeSpeler) {
			aantalStenenOpEenRij ++;
			zoekDezelfdeSteenRijPos --;
			zoekDezelfdeSteenKolomPos -= 2;
		}
		
		resetZoekPosities(rijPosLaatsteZet, kolomPosLaatsteZet);
		
		while (!(zoekDezelfdeSteenRijPos > 5) && !(zoekDezelfdeSteenKolomPos > 11) && spelbord[zoekDezelfdeSteenRijPos + 1][zoekDezelfdeSteenKolomPos + 2] == kleurHuidigeSpeler) {
			aantalStenenOpEenRij ++;
			zoekDezelfdeSteenRijPos ++;
			zoekDezelfdeSteenKolomPos += 2;
		}
		
		if (aantalStenenOpEenRij >= 4) return true;
		
		return false;
	}
	
	private void resetZoekPosities(int rijPosLaatsteZet, int kolomPosLaatsteZet) {
		zoekDezelfdeSteenRijPos = rijPosLaatsteZet;
		zoekDezelfdeSteenKolomPos = kolomPosLaatsteZet;
	}
}
