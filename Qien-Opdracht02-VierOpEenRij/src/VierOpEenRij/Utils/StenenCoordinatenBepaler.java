package VierOpEenRij.Utils;

public class StenenCoordinatenBepaler {
	
	public CoordinatenContainer getCoordinaten(char[][] spelbord, String kolomInvoer) {
		
		int rijPos = 6;
		int kolomPos;
		
		if (kolomInvoer.equals("a")) kolomPos = 1;
		else if (kolomInvoer.equals("b")) kolomPos = 3;
		else if (kolomInvoer.equals("c")) kolomPos = 5;
		else if (kolomInvoer.equals("d")) kolomPos = 7;
		else if (kolomInvoer.equals("e")) kolomPos = 9;
		else if (kolomInvoer.equals("f")) kolomPos = 11;
		else kolomPos = 13;
		
		while (spelbord[rijPos][kolomPos] != '\u0000') {
			rijPos --;
		}
	
		return new CoordinatenContainer(rijPos, kolomPos);
	}
}
