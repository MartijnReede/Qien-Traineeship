package VierOpEenRij.Spelbord;

public class Spelbord {

	public char[][] getLeegSpelbord(){
		
		char[][] leegSpelbord = new char[8][17];
		
		int rijNummer = 6;
		
		for (int i = 0; i < 8; i++) {
			
			if (i == 0) {
				leegSpelbord[0][1] = 'a';
				leegSpelbord[0][3] = 'b';
				leegSpelbord[0][5] = 'c';
				leegSpelbord[0][7] = 'd';
				leegSpelbord[0][9] = 'e';
				leegSpelbord[0][11] = 'f';
				leegSpelbord[0][13] = 'g';
			}
			
			if (i > 0 && i < 7) {
				
				for (int j = 0; j < 15; j+=2) {
					leegSpelbord[i][j] = '|';
				}
				
				String rijNummerInStr = Integer.toString(rijNummer);
				leegSpelbord[i][16] = rijNummerInStr.charAt(0);
				rijNummer --;
			}
			
			if (i == 7) {
				for (int k = 1; k < 14; k+=2) {
					leegSpelbord[i][k] = '-';
				}
			}
		}
		return leegSpelbord;
	}
}
