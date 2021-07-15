package Ganzenbord.Spelonderdelen;

public class Spelbord {
	
	private Speler spelerInDePut = null;
	
	public boolean getHuidigeSpelerSituatie(Speler speler, String moeilijkheidsgraad) {
		
		boolean magDeSpelerDoorspelen = true;
		String huidigePositieBericht = "\n-----------------------------------------------------------------------------\n\n" 
										+ speler.getSpelerNaam() + ", je staat op plaats " + speler.getSpelerPositie();
		
		if (moeilijkheidsgraad.equals("moeilijk")) { 
			
			if (speler.getSpelerPositie() == 1) {
				huidigePositieBericht += " (start).";
			
			} else if (speler.getSpelerPositie() == 19 && speler.getAantalBeurtenOverslaan() > 0) {
				huidigePositieBericht += " (herberg).\nJe mag deze ronde niet meespelen omdat je een beurt moet overslaan.";
				magDeSpelerDoorspelen = false;
				speler.setAantalBeurtenOverslaan(speler.getAantalBeurtenOverslaan() -1);
			} else if (speler.getSpelerPositie() == 19 && speler.getAantalBeurtenOverslaan() == 0) {
				huidigePositieBericht += " (herberg).\nJe hebt de vorige beurt overgeslagen, je mag nu weer meedoen met het spel.";
				
			} else if (speler.getSpelerPositie() == 31 && spelerInDePut == speler) {
				huidigePositieBericht += " (put).\nJe zit in de put, je kan niet verder spelen tot een passerende speler je bevrijd.";
				magDeSpelerDoorspelen = false;
			} else if (speler.getSpelerPositie() == 31 && spelerInDePut != speler) {
				huidigePositieBericht += " (put).\nGelukkig, je zit niet in de put! Je kan verder spelen.";
				
			} else if (speler.getSpelerPositie() == 52 && speler.getAantalBeurtenOverslaan() > 0) {
				huidigePositieBericht += " (gevangenis).\nJe zit in de gevangenis, je moet je straf uitzitten en kan niet verder spelen.\n" +
										 "Resterend aantal beurten overslaan (inclusief deze): " + speler.getAantalBeurtenOverslaan() + ".";
				magDeSpelerDoorspelen = false;
				speler.setAantalBeurtenOverslaan(speler.getAantalBeurtenOverslaan() -1);
			} else if (speler.getSpelerPositie() == 52 && speler.getAantalBeurtenOverslaan() == 0) {
				huidigePositieBericht += " (gevangenis).\nJe hebt je straf uitgezeten, je mag weer verder spelen.";
				
			} else {
				huidigePositieBericht += ", niets aan de hand.";
			}
		
		} else {
			
			if (speler.getSpelerPositie() == 1) {
				huidigePositieBericht += " (start).";
			} else {
				huidigePositieBericht += ", niets aan de hand.";
			}
		}
		
		System.out.println(huidigePositieBericht);
		
		return magDeSpelerDoorspelen;
		
	}
	
	public void verplaatsSpelerOverHetSpelbord(Speler speler, int aantalGegooideOgen, String moeilijkheidsgraad) {
		
		String plaatsWeergave;
		if (aantalGegooideOgen == 1) plaatsWeergave = "plaats";
		else plaatsWeergave = "plaatsen";
		
		System.out.println("\nJe hebt " + aantalGegooideOgen + " gegooid, je verplaatst je " + aantalGegooideOgen + " " + plaatsWeergave +  " over het spelbord.");
		String eindpuntBericht = "Je bent uitgekomen op plaats " + (speler.getSpelerPositie() + aantalGegooideOgen);
		
		int startpositieDezeBeurt = speler.getSpelerPositie();
		int eindpositieDezeBeurt = startpositieDezeBeurt + aantalGegooideOgen;
		
		if (moeilijkheidsgraad.equals("makkelijk") || moeilijkheidsgraad.equals("middelmatig")) {
		
			if (eindpositieDezeBeurt == 10 || eindpositieDezeBeurt == 20 || eindpositieDezeBeurt == 30 ||
				eindpositieDezeBeurt == 40 || eindpositieDezeBeurt == 50 || eindpositieDezeBeurt == 60) {
				eindpositieDezeBeurt += aantalGegooideOgen;
				eindpuntBericht += " (bonus).\nJe verplaatst je nogmaals " + aantalGegooideOgen + " " + plaatsWeergave + 
								   " vooruit en komt uit op plaats " + eindpositieDezeBeurt; 
			}
			
			if (eindpositieDezeBeurt == 23) {
				eindpuntBericht += " (gevangenis).\nJe bent opgepakt en overgebracht naar de gevangenis. Je kan niet meer meespelen.";
				speler.setSpelerActief(false);
					
			} else if (eindpositieDezeBeurt == 25 || eindpositieDezeBeurt == 45) {
				eindpuntBericht += " (dood).\nJe ziet een grote vrachtwagen over het hoofd en wordt platgereden. Je herrijst op magische\n" +
								   "wijze en wordt wakker op plaats 1 (start).";
				eindpositieDezeBeurt = 1;
					
			} else if (eindpositieDezeBeurt == 63 || (eindpositieDezeBeurt > 63 && moeilijkheidsgraad.equals("makkelijk"))) {
				eindpuntBericht += " (finish)";
			
			} else if (eindpositieDezeBeurt > 63 && moeilijkheidsgraad.equals("middelmatig")) {	
				eindpositieDezeBeurt = 63 - (eindpositieDezeBeurt - 63);
				eindpuntBericht += ".\nJe bent te ver over de finish uitgekomen, je moet weer een stukje teruglopen en komt uit op plaats " + 
									eindpositieDezeBeurt + ".";
				
			} else {
				eindpuntBericht += ", niets aan de hand.";
			}
			
		} else {
			
			if (eindpositieDezeBeurt == 6) {
				eindpuntBericht += " (brug).\nJe mag 6 plaatsen overslaan en komt uit op plaats 12.";
				eindpositieDezeBeurt += 6;
			
			} else if (eindpositieDezeBeurt == 19){
				eindpuntBericht += " (herberg).\nJe moet de volgende beurt overslaan.";
				speler.setAantalBeurtenOverslaan(1);
			
			} else if (eindpositieDezeBeurt == 31 && spelerInDePut == null) {
				eindpuntBericht += " (put).\nJe bent in een put gevallen. Je kan niet meer meespelen tot een "
								+ "andere speler je passeert en bevrijd.";
				spelerInDePut = speler;
				
			} else if (eindpositieDezeBeurt == 31 && spelerInDePut != null) {
				eindpuntBericht += " (put).\nAl voor je bij de put aankwam hoorde je een roep om hulp van " + spelerInDePut.getSpelerNaam() +
								   ".\nJe bent de moeilijkste niet en helpt " + spelerInDePut.getSpelerNaam() + " uit de put. Gelukkig ben je er zelf niet ingevallen!";
				spelerInDePut = null;
			
			} else if (startpositieDezeBeurt < 31 && eindpositieDezeBeurt > 31 && spelerInDePut != null) {
				eindpuntBericht += ".\nJe passeerde een put en hoorde een roep om hulp van " + spelerInDePut.getSpelerNaam() +
								   ".\nJe bent de moeilijkste niet en hebt " + spelerInDePut.getSpelerNaam() + " uit de put geholpen.";
				spelerInDePut = null;
			
			} else if (eindpositieDezeBeurt == 42) {
				eindpuntBericht += " (doolhof).\nJe raakt de weg kwijt en komt uit op plaats 39.";
				eindpositieDezeBeurt -= 3;
			
			} else if (eindpositieDezeBeurt == 52) {
				eindpuntBericht += " (gevangenis).\nJe bent opgepakt en overgebracht naar de gevangenis, je moet drie beurten overslaan.";
				speler.setAantalBeurtenOverslaan(3);
			
			} else if (eindpositieDezeBeurt == 58) {
				eindpuntBericht += " (dood).\nJe ziet een grote vrachtwagen over het hoofd en wordt platgereden. Je herrijst op magische\n" +
								   "wijze en wordt wakker op plaats 1 (start).";
				eindpositieDezeBeurt = 1;
			
			} else if (eindpositieDezeBeurt == 63) {
				eindpuntBericht += " (finish).";
			
			} else if (eindpositieDezeBeurt > 63) {
				
				eindpositieDezeBeurt = 63 - (eindpositieDezeBeurt - 63);
				eindpuntBericht += ".\nJe bent te ver over de finish uitgekomen, je moet weer een stukje teruglopen en komt uit op plaats " +
									eindpositieDezeBeurt;
				
				if (eindpositieDezeBeurt != 58) {
					eindpuntBericht += ".";
				} else {
					eindpuntBericht += " (dood).\nJe ziet een grote vrachtwagen over het hoofd en wordt platgereden. Je herrijst op magische\n" +
										"wijze en wordt wakker op plaats 1 (start).";
					eindpositieDezeBeurt = 1;					   
				}
						
			} else {
				eindpuntBericht += ", niets aan de hand.";
			}
		}
		
		speler.setSpelerPositie(eindpositieDezeBeurt);
		System.out.println(eindpuntBericht);
		
	}
}
