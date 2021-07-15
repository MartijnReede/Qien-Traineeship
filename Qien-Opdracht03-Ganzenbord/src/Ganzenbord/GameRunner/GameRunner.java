package Ganzenbord.GameRunner;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

import Ganzenbord.Spelonderdelen.Dobbelsteen;
import Ganzenbord.Spelonderdelen.Spelbord;
import Ganzenbord.Spelonderdelen.Speler;
import Ganzenbord.Tekst.Berichten;
import Ganzenbord.Tekst.Instructies;
import Ganzenbord.Utils.InvoerControle;

public class GameRunner {

	private Berichten berichten;
	private Scanner scanner;
	private Dobbelsteen dobbelsteen;
	private InvoerControle invoerControle;
	private Instructies instructies;
	private String moeilijkheidsgraad;
	private Spelbord spelbord;
	private int aantalSpelers;
	private List<Speler> spelers;
	private boolean spelAfgelopen = false;
	
	public GameRunner() {
		dobbelsteen = new Dobbelsteen();
		spelbord = new Spelbord();
		berichten = new Berichten();
		instructies = new Instructies();
		scanner = new Scanner(System.in);
		invoerControle = new InvoerControle();
	}
	
	public boolean nieuwSpel() {
		
		// WELKOMSTMENU (INSTRUCTIES, AFSLUITEN OF NIEUW SPEL)
		System.out.print(berichten.getWelkomstmenu());
		String invoer = scanner.nextLine().toLowerCase();
		
		while (!invoerControle.controleerDeInvoer(invoer, "inq")) {
			System.out.print(berichten.getBerichtVerkeerdeInvoer(invoer, "inq"));
			invoer = scanner.nextLine().toLowerCase();
		}
		
		if (invoer.equals("q")) {
			
			System.out.print(berichten.getWilJeHetSpelAfsluiten());
			invoer = scanner.nextLine().toLowerCase();
			
			while (!invoerControle.controleerDeInvoer(invoer, "jn")) {
				System.out.print(berichten.getBerichtVerkeerdeInvoer(invoer, "jn"));
				invoer = scanner.nextLine().toLowerCase();
			}
			
			if (invoer.equals("j")) return false;
			else return true;
					
		} else if (invoer.equals("i")) {
			System.out.println(instructies.getInstructies());
			scanner.nextLine();
			return true;
		}
		
		// MOEILIJKHEIDSGRAAD SELECTEREN
		System.out.print(berichten.getVraagWelkeMoeilijkheidsgraad());
		invoer = scanner.nextLine();
		
		while(!invoerControle.controleerDeInvoer(invoer, "123")) {
			System.out.print(berichten.getBerichtVerkeerdeInvoer(invoer, "123"));
			invoer = scanner.nextLine();
		}
		
		int hoeMoeilijk = Integer.parseInt(invoer);
		
		if (hoeMoeilijk == 1) moeilijkheidsgraad = "makkelijk";
		else if (hoeMoeilijk == 2) moeilijkheidsgraad = "middelmatig";
		else moeilijkheidsgraad = "moeilijk";
		
		System.out.println("\nMoeilijkheidsgraad is ingesteld op: " + moeilijkheidsgraad + ".");
		
		// AANTAL SPELERS SELECTEREN
		System.out.print(berichten.getVraagHetAantalSpelers());
		invoer = scanner.nextLine();
			
		while (!invoerControle.controleerDeInvoer(invoer, "123456")) {
			System.out.print(berichten.getBerichtVerkeerdeInvoer(invoer, "123456"));
			invoer = scanner.nextLine();
		}
			
		aantalSpelers = Integer.parseInt(invoer);
		
		System.out.println("\nHet aantal spelers is ingesteld op: " + aantalSpelers  + '.');
		
		spelers = new ArrayList<Speler>();
		
		for (int i = 0; i < aantalSpelers; i++) {
			
			System.out.print("\nVOER DE NAAM IN VAN SPELER " + (i + 1) + ".\n\nInvoer: ");
			
			Speler speler = new Speler();
			String spelerNaam = scanner.nextLine();
			
			while (spelerNaam.isEmpty()) { 
				System.out.print(berichten.getGeenNaamIngevuld(i + 1));
				spelerNaam = scanner.nextLine();
			}
			
			speler.setSpelerNaam(spelerNaam);
			spelers.add(speler);
		}
		
		//VOLGORDE SPELERS BEPALEN
		if (spelers.size() > 1) {
		
			System.out.print("\nDe beurtvolgorde wordt bepaald.");
			
			for (int i = 0; i < 10; i++) {
				System.out.print(".");
				sleep(250);
			}
			
			Collections.shuffle(spelers);
			
			System.out.println("\n\nBEURTVOLGORDE:\n");
			
			int spelerNummer = 1;
			for (Speler speler : spelers) {
				System.out.println(spelerNummer + ". " + speler.getSpelerNaam());
				spelerNummer ++;
				sleep(1000);
			}
		
		}
			
		// START SPEL
		while (!spelAfgelopen) {
			
			// ZIJN ER NOG ACTIEVE SPELERS? 
			boolean erIsEenActieveSpeler = false;
			for (Speler speler : spelers) {
				if (speler.getIsSpelerActief()) erIsEenActieveSpeler = true;
			}
			
			if (!erIsEenActieveSpeler) {
				System.out.println(berichten.getGeenActieveSpeler());
				spelAfgelopen = true;
			}
			
			// START NIEUWE BEURTRONDE
			for (Speler speler : spelers) {
				
				//SPELERCONTROLE EN HUIDIGE POSITIE
				if (!speler.getIsSpelerActief()) continue;
				
				boolean magDezeSpelerNuDoorspelen = spelbord.getHuidigeSpelerSituatie(speler, moeilijkheidsgraad);
								
				//BEURT SPELER
				if (!magDezeSpelerNuDoorspelen) continue;
				else {
					System.out.print("\nVOER 'g' IN OM DE DOBBELSTEEN TE GOOIEN.\n\nInvoer:");
					invoer = scanner.nextLine().toLowerCase();
					
					while (!invoerControle.controleerDeInvoer(invoer, "g")) {
						System.out.println(berichten.getBerichtVerkeerdeInvoer(invoer, "g"));
						invoer = scanner.nextLine().toLowerCase();
					}
					
					int aantalOgen = dobbelsteen.gooiDeDobbelsteen();
					spelbord.verplaatsSpelerOverHetSpelbord(speler, aantalOgen, moeilijkheidsgraad);
				}
				
				//HEEFT DEZE SPELER GEWONNEN?
				if (speler.getSpelerPositie() == 63 && (moeilijkheidsgraad.equals("middelmatig") || moeilijkheidsgraad.equals("moeilijk"))) {
					System.out.println("\n******************** " + speler.getSpelerNaam().toUpperCase() + " HEEFT GEWONNEN!!! ********************\n");
					spelAfgelopen = true;
				} else if (speler.getSpelerPositie() >= 63 && moeilijkheidsgraad.equals("makkelijk")) {
					System.out.println("\n******************** " + speler.getSpelerNaam().toUpperCase() + " HEEFT GEWONNEN!!! ********************\n");
					spelAfgelopen = true;
				}
				
				if (spelAfgelopen == true) {
					System.out.println("DRUK OP ENTER OM TERUG TE GAAN NAAR HET HOOFDMENU.");
					invoer = scanner.nextLine();
					break;
				}
			}
		}
		return true;
	}
	
	public void sleep(int milis) {
		try {
			Thread.sleep(milis);
		} catch(Exception e) {
			
		}
	}
	
}
