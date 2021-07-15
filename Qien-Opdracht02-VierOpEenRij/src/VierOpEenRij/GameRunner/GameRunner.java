package VierOpEenRij.GameRunner;

import java.util.Scanner;

import VierOpEenRij.Spelbord.Spelbord;
import VierOpEenRij.Tekst.Instructies;
import VierOpEenRij.Tekst.KorteBerichten;
import VierOpEenRij.Utils.CoordinatenContainer;
import VierOpEenRij.Utils.InvoerControle;
import VierOpEenRij.Utils.RandomSpelerKiezer;
import VierOpEenRij.Utils.StenenCoordinatenBepaler;
import VierOpEenRij.Utils.WinnaarControle;

public class GameRunner {

	private Spelbord leegSpelbord;
	private Instructies instructies;
	private String speler1;
	private String speler2;
	private Scanner scanner;
	private InvoerControle invoerControle;
	private KorteBerichten korteBerichten;
	private RandomSpelerKiezer randomSpelerKiezer;
	private StenenCoordinatenBepaler stenenCoordinatenBepaler;
	private WinnaarControle winnaarControle;
	private int aantalStenenGeplaatst;
	private int welkeSpelerIsAanDeBeurt;
	private boolean spelAfgelopen = false;
	private char[][] spelbord;
	
	public GameRunner() {
		scanner = new Scanner(System.in);
		instructies = new Instructies();
		invoerControle = new InvoerControle();
		korteBerichten = new KorteBerichten();
		randomSpelerKiezer = new RandomSpelerKiezer();
		stenenCoordinatenBepaler = new StenenCoordinatenBepaler();
		winnaarControle = new WinnaarControle();
		leegSpelbord = new Spelbord();
		spelbord = leegSpelbord.getLeegSpelbord();
	}
	
	public boolean nieuwSpel() {
		
		//HOOFDMENU MET INSTRUCTIES.
		System.out.print(instructies.getInstructies());	
		String invoer = scanner.nextLine().toLowerCase();
		
		while (!invoerControle.controleerInvoer(invoer, "nq")) {
			System.out.print(korteBerichten.getBerichtVerkeerdeInvoer(invoer, "nq"));
			invoer = scanner.nextLine().toLowerCase();
		}
		
		if (invoer.equals("q")) {
			
			System.out.println(korteBerichten.getWilJeHetSpelAfsluiten());
			invoer = scanner.nextLine().toLowerCase();
			
			while (!invoerControle.controleerInvoer(invoer, "jn")) {
				System.out.print(korteBerichten.getBerichtVerkeerdeInvoer(invoer, "jn"));
				invoer = scanner.nextLine().toLowerCase();
			}
			
			if (invoer.equals("j")) return false;
			else return true;
			
		}
		
		//START NIEUW SPEL EN INVOER SPELERNAMEN
		System.out.print("\nNieuw spel gestart!\n\nVOER DE NAAM IN VAN SPELER 1 (ROOD):\n\nNaam: ");
		speler1 = scanner.nextLine();
		
		while (speler1.isEmpty()) {
			System.out.print("\nEr is geen naam ingevoerd, voer nogmaals de naam in van speler 1.\n\nNaam: ");
			speler1 = scanner.nextLine();
		}
		
		System.out.print("\nVOER DE NAAM IN VAN SPELER 2 (GEEL):\n\nNaam: ");
		speler2 = scanner.nextLine();
		
		while (speler2.isEmpty()) {
			System.out.print("\nEr is geen naam ingevoerd, voer nogmaals de naam in van speler 2.\n\nNaam: ");
			speler2 = scanner.nextLine();
		}
			
		System.out.print("\nEr wordt een speler gekozen die mag beginnen.");
		
		for (int i = 0; i < 10; i++) {
			System.out.print(".");
			sleep();
		}
		
		//SPELER KIEZEN DIE MAG BEGINNEN
		int wieMagBeginnen = randomSpelerKiezer.kiesEenRandomSpeler();
		
		if (wieMagBeginnen == 0) {
			welkeSpelerIsAanDeBeurt = 1;
			System.out.println("\n\n" + speler1 + " (ROOD) mag beginnen!");
		} else {
			welkeSpelerIsAanDeBeurt = 2;
			System.out.println("\n\n" + speler2 + " (GEEL) mag beginnen!");
		}
		
		System.out.println("\nDRUK OP ENTER OM HET SPEL TE STARTEN!");
		invoer = scanner.nextLine();
		
		System.out.println(korteBerichten.getNieuwSpelGestart());
		
		//SPELVERLOOP
		while (!spelAfgelopen) {
			
			printSpelbord();
			
			if (welkeSpelerIsAanDeBeurt == 1) System.out.println("\nKan " + speler1 + " (ROOD) aangeven in welke kolom hij/zij een steen wil gooien?");
			else System.out.println("\nKan " + speler2 + " (GEEL) aangeven in welke kolom hij/zij een steen wil gooien?");
						
			System.out.print("Invoer: ");
			invoer = scanner.nextLine().toLowerCase();
			
			while (!invoerControle.controleerInvoerEnOfSteenGespeeldKanWorden(spelbord, invoer, "abcdefg")) {
				System.out.print(korteBerichten.getBerichtVerkeerdeInvoerOfKolomIsVol(invoer));
				invoer = scanner.nextLine().toLowerCase();
			}
			
			CoordinatenContainer coordinaten = stenenCoordinatenBepaler.getCoordinaten(spelbord, invoer);
			
			if (welkeSpelerIsAanDeBeurt == 1) {
				
				spelbord[coordinaten.getRijPos()][coordinaten.getKolomPos()] = 'R';
				aantalStenenGeplaatst ++;
				
				//IS ER EEN WINNAAR / KAN HET SPEL DOORGAAN?
				if (winnaarControle.isErEenWinnaar(spelbord, coordinaten.getRijPos(), coordinaten.getKolomPos())) {
					printSpelbord();
					System.out.println("\n************** " + speler1 + " heeft gewonnen!! **************");
					spelAfgelopen = true;
				} else if (aantalStenenGeplaatst == 42) {
					printSpelbord();
					System.out.println("\nEr kunnen geen stenen meer in het bord gegooid worden, er is geen winnaar.");
					spelAfgelopen = true;
				}
				
				welkeSpelerIsAanDeBeurt = 2;
			} else {
				
				spelbord[coordinaten.getRijPos()][coordinaten.getKolomPos()] = 'G'; 
				aantalStenenGeplaatst ++;
				
				//IS ER EEN WINNAAR / KAN HET SPEL DOORGAAN?
				if (winnaarControle.isErEenWinnaar(spelbord, coordinaten.getRijPos(), coordinaten.getKolomPos())) {
					printSpelbord();
					System.out.println("\n************** " + speler2 + " heeft gewonnen!! **************");
					spelAfgelopen = true;
				} else if (aantalStenenGeplaatst == 42) {
					printSpelbord();
					System.out.println("\nEr kunnen geen stenen meer in het bord gegooid worden, er is geen winnaar.");
					spelAfgelopen = true;
				}
				
				welkeSpelerIsAanDeBeurt = 1;
			}
		}
	
		System.out.println("\nDRUK OP ENTER OM TERUG TE GAAN NAAR HET SPELMENU.");	
		scanner.nextLine();
		
		return true;
	}
	
	public void sleep() {
		
		try{
			Thread.sleep(500);
		} catch (Exception e) {
			
		}
	}

	public void printSpelbord() {
		
		System.out.println();
		
		for (int i = 0; i < 8; i++) {
			System.out.println(spelbord[i]);
		}
		
		System.out.println("\n--------------------------------------------------------------------------");
	}
}
