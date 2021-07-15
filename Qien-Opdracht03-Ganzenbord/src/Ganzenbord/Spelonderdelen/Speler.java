package Ganzenbord.Spelonderdelen;

public class Speler {
	
	private String spelerNaam;
	private int spelerPositie = 1;
	private int aantalBeurtenOverslaan = 0;
	private boolean spelerActief = true;
	
	public String getSpelerNaam() {
		return spelerNaam;
	}
	
	public void setSpelerNaam(String spelerNaam) {
		this.spelerNaam = spelerNaam;
	}
	
	public int getSpelerPositie() {
		return spelerPositie;
	}
	
	public void setSpelerPositie(int spelerPositie) {
		this.spelerPositie = spelerPositie;
	}
	
	public boolean getIsSpelerActief() {
		return spelerActief;
	}
	
	public void setSpelerActief(boolean spelerActief) {
		this.spelerActief = spelerActief;
	}

	public int getAantalBeurtenOverslaan() {
		return aantalBeurtenOverslaan;
	}

	public void setAantalBeurtenOverslaan(int aantalBeurtenOverslaan) {
		this.aantalBeurtenOverslaan = aantalBeurtenOverslaan;
	}


	
	
	
	
}
