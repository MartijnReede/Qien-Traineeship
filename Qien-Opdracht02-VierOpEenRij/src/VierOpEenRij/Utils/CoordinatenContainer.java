package VierOpEenRij.Utils;

public class CoordinatenContainer {
	
	private int rijPos;
	private int kolomPos;
	
	public CoordinatenContainer(int rijPos, int kolomPos) {
		this.rijPos = rijPos;
		this.kolomPos = kolomPos;
	}
	
	public void setRijPos(int rijPos) {
		this.rijPos = rijPos;
	}
	
	public void setKolomPos(int kolomPos) {
		this.kolomPos = kolomPos;
	}
	
	public int getRijPos() {
		return rijPos;
	}
	
	public int getKolomPos() {
		return kolomPos;
	}
	
}
