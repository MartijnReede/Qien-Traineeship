package Ganzenbord.Utils;

public class InvoerControle {

	public boolean controleerDeInvoer(String invoer, String invoerMogelijkheden) {
		if (invoer.length() == 1 && invoerMogelijkheden.contains(invoer)) return true;
		else return false;
	}
}
