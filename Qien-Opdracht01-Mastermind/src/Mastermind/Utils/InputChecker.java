package Mastermind.Utils;

public class InputChecker {
	
	public boolean checkOptionInput (String input, String availableOptions) {
		if (input.length() != 1) {
			return false;
		} else {
			for (int i = 0; i < availableOptions.length(); i++) {
				if (availableOptions.contains(input)) return true;
			}
			return false;
		}
	}
	
	public boolean checkCodeInput (String input, String availableCodeOptions) {
		
		if (input.length() != 1 && input.length() != 4 ) return false;	
		else if (input.equals("q")) return true;
		else if (input.length() == 4) {
			for (int i = 0; i < 4; i++) {
				if (!availableCodeOptions.contains(Character.toString(input.charAt(i)))) return false;
			}
		}
		return true;
	}
}
