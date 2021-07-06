package Mastermind.Utils;

import java.util.Random;

public class SecretCodeGenerator {

	public String generateSecretCode() {
		String availableCodeChars = "abcdef";
		String code = "";
		
		Random rand = new Random();
		
		for (int i = 0; i < 4; i++) {
			int index = rand.nextInt(6);
			code += availableCodeChars.charAt(index);
		}
		
		return code;
	}
}
