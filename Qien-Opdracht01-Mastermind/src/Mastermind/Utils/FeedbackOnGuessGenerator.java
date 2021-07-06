package Mastermind.Utils;

public class FeedbackOnGuessGenerator {

	public int[] getFeedbackOnGuess(String input, String code) {
		
		int[] feedback = new int[2];
		int correctLetterOnCorrectPos = 0;
		int correctLetterOnWrongPos = 0;
		
		for (int i = 0; i < input.length(); i++) {
			if (input.charAt(i) == code.charAt(i)) correctLetterOnCorrectPos ++;
			else if (code.contains(Character.toString(input.charAt(i)))) correctLetterOnWrongPos ++;
		}
		
		feedback[0] = correctLetterOnCorrectPos;
		feedback[1] = correctLetterOnWrongPos;
	
		return feedback;
	}
}
