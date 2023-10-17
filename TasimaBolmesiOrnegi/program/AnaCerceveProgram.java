package program;


import java.awt.EventQueue;
import javax.swing.JFrame;

import arayuz.AnaCerceveArayuz;





public class AnaCerceveProgram extends JFrame {
	
	
	
	
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			
			public void run()  {
				try {
					
					AnaCerceveArayuz acaAnaCerceveArayuz = new AnaCerceveArayuz();
				
					acaAnaCerceveArayuz.setVisible(true);
					
					
					
					
					
					
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	
	
	}
	
	
	
	
	
	
	
	
}