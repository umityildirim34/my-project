package arayuz;

import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.ScrollPaneConstants;
import javax.swing.border.EtchedBorder;
import javax.swing.border.TitledBorder;



public class AnaCerceveArayuz extends JFrame {

	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -3781533598045028772L;
	public static JPanel aca_pn_ana_panel, aca_pn_ic_panel;
	public static JLabel aca_ya_cikti;
	
	public static JScrollPane ac_tb_tasima_bolmesi;
	
	
	
	public AnaCerceveArayuz() {
		 
		
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setSize(500, 300);
		setLocation(400, 100);
		setResizable(false);
		setTitle("Deneme");
		
		
		aca_pn_ana_panel = new JPanel();
		aca_pn_ana_panel.setBorder(new TitledBorder(new EtchedBorder(), "Ana Panel"));
		aca_pn_ana_panel.setLayout(null);
		setContentPane(aca_pn_ana_panel);
		
		
		aca_pn_ic_panel = new JPanel();
		aca_pn_ic_panel.setLayout(new GridLayout(8, 2, 5, 5));
		
		
		
		for (int i=1; i < 17; i++) {
			JButton aca_ts_tus = new JButton("TUŞ"+ i);
			//aca_ts_tus.setPreferredSize(new Dimension(300, 180)); //Tuş büyüklüğünü kendimiz ayarlamak istersek bu kodu kullanırız.
     			aca_pn_ic_panel.add(aca_ts_tus);	
	   	}
		

		ac_tb_tasima_bolmesi = new JScrollPane(aca_pn_ic_panel);
		ac_tb_tasima_bolmesi.setHorizontalScrollBarPolicy(ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED);
		ac_tb_tasima_bolmesi.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS);
		ac_tb_tasima_bolmesi.setSize(298, 132);
		ac_tb_tasima_bolmesi.setLocation(33, 40);
		aca_pn_ana_panel.add(ac_tb_tasima_bolmesi);
		
		
		
	}
}