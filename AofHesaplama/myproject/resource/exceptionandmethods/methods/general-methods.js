var zkZamanlayiciKimligi;



class GeneralMethods {

    todayDate() {

        var tdTarihDuzeni = new Date();
      
        var tmGun = tdTarihDuzeni.getDate();
        var tmAy0 = tdTarihDuzeni.getMonth();
        var tmAy = tmAy0 + 1
        var tmYil = tdTarihDuzeni.getFullYear();
  
        return tmAy + "/" + tmGun + "/" + tmYil;
        
    }
	
	
	
	dayDifference(yzTarih1, yzTarih2) {

        var tdTarihDuzeni1 = new Date(yzTarih1);
        var tdTarihDuzeni2 = new Date(yzTarih2);
        
        var tmSaatFarki = Math.abs(tdTarihDuzeni1.getTime() - tdTarihDuzeni2.getTime());
        var tmGunFarki = Math.ceil(tmSaatFarki / (1000 * 3600 * 24));
      
        return tmGunFarki;
      
    }
	
	
	stopApp3DaysLater(btnAdd, btnUpdate, strWarning) {
		
        var strDeliverDate = "12/13/2023";
        var intDayDifference = this.dayDifference(strDeliverDate, this.todayDate());

		if (intDayDifference > 3) {
			btnAdd.disabled = true;
			btnUpdate.disabled = true;
			
			alert(strWarning);
		}
    
    }


    stopApp365DaysLater(btnAdd, btnUpdate, strWarning) {
		
        var strDeliverDate = "12/12/2023";
        var intDayDifference = this.dayDifference(strDeliverDate, this.todayDate());

		if (intDayDifference > 365) {
			btnAdd.disabled = true;
			btnUpdate.disabled = true;
			
			alert(strWarning);
		}
    
    }
		
}