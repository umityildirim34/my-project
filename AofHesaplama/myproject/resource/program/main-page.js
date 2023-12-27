// --------------------- Head Side ---------------------
var ttlPageTitle = document.getElementById("map-ttl-page-title");
// --------------------- Menu Bar ---------------------
var icMenu = document.getElementById("map-ic-menu")
var hrzMenuFeedback = document.getElementById("map-mi-hrz-menu-feedback");
var hrzMenuAbout = document.getElementById("map-mi-hrz-menu-about");
var hrzMenuUserAgreement = document.getElementById("map-mi-hrz-menu-user-agreement");
// --------------------- Program ---------------------
var pgMinimumPoint = document.getElementById("map-pg-minimum-point");
var pgHowManyPoints = document.getElementById("map-pg-how-many-points");
var inMidtermNote = document.getElementById("map-in-midterm-note");
var btnCalculate = document.getElementById("map-btn-calculate");
// --------------------- Aside ---------------------
var vrtMenuFeedback = document.getElementById("map-mi-vrt-menu-feedback");
var vrtMenuAbout = document.getElementById("map-mi-vrt-menu-about");
var vrtMenuUserAgreement = document.getElementById("map-mi-vrt-menu-user-agreement");



// ------------------ Language ---------------
var lgLanguage = Intl.DateTimeFormat().resolvedOptions().locale;
var strUrl;
var strMaximumCountException, strNegativeCountException, strNullValueException, strMinimumPoint, strUseRight;



switch (lgLanguage) {
  case "tr":
    strUrl = "resource/language/turkish.json";
    break;
  
  default:
    strUrl = "resource/language/english.json";
}


fetch(strUrl).then(res => res.json()).then(datas => {
    // --------------------- Head Side ---------------------
    ttlPageTitle.innerText = datas.sve_map_mainpage.sve_map_wgt_ttl_page_title;
    icMenu.alt = datas.sve_map_mainpage.sve_map_wgt_ic_menu_icon;
    // --------------------- Menu Bar ---------------------
    hrzMenuFeedback.title = datas.sve_map_mainpage.sve_map_wgt_menu_feedback_title;
    hrzMenuFeedback.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_feedback_item;
    hrzMenuAbout.title = datas.sve_map_mainpage.sve_map_wgt_menu_about_title;
    hrzMenuAbout.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_about_item;
    hrzMenuUserAgreement.title = datas.sve_map_mainpage.sve_map_wgt_menu_user_agreement_title;
    hrzMenuUserAgreement.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_user_agreement_item;
    // --------------------- Program ---------------------
    strMinimumPoint = datas.sve_map_mainpage.sve_map_wgt_pg_minimum_point;
    pgMinimumPoint.innerText = strMinimumPoint;
    
    pgHowManyPoints.innerText = datas.sve_map_mainpage.sve_map_wgt_pg_how_many_points;
    inMidtermNote.placeholder = datas.sve_map_mainpage.sve_map_wgt_in_midterm_note;
    btnCalculate.innerText = datas.sve_map_mainpage.sve_map_wgt_btn_calculate;
    
    strMaximumCountException = datas.sve_map_mainpage.sve_map_prg_ex_maximum_count_exception;
    strNegativeCountException = datas.sve_map_mainpage.sve_map_prg_ex_negative_count_exception;
    strNullValueException = datas.sve_map_mainpage.sve_map_prg_ex_null_value_exception;

    strUseRight = datas.sve_map_mainpage.sve_map_prg_alr_use_right;

    //gnmGeneralMethods.stopApp3DaysLater(btnAdd, btnUpdate, strUseRight);
    // --------------------- Aside ---------------------
    vrtMenuFeedback.title = datas.sve_map_mainpage.sve_map_wgt_menu_feedback_title;
    vrtMenuFeedback.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_feedback_item;
    vrtMenuAbout.title = datas.sve_map_mainpage.sve_map_wgt_menu_about_title;
    vrtMenuAbout.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_about_item;
    vrtMenuUserAgreement.title = datas.sve_map_mainpage.sve_map_wgt_menu_user_agreement_title;
    vrtMenuUserAgreement.innerText = datas.sve_map_mainpage.sve_map_wgt_menu_user_agreement_item;
})



// --------------------- Menü ---------------------
var dvBody = document.getElementsByTagName("body")[0];
var icMenu = document.getElementById("map-ic-menu");
var asMenuList = document.getElementById("map-as-menu-lst");
var btnMenuListClose = document.getElementById("map-btn-menu-lst-close");



icMenu.onclick = function() {
  asMenuList.style.width = "70vw";
  dvBody.style.background = "#b9b9b5";
}

btnMenuListClose.onclick = function() {
  asMenuList.style.width = "0vw";
  dvBody.style.background = "#ffffff";
}

// --------------------- Program ---------------------
var intMidtermNote, intNecessaryFinalNote, intRoundedNecessaryFinalNote;


var mpmMainpageMethods = new MainpageMethods();
var gnmGeneralMethods = new GeneralMethods();



btnCalculate.onclick = function() {
  try {
    intMidtermNote = inMidtermNote.value;
    
    if (intMidtermNote > 100) {
      throw new MaximumCountException(strMaximumCountException);
    }
    else if (intMidtermNote < 0) {
      throw new NegativeCountException(strNegativeCountException);
    }
    else if (intMidtermNote.length == 0) {
      throw new NullValueException(strNullValueException);
    }
    else {
      intMidtermNote = inMidtermNote.value;
      intNecessaryFinalNote = mpmMainpageMethods.hesapla(intMidtermNote);
      intRoundedNecessaryFinalNote = intNecessaryFinalNote.toFixed(2);

      pgMinimumPoint.innerText = strMinimumPoint + " " + intRoundedNecessaryFinalNote;
    }
  }
  catch (Hata) {
    pgMinimumPoint.innerText = Hata.message;
  }
  
}