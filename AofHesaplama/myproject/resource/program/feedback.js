var ttlPageTitle = document.getElementById("fbp-ttl-page-title");

var lnMainPage = document.getElementById("fbp-ln-main-page")
var lnFeedback = document.getElementById("fbp-ln-feedback")
var pgFeedbackText = document.getElementById("fbp-pg-feedback-text")
var pgDeveloper = document.getElementById("fbp-pg-developer")
var icWhatsapp = document.getElementById("fbp-ic-whatsapp")
var icTelegram = document.getElementById("fbp-ic-telegram")
var icGmail = document.getElementById("fbp-ic-gmail")



// ------------------ Language ---------------------

var lgLanguage = Intl.DateTimeFormat().resolvedOptions().locale;
var strBody, strEmail, strNumber, strSubject, strUrl;


switch (lgLanguage) {
  case "tr":
    strUrl = "resource/language/turkish.json";
    break;
  
  default:
    strUrl = "resource/language/english.json";
}


fetch(strUrl).then(res => res.json()).then(datas => {
  ttlPageTitle.innerText = datas.sve_fbp_feedback.sve_fbp_wgt_ttl_page_title;
  lnMainPage.innerText = datas.sve_fbp_feedback.sve_fbp_wgt_ln_main_page;
  lnMainPage.title = datas.sve_fbp_feedback.sve_fbp_wgt_ln_explanation;
  lnFeedback.innerText = datas.sve_fbp_feedback.sve_fbp_wgt_ln_feedback;
  pgFeedbackText.innerText = datas.sve_fbp_feedback.sve_fbp_wgt_pg_feedback_text;
  pgDeveloper.innerText = datas.sve_fbp_feedback.sve_fbp_wgt_pg_developer;
  icWhatsapp.alt = datas.sve_fbp_feedback.sve_fbp_wgt_ic_whatsapp;
  icTelegram.alt = datas.sve_fbp_feedback.sve_fbp_wgt_ic_telegram;
  icGmail.alt = datas.sve_fbp_feedback.sve_fbp_wgt_ic_gmail;
  strBody = datas.sve_fbp_feedback.sve_fbp_jsp_msg_body;
  strEmail = datas.sve_fbp_feedback.sve_fbp_jsp_msg_email;
  strNumber = datas.sve_fbp_feedback.sve_fbp_jsp_msg_number;
  strSubject = datas.sve_fbp_feedback.sve_fbp_jsp_msg_subject;
})

// ------------------ --------------- ---------------

icWhatsapp.onclick = function() {
  window.open("https://wa.me/" 
	+ strNumber 
	+ "?text="
	+ strBody, "_blank", "top=500,left=200, frame=true, nodeIntegration=no")
}

icTelegram.onclick = function() {
  window.open("https://t.me/umityildirim34", "_blank", "top=500,left=200, frame=true, nodeIntegration=no")
}

icGmail.onclick = function() {
  window.open("mailto:"
   + strEmail 
   + "?subject="
   + strSubject 
   + "&body=" + strBody, "_blank", "top=500,left=200, frame=true, nodeIntegration=no")
}