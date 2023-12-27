var ttlPageTitle = document.getElementById("uap-ttl-page-title");
var lnMainPage = document.getElementById("uap-ln-main-page");
var lnUserAgreement = document.getElementById("uap-ln-user-agreement");
var pgAgreement = document.getElementById("uap-pg-agreement");


// ------------------ Language ---------------

var lgLanguage = Intl.DateTimeFormat().resolvedOptions().locale;
var strUrl


switch (lgLanguage) {
  case "tr":
    strUrl = "resource/language/turkish.json"
    break;
  
  default:
    strUrl = "resource/language/english.json"
}


fetch(strUrl).then(res => res.json()).then(datas => {
  ttlPageTitle.innerText = datas.sve_uap_user_agreement.sve_uap_wgt_ttl_page_title;
  lnMainPage.innerText = datas.sve_uap_user_agreement.sve_uap_wgt_ln_main_page;
  lnMainPage.title = datas.sve_uap_user_agreement.sve_uap_wgt_ln_explanation;
  lnUserAgreement.innerText = datas.sve_uap_user_agreement.sve_uap_wgt_ln_user_agreement;
  pgAgreement.innerText = datas.sve_uap_user_agreement.sve_uap_wgt_pg_user_agreement;
})

// ------------------ --------------- ---------------