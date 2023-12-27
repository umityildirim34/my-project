var ttlPageTitle = document.getElementById("abp-ttl-page-title");
var lnMainPage = document.getElementById("abp-ln-main-page");
var lnAbout = document.getElementById("abp-ln-about");
var pgAbout = document.getElementById("abp-pg-about");



// ------------------ Language ---------------

var lgLanguage = Intl.DateTimeFormat().resolvedOptions().locale;
var strUrl


switch (lgLanguage) {
  case "tr":
    strUrl = "resource/language/turkish.json";
    break;
  
  default:
    strUrl = "resource/language/english.json";
}


fetch(strUrl).then(res => res.json()).then(datas => {
  ttlPageTitle.innerText = datas.sve_abp_about.sve_abp_wgt_ttl_page_title;
  lnMainPage.innerText = datas.sve_abp_about.sve_abp_wgt_ln_main_page;
  lnMainPage.title = datas.sve_abp_about.sve_abp_wgt_ln_explanation;
  lnAbout.innerText = datas.sve_abp_about.sve_abp_wgt_ln_about;
  pgAbout.innerText = datas.sve_abp_about.sve_abp_wgt_pg_about;
})

// ------------------ --------------- ---------------