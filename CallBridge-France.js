// ==UserScript==
// @name        France - callbridge
// @description Ce script ajoute un bouton "Appeler" qui envoie+compose directement l'appel sur le smartphone (IOS/Android) de son choix. Nécessite un compte CallBridge Pro ou CallBridge
// @namespace   *
// @version     1.0
// @include     http://www.pap.fr/annonce/*
// @include     https://www.pap.fr/annonce/*
// @include     https://www.pagesjaunes.fr/recherche/*
// @include     https://www.pagesjaunes.fr/pagesblanches/*
// @include     https://www.pagesjaunes.fr/annuaire/*
// @include     https://www.pagesjaunes.fr/carte/*
// @include     http://www.partenaire-europeen.fr/Annonces*
// @include     https://www.leboncoin.fr/*
// @include     http://www.seloger.com/annonces/*
// @include     https://www.paruvendu.fr/*
// @include     http://www.lesparticuliers.fr/*
// @include     http://www.vivastreet.com/*
// @include     http://www.topannonces.fr/*
// @include     https://zoomcar.fr/*
// @include     http://www.lacentrale.fr/*
// @include     https://occasion.autoplus.fr/*
// @include     http://occasion.321auto.com/*
// @author      mcleed
// @require     http://code.jquery.com/jquery-3.1.0.min.js
// @resource    icon28    https://getcallbridge.com/wp-content/uploads/2017/01/call28.png
// @resource    icon28W   https://getcallbridge.com/wp-content/uploads/2017/01/call28white.png
// @resource    settings28 https://getcallbridge.com/wp-content/uploads/2017/01/settings28.png
// @resource    settings28W https://getcallbridge.com/wp-content/uploads/2017/01/settings28W.png
// @grant       GM_getResourceText
// @grant       GM_getResourceURL
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

$("head").append("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css\">");

// Quel Site
var quSite=0;
var lUrl = document.location.href;
if (lUrl.lastIndexOf("//www.pap.fr/")>=0 )                     quSite=1; // de particutiers à particuliers
if (lUrl.lastIndexOf("//www.pagesjaunes.fr/")>=0)              quSite=2; // pagesjaunes ET pagesblanches
if (lUrl.lastIndexOf("//www.partenaire-europeen.fr/")>=0)      quSite=3; // partenaire-europeen
if (lUrl.lastIndexOf("//www.leboncoin.fr/")>=0)                quSite=4; // leboncoin
if (lUrl.lastIndexOf("/www.seloger.com/")>=0)                  quSite=5; // seloger.com
if (lUrl.lastIndexOf("/www.paruvendu.fr/")>=0)                 quSite=6; // paruvendu.fr
if (lUrl.lastIndexOf("/www.lesparticuliers.fr/")>=0)           quSite=7; // lesparticuliers.fr
if (lUrl.lastIndexOf("/www.vivastreet.com/")>=0)               quSite=8; // vivastreet.com
if (lUrl.lastIndexOf("/www.topannonces.fr/")>=0)               quSite=9; // topannonces.fr
if (lUrl.lastIndexOf("/zoomcar.fr/")>=0)                       quSite=10; // zoomcar
if (lUrl.lastIndexOf("/www.lacentrale.fr/")>=0)                quSite=11; // lacentrale
if (lUrl.lastIndexOf("/occasion.autoplus.fr/")>=0)             quSite=12; // occasion.autoplus
if (lUrl.lastIndexOf(".321auto.com/")>=0)                      quSite=13; // 321auto
if (lUrl.lastIndexOf("//www.pagesjaunes.fr/carte")>=0)         quSite=14; // pagesjaunes CARTE



// Bouton APPELER long
var btnAppeler = document.createElement( 'button' );
  btnAppeler.setAttribute( 'type', 'button' );
  btnAppeler.setAttribute( 'style', 'margin-top : 1rem;' );
  btnAppeler.setAttribute( 'title', 'avec CallBridge');
  btnAppeler.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28W") + '">   Appeler le numéro';

// Bouton APPELER court
var btnAppel = document.createElement( 'button' );
  btnAppel.setAttribute( 'type', 'button' );
  btnAppel.setAttribute( 'style', 'margin-top : 1rem;' );
  btnAppel.setAttribute( 'title', 'avec CallBridge');
  btnAppel.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28W") + '">';

// Bouton APPELER court
var btnAppel2 = document.createElement( 'button' );
  btnAppel2.setAttribute( 'type', 'button' );
  btnAppel2.setAttribute( 'style', 'margin-top : 1rem;' );
  btnAppel2.setAttribute( 'title', 'avec CallBridge');
  btnAppel2.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28W") + '">';

// create button ----SMS ----
var btnSms = document.createElement( 'button' );
  btnSms.setAttribute( 'value', 'SMS' );
  btnSms.setAttribute( 'type', 'button' );
  btnSms.setAttribute( 'style', 'margin-top : 1rem;' );
  btnSms.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28W") + '">sms';

var btnParametres = document.createElement( 'button' );
  btnParametres.setAttribute( 'value', 'Parametre compte CallBridge' );
  //btnParametres.setAttribute( 'type', 'button' );
  btnParametres.setAttribute( 'id', 'settings' );
  btnParametres.setAttribute( 'style', 'margin-top : 1rem;' );
  btnParametres.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("settings28") + '">   Paramètres CallBridge';

// 1 ligne
var UneLigne = document.createElement( 'button' );
  UneLigne.setAttribute( 'value', 'UneLigne' );
  UneLigne.setAttribute( 'id', 'UneLigne' );
  UneLigne.setAttribute( 'style', 'margin-top : 1rem;' );
  UneLigne.innerHTML = "<br>";

var cbuser = GM_getValue("cbuser", '');

switch (quSite){
    case 1: // pap.fr ------------------------------------------------------------------------------
        btnAppeler.innerHTML = '<img src="'+ GM_getResourceURL("icon28") + '">   Appeler le numéro';
        btnAppel.innerHTML = '<img src="'+ GM_getResourceURL("icon28") + '">   Appeler le numéro';
        btnAppel2.innerHTML = '<img src="'+ GM_getResourceURL("icon28") + '">   Appeler le numéro';
        btnSms.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28") + '"> SMS';
        btnSms.setAttribute( 'class', 'btn btn-small btn-type-1 btn-icon' );
        btnAppeler.setAttribute( 'class', 'btn btn-small btn-type-1 btn-icon' );
        btnAppel.setAttribute( 'class', 'btn btn-small btn-type-1 btn-icon' );
        btnAppel2.setAttribute( 'class', 'btn btn-small btn-type-1 btn-icon' );
        btnParametres.setAttribute( 'class', 'btn btn-small btn-type-1 btn-icon' );
     // Création des boutons callbridge
        var cbuser = GM_getValue("cbuser", '');
        var mbouton = document.getElementsByClassName("btn-display-phone  btn-telephone");
        mbouton[0].appendChild( btnAppeler );
        mbouton[0].appendChild( btnSms );
        mbouton[0].appendChild( btnParametres );
        if (mbouton.length>1) {mbouton[1].appendChild( btnAppel );mbouton[1].appendChild( btnParametres );} else {mbouton[0].appendChild( btnParametres );}
        if (mbouton.length>2) {mbouton[2].appendChild( btnAppel2)}

        // Clic sur "appeler le  numéro"
        btnAppeler.onclick=function ()  {jAppelle1("Call");}
        btnAppel.onclick=function ()    {jAppelle1("Call");}
        btnAppel2.onclick=function ()   {jAppelle1("Call");}
        btnSms.onclick=function ()      {jAppelle1("SMS");}

        function jAppelle1(pCall){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            if (menuobj.style.visibility=='visible') {menuobj.style.visibility='hidden';}
            var mbouton = document.getElementsByClassName('tel-wrapper hidden')[0];
            if (!mbouton) {return;}
            var lText=mbouton.innerHTML;
            var sTel=extraitChaine(lText,1,"<");
            var mText = document.getElementsByClassName('title')[0].innerHTML;
            var sText=sansBlanc(mText);
            if (sTel>'')	{Put_Notification(pCall,sTel,1,sText);}
            if (m==2) location.reload();
        };


        break;

    case 2: // pagesjaunes.fr ------------------------------------------------------------------------------
        // 1 bouton "j'appelle" par ligne du tableau
        var uls = document.querySelectorAll('.barre-liens-contact ');
        var markers = [];
        for (let i = 0; i < uls.length; i++) {
            markers[i] = document.createElement('li');
            markers[i].setAttribute( 'class', 'item plan value');
            markers[i].setAttribute( 'id', 'appeler'+i);
            markers[i].setAttribute( 'title', 'Avec CallBridge');
            markers[i].innerHTML = '<a class="pj-link"><img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28") + '"><span class="value">Appeler</span></a>';
            uls[i].appendChild(markers[i]);
            markers[i].onclick = function(){ ClicAppeler(i);};	// <----- !!!
        }
        btnParametres.style.position = 'fixed';
        btnParametres.style.textTransform = 'uppercase';
        btnParametres.style.fontWeight = '700';
        btnParametres.style.color = '#303030';
        btnParametres.style.fontFamily = '"Open Sans","Arial","Helvetica",sans-serif';
        btnParametres.style.padding = '10px';
        btnParametres.style.border = 'thin solid rgb(199,199,199)';
        btnParametres.style.boxShadow = '0 0 3rem rgba(48,48,48,0.4)';
        btnParametres.style.borderRadius = '3rem 3rem 3rem 3rem';
        btnParametres.style.bottom = '100px';
        btnParametres.style.right = '10px';
        body = document.getElementsByTagName('body')[0];
        body.appendChild(btnParametres);

        // Clic sur "j'appelle"   AfficherMap:map-actions hidden-phone hidden-tablet    ClassN°Tel:item bi-contact-tel   ClassDuBouton:item-cta bi-contact-tel
        function ClicAppeler(pi){
            var ni = 0; ni = pi * 2 + 1;
            var iTit = 0, sTel = '', sText = '', iAdrD = 0, iAdrF = 0, sSep = "", s1='', sRue='', sVille='';

            // Nom du contact
            var lDenomination = document.getElementsByClassName('denomination-links');
            var lNom = sansBlanc(lDenomination[pi].innerHTML);

            // Adresse (rue et ville) du Contact
            var lAdresse = document.getElementsByClassName('adresse-container');
            var sAdr=sansBlanc(chAffichages(lAdresse[pi].innerHTML));

            // Extraction du n° TEL, MOBILE et FAX
            var lNumero = document.getElementsByClassName('item bi-contact-tel');
            var lArcep  = document.getElementsByClassName('main-contact-container clearfix');
            var lTel    = sansBlanc(chAffichages(lArcep[pi].innerHTML));
            var sTel = leNumerique(lTel);
            var lTels=sansBlanc(chAffichages(lNumero[ni].innerHTML));

            if (sTel>'') {Put_Notification("Call",sTel,1,sAdr);} else {alert("sans n° Tel : "+sAdr);}
        }
        function quTitle(pi,pText){
            var iDeb=0, iFin=0, F=1;
            for (i=pi;i<pText.length;i++)
                if (F==1 && pText.substr(i,12)=='"num" title=')      {iDeb=i+13;F=2;}
            if (iDeb===0) return '';
            for (i=iDeb;i<pText.length;i++)
                if (F==2 && pText.substr(i,1)=='"')           {iFin=i;F=3;}
            if (iFin===0) return '';
            var i=iFin-iDeb;
            return pText.substr(iDeb,i);
        }
        break;

    case 3: // partenaire-europeen ------------------------------------------------------------------------------
        btnAppeler.setAttribute( 'class', 'phone' );
        btnParametres.setAttribute( 'class', 'phone' );
        btnParametres.style.zIndex = '120';
        // Création des boutons callbridge
        var mbouton = document.getElementsByClassName('phone-container')[0];
        document.getElementsByClassName('phone-container')[ 0 ].appendChild( btnAppeler );
        document.getElementsByClassName('phone-container')[ 0 ].appendChild( btnParametres );

        // Clic sur "appeler le  numéro"
        btnAppeler.onclick=function Notification_Call(){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            if (menuobj.style.visibility=='visible') {menuobj.style.visibility='hidden';}
            var mbouton = document.getElementsByClassName('phone-container')[0];
            if (!mbouton) {return;}
            var lText=mbouton.outerHTML;
            var sTx1=chBalise(lText,"href");
            var sTel=extraitChaine(sTx1,2,":");
            var mText = document.getElementsByClassName('product-name')[0].innerHTML;
            var sText=sansBlanc(mText);
            if (sTel>'')	{Put_Notification("Call",sTel,1,sText);}
        };
        break;

    case 4: // leboncoin ------------------------------------------------------------------------------
        btnAppeler.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28") + '">   Appeler le numéro';
        btnAppeler.setAttribute( 'class', 'button-lightgrey large trackable' );
        btnParametres.setAttribute( 'class', 'button-mediumgrey large' );
        btnParametres.setAttribute( 'style', 'margin : 1rem;' );
        var mbouton = document.getElementsByClassName('button-orange large phoneNumber trackable')[0];
        var sClass=document.getElementsByClassName('box-grey-light mbs align-center')
        var m=sClass.length-1;
        sClass[m].appendChild( btnAppeler );
        sClass[m].appendChild( btnParametres );

        // Clic sur "appeler le  numéro"
        btnAppeler.onclick=function (){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            var mbouton = document.getElementsByClassName('button-orange large phoneNumber trackable');
            if (mbouton.length=0) mbouton = document.getElementsByClassName('button-blue large trackable');
            if (mbouton.length>0) mbouton[0].firstElementChild.click();
            setTimeout(function() {
                var Notel = document.getElementsByClassName('phone_number font-size-up');
                var sText = document.getElementsByClassName('no-border');
                var sTex2 = document.getElementsByClassName('item_price clearfix')
                var sTex3 = document.getElementsByClassName('line line_city');
                var sTex4 = chAffichageClass(sTex3[0].innerHTML,"value");
                if (Notel)	{Put_Notification("Call",Notel[0].firstElementChild.innerHTML,1,sansBlanc(sText[0].innerHTML)+' '+sansBlanc(chAffichages(sTex2[0].innerHTML))+" "+sTex4);}
            }, 2000);
        };
        break;

    case 5 : // seloger.com  ------------------------------------------------------------------------------
        btnAppeler.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28W") + '">   Appeler le numéro';
        btnAppeler.setAttribute( 'class', 'b-btn tagClick  ' );
        btnParametres.setAttribute( 'class', 'b-btn b-warn tagClick  ' );
        // Création des boutons callbridge
        var mbouton = document.getElementsByClassName('form-contact jsLockSubmit')[0];
        document.getElementsByClassName('form-contact jsLockSubmit')[ 0 ].appendChild( btnAppeler );
        document.getElementsByClassName('form-contact jsLockSubmit')[ 0 ].appendChild( btnParametres );

        // Clic sur "appeler le  numéro"
        btnAppeler.onclick=function (){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            if (menuobj.style.visibility=='visible') {menuobj.style.visibility='hidden';}
            var mbouton = document.getElementsByClassName('btn-phone b-btn b-second fi fi-phone tagClick')[0];
            if (!mbouton) {return;}
            var lText=mbouton.outerHTML;
            var sTel=chBalise(lText,"data-phone");
            var mText = document.getElementsByClassName('detail-title title1')[0].innerHTML;
            var sText=sansBlanc(mText);
            if (sTel>'')	{Put_Notification("Call",sTel,1,sText);}
        };
        break;
    case 6 : // paruvendu  ------------------------------------------------------------------------------
        btnAppeler.setAttribute( 'class', 'im12_cp_form_submit btndetails14_contact a' );
        btnAppel.setAttribute( 'class', 'im12_cp_form_submit btndetails14_contact a' );
        btnAppel.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28W") + '">   Appeler le numéro';
        btnAppel2.setAttribute( 'class', 'app' );
        btnParametres.setAttribute( 'class', 'im12_cp_form_submit btndetails14_contact a' );
        btnParametres.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("settings28W") + '">   Paramètres CallBridge';
        var sClass=document.getElementsByClassName('btndetails14_contact tel_contact')
        sClass[0].appendChild( btnAppeler );
        sClass[0].appendChild( btnParametres );
        if (sClass.length>1) {sClass[1].appendChild( btnAppel );sClass[1].appendChild( btnParametres );}
 //     document.getElementsByClassName('head17-rappelcrit head17-rappelcrit-shrink')[ 0 ].appendChild( btnAppel );
        var sClas2=document.getElementsByClassName('imdet15-LiensContact');
        if (sClas2.length>0) sClas2[0].appendChild( btnAppel2 );

        // Clic dans le header
        var BtnHeaderApp=document.getElementById('Header_btn_app')
        BtnHeaderApp.innerHTML="Appel+";
        BtnHeaderApp.onclick=function() {jAppelle6(0)};

        // Clic sur "recherche et envoi du N° de téléphone"
        btnAppeler.onclick=function (){jAppelle6(1)};
        btnAppel.onclick=function (){jAppelle6(1)};
        btnAppel2.onclick=function (){jAppelle6(1)};

        function jAppelle6(nOuvre){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            var mbouton = document.getElementsByClassName('btndetails14_contact tel_contact');
//          if (mbouton.length<1)  mbouton = document.getElementsByClassName('btndetails14_contact tel_contact basauto_contact flol');
            if (mbouton.length>0 && nOuvre) {mbouton[0].firstElementChild.click();}
            setTimeout(function() {
                var Notel = document.getElementsByClassName('newpop13-numtel');
                if (Notel.length>0) {
                    var sText = document.getElementsByClassName('newpop13-limitann');
                    var mText = extraitChaine(sText[0].innerHTML,1,"<span");}
                else {
                    Notel = document.getElementsByClassName('im12_tel');
                    var sText = document.getElementsByClassName('newpop13-limitann newpop13-txtann flol');
                    var mText = (sansBlanc(chAffichages(sText[0].innerHTML)))
                }
                sText = sansRC(mText);
                if (Notel)	{Put_Notification("Call",Notel[0].firstElementChild.innerHTML,1,sText);}
                document.getElementsByClassName('fancybox-item fancybox-close')[ 0 ].click();
            }, 2000);
        };
        break;

    case 7 : // lesparticuliers  ------------------------------------------------------------------------------
       $(document).ready(function() {
            var sLien0 = document.getElementsByClassName('showNumberBtn');
            if (sLien0.length>0) {fBtnAppeler(sLien0,'showNumberBtn');}
            var sLien2 = document.getElementsByClassName('showNumber1Btn');
        if (sLien2.length>0) {fBtnAppeler(sLien2,'showNumber1Btn');}
        var sLien3 = document.getElementsByClassName('showNumber2Btn');
        if (sLien3.length>0) {fBtnAppeler(sLien3,'showNumber2Btn');}
        var sLien4 = document.getElementsByClassName('showMailBtn');
        if (sLien4.length>0) {fBtnSetting(sLien4,'showMailBtn');}
       });
        function fBtnAppeler(pLiens,pClass){
            var makers = [];
            for (let i = 0; i < pLiens.length; i++) {
                makers[i] = document.createElement( 'button' );
                makers[i].setAttribute( 'type', 'button' );
                makers[i].setAttribute( 'style', 'margin-top : 1rem;' );
                makers[i].setAttribute( 'title', 'avec CallBridge');
                makers[i].innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28W") + '"> Appeler Numéro';
                makers[i].setAttribute( 'class', 'btn green icn-only poplight scrollToTopButton' );
                makers[i].style.fontWeight = '300';
                makers[i].style.display = 'block';
                //makers[i].style.backgroundColor = '#a50f78';
                makers[i].style.padding = '7px 14px';
                makers[i].style.color = 'white';
                makers[i].style.border = '0px';
                pLiens[i].appendChild(makers[i]);
                makers[i].onclick=function (){
                    if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
                    var mbouton = document.getElementsByClassName(pClass)[i];
                    if (mbouton) {mbouton.firstElementChild.click();}
                    setTimeout(function() {
                        var Notel = pLiens[i].getElementsByClassName('btnText')[0].innerHTML;
                        var Notel2 = document.getElementsByClassName('rsva_number');
                        if  (Notel2[0]) {var s1=extraitChaine(Notel2[0].innerHTML,2,">");Notel=extraitChaine(s1,1,"<");} // Cas 0899...
                        var sText = document.getElementById('scrollcontent');
                        var mText = sansBlanc(sText.innerHTML);
                        if (Notel)	{Put_Notification("Call",Notel,1,mText);}
                    }, 2000);
                };
            }
        }
        function fBtnSetting(pLiens,pVoir){
            var makers = [];
            for (let i = 0; i < pLiens.length; i++) {
                makers[i] = document.createElement( 'button' );
                makers[i].setAttribute( 'type', 'button' );
                makers[i].setAttribute( 'style', 'margin-top : 1rem;' );
                makers[i].innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("settings28W") + '"> Settings';
                makers[i].setAttribute( 'class', 'btn green icn-only poplight scrollToTopButton' );
                makers[i].style.fontWeight = '300';
                makers[i].style.display = 'block';
                makers[i].style.backgroundColor = '#f68c21';
                makers[i].style.padding = '7px 14px';
                makers[i].style.color = 'white';
                makers[i].style.border = '0px';
//                pLiens[i].appendChild(UneLigne);
                pLiens[i].appendChild(makers[i]);

                makers[i].onclick=function (){
                    if (menuobj.style.visibility == 'hidden')  {
                        menuobj.style.visibility = 'visible';
                        document.activeElement.blur();
                        menuobj.style.transition = 'right 1s ease-in-out';
                        menuobj.style.WebkitTransition = 'right 1s ease-in-out';
                        menuobj.style.MozTransition = 'right 1s ease-in-out';
                        menuobj.style.right = '1px';
                    }
                    else {
                        menuobj.style.visibility = 'hidden';
                        document.activeElement.blur();
                    }
                };
            }
        }
        break;

    case 8 : // vivastreet.com ------------------------------------------------------------------------------
        var btnAppeler1 = document.createElement( 'button' );
        btnAppeler1.setAttribute( 'type', 'button' );
        btnAppeler1.setAttribute( 'style', 'margin-top : 0rem;' );
        btnAppeler1.setAttribute( 'title', 'avec CallBridge');
        btnAppeler1.setAttribute( 'class', 'kiwii-btn kiwii-btn-large' );
        btnAppeler1.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28") + '"><a>   Appeler le numéro</a>';

        var btnAppeler2 = document.createElement( 'button' );
        btnAppeler2.setAttribute( 'type', 'button' );
        btnAppeler2.setAttribute( 'style', 'margin-top : 0rem;' );
        btnAppeler2.setAttribute( 'title', 'avec CallBridge');
        btnAppeler2.setAttribute( 'class', 'kiwii-btn kiwii-btn-large' );
        btnAppeler2.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28") + '"><a>   Appeler le numéro</a>';

        btnParametres.setAttribute( 'class', 'kiwii-btn kiwii-btn-large' );
        // Création des boutons callbridge

        var cbuser = GM_getValue("cbuser", '');
        var lClass="kiwii-margin-ver-xxsmall kiwii-table-cell";
        document.getElementsByClassName(lClass)[0].appendChild( btnAppeler1 );
        document.getElementsByClassName(lClass)[1].appendChild( btnAppeler2 );
        document.getElementsByClassName(lClass)[1].appendChild( btnParametres );

        // Clic sur "appeler le  numéro"
        btnAppeler1.onclick=function (){ Appeler()}
        btnAppeler2.onclick=function (){ Appeler()}

        function Appeler(){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            if (menuobj.style.visibility=='visible') {menuobj.style.visibility='hidden';}
            var bbouton = document.getElementsByClassName('phone_link phone_link_right')[0];
            bbouton.click();
            var mbouton = document.getElementsByClassName('vs-phone-button kiwii-font-weight-bold kiwii-position-relative kiwii-padding-left-large')[0];
            if (!mbouton) {return;}

            var lText=mbouton.outerHTML;
            var sTel=chBalise(lText,"data-phone-number");
            var mText = document.getElementsByClassName('kiwii-float-left kiwii-span-10')[0].innerHTML;
            var mText2= document.getElementsByClassName('kiwii-breadcrumbs mmlightgrey mmchevron')[0].lastElementChild.innerHTML;
            var sText1 = chBalise(mText2,"title",4);
            if (sText1==='') {sText1 = chBalise(mText2,"title",3);}
            var s1=extraitChaine(mText,2,">");sText=extraitChaine(s1,1,"<");
            if (sTel>'')	{Put_Notification("Call",sTel,1,sText+' '+sText1);}
            document.activeElement.blur();
        };
        break;

    case 9 : // topannonces.fr ------------------------------------------------------------------------------
        btnAppeler.setAttribute( 'class', 'btn-secondary w-275 h-40 blue contacterAdv w-190 w-border' );
        btnAppeler.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28W") + '"><b>   Appeler le numéro</b>';
        btnParametres.setAttribute( 'class', 'btn-secondary w-275 h-40 blue contacterAdv w-190 w-border' );
        btnParametres.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("settings28W") + '"><b>   Paramètres CallBridge</b>';
        // Création des boutons callbridge
        var cbuser = GM_getValue("cbuser", '');
        var lClass="span12 border-button-zone";
        var m=0;
        var mbouton = document.getElementsByClassName(lClass)[m];
        if (!mbouton) {m=1;mbouton = document.getElementsByClassName(lClass)[m];}
        if (!mbouton) return;
        document.getElementsByClassName(lClass)[m].appendChild( btnAppeler );
        document.getElementsByClassName(lClass)[m].appendChild( btnParametres );

        // Clic sur "appeler le  numéro"
        btnAppeler.onclick=function (){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            if (menuobj.style.visibility=='visible') {menuobj.style.visibility='hidden';}
            var mbouton = document.getElementsByClassName('seeNumber btn-secondary w-275 h-40 blue contacterAdv w-190 w-border')[0];
            if (mbouton) {mbouton.firstElementChild.click();}
            setTimeout(function() {
                var Notel = document.getElementsByClassName('font-15 tatiana')[1].innerHTML;
                var sText = document.getElementsByClassName('spanTitle')[0].innerHTML;
                var s1=extraitChaine(sText,3,">");var s2=extraitChaine(s1,1,"<");
                var s3=extraitChaine(sText,7,">");var s4=extraitChaine(s3,1,"<");
                if (Notel)	{Put_Notification("Call",Notel,1,s2+" "+sansBlanc(s4));}
            }, 2000);
        };
        break;
    case 10 : // zoomcar.fr ------------------------------------------------------------------------------
        btnAppeler.setAttribute( 'class', 'btn btn-flat telephone ' ); // modal-trigger
        btnParametres.setAttribute( 'class', 'btn btn-flat mail ' );
        btnParametres.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("settings28W") + '"><b>   Paramètres CallBridge</b>';
        // Création des boutons callbridge
        var cbuser = GM_getValue("cbuser", '');
        var lClass="contact-button";
        var m=0;
        var mbouton = document.getElementsByClassName(lClass)[m];
        if (!mbouton) {m++;mbouton = document.getElementsByClassName(lClass)[m];}
        if (!mbouton) return;

        //TEST----------------------
        var liens = document.getElementsByClassName('contact-button');
        //alert(liens.length);
        var makers = [];
        for (let i = 0; i < liens.length; i++) {
            makers[i] = document.createElement( 'button' );
            makers[i].setAttribute( 'type', 'button' );
            makers[i].setAttribute( 'style', 'margin-top : 1rem;' );
            makers[i].setAttribute( 'title', 'avec CallBridge');
            makers[i].innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28W") + '">   Appeler le numéro';
            makers[i].setAttribute( 'class', 'btn btn-flat telephone ' );
            makers[i].style.fontWeight = '300';
            makers[i].onclick = function ()  {jappelle10();} ;
            makers[i].style.display = 'inline-table';
            //makers[i].style.backgroundColor = '#a50f78';
            //makers[i].style.padding = '7px 14px';
            makers[i].style.color = 'white';
            makers[i].style.border = '0px';
            liens[i].appendChild(makers[i]);
        }

        //FIN DU TEST--------------------- Unquoter les 2 lignes suivantes si Test supprimé
        //document.getElementsByClassName(lClass)[0].appendChild( btnAppeler );
        document.getElementsByClassName(lClass)[1].appendChild( btnParametres );

        // Clic sur "appeler le  numéro"
        //btnAppeler.onclick=function (){
        function jappelle10(){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            if (menuobj.style.visibility=='visible') {menuobj.style.visibility='hidden';}
            var voirTelephone = document.getElementsByClassName("contact-button")[0].firstElementChild;
            voirTelephone.setAttribute("class","btn btn-flat telephone");
            voirTelephone.click();
            setTimeout(function() {
                var sTel  = document.getElementById("telephone-contact-detail-content").firstElementChild.innerHTML;
                var sText = document.getElementsByClassName('sixteen-columns row title-price')[0].childNodes;
                var nText = sText[1].childNodes, xText=sansBlanc(sText[1].innerHTML);
                var yText=sansSpan(xText);sText=sansRC(yText);
                if (sTel)	{Put_Notification("Call",sTel,1,sText);}
                var fermeTelephone = document.getElementsByClassName('modal-action modal-close waves-effect waves-green btn-flat')[1];
                fermeTelephone.click();
            },2000);
            setTimeout(function() {
                var fermeDernier = document.getElementsByClassName('modal-content');
                // alert(fermeDernier[3].innerHTML);
                fermeDernier[3].firstElementChild.click();
            },5000);
        }
        break;
    case 11 : // LaCentrale ------------------------------------------------------------------------------
        btnAppeler.setAttribute( 'class', 'btnRed' );
        btnAppel.setAttribute( 'class', 'btnRed' );
        btnAppeler.style.width = "180px";
        btnAppel.setAttribute( 'style', 'width : 235px;' );
        btnParametres.setAttribute( 'style', 'width : 235px;' );
        btnParametres.setAttribute( 'class', 'btnRed' );
        btnParametres.innerHTML = '<img style="vertical-align: middle; margin-left : 0.2rem; margin-right : 0rem;" src="'+ GM_getResourceURL("settings28W") + '">   Settings CallBridge    ';
        btnAppel.innerHTML = '<img style="vertical-align: middle; ; margin-left : 0.4rem; margin-right : 0.4rem;" src="'+ GM_getResourceURL("icon28W") + '">  Appeler le numéro      ';
        btnAppeler.innerHTML = '<img style="vertical-align: middle; ; margin-left : 0.4rem; margin-right : 0.4rem;" src="'+ GM_getResourceURL("icon28W") + '">  Appeler le numéro';
        // Création des boutons callbridge
        var cbuser = GM_getValue("cbuser", '');
        var mBox = document.getElementsByClassName("boxContent");
        if (mBox.length>0) {mBox[0].appendChild( btnAppeler );mBox[0].appendChild( btnParametres );}
        if (mBox.length>1) {mBox[1].appendChild( UneLigne );mBox[1].appendChild( btnAppel );mBox[1].appendChild( btnParametres );}

        // Clic sur "appeler le  numéro"
        btnAppeler.onclick=function (){ jAppelle11() }
        btnAppel.onclick=function (){ jAppelle11() }
        function jAppelle11(){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            if (menuobj.style.visibility=='visible') {menuobj.style.visibility='hidden';}
            var sTel = document.getElementsByClassName("phoneNumber1")[0].firstElementChild.innerHTML;
            var sText = document.getElementsByClassName("iophfzp")[0].firstElementChild.innerHTML;
            sText += " "+document.getElementsByClassName("versionTxt txtGrey7C sizeC mB10 hiddenPhone")[0].innerHTML;
            sText += " "+document.getElementsByClassName("kmTxt sizeC")[0].innerHTML;
            sTel = sansBlanc(sansSpan(sTel));sText = sansBlanc(sansSpan(sText));
            if (sTel)	{Put_Notification("Call",sTel,1,sText);}
        };
        break;
    case 12 : // occasion.autoplus.fr ------------------------------------------------------------------------------
        btnAppeler.setAttribute( 'class', 'pa-btn js-show-phone' );
        btnParametres.setAttribute( 'class', 'pa-btn js-show-phone' );
        btnParametres.innerHTML = '<img src="'+ GM_getResourceURL("settings28") + '">Settings CallBridge';
        // Création des boutons callbridge
        var cbuser = GM_getValue("cbuser", '');
        var lClass="pa-contact";
        var m=0;
        var mbouton = document.getElementsByClassName(lClass)[m];
        if (!mbouton) {m++;mbouton = document.getElementsByClassName(lClass)[m];}
        if (!mbouton) return;
        document.getElementsByClassName(lClass)[m].appendChild( btnAppeler );
        document.getElementsByClassName(lClass)[m].appendChild( btnParametres );

        // Clic sur "appeler le  numéro"
        btnAppeler.onclick=function (){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            if (menuobj.style.visibility=='visible') {menuobj.style.visibility='hidden';}
            var sTel = document.getElementsByClassName("pa-btn  js-phone")[1].innerHTML;
            var sText = document.getElementsByClassName("pa-make-model")[0].innerHTML;
            sText += " "+document.getElementsByClassName("pa-car")[0].innerHTML;
            sText += " "+document.getElementsByClassName("avg-quotation__price")[0].innerHTML;
            sTel = sansBlanc(sansSpan(sTel));sText = sansBlanc(sansSpan(sText));
            if (sTel)	{Put_Notification("Call",sTel,1,sText);}
        };
        break;
    case 13 : // http://occasion.321auto.com ------------------------------------------------------------------------------
        btnAppeler.setAttribute( 'class', 'btn bold' );
        btnAppel.innerHTML = '<img style="vertical-align: middle;" src="'+ GM_getResourceURL("icon28W") + '">   Appeler le numéro';
        btnAppel.setAttribute( 'class', 'btn lsearch bold' );
        btnParametres.setAttribute( 'class', 'btn bold' );
        btnParametres.innerHTML = '<img src="'+ GM_getResourceURL("settings28") + '">Settings CallBridge';
        // Création des boutons callbridge
        var cbuser = GM_getValue("cbuser", '');
        var mBox2 = document.getElementsByClassName("contact_action2");
        if (mBox2.length>0) {mBox2[0].appendChild( btnAppeler );mBox2[0].appendChild( btnParametres );}
        var mBox = document.getElementsByClassName("contact_action");
        if (mBox.length>0) {mBox[0].appendChild( btnAppel   );}
        // Clic sur "appeler le  numéro"
        btnAppeler.onclick=function (){ jAppelle13() }
        btnAppel.onclick=function (){   jAppelle13() }

        function jAppelle13(){
            if (cbuser<=' ') {menuobj.style.visibility = 'visible';return;}
            if (menuobj.style.visibility=='visible') {menuobj.style.visibility='hidden';}
            var voirTelephone = document.getElementsByClassName("bouton btn-red")[0].firstElementChild;
            voirTelephone.click();
            setTimeout(function() {
                var sTel = document.getElementsByClassName("phone")[0].innerHTML;
                var mText = document.getElementById("DetailHeader").innerHTML;
                var sText = document.getElementsByTagName("h1")[0].innerHTML;
                sText += " "+document.getElementsByTagName("p")[0].innerHTML;
                sTel = sansBlanc(sansSpan(sTel));sText = sansBlanc(sansSpan(sText));
                if (sTel)	{Put_Notification("Call",sTel,1,sText);}
            },2000);
        };
        break;
    case 14 : // pagesjaunes/carte ------------------------------------------------------------------------------
        btnAppeler.setAttribute( 'class', 'icon icon-liste' );
        var cbuser = GM_getValue("cbuser", '');
        document.getElementsByClassName("outils")[0].appendChild( btnAppeler );
        btnAppeler.onclick=function(){
            var lTel = document.getElementsByClassName("item bi-contact-tel")[0].innerHTML;
            var sTel = chBalise(lTel,"title");
  //        alert(lTel+" ++++++  "+sTel+" ==== "+sTel.length);
            if (sTel.length>20) sTel = chBalise(lTel,"title",2);
            var lText = document.getElementsByClassName("bloc-denom")[0].innerHTML;
            var sText = chAffichageClass(lText,"denom")+' '+chAffichageClass(lText,"streetAddress")+' '+chAffichageClass(lText,"postalCode")+' '+chAffichageClass(lText,"addressLocality");
            if (sTel)	{Put_Notification("Call",sTel,1,sText);} else {alert("Sans n° Tel+ "+sText)}
        }
}



// ========================================================= utilitaires ==================================================================== utilitaires =========================================
// ========================================================= utilitaires ==================================================================== utilitaires =========================================

// Voir la fenetre Settings
btnParametres.onclick = function () {
    if (menuobj.style.visibility == 'hidden')  {
        menuobj.style.visibility = 'visible';
        document.activeElement.blur();
        menuobj.style.transition = 'right 1s ease-in-out';
        menuobj.style.WebkitTransition = 'right 1s ease-in-out';
        menuobj.style.MozTransition = 'right 1s ease-in-out';
        menuobj.style.right = '1px';
    }
    else {
        menuobj.style.visibility = 'hidden';
        document.activeElement.blur();
    }
};

// retourne la balise et la valeur sous la forme : <Balise  xsd:type="xsd:string">Valeur</Balise>
function AjBalise(pBalise,pValeur) {
	var sRetour = "<"+pBalise+"  xsd:type=\"xsd:string\" >"+pValeur+"</"+pBalise+">";
	return sRetour;
}

// Prépare la requete Put_Notification (call ou sms) à envoyer par SendHttp
function Put_Notification(pCallSms,pPhone,pImmediat,pText) {
    if (pCallSms.lastIndexOf("!")>=0)      {AfficheToast(pPhone+"<br>"+pText);return;}
    var cbuser = GM_getValue("cbuser", '');
    var cbpassword = GM_getValue("cbpassword", '');
    if (pPhone<=' ') return;
    if (!pText || pText<' ') pText="Call from callbridge ..monkey";
    var requete="";
    requete="<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/1999/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/1999/XMLSchema\"><soap:Body>";
    requete += AjBalise("pLogin",cbuser);		    	   // Login du compte CallBridge
    requete += AjBalise("pPass",cbpassword);				// Password du compte CallBridge
    requete += AjBalise("pDatetime",TheDateTime() );		// Renvoie sous forme :AAAAMMJJhhmmss  Ex: 20170120093425 pour le 20/01/2017 à 09h34m25s
    requete += AjBalise("pImmediate",pImmediat);			// 1 = appel immédiat    0 = affichage (pour action manuelle de l'utilisateur)
    requete += AjBalise("pRecipients","");			     	// Nom de l'utilisateur (smartphone) qui doit rappeler
    requete += AjBalise("pTitle","CallBridge");				// Titre de la notification
    requete += AjBalise("pPhones",pPhone);			        // Les n° de téléphone à appeler
    requete += AjBalise("pText",StringToUTF8(pText));		// Texte optionnel pour l'appelant
    requete += AjBalise("pPost","monkey");					// Poste ayant envoyé la notification
    requete += "</soap:Body></soap:Envelope>";
    var sFonction="Put_Notification_"+pCallSms;
    SendHttp(requete,sFonction,AfficheError,pPhone+"<br>"+pText);	// Envoi de la requete en XML et le nom du Service à contacter
}

// Envoi HTTP effectif en POST (Free ou Pro)
function SendHttp(pRequete,pService,pCallBack,pMess) {
    var cbFreePro = GM_getValue("cbFreePro", 0);
	var params = '';
    if (cbFreePro===0) pCallBack("Choose CallBridge Free or CallBridgePro");
    if (cbFreePro==1) params = 'xml='+pRequete+'&action='+"urn:CallBridgeApi/"+pService;
    if (cbFreePro==2) params = 'xml='+pRequete+'&action='+"urn:CallBridgeProApi/"+pService;
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	if (cbFreePro==1) xmlhttp.open("POST","https://www.mcleed.net/CallBridgeApi_WEB/awws/CallBridgeApi.awws",true);
	if (cbFreePro==2) xmlhttp.open("POST","https://www.mcleed.net/CallBridgeProApi_WEB/awws/CallBridgeProApi.awws",true);
//	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=UTF-8; ");

	// au retour de la fonction on indique combien sont envoyés
	xmlhttp.onreadystatechange = function() {
	//	alert("Rd:"+xmlhttp.readyState+" st:"+xmlhttp.status+"  tx:"+xmlhttp.statusText )
		if (xmlhttp.readyState==4 && xmlhttp.status==200 ) {
			var lRetour = xmlhttp.responseText;
			var tChaine = lRetour.split("Result>");
			var tReponse = tChaine[1].split("</");
			if (pCallBack)	{pCallBack(tReponse[0],pMess);}
  	}	};
	xmlhttp.send(params);
}

// Affiche OK ou OK de sendHttp Erreur ou Compte rendu
function AfficheError(pErreur,pMessage){
	var tMots = pErreur.split('/*');
    var sErreur = tMots[0], lAffiche="";
    if (tMots.length>1) sErreur+=" "+tMots[1];
	if (pErreur.substr(0,2)=="KO") {lAffiche=pErreur;} else {lAffiche=sErreur;}
	var sRc="<br/>";
	sErreur=lAffiche.replace(/;/g,sRc);
    if (pMessage) sErreur+=" : "+pMessage
    AfficheToast(sErreur);
}

// Retourne la date et heure locale sous la forme AAAAMMJJhhmmss
function TheDateTime(){
	var ladate=new Date();
	var Y=ladate.getFullYear();
	var M=ladate.getMonth()+1;
	if (M<10) {M = "0" + M;}
	var D=ladate.getDate();
	if (D<10) {D = "0" + D;}

	var h=ladate.getHours();
	if (h<10) {h = "0" + h;}
	var m=ladate.getMinutes();
	if (m<10) {m = "0" + m;}
	var s=ladate.getSeconds();
	if (s<10) {s = "0" + s;}
	return Y+""+M+""+D+""+h+""+m+""+s;
}

//Menu Icone theme
var headers = document.getElementsByTagName('h2');
var menu =  '<li class="uppercase bold trackable" style="text-align: center;text-transform: uppercase;font-weight: 700;">CallBridge Settings</li><br>';
    menu += '<li>Utilisateur (email):</li><li><input type="text" id="cbmail" name="email"></li><br>';
    menu += '<li>Mot de passe:</li><li><input type="text" id="cbpassword" name="Password"></li><br>';
    menu += '<li><button id="cbmodepro" type=button title="Vérifier si l\'utilisateur CallBigePro existe">Pro</button> ';
    menu += '<button id="cbmodefree" type=button title="Vérifier si l\'utilisateur CallBigeFree existe">Free</button></li><br>';
    menu += '<li><button id="cbenregistre" type="button" title="Enregistrer le Login + Mot de passe">SAVE</button> ';
    menu += '<button id="cbessai" type="button" title="Envoyer une notification test au smartphone">Test</button> ';
    menu += '<button id="cbclose" type="button" title="Fermer les settings">Fermer</button></li>';
    menu += "<p><br>Aller sur le site <a href='https://getcallbridge.com/fr/appelez-directement-depuis-vos-sites-preferes-avec-callbridge' target='_blank' title='Utilisateur Free? Cliquez-ici pour souscrire à ce plugin'>CallBridge</a></p>";


// Create menu
if (menu !== '') {
  menuobj = document.createElement('ul');
  menuobj.style.position = 'fixed';
  menuobj.style.top = '57px';
  menuobj.style.right = '-200px';
  menuobj.style.padding = '25px';
  menuobj.style.backgroundColor = '#fff';
  menuobj.style.zIndex = '6535';
  //menuobj.style.border = 'solid 3px #f56b2a';
  menuobj.style.boxShadow = '0 0 3rem rgba(48,48,48,0.4)';
  menuobj.innerHTML = menu;
  menuobj.style.visibility = 'hidden';
  body = document.getElementsByTagName('body')[0];
  body.appendChild(menuobj);
  var cbuser = document.getElementById('cbmail');
  cbuser.value = GM_getValue("cbuser", '');
  var cbpassword = document.getElementById('cbpassword');
  cbpassword.value = GM_getValue("cbpassword", '');
  cbAfficheFreeOrPro();
}

// sortie de cbmail avec changement : choix automatique Pro/Free 1/2
cbmail.onchange = function (){
   SaveLogin();
   GM_setValue("cbFreePro",1); // en FREE
   Get_Verif_Email(cbmail_onchange_suite);
};

// sortie de cbmail avec changement : choix automatique Pro/Free 2/2
function cbmail_onchange_suite(pTexte){
   if (pTexte.substring(0,2)=="KO") {GM_setValue("cbFreePro",0);} else {cbAfficheFreeOrPro();return;}
   cbAfficheFreeOrPro();
   GM_setValue("cbFreePro",2); // en PRO
   Get_Verif_Email(MailExiste);
}

// Quel mode CallBridge Free ou Pro ?
function cbAfficheFreeOrPro(){
  var cbFreePro = GM_getValue("cbFreePro", 0);
  var cbfree = document.getElementById('cbmodefree');
  if (cbFreePro==1) cbfree.style.backgroundColor="white"; else cbfree.style.backgroundColor='';
  var cbpro = document.getElementById('cbmodepro');
  if (cbFreePro==2) cbpro.style.backgroundColor="white"; else cbpro.style.backgroundColor='';
}

// mettre CallBridge en Free
cbmodefree.onclick = function () {
   SaveLogin();
   GM_setValue("cbFreePro",1);
   Get_Verif_Email(MailExiste);
};

// mettre CallBridge en Pro
cbmodepro.onclick = function () {
   SaveLogin();
   GM_setValue("cbFreePro", 2);
   Get_Verif_Email(MailExiste);
};

// Toast <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var toast='<li id="cbtoast" style="text-align: center;font-weight: 90;">Event Created</li>';
// Create toast
if (toast !== '') {
    toastobj = document.createElement('ul');
    toastobj.style.position = 'fixed';
    //toastobj.style.top = '100px';
    //toastobj.style.right = '10px';
    //toastobj.style.padding = '25px';
    toastobj.style.minWidth = '250px';
    toastobj.style.bottom = '-30px';
    toastobj.style.marginLeft = '-125px';
    toastobj.style.left = '50%';
    toastobj.style.padding = '16px';
    toastobj.style.textAlign = 'center';
    toastobj.style.borderRadius = '2px';
    toastobj.style.backgroundColor = '#333';
    toastobj.style.color = '#fff';
    toastobj.style.zIndex = '15';
    toastobj.style.boxShadow = '0 0 3rem rgba(48,48,48,0.4)';
    toastobj.innerHTML = toast;
    toastobj.style.visibility = 'hidden';
    body = document.getElementsByTagName('body')[0];
    body.appendChild(toastobj);
}


// Affiche le Toast
function AfficheToast(pText) {
    var cbtoast = document.getElementById('cbtoast');
    cbtoast.innerHTML=pText;
    toastobj.style.visibility = 'visible';
    toastobj.style.transition = 'bottom 1s ease-in-out';
    toastobj.style.WebkitTransition = 'bottom 1s ease-in-out';
    toastobj.style.MozTransition = 'bottom 1s ease-in-out';
    toastobj.style.bottom = '70px';
    setTimeout(function() {
        toastobj.style.transition = 'bottom 1s ease-in-out';
        toastobj.style.WebkitTransition = 'bottom 1s ease-in-out';
        toastobj.style.MozTransition = 'bottom 1s ease-in-out';
        toastobj.style.bottom = '-70px';
    },1500);
}

// Préparer la requete pour Get_Verif_Email
function Get_Verif_Email(pCallBack){
   var cbuser = GM_getValue("cbuser",'');
   var cbpassword = GM_getValue("cbpassword",'');
   var requete;
   requete="<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/1999/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/1999/XMLSchema\"><soap:Body>";
   requete += AjBalise("pDatetime",TheDateTime() );			// Renvoie sous forme :AAAAMMJJhhmmss  Ex: 20170120093425 pour le 20/01/2017 à 09h34m25s
   requete += AjBalise("pEmail",cbuser);		   			// Login du compte CallBridge
   requete += AjBalise("pLang","?");						// en anglais
   requete += "</soap:Body></soap:Envelope>";
   cbAfficheFreeOrPro();
   SendHttp(requete,"Get_Verif_Email",pCallBack);		// Envoi de la requete en XML et le nom du Service à contacter
}

// Retour Http
function MailExiste(pTexte){
    if (pTexte.substring(0,2)=="KO") {GM_setValue("cbFreePro",0);}
    cbAfficheFreeOrPro();
}

function SaveLogin(){
   var cbuser = document.getElementById('cbmail');
   GM_setValue("cbuser", cbuser.value);
   var cbpassword = document.getElementById('cbpassword');
   GM_setValue("cbpassword", cbpassword.value);
}


// enregistrer les login et password
cbenregistre.onclick = function () {
   SaveLogin();
   var cbFreePro = GM_getValue("cbFreePro", 0);
   if (cbFreePro===0) {alert("Choose a CallBridge or a CallBridgePro account");return;}
   menuobj.style.visibility = 'hidden';
   location.reload();
};

// essai d'envoi par callbridge
cbessai.onclick = function () {
   Put_Notification("Call","0607080910",0);
   menuobj.style.visibility = 'hidden';
};

// essai d'envoi par callbridge
cbclose.onclick = function () {
    menuobj.style.visibility = 'hidden';
};


function StringToUTF8(pTexte){
    sEot=String.fromCharCode(4);
    var sText0="", sText1='', sText2=pTexte, sText3='', i=10, t='';
    while (sText0!=sText2 && i>0){
        i--;sText0=sText2;sText1=sText2;
        sText2=sText1.replace("È","è");sText1=sText2;
        sText2=sText1.replace("É","é");sText1=sText2;
        sText2=sText1.replace("Ê","ê");sText1=sText2;
        sText2=sText1.replace("&amp;","¤");sText1=sText2;
        sText2=sText1.replace("€","\$");sText1=sText2;
        sText2=sText1.replace(sEot,"?");sText1=sText2;
    }
    var sortie=unescape(encodeURIComponent(sText2));
    return sortie;
}

function UTF8ToAscii(pTexte){
	var sortie=decodeURIComponent(escape(pTexte));
	return sortie;
}

function chBalise(pText,pBalise,pNeme){
    var sBalise=pBalise+'="',nNeme=1, n=0;
    var iDeb=0, iFin=0, F=1, L=sBalise.length;
    if (pNeme) {nNeme=pNeme;}
    for (i=0;i<pText.length;i++)
        if (F==1 && pText.substr(i,L)==sBalise)      {iDeb=i+L;n++;if (n==nNeme) F=2;}
    if (iDeb<1) return '';
    for (i=iDeb;i<pText.length;i++)
        if (F==2 && pText.substr(i,1)=='"')           {iFin=i;F=3;}
    if (iFin===0) return '';
    var i=iFin-iDeb;
    return pText.substr(iDeb,i);
}

// On enlève les blancs devant et derrière
function sansBlanc(pText){
    var d=0,f=0,sRc=String.fromCharCode(10),sNl=String.fromCharCode(13),sortie='';

    // les RC remplacés en blanc
    for (i=0;i<pText.length;i++)
        if (pText.substr(i,1)==sRc)  {sortie+=' ';} else {sortie+=pText.substr(i,1);}
    pText=sortie;sortie='';

    // les blancs non sécables sont remplacés
    for (i=0;i<pText.length;i++)
        if (pText.substr(i,6)=='&nbsp;')  {sortie+=' ';i+=5;} else {sortie+=pText.substr(i,1);}
    pText=sortie;sortie='';

    // les doubles blancs en 1 blanc
    for (i=0;i<pText.length;i++)
        if (pText.substr(i,2)!='  ')  {sortie+=pText.substr(i,1);}
    pText=sortie;sortie='';

    // les <br> sont remplacés
    for (i=0;i<pText.length;i++)
        if (pText.substr(i,4)=='<br>')  {sortie+='; ';i+=3;} else {sortie+=pText.substr(i,1);}
    pText=sortie;sortie='';

    // on délimite
    for (i=0;i<pText.length;i++) {
        if (pText.substr(i,1)==' ' || pText.substr(i,1)==sRc || pText.substr(i,1)<"!")  {d=i;} else {d=i;i=pText.length;}}
    for (i=pText.length;i>0;i--) {
        if (pText.substr(i,1)==' ' || pText.substr(i,1)==sRc || pText.substr(i,1)<"!")  {f=i;} else {f=i;i=0;}}

    return pText.substr(d,f-d+1);
}

// On enlève les RC/NL
function sansRC(pText){
    var sRc=String.fromCharCode(10),sNl=String.fromCharCode(13),sortie='';
    for (i=0;i<pText.length;i++) {
        if (pText.substr(i,1)==sRc || pText.substr(i,1)==sNl)  {sortie+=' ';} else {sortie+=pText.substr(i,1);}}
    return sortie;
}

// on divise la chaine pText avec le séparateur (",")
function extraitChaine(pText,pIndice,pSep){
    var sChaines=[], j=1, L=pSep.length, s1='';
    sChaines[j]='';sChaines[pIndice]='';
    for (i=0;i<pText.length;i++) {
        if (pText.substr(i,L)==pSep)  {j++;sChaines[j]='';} else {sChaines[j]+=pText.substr(i,1);}
    }
    if (sChaines[pIndice]==='') {s1=' ';} else {s1=sChaines[pIndice].replace("&nbsp;"," ");}
    return s1;
}

// Tout ce qui est affiché <balise>..affiché..</balise>
function chAffichages(pText){
    var j=0,k=0,sortie='',sText2='',k=0;
    for (i=0;i<pText.length;i++){
        if (pText.substr(i,1)=='>')  {k=1;j=1;i++;}
        if (pText.substr(i,1)=='<')  {k=1;j=0;i++;}
        if (j==1) sortie+=pText.substr(i,1);
    }
    if (k=0) sortie=pText;
    sText2=sortie.replace("&amp;","&");sortie=sText2;
    sText2=sortie.replace("&amp;","&");sortie=sText2;
    return sortie;
}

// Tout ce qui est affiché pour la class xxx   :   <balise class="xxx">..affiché..</balise>
function chAffichageClass(pText,pClass){
    var j=0,k=0,sortie='',sText2='';
    var iDebut = pText.indexOf(pClass);
    if (iDebut<0) return '';
    for (i=iDebut;i<pText.length;i++){
        if (pText.substr(i,1)=='>' && j==0)  {j=1;i++;}
        if (pText.substr(i,1)=='<')  {j=2;i++;}
        if (j==1) sortie+=pText.substr(i,1);
    }
    sText2=sortie.replace("&amp;","&");sortie=sText2;
    sText2=sortie.replace("&amp;","&");sortie=sText2;
    return sortie;
}

// Sans les balises <span>  et <i> .. </i>  et les NL
function sansSpan(pText){
    var sortie='',enSpan=0;
    // On enlève les <span>
    for (i=0;i<pText.length;i++)
        if (pText.substr(i,6)=='<span>')  {sortie+=' ';i+=5;} else {sortie+=pText.substr(i,1);}
    pText=sortie;sortie='';

    // On enlève les </span>
    for (i=0;i<pText.length;i++)
        if (pText.substr(i,7)=='</span>')  {sortie+=' ';i+=6;} else {sortie+=pText.substr(i,1);}
    pText=sortie;sortie='';

    // On enlève les <span .. >
    for (i=0;i<pText.length;i++)
        if (pText.substr(i,6)=='<span ')  {
            sortie+=' ';i+=5;enSpan=1;}
        else {
            if (enSpan==1 && pText.substr(i,1)==">" ) {i++;enSpan=0;}
            if (enSpan===0) sortie+=pText.substr(i,1);
        }
    pText=sortie;sortie='';enSpan=0;

    // On enlève les <i .. </i>
    for (i=0;i<pText.length;i++)
        if (pText.substr(i,3)=='<i ' || pText.substr(i,3)=='<i>')  {
            sortie+=' ';i+=2;enSpan=1;}
        else {
            if (enSpan==1 && pText.substr(i,4)=="</i>" ) {i+=4;enSpan=0;}
            if (enSpan===0) sortie+=pText.substr(i,1);
        }

    return sortie;
}

// Donne la 1ère partie numérique
function leNumerique(pText){
    var sortie='',cOu=0,cNum=0;
    for (i=0;i<pText.length;i++){
        var car=pText.substr(i,1);cNum=0;
        if (car>' '){
            if (car>='0' && car<='9')    cNum=1; // le caractere est numérique
            if (cOu==1 && cNum==0)        cOu=2; // fin de recherche
            if (cOu==0 && cNum==1)        cOu=1; // début de recherche
            if (cOu==1 && cNum==1)  sortie+=car;
        }
    }
    return sortie;
}
