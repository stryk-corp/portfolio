(function(){
  // Simple cookie consent and selective analytics loader
  function setCookie(name,value,days){
    var expires = "";
    if(days){
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = "; expires="+date.toUTCString();
    }
    document.cookie = name+"="+value+expires+"; path=/";
  }
  function getCookie(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i<ca.length;i++){
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  function loadPlausible(){
    if(window.__plausibleLoaded) return;
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://plausible.io/js/plausible.js';
    s.setAttribute('data-domain','portfolio.drstryk.com');
    document.head.appendChild(s);
    window.__plausibleLoaded = true;
  }

  function showBanner(){
    if(document.getElementById('cookie-consent-banner')) return;
    var banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.style.position = 'fixed';
    banner.style.right = '16px';
    banner.style.bottom = '16px';
    banner.style.background = 'rgba(0,0,0,0.85)';
    banner.style.color = '#fff';
    banner.style.padding = '12px 16px';
    banner.style.borderRadius = '8px';
    banner.style.zIndex = 9999;
    banner.innerHTML = '<div style="max-width:320px">We use anonymous analytics to improve the site. <button id="accept-analytics" style="margin-left:8px;padding:6px 8px;border-radius:6px;border:0;background:#10b981;color:#fff;cursor:pointer">Accept</button> <button id="decline-analytics" style="margin-left:8px;padding:6px 8px;border-radius:6px;border:0;background:#374151;color:#fff;cursor:pointer">Decline</button></div>';
    document.body.appendChild(banner);
    document.getElementById('accept-analytics').addEventListener('click', function(){
      setCookie('analytics_consent','yes',365);
      loadPlausible();
      banner.remove();
    });
    document.getElementById('decline-analytics').addEventListener('click', function(){
      setCookie('analytics_consent','no',365);
      banner.remove();
    });
  }

  // Initialize
  var consent = getCookie('analytics_consent');
  if(consent === 'yes'){ loadPlausible(); }
  else if(consent === 'no'){ /* respect preference */ }
  else { document.addEventListener('DOMContentLoaded', showBanner); }
})();
