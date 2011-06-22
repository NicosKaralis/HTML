window.___jsl=window.___jsl||{};
window.___jsl.h=window.___jsl.h||'r;gc/21773286-02b1a9f6';
window.___gpq=[];
window.gapi=window.gapi||{};
window.gapi.plusone=window.gapi.plusone||(function(){
  function f(n){return function(){window.___gpq.push(n,arguments)}}
  return{go:f('go'),render:f('render')}})();
function __bsld(){var p=window.gapi.plusone=window.googleapisv0.plusone;var f;while(f=window.___gpq.shift()){
  p[f]&&p[f].apply(p,window.___gpq.shift())}
if (gadgets.config.get("gwidget")["parsetags"]!=="explicit"){gapi.plusone.go();}}
window['___jsl'] = window['___jsl'] || {};window['___jsl']['u'] = 'https:\/\/apis.google.com\/js\/plusone.js';window['___jsl']['f'] = ['googleapis.client','plusone'];var jsloader=window.jsloader||{};
var gapi=window.gapi||{};
(function(){function k(){return window.___jsl=window.___jsl||{}}function m(b,e,c,d){c=o(c).join(b);d&&d.length>0&&(c+=e+o(d).join(b));return c}function r(b){for(var e={},c=0,d;d=b[c];c++)e[d]=1;return e}function o(b){var e=[],c;for(c in r(b))e.push(c);return e.sort()}function s(b){return(b=t.match(b))&&b[2]}function u(b){l=g="";p={};j=[];h=window.console||window.opera&&window.opera.postError;t=b;if(b=s(w)||s(x)||k().h){b=b.split(";");g=b.shift();var e=g!=="s"&&g!=="r";l=e?b.shift():"https://ssl.gstatic.com/webclient/js";
n=(e=g!=="s"&&g!=="i")&&b.shift();v=(e=g==="d")&&(b.shift()||"gcjs-3p");if(e=g==="s"||g==="i")for(var e=0,c;c=b[e];e++){c=c.split("@");var d=p,a,f=c[0].split("!");a=f[0].split(":");f=f[1]&&f[1].split(":");a=m(":","!",a,f);d[a]=c[1]}}}var w=/\?([^&#]*&)*jsh=([^&#]*)/,x=/#([^&]*&)*jsh=([^&]*)/,y=/^https:\/\/ssl.gstatic.com\/webclient\/js(\/[a-zA-Z0-9_\-]+)*\/[a-zA-Z0-9_\-\.:!]+\.js$/,z=/^(https?:)?\/\/([^/:@]*)(:[0-9]+)?\//,g,l,v,n,p,j,h,t;u(document.location.href);jsloader.load=function(b,e){var c;
if(!b||b.length==0)h&&h.warn("Cannot load empty features.");else{var d;d=r(j);for(var a=!0,f=0,i;i=a&&b[f];f++)a=a&&d[i];(d=a)?(d="Cannot load loaded features ["+b.join(",")+"].",h&&h.warn(d)):g==="s"||g==="i"?(d=b,(c=p[m(":","!",d,j)])?c=l+"/"+c+".js":(d="Cannot find features ["+d.join(",")+"], except ["+j.join(",")+"].",h&&h.warn(d),c=void 0)):g==="d"?(d=l+"/"+m(":","!",b,j),d+=".js?container="+v+"&c=2&jsload=0",n&&(d+="&r="+n),c=d):g==="r"||g==="f"?c=l+"/"+n+"/"+m("__","--",b,j)+".js":(d="Cannot respond for features ["+
b.join(",")+"].",h&&h.warn(d))}d=b;a=e;if(c){if(a){if(k().c)throw"Cannot continue until a pending callback completes.";k().c=a;k().o=1}a=c;g==="s"||g==="r"?a=a.match(y):(f=a.match(z),(a=k().m)&&f?(f=f[2],i=f.lastIndexOf(a),a=(i==0||a.charAt(0)=="."||f.charAt(i-1)==".")&&f.length-a.length==i):a=!1);if(!a)throw"Cannot load url "+c+".";if(window.___gapisync===!0)a=!0;else{a=!1;f=document.getElementsByTagName("meta");i=0;for(var q;q=!a&&f[i];++i)"generator"==q.getAttribute("name")&&"blogger"==q.getAttribute("content")&&
(a=!0)}a?document.write('<script src="'+c+'"><\/script>'):(a=document.createElement("script"),a.setAttribute("src",c),document.getElementsByTagName("head")[0].appendChild(a));j=o(j.concat(d))}else a&&a()};jsloader.reinitialize_=function(b){u(b)}})();
gapi.load=function(a,b){jsloader.load(a.split(":"),b)};
gapi.load('googleapis.client:plusone', window['__bsld']);