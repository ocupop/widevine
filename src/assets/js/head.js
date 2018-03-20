(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

},{}],2:[function(require,module,exports){
require('modernizr');

var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Open Sans']
  },
  // typekit: { id: '' },
  loading: function() {
    window.console.log('LOADING FONTS');
  },
  active: function() {
    window.console.log('ACTIVE FONTS');
  },
  inactive: function() {},
  fontloading: function(familyName, fvd) {},
  fontactive: function(familyName, fvd) {},
  fontinactive: function(familyName, fvd) {},
  timeout: 2000 // Set the timeout to two seconds/
});
},{"modernizr":3,"webfontloader":1}],3:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-addtest-fnbind-printshiv-testprop-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var tests = [];
  

  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.5.0',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };

  

  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  

  var classes = [];
  

  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * hasOwnProp is a shim for hasOwnProperty that is needed for Safari 2.0 support
   *
   * @author kangax
   * @access private
   * @function hasOwnProp
   * @param {object} object - The object to check for a property
   * @param {string} property - The property to check for
   * @returns {boolean}
   */

  // hasOwnProperty shim by kangax needed for Safari 2.0 support
  var hasOwnProp;

  (function() {
    var _hasOwnProperty = ({}).hasOwnProperty;
    /* istanbul ignore else */
    /* we have no way of testing IE 5.5 or safari 2,
     * so just assume the else gets hit */
    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
      hasOwnProp = function(object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function(object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }
  })();

  

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;
  

  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';
  

  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      if (isSVG) {
        docElement.className.baseVal = className;
      } else {
        docElement.className = className;
      }
    }

  }

  ;


   // _l tracks listeners for async tests, as well as tests that execute after the initial run
  ModernizrProto._l = {};

  /**
   * Modernizr.on is a way to listen for the completion of async tests. Being
   * asynchronous, they may not finish before your scripts run. As a result you
   * will get a possibly false negative `undefined` value.
   *
   * @memberof Modernizr
   * @name Modernizr.on
   * @access public
   * @function on
   * @param {string} feature - String name of the feature detect
   * @param {function} cb - Callback function returning a Boolean - true if feature is supported, false if not
   * @example
   *
   * ```js
   * Modernizr.on('flash', function( result ) {
   *   if (result) {
   *    // the browser has flash
   *   } else {
   *     // the browser does not have flash
   *   }
   * });
   * ```
   */

  ModernizrProto.on = function(feature, cb) {
    // Create the list of listeners if it doesn't exist
    if (!this._l[feature]) {
      this._l[feature] = [];
    }

    // Push this test on to the listener list
    this._l[feature].push(cb);

    // If it's already been resolved, trigger it on next tick
    if (Modernizr.hasOwnProperty(feature)) {
      // Next Tick
      setTimeout(function() {
        Modernizr._trigger(feature, Modernizr[feature]);
      }, 0);
    }
  };

  /**
   * _trigger is the private function used to signal test completion and run any
   * callbacks registered through [Modernizr.on](#modernizr-on)
   *
   * @memberof Modernizr
   * @name Modernizr._trigger
   * @access private
   * @function _trigger
   * @param {string} feature - string name of the feature detect
   * @param {function|boolean} [res] - A feature detection function, or the boolean =
   * result of a feature detection function
   */

  ModernizrProto._trigger = function(feature, res) {
    if (!this._l[feature]) {
      return;
    }

    var cbs = this._l[feature];

    // Force async
    setTimeout(function() {
      var i, cb;
      for (i = 0; i < cbs.length; i++) {
        cb = cbs[i];
        cb(res);
      }
    }, 0);

    // Don't trigger these again
    delete this._l[feature];
  };

  /**
   * addTest allows you to define your own feature detects that are not currently
   * included in Modernizr (under the covers it's the exact same code Modernizr
   * uses for its own [feature detections](https://github.com/Modernizr/Modernizr/tree/master/feature-detects)). Just like the offical detects, the result
   * will be added onto the Modernizr object, as well as an appropriate className set on
   * the html element when configured to do so
   *
   * @memberof Modernizr
   * @name Modernizr.addTest
   * @optionName Modernizr.addTest()
   * @optionProp addTest
   * @access public
   * @function addTest
   * @param {string|object} feature - The string name of the feature detect, or an
   * object of feature detect names and test
   * @param {function|boolean} test - Function returning true if feature is supported,
   * false if not. Otherwise a boolean representing the results of a feature detection
   * @example
   *
   * The most common way of creating your own feature detects is by calling
   * `Modernizr.addTest` with a string (preferably just lowercase, without any
   * punctuation), and a function you want executed that will return a boolean result
   *
   * ```js
   * Modernizr.addTest('itsTuesday', function() {
   *  var d = new Date();
   *  return d.getDay() === 2;
   * });
   * ```
   *
   * When the above is run, it will set Modernizr.itstuesday to `true` when it is tuesday,
   * and to `false` every other day of the week. One thing to notice is that the names of
   * feature detect functions are always lowercased when added to the Modernizr object. That
   * means that `Modernizr.itsTuesday` will not exist, but `Modernizr.itstuesday` will.
   *
   *
   *  Since we only look at the returned value from any feature detection function,
   *  you do not need to actually use a function. For simple detections, just passing
   *  in a statement that will return a boolean value works just fine.
   *
   * ```js
   * Modernizr.addTest('hasJquery', 'jQuery' in window);
   * ```
   *
   * Just like before, when the above runs `Modernizr.hasjquery` will be true if
   * jQuery has been included on the page. Not using a function saves a small amount
   * of overhead for the browser, as well as making your code much more readable.
   *
   * Finally, you also have the ability to pass in an object of feature names and
   * their tests. This is handy if you want to add multiple detections in one go.
   * The keys should always be a string, and the value can be either a boolean or
   * function that returns a boolean.
   *
   * ```js
   * var detects = {
   *  'hasjquery': 'jQuery' in window,
   *  'itstuesday': function() {
   *    var d = new Date();
   *    return d.getDay() === 2;
   *  }
   * }
   *
   * Modernizr.addTest(detects);
   * ```
   *
   * There is really no difference between the first methods and this one, it is
   * just a convenience to let you write more readable code.
   */

  function addTest(feature, test) {

    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          addTest(key, feature[ key ]);
        }
      }
    } else {

      feature = feature.toLowerCase();
      var featureNameSplit = feature.split('.');
      var last = Modernizr[featureNameSplit[0]];

      // Again, we don't check for parent test existence. Get that right, though.
      if (featureNameSplit.length == 2) {
        last = last[featureNameSplit[1]];
      }

      if (typeof last != 'undefined') {
        // we're going to quit if you're trying to overwrite an existing test
        // if we were to allow it, we'd do this:
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
        //   docElement.className = docElement.className.replace( re, '' );
        // but, no rly, stuff 'em.
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test;

      // Set the value (this is the magic, right here).
      if (featureNameSplit.length == 1) {
        Modernizr[featureNameSplit[0]] = test;
      } else {
        // cast to a Boolean, if not one already
        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
          Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
        }

        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;
      }

      // Set a single class (either `feature` or `no-feature`)
      setClasses([(!!test && test != false ? '' : 'no-') + featureNameSplit.join('-')]);

      // Trigger the event
      Modernizr._trigger(feature, test);
    }

    return Modernizr; // allow chaining.
  }

  // After all the tests are run, add self to the Modernizr prototype
  Modernizr._q.push(function() {
    ModernizrProto.addTest = addTest;
  });

  


/**
  * @optionName html5printshiv
  * @optionProp html5printshiv
  */

  // Take the html5 variable out of the html5shiv scope so we can return it.
  var html5;
  if (!isSVG) {

    /**
     * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
      /** version */
      var version = '3.7.3';

      /** Preset options */
      var options = window.html5 || {};

      /** Used to skip problem elements */
      var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

      /** Not all elements can be cloned in IE **/
      var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

      /** Detect whether the browser supports default html5 styles */
      var supportsHtml5Styles;

      /** Name of the expando, to work with multiple documents or to re-shiv one document */
      var expando = '_html5shiv';

      /** The id for the the documents expando */
      var expanID = 0;

      /** Cached data for each document */
      var expandoData = {};

      /** Detect whether the browser supports unknown elements */
      var supportsUnknownElements;

      (function() {
        try {
          var a = document.createElement('a');
          a.innerHTML = '<xyz></xyz>';
          //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
          supportsHtml5Styles = ('hidden' in a);

          supportsUnknownElements = a.childNodes.length == 1 || (function() {
            // assign a false positive if unable to shiv
            (document.createElement)('a');
            var frag = document.createDocumentFragment();
            return (
              typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
            );
          }());
        } catch(e) {
          // assign a false positive if detection fails => unable to shiv
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }

      }());

      /*--------------------------------------------------------------------------*/

      /**
       * Creates a style sheet with the given CSS text and adds it to the document.
       * @private
       * @param {Document} ownerDocument The document.
       * @param {String} cssText The CSS text.
       * @returns {StyleSheet} The style element.
       */
      function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

      /**
       * Returns the value of `html5.elements` as an array.
       * @private
       * @returns {Array} An array of shived element node names.
       */
      function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

      /**
       * Extends the built-in list of html5 elements
       * @memberOf html5
       * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
       * @param {Document} ownerDocument The context document.
       */
      function addElements(newElements, ownerDocument) {
        var elements = html5.elements;
        if(typeof elements != 'string'){
          elements = elements.join(' ');
        }
        if(typeof newElements != 'string'){
          newElements = newElements.join(' ');
        }
        html5.elements = elements +' '+ newElements;
        shivDocument(ownerDocument);
      }

      /**
       * Returns the data associated to the given document
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Object} An object of data.
       */
      function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
          data = {};
          expanID++;
          ownerDocument[expando] = expanID;
          expandoData[expanID] = data;
        }
        return data;
      }

      /**
       * returns a shived element for the given nodeName and document
       * @memberOf html5
       * @param {String} nodeName name of the element
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived element.
       */
      function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
          ownerDocument = document;
        }
        if(supportsUnknownElements){
          return ownerDocument.createElement(nodeName);
        }
        if (!data) {
          data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
          node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
          node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
          node = data.createElem(nodeName);
        }

        // Avoid adding some elements to fragments in IE < 9 because
        // * Attributes like `name` or `type` cannot be set/changed once an element
        //   is inserted into a document/fragment
        // * Link elements with `src` attributes that are inaccessible, as with
        //   a 403 response, will cause the tab/window to crash
        // * Script elements appended to fragments will execute when their `src`
        //   or `text` property is set
        return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
      }

      /**
       * returns a shived DocumentFragment for the given document
       * @memberOf html5
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived DocumentFragment.
       */
      function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
          ownerDocument = document;
        }
        if(supportsUnknownElements){
          return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
        for(;i<l;i++){
          clone.createElement(elems[i]);
        }
        return clone;
      }

      /**
       * Shivs the `createElement` and `createDocumentFragment` methods of the document.
       * @private
       * @param {Document|DocumentFragment} ownerDocument The document.
       * @param {Object} data of the document.
       */
      function shivMethods(ownerDocument, data) {
        if (!data.cache) {
          data.cache = {};
          data.createElem = ownerDocument.createElement;
          data.createFrag = ownerDocument.createDocumentFragment;
          data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
          //abort shiv
          if (!html5.shivMethods) {
            return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                        'var n=f.cloneNode(),c=n.createElement;' +
                                                        'h.shivMethods&&(' +
                                                        // unroll the `createElement` calls
                                                        getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
                                                          data.createElem(nodeName);
                                                          data.frag.createElement(nodeName);
                                                          return 'c("' + nodeName + '")';
                                                        }) +
          ');return n}'
                                                       )(html5, data.frag);
      }

      /*--------------------------------------------------------------------------*/

      /**
       * Shivs the given document.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivDocument(ownerDocument) {
        if (!ownerDocument) {
          ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
                                        // corrects block display not defined in IE6/7/8/9
                                        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                        // adds styling not present in IE6/7/8/9
                                        'mark{background:#FF0;color:#000}' +
                                        // hides non-rendered elements
                                        'template{display:none}'
                                       );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }

      /*--------------------------------------------------------------------------*/

      /**
       * The `html5` object is exposed so that more elements can be shived and
       * existing shiving can be detected on iframes.
       * @type Object
       * @example
       *
       * // options can be changed before the script is included
       * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
       */
      var html5 = {

        /**
         * An array or space separated string of node names of the elements to shiv.
         * @memberOf html5
         * @type Array|String
         */
        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',

        /**
         * current version of html5shiv
         */
        'version': version,

        /**
         * A flag to indicate that the HTML5 style sheet should be inserted.
         * @memberOf html5
         * @type Boolean
         */
        'shivCSS': (options.shivCSS !== false),

        /**
         * Is equal to true if a browser supports creating unknown/HTML5 elements
         * @memberOf html5
         * @type boolean
         */
        'supportsUnknownElements': supportsUnknownElements,

        /**
         * A flag to indicate that the document's `createElement` and `createDocumentFragment`
         * methods should be overwritten.
         * @memberOf html5
         * @type Boolean
         */
        'shivMethods': (options.shivMethods !== false),

        /**
         * A string to describe the type of `html5` object ("default" or "default print").
         * @memberOf html5
         * @type String
         */
        'type': 'default',

        // shivs the document according to the specified `html5` object options
        'shivDocument': shivDocument,

        //creates a shived element
        createElement: createElement,

        //creates a shived documentFragment
        createDocumentFragment: createDocumentFragment,

        //extends list of elements
        addElements: addElements
      };

      /*--------------------------------------------------------------------------*/

      // expose html5
      window.html5 = html5;

      // shiv the document
      shivDocument(document);

      /*------------------------------- Print Shiv -------------------------------*/

      /** Used to filter media types */
      var reMedia = /^$|\b(?:all|print)\b/;

      /** Used to namespace printable elements */
      var shivNamespace = 'html5shiv';

      /** Detect whether the browser supports shivable style sheets */
      var supportsShivableSheets = !supportsUnknownElements && (function() {
        // assign a false negative if unable to shiv
        var docEl = document.documentElement;
        return !(
          typeof document.namespaces == 'undefined' ||
            typeof document.parentWindow == 'undefined' ||
            typeof docEl.applyElement == 'undefined' ||
            typeof docEl.removeNode == 'undefined' ||
            typeof window.attachEvent == 'undefined'
        );
      }());

      /*--------------------------------------------------------------------------*/

      /**
       * Wraps all HTML5 elements in the given document with printable elements.
       * (eg. the "header" element is wrapped with the "html5shiv:header" element)
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Array} An array wrappers added.
       */
      function addWrappers(ownerDocument) {
        var node,
          nodes = ownerDocument.getElementsByTagName('*'),
          index = nodes.length,
          reElements = RegExp('^(?:' + getElements().join('|') + ')$', 'i'),
          result = [];

        while (index--) {
          node = nodes[index];
          if (reElements.test(node.nodeName)) {
            result.push(node.applyElement(createWrapper(node)));
          }
        }
        return result;
      }

      /**
       * Creates a printable wrapper for the given element.
       * @private
       * @param {Element} element The element.
       * @returns {Element} The wrapper.
       */
      function createWrapper(element) {
        var node,
          nodes = element.attributes,
          index = nodes.length,
          wrapper = element.ownerDocument.createElement(shivNamespace + ':' + element.nodeName);

        // copy element attributes to the wrapper
        while (index--) {
          node = nodes[index];
          node.specified && wrapper.setAttribute(node.nodeName, node.nodeValue);
        }
        // copy element styles to the wrapper
        wrapper.style.cssText = element.style.cssText;
        return wrapper;
      }

      /**
       * Shivs the given CSS text.
       * (eg. header{} becomes html5shiv\:header{})
       * @private
       * @param {String} cssText The CSS text to shiv.
       * @returns {String} The shived CSS text.
       */
      function shivCssText(cssText) {
        var pair,
          parts = cssText.split('{'),
          index = parts.length,
          reElements = RegExp('(^|[\\s,>+~])(' + getElements().join('|') + ')(?=[[\\s,>+~#.:]|$)', 'gi'),
          replacement = '$1' + shivNamespace + '\\:$2';

        while (index--) {
          pair = parts[index] = parts[index].split('}');
          pair[pair.length - 1] = pair[pair.length - 1].replace(reElements, replacement);
          parts[index] = pair.join('}');
        }
        return parts.join('{');
      }

      /**
       * Removes the given wrappers, leaving the original elements.
       * @private
       * @params {Array} wrappers An array of printable wrappers.
       */
      function removeWrappers(wrappers) {
        var index = wrappers.length;
        while (index--) {
          wrappers[index].removeNode();
        }
      }

      /*--------------------------------------------------------------------------*/

      /**
       * Shivs the given document for print.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivPrint(ownerDocument) {
        var shivedSheet,
          wrappers,
          data = getExpandoData(ownerDocument),
          namespaces = ownerDocument.namespaces,
          ownerWindow = ownerDocument.parentWindow;

        if (!supportsShivableSheets || ownerDocument.printShived) {
          return ownerDocument;
        }
        if (typeof namespaces[shivNamespace] == 'undefined') {
          namespaces.add(shivNamespace);
        }

        function removeSheet() {
          clearTimeout(data._removeSheetTimer);
          if (shivedSheet) {
            shivedSheet.removeNode(true);
          }
          shivedSheet= null;
        }

        ownerWindow.attachEvent('onbeforeprint', function() {

          removeSheet();

          var imports,
            length,
            sheet,
            collection = ownerDocument.styleSheets,
            cssText = [],
            index = collection.length,
            sheets = Array(index);

          // convert styleSheets collection to an array
          while (index--) {
            sheets[index] = collection[index];
          }
          // concat all style sheet CSS text
          while ((sheet = sheets.pop())) {
            // IE does not enforce a same origin policy for external style sheets...
            // but has trouble with some dynamically created stylesheets
            if (!sheet.disabled && reMedia.test(sheet.media)) {

              try {
                imports = sheet.imports;
                length = imports.length;
              } catch(er){
                length = 0;
              }

              for (index = 0; index < length; index++) {
                sheets.push(imports[index]);
              }

              try {
                cssText.push(sheet.cssText);
              } catch(er){}
            }
          }

          // wrap all HTML5 elements with printable elements and add the shived style sheet
          cssText = shivCssText(cssText.reverse().join(''));
          wrappers = addWrappers(ownerDocument);
          shivedSheet = addStyleSheet(ownerDocument, cssText);

        });

        ownerWindow.attachEvent('onafterprint', function() {
          // remove wrappers, leaving the original elements, and remove the shived style sheet
          removeWrappers(wrappers);
          clearTimeout(data._removeSheetTimer);
          data._removeSheetTimer = setTimeout(removeSheet, 500);
        });

        ownerDocument.printShived = true;
        return ownerDocument;
      }

      /*--------------------------------------------------------------------------*/

      // expose API
      html5.type += ' print';
      html5.shivPrint = shivPrint;

      // shiv for print
      shivPrint(document);

      if(typeof module == 'object' && module.exports){
        module.exports = html5;
      }

    }(typeof window !== 'undefined' ? window : this, document));
  }

  ;


  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });

  

  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });

  

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }

    return body;
  }

  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      // eslint-disable-next-line
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }

  ;

  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;


  /**
   * wrapper around getComputedStyle, to fix issues with Firefox returning null when
   * called inside of a hidden iframe
   *
   * @access private
   * @function computedStyle
   * @param {HTMLElement|SVGElement} - The element we want to find the computed styles of
   * @param {string|null} [pseudoSelector]- An optional pseudo element selector (e.g. :before), of null if none
   * @returns {CSSStyleDeclaration}
   */

  function computedStyle(elem, pseudo, prop) {
    var result;

    if ('getComputedStyle' in window) {
      result = getComputedStyle.call(window, elem, pseudo);
      var console = window.console;

      if (result !== null) {
        if (prop) {
          result = result.getPropertyValue(prop);
        }
      } else {
        if (console) {
          var method = console.error ? 'error' : 'log';
          console[method].call(console, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
        }
      }
    } else {
      result = !pseudo && elem.currentStyle && elem.currentStyle[prop];
    }

    return result;
  }

  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */

  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
        return computedStyle(node, null, 'position') == 'absolute';
      });
    }
    return undefined;
  }
  ;

  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    // for strict XHTML browsers the hardly used samp element is used
    var elems = ['modernizr', 'tspan', 'samp'];
    while (!mStyle.style && elems.length) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {

        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {

          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  ;

  /**
   * testProp() investigates whether a given style property is recognized
   * Property names can be provided in either camelCase or kebab-case.
   *
   * @memberof Modernizr
   * @name Modernizr.testProp
   * @access public
   * @optionName Modernizr.testProp()
   * @optionProp testProp
   * @function testProp
   * @param {string} prop - Name of the CSS property to check
   * @param {string} [value] - Name of the CSS value to check
   * @param {boolean} [useValue] - Whether or not to check the value if @supports isn't supported
   * @returns {boolean}
   * @example
   *
   * Just like [testAllProps](#modernizr-testallprops), only it does not check any vendor prefixed
   * version of the string.
   *
   * Note that the property name must be provided in camelCase (e.g. boxSizing not box-sizing)
   *
   * ```js
   * Modernizr.testProp('pointerEvents')  // true
   * ```
   *
   * You can also provide a value as an optional second argument to check if a
   * specific value is supported
   *
   * ```js
   * Modernizr.testProp('pointerEvents', 'none') // true
   * Modernizr.testProp('pointerEvents', 'penguin') // false
   * ```
   */

  var testProp = ModernizrProto.testProp = function(prop, value, useValue) {
    return testProps([prop], undefined, value, useValue);
  };
  

  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  ;

  // Run each test
  testRunner();

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);
; browserify_shim__define__module__export__(typeof Modernizr != "undefined" ? Modernizr : window.Modernizr);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvd2ViZm9udGxvYWRlci93ZWJmb250bG9hZGVyLmpzIiwic3JjL19hc3NldHMvc2NyaXB0cy9oZWFkLmpzIiwic3JjL19hc3NldHMvc2NyaXB0cy9tb2Rlcm5penItY3VzdG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCIvKiBXZWIgRm9udCBMb2FkZXIgdjEuNi4yOCAtIChjKSBBZG9iZSBTeXN0ZW1zLCBHb29nbGUuIExpY2Vuc2U6IEFwYWNoZSAyLjAgKi8oZnVuY3Rpb24oKXtmdW5jdGlvbiBhYShhLGIsYyl7cmV0dXJuIGEuY2FsbC5hcHBseShhLmJpbmQsYXJndW1lbnRzKX1mdW5jdGlvbiBiYShhLGIsYyl7aWYoIWEpdGhyb3cgRXJyb3IoKTtpZigyPGFyZ3VtZW50cy5sZW5ndGgpe3ZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO0FycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGMsZCk7cmV0dXJuIGEuYXBwbHkoYixjKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiBwKGEsYixjKXtwPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kJiYtMSE9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQudG9TdHJpbmcoKS5pbmRleE9mKFwibmF0aXZlIGNvZGVcIik/YWE6YmE7cmV0dXJuIHAuYXBwbHkobnVsbCxhcmd1bWVudHMpfXZhciBxPURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX07ZnVuY3Rpb24gY2EoYSxiKXt0aGlzLmE9YTt0aGlzLm89Ynx8YTt0aGlzLmM9dGhpcy5vLmRvY3VtZW50fXZhciBkYT0hIXdpbmRvdy5Gb250RmFjZTtmdW5jdGlvbiB0KGEsYixjLGQpe2I9YS5jLmNyZWF0ZUVsZW1lbnQoYik7aWYoYylmb3IodmFyIGUgaW4gYyljLmhhc093blByb3BlcnR5KGUpJiYoXCJzdHlsZVwiPT1lP2Iuc3R5bGUuY3NzVGV4dD1jW2VdOmIuc2V0QXR0cmlidXRlKGUsY1tlXSkpO2QmJmIuYXBwZW5kQ2hpbGQoYS5jLmNyZWF0ZVRleHROb2RlKGQpKTtyZXR1cm4gYn1mdW5jdGlvbiB1KGEsYixjKXthPWEuYy5nZXRFbGVtZW50c0J5VGFnTmFtZShiKVswXTthfHwoYT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO2EuaW5zZXJ0QmVmb3JlKGMsYS5sYXN0Q2hpbGQpfWZ1bmN0aW9uIHYoYSl7YS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSl9XG5mdW5jdGlvbiB3KGEsYixjKXtiPWJ8fFtdO2M9Y3x8W107Zm9yKHZhciBkPWEuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksZT0wO2U8Yi5sZW5ndGg7ZSs9MSl7Zm9yKHZhciBmPSExLGc9MDtnPGQubGVuZ3RoO2crPTEpaWYoYltlXT09PWRbZ10pe2Y9ITA7YnJlYWt9Znx8ZC5wdXNoKGJbZV0pfWI9W107Zm9yKGU9MDtlPGQubGVuZ3RoO2UrPTEpe2Y9ITE7Zm9yKGc9MDtnPGMubGVuZ3RoO2crPTEpaWYoZFtlXT09PWNbZ10pe2Y9ITA7YnJlYWt9Znx8Yi5wdXNoKGRbZV0pfWEuY2xhc3NOYW1lPWIuam9pbihcIiBcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC8sXCJcIil9ZnVuY3Rpb24geShhLGIpe2Zvcih2YXIgYz1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspaWYoY1tkXT09YilyZXR1cm4hMDtyZXR1cm4hMX1cbmZ1bmN0aW9uIGVhKGEpe3JldHVybiBhLm8ubG9jYXRpb24uaG9zdG5hbWV8fGEuYS5sb2NhdGlvbi5ob3N0bmFtZX1mdW5jdGlvbiB6KGEsYixjKXtmdW5jdGlvbiBkKCl7bSYmZSYmZiYmKG0oZyksbT1udWxsKX1iPXQoYSxcImxpbmtcIix7cmVsOlwic3R5bGVzaGVldFwiLGhyZWY6YixtZWRpYTpcImFsbFwifSk7dmFyIGU9ITEsZj0hMCxnPW51bGwsbT1jfHxudWxsO2RhPyhiLm9ubG9hZD1mdW5jdGlvbigpe2U9ITA7ZCgpfSxiLm9uZXJyb3I9ZnVuY3Rpb24oKXtlPSEwO2c9RXJyb3IoXCJTdHlsZXNoZWV0IGZhaWxlZCB0byBsb2FkXCIpO2QoKX0pOnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlPSEwO2QoKX0sMCk7dShhLFwiaGVhZFwiLGIpfVxuZnVuY3Rpb24gQShhLGIsYyxkKXt2YXIgZT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO2lmKGUpe3ZhciBmPXQoYSxcInNjcmlwdFwiLHtzcmM6Yn0pLGc9ITE7Zi5vbmxvYWQ9Zi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtnfHx0aGlzLnJlYWR5U3RhdGUmJlwibG9hZGVkXCIhPXRoaXMucmVhZHlTdGF0ZSYmXCJjb21wbGV0ZVwiIT10aGlzLnJlYWR5U3RhdGV8fChnPSEwLGMmJmMobnVsbCksZi5vbmxvYWQ9Zi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcIkhFQURcIj09Zi5wYXJlbnROb2RlLnRhZ05hbWUmJmUucmVtb3ZlQ2hpbGQoZikpfTtlLmFwcGVuZENoaWxkKGYpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtnfHwoZz0hMCxjJiZjKEVycm9yKFwiU2NyaXB0IGxvYWQgdGltZW91dFwiKSkpfSxkfHw1RTMpO3JldHVybiBmfXJldHVybiBudWxsfTtmdW5jdGlvbiBCKCl7dGhpcy5hPTA7dGhpcy5jPW51bGx9ZnVuY3Rpb24gQyhhKXthLmErKztyZXR1cm4gZnVuY3Rpb24oKXthLmEtLTtEKGEpfX1mdW5jdGlvbiBFKGEsYil7YS5jPWI7RChhKX1mdW5jdGlvbiBEKGEpezA9PWEuYSYmYS5jJiYoYS5jKCksYS5jPW51bGwpfTtmdW5jdGlvbiBGKGEpe3RoaXMuYT1hfHxcIi1cIn1GLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxjPTA7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliLnB1c2goYXJndW1lbnRzW2NdLnJlcGxhY2UoL1tcXFdfXSsvZyxcIlwiKS50b0xvd2VyQ2FzZSgpKTtyZXR1cm4gYi5qb2luKHRoaXMuYSl9O2Z1bmN0aW9uIEcoYSxiKXt0aGlzLmM9YTt0aGlzLmY9NDt0aGlzLmE9XCJuXCI7dmFyIGM9KGJ8fFwibjRcIikubWF0Y2goL14oW25pb10pKFsxLTldKSQvaSk7YyYmKHRoaXMuYT1jWzFdLHRoaXMuZj1wYXJzZUludChjWzJdLDEwKSl9ZnVuY3Rpb24gZmEoYSl7cmV0dXJuIEgoYSkrXCIgXCIrKGEuZitcIjAwXCIpK1wiIDMwMHB4IFwiK0koYS5jKX1mdW5jdGlvbiBJKGEpe3ZhciBiPVtdO2E9YS5zcGxpdCgvLFxccyovKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXS5yZXBsYWNlKC9bJ1wiXS9nLFwiXCIpOy0xIT1kLmluZGV4T2YoXCIgXCIpfHwvXlxcZC8udGVzdChkKT9iLnB1c2goXCInXCIrZCtcIidcIik6Yi5wdXNoKGQpfXJldHVybiBiLmpvaW4oXCIsXCIpfWZ1bmN0aW9uIEooYSl7cmV0dXJuIGEuYSthLmZ9ZnVuY3Rpb24gSChhKXt2YXIgYj1cIm5vcm1hbFwiO1wib1wiPT09YS5hP2I9XCJvYmxpcXVlXCI6XCJpXCI9PT1hLmEmJihiPVwiaXRhbGljXCIpO3JldHVybiBifVxuZnVuY3Rpb24gZ2EoYSl7dmFyIGI9NCxjPVwiblwiLGQ9bnVsbDthJiYoKGQ9YS5tYXRjaCgvKG5vcm1hbHxvYmxpcXVlfGl0YWxpYykvaSkpJiZkWzFdJiYoYz1kWzFdLnN1YnN0cigwLDEpLnRvTG93ZXJDYXNlKCkpLChkPWEubWF0Y2goLyhbMS05XTAwfG5vcm1hbHxib2xkKS9pKSkmJmRbMV0mJigvYm9sZC9pLnRlc3QoZFsxXSk/Yj03Oi9bMS05XTAwLy50ZXN0KGRbMV0pJiYoYj1wYXJzZUludChkWzFdLnN1YnN0cigwLDEpLDEwKSkpKTtyZXR1cm4gYytifTtmdW5jdGlvbiBoYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1hLm8uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O3RoaXMuaD1iO3RoaXMuYT1uZXcgRihcIi1cIik7dGhpcy5qPSExIT09Yi5ldmVudHM7dGhpcy5nPSExIT09Yi5jbGFzc2VzfWZ1bmN0aW9uIGlhKGEpe2EuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildKTtLKGEsXCJsb2FkaW5nXCIpfWZ1bmN0aW9uIEwoYSl7aWYoYS5nKXt2YXIgYj15KGEuZixhLmEuYyhcIndmXCIsXCJhY3RpdmVcIikpLGM9W10sZD1bYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKV07Ynx8Yy5wdXNoKGEuYS5jKFwid2ZcIixcImluYWN0aXZlXCIpKTt3KGEuZixjLGQpfUsoYSxcImluYWN0aXZlXCIpfWZ1bmN0aW9uIEsoYSxiLGMpe2lmKGEuaiYmYS5oW2JdKWlmKGMpYS5oW2JdKGMuYyxKKGMpKTtlbHNlIGEuaFtiXSgpfTtmdW5jdGlvbiBqYSgpe3RoaXMuYz17fX1mdW5jdGlvbiBrYShhLGIsYyl7dmFyIGQ9W10sZTtmb3IoZSBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoZSkpe3ZhciBmPWEuY1tlXTtmJiZkLnB1c2goZihiW2VdLGMpKX1yZXR1cm4gZH07ZnVuY3Rpb24gTShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT10KHRoaXMuYyxcInNwYW5cIix7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifSx0aGlzLmYpfWZ1bmN0aW9uIE4oYSl7dShhLmMsXCJib2R5XCIsYS5hKX1mdW5jdGlvbiBPKGEpe3JldHVyblwiZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTk5OTlweDtsZWZ0Oi05OTk5cHg7Zm9udC1zaXplOjMwMHB4O3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bGluZS1oZWlnaHQ6bm9ybWFsO21hcmdpbjowO3BhZGRpbmc6MDtmb250LXZhcmlhbnQ6bm9ybWFsO3doaXRlLXNwYWNlOm5vd3JhcDtmb250LWZhbWlseTpcIitJKGEuYykrXCI7XCIrKFwiZm9udC1zdHlsZTpcIitIKGEpK1wiO2ZvbnQtd2VpZ2h0OlwiKyhhLmYrXCIwMFwiKStcIjtcIil9O2Z1bmN0aW9uIFAoYSxiLGMsZCxlLGYpe3RoaXMuZz1hO3RoaXMuaj1iO3RoaXMuYT1kO3RoaXMuYz1jO3RoaXMuZj1lfHwzRTM7dGhpcy5oPWZ8fHZvaWQgMH1QLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYy5vLmRvY3VtZW50LGI9dGhpcyxjPXEoKSxkPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGQsZSl7ZnVuY3Rpb24gZigpe3EoKS1jPj1iLmY/ZSgpOmEuZm9udHMubG9hZChmYShiLmEpLGIuaCkudGhlbihmdW5jdGlvbihhKXsxPD1hLmxlbmd0aD9kKCk6c2V0VGltZW91dChmLDI1KX0sZnVuY3Rpb24oKXtlKCl9KX1mKCl9KSxlPW51bGwsZj1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGQpe2U9c2V0VGltZW91dChkLGIuZil9KTtQcm9taXNlLnJhY2UoW2YsZF0pLnRoZW4oZnVuY3Rpb24oKXtlJiYoY2xlYXJUaW1lb3V0KGUpLGU9bnVsbCk7Yi5nKGIuYSl9LGZ1bmN0aW9uKCl7Yi5qKGIuYSl9KX07ZnVuY3Rpb24gUShhLGIsYyxkLGUsZixnKXt0aGlzLnY9YTt0aGlzLkI9Yjt0aGlzLmM9Yzt0aGlzLmE9ZDt0aGlzLnM9Z3x8XCJCRVNic3d5XCI7dGhpcy5mPXt9O3RoaXMudz1lfHwzRTM7dGhpcy51PWZ8fG51bGw7dGhpcy5tPXRoaXMuaj10aGlzLmg9dGhpcy5nPW51bGw7dGhpcy5nPW5ldyBNKHRoaXMuYyx0aGlzLnMpO3RoaXMuaD1uZXcgTSh0aGlzLmMsdGhpcy5zKTt0aGlzLmo9bmV3IE0odGhpcy5jLHRoaXMucyk7dGhpcy5tPW5ldyBNKHRoaXMuYyx0aGlzLnMpO2E9bmV3IEcodGhpcy5hLmMrXCIsc2VyaWZcIixKKHRoaXMuYSkpO2E9TyhhKTt0aGlzLmcuYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgRyh0aGlzLmEuYytcIixzYW5zLXNlcmlmXCIsSih0aGlzLmEpKTthPU8oYSk7dGhpcy5oLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEcoXCJzZXJpZlwiLEoodGhpcy5hKSk7YT1PKGEpO3RoaXMuai5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBHKFwic2Fucy1zZXJpZlwiLEoodGhpcy5hKSk7YT1cbk8oYSk7dGhpcy5tLmEuc3R5bGUuY3NzVGV4dD1hO04odGhpcy5nKTtOKHRoaXMuaCk7Tih0aGlzLmopO04odGhpcy5tKX12YXIgUj17RDpcInNlcmlmXCIsQzpcInNhbnMtc2VyaWZcIn0sUz1udWxsO2Z1bmN0aW9uIFQoKXtpZihudWxsPT09Uyl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1M9ISFhJiYoNTM2PnBhcnNlSW50KGFbMV0sMTApfHw1MzY9PT1wYXJzZUludChhWzFdLDEwKSYmMTE+PXBhcnNlSW50KGFbMl0sMTApKX1yZXR1cm4gU31RLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3RoaXMuZi5zZXJpZj10aGlzLmouYS5vZmZzZXRXaWR0aDt0aGlzLmZbXCJzYW5zLXNlcmlmXCJdPXRoaXMubS5hLm9mZnNldFdpZHRoO3RoaXMuQT1xKCk7VSh0aGlzKX07XG5mdW5jdGlvbiBsYShhLGIsYyl7Zm9yKHZhciBkIGluIFIpaWYoUi5oYXNPd25Qcm9wZXJ0eShkKSYmYj09PWEuZltSW2RdXSYmYz09PWEuZltSW2RdXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBVKGEpe3ZhciBiPWEuZy5hLm9mZnNldFdpZHRoLGM9YS5oLmEub2Zmc2V0V2lkdGgsZDsoZD1iPT09YS5mLnNlcmlmJiZjPT09YS5mW1wic2Fucy1zZXJpZlwiXSl8fChkPVQoKSYmbGEoYSxiLGMpKTtkP3EoKS1hLkE+PWEudz9UKCkmJmxhKGEsYixjKSYmKG51bGw9PT1hLnV8fGEudS5oYXNPd25Qcm9wZXJ0eShhLmEuYykpP1YoYSxhLnYpOlYoYSxhLkIpOm1hKGEpOlYoYSxhLnYpfWZ1bmN0aW9uIG1hKGEpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe1UodGhpcyl9LGEpLDUwKX1mdW5jdGlvbiBWKGEsYil7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7dih0aGlzLmcuYSk7dih0aGlzLmguYSk7dih0aGlzLmouYSk7dih0aGlzLm0uYSk7Yih0aGlzLmEpfSxhKSwwKX07ZnVuY3Rpb24gVyhhLGIsYyl7dGhpcy5jPWE7dGhpcy5hPWI7dGhpcy5mPTA7dGhpcy5tPXRoaXMuaj0hMTt0aGlzLnM9Y312YXIgWD1udWxsO1cucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hO2IuZyYmdyhiLmYsW2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpXSxbYi5hLmMoXCJ3ZlwiLGEuYyxKKGEpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpLGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIildKTtLKGIsXCJmb250YWN0aXZlXCIsYSk7dGhpcy5tPSEwO25hKHRoaXMpfTtcblcucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hO2lmKGIuZyl7dmFyIGM9eShiLmYsYi5hLmMoXCJ3ZlwiLGEuYyxKKGEpLnRvU3RyaW5nKCksXCJhY3RpdmVcIikpLGQ9W10sZT1bYi5hLmMoXCJ3ZlwiLGEuYyxKKGEpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpXTtjfHxkLnB1c2goYi5hLmMoXCJ3ZlwiLGEuYyxKKGEpLnRvU3RyaW5nKCksXCJpbmFjdGl2ZVwiKSk7dyhiLmYsZCxlKX1LKGIsXCJmb250aW5hY3RpdmVcIixhKTtuYSh0aGlzKX07ZnVuY3Rpb24gbmEoYSl7MD09LS1hLmYmJmEuaiYmKGEubT8oYT1hLmEsYS5nJiZ3KGEuZixbYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpXSxbYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKSxhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKV0pLEsoYSxcImFjdGl2ZVwiKSk6TChhLmEpKX07ZnVuY3Rpb24gb2EoYSl7dGhpcy5qPWE7dGhpcy5hPW5ldyBqYTt0aGlzLmg9MDt0aGlzLmY9dGhpcy5nPSEwfW9hLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3RoaXMuYz1uZXcgY2EodGhpcy5qLGEuY29udGV4dHx8dGhpcy5qKTt0aGlzLmc9ITEhPT1hLmV2ZW50czt0aGlzLmY9ITEhPT1hLmNsYXNzZXM7cGEodGhpcyxuZXcgaGEodGhpcy5jLGEpLGEpfTtcbmZ1bmN0aW9uIHFhKGEsYixjLGQsZSl7dmFyIGY9MD09LS1hLmg7KGEuZnx8YS5nKSYmc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBhPWV8fG51bGwsbT1kfHxudWxsfHx7fTtpZigwPT09Yy5sZW5ndGgmJmYpTChiLmEpO2Vsc2V7Yi5mKz1jLmxlbmd0aDtmJiYoYi5qPWYpO3ZhciBoLGw9W107Zm9yKGg9MDtoPGMubGVuZ3RoO2grKyl7dmFyIGs9Y1toXSxuPW1bay5jXSxyPWIuYSx4PWs7ci5nJiZ3KHIuZixbci5hLmMoXCJ3ZlwiLHguYyxKKHgpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpXSk7SyhyLFwiZm9udGxvYWRpbmdcIix4KTtyPW51bGw7aWYobnVsbD09PVgpaWYod2luZG93LkZvbnRGYWNlKXt2YXIgeD0vR2Vja28uKkZpcmVmb3hcXC8oXFxkKykvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLHhhPS9PUyBYLipWZXJzaW9uXFwvMTBcXC4uKlNhZmFyaS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkmJi9BcHBsZS8uZXhlYyh3aW5kb3cubmF2aWdhdG9yLnZlbmRvcik7XG5YPXg/NDI8cGFyc2VJbnQoeFsxXSwxMCk6eGE/ITE6ITB9ZWxzZSBYPSExO1g/cj1uZXcgUChwKGIuZyxiKSxwKGIuaCxiKSxiLmMsayxiLnMsbik6cj1uZXcgUShwKGIuZyxiKSxwKGIuaCxiKSxiLmMsayxiLnMsYSxuKTtsLnB1c2gocil9Zm9yKGg9MDtoPGwubGVuZ3RoO2grKylsW2hdLnN0YXJ0KCl9fSwwKX1mdW5jdGlvbiBwYShhLGIsYyl7dmFyIGQ9W10sZT1jLnRpbWVvdXQ7aWEoYik7dmFyIGQ9a2EoYS5hLGMsYS5jKSxmPW5ldyBXKGEuYyxiLGUpO2EuaD1kLmxlbmd0aDtiPTA7Zm9yKGM9ZC5sZW5ndGg7YjxjO2IrKylkW2JdLmxvYWQoZnVuY3Rpb24oYixkLGMpe3FhKGEsZixiLGQsYyl9KX07ZnVuY3Rpb24gcmEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1cbnJhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXtpZihmW1wiX19tdGlfZm50THN0XCIrZF0pe3ZhciBjPWZbXCJfX210aV9mbnRMc3RcIitkXSgpLGU9W10saDtpZihjKWZvcih2YXIgbD0wO2w8Yy5sZW5ndGg7bCsrKXt2YXIgaz1jW2xdLmZvbnRmYW1pbHk7dm9pZCAwIT1jW2xdLmZvbnRTdHlsZSYmdm9pZCAwIT1jW2xdLmZvbnRXZWlnaHQ/KGg9Y1tsXS5mb250U3R5bGUrY1tsXS5mb250V2VpZ2h0LGUucHVzaChuZXcgRyhrLGgpKSk6ZS5wdXNoKG5ldyBHKGspKX1hKGUpfWVsc2Ugc2V0VGltZW91dChmdW5jdGlvbigpe2IoKX0sNTApfXZhciBjPXRoaXMsZD1jLmEucHJvamVjdElkLGU9Yy5hLnZlcnNpb247aWYoZCl7dmFyIGY9Yy5jLm87QSh0aGlzLmMsKGMuYS5hcGl8fFwiaHR0cHM6Ly9mYXN0LmZvbnRzLm5ldC9qc2FwaVwiKStcIi9cIitkK1wiLmpzXCIrKGU/XCI/dj1cIitlOlwiXCIpLGZ1bmN0aW9uKGUpe2U/YShbXSk6KGZbXCJfX01vbm90eXBlQ29uZmlndXJhdGlvbl9fXCIrXG5kXT1mdW5jdGlvbigpe3JldHVybiBjLmF9LGIoKSl9KS5pZD1cIl9fTW9ub3R5cGVBUElTY3JpcHRfX1wiK2R9ZWxzZSBhKFtdKX07ZnVuY3Rpb24gc2EoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1zYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5hLnVybHN8fFtdLGU9dGhpcy5hLmZhbWlsaWVzfHxbXSxmPXRoaXMuYS50ZXN0U3RyaW5nc3x8e30sZz1uZXcgQjtiPTA7Zm9yKGM9ZC5sZW5ndGg7YjxjO2IrKyl6KHRoaXMuYyxkW2JdLEMoZykpO3ZhciBtPVtdO2I9MDtmb3IoYz1lLmxlbmd0aDtiPGM7YisrKWlmKGQ9ZVtiXS5zcGxpdChcIjpcIiksZFsxXSlmb3IodmFyIGg9ZFsxXS5zcGxpdChcIixcIiksbD0wO2w8aC5sZW5ndGg7bCs9MSltLnB1c2gobmV3IEcoZFswXSxoW2xdKSk7ZWxzZSBtLnB1c2gobmV3IEcoZFswXSkpO0UoZyxmdW5jdGlvbigpe2EobSxmKX0pfTtmdW5jdGlvbiB0YShhLGIpe2E/dGhpcy5jPWE6dGhpcy5jPXVhO3RoaXMuYT1bXTt0aGlzLmY9W107dGhpcy5nPWJ8fFwiXCJ9dmFyIHVhPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3NcIjtmdW5jdGlvbiB2YShhLGIpe2Zvcih2YXIgYz1iLmxlbmd0aCxkPTA7ZDxjO2QrKyl7dmFyIGU9YltkXS5zcGxpdChcIjpcIik7Mz09ZS5sZW5ndGgmJmEuZi5wdXNoKGUucG9wKCkpO3ZhciBmPVwiXCI7Mj09ZS5sZW5ndGgmJlwiXCIhPWVbMV0mJihmPVwiOlwiKTthLmEucHVzaChlLmpvaW4oZikpfX1cbmZ1bmN0aW9uIHdhKGEpe2lmKDA9PWEuYS5sZW5ndGgpdGhyb3cgRXJyb3IoXCJObyBmb250cyB0byBsb2FkIVwiKTtpZigtMSE9YS5jLmluZGV4T2YoXCJraXQ9XCIpKXJldHVybiBhLmM7Zm9yKHZhciBiPWEuYS5sZW5ndGgsYz1bXSxkPTA7ZDxiO2QrKyljLnB1c2goYS5hW2RdLnJlcGxhY2UoLyAvZyxcIitcIikpO2I9YS5jK1wiP2ZhbWlseT1cIitjLmpvaW4oXCIlN0NcIik7MDxhLmYubGVuZ3RoJiYoYis9XCImc3Vic2V0PVwiK2EuZi5qb2luKFwiLFwiKSk7MDxhLmcubGVuZ3RoJiYoYis9XCImdGV4dD1cIitlbmNvZGVVUklDb21wb25lbnQoYS5nKSk7cmV0dXJuIGJ9O2Z1bmN0aW9uIHlhKGEpe3RoaXMuZj1hO3RoaXMuYT1bXTt0aGlzLmM9e319XG52YXIgemE9e2xhdGluOlwiQkVTYnN3eVwiLFwibGF0aW4tZXh0XCI6XCJcXHUwMGU3XFx1MDBmNlxcdTAwZmNcXHUwMTFmXFx1MDE1ZlwiLGN5cmlsbGljOlwiXFx1MDQzOVxcdTA0NGZcXHUwNDE2XCIsZ3JlZWs6XCJcXHUwM2IxXFx1MDNiMlxcdTAzYTNcIixraG1lcjpcIlxcdTE3ODBcXHUxNzgxXFx1MTc4MlwiLEhhbnVtYW46XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIn0sQWE9e3RoaW46XCIxXCIsZXh0cmFsaWdodDpcIjJcIixcImV4dHJhLWxpZ2h0XCI6XCIyXCIsdWx0cmFsaWdodDpcIjJcIixcInVsdHJhLWxpZ2h0XCI6XCIyXCIsbGlnaHQ6XCIzXCIscmVndWxhcjpcIjRcIixib29rOlwiNFwiLG1lZGl1bTpcIjVcIixcInNlbWktYm9sZFwiOlwiNlwiLHNlbWlib2xkOlwiNlwiLFwiZGVtaS1ib2xkXCI6XCI2XCIsZGVtaWJvbGQ6XCI2XCIsYm9sZDpcIjdcIixcImV4dHJhLWJvbGRcIjpcIjhcIixleHRyYWJvbGQ6XCI4XCIsXCJ1bHRyYS1ib2xkXCI6XCI4XCIsdWx0cmFib2xkOlwiOFwiLGJsYWNrOlwiOVwiLGhlYXZ5OlwiOVwiLGw6XCIzXCIscjpcIjRcIixiOlwiN1wifSxCYT17aTpcImlcIixpdGFsaWM6XCJpXCIsbjpcIm5cIixub3JtYWw6XCJuXCJ9LFxuQ2E9L14odGhpbnwoPzooPzpleHRyYXx1bHRyYSktPyk/bGlnaHR8cmVndWxhcnxib29rfG1lZGl1bXwoPzooPzpzZW1pfGRlbWl8ZXh0cmF8dWx0cmEpLT8pP2JvbGR8YmxhY2t8aGVhdnl8bHxyfGJ8WzEtOV0wMCk/KG58aXxub3JtYWx8aXRhbGljKT8kLztcbmZ1bmN0aW9uIERhKGEpe2Zvcih2YXIgYj1hLmYubGVuZ3RoLGM9MDtjPGI7YysrKXt2YXIgZD1hLmZbY10uc3BsaXQoXCI6XCIpLGU9ZFswXS5yZXBsYWNlKC9cXCsvZyxcIiBcIiksZj1bXCJuNFwiXTtpZigyPD1kLmxlbmd0aCl7dmFyIGc7dmFyIG09ZFsxXTtnPVtdO2lmKG0pZm9yKHZhciBtPW0uc3BsaXQoXCIsXCIpLGg9bS5sZW5ndGgsbD0wO2w8aDtsKyspe3ZhciBrO2s9bVtsXTtpZihrLm1hdGNoKC9eW1xcdy1dKyQvKSl7dmFyIG49Q2EuZXhlYyhrLnRvTG93ZXJDYXNlKCkpO2lmKG51bGw9PW4paz1cIlwiO2Vsc2V7az1uWzJdO2s9bnVsbD09a3x8XCJcIj09az9cIm5cIjpCYVtrXTtuPW5bMV07aWYobnVsbD09bnx8XCJcIj09biluPVwiNFwiO2Vsc2UgdmFyIHI9QWFbbl0sbj1yP3I6aXNOYU4obik/XCI0XCI6bi5zdWJzdHIoMCwxKTtrPVtrLG5dLmpvaW4oXCJcIil9fWVsc2Ugaz1cIlwiO2smJmcucHVzaChrKX0wPGcubGVuZ3RoJiYoZj1nKTszPT1kLmxlbmd0aCYmKGQ9ZFsyXSxnPVtdLGQ9ZD9kLnNwbGl0KFwiLFwiKTpcbmcsMDxkLmxlbmd0aCYmKGQ9emFbZFswXV0pJiYoYS5jW2VdPWQpKX1hLmNbZV18fChkPXphW2VdKSYmKGEuY1tlXT1kKTtmb3IoZD0wO2Q8Zi5sZW5ndGg7ZCs9MSlhLmEucHVzaChuZXcgRyhlLGZbZF0pKX19O2Z1bmN0aW9uIEVhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9dmFyIEZhPXtBcmltbzohMCxDb3VzaW5lOiEwLFRpbm9zOiEwfTtFYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj1uZXcgQixjPXRoaXMuYyxkPW5ldyB0YSh0aGlzLmEuYXBpLHRoaXMuYS50ZXh0KSxlPXRoaXMuYS5mYW1pbGllczt2YShkLGUpO3ZhciBmPW5ldyB5YShlKTtEYShmKTt6KGMsd2EoZCksQyhiKSk7RShiLGZ1bmN0aW9uKCl7YShmLmEsZi5jLEZhKX0pfTtmdW5jdGlvbiBHYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifUdhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYS5pZCxjPXRoaXMuYy5vO2I/QSh0aGlzLmMsKHRoaXMuYS5hcGl8fFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXRcIikrXCIvXCIrYitcIi5qc1wiLGZ1bmN0aW9uKGIpe2lmKGIpYShbXSk7ZWxzZSBpZihjLlR5cGVraXQmJmMuVHlwZWtpdC5jb25maWcmJmMuVHlwZWtpdC5jb25maWcuZm4pe2I9Yy5UeXBla2l0LmNvbmZpZy5mbjtmb3IodmFyIGU9W10sZj0wO2Y8Yi5sZW5ndGg7Zis9Milmb3IodmFyIGc9YltmXSxtPWJbZisxXSxoPTA7aDxtLmxlbmd0aDtoKyspZS5wdXNoKG5ldyBHKGcsbVtoXSkpO3RyeXtjLlR5cGVraXQubG9hZCh7ZXZlbnRzOiExLGNsYXNzZXM6ITEsYXN5bmM6ITB9KX1jYXRjaChsKXt9YShlKX19LDJFMyk6YShbXSl9O2Z1bmN0aW9uIEhhKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5hPVtdfUhhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZi5pZCxjPXRoaXMuYy5vLGQ9dGhpcztiPyhjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX198fChjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX189e30pLGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfX1tiXT1mdW5jdGlvbihiLGMpe2Zvcih2YXIgZz0wLG09Yy5mb250cy5sZW5ndGg7ZzxtOysrZyl7dmFyIGg9Yy5mb250c1tnXTtkLmEucHVzaChuZXcgRyhoLm5hbWUsZ2EoXCJmb250LXdlaWdodDpcIitoLndlaWdodCtcIjtmb250LXN0eWxlOlwiK2guc3R5bGUpKSl9YShkLmEpfSxBKHRoaXMuYywodGhpcy5mLmFwaXx8XCJodHRwczovL2YuZm9udGRlY2suY29tL3MvY3NzL2pzL1wiKStlYSh0aGlzLmMpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtiJiZhKFtdKX0pKTphKFtdKX07dmFyIFk9bmV3IG9hKHdpbmRvdyk7WS5hLmMuY3VzdG9tPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBzYShiLGEpfTtZLmEuYy5mb250ZGVjaz1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgSGEoYixhKX07WS5hLmMubW9ub3R5cGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHJhKGIsYSl9O1kuYS5jLnR5cGVraXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEdhKGIsYSl9O1kuYS5jLmdvb2dsZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgRWEoYixhKX07dmFyIFo9e2xvYWQ6cChZLmxvYWQsWSl9O1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIFp9KTpcInVuZGVmaW5lZFwiIT09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9Wjood2luZG93LldlYkZvbnQ9Wix3aW5kb3cuV2ViRm9udENvbmZpZyYmWS5sb2FkKHdpbmRvdy5XZWJGb250Q29uZmlnKSk7fSgpKTtcbiIsInJlcXVpcmUoJ21vZGVybml6cicpO1xuXG52YXIgV2ViRm9udCA9IHJlcXVpcmUoJ3dlYmZvbnRsb2FkZXInKTtcblxuV2ViRm9udC5sb2FkKHtcbiAgZ29vZ2xlOiB7XG4gICAgZmFtaWxpZXM6IFsnT3BlbiBTYW5zJ11cbiAgfSxcbiAgLy8gdHlwZWtpdDogeyBpZDogJycgfSxcbiAgbG9hZGluZzogZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LmNvbnNvbGUubG9nKCdMT0FESU5HIEZPTlRTJyk7XG4gIH0sXG4gIGFjdGl2ZTogZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LmNvbnNvbGUubG9nKCdBQ1RJVkUgRk9OVFMnKTtcbiAgfSxcbiAgaW5hY3RpdmU6IGZ1bmN0aW9uKCkge30sXG4gIGZvbnRsb2FkaW5nOiBmdW5jdGlvbihmYW1pbHlOYW1lLCBmdmQpIHt9LFxuICBmb250YWN0aXZlOiBmdW5jdGlvbihmYW1pbHlOYW1lLCBmdmQpIHt9LFxuICBmb250aW5hY3RpdmU6IGZ1bmN0aW9uKGZhbWlseU5hbWUsIGZ2ZCkge30sXG4gIHRpbWVvdXQ6IDIwMDAgLy8gU2V0IHRoZSB0aW1lb3V0IHRvIHR3byBzZWNvbmRzL1xufSk7IiwiOyB2YXIgX19icm93c2VyaWZ5X3NoaW1fcmVxdWlyZV9fPXJlcXVpcmU7KGZ1bmN0aW9uIGJyb3dzZXJpZnlTaGltKG1vZHVsZSwgZXhwb3J0cywgcmVxdWlyZSwgZGVmaW5lLCBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXykge1xuLyohXG4gKiBtb2Rlcm5penIgdjMuNS4wXG4gKiBCdWlsZCBodHRwczovL21vZGVybml6ci5jb20vZG93bmxvYWQ/LWFkZHRlc3QtZm5iaW5kLXByaW50c2hpdi10ZXN0cHJvcC1kb250bWluXG4gKlxuICogQ29weXJpZ2h0IChjKVxuICogIEZhcnVrIEF0ZXNcbiAqICBQYXVsIElyaXNoXG4gKiAgQWxleCBTZXh0b25cbiAqICBSeWFuIFNlZGRvblxuICogIFBhdHJpY2sgS2V0dG5lclxuICogIFN0dSBDb3hcbiAqICBSaWNoYXJkIEhlcnJlcmFcblxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKlxuICogTW9kZXJuaXpyIHRlc3RzIHdoaWNoIG5hdGl2ZSBDU1MzIGFuZCBIVE1MNSBmZWF0dXJlcyBhcmUgYXZhaWxhYmxlIGluIHRoZVxuICogY3VycmVudCBVQSBhbmQgbWFrZXMgdGhlIHJlc3VsdHMgYXZhaWxhYmxlIHRvIHlvdSBpbiB0d28gd2F5czogYXMgcHJvcGVydGllcyBvblxuICogYSBnbG9iYWwgYE1vZGVybml6cmAgb2JqZWN0LCBhbmQgYXMgY2xhc3NlcyBvbiB0aGUgYDxodG1sPmAgZWxlbWVudC4gVGhpc1xuICogaW5mb3JtYXRpb24gYWxsb3dzIHlvdSB0byBwcm9ncmVzc2l2ZWx5IGVuaGFuY2UgeW91ciBwYWdlcyB3aXRoIGEgZ3JhbnVsYXIgbGV2ZWxcbiAqIG9mIGNvbnRyb2wgb3ZlciB0aGUgZXhwZXJpZW5jZS5cbiovXG5cbjsoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKXtcbiAgdmFyIHRlc3RzID0gW107XG4gIFxuXG4gIC8qKlxuICAgKlxuICAgKiBNb2Rlcm5penJQcm90byBpcyB0aGUgY29uc3RydWN0b3IgZm9yIE1vZGVybml6clxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICovXG5cbiAgdmFyIE1vZGVybml6clByb3RvID0ge1xuICAgIC8vIFRoZSBjdXJyZW50IHZlcnNpb24sIGR1bW15XG4gICAgX3ZlcnNpb246ICczLjUuMCcsXG5cbiAgICAvLyBBbnkgc2V0dGluZ3MgdGhhdCBkb24ndCB3b3JrIGFzIHNlcGFyYXRlIG1vZHVsZXNcbiAgICAvLyBjYW4gZ28gaW4gaGVyZSBhcyBjb25maWd1cmF0aW9uLlxuICAgIF9jb25maWc6IHtcbiAgICAgICdjbGFzc1ByZWZpeCc6ICcnLFxuICAgICAgJ2VuYWJsZUNsYXNzZXMnOiB0cnVlLFxuICAgICAgJ2VuYWJsZUpTQ2xhc3MnOiB0cnVlLFxuICAgICAgJ3VzZVByZWZpeGVzJzogdHJ1ZVxuICAgIH0sXG5cbiAgICAvLyBRdWV1ZSBvZiB0ZXN0c1xuICAgIF9xOiBbXSxcblxuICAgIC8vIFN0dWIgdGhlc2UgZm9yIHBlb3BsZSB3aG8gYXJlIGxpc3RlbmluZ1xuICAgIG9uOiBmdW5jdGlvbih0ZXN0LCBjYikge1xuICAgICAgLy8gSSBkb24ndCByZWFsbHkgdGhpbmsgcGVvcGxlIHNob3VsZCBkbyB0aGlzLCBidXQgd2UgY2FuXG4gICAgICAvLyBzYWZlIGd1YXJkIGl0IGEgYml0LlxuICAgICAgLy8gLS0gTk9URTo6IHRoaXMgZ2V0cyBXQVkgb3ZlcnJpZGRlbiBpbiBzcmMvYWRkVGVzdCBmb3IgYWN0dWFsIGFzeW5jIHRlc3RzLlxuICAgICAgLy8gVGhpcyBpcyBpbiBjYXNlIHBlb3BsZSBsaXN0ZW4gdG8gc3luY2hyb25vdXMgdGVzdHMuIEkgd291bGQgbGVhdmUgaXQgb3V0LFxuICAgICAgLy8gYnV0IHRoZSBjb2RlIHRvICpkaXNhbGxvdyogc3luYyB0ZXN0cyBpbiB0aGUgcmVhbCB2ZXJzaW9uIG9mIHRoaXNcbiAgICAgIC8vIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGxhcmdlciB0aGFuIHRoaXMuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYihzZWxmW3Rlc3RdKTtcbiAgICAgIH0sIDApO1xuICAgIH0sXG5cbiAgICBhZGRUZXN0OiBmdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucykge1xuICAgICAgdGVzdHMucHVzaCh7bmFtZTogbmFtZSwgZm46IGZuLCBvcHRpb25zOiBvcHRpb25zfSk7XG4gICAgfSxcblxuICAgIGFkZEFzeW5jVGVzdDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHRlc3RzLnB1c2goe25hbWU6IG51bGwsIGZuOiBmbn0pO1xuICAgIH1cbiAgfTtcblxuICBcblxuICAvLyBGYWtlIHNvbWUgb2YgT2JqZWN0LmNyZWF0ZSBzbyB3ZSBjYW4gZm9yY2Ugbm9uIHRlc3QgcmVzdWx0cyB0byBiZSBub24gXCJvd25cIiBwcm9wZXJ0aWVzLlxuICB2YXIgTW9kZXJuaXpyID0gZnVuY3Rpb24oKSB7fTtcbiAgTW9kZXJuaXpyLnByb3RvdHlwZSA9IE1vZGVybml6clByb3RvO1xuXG4gIC8vIExlYWsgbW9kZXJuaXpyIGdsb2JhbGx5IHdoZW4geW91IGByZXF1aXJlYCBpdCByYXRoZXIgdGhhbiBmb3JjZSBpdCBoZXJlLlxuICAvLyBPdmVyd3JpdGUgbmFtZSBzbyBjb25zdHJ1Y3RvciBuYW1lIGlzIG5pY2VyIDpEXG4gIE1vZGVybml6ciA9IG5ldyBNb2Rlcm5penIoKTtcblxuICBcblxuICB2YXIgY2xhc3NlcyA9IFtdO1xuICBcblxuICAvKipcbiAgICogaXMgcmV0dXJucyBhIGJvb2xlYW4gaWYgdGhlIHR5cGVvZiBhbiBvYmogaXMgZXhhY3RseSB0eXBlLlxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGlzXG4gICAqIEBwYXJhbSB7Kn0gb2JqIC0gQSB0aGluZyB3ZSB3YW50IHRvIGNoZWNrIHRoZSB0eXBlIG9mXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gQSBzdHJpbmcgdG8gY29tcGFyZSB0aGUgdHlwZW9mIGFnYWluc3RcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGlzKG9iaiwgdHlwZSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSB0eXBlO1xuICB9XG4gIDtcblxuICAvKipcbiAgICogUnVuIHRocm91Z2ggYWxsIHRlc3RzIGFuZCBkZXRlY3QgdGhlaXIgc3VwcG9ydCBpbiB0aGUgY3VycmVudCBVQS5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRlc3RSdW5uZXIoKSB7XG4gICAgdmFyIGZlYXR1cmVOYW1lcztcbiAgICB2YXIgZmVhdHVyZTtcbiAgICB2YXIgYWxpYXNJZHg7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgbmFtZUlkeDtcbiAgICB2YXIgZmVhdHVyZU5hbWU7XG4gICAgdmFyIGZlYXR1cmVOYW1lU3BsaXQ7XG5cbiAgICBmb3IgKHZhciBmZWF0dXJlSWR4IGluIHRlc3RzKSB7XG4gICAgICBpZiAodGVzdHMuaGFzT3duUHJvcGVydHkoZmVhdHVyZUlkeCkpIHtcbiAgICAgICAgZmVhdHVyZU5hbWVzID0gW107XG4gICAgICAgIGZlYXR1cmUgPSB0ZXN0c1tmZWF0dXJlSWR4XTtcbiAgICAgICAgLy8gcnVuIHRoZSB0ZXN0LCB0aHJvdyB0aGUgcmV0dXJuIHZhbHVlIGludG8gdGhlIE1vZGVybml6cixcbiAgICAgICAgLy8gdGhlbiBiYXNlZCBvbiB0aGF0IGJvb2xlYW4sIGRlZmluZSBhbiBhcHByb3ByaWF0ZSBjbGFzc05hbWVcbiAgICAgICAgLy8gYW5kIHB1c2ggaXQgaW50byBhbiBhcnJheSBvZiBjbGFzc2VzIHdlJ2xsIGpvaW4gbGF0ZXIuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIG5hbWUsIGl0J3MgYW4gJ2FzeW5jJyB0ZXN0IHRoYXQgaXMgcnVuLFxuICAgICAgICAvLyBidXQgbm90IGRpcmVjdGx5IGFkZGVkIHRvIHRoZSBvYmplY3QuIFRoYXQgc2hvdWxkXG4gICAgICAgIC8vIGJlIGRvbmUgd2l0aCBhIHBvc3QtcnVuIGFkZFRlc3QgY2FsbC5cbiAgICAgICAgaWYgKGZlYXR1cmUubmFtZSkge1xuICAgICAgICAgIGZlYXR1cmVOYW1lcy5wdXNoKGZlYXR1cmUubmFtZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICAgIGlmIChmZWF0dXJlLm9wdGlvbnMgJiYgZmVhdHVyZS5vcHRpb25zLmFsaWFzZXMgJiYgZmVhdHVyZS5vcHRpb25zLmFsaWFzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBBZGQgYWxsIHRoZSBhbGlhc2VzIGludG8gdGhlIG5hbWVzIGxpc3RcbiAgICAgICAgICAgIGZvciAoYWxpYXNJZHggPSAwOyBhbGlhc0lkeCA8IGZlYXR1cmUub3B0aW9ucy5hbGlhc2VzLmxlbmd0aDsgYWxpYXNJZHgrKykge1xuICAgICAgICAgICAgICBmZWF0dXJlTmFtZXMucHVzaChmZWF0dXJlLm9wdGlvbnMuYWxpYXNlc1thbGlhc0lkeF0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIHRoZSB0ZXN0LCBvciB1c2UgdGhlIHJhdyB2YWx1ZSBpZiBpdCdzIG5vdCBhIGZ1bmN0aW9uXG4gICAgICAgIHJlc3VsdCA9IGlzKGZlYXR1cmUuZm4sICdmdW5jdGlvbicpID8gZmVhdHVyZS5mbigpIDogZmVhdHVyZS5mbjtcblxuXG4gICAgICAgIC8vIFNldCBlYWNoIG9mIHRoZSBuYW1lcyBvbiB0aGUgTW9kZXJuaXpyIG9iamVjdFxuICAgICAgICBmb3IgKG5hbWVJZHggPSAwOyBuYW1lSWR4IDwgZmVhdHVyZU5hbWVzLmxlbmd0aDsgbmFtZUlkeCsrKSB7XG4gICAgICAgICAgZmVhdHVyZU5hbWUgPSBmZWF0dXJlTmFtZXNbbmFtZUlkeF07XG4gICAgICAgICAgLy8gU3VwcG9ydCBkb3QgcHJvcGVydGllcyBhcyBzdWIgdGVzdHMuIFdlIGRvbid0IGRvIGNoZWNraW5nIHRvIG1ha2Ugc3VyZVxuICAgICAgICAgIC8vIHRoYXQgdGhlIGltcGxpZWQgcGFyZW50IHRlc3RzIGhhdmUgYmVlbiBhZGRlZC4gWW91IG11c3QgY2FsbCB0aGVtIGluXG4gICAgICAgICAgLy8gb3JkZXIgKGVpdGhlciBpbiB0aGUgdGVzdCwgb3IgbWFrZSB0aGUgcGFyZW50IHRlc3QgYSBkZXBlbmRlbmN5KS5cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIENhcCBpdCB0byBUV08gdG8gbWFrZSB0aGUgbG9naWMgc2ltcGxlIGFuZCBiZWNhdXNlIHdobyBuZWVkcyB0aGF0IGtpbmQgb2Ygc3VidGVzdGluZ1xuICAgICAgICAgIC8vIGhhc2h0YWcgZmFtb3VzIGxhc3Qgd29yZHNcbiAgICAgICAgICBmZWF0dXJlTmFtZVNwbGl0ID0gZmVhdHVyZU5hbWUuc3BsaXQoJy4nKTtcblxuICAgICAgICAgIGlmIChmZWF0dXJlTmFtZVNwbGl0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dID0gcmVzdWx0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjYXN0IHRvIGEgQm9vbGVhbiwgaWYgbm90IG9uZSBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dICYmICEoTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dIGluc3RhbmNlb2YgQm9vbGVhbikpIHtcbiAgICAgICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dID0gbmV3IEJvb2xlYW4oTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dW2ZlYXR1cmVOYW1lU3BsaXRbMV1dID0gcmVzdWx0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNsYXNzZXMucHVzaCgocmVzdWx0ID8gJycgOiAnbm8tJykgKyBmZWF0dXJlTmFtZVNwbGl0LmpvaW4oJy0nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgO1xuXG4gIC8qKlxuICAgKiBoYXNPd25Qcm9wIGlzIGEgc2hpbSBmb3IgaGFzT3duUHJvcGVydHkgdGhhdCBpcyBuZWVkZWQgZm9yIFNhZmFyaSAyLjAgc3VwcG9ydFxuICAgKlxuICAgKiBAYXV0aG9yIGthbmdheFxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGhhc093blByb3BcbiAgICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCAtIFRoZSBvYmplY3QgdG8gY2hlY2sgZm9yIGEgcHJvcGVydHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IC0gVGhlIHByb3BlcnR5IHRvIGNoZWNrIGZvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG5cbiAgLy8gaGFzT3duUHJvcGVydHkgc2hpbSBieSBrYW5nYXggbmVlZGVkIGZvciBTYWZhcmkgMi4wIHN1cHBvcnRcbiAgdmFyIGhhc093blByb3A7XG5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBfaGFzT3duUHJvcGVydHkgPSAoe30pLmhhc093blByb3BlcnR5O1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgLyogd2UgaGF2ZSBubyB3YXkgb2YgdGVzdGluZyBJRSA1LjUgb3Igc2FmYXJpIDIsXG4gICAgICogc28ganVzdCBhc3N1bWUgdGhlIGVsc2UgZ2V0cyBoaXQgKi9cbiAgICBpZiAoIWlzKF9oYXNPd25Qcm9wZXJ0eSwgJ3VuZGVmaW5lZCcpICYmICFpcyhfaGFzT3duUHJvcGVydHkuY2FsbCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICBoYXNPd25Qcm9wID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gX2hhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhc093blByb3AgPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IC8qIHllcywgdGhpcyBjYW4gZ2l2ZSBmYWxzZSBwb3NpdGl2ZXMvbmVnYXRpdmVzLCBidXQgbW9zdCBvZiB0aGUgdGltZSB3ZSBkb24ndCBjYXJlIGFib3V0IHRob3NlICovXG4gICAgICAgIHJldHVybiAoKHByb3BlcnR5IGluIG9iamVjdCkgJiYgaXMob2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZVtwcm9wZXJ0eV0sICd1bmRlZmluZWQnKSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSkoKTtcblxuICBcblxuICAvKipcbiAgICogZG9jRWxlbWVudCBpcyBhIGNvbnZlbmllbmNlIHdyYXBwZXIgdG8gZ3JhYiB0aGUgcm9vdCBlbGVtZW50IG9mIHRoZSBkb2N1bWVudFxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fFNWR0VsZW1lbnR9IFRoZSByb290IGVsZW1lbnQgb2YgdGhlIGRvY3VtZW50XG4gICAqL1xuXG4gIHZhciBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBoZWxwZXIgdG8gY2hlY2sgaWYgdGhlIGRvY3VtZW50IHdlIGFyZSBydW5uaW5nIGluIGlzIGFuIFNWRyBkb2N1bWVudFxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG4gIHZhciBpc1NWRyA9IGRvY0VsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2Zyc7XG4gIFxuXG4gIC8qKlxuICAgKiBzZXRDbGFzc2VzIHRha2VzIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHJvb3QgZWxlbWVudFxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIHNldENsYXNzZXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NlcyAtIEFycmF5IG9mIGNsYXNzIG5hbWVzXG4gICAqL1xuXG4gIC8vIFBhc3MgaW4gYW4gYW5kIGFycmF5IG9mIGNsYXNzIG5hbWVzLCBlLmcuOlxuICAvLyAgWyduby13ZWJwJywgJ2JvcmRlcnJhZGl1cycsIC4uLl1cbiAgZnVuY3Rpb24gc2V0Q2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGRvY0VsZW1lbnQuY2xhc3NOYW1lO1xuICAgIHZhciBjbGFzc1ByZWZpeCA9IE1vZGVybml6ci5fY29uZmlnLmNsYXNzUHJlZml4IHx8ICcnO1xuXG4gICAgaWYgKGlzU1ZHKSB7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuYmFzZVZhbDtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgYG5vLWpzYCB0byBganNgIChpbmRlcGVuZGVudGx5IG9mIHRoZSBgZW5hYmxlQ2xhc3Nlc2Agb3B0aW9uKVxuICAgIC8vIEhhbmRsZSBjbGFzc1ByZWZpeCBvbiB0aGlzIHRvb1xuICAgIGlmIChNb2Rlcm5penIuX2NvbmZpZy5lbmFibGVKU0NsYXNzKSB7XG4gICAgICB2YXIgcmVKUyA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc1ByZWZpeCArICduby1qcyhcXFxcc3wkKScpO1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UocmVKUywgJyQxJyArIGNsYXNzUHJlZml4ICsgJ2pzJDInKTtcbiAgICB9XG5cbiAgICBpZiAoTW9kZXJuaXpyLl9jb25maWcuZW5hYmxlQ2xhc3Nlcykge1xuICAgICAgLy8gQWRkIHRoZSBuZXcgY2xhc3Nlc1xuICAgICAgY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzUHJlZml4ICsgY2xhc3Nlcy5qb2luKCcgJyArIGNsYXNzUHJlZml4KTtcbiAgICAgIGlmIChpc1NWRykge1xuICAgICAgICBkb2NFbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsID0gY2xhc3NOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICA7XG5cblxuICAgLy8gX2wgdHJhY2tzIGxpc3RlbmVycyBmb3IgYXN5bmMgdGVzdHMsIGFzIHdlbGwgYXMgdGVzdHMgdGhhdCBleGVjdXRlIGFmdGVyIHRoZSBpbml0aWFsIHJ1blxuICBNb2Rlcm5penJQcm90by5fbCA9IHt9O1xuXG4gIC8qKlxuICAgKiBNb2Rlcm5penIub24gaXMgYSB3YXkgdG8gbGlzdGVuIGZvciB0aGUgY29tcGxldGlvbiBvZiBhc3luYyB0ZXN0cy4gQmVpbmdcbiAgICogYXN5bmNocm9ub3VzLCB0aGV5IG1heSBub3QgZmluaXNoIGJlZm9yZSB5b3VyIHNjcmlwdHMgcnVuLiBBcyBhIHJlc3VsdCB5b3VcbiAgICogd2lsbCBnZXQgYSBwb3NzaWJseSBmYWxzZSBuZWdhdGl2ZSBgdW5kZWZpbmVkYCB2YWx1ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIE1vZGVybml6clxuICAgKiBAbmFtZSBNb2Rlcm5penIub25cbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICogQGZ1bmN0aW9uIG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmZWF0dXJlIC0gU3RyaW5nIG5hbWUgb2YgdGhlIGZlYXR1cmUgZGV0ZWN0XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIC0gQ2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJuaW5nIGEgQm9vbGVhbiAtIHRydWUgaWYgZmVhdHVyZSBpcyBzdXBwb3J0ZWQsIGZhbHNlIGlmIG5vdFxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBNb2Rlcm5penIub24oJ2ZsYXNoJywgZnVuY3Rpb24oIHJlc3VsdCApIHtcbiAgICogICBpZiAocmVzdWx0KSB7XG4gICAqICAgIC8vIHRoZSBicm93c2VyIGhhcyBmbGFzaFxuICAgKiAgIH0gZWxzZSB7XG4gICAqICAgICAvLyB0aGUgYnJvd3NlciBkb2VzIG5vdCBoYXZlIGZsYXNoXG4gICAqICAgfVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuXG4gIE1vZGVybml6clByb3RvLm9uID0gZnVuY3Rpb24oZmVhdHVyZSwgY2IpIHtcbiAgICAvLyBDcmVhdGUgdGhlIGxpc3Qgb2YgbGlzdGVuZXJzIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBpZiAoIXRoaXMuX2xbZmVhdHVyZV0pIHtcbiAgICAgIHRoaXMuX2xbZmVhdHVyZV0gPSBbXTtcbiAgICB9XG5cbiAgICAvLyBQdXNoIHRoaXMgdGVzdCBvbiB0byB0aGUgbGlzdGVuZXIgbGlzdFxuICAgIHRoaXMuX2xbZmVhdHVyZV0ucHVzaChjYik7XG5cbiAgICAvLyBJZiBpdCdzIGFscmVhZHkgYmVlbiByZXNvbHZlZCwgdHJpZ2dlciBpdCBvbiBuZXh0IHRpY2tcbiAgICBpZiAoTW9kZXJuaXpyLmhhc093blByb3BlcnR5KGZlYXR1cmUpKSB7XG4gICAgICAvLyBOZXh0IFRpY2tcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIE1vZGVybml6ci5fdHJpZ2dlcihmZWF0dXJlLCBNb2Rlcm5penJbZmVhdHVyZV0pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBfdHJpZ2dlciBpcyB0aGUgcHJpdmF0ZSBmdW5jdGlvbiB1c2VkIHRvIHNpZ25hbCB0ZXN0IGNvbXBsZXRpb24gYW5kIHJ1biBhbnlcbiAgICogY2FsbGJhY2tzIHJlZ2lzdGVyZWQgdGhyb3VnaCBbTW9kZXJuaXpyLm9uXSgjbW9kZXJuaXpyLW9uKVxuICAgKlxuICAgKiBAbWVtYmVyb2YgTW9kZXJuaXpyXG4gICAqIEBuYW1lIE1vZGVybml6ci5fdHJpZ2dlclxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIF90cmlnZ2VyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmZWF0dXJlIC0gc3RyaW5nIG5hbWUgb2YgdGhlIGZlYXR1cmUgZGV0ZWN0XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb258Ym9vbGVhbn0gW3Jlc10gLSBBIGZlYXR1cmUgZGV0ZWN0aW9uIGZ1bmN0aW9uLCBvciB0aGUgYm9vbGVhbiA9XG4gICAqIHJlc3VsdCBvZiBhIGZlYXR1cmUgZGV0ZWN0aW9uIGZ1bmN0aW9uXG4gICAqL1xuXG4gIE1vZGVybml6clByb3RvLl90cmlnZ2VyID0gZnVuY3Rpb24oZmVhdHVyZSwgcmVzKSB7XG4gICAgaWYgKCF0aGlzLl9sW2ZlYXR1cmVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNicyA9IHRoaXMuX2xbZmVhdHVyZV07XG5cbiAgICAvLyBGb3JjZSBhc3luY1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgY2I7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNiID0gY2JzW2ldO1xuICAgICAgICBjYihyZXMpO1xuICAgICAgfVxuICAgIH0sIDApO1xuXG4gICAgLy8gRG9uJ3QgdHJpZ2dlciB0aGVzZSBhZ2FpblxuICAgIGRlbGV0ZSB0aGlzLl9sW2ZlYXR1cmVdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBhZGRUZXN0IGFsbG93cyB5b3UgdG8gZGVmaW5lIHlvdXIgb3duIGZlYXR1cmUgZGV0ZWN0cyB0aGF0IGFyZSBub3QgY3VycmVudGx5XG4gICAqIGluY2x1ZGVkIGluIE1vZGVybml6ciAodW5kZXIgdGhlIGNvdmVycyBpdCdzIHRoZSBleGFjdCBzYW1lIGNvZGUgTW9kZXJuaXpyXG4gICAqIHVzZXMgZm9yIGl0cyBvd24gW2ZlYXR1cmUgZGV0ZWN0aW9uc10oaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvdHJlZS9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzKSkuIEp1c3QgbGlrZSB0aGUgb2ZmaWNhbCBkZXRlY3RzLCB0aGUgcmVzdWx0XG4gICAqIHdpbGwgYmUgYWRkZWQgb250byB0aGUgTW9kZXJuaXpyIG9iamVjdCwgYXMgd2VsbCBhcyBhbiBhcHByb3ByaWF0ZSBjbGFzc05hbWUgc2V0IG9uXG4gICAqIHRoZSBodG1sIGVsZW1lbnQgd2hlbiBjb25maWd1cmVkIHRvIGRvIHNvXG4gICAqXG4gICAqIEBtZW1iZXJvZiBNb2Rlcm5penJcbiAgICogQG5hbWUgTW9kZXJuaXpyLmFkZFRlc3RcbiAgICogQG9wdGlvbk5hbWUgTW9kZXJuaXpyLmFkZFRlc3QoKVxuICAgKiBAb3B0aW9uUHJvcCBhZGRUZXN0XG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBmdW5jdGlvbiBhZGRUZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZmVhdHVyZSAtIFRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgZmVhdHVyZSBkZXRlY3QsIG9yIGFuXG4gICAqIG9iamVjdCBvZiBmZWF0dXJlIGRldGVjdCBuYW1lcyBhbmQgdGVzdFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW59IHRlc3QgLSBGdW5jdGlvbiByZXR1cm5pbmcgdHJ1ZSBpZiBmZWF0dXJlIGlzIHN1cHBvcnRlZCxcbiAgICogZmFsc2UgaWYgbm90LiBPdGhlcndpc2UgYSBib29sZWFuIHJlcHJlc2VudGluZyB0aGUgcmVzdWx0cyBvZiBhIGZlYXR1cmUgZGV0ZWN0aW9uXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIFRoZSBtb3N0IGNvbW1vbiB3YXkgb2YgY3JlYXRpbmcgeW91ciBvd24gZmVhdHVyZSBkZXRlY3RzIGlzIGJ5IGNhbGxpbmdcbiAgICogYE1vZGVybml6ci5hZGRUZXN0YCB3aXRoIGEgc3RyaW5nIChwcmVmZXJhYmx5IGp1c3QgbG93ZXJjYXNlLCB3aXRob3V0IGFueVxuICAgKiBwdW5jdHVhdGlvbiksIGFuZCBhIGZ1bmN0aW9uIHlvdSB3YW50IGV4ZWN1dGVkIHRoYXQgd2lsbCByZXR1cm4gYSBib29sZWFuIHJlc3VsdFxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBNb2Rlcm5penIuYWRkVGVzdCgnaXRzVHVlc2RheScsIGZ1bmN0aW9uKCkge1xuICAgKiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICAgKiAgcmV0dXJuIGQuZ2V0RGF5KCkgPT09IDI7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogV2hlbiB0aGUgYWJvdmUgaXMgcnVuLCBpdCB3aWxsIHNldCBNb2Rlcm5penIuaXRzdHVlc2RheSB0byBgdHJ1ZWAgd2hlbiBpdCBpcyB0dWVzZGF5LFxuICAgKiBhbmQgdG8gYGZhbHNlYCBldmVyeSBvdGhlciBkYXkgb2YgdGhlIHdlZWsuIE9uZSB0aGluZyB0byBub3RpY2UgaXMgdGhhdCB0aGUgbmFtZXMgb2ZcbiAgICogZmVhdHVyZSBkZXRlY3QgZnVuY3Rpb25zIGFyZSBhbHdheXMgbG93ZXJjYXNlZCB3aGVuIGFkZGVkIHRvIHRoZSBNb2Rlcm5penIgb2JqZWN0LiBUaGF0XG4gICAqIG1lYW5zIHRoYXQgYE1vZGVybml6ci5pdHNUdWVzZGF5YCB3aWxsIG5vdCBleGlzdCwgYnV0IGBNb2Rlcm5penIuaXRzdHVlc2RheWAgd2lsbC5cbiAgICpcbiAgICpcbiAgICogIFNpbmNlIHdlIG9ubHkgbG9vayBhdCB0aGUgcmV0dXJuZWQgdmFsdWUgZnJvbSBhbnkgZmVhdHVyZSBkZXRlY3Rpb24gZnVuY3Rpb24sXG4gICAqICB5b3UgZG8gbm90IG5lZWQgdG8gYWN0dWFsbHkgdXNlIGEgZnVuY3Rpb24uIEZvciBzaW1wbGUgZGV0ZWN0aW9ucywganVzdCBwYXNzaW5nXG4gICAqICBpbiBhIHN0YXRlbWVudCB0aGF0IHdpbGwgcmV0dXJuIGEgYm9vbGVhbiB2YWx1ZSB3b3JrcyBqdXN0IGZpbmUuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIE1vZGVybml6ci5hZGRUZXN0KCdoYXNKcXVlcnknLCAnalF1ZXJ5JyBpbiB3aW5kb3cpO1xuICAgKiBgYGBcbiAgICpcbiAgICogSnVzdCBsaWtlIGJlZm9yZSwgd2hlbiB0aGUgYWJvdmUgcnVucyBgTW9kZXJuaXpyLmhhc2pxdWVyeWAgd2lsbCBiZSB0cnVlIGlmXG4gICAqIGpRdWVyeSBoYXMgYmVlbiBpbmNsdWRlZCBvbiB0aGUgcGFnZS4gTm90IHVzaW5nIGEgZnVuY3Rpb24gc2F2ZXMgYSBzbWFsbCBhbW91bnRcbiAgICogb2Ygb3ZlcmhlYWQgZm9yIHRoZSBicm93c2VyLCBhcyB3ZWxsIGFzIG1ha2luZyB5b3VyIGNvZGUgbXVjaCBtb3JlIHJlYWRhYmxlLlxuICAgKlxuICAgKiBGaW5hbGx5LCB5b3UgYWxzbyBoYXZlIHRoZSBhYmlsaXR5IHRvIHBhc3MgaW4gYW4gb2JqZWN0IG9mIGZlYXR1cmUgbmFtZXMgYW5kXG4gICAqIHRoZWlyIHRlc3RzLiBUaGlzIGlzIGhhbmR5IGlmIHlvdSB3YW50IHRvIGFkZCBtdWx0aXBsZSBkZXRlY3Rpb25zIGluIG9uZSBnby5cbiAgICogVGhlIGtleXMgc2hvdWxkIGFsd2F5cyBiZSBhIHN0cmluZywgYW5kIHRoZSB2YWx1ZSBjYW4gYmUgZWl0aGVyIGEgYm9vbGVhbiBvclxuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBib29sZWFuLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiB2YXIgZGV0ZWN0cyA9IHtcbiAgICogICdoYXNqcXVlcnknOiAnalF1ZXJ5JyBpbiB3aW5kb3csXG4gICAqICAnaXRzdHVlc2RheSc6IGZ1bmN0aW9uKCkge1xuICAgKiAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAqICAgIHJldHVybiBkLmdldERheSgpID09PSAyO1xuICAgKiAgfVxuICAgKiB9XG4gICAqXG4gICAqIE1vZGVybml6ci5hZGRUZXN0KGRldGVjdHMpO1xuICAgKiBgYGBcbiAgICpcbiAgICogVGhlcmUgaXMgcmVhbGx5IG5vIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZmlyc3QgbWV0aG9kcyBhbmQgdGhpcyBvbmUsIGl0IGlzXG4gICAqIGp1c3QgYSBjb252ZW5pZW5jZSB0byBsZXQgeW91IHdyaXRlIG1vcmUgcmVhZGFibGUgY29kZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gYWRkVGVzdChmZWF0dXJlLCB0ZXN0KSB7XG5cbiAgICBpZiAodHlwZW9mIGZlYXR1cmUgPT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBmZWF0dXJlKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGZlYXR1cmUsIGtleSkpIHtcbiAgICAgICAgICBhZGRUZXN0KGtleSwgZmVhdHVyZVsga2V5IF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgZmVhdHVyZSA9IGZlYXR1cmUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHZhciBmZWF0dXJlTmFtZVNwbGl0ID0gZmVhdHVyZS5zcGxpdCgnLicpO1xuICAgICAgdmFyIGxhc3QgPSBNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV07XG5cbiAgICAgIC8vIEFnYWluLCB3ZSBkb24ndCBjaGVjayBmb3IgcGFyZW50IHRlc3QgZXhpc3RlbmNlLiBHZXQgdGhhdCByaWdodCwgdGhvdWdoLlxuICAgICAgaWYgKGZlYXR1cmVOYW1lU3BsaXQubGVuZ3RoID09IDIpIHtcbiAgICAgICAgbGFzdCA9IGxhc3RbZmVhdHVyZU5hbWVTcGxpdFsxXV07XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGFzdCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyB3ZSdyZSBnb2luZyB0byBxdWl0IGlmIHlvdSdyZSB0cnlpbmcgdG8gb3ZlcndyaXRlIGFuIGV4aXN0aW5nIHRlc3RcbiAgICAgICAgLy8gaWYgd2Ugd2VyZSB0byBhbGxvdyBpdCwgd2UnZCBkbyB0aGlzOlxuICAgICAgICAvLyAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCJcXFxcYihuby0pP1wiICsgZmVhdHVyZSArIFwiXFxcXGJcIik7XG4gICAgICAgIC8vICAgZG9jRWxlbWVudC5jbGFzc05hbWUgPSBkb2NFbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKCByZSwgJycgKTtcbiAgICAgICAgLy8gYnV0LCBubyBybHksIHN0dWZmICdlbS5cbiAgICAgICAgcmV0dXJuIE1vZGVybml6cjtcbiAgICAgIH1cblxuICAgICAgdGVzdCA9IHR5cGVvZiB0ZXN0ID09ICdmdW5jdGlvbicgPyB0ZXN0KCkgOiB0ZXN0O1xuXG4gICAgICAvLyBTZXQgdGhlIHZhbHVlICh0aGlzIGlzIHRoZSBtYWdpYywgcmlnaHQgaGVyZSkuXG4gICAgICBpZiAoZmVhdHVyZU5hbWVTcGxpdC5sZW5ndGggPT0gMSkge1xuICAgICAgICBNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0gPSB0ZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2FzdCB0byBhIEJvb2xlYW4sIGlmIG5vdCBvbmUgYWxyZWFkeVxuICAgICAgICBpZiAoTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dICYmICEoTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dIGluc3RhbmNlb2YgQm9vbGVhbikpIHtcbiAgICAgICAgICBNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0gPSBuZXcgQm9vbGVhbihNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dW2ZlYXR1cmVOYW1lU3BsaXRbMV1dID0gdGVzdDtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGEgc2luZ2xlIGNsYXNzIChlaXRoZXIgYGZlYXR1cmVgIG9yIGBuby1mZWF0dXJlYClcbiAgICAgIHNldENsYXNzZXMoWyghIXRlc3QgJiYgdGVzdCAhPSBmYWxzZSA/ICcnIDogJ25vLScpICsgZmVhdHVyZU5hbWVTcGxpdC5qb2luKCctJyldKTtcblxuICAgICAgLy8gVHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgIE1vZGVybml6ci5fdHJpZ2dlcihmZWF0dXJlLCB0ZXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gTW9kZXJuaXpyOyAvLyBhbGxvdyBjaGFpbmluZy5cbiAgfVxuXG4gIC8vIEFmdGVyIGFsbCB0aGUgdGVzdHMgYXJlIHJ1biwgYWRkIHNlbGYgdG8gdGhlIE1vZGVybml6ciBwcm90b3R5cGVcbiAgTW9kZXJuaXpyLl9xLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgTW9kZXJuaXpyUHJvdG8uYWRkVGVzdCA9IGFkZFRlc3Q7XG4gIH0pO1xuXG4gIFxuXG5cbi8qKlxuICAqIEBvcHRpb25OYW1lIGh0bWw1cHJpbnRzaGl2XG4gICogQG9wdGlvblByb3AgaHRtbDVwcmludHNoaXZcbiAgKi9cblxuICAvLyBUYWtlIHRoZSBodG1sNSB2YXJpYWJsZSBvdXQgb2YgdGhlIGh0bWw1c2hpdiBzY29wZSBzbyB3ZSBjYW4gcmV0dXJuIGl0LlxuICB2YXIgaHRtbDU7XG4gIGlmICghaXNTVkcpIHtcblxuICAgIC8qKlxuICAgICAqIEBwcmVzZXJ2ZSBIVE1MNSBTaGl2IDMuNy4zIHwgQGFmYXJrYXMgQGpkYWx0b24gQGpvbl9uZWFsIEByZW0gfCBNSVQvR1BMMiBMaWNlbnNlZFxuICAgICAqL1xuICAgIDsoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCkge1xuICAgICAgLyoqIHZlcnNpb24gKi9cbiAgICAgIHZhciB2ZXJzaW9uID0gJzMuNy4zJztcblxuICAgICAgLyoqIFByZXNldCBvcHRpb25zICovXG4gICAgICB2YXIgb3B0aW9ucyA9IHdpbmRvdy5odG1sNSB8fCB7fTtcblxuICAgICAgLyoqIFVzZWQgdG8gc2tpcCBwcm9ibGVtIGVsZW1lbnRzICovXG4gICAgICB2YXIgcmVTa2lwID0gL148fF4oPzpidXR0b258bWFwfHNlbGVjdHx0ZXh0YXJlYXxvYmplY3R8aWZyYW1lfG9wdGlvbnxvcHRncm91cCkkL2k7XG5cbiAgICAgIC8qKiBOb3QgYWxsIGVsZW1lbnRzIGNhbiBiZSBjbG9uZWQgaW4gSUUgKiovXG4gICAgICB2YXIgc2F2ZUNsb25lcyA9IC9eKD86YXxifGNvZGV8ZGl2fGZpZWxkc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGl8bGFiZWx8bGl8b2x8cHxxfHNwYW58c3Ryb25nfHN0eWxlfHRhYmxlfHRib2R5fHRkfHRofHRyfHVsKSQvaTtcblxuICAgICAgLyoqIERldGVjdCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIGRlZmF1bHQgaHRtbDUgc3R5bGVzICovXG4gICAgICB2YXIgc3VwcG9ydHNIdG1sNVN0eWxlcztcblxuICAgICAgLyoqIE5hbWUgb2YgdGhlIGV4cGFuZG8sIHRvIHdvcmsgd2l0aCBtdWx0aXBsZSBkb2N1bWVudHMgb3IgdG8gcmUtc2hpdiBvbmUgZG9jdW1lbnQgKi9cbiAgICAgIHZhciBleHBhbmRvID0gJ19odG1sNXNoaXYnO1xuXG4gICAgICAvKiogVGhlIGlkIGZvciB0aGUgdGhlIGRvY3VtZW50cyBleHBhbmRvICovXG4gICAgICB2YXIgZXhwYW5JRCA9IDA7XG5cbiAgICAgIC8qKiBDYWNoZWQgZGF0YSBmb3IgZWFjaCBkb2N1bWVudCAqL1xuICAgICAgdmFyIGV4cGFuZG9EYXRhID0ge307XG5cbiAgICAgIC8qKiBEZXRlY3Qgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyB1bmtub3duIGVsZW1lbnRzICovXG4gICAgICB2YXIgc3VwcG9ydHNVbmtub3duRWxlbWVudHM7XG5cbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBhLmlubmVySFRNTCA9ICc8eHl6PjwveHl6Pic7XG4gICAgICAgICAgLy9pZiB0aGUgaGlkZGVuIHByb3BlcnR5IGlzIGltcGxlbWVudGVkIHdlIGNhbiBhc3N1bWUsIHRoYXQgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYmFzaWMgSFRNTDUgU3R5bGVzXG4gICAgICAgICAgc3VwcG9ydHNIdG1sNVN0eWxlcyA9ICgnaGlkZGVuJyBpbiBhKTtcblxuICAgICAgICAgIHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzID0gYS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAxIHx8IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGFzc2lnbiBhIGZhbHNlIHBvc2l0aXZlIGlmIHVuYWJsZSB0byBzaGl2XG4gICAgICAgICAgICAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkoJ2EnKTtcbiAgICAgICAgICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdHlwZW9mIGZyYWcuY2xvbmVOb2RlID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGZyYWcuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCA9PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBmcmFnLmNyZWF0ZUVsZW1lbnQgPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSgpKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgLy8gYXNzaWduIGEgZmFsc2UgcG9zaXRpdmUgaWYgZGV0ZWN0aW9uIGZhaWxzID0+IHVuYWJsZSB0byBzaGl2XG4gICAgICAgICAgc3VwcG9ydHNIdG1sNVN0eWxlcyA9IHRydWU7XG4gICAgICAgICAgc3VwcG9ydHNVbmtub3duRWxlbWVudHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgIH0oKSk7XG5cbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzdHlsZSBzaGVldCB3aXRoIHRoZSBnaXZlbiBDU1MgdGV4dCBhbmQgYWRkcyBpdCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3NzVGV4dCBUaGUgQ1NTIHRleHQuXG4gICAgICAgKiBAcmV0dXJucyB7U3R5bGVTaGVldH0gVGhlIHN0eWxlIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGFkZFN0eWxlU2hlZXQob3duZXJEb2N1bWVudCwgY3NzVGV4dCkge1xuICAgICAgICB2YXIgcCA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgICAgICAgIHBhcmVudCA9IG93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSB8fCBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICBwLmlubmVySFRNTCA9ICd4PHN0eWxlPicgKyBjc3NUZXh0ICsgJzwvc3R5bGU+JztcbiAgICAgICAgcmV0dXJuIHBhcmVudC5pbnNlcnRCZWZvcmUocC5sYXN0Q2hpbGQsIHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBgaHRtbDUuZWxlbWVudHNgIGFzIGFuIGFycmF5LlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgb2Ygc2hpdmVkIGVsZW1lbnQgbm9kZSBuYW1lcy5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZ2V0RWxlbWVudHMoKSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IGh0bWw1LmVsZW1lbnRzO1xuICAgICAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnRzID09ICdzdHJpbmcnID8gZWxlbWVudHMuc3BsaXQoJyAnKSA6IGVsZW1lbnRzO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEV4dGVuZHMgdGhlIGJ1aWx0LWluIGxpc3Qgb2YgaHRtbDUgZWxlbWVudHNcbiAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IG5ld0VsZW1lbnRzIHdoaXRlc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb3IgYXJyYXkgb2YgbmV3IGVsZW1lbnQgbmFtZXMgdG8gc2hpdlxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgY29udGV4dCBkb2N1bWVudC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gYWRkRWxlbWVudHMobmV3RWxlbWVudHMsIG93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gaHRtbDUuZWxlbWVudHM7XG4gICAgICAgIGlmKHR5cGVvZiBlbGVtZW50cyAhPSAnc3RyaW5nJyl7XG4gICAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5qb2luKCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mIG5ld0VsZW1lbnRzICE9ICdzdHJpbmcnKXtcbiAgICAgICAgICBuZXdFbGVtZW50cyA9IG5ld0VsZW1lbnRzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBodG1sNS5lbGVtZW50cyA9IGVsZW1lbnRzICsnICcrIG5ld0VsZW1lbnRzO1xuICAgICAgICBzaGl2RG9jdW1lbnQob3duZXJEb2N1bWVudCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgZGF0YSBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBkb2N1bWVudFxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50LlxuICAgICAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IG9mIGRhdGEuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBleHBhbmRvRGF0YVtvd25lckRvY3VtZW50W2V4cGFuZG9dXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IHt9O1xuICAgICAgICAgIGV4cGFuSUQrKztcbiAgICAgICAgICBvd25lckRvY3VtZW50W2V4cGFuZG9dID0gZXhwYW5JRDtcbiAgICAgICAgICBleHBhbmRvRGF0YVtleHBhbklEXSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogcmV0dXJucyBhIHNoaXZlZCBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gbm9kZU5hbWUgYW5kIGRvY3VtZW50XG4gICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlTmFtZSBuYW1lIG9mIHRoZSBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBjb250ZXh0IGRvY3VtZW50LlxuICAgICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHNoaXZlZCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5vZGVOYW1lLCBvd25lckRvY3VtZW50LCBkYXRhKXtcbiAgICAgICAgaWYgKCFvd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgb3duZXJEb2N1bWVudCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmKHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzKXtcbiAgICAgICAgICByZXR1cm4gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vZGU7XG5cbiAgICAgICAgaWYgKGRhdGEuY2FjaGVbbm9kZU5hbWVdKSB7XG4gICAgICAgICAgbm9kZSA9IGRhdGEuY2FjaGVbbm9kZU5hbWVdLmNsb25lTm9kZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHNhdmVDbG9uZXMudGVzdChub2RlTmFtZSkpIHtcbiAgICAgICAgICBub2RlID0gKGRhdGEuY2FjaGVbbm9kZU5hbWVdID0gZGF0YS5jcmVhdGVFbGVtKG5vZGVOYW1lKSkuY2xvbmVOb2RlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZSA9IGRhdGEuY3JlYXRlRWxlbShub2RlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdm9pZCBhZGRpbmcgc29tZSBlbGVtZW50cyB0byBmcmFnbWVudHMgaW4gSUUgPCA5IGJlY2F1c2VcbiAgICAgICAgLy8gKiBBdHRyaWJ1dGVzIGxpa2UgYG5hbWVgIG9yIGB0eXBlYCBjYW5ub3QgYmUgc2V0L2NoYW5nZWQgb25jZSBhbiBlbGVtZW50XG4gICAgICAgIC8vICAgaXMgaW5zZXJ0ZWQgaW50byBhIGRvY3VtZW50L2ZyYWdtZW50XG4gICAgICAgIC8vICogTGluayBlbGVtZW50cyB3aXRoIGBzcmNgIGF0dHJpYnV0ZXMgdGhhdCBhcmUgaW5hY2Nlc3NpYmxlLCBhcyB3aXRoXG4gICAgICAgIC8vICAgYSA0MDMgcmVzcG9uc2UsIHdpbGwgY2F1c2UgdGhlIHRhYi93aW5kb3cgdG8gY3Jhc2hcbiAgICAgICAgLy8gKiBTY3JpcHQgZWxlbWVudHMgYXBwZW5kZWQgdG8gZnJhZ21lbnRzIHdpbGwgZXhlY3V0ZSB3aGVuIHRoZWlyIGBzcmNgXG4gICAgICAgIC8vICAgb3IgYHRleHRgIHByb3BlcnR5IGlzIHNldFxuICAgICAgICByZXR1cm4gbm9kZS5jYW5IYXZlQ2hpbGRyZW4gJiYgIXJlU2tpcC50ZXN0KG5vZGVOYW1lKSAmJiAhbm9kZS50YWdVcm4gPyBkYXRhLmZyYWcuYXBwZW5kQ2hpbGQobm9kZSkgOiBub2RlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIHJldHVybnMgYSBzaGl2ZWQgRG9jdW1lbnRGcmFnbWVudCBmb3IgdGhlIGdpdmVuIGRvY3VtZW50XG4gICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGNvbnRleHQgZG9jdW1lbnQuXG4gICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2hpdmVkIERvY3VtZW50RnJhZ21lbnQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQob3duZXJEb2N1bWVudCwgZGF0YSl7XG4gICAgICAgIGlmICghb3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIG93bmVyRG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZihzdXBwb3J0c1Vua25vd25FbGVtZW50cyl7XG4gICAgICAgICAgcmV0dXJuIG93bmVyRG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSBkYXRhIHx8IGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpO1xuICAgICAgICB2YXIgY2xvbmUgPSBkYXRhLmZyYWcuY2xvbmVOb2RlKCksXG4gICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgZWxlbXMgPSBnZXRFbGVtZW50cygpLFxuICAgICAgICAgIGwgPSBlbGVtcy5sZW5ndGg7XG4gICAgICAgIGZvcig7aTxsO2krKyl7XG4gICAgICAgICAgY2xvbmUuY3JlYXRlRWxlbWVudChlbGVtc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNoaXZzIHRoZSBgY3JlYXRlRWxlbWVudGAgYW5kIGBjcmVhdGVEb2N1bWVudEZyYWdtZW50YCBtZXRob2RzIG9mIHRoZSBkb2N1bWVudC5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAcGFyYW0ge0RvY3VtZW50fERvY3VtZW50RnJhZ21lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50LlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgb2YgdGhlIGRvY3VtZW50LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBzaGl2TWV0aG9kcyhvd25lckRvY3VtZW50LCBkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YS5jYWNoZSkge1xuICAgICAgICAgIGRhdGEuY2FjaGUgPSB7fTtcbiAgICAgICAgICBkYXRhLmNyZWF0ZUVsZW0gPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ7XG4gICAgICAgICAgZGF0YS5jcmVhdGVGcmFnID0gb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50O1xuICAgICAgICAgIGRhdGEuZnJhZyA9IGRhdGEuY3JlYXRlRnJhZygpO1xuICAgICAgICB9XG5cblxuICAgICAgICBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihub2RlTmFtZSkge1xuICAgICAgICAgIC8vYWJvcnQgc2hpdlxuICAgICAgICAgIGlmICghaHRtbDUuc2hpdk1ldGhvZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChub2RlTmFtZSwgb3duZXJEb2N1bWVudCwgZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gRnVuY3Rpb24oJ2gsZicsICdyZXR1cm4gZnVuY3Rpb24oKXsnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhciBuPWYuY2xvbmVOb2RlKCksYz1uLmNyZWF0ZUVsZW1lbnQ7JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoLnNoaXZNZXRob2RzJiYoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVucm9sbCB0aGUgYGNyZWF0ZUVsZW1lbnRgIGNhbGxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEVsZW1lbnRzKCkuam9pbigpLnJlcGxhY2UoL1tcXHdcXC06XSsvZywgZnVuY3Rpb24obm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZnJhZy5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2MoXCInICsgbm9kZU5hbWUgKyAnXCIpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgK1xuICAgICAgICAgICcpO3JldHVybiBufSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKGh0bWw1LCBkYXRhLmZyYWcpO1xuICAgICAgfVxuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBTaGl2cyB0aGUgZ2l2ZW4gZG9jdW1lbnQuXG4gICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50IHRvIHNoaXYuXG4gICAgICAgKiBAcmV0dXJucyB7RG9jdW1lbnR9IFRoZSBzaGl2ZWQgZG9jdW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHNoaXZEb2N1bWVudChvd25lckRvY3VtZW50KSB7XG4gICAgICAgIGlmICghb3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIG93bmVyRG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF0YSA9IGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgIGlmIChodG1sNS5zaGl2Q1NTICYmICFzdXBwb3J0c0h0bWw1U3R5bGVzICYmICFkYXRhLmhhc0NTUykge1xuICAgICAgICAgIGRhdGEuaGFzQ1NTID0gISFhZGRTdHlsZVNoZWV0KG93bmVyRG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29ycmVjdHMgYmxvY2sgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRTYvNy84LzlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJ0aWNsZSxhc2lkZSxkaWFsb2csZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZHMgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRTYvNy84LzlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoaWRlcyBub24tcmVuZGVyZWQgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGVtcGxhdGV7ZGlzcGxheTpub25lfSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdXBwb3J0c1Vua25vd25FbGVtZW50cykge1xuICAgICAgICAgIHNoaXZNZXRob2RzKG93bmVyRG9jdW1lbnQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvd25lckRvY3VtZW50O1xuICAgICAgfVxuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgYGh0bWw1YCBvYmplY3QgaXMgZXhwb3NlZCBzbyB0aGF0IG1vcmUgZWxlbWVudHMgY2FuIGJlIHNoaXZlZCBhbmRcbiAgICAgICAqIGV4aXN0aW5nIHNoaXZpbmcgY2FuIGJlIGRldGVjdGVkIG9uIGlmcmFtZXMuXG4gICAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgICAqIEBleGFtcGxlXG4gICAgICAgKlxuICAgICAgICogLy8gb3B0aW9ucyBjYW4gYmUgY2hhbmdlZCBiZWZvcmUgdGhlIHNjcmlwdCBpcyBpbmNsdWRlZFxuICAgICAgICogaHRtbDUgPSB7ICdlbGVtZW50cyc6ICdtYXJrIHNlY3Rpb24nLCAnc2hpdkNTUyc6IGZhbHNlLCAnc2hpdk1ldGhvZHMnOiBmYWxzZSB9O1xuICAgICAgICovXG4gICAgICB2YXIgaHRtbDUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9yIHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcgb2Ygbm9kZSBuYW1lcyBvZiB0aGUgZWxlbWVudHMgdG8gc2hpdi5cbiAgICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgICAqIEB0eXBlIEFycmF5fFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgJ2VsZW1lbnRzJzogb3B0aW9ucy5lbGVtZW50cyB8fCAnYWJiciBhcnRpY2xlIGFzaWRlIGF1ZGlvIGJkaSBjYW52YXMgZGF0YSBkYXRhbGlzdCBkZXRhaWxzIGRpYWxvZyBmaWdjYXB0aW9uIGZpZ3VyZSBmb290ZXIgaGVhZGVyIGhncm91cCBtYWluIG1hcmsgbWV0ZXIgbmF2IG91dHB1dCBwaWN0dXJlIHByb2dyZXNzIHNlY3Rpb24gc3VtbWFyeSB0ZW1wbGF0ZSB0aW1lIHZpZGVvJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogY3VycmVudCB2ZXJzaW9uIG9mIGh0bWw1c2hpdlxuICAgICAgICAgKi9cbiAgICAgICAgJ3ZlcnNpb24nOiB2ZXJzaW9uLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgSFRNTDUgc3R5bGUgc2hlZXQgc2hvdWxkIGJlIGluc2VydGVkLlxuICAgICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAgICogQHR5cGUgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgJ3NoaXZDU1MnOiAob3B0aW9ucy5zaGl2Q1NTICE9PSBmYWxzZSksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIGVxdWFsIHRvIHRydWUgaWYgYSBicm93c2VyIHN1cHBvcnRzIGNyZWF0aW5nIHVua25vd24vSFRNTDUgZWxlbWVudHNcbiAgICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgICdzdXBwb3J0c1Vua25vd25FbGVtZW50cyc6IHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZG9jdW1lbnQncyBgY3JlYXRlRWxlbWVudGAgYW5kIGBjcmVhdGVEb2N1bWVudEZyYWdtZW50YFxuICAgICAgICAgKiBtZXRob2RzIHNob3VsZCBiZSBvdmVyd3JpdHRlbi5cbiAgICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgICdzaGl2TWV0aG9kcyc6IChvcHRpb25zLnNoaXZNZXRob2RzICE9PSBmYWxzZSksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIHRvIGRlc2NyaWJlIHRoZSB0eXBlIG9mIGBodG1sNWAgb2JqZWN0IChcImRlZmF1bHRcIiBvciBcImRlZmF1bHQgcHJpbnRcIikuXG4gICAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgICd0eXBlJzogJ2RlZmF1bHQnLFxuXG4gICAgICAgIC8vIHNoaXZzIHRoZSBkb2N1bWVudCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBgaHRtbDVgIG9iamVjdCBvcHRpb25zXG4gICAgICAgICdzaGl2RG9jdW1lbnQnOiBzaGl2RG9jdW1lbnQsXG5cbiAgICAgICAgLy9jcmVhdGVzIGEgc2hpdmVkIGVsZW1lbnRcbiAgICAgICAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCxcblxuICAgICAgICAvL2NyZWF0ZXMgYSBzaGl2ZWQgZG9jdW1lbnRGcmFnbWVudFxuICAgICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50OiBjcmVhdGVEb2N1bWVudEZyYWdtZW50LFxuXG4gICAgICAgIC8vZXh0ZW5kcyBsaXN0IG9mIGVsZW1lbnRzXG4gICAgICAgIGFkZEVsZW1lbnRzOiBhZGRFbGVtZW50c1xuICAgICAgfTtcblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8vIGV4cG9zZSBodG1sNVxuICAgICAgd2luZG93Lmh0bWw1ID0gaHRtbDU7XG5cbiAgICAgIC8vIHNoaXYgdGhlIGRvY3VtZW50XG4gICAgICBzaGl2RG9jdW1lbnQoZG9jdW1lbnQpO1xuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUHJpbnQgU2hpdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgLyoqIFVzZWQgdG8gZmlsdGVyIG1lZGlhIHR5cGVzICovXG4gICAgICB2YXIgcmVNZWRpYSA9IC9eJHxcXGIoPzphbGx8cHJpbnQpXFxiLztcblxuICAgICAgLyoqIFVzZWQgdG8gbmFtZXNwYWNlIHByaW50YWJsZSBlbGVtZW50cyAqL1xuICAgICAgdmFyIHNoaXZOYW1lc3BhY2UgPSAnaHRtbDVzaGl2JztcblxuICAgICAgLyoqIERldGVjdCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHNoaXZhYmxlIHN0eWxlIHNoZWV0cyAqL1xuICAgICAgdmFyIHN1cHBvcnRzU2hpdmFibGVTaGVldHMgPSAhc3VwcG9ydHNVbmtub3duRWxlbWVudHMgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBhc3NpZ24gYSBmYWxzZSBuZWdhdGl2ZSBpZiB1bmFibGUgdG8gc2hpdlxuICAgICAgICB2YXIgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJldHVybiAhKFxuICAgICAgICAgIHR5cGVvZiBkb2N1bWVudC5uYW1lc3BhY2VzID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZG9jdW1lbnQucGFyZW50V2luZG93ID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZG9jRWwuYXBwbHlFbGVtZW50ID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZG9jRWwucmVtb3ZlTm9kZSA9PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgdHlwZW9mIHdpbmRvdy5hdHRhY2hFdmVudCA9PSAndW5kZWZpbmVkJ1xuICAgICAgICApO1xuICAgICAgfSgpKTtcblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYWxsIEhUTUw1IGVsZW1lbnRzIGluIHRoZSBnaXZlbiBkb2N1bWVudCB3aXRoIHByaW50YWJsZSBlbGVtZW50cy5cbiAgICAgICAqIChlZy4gdGhlIFwiaGVhZGVyXCIgZWxlbWVudCBpcyB3cmFwcGVkIHdpdGggdGhlIFwiaHRtbDVzaGl2OmhlYWRlclwiIGVsZW1lbnQpXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXG4gICAgICAgKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5IHdyYXBwZXJzIGFkZGVkLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBhZGRXcmFwcGVycyhvd25lckRvY3VtZW50KSB7XG4gICAgICAgIHZhciBub2RlLFxuICAgICAgICAgIG5vZGVzID0gb3duZXJEb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpLFxuICAgICAgICAgIGluZGV4ID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHJlRWxlbWVudHMgPSBSZWdFeHAoJ14oPzonICsgZ2V0RWxlbWVudHMoKS5qb2luKCd8JykgKyAnKSQnLCAnaScpLFxuICAgICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgICBpZiAocmVFbGVtZW50cy50ZXN0KG5vZGUubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChub2RlLmFwcGx5RWxlbWVudChjcmVhdGVXcmFwcGVyKG5vZGUpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHByaW50YWJsZSB3cmFwcGVyIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQuXG4gICAgICAgKiBAcmV0dXJucyB7RWxlbWVudH0gVGhlIHdyYXBwZXIuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXIoZWxlbWVudCkge1xuICAgICAgICB2YXIgbm9kZSxcbiAgICAgICAgICBub2RlcyA9IGVsZW1lbnQuYXR0cmlidXRlcyxcbiAgICAgICAgICBpbmRleCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgICB3cmFwcGVyID0gZWxlbWVudC5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2hpdk5hbWVzcGFjZSArICc6JyArIGVsZW1lbnQubm9kZU5hbWUpO1xuXG4gICAgICAgIC8vIGNvcHkgZWxlbWVudCBhdHRyaWJ1dGVzIHRvIHRoZSB3cmFwcGVyXG4gICAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgICBub2RlLnNwZWNpZmllZCAmJiB3cmFwcGVyLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBub2RlLm5vZGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29weSBlbGVtZW50IHN0eWxlcyB0byB0aGUgd3JhcHBlclxuICAgICAgICB3cmFwcGVyLnN0eWxlLmNzc1RleHQgPSBlbGVtZW50LnN0eWxlLmNzc1RleHQ7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNoaXZzIHRoZSBnaXZlbiBDU1MgdGV4dC5cbiAgICAgICAqIChlZy4gaGVhZGVye30gYmVjb21lcyBodG1sNXNoaXZcXDpoZWFkZXJ7fSlcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3NzVGV4dCBUaGUgQ1NTIHRleHQgdG8gc2hpdi5cbiAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzaGl2ZWQgQ1NTIHRleHQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHNoaXZDc3NUZXh0KGNzc1RleHQpIHtcbiAgICAgICAgdmFyIHBhaXIsXG4gICAgICAgICAgcGFydHMgPSBjc3NUZXh0LnNwbGl0KCd7JyksXG4gICAgICAgICAgaW5kZXggPSBwYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgcmVFbGVtZW50cyA9IFJlZ0V4cCgnKF58W1xcXFxzLD4rfl0pKCcgKyBnZXRFbGVtZW50cygpLmpvaW4oJ3wnKSArICcpKD89W1tcXFxccyw+K34jLjpdfCQpJywgJ2dpJyksXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSAnJDEnICsgc2hpdk5hbWVzcGFjZSArICdcXFxcOiQyJztcblxuICAgICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICAgIHBhaXIgPSBwYXJ0c1tpbmRleF0gPSBwYXJ0c1tpbmRleF0uc3BsaXQoJ30nKTtcbiAgICAgICAgICBwYWlyW3BhaXIubGVuZ3RoIC0gMV0gPSBwYWlyW3BhaXIubGVuZ3RoIC0gMV0ucmVwbGFjZShyZUVsZW1lbnRzLCByZXBsYWNlbWVudCk7XG4gICAgICAgICAgcGFydHNbaW5kZXhdID0gcGFpci5qb2luKCd9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oJ3snKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiB3cmFwcGVycywgbGVhdmluZyB0aGUgb3JpZ2luYWwgZWxlbWVudHMuXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHBhcmFtcyB7QXJyYXl9IHdyYXBwZXJzIEFuIGFycmF5IG9mIHByaW50YWJsZSB3cmFwcGVycy5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVtb3ZlV3JhcHBlcnMod3JhcHBlcnMpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gd3JhcHBlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICAgIHdyYXBwZXJzW2luZGV4XS5yZW1vdmVOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8qKlxuICAgICAgICogU2hpdnMgdGhlIGdpdmVuIGRvY3VtZW50IGZvciBwcmludC5cbiAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQgdG8gc2hpdi5cbiAgICAgICAqIEByZXR1cm5zIHtEb2N1bWVudH0gVGhlIHNoaXZlZCBkb2N1bWVudC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gc2hpdlByaW50KG93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIHNoaXZlZFNoZWV0LFxuICAgICAgICAgIHdyYXBwZXJzLFxuICAgICAgICAgIGRhdGEgPSBnZXRFeHBhbmRvRGF0YShvd25lckRvY3VtZW50KSxcbiAgICAgICAgICBuYW1lc3BhY2VzID0gb3duZXJEb2N1bWVudC5uYW1lc3BhY2VzLFxuICAgICAgICAgIG93bmVyV2luZG93ID0gb3duZXJEb2N1bWVudC5wYXJlbnRXaW5kb3c7XG5cbiAgICAgICAgaWYgKCFzdXBwb3J0c1NoaXZhYmxlU2hlZXRzIHx8IG93bmVyRG9jdW1lbnQucHJpbnRTaGl2ZWQpIHtcbiAgICAgICAgICByZXR1cm4gb3duZXJEb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG5hbWVzcGFjZXNbc2hpdk5hbWVzcGFjZV0gPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBuYW1lc3BhY2VzLmFkZChzaGl2TmFtZXNwYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVNoZWV0KCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChkYXRhLl9yZW1vdmVTaGVldFRpbWVyKTtcbiAgICAgICAgICBpZiAoc2hpdmVkU2hlZXQpIHtcbiAgICAgICAgICAgIHNoaXZlZFNoZWV0LnJlbW92ZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNoaXZlZFNoZWV0PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgb3duZXJXaW5kb3cuYXR0YWNoRXZlbnQoJ29uYmVmb3JlcHJpbnQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIHJlbW92ZVNoZWV0KCk7XG5cbiAgICAgICAgICB2YXIgaW1wb3J0cyxcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIHNoZWV0LFxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IG93bmVyRG9jdW1lbnQuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBjc3NUZXh0ID0gW10sXG4gICAgICAgICAgICBpbmRleCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICAgICAgc2hlZXRzID0gQXJyYXkoaW5kZXgpO1xuXG4gICAgICAgICAgLy8gY29udmVydCBzdHlsZVNoZWV0cyBjb2xsZWN0aW9uIHRvIGFuIGFycmF5XG4gICAgICAgICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgICAgICAgIHNoZWV0c1tpbmRleF0gPSBjb2xsZWN0aW9uW2luZGV4XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uY2F0IGFsbCBzdHlsZSBzaGVldCBDU1MgdGV4dFxuICAgICAgICAgIHdoaWxlICgoc2hlZXQgPSBzaGVldHMucG9wKCkpKSB7XG4gICAgICAgICAgICAvLyBJRSBkb2VzIG5vdCBlbmZvcmNlIGEgc2FtZSBvcmlnaW4gcG9saWN5IGZvciBleHRlcm5hbCBzdHlsZSBzaGVldHMuLi5cbiAgICAgICAgICAgIC8vIGJ1dCBoYXMgdHJvdWJsZSB3aXRoIHNvbWUgZHluYW1pY2FsbHkgY3JlYXRlZCBzdHlsZXNoZWV0c1xuICAgICAgICAgICAgaWYgKCFzaGVldC5kaXNhYmxlZCAmJiByZU1lZGlhLnRlc3Qoc2hlZXQubWVkaWEpKSB7XG5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbXBvcnRzID0gc2hlZXQuaW1wb3J0cztcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBpbXBvcnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgfSBjYXRjaChlcil7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHNoZWV0cy5wdXNoKGltcG9ydHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY3NzVGV4dC5wdXNoKHNoZWV0LmNzc1RleHQpO1xuICAgICAgICAgICAgICB9IGNhdGNoKGVyKXt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gd3JhcCBhbGwgSFRNTDUgZWxlbWVudHMgd2l0aCBwcmludGFibGUgZWxlbWVudHMgYW5kIGFkZCB0aGUgc2hpdmVkIHN0eWxlIHNoZWV0XG4gICAgICAgICAgY3NzVGV4dCA9IHNoaXZDc3NUZXh0KGNzc1RleHQucmV2ZXJzZSgpLmpvaW4oJycpKTtcbiAgICAgICAgICB3cmFwcGVycyA9IGFkZFdyYXBwZXJzKG93bmVyRG9jdW1lbnQpO1xuICAgICAgICAgIHNoaXZlZFNoZWV0ID0gYWRkU3R5bGVTaGVldChvd25lckRvY3VtZW50LCBjc3NUZXh0KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBvd25lcldpbmRvdy5hdHRhY2hFdmVudCgnb25hZnRlcnByaW50JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIHdyYXBwZXJzLCBsZWF2aW5nIHRoZSBvcmlnaW5hbCBlbGVtZW50cywgYW5kIHJlbW92ZSB0aGUgc2hpdmVkIHN0eWxlIHNoZWV0XG4gICAgICAgICAgcmVtb3ZlV3JhcHBlcnMod3JhcHBlcnMpO1xuICAgICAgICAgIGNsZWFyVGltZW91dChkYXRhLl9yZW1vdmVTaGVldFRpbWVyKTtcbiAgICAgICAgICBkYXRhLl9yZW1vdmVTaGVldFRpbWVyID0gc2V0VGltZW91dChyZW1vdmVTaGVldCwgNTAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3duZXJEb2N1bWVudC5wcmludFNoaXZlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBvd25lckRvY3VtZW50O1xuICAgICAgfVxuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgLy8gZXhwb3NlIEFQSVxuICAgICAgaHRtbDUudHlwZSArPSAnIHByaW50JztcbiAgICAgIGh0bWw1LnNoaXZQcmludCA9IHNoaXZQcmludDtcblxuICAgICAgLy8gc2hpdiBmb3IgcHJpbnRcbiAgICAgIHNoaXZQcmludChkb2N1bWVudCk7XG5cbiAgICAgIGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGh0bWw1O1xuICAgICAgfVxuXG4gICAgfSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGRvY3VtZW50KSk7XG4gIH1cblxuICA7XG5cblxuICAvKipcbiAgICogY29udGFpbnMgY2hlY2tzIHRvIHNlZSBpZiBhIHN0cmluZyBjb250YWlucyBhbm90aGVyIHN0cmluZ1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGNvbnRhaW5zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHdlIHdhbnQgdG8gY2hlY2sgZm9yIHN1YnN0cmluZ3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN1YnN0ciAtIFRoZSBzdWJzdHJpbmcgd2Ugd2FudCB0byBzZWFyY2ggdGhlIGZpcnN0IHN0cmluZyBmb3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zKHN0ciwgc3Vic3RyKSB7XG4gICAgcmV0dXJuICEhfignJyArIHN0cikuaW5kZXhPZihzdWJzdHIpO1xuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBjcmVhdGVFbGVtZW50IGlzIGEgY29udmVuaWVuY2Ugd3JhcHBlciBhcm91bmQgZG9jdW1lbnQuY3JlYXRlRWxlbWVudC4gU2luY2Ugd2VcbiAgICogdXNlIGNyZWF0ZUVsZW1lbnQgYWxsIG92ZXIgdGhlIHBsYWNlLCB0aGlzIGFsbG93cyBmb3IgKHNsaWdodGx5KSBzbWFsbGVyIGNvZGVcbiAgICogYXMgd2VsbCBhcyBhYnN0cmFjdGluZyBhd2F5IGlzc3VlcyB3aXRoIGNyZWF0aW5nIGVsZW1lbnRzIGluIGNvbnRleHRzIG90aGVyIHRoYW5cbiAgICogSFRNTCBkb2N1bWVudHMgKGUuZy4gU1ZHIGRvY3VtZW50cykuXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAZnVuY3Rpb24gY3JlYXRlRWxlbWVudFxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8U1ZHRWxlbWVudH0gQW4gSFRNTCBvciBTVkcgZWxlbWVudFxuICAgKi9cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KCkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgY2FzZSBpbiBJRTcsIHdoZXJlIHRoZSB0eXBlIG9mIGNyZWF0ZUVsZW1lbnQgaXMgXCJvYmplY3RcIi5cbiAgICAgIC8vIEZvciB0aGlzIHJlYXNvbiwgd2UgY2Fubm90IGNhbGwgYXBwbHkoKSBhcyBPYmplY3QgaXMgbm90IGEgRnVuY3Rpb24uXG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmd1bWVudHNbMF0pO1xuICAgIH0gZWxzZSBpZiAoaXNTVkcpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMuY2FsbChkb2N1bWVudCwgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgYXJndW1lbnRzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgb3VyIFwibW9kZXJuaXpyXCIgZWxlbWVudCB0aGF0IHdlIGRvIG1vc3QgZmVhdHVyZSB0ZXN0cyBvbi5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuXG4gIHZhciBtb2RFbGVtID0ge1xuICAgIGVsZW06IGNyZWF0ZUVsZW1lbnQoJ21vZGVybml6cicpXG4gIH07XG5cbiAgLy8gQ2xlYW4gdXAgdGhpcyBlbGVtZW50XG4gIE1vZGVybml6ci5fcS5wdXNoKGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSBtb2RFbGVtLmVsZW07XG4gIH0pO1xuXG4gIFxuXG4gIHZhciBtU3R5bGUgPSB7XG4gICAgc3R5bGU6IG1vZEVsZW0uZWxlbS5zdHlsZVxuICB9O1xuXG4gIC8vIGtpbGwgcmVmIGZvciBnYywgbXVzdCBoYXBwZW4gYmVmb3JlIG1vZC5lbGVtIGlzIHJlbW92ZWQsIHNvIHdlIHVuc2hpZnQgb24gdG9cbiAgLy8gdGhlIGZyb250IG9mIHRoZSBxdWV1ZS5cbiAgTW9kZXJuaXpyLl9xLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIG1TdHlsZS5zdHlsZTtcbiAgfSk7XG5cbiAgXG5cbiAgLyoqXG4gICAqIGdldEJvZHkgcmV0dXJucyB0aGUgYm9keSBvZiBhIGRvY3VtZW50LCBvciBhbiBlbGVtZW50IHRoYXQgY2FuIHN0YW5kIGluIGZvclxuICAgKiB0aGUgYm9keSBpZiBhIHJlYWwgYm9keSBkb2VzIG5vdCBleGlzdFxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGdldEJvZHlcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fFNWR0VsZW1lbnR9IFJldHVybnMgdGhlIHJlYWwgYm9keSBvZiBhIGRvY3VtZW50LCBvciBhblxuICAgKiBhcnRpZmljaWFsbHkgY3JlYXRlZCBlbGVtZW50IHRoYXQgc3RhbmRzIGluIGZvciB0aGUgYm9keVxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRCb2R5KCkge1xuICAgIC8vIEFmdGVyIHBhZ2UgbG9hZCBpbmplY3RpbmcgYSBmYWtlIGJvZHkgZG9lc24ndCB3b3JrIHNvIGNoZWNrIGlmIGJvZHkgZXhpc3RzXG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgaWYgKCFib2R5KSB7XG4gICAgICAvLyBDYW4ndCB1c2UgdGhlIHJlYWwgYm9keSBjcmVhdGUgYSBmYWtlIG9uZS5cbiAgICAgIGJvZHkgPSBjcmVhdGVFbGVtZW50KGlzU1ZHID8gJ3N2ZycgOiAnYm9keScpO1xuICAgICAgYm9keS5mYWtlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIDtcblxuICAvKipcbiAgICogaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMgaW5qZWN0cyBhbiBlbGVtZW50IHdpdGggc3R5bGUgZWxlbWVudCBhbmQgc29tZSBDU1MgcnVsZXNcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBpbmplY3RFbGVtZW50V2l0aFN0eWxlc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcnVsZSAtIFN0cmluZyByZXByZXNlbnRpbmcgYSBjc3MgcnVsZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIHRlc3QgdGhlIGluamVjdGVkIGVsZW1lbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtub2Rlc10gLSBBbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIGFkZGl0aW9uYWwgbm9kZXMgeW91IHdhbnQgaW5qZWN0ZWRcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3Rlc3RuYW1lc10gLSBBbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgYXJlIHVzZWQgYXMgaWRzIGZvciB0aGUgYWRkaXRpb25hbCBub2Rlc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG5cbiAgZnVuY3Rpb24gaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMocnVsZSwgY2FsbGJhY2ssIG5vZGVzLCB0ZXN0bmFtZXMpIHtcbiAgICB2YXIgbW9kID0gJ21vZGVybml6cic7XG4gICAgdmFyIHN0eWxlO1xuICAgIHZhciByZXQ7XG4gICAgdmFyIG5vZGU7XG4gICAgdmFyIGRvY092ZXJmbG93O1xuICAgIHZhciBkaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgYm9keSA9IGdldEJvZHkoKTtcblxuICAgIGlmIChwYXJzZUludChub2RlcywgMTApKSB7XG4gICAgICAvLyBJbiBvcmRlciBub3QgdG8gZ2l2ZSBmYWxzZSBwb3NpdGl2ZXMgd2UgY3JlYXRlIGEgbm9kZSBmb3IgZWFjaCB0ZXN0XG4gICAgICAvLyBUaGlzIGFsc28gYWxsb3dzIHRoZSBtZXRob2QgdG8gc2NhbGUgZm9yIHVuc3BlY2lmaWVkIHVzZXNcbiAgICAgIHdoaWxlIChub2Rlcy0tKSB7XG4gICAgICAgIG5vZGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbm9kZS5pZCA9IHRlc3RuYW1lcyA/IHRlc3RuYW1lc1tub2Rlc10gOiBtb2QgKyAobm9kZXMgKyAxKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0eWxlID0gY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICBzdHlsZS5pZCA9ICdzJyArIG1vZDtcblxuICAgIC8vIElFNiB3aWxsIGZhbHNlIHBvc2l0aXZlIG9uIHNvbWUgdGVzdHMgZHVlIHRvIHRoZSBzdHlsZSBlbGVtZW50IGluc2lkZSB0aGUgdGVzdCBkaXYgc29tZWhvdyBpbnRlcmZlcmluZyBvZmZzZXRIZWlnaHQsIHNvIGluc2VydCBpdCBpbnRvIGJvZHkgb3IgZmFrZWJvZHkuXG4gICAgLy8gT3BlcmEgd2lsbCBhY3QgYWxsIHF1aXJreSB3aGVuIGluamVjdGluZyBlbGVtZW50cyBpbiBkb2N1bWVudEVsZW1lbnQgd2hlbiBwYWdlIGlzIHNlcnZlZCBhcyB4bWwsIG5lZWRzIGZha2Vib2R5IHRvby4gIzI3MFxuICAgICghYm9keS5mYWtlID8gZGl2IDogYm9keSkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuICAgIGRpdi5pZCA9IG1vZDtcblxuICAgIGlmIChib2R5LmZha2UpIHtcbiAgICAgIC8vYXZvaWQgY3Jhc2hpbmcgSUU4LCBpZiBiYWNrZ3JvdW5kIGltYWdlIGlzIHVzZWRcbiAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgLy9TYWZhcmkgNS4xMy81LjEuNCBPU1ggc3RvcHMgbG9hZGluZyBpZiA6Oi13ZWJraXQtc2Nyb2xsYmFyIGlzIHVzZWQgYW5kIHNjcm9sbGJhcnMgYXJlIHZpc2libGVcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIGRvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgfVxuXG4gICAgcmV0ID0gY2FsbGJhY2soZGl2LCBydWxlKTtcbiAgICAvLyBJZiB0aGlzIGlzIGRvbmUgYWZ0ZXIgcGFnZSBsb2FkIHdlIGRvbid0IHdhbnQgdG8gcmVtb3ZlIHRoZSBib2R5IHNvIGNoZWNrIGlmIGJvZHkgZXhpc3RzXG4gICAgaWYgKGJvZHkuZmFrZSkge1xuICAgICAgYm9keS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJvZHkpO1xuICAgICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY092ZXJmbG93O1xuICAgICAgLy8gVHJpZ2dlciBsYXlvdXQgc28ga2luZXRpYyBzY3JvbGxpbmcgaXNuJ3QgZGlzYWJsZWQgaW4gaU9TNitcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgZG9jRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhcmV0O1xuXG4gIH1cblxuICA7XG5cbiAgLyoqXG4gICAqIGRvbVRvQ1NTIHRha2VzIGEgY2FtZWxDYXNlIHN0cmluZyBhbmQgY29udmVydHMgaXQgdG8ga2ViYWItY2FzZVxuICAgKiBlLmcuIGJveFNpemluZyAtPiBib3gtc2l6aW5nXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAZnVuY3Rpb24gZG9tVG9DU1NcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBTdHJpbmcgbmFtZSBvZiBjYW1lbENhc2UgcHJvcCB3ZSB3YW50IHRvIGNvbnZlcnRcbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGtlYmFiLWNhc2UgdmVyc2lvbiBvZiB0aGUgc3VwcGxpZWQgbmFtZVxuICAgKi9cblxuICBmdW5jdGlvbiBkb21Ub0NTUyhuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBmdW5jdGlvbihzdHIsIG0xKSB7XG4gICAgICByZXR1cm4gJy0nICsgbTEudG9Mb3dlckNhc2UoKTtcbiAgICB9KS5yZXBsYWNlKC9ebXMtLywgJy1tcy0nKTtcbiAgfVxuICA7XG5cblxuICAvKipcbiAgICogd3JhcHBlciBhcm91bmQgZ2V0Q29tcHV0ZWRTdHlsZSwgdG8gZml4IGlzc3VlcyB3aXRoIEZpcmVmb3ggcmV0dXJuaW5nIG51bGwgd2hlblxuICAgKiBjYWxsZWQgaW5zaWRlIG9mIGEgaGlkZGVuIGlmcmFtZVxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGNvbXB1dGVkU3R5bGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxTVkdFbGVtZW50fSAtIFRoZSBlbGVtZW50IHdlIHdhbnQgdG8gZmluZCB0aGUgY29tcHV0ZWQgc3R5bGVzIG9mXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IFtwc2V1ZG9TZWxlY3Rvcl0tIEFuIG9wdGlvbmFsIHBzZXVkbyBlbGVtZW50IHNlbGVjdG9yIChlLmcuIDpiZWZvcmUpLCBvZiBudWxsIGlmIG5vbmVcbiAgICogQHJldHVybnMge0NTU1N0eWxlRGVjbGFyYXRpb259XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNvbXB1dGVkU3R5bGUoZWxlbSwgcHNldWRvLCBwcm9wKSB7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIGlmICgnZ2V0Q29tcHV0ZWRTdHlsZScgaW4gd2luZG93KSB7XG4gICAgICByZXN1bHQgPSBnZXRDb21wdXRlZFN0eWxlLmNhbGwod2luZG93LCBlbGVtLCBwc2V1ZG8pO1xuICAgICAgdmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcblxuICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29uc29sZSkge1xuICAgICAgICAgIHZhciBtZXRob2QgPSBjb25zb2xlLmVycm9yID8gJ2Vycm9yJyA6ICdsb2cnO1xuICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXS5jYWxsKGNvbnNvbGUsICdnZXRDb21wdXRlZFN0eWxlIHJldHVybmluZyBudWxsLCBpdHMgcG9zc2libGUgbW9kZXJuaXpyIHRlc3QgcmVzdWx0cyBhcmUgaW5hY2N1cmF0ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9ICFwc2V1ZG8gJiYgZWxlbS5jdXJyZW50U3R5bGUgJiYgZWxlbS5jdXJyZW50U3R5bGVbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIDtcblxuICAvKipcbiAgICogbmF0aXZlVGVzdFByb3BzIGFsbG93cyBmb3IgdXMgdG8gdXNlIG5hdGl2ZSBmZWF0dXJlIGRldGVjdGlvbiBmdW5jdGlvbmFsaXR5IGlmIGF2YWlsYWJsZS5cbiAgICogc29tZSBwcmVmaXhlZCBmb3JtLCBvciBmYWxzZSwgaW4gdGhlIGNhc2Ugb2YgYW4gdW5zdXBwb3J0ZWQgcnVsZVxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIG5hdGl2ZVRlc3RQcm9wc1xuICAgKiBAcGFyYW0ge2FycmF5fSBwcm9wcyAtIEFuIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdmFsdWUgd2Ugd2FudCB0byBjaGVjayB2aWEgQHN1cHBvcnRzXG4gICAqIEByZXR1cm5zIHtib29sZWFufHVuZGVmaW5lZH0gQSBib29sZWFuIHdoZW4gQHN1cHBvcnRzIGV4aXN0cywgdW5kZWZpbmVkIG90aGVyd2lzZVxuICAgKi9cblxuICAvLyBBY2NlcHRzIGEgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgYSBzaW5nbGUgdmFsdWVcbiAgLy8gUmV0dXJucyBgdW5kZWZpbmVkYCBpZiBuYXRpdmUgZGV0ZWN0aW9uIG5vdCBhdmFpbGFibGVcbiAgZnVuY3Rpb24gbmF0aXZlVGVzdFByb3BzKHByb3BzLCB2YWx1ZSkge1xuICAgIHZhciBpID0gcHJvcHMubGVuZ3RoO1xuICAgIC8vIFN0YXJ0IHdpdGggdGhlIEpTIEFQSTogaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb25kaXRpb25hbC8jdGhlLWNzcy1pbnRlcmZhY2VcbiAgICBpZiAoJ0NTUycgaW4gd2luZG93ICYmICdzdXBwb3J0cycgaW4gd2luZG93LkNTUykge1xuICAgICAgLy8gVHJ5IGV2ZXJ5IHByZWZpeGVkIHZhcmlhbnQgb2YgdGhlIHByb3BlcnR5XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGlmICh3aW5kb3cuQ1NTLnN1cHBvcnRzKGRvbVRvQ1NTKHByb3BzW2ldKSwgdmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlIGZhbGwgYmFjayB0byBhdC1ydWxlIChmb3IgT3BlcmEgMTIueClcbiAgICBlbHNlIGlmICgnQ1NTU3VwcG9ydHNSdWxlJyBpbiB3aW5kb3cpIHtcbiAgICAgIC8vIEJ1aWxkIGEgY29uZGl0aW9uIHN0cmluZyBmb3IgZXZlcnkgcHJlZml4ZWQgdmFyaWFudFxuICAgICAgdmFyIGNvbmRpdGlvblRleHQgPSBbXTtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uZGl0aW9uVGV4dC5wdXNoKCcoJyArIGRvbVRvQ1NTKHByb3BzW2ldKSArICc6JyArIHZhbHVlICsgJyknKTtcbiAgICAgIH1cbiAgICAgIGNvbmRpdGlvblRleHQgPSBjb25kaXRpb25UZXh0LmpvaW4oJyBvciAnKTtcbiAgICAgIHJldHVybiBpbmplY3RFbGVtZW50V2l0aFN0eWxlcygnQHN1cHBvcnRzICgnICsgY29uZGl0aW9uVGV4dCArICcpIHsgI21vZGVybml6ciB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgfSB9JywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICByZXR1cm4gY29tcHV0ZWRTdHlsZShub2RlLCBudWxsLCAncG9zaXRpb24nKSA9PSAnYWJzb2x1dGUnO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgO1xuXG4gIC8qKlxuICAgKiBjc3NUb0RPTSB0YWtlcyBhIGtlYmFiLWNhc2Ugc3RyaW5nIGFuZCBjb252ZXJ0cyBpdCB0byBjYW1lbENhc2VcbiAgICogZS5nLiBib3gtc2l6aW5nIC0+IGJveFNpemluZ1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGNzc1RvRE9NXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gU3RyaW5nIG5hbWUgb2Yga2ViYWItY2FzZSBwcm9wIHdlIHdhbnQgdG8gY29udmVydFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY2FtZWxDYXNlIHZlcnNpb24gb2YgdGhlIHN1cHBsaWVkIG5hbWVcbiAgICovXG5cbiAgZnVuY3Rpb24gY3NzVG9ET00obmFtZSkge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLyhbYS16XSktKFthLXpdKS9nLCBmdW5jdGlvbihzdHIsIG0xLCBtMikge1xuICAgICAgcmV0dXJuIG0xICsgbTIudG9VcHBlckNhc2UoKTtcbiAgICB9KS5yZXBsYWNlKC9eLS8sICcnKTtcbiAgfVxuICA7XG5cbiAgLy8gdGVzdFByb3BzIGlzIGEgZ2VuZXJpYyBDU1MgLyBET00gcHJvcGVydHkgdGVzdC5cblxuICAvLyBJbiB0ZXN0aW5nIHN1cHBvcnQgZm9yIGEgZ2l2ZW4gQ1NTIHByb3BlcnR5LCBpdCdzIGxlZ2l0IHRvIHRlc3Q6XG4gIC8vICAgIGBlbGVtLnN0eWxlW3N0eWxlTmFtZV0gIT09IHVuZGVmaW5lZGBcbiAgLy8gSWYgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBpdCB3aWxsIHJldHVybiBhbiBlbXB0eSBzdHJpbmcsXG4gIC8vIGlmIHVuc3VwcG9ydGVkIGl0IHdpbGwgcmV0dXJuIHVuZGVmaW5lZC5cblxuICAvLyBXZSdsbCB0YWtlIGFkdmFudGFnZSBvZiB0aGlzIHF1aWNrIHRlc3QgYW5kIHNraXAgc2V0dGluZyBhIHN0eWxlXG4gIC8vIG9uIG91ciBtb2Rlcm5penIgZWxlbWVudCwgYnV0IGluc3RlYWQganVzdCB0ZXN0aW5nIHVuZGVmaW5lZCB2c1xuICAvLyBlbXB0eSBzdHJpbmcuXG5cbiAgLy8gUHJvcGVydHkgbmFtZXMgY2FuIGJlIHByb3ZpZGVkIGluIGVpdGhlciBjYW1lbENhc2Ugb3Iga2ViYWItY2FzZS5cblxuICBmdW5jdGlvbiB0ZXN0UHJvcHMocHJvcHMsIHByZWZpeGVkLCB2YWx1ZSwgc2tpcFZhbHVlVGVzdCkge1xuICAgIHNraXBWYWx1ZVRlc3QgPSBpcyhza2lwVmFsdWVUZXN0LCAndW5kZWZpbmVkJykgPyBmYWxzZSA6IHNraXBWYWx1ZVRlc3Q7XG5cbiAgICAvLyBUcnkgbmF0aXZlIGRldGVjdCBmaXJzdFxuICAgIGlmICghaXModmFsdWUsICd1bmRlZmluZWQnKSkge1xuICAgICAgdmFyIHJlc3VsdCA9IG5hdGl2ZVRlc3RQcm9wcyhwcm9wcywgdmFsdWUpO1xuICAgICAgaWYgKCFpcyhyZXN1bHQsICd1bmRlZmluZWQnKSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBkbyBpdCBwcm9wZXJseVxuICAgIHZhciBhZnRlckluaXQsIGksIHByb3BzTGVuZ3RoLCBwcm9wLCBiZWZvcmU7XG5cbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgc3R5bGUgZWxlbWVudCwgdGhhdCBtZWFucyB3ZSdyZSBydW5uaW5nIGFzeW5jIG9yIGFmdGVyXG4gICAgLy8gdGhlIGNvcmUgdGVzdHMsIHNvIHdlJ2xsIG5lZWQgdG8gY3JlYXRlIG91ciBvd24gZWxlbWVudHMgdG8gdXNlXG5cbiAgICAvLyBpbnNpZGUgb2YgYW4gU1ZHIGVsZW1lbnQsIGluIGNlcnRhaW4gYnJvd3NlcnMsIHRoZSBgc3R5bGVgIGVsZW1lbnQgaXMgb25seVxuICAgIC8vIGRlZmluZWQgZm9yIHZhbGlkIHRhZ3MuIFRoZXJlZm9yZSwgaWYgYG1vZGVybml6cmAgZG9lcyBub3QgaGF2ZSBvbmUsIHdlXG4gICAgLy8gZmFsbCBiYWNrIHRvIGEgbGVzcyB1c2VkIGVsZW1lbnQgYW5kIGhvcGUgZm9yIHRoZSBiZXN0LlxuICAgIC8vIGZvciBzdHJpY3QgWEhUTUwgYnJvd3NlcnMgdGhlIGhhcmRseSB1c2VkIHNhbXAgZWxlbWVudCBpcyB1c2VkXG4gICAgdmFyIGVsZW1zID0gWydtb2Rlcm5penInLCAndHNwYW4nLCAnc2FtcCddO1xuICAgIHdoaWxlICghbVN0eWxlLnN0eWxlICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgYWZ0ZXJJbml0ID0gdHJ1ZTtcbiAgICAgIG1TdHlsZS5tb2RFbGVtID0gY3JlYXRlRWxlbWVudChlbGVtcy5zaGlmdCgpKTtcbiAgICAgIG1TdHlsZS5zdHlsZSA9IG1TdHlsZS5tb2RFbGVtLnN0eWxlO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSB0aGUgb2JqZWN0cyBpZiB3ZSBjcmVhdGVkIHRoZW0uXG4gICAgZnVuY3Rpb24gY2xlYW5FbGVtcygpIHtcbiAgICAgIGlmIChhZnRlckluaXQpIHtcbiAgICAgICAgZGVsZXRlIG1TdHlsZS5zdHlsZTtcbiAgICAgICAgZGVsZXRlIG1TdHlsZS5tb2RFbGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9wc0xlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9wID0gcHJvcHNbaV07XG4gICAgICBiZWZvcmUgPSBtU3R5bGUuc3R5bGVbcHJvcF07XG5cbiAgICAgIGlmIChjb250YWlucyhwcm9wLCAnLScpKSB7XG4gICAgICAgIHByb3AgPSBjc3NUb0RPTShwcm9wKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1TdHlsZS5zdHlsZVtwcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgLy8gSWYgdmFsdWUgdG8gdGVzdCBoYXMgYmVlbiBwYXNzZWQgaW4sIGRvIGEgc2V0LWFuZC1jaGVjayB0ZXN0LlxuICAgICAgICAvLyAwIChpbnRlZ2VyKSBpcyBhIHZhbGlkIHByb3BlcnR5IHZhbHVlLCBzbyBjaGVjayB0aGF0IGB2YWx1ZWAgaXNuJ3RcbiAgICAgICAgLy8gdW5kZWZpbmVkLCByYXRoZXIgdGhhbiBqdXN0IGNoZWNraW5nIGl0J3MgdHJ1dGh5LlxuICAgICAgICBpZiAoIXNraXBWYWx1ZVRlc3QgJiYgIWlzKHZhbHVlLCAndW5kZWZpbmVkJykpIHtcblxuICAgICAgICAgIC8vIE5lZWRzIGEgdHJ5IGNhdGNoIGJsb2NrIGJlY2F1c2Ugb2Ygb2xkIElFLiBUaGlzIGlzIHNsb3csIGJ1dCB3aWxsXG4gICAgICAgICAgLy8gYmUgYXZvaWRlZCBpbiBtb3N0IGNhc2VzIGJlY2F1c2UgYHNraXBWYWx1ZVRlc3RgIHdpbGwgYmUgdXNlZC5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbVN0eWxlLnN0eWxlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgIC8vIElmIHRoZSBwcm9wZXJ0eSB2YWx1ZSBoYXMgY2hhbmdlZCwgd2UgYXNzdW1lIHRoZSB2YWx1ZSB1c2VkIGlzXG4gICAgICAgICAgLy8gc3VwcG9ydGVkLiBJZiBgdmFsdWVgIGlzIGVtcHR5IHN0cmluZywgaXQnbGwgZmFpbCBoZXJlIChiZWNhdXNlXG4gICAgICAgICAgLy8gaXQgaGFzbid0IGNoYW5nZWQpLCB3aGljaCBtYXRjaGVzIGhvdyBicm93c2VycyBoYXZlIGltcGxlbWVudGVkXG4gICAgICAgICAgLy8gQ1NTLnN1cHBvcnRzKClcbiAgICAgICAgICBpZiAobVN0eWxlLnN0eWxlW3Byb3BdICE9IGJlZm9yZSkge1xuICAgICAgICAgICAgY2xlYW5FbGVtcygpO1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeGVkID09ICdwZngnID8gcHJvcCA6IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSBqdXN0IHJldHVybiB0cnVlLCBvciB0aGUgcHJvcGVydHkgbmFtZSBpZiB0aGlzIGlzIGFcbiAgICAgICAgLy8gYHByZWZpeGVkKClgIGNhbGxcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2xlYW5FbGVtcygpO1xuICAgICAgICAgIHJldHVybiBwcmVmaXhlZCA9PSAncGZ4JyA/IHByb3AgOiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNsZWFuRWxlbXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICA7XG5cbiAgLyoqXG4gICAqIHRlc3RQcm9wKCkgaW52ZXN0aWdhdGVzIHdoZXRoZXIgYSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSBpcyByZWNvZ25pemVkXG4gICAqIFByb3BlcnR5IG5hbWVzIGNhbiBiZSBwcm92aWRlZCBpbiBlaXRoZXIgY2FtZWxDYXNlIG9yIGtlYmFiLWNhc2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBNb2Rlcm5penJcbiAgICogQG5hbWUgTW9kZXJuaXpyLnRlc3RQcm9wXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBvcHRpb25OYW1lIE1vZGVybml6ci50ZXN0UHJvcCgpXG4gICAqIEBvcHRpb25Qcm9wIHRlc3RQcm9wXG4gICAqIEBmdW5jdGlvbiB0ZXN0UHJvcFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIE5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eSB0byBjaGVja1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXSAtIE5hbWUgb2YgdGhlIENTUyB2YWx1ZSB0byBjaGVja1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1c2VWYWx1ZV0gLSBXaGV0aGVyIG9yIG5vdCB0byBjaGVjayB0aGUgdmFsdWUgaWYgQHN1cHBvcnRzIGlzbid0IHN1cHBvcnRlZFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogSnVzdCBsaWtlIFt0ZXN0QWxsUHJvcHNdKCNtb2Rlcm5penItdGVzdGFsbHByb3BzKSwgb25seSBpdCBkb2VzIG5vdCBjaGVjayBhbnkgdmVuZG9yIHByZWZpeGVkXG4gICAqIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSBwcm9wZXJ0eSBuYW1lIG11c3QgYmUgcHJvdmlkZWQgaW4gY2FtZWxDYXNlIChlLmcuIGJveFNpemluZyBub3QgYm94LXNpemluZylcbiAgICpcbiAgICogYGBganNcbiAgICogTW9kZXJuaXpyLnRlc3RQcm9wKCdwb2ludGVyRXZlbnRzJykgIC8vIHRydWVcbiAgICogYGBgXG4gICAqXG4gICAqIFlvdSBjYW4gYWxzbyBwcm92aWRlIGEgdmFsdWUgYXMgYW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGNoZWNrIGlmIGFcbiAgICogc3BlY2lmaWMgdmFsdWUgaXMgc3VwcG9ydGVkXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIE1vZGVybml6ci50ZXN0UHJvcCgncG9pbnRlckV2ZW50cycsICdub25lJykgLy8gdHJ1ZVxuICAgKiBNb2Rlcm5penIudGVzdFByb3AoJ3BvaW50ZXJFdmVudHMnLCAncGVuZ3VpbicpIC8vIGZhbHNlXG4gICAqIGBgYFxuICAgKi9cblxuICB2YXIgdGVzdFByb3AgPSBNb2Rlcm5penJQcm90by50ZXN0UHJvcCA9IGZ1bmN0aW9uKHByb3AsIHZhbHVlLCB1c2VWYWx1ZSkge1xuICAgIHJldHVybiB0ZXN0UHJvcHMoW3Byb3BdLCB1bmRlZmluZWQsIHZhbHVlLCB1c2VWYWx1ZSk7XG4gIH07XG4gIFxuXG4gIC8qKlxuICAgKiBmbkJpbmQgaXMgYSBzdXBlciBzbWFsbCBbYmluZF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRnVuY3Rpb24vYmluZCkgcG9seWZpbGwuXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAZnVuY3Rpb24gZm5CaW5kXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gYSBmdW5jdGlvbiB5b3Ugd2FudCB0byBjaGFuZ2UgYHRoaXNgIHJlZmVyZW5jZSB0b1xuICAgKiBAcGFyYW0ge29iamVjdH0gdGhhdCAtIHRoZSBgdGhpc2AgeW91IHdhbnQgdG8gY2FsbCB0aGUgZnVuY3Rpb24gd2l0aFxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259IFRoZSB3cmFwcGVkIHZlcnNpb24gb2YgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGZuQmluZChmbiwgdGhhdCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICA7XG5cbiAgLy8gUnVuIGVhY2ggdGVzdFxuICB0ZXN0UnVubmVyKCk7XG5cbiAgZGVsZXRlIE1vZGVybml6clByb3RvLmFkZFRlc3Q7XG4gIGRlbGV0ZSBNb2Rlcm5penJQcm90by5hZGRBc3luY1Rlc3Q7XG5cbiAgLy8gUnVuIHRoZSB0aGluZ3MgdGhhdCBhcmUgc3VwcG9zZWQgdG8gcnVuIGFmdGVyIHRoZSB0ZXN0c1xuICBmb3IgKHZhciBpID0gMDsgaSA8IE1vZGVybml6ci5fcS5sZW5ndGg7IGkrKykge1xuICAgIE1vZGVybml6ci5fcVtpXSgpO1xuICB9XG5cbiAgLy8gTGVhayBNb2Rlcm5penIgbmFtZXNwYWNlXG4gIHdpbmRvdy5Nb2Rlcm5penIgPSBNb2Rlcm5penI7XG5cblxuO1xuXG59KSh3aW5kb3csIGRvY3VtZW50KTtcbjsgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18odHlwZW9mIE1vZGVybml6ciAhPSBcInVuZGVmaW5lZFwiID8gTW9kZXJuaXpyIDogd2luZG93Lk1vZGVybml6cik7XG5cbn0pLmNhbGwoZ2xvYmFsLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZ1bmN0aW9uIGRlZmluZUV4cG9ydChleCkgeyBtb2R1bGUuZXhwb3J0cyA9IGV4OyB9KTtcbiJdfQ==
