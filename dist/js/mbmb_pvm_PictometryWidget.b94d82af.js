(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mbmb_pvm_PictometryWidget"],{8314:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:this.pictContainerClass,attrs:{id:"pict-container"}},[!1===this.isMobileOrTablet?o("div",{attrs:{id:"in-pict-div"},on:{click:this.popoutClicked}},[o("font-awesome-icon",{staticClass:"popout-icon",attrs:{icon:"external-link-alt"}})],1):t._e(),o("iframe",{ref:"pictometryIpa",attrs:{id:"pictometry-ipa",src:"#"}}),o("div",[t._t("default")],2)])},n=[],r=o("768b"),a=o("c6f6"),c=o.n(a),s=o("f2b7"),p=o.n(s),l={name:"PictometryWidget",props:["apiKey","secretKey"],created:function(){this.$IFRAME_ID="pictometry-ipa"},mounted:function(){var t="https://pol.pictometry.com/ipa/v1/embed/host.php?apikey="+this.apiKey,e=this;c.a.getScript(t,e.init)},computed:{isMobileOrTablet:function(){return this.$store.state.isMobileOrTablet},cyclomediaActive:function(){return this.$store.state.cyclomedia.active},pictContainerClass:function(){return this.cyclomediaActive?"medium-8 large-8 columns mb-panel":"medium-24 large-24 columns mb-panel"},mapCenter:function(){return this.$store.state.pictometry.map.center},mapZoom:function(){return this.$store.state.pictometry.map.zoom}},watch:{mapCenter:function(t){var e=Object(r["a"])(t,2),o=e[0],i=e[1],n=this.mapZoom;this.$ipa&&this.$ipa.setLocation({x:o,y:i,zoom:n})},mapZoom:function(t){this.$ipa&&this.$ipa.setLocation({y:this.mapCenter.lat,x:this.mapCenter.lng,zoom:t})},cyclomediaActive:function(t){t?this.$ipa.showDashboard({zoom:!1,imageFilter:!1,layers:!1,nextPrevious:!1,tools:!1,annotations:!1,rotation:!1,clearMeasurements:!1,exportPdf:!1,dualPane:!1,imageDate:!1,panTool:!1,exportImage:!1,areaTool:!1,distanceTool:!1,heightTool:!1,locationTool:!1,elevationTool:!1,bearingTool:!1,slopeTool:!1,xyzTool:!1,identifyPoint:!1,identifyBox:!1}):this.$ipa.showDashboard({zoom:!0,imageFilter:!0,layers:!0,nextPrevious:!0,tools:!0,annotations:!0,rotation:!0,clearMeasurements:!0,exportPdf:!0,dualPane:!0,imageDate:!0,panTool:!0,exportImage:!0,areaTool:!0,distanceTool:!0,heightTool:!0,locationTool:!0,elevationTool:!0,bearingTool:!0,slopeTool:!0,xyzTool:!0,identifyPoint:!0,identifyBox:!0})}},methods:{popoutClicked:function(){var t=this.$store.state.map.map,e=t.getCenter();window.open("//pictometry.phila.gov/?"+e.lat+"&"+e.lng,"_blank"),this.$store.commit("setPictometryActive",!1)},init:function(){var t=new Date,e=Math.floor(t.getTime()/1e3),o="https://pol.pictometry.com/ipa/v1/load.php?apikey="+this.apiKey+"&ts="+e,i=p()(o,this.secretKey),n=this.$IFRAME_ID,r=o+"&ds="+i+"&app_id="+n,a=this.$refs.pictometryIpa;a.setAttribute("src",r);var c=this.$ipa=new PictometryHost(n,"https://pol.pictometry.com/ipa/v1/load.php");this.$store.commit("setPictometryIpa",c),c.ready=this.ipaReady},ipaReady:function(){this.$ipa.setLocation({y:this.mapCenter.lat,x:this.mapCenter.lng,zoom:this.mapZoom});var t=this;this.$ipa.addListener("onendzoom",function(e){t.$store.commit("setPictometryZoom",e.level)})}}},u=l,m=(o("b6fb"),o("2877")),h=Object(m["a"])(u,i,n,!1,null,"378f7280",null);e["default"]=h.exports},b6fb:function(t,e,o){"use strict";var i=o("d7e8"),n=o.n(i);n.a},d7e8:function(t,e,o){},f2b7:function(t,e,o){var i;(function(n){"use strict";function r(t,e){var o=(65535&t)+(65535&e),i=(t>>16)+(e>>16)+(o>>16);return i<<16|65535&o}function a(t,e){return t<<e|t>>>32-e}function c(t,e,o,i,n,c){return r(a(r(r(e,t),r(i,c)),n),o)}function s(t,e,o,i,n,r,a){return c(e&o|~e&i,t,e,n,r,a)}function p(t,e,o,i,n,r,a){return c(e&i|o&~i,t,e,n,r,a)}function l(t,e,o,i,n,r,a){return c(e^o^i,t,e,n,r,a)}function u(t,e,o,i,n,r,a){return c(o^(e|~i),t,e,n,r,a)}function m(t,e){var o,i,n,a,c;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var m=1732584193,h=-271733879,f=-1732584194,d=271733878;for(o=0;o<t.length;o+=16)i=m,n=h,a=f,c=d,m=s(m,h,f,d,t[o],7,-680876936),d=s(d,m,h,f,t[o+1],12,-389564586),f=s(f,d,m,h,t[o+2],17,606105819),h=s(h,f,d,m,t[o+3],22,-1044525330),m=s(m,h,f,d,t[o+4],7,-176418897),d=s(d,m,h,f,t[o+5],12,1200080426),f=s(f,d,m,h,t[o+6],17,-1473231341),h=s(h,f,d,m,t[o+7],22,-45705983),m=s(m,h,f,d,t[o+8],7,1770035416),d=s(d,m,h,f,t[o+9],12,-1958414417),f=s(f,d,m,h,t[o+10],17,-42063),h=s(h,f,d,m,t[o+11],22,-1990404162),m=s(m,h,f,d,t[o+12],7,1804603682),d=s(d,m,h,f,t[o+13],12,-40341101),f=s(f,d,m,h,t[o+14],17,-1502002290),h=s(h,f,d,m,t[o+15],22,1236535329),m=p(m,h,f,d,t[o+1],5,-165796510),d=p(d,m,h,f,t[o+6],9,-1069501632),f=p(f,d,m,h,t[o+11],14,643717713),h=p(h,f,d,m,t[o],20,-373897302),m=p(m,h,f,d,t[o+5],5,-701558691),d=p(d,m,h,f,t[o+10],9,38016083),f=p(f,d,m,h,t[o+15],14,-660478335),h=p(h,f,d,m,t[o+4],20,-405537848),m=p(m,h,f,d,t[o+9],5,568446438),d=p(d,m,h,f,t[o+14],9,-1019803690),f=p(f,d,m,h,t[o+3],14,-187363961),h=p(h,f,d,m,t[o+8],20,1163531501),m=p(m,h,f,d,t[o+13],5,-1444681467),d=p(d,m,h,f,t[o+2],9,-51403784),f=p(f,d,m,h,t[o+7],14,1735328473),h=p(h,f,d,m,t[o+12],20,-1926607734),m=l(m,h,f,d,t[o+5],4,-378558),d=l(d,m,h,f,t[o+8],11,-2022574463),f=l(f,d,m,h,t[o+11],16,1839030562),h=l(h,f,d,m,t[o+14],23,-35309556),m=l(m,h,f,d,t[o+1],4,-1530992060),d=l(d,m,h,f,t[o+4],11,1272893353),f=l(f,d,m,h,t[o+7],16,-155497632),h=l(h,f,d,m,t[o+10],23,-1094730640),m=l(m,h,f,d,t[o+13],4,681279174),d=l(d,m,h,f,t[o],11,-358537222),f=l(f,d,m,h,t[o+3],16,-722521979),h=l(h,f,d,m,t[o+6],23,76029189),m=l(m,h,f,d,t[o+9],4,-640364487),d=l(d,m,h,f,t[o+12],11,-421815835),f=l(f,d,m,h,t[o+15],16,530742520),h=l(h,f,d,m,t[o+2],23,-995338651),m=u(m,h,f,d,t[o],6,-198630844),d=u(d,m,h,f,t[o+7],10,1126891415),f=u(f,d,m,h,t[o+14],15,-1416354905),h=u(h,f,d,m,t[o+5],21,-57434055),m=u(m,h,f,d,t[o+12],6,1700485571),d=u(d,m,h,f,t[o+3],10,-1894986606),f=u(f,d,m,h,t[o+10],15,-1051523),h=u(h,f,d,m,t[o+1],21,-2054922799),m=u(m,h,f,d,t[o+8],6,1873313359),d=u(d,m,h,f,t[o+15],10,-30611744),f=u(f,d,m,h,t[o+6],15,-1560198380),h=u(h,f,d,m,t[o+13],21,1309151649),m=u(m,h,f,d,t[o+4],6,-145523070),d=u(d,m,h,f,t[o+11],10,-1120210379),f=u(f,d,m,h,t[o+2],15,718787259),h=u(h,f,d,m,t[o+9],21,-343485551),m=r(m,i),h=r(h,n),f=r(f,a),d=r(d,c);return[m,h,f,d]}function h(t){var e,o="",i=32*t.length;for(e=0;e<i;e+=8)o+=String.fromCharCode(t[e>>5]>>>e%32&255);return o}function f(t){var e,o=[];for(o[(t.length>>2)-1]=void 0,e=0;e<o.length;e+=1)o[e]=0;var i=8*t.length;for(e=0;e<i;e+=8)o[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return o}function d(t){return h(m(f(t),8*t.length))}function y(t,e){var o,i,n=f(t),r=[],a=[];for(r[15]=a[15]=void 0,n.length>16&&(n=m(n,8*t.length)),o=0;o<16;o+=1)r[o]=909522486^n[o],a[o]=1549556828^n[o];return i=m(r.concat(f(e)),512+8*e.length),h(m(a.concat(i),640))}function v(t){var e,o,i="0123456789abcdef",n="";for(o=0;o<t.length;o+=1)e=t.charCodeAt(o),n+=i.charAt(e>>>4&15)+i.charAt(15&e);return n}function g(t){return unescape(encodeURIComponent(t))}function b(t){return d(g(t))}function T(t){return v(b(t))}function $(t,e){return y(g(t),g(e))}function C(t,e){return v($(t,e))}function x(t,e,o){return e?o?$(e,t):C(e,t):o?b(t):T(t)}i=function(){return x}.call(e,o,e,t),void 0===i||(t.exports=i)})()}}]);
//# sourceMappingURL=mbmb_pvm_PictometryWidget.b94d82af.js.map