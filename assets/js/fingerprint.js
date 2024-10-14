const C=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function D(f){return typeof f=="string"&&C.test(f)}function R(f){if(!D(f))throw TypeError("Invalid UUID");var n,r=new Uint8Array(16);return r[0]=(n=parseInt(f.slice(0,8),16))>>>24,r[1]=n>>>16&255,r[2]=n>>>8&255,r[3]=n&255,r[4]=(n=parseInt(f.slice(9,13),16))>>>8,r[5]=n&255,r[6]=(n=parseInt(f.slice(14,18),16))>>>8,r[7]=n&255,r[8]=(n=parseInt(f.slice(19,23),16))>>>8,r[9]=n&255,r[10]=(n=parseInt(f.slice(24,36),16))/1099511627776&255,r[11]=n/4294967296&255,r[12]=n>>>24&255,r[13]=n>>>16&255,r[14]=n>>>8&255,r[15]=n&255,r}var e=[];for(var I=0;I<256;++I)e.push((I+256).toString(16).slice(1));function M(f,n=0){return(e[f[n+0]]+e[f[n+1]]+e[f[n+2]]+e[f[n+3]]+"-"+e[f[n+4]]+e[f[n+5]]+"-"+e[f[n+6]]+e[f[n+7]]+"-"+e[f[n+8]]+e[f[n+9]]+"-"+e[f[n+10]]+e[f[n+11]]+e[f[n+12]]+e[f[n+13]]+e[f[n+14]]+e[f[n+15]]).toLowerCase()}function N(f){f=unescape(encodeURIComponent(f));for(var n=[],r=0;r<f.length;++r)n.push(f.charCodeAt(r));return n}var E="6ba7b810-9dad-11d1-80b4-00c04fd430c8",L="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function O(f,n,r){function t(g,p,o,x){var c;if(typeof g=="string"&&(g=N(g)),typeof p=="string"&&(p=R(p)),((c=p)===null||c===void 0?void 0:c.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+g.length);if(a.set(p),a.set(g,p.length),a=r(a),a[6]=a[6]&15|n,a[8]=a[8]&63|128,o){x=x||0;for(var i=0;i<16;++i)o[x+i]=a[i];return o}return M(a)}try{t.name=f}catch{}return t.DNS=E,t.URL=L,t}function k(f,n,r,t){switch(f){case 0:return n&r^~n&t;case 1:return n^r^t;case 2:return n&r^n&t^r&t;case 3:return n^r^t}}function y(f,n){return f<<n|f>>>32-n}function H(f){var n=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof f=="string"){var t=unescape(encodeURIComponent(f));f=[];for(var g=0;g<t.length;++g)f.push(t.charCodeAt(g))}else Array.isArray(f)||(f=Array.prototype.slice.call(f));f.push(128);for(var p=f.length/4+2,o=Math.ceil(p/16),x=new Array(o),c=0;c<o;++c){for(var a=new Uint32Array(16),i=0;i<16;++i)a[i]=f[c*64+i*4]<<24|f[c*64+i*4+1]<<16|f[c*64+i*4+2]<<8|f[c*64+i*4+3];x[c]=a}x[o-1][14]=(f.length-1)*8/Math.pow(2,32),x[o-1][14]=Math.floor(x[o-1][14]),x[o-1][15]=(f.length-1)*8&4294967295;for(var U=0;U<o;++U){for(var v=new Uint32Array(80),h=0;h<16;++h)v[h]=x[U][h];for(var l=16;l<80;++l)v[l]=y(v[l-3]^v[l-8]^v[l-14]^v[l-16],1);for(var s=r[0],d=r[1],u=r[2],w=r[3],A=r[4],T=0;T<80;++T){var S=Math.floor(T/20),F=y(s,5)+k(S,d,u,w)+A+n[S]+v[T]>>>0;A=w,w=u,u=y(d,30)>>>0,d=s,s=F}r[0]=r[0]+s>>>0,r[1]=r[1]+d>>>0,r[2]=r[2]+u>>>0,r[3]=r[3]+w>>>0,r[4]=r[4]+A>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,r[0]&255,r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,r[1]&255,r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,r[2]&255,r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,r[3]&255,r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,r[4]&255]}var m=O("v5",80,H);class P{constructor(){this.fingerprint=this.getFingerprint(),this.storeFingerprint()}getFingerprint(){const n=window.navigator;let r="";return r+=n.userAgent.replace(/\D+/g,""),r+=n.language||"",r+=n.platform||"",r+=n.hardwareConcurrency||"",r+=n.deviceMemory||"",r+=n.maxTouchPoints||"",r+=n.doNotTrack||"",r+=n.mimeTypes.length,r+=n.plugins.length,r+=new Date().getTimezoneOffset(),r+=screen.colorDepth||"",m(r,m.URL)}storeFingerprint(){localStorage.setItem("fingerprint",this.fingerprint),console.log("Fingerprint stored:",this.fingerprint),this.sendFingerprintToServer(this.fingerprint)}sendFingerprintToServer(n){fetch(`${current_domain}/fingerprint`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:n})}).then(r=>r.json()).then(r=>console.log("Success:",r)).catch(r=>console.error("Error:",r))}}export{P as F};