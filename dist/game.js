function lp({boxes:i,colliders:e,bounds:t,groundAt:n}){let r=i.filter(u=>u.h>3&&u.w>=1&&u.d>=1),s=i.filter(u=>u.h>3&&u.w>=.18&&u.d>=.18&&u.h-u.bottom>.12),o=(u,h,d,f=0)=>Math.abs(h-u.x)<u.w/2+f&&Math.abs(d-u.z)<u.d/2+f;function a(u,h,d=1/0){let f=n(u,h);for(let p of r)p.h<=d+.001&&o(p,u,h)&&(f=Math.max(f,p.h));return f}let l=[...e,...s];function c(u,h,d,f=.32,p=null){if(u<t.minX+f||u>t.maxX-f||h<t.minZ+f||h>t.maxZ-f)return!1;for(let x of l){if(x.h<=d+.24||(x.bottom||0)>=d+1.8)continue;let m=Math.max(Math.abs(u-x.x)-x.w/2,0),g=Math.max(Math.abs(h-x.z)-x.d/2,0);if(m*m+g*g<f*f){if(p){let S=Math.max(Math.abs(p.x-x.x)-x.w/2,0),_=Math.max(Math.abs(p.z-x.z)-x.d/2,0);if(m*m+g*g>S*S+_*_+1e-8)continue}return!1}}return!0}return{supportAt:a,canWalk:c,obstacles:s,tops:r}}function pl(i,e,t,n){let r=n(i.x,i.z,i.y+.22);if(i.y<=r+.025)return i.y=r,{velocity:0,landed:!0,floor:r};let s=Math.min(35,t+18*e);return i.y=Math.max(r,i.y-s*e),{velocity:i.y===r?0:s,landed:i.y===r,floor:r}}var Kp=0,jh=1,Jp=2;var Zh=1,fc=2,wi=3,li=0,Jt=1,rt=2,pi=0,kr=1,ts=2,Kh=3,Jh=4,Qp=5,vr=100,$p=101,em=102,tm=103,nm=104,im=200,rm=201,sm=202,om=203,Wl=204,Xl=205,am=206,lm=207,cm=208,um=209,hm=210,dm=211,fm=212,pm=213,mm=214,pc=0,mc=1,gc=2,Gr=3,xc=4,vc=5,_c=6,yc=7,Qh=0,gm=1,xm=2,or=0,Mc=1,Sc=2,Tc=3,ro=4,bc=5,Ec=6,wc=7,Fh="attached",vm="detached",$h=300,ns=301,is=302,so=303,Ac=304,Oa=306,Ft=1e3,Yn=1001,Vs=1002,qt=1003,Rc=1004;var rs=1005;var It=1006,oo=1007;var Kn=1008;var mi=1009,ed=1010,td=1011,ao=1012,Cc=1013,Tr=1014,fn=1015,Dt=1016,Pc=1017,Ic=1018,lo=1020,nd=35902,id=35899,rd=1021,sd=1022,Bn=1023,ks=1026,co=1027,Lc=1028,Dc=1029,od=1030,Uc=1031;var Nc=1033,Fa=33776,Ba=33777,za=33778,Ha=33779,Oc=35840,Fc=35841,Bc=35842,zc=35843,Hc=36196,Vc=37492,kc=37496,Gc=37808,Wc=37809,Xc=37810,qc=37811,Yc=37812,jc=37813,Zc=37814,Kc=37815,Jc=37816,Qc=37817,$c=37818,eu=37819,tu=37820,nu=37821,iu=36492,ru=36494,su=36495,ou=36283,au=36284,lu=36285,cu=36286,uu=2200,_m=2201,hu=2202,Wr=2300,Xr=2301,Gl=2302,Hr=2400,Vr=2401,$o=2402,du=2500,ym=2501,fu=0,uo=1,ss=2,Mm=3200,Sm=3201;var Va=0,Tm=1,ar="",yt="srgb",Zt="srgb-linear",ea="linear",_t="srgb";var zr=7680;var Bh=519,bm=512,Em=513,wm=514,ad=515,Am=516,Rm=517,Cm=518,Pm=519,ql=35044,ld=35048;var cd="300 es",ai=2e3,ta=2001;var Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cp=1234567,Zo=Math.PI/180,qr=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function ud(i,e){return(i%e+e)%e}function wx(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ax(i,e,t){return i!==e?(t-i)/(e-i):0}function Ko(i,e,t){return(1-t)*i+t*e}function Rx(i,e,t,n){return Ko(i,e,1-Math.exp(-t*n))}function Cx(i,e=1){return e-Math.abs(ud(i,e*2)-e)}function Px(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ix(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dx(i,e){return i+Math.random()*(e-i)}function Ux(i){return i*(.5-Math.random())}function Nx(i){i!==void 0&&(cp=i);let e=cp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ox(i){return i*Zo}function Fx(i){return i*qr}function Bx(i){return(i&i-1)===0&&i!==0}function zx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vx(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var We={DEG2RAD:Zo,RAD2DEG:qr,generateUUID:jn,clamp:st,euclideanModulo:ud,mapLinear:wx,inverseLerp:Ax,lerp:Ko,damp:Rx,pingpong:Cx,smoothstep:Px,smootherstep:Ix,randInt:Lx,randFloat:Dx,randFloatSpread:Ux,seededRandom:Nx,degToRad:Ox,radToDeg:Fx,isPowerOfTwo:Bx,ceilPowerOfTwo:zx,floorPowerOfTwo:Hx,setQuaternionFromProperEuler:Vx,normalize:Tt,denormalize:oi},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],f=s[o+1],p=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==p){let m=1-a,g=l*d+c*f+u*p+h*x,S=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let T=Math.sqrt(_),b=Math.atan2(T,g*S);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}let v=a*S;if(l=l*m+d*v,c=c*m+f*v,u=u*m+p*v,h=h*m+x*v,m===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),f=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(up.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(up.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ah=new R,up=new Ue,qe=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=r[0],m=r[3],g=r[6],S=r[1],_=r[4],v=r[7],T=r[2],b=r[5],w=r[8];return s[0]=o*x+a*S+l*T,s[3]=o*m+a*_+l*b,s[6]=o*g+a*v+l*w,s[1]=c*x+u*S+h*T,s[4]=c*m+u*_+h*b,s[7]=c*g+u*v+h*w,s[2]=d*x+f*S+p*T,s[5]=d*m+f*_+p*b,s[8]=d*g+f*v+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,p=t*h+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lh.makeScale(e,t)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,t){return this.premultiply(lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lh=new qe;function hd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Im(){let i=Gs("canvas");return i.style.display="block",i}var hp={};function Ws(i){i in hp||(hp[i]=!0,console.warn(i))}function Lm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var dp=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fp=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kx(){let i={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=Hs(r.r),r.g=Hs(r.g),r.b=Hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?ea:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zt]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:dp,fromXYZ:fp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:dp,fromXYZ:fp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),i}var lt=kx();function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ws,Yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Gs("canvas")),ws.width=e.width,ws.height=e.height;let r=ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ji(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gx=0,Xs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ch(r[o].image)):s.push(ch(r[o]))}else s=ch(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function ch(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wx=0,uh=new R,zt=class i extends Si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,r=Yn,s=It,o=Kn,a=Bn,l=mi,c=i.DEFAULT_ANISOTROPY,u=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=jn(),this.name="",this.source=new Xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ft:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ft:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=$h;zt.DEFAULT_ANISOTROPY=1;var xt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,v=(f+1)/2,T=(g+1)/2,b=(u+d)/4,w=(h+x)/4,A=(p+m)/4;return _>v&&_>T?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=b/n,s=w/n):v>T?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=b/r,s=A/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=w/s,r=A/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(h-x)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jl=class extends Si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new zt(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends jl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},na=class extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ml.copy(n.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),gl.subVectors(this.max,Ho),As.subVectors(e.a,Ho),Rs.subVectors(e.b,Ho),Cs.subVectors(e.c,Ho),hr.subVectors(Rs,As),dr.subVectors(Cs,Rs),Nr.subVectors(As,Cs);let t=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-Nr.z,Nr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,Nr.z,0,-Nr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-Nr.y,Nr.x,0];return!hh(t,As,Rs,Cs,gl)||(t=[1,0,0,0,1,0,0,0,1],!hh(t,As,Rs,Cs,gl))?!1:(xl.crossVectors(hr,dr),t=[xl.x,xl.y,xl.z],hh(t,As,Rs,Cs,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vi=[new R,new R,new R,new R,new R,new R,new R,new R],ii=new R,ml=new Kt,As=new R,Rs=new R,Cs=new R,hr=new R,dr=new R,Nr=new R,Ho=new R,gl=new R,xl=new R,Or=new R;function hh(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Or.fromArray(i,s);let a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=t.dot(Or),u=n.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Xx=new Kt,Vo=new R,dh=new R,Tn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);let t=Vo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(dh)),this.expandByPoint(Vo.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ki=new R,fh=new R,vl=new R,fr=new R,ph=new R,_l=new R,mh=new R,Zi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fh.copy(e).add(t).multiplyScalar(.5),vl.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(fh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(vl),a=fr.dot(this.direction),l=-fr.dot(vl),c=fr.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=s*u,h>=0)if(d>=-p)if(d<=p){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fh).addScaledVector(vl,d),f}intersectSphere(e,t){ki.subVectors(e.center,this.origin);let n=ki.dot(this.direction),r=ki.dot(ki)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,r,s){ph.subVectors(t,e),_l.subVectors(n,e),mh.crossVectors(ph,_l);let o=this.direction.dot(mh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);let l=a*this.direction.dot(_l.crossVectors(fr,_l));if(l<0)return null;let c=a*this.direction.dot(ph.cross(fr));if(c<0||l+c>o)return null;let u=-a*fr.dot(mh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class i{constructor(e,t,n,r,s,o,a,l,c,u,h,d,f,p,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,f,p,x,m)}set(e,t,n,r,s,o,a,l,c,u,h,d,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Ps.setFromMatrixColumn(e,0).length(),s=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,x=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qx,e,Yx)}lookAt(e,t,n){let r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),pr.crossVectors(n,Un),pr.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),pr.crossVectors(n,Un)),pr.normalize(),yl.crossVectors(Un,pr),r[0]=pr.x,r[4]=yl.x,r[8]=Un.x,r[1]=pr.y,r[5]=yl.y,r[9]=Un.y,r[2]=pr.z,r[6]=yl.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],S=n[3],_=n[7],v=n[11],T=n[15],b=r[0],w=r[4],A=r[8],y=r[12],M=r[1],E=r[5],C=r[9],I=r[13],U=r[2],L=r[6],O=r[10],k=r[14],V=r[3],z=r[7],W=r[11],Z=r[15];return s[0]=o*b+a*M+l*U+c*V,s[4]=o*w+a*E+l*L+c*z,s[8]=o*A+a*C+l*O+c*W,s[12]=o*y+a*I+l*k+c*Z,s[1]=u*b+h*M+d*U+f*V,s[5]=u*w+h*E+d*L+f*z,s[9]=u*A+h*C+d*O+f*W,s[13]=u*y+h*I+d*k+f*Z,s[2]=p*b+x*M+m*U+g*V,s[6]=p*w+x*E+m*L+g*z,s[10]=p*A+x*C+m*O+g*W,s[14]=p*y+x*I+m*k+g*Z,s[3]=S*b+_*M+v*U+T*V,s[7]=S*w+_*E+v*L+T*z,s[11]=S*A+_*C+v*O+T*W,s[15]=S*y+_*I+v*k+T*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15];return p*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+g*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],S=h*m*c-x*d*c+x*l*f-a*m*f-h*l*g+a*d*g,_=p*d*c-u*m*c-p*l*f+o*m*f+u*l*g-o*d*g,v=u*x*c-p*h*c+p*a*f-o*x*f-u*a*g+o*h*g,T=p*h*l-u*x*l-p*a*d+o*x*d+u*a*m-o*h*m,b=t*S+n*_+r*v+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=S*w,e[1]=(x*d*s-h*m*s-x*r*f+n*m*f+h*r*g-n*d*g)*w,e[2]=(a*m*s-x*l*s+x*r*c-n*m*c-a*r*g+n*l*g)*w,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*f-n*l*f)*w,e[4]=_*w,e[5]=(u*m*s-p*d*s+p*r*f-t*m*f-u*r*g+t*d*g)*w,e[6]=(p*l*s-o*m*s-p*r*c+t*m*c+o*r*g-t*l*g)*w,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*w,e[8]=v*w,e[9]=(p*h*s-u*x*s-p*n*f+t*x*f+u*n*g-t*h*g)*w,e[10]=(o*x*s-p*a*s+p*n*c-t*x*c-o*n*g+t*a*g)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*w,e[12]=T*w,e[13]=(u*x*r-p*h*r+p*n*d-t*x*d-u*n*m+t*h*m)*w,e[14]=(p*a*r-o*x*r-p*n*l+t*x*l+o*n*m-t*a*m)*w,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,p=s*h,x=o*u,m=o*h,g=a*h,S=l*c,_=l*u,v=l*h,T=n.x,b=n.y,w=n.z;return r[0]=(1-(x+g))*T,r[1]=(f+v)*T,r[2]=(p-_)*T,r[3]=0,r[4]=(f-v)*b,r[5]=(1-(d+g))*b,r[6]=(m+S)*b,r[7]=0,r[8]=(p+_)*w,r[9]=(m-S)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Ps.set(r[0],r[1],r[2]).length(),o=Ps.set(r[4],r[5],r[6]).length(),a=Ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);let c=1/s,u=1/o,h=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,t.setFromRotationMatrix(ri),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ai,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===ai)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ta)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ai,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===ai)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===ta)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ps=new R,ri=new ke,qx=new R(0,0,0),Yx=new R(1,1,1),pr=new R,yl=new R,Un=new R,pp=new ke,mp=new Ue,nn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mp.setFromEuler(this),this.setFromQuaternion(mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jx=0,gp=new R,Is=new Ue,Gi=new ke,Ml=new R,ko=new R,Zx=new R,Kx=new Ue,xp=new R(1,0,0),vp=new R(0,1,0),_p=new R(0,0,1),yp={type:"added"},Jx={type:"removed"},Ls={type:"childadded",child:null},gh={type:"childremoved",child:null},it=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new nn,n=new Ue,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new qe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(vp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,t){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(vp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ml.copy(e):Ml.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(ko,Ml,this.up):Gi.lookAt(Ml,ko,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(Gi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yp),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jx),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yp),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,Zx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Kx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};it.DEFAULT_UP=new R(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new R,Wi=new R,xh=new R,Xi=new R,Ds=new R,Us=new R,Mp=new R,vh=new R,_h=new R,yh=new R,Mh=new xt,Sh=new xt,Th=new xt,xr=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),si.subVectors(e,t),r.cross(si);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){si.subVectors(r,t),Wi.subVectors(n,t),xh.subVectors(e,t);let o=si.dot(si),a=si.dot(Wi),l=si.dot(xh),c=Wi.dot(Wi),u=Wi.dot(xh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Mh.setScalar(0),Sh.setScalar(0),Th.setScalar(0),Mh.fromBufferAttribute(e,t),Sh.fromBufferAttribute(e,n),Th.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Mh,s.x),o.addScaledVector(Sh,s.y),o.addScaledVector(Th,s.z),o}static isFrontFacing(e,t,n,r){return si.subVectors(n,t),Wi.subVectors(e,t),si.cross(Wi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),si.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Ds.subVectors(r,n),Us.subVectors(s,n),vh.subVectors(e,n);let l=Ds.dot(vh),c=Us.dot(vh);if(l<=0&&c<=0)return t.copy(n);_h.subVectors(e,r);let u=Ds.dot(_h),h=Us.dot(_h);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ds,o);yh.subVectors(e,s);let f=Ds.dot(yh),p=Us.dot(yh);if(p>=0&&f<=p)return t.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Us,a);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return Mp.subVectors(s,r),a=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(Mp,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(Ds,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function bh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=ud(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=bh(o,s,e+1/3),this.g=bh(o,s,e),this.b=bh(o,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return lt.workingToColorSpace(un.copy(this),e),Math.round(st(un.r*255,0,255))*65536+Math.round(st(un.g*255,0,255))*256+Math.round(st(un.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(un.copy(this),t);let n=un.r,r=un.g,s=un.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=yt){lt.workingToColorSpace(un.copy(this),e);let t=un.r,n=un.g,r=un.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(Sl);let n=Ko(mr.h,Sl.h,t),r=Ko(mr.s,Sl.s,t),s=Ko(mr.l,Sl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new Me;Me.NAMES=Dm;var Qx=0,hn=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=kr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Xl&&(n.blendDst=this.blendDst),this.blendEquation!==vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ht=class extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yi=$x();function $x(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function ev(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=st(i,-65504,65504),Yi.floatView[0]=i;let e=Yi.uint32View[0],t=e>>23&511;return Yi.baseTable[t]+((e&8388607)>>Yi.shiftTable[t])}function tv(i){let e=i>>10;return Yi.uint32View[0]=Yi.mantissaTable[Yi.offsetTable[e]+(i&1023)]+Yi.exponentTable[e],Yi.floatView[0]}var _r=class{static toHalfFloat(e){return ev(e)}static fromHalfFloat(e){return tv(e)}},Wt=new R,Tl=new ce,nv=0,je=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),e}};var ra=class extends je{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sa=class extends je{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ie=class extends je{constructor(e,t,n){super(new Float32Array(e),t,n)}},iv=0,qn=new ke,Eh=new it,Ns=new R,Nn=new Kt,Go=new Kt,tn=new R,Oe=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hd(e)?sa:ra)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Nn.min,Go.min),Nn.expandByPoint(tn),tn.addVectors(Nn.max,Go.max),Nn.expandByPoint(tn)):(Nn.expandByPoint(Go.min),Nn.expandByPoint(Go.max))}Nn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(e,c),tn.add(Ns)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new R,l[A]=new R;let c=new R,u=new R,h=new R,d=new ce,f=new ce,p=new ce,x=new R,m=new R;function g(A,y,M){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,M),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let E=1/(f.x*p.y-p.x*f.y);isFinite(E)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(E),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(E),a[A].add(x),a[y].add(x),a[M].add(x),l[A].add(m),l[y].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let A=0,y=S.length;A<y;++A){let M=S[A],E=M.start,C=M.count;for(let I=E,U=E+C;I<U;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let _=new R,v=new R,T=new R,b=new R;function w(A){T.fromBufferAttribute(r,A),b.copy(T);let y=a[A];_.copy(y),_.sub(T.multiplyScalar(T.dot(y))).normalize(),v.crossVectors(b,y);let E=v.dot(l[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,E)}for(let A=0,y=S.length;A<y;++A){let M=S[A],E=M.start,C=M.count;for(let I=E,U=E+C;I<U;I+=3)w(e.getX(I+0)),w(e.getX(I+1)),w(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new je(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sp=new ke,Fr=new Zi,bl=new Tn,Tp=new R,El=new R,wl=new R,Al=new R,wh=new R,Rl=new R,bp=new R,Cl=new R,dt=class extends it{constructor(e=new Oe,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(wh.fromBufferAttribute(h,e),o?Rl.addScaledVector(wh,u):Rl.addScaledVector(wh.sub(t),u))}t.add(Rl)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(bl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(bl,Tp)===null||Fr.origin.distanceToSquared(Tp)>(e.far-e.near)**2))&&(Sp.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Sp),!(n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,T=_;v<T;v+=3){let b=a.getX(v),w=a.getX(v+1),A=a.getX(v+2);r=Pl(this,g,e,n,c,u,h,b,w,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let S=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);r=Pl(this,o,e,n,c,u,h,S,_,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,T=_;v<T;v+=3){let b=v,w=v+1,A=v+2;r=Pl(this,g,e,n,c,u,h,b,w,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let S=m,_=m+1,v=m+2;r=Pl(this,o,e,n,c,u,h,S,_,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function rv(i,e,t,n,r,s,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===li,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Cl);return c<t.near||c>t.far?null:{distance:c,point:Cl.clone(),object:i}}function Pl(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,El),i.getVertexPosition(l,wl),i.getVertexPosition(c,Al);let u=rv(i,e,t,n,El,wl,Al,bp);if(u){let h=new R;xr.getBarycoord(bp,El,wl,Al,h),r&&(u.uv=xr.getInterpolatedAttribute(r,a,l,c,h,new ce)),s&&(u.uv1=xr.getInterpolatedAttribute(s,a,l,c,h,new ce)),o&&(u.normal=xr.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new R,materialIndex:0};xr.getNormal(El,wl,Al,d.normal),u.face=d,u.barycoord=h}return u}var on=class i extends Oe{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function p(x,m,g,S,_,v,T,b,w,A,y){let M=v/w,E=T/A,C=v/2,I=T/2,U=b/2,L=w+1,O=A+1,k=0,V=0,z=new R;for(let W=0;W<O;W++){let Z=W*E-I;for(let ue=0;ue<L;ue++){let le=ue*M-C;z[x]=le*S,z[m]=Z*_,z[g]=U,c.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[g]=b>0?1:-1,u.push(z.x,z.y,z.z),h.push(ue/w),h.push(1-W/A),k+=1}}for(let W=0;W<A;W++)for(let Z=0;Z<w;Z++){let ue=d+Z+L*W,le=d+Z+L*(W+1),be=d+(Z+1)+L*(W+1),q=d+(Z+1)+L*W;l.push(ue,le,q),l.push(le,be,q),V+=6}a.addGroup(f,V,y),f+=V,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function os(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function pn(i){let e={};for(let t=0;t<i.length;t++){let n=os(i[t]);for(let r in n)e[r]=n[r]}return e}function sv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var _n={clone:os,merge:pn},ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ov,this.fragmentShader=av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=sv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},oa=class extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gr=new R,Ep=new ce,wp=new ce,Xt=class extends oa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,Ep,wp),t.subVectors(wp,Ep)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Os=-90,Fs=1,qs=class extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xt(Os,Fs,e,t);r.layers=this.layers,this.add(r);let s=new Xt(Os,Fs,e,t);s.layers=this.layers,this.add(s);let o=new Xt(Os,Fs,e,t);o.layers=this.layers,this.add(o);let a=new Xt(Os,Fs,e,t);a.layers=this.layers,this.add(a);let l=new Xt(Os,Fs,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Os,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},aa=class extends zt{constructor(e=[],t=ns,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ys=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new aa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new on(5,5,5),s=new bt({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:pi});s.uniforms.tEquirect.value=t;let o=new dt(r,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=It),new qs(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},ht=class extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}},lv={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},la=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zs=class extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Yr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new R,jr=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new je(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Il=new R,Ap=new R,bn=class extends it{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,r=t.length;n<r;n++){let s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let r=this.levels,s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let r=t.splice(n,1);return this.remove(r[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Il.setFromMatrixPosition(this.matrixWorld);let r=e.ray.origin.distanceTo(Il);this.getObjectForDistance(r).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Il.setFromMatrixPosition(e.matrixWorld),Ap.setFromMatrixPosition(this.matrixWorld);let n=Il.distanceTo(Ap)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let o=t[r].distance;if(t[r].object.visible&&(o-=o*t[r].hysteresis),n>=o)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let r=0,s=n.length;r<s;r++){let o=n[r];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},Rp=new R,Cp=new xt,Pp=new xt,cv=new R,Ip=new ke,Ll=new R,Ah=new Tn,Lp=new ke,Rh=new Zi,Ki=class extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ll),this.boundingBox.expandByPoint(Ll)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ll),this.boundingSphere.expandByPoint(Ll)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ah.copy(this.boundingSphere),Ah.applyMatrix4(r),e.ray.intersectsSphere(Ah)!==!1&&(Lp.copy(r).invert(),Rh.copy(e.ray).applyMatrix4(Lp),!(this.boundingBox!==null&&Rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Cp.fromBufferAttribute(r.attributes.skinIndex,e),Pp.fromBufferAttribute(r.attributes.skinWeight,e),Rp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Pp.getComponent(s);if(o!==0){let a=Cp.getComponent(s);Ip.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cv.copy(Rp).applyMatrix4(Ip),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ks=class extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}},yr=class extends zt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=qt,u=qt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dp=new ke,uv=new ke,ci=class i{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:uv;Dp.multiplyMatrices(a,t[s]),Dp.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new yr(t,e,e,Bn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ks),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ji=class extends je{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bs=new ke,Up=new ke,Dl=[],Np=new Kt,hv=new ke,Wo=new dt,Xo=new Tn,En=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,hv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Np.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Np)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Xo.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(n),e.ray.intersectsSphere(Xo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Bs),Up.multiplyMatrices(n,Bs),Wo.matrixWorld=Up,Wo.raycast(e,Dl);for(let o=0,a=Dl.length;o<a;o++){let l=Dl[o];l.instanceId=s,l.object=this,t.push(l)}Dl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new yr(new Float32Array(r*this.count),r,this.count,Lc,fn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ch=new R,dv=new R,fv=new qe,_i=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ch.subVectors(n,t).cross(dv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ch),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fv.getNormalMatrix(e),r=this.coplanarPoint(Ch).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Br=new Tn,pv=new ce(.5,.5),Ul=new R,Js=class{constructor(e=new _i,t=new _i,n=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],x=s[9],m=s[10],g=s[11],S=s[12],_=s[13],v=s[14],T=s[15];if(r[0].setComponents(c-o,f-u,g-p,T-S).normalize(),r[1].setComponents(c+o,f+u,g+p,T+S).normalize(),r[2].setComponents(c+a,f+h,g+x,T+_).normalize(),r[3].setComponents(c-a,f-h,g-x,T-_).normalize(),n)r[4].setComponents(l,d,m,v).normalize(),r[5].setComponents(c-l,f-d,g-m,T-v).normalize();else if(r[4].setComponents(c-l,f-d,g-m,T-v).normalize(),t===ai)r[5].setComponents(c+l,f+d,g+m,T+v).normalize();else if(t===ta)r[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);let t=pv.distanceTo(e.center);return Br.radius=.7071067811865476+t,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ul.x=r.normal.x>0?e.max.x:e.min.x,Ul.y=r.normal.y>0?e.max.y:e.min.y,Ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vn=class extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kl=new R,Jl=new R,Op=new ke,qo=new Zi,Nl=new Tn,Ph=new R,Fp=new R,Qi=class extends it{constructor(e=new Oe,t=new vn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Kl.fromBufferAttribute(t,r-1),Jl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Kl.distanceTo(Jl);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;Op.copy(r).invert(),qo.copy(e.ray).applyMatrix4(Op);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=u.getX(x),S=u.getX(x+1),_=Ol(this,e,qo,l,g,S,x);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(f),g=Ol(this,e,qo,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=Ol(this,e,qo,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Ol(this,e,qo,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ol(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Kl.fromBufferAttribute(a,r),Jl.fromBufferAttribute(a,s),t.distanceSqToSegment(Kl,Jl,Ph,Fp)>n)return;Ph.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ph);if(!(c<e.near||c>e.far))return{distance:c,point:Fp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Bp=new R,zp=new R,Zn=class extends Qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Bp.fromBufferAttribute(t,r),zp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Bp.distanceTo(zp);e.setAttribute("lineDistance",new Ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ca=class extends Qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Qs=class extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hp=new ke,zh=new Zi,Fl=new Tn,Bl=new R,Zr=class extends it{constructor(e=new Oe,t=new Qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;Hp.copy(r).invert(),zh.copy(e.ray).applyMatrix4(Hp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let m=c.getX(p);Bl.fromBufferAttribute(h,m),Vp(Bl,m,l,r,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Bl.fromBufferAttribute(h,p),Vp(Bl,p,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Vp(i,e,t,n,r,s,o){let a=zh.distanceSqToPoint(i);if(a<t){let l=new R;zh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ua=class extends zt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ha=class extends zt{constructor(e,t,n=Tr,r,s,o,a=qt,l=qt,c,u=ks,h=1){if(u!==ks&&u!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},da=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var fa=class i extends Oe{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new R,u=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mt=class i extends Oe{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],d=[],f=[],p=0,x=[],m=n/2,g=0;S(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(f,2));function S(){let v=new R,T=new R,b=0,w=(t-e)/n;for(let A=0;A<=s;A++){let y=[],M=A/s,E=M*(t-e)+e;for(let C=0;C<=r;C++){let I=C/r,U=I*l+a,L=Math.sin(U),O=Math.cos(U);T.x=E*L,T.y=-M*n+m,T.z=E*O,h.push(T.x,T.y,T.z),v.set(L,w,O).normalize(),d.push(v.x,v.y,v.z),f.push(I,1-M),y.push(p++)}x.push(y)}for(let A=0;A<r;A++)for(let y=0;y<s;y++){let M=x[y][A],E=x[y+1][A],C=x[y+1][A+1],I=x[y][A+1];(e>0||y!==0)&&(u.push(M,E,I),b+=3),(t>0||y!==s-1)&&(u.push(E,C,I),b+=3)}c.addGroup(g,b,0),g+=b}function _(v){let T=p,b=new ce,w=new R,A=0,y=v===!0?e:t,M=v===!0?1:-1;for(let C=1;C<=r;C++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),p++;let E=p;for(let C=0;C<=r;C++){let U=C/r*l+a,L=Math.cos(U),O=Math.sin(U);w.x=y*O,w.y=m*M,w.z=y*L,h.push(w.x,w.y,w.z),d.push(0,M,0),b.x=L*.5+.5,b.y=O*.5*M+.5,f.push(b.x,b.y),p++}for(let C=0;C<r;C++){let I=T+C,U=E+C;v===!0?u.push(U,U+1,I):u.push(U+1,U,I),A+=3}c.addGroup(g,A,v===!0?1:2),g+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pa=class i extends Mt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ql=class i extends Oe{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let _=new R,v=new R,T=new R;for(let b=0;b<t.length;b+=3)f(t[b+0],_),f(t[b+1],v),f(t[b+2],T),l(_,v,T,S)}function l(S,_,v,T){let b=T+1,w=[];for(let A=0;A<=b;A++){w[A]=[];let y=S.clone().lerp(v,A/b),M=_.clone().lerp(v,A/b),E=b-A;for(let C=0;C<=E;C++)C===0&&A===b?w[A][C]=y:w[A][C]=y.clone().lerp(M,C/E)}for(let A=0;A<b;A++)for(let y=0;y<2*(b-A)-1;y++){let M=Math.floor(y/2);y%2===0?(d(w[A][M+1]),d(w[A+1][M]),d(w[A][M])):(d(w[A][M+1]),d(w[A+1][M+1]),d(w[A+1][M]))}}function c(S){let _=new R;for(let v=0;v<s.length;v+=3)_.x=s[v+0],_.y=s[v+1],_.z=s[v+2],_.normalize().multiplyScalar(S),s[v+0]=_.x,s[v+1]=_.y,s[v+2]=_.z}function u(){let S=new R;for(let _=0;_<s.length;_+=3){S.x=s[_+0],S.y=s[_+1],S.z=s[_+2];let v=m(S)/2/Math.PI+.5,T=g(S)/Math.PI+.5;o.push(v,1-T)}p(),h()}function h(){for(let S=0;S<o.length;S+=6){let _=o[S+0],v=o[S+2],T=o[S+4],b=Math.max(_,v,T),w=Math.min(_,v,T);b>.9&&w<.1&&(_<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),T<.2&&(o[S+4]+=1))}}function d(S){s.push(S.x,S.y,S.z)}function f(S,_){let v=S*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function p(){let S=new R,_=new R,v=new R,T=new R,b=new ce,w=new ce,A=new ce;for(let y=0,M=0;y<s.length;y+=9,M+=6){S.set(s[y+0],s[y+1],s[y+2]),_.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),b.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),T.copy(S).add(_).add(v).divideScalar(3);let E=m(T);x(b,M+0,S,E),x(w,M+2,_,E),x(A,M+4,v,E)}}function x(S,_,v,T){T<0&&S.x===1&&(o[_]=S.x-1),v.x===0&&v.z===0&&(o[_]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],d=n[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ce:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,r=[],s=[],o=[],a=new R,l=new ke;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(st(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(st(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$s=class extends On{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$l=class extends $s{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fd(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var zl=new R,Ih=new fd,Lh=new fd,Dh=new fd,ui=class extends On{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(zl.subVectors(r[0],r[1]).add(r[0]),c=zl);let h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(zl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=zl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Ih.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,x,m),Lh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,x,m),Dh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Lh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Dh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ih.calc(l),Lh.calc(l),Dh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kp(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function mv(i,e){let t=1-i;return t*t*e}function gv(i,e){return 2*(1-i)*i*e}function xv(i,e){return i*i*e}function Jo(i,e,t,n){return mv(i,e)+gv(i,t)+xv(i,n)}function vv(i,e){let t=1-i;return t*t*t*e}function _v(i,e){let t=1-i;return 3*t*t*i*e}function yv(i,e){return 3*(1-i)*i*i*e}function Mv(i,e){return i*i*i*e}function Qo(i,e,t,n,r){return vv(i,e)+_v(i,t)+yv(i,n)+Mv(i,r)}var ma=class extends On{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qo(e,r.x,s.x,o.x,a.x),Qo(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends On{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qo(e,r.x,s.x,o.x,a.x),Qo(e,r.y,s.y,o.y,a.y),Qo(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends On{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends On{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends On{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Jo(e,r.x,s.x,o.x),Jo(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends On{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Jo(e,r.x,s.x,o.x),Jo(e,r.y,s.y,o.y),Jo(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(kp(a,l.x,c.x,u.x,h.x),kp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ce().fromArray(r))}return this}},nc=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:ui,CubicBezierCurve:ma,CubicBezierCurve3:ec,EllipseCurve:$s,LineCurve:ga,LineCurve3:tc,QuadraticBezierCurve:xa,QuadraticBezierCurve3:va,SplineCurve:_a}),ic=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new nc[r.type]().fromJSON(r))}return this}},$i=class extends ic{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ga(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new xa(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new ma(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _a(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new $s(e,t,n,r,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},an=class extends $i{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new $i().fromJSON(r))}return this}};function Sv(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Um(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Av(i,e,s,t)),i.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<r;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ya(s,o,t,a,l,c,0),o}function Um(i,e,t,n,r){let s;if(r===Bv(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Gp(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Gp(o/n|0,i[o],i[o+1],s);return s&&eo(s,s.next)&&(Sa(s),s=s.next),s}function Kr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(eo(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Sa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ya(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Lv(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?bv(i,n,r,s):Tv(i)){e.push(l.i,i.i,c.i),Sa(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ev(Kr(i),e),ya(i,e,t,n,r,s,2)):o===2&&wv(i,e,t,n,r,s):ya(Kr(i),e,t,n,r,s,1);break}}}function Tv(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),d=Math.max(r,s,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&jo(r,a,s,l,o,c,p.x,p.y)&&Ot(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function bv(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Ot(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),x=Math.max(a,l,c),m=Math.max(u,h,d),g=Hh(f,p,e,t,n),S=Hh(x,m,e,t,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=g&&v&&v.z<=S;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==r&&_!==o&&jo(a,u,l,h,c,d,_.x,_.y)&&Ot(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==r&&v!==o&&jo(a,u,l,h,c,d,v.x,v.y)&&Ot(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==r&&_!==o&&jo(a,u,l,h,c,d,_.x,_.y)&&Ot(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==r&&v!==o&&jo(a,u,l,h,c,d,v.x,v.y)&&Ot(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ev(i,e){let t=i;do{let n=t.prev,r=t.next.next;!eo(n,r)&&Om(n,t,t.next,r)&&Ma(n,r)&&Ma(r,n)&&(e.push(n.i,t.i,r.i),Sa(t),Sa(t.next),t=i=r),t=t.next}while(t!==i);return Kr(t)}function wv(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nv(o,a)){let l=Fm(o,a);o=Kr(o,o.next),l=Kr(l,l.next),ya(o,e,t,n,r,s,0),ya(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Av(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Um(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Uv(c))}r.sort(Rv);for(let s=0;s<r.length;s++)t=Cv(r[s],t);return t}function Rv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Cv(i,e){let t=Pv(i,e);if(!t)return e;let n=Fm(t,i);return Kr(n,n.next),Kr(t,t.next)}function Pv(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(eo(i,t))return t;do{if(eo(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Nm(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let h=Math.abs(r-t.y)/(n-t.x);Ma(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Iv(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Iv(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function Lv(i,e,t,n){let r=i;do r.z===0&&(r.z=Hh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Dv(r)}function Dv(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Hh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Uv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nm(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function jo(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Nm(i,e,t,n,r,s,o,a)}function Nv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ov(i,e)&&(Ma(i,e)&&Ma(e,i)&&Fv(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||eo(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function eo(i,e){return i.x===e.x&&i.y===e.y}function Om(i,e,t,n){let r=Vl(Ot(i,e,t)),s=Vl(Ot(i,e,n)),o=Vl(Ot(t,n,i)),a=Vl(Ot(t,n,e));return!!(r!==s&&o!==a||r===0&&Hl(i,t,e)||s===0&&Hl(i,n,e)||o===0&&Hl(t,i,n)||a===0&&Hl(t,e,n))}function Hl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Vl(i){return i>0?1:i<0?-1:0}function Ov(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Om(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ma(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function Fv(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fm(i,e){let t=Vh(i.i,i.x,i.y),n=Vh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Gp(i,e,t,n){let r=Vh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bv(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var kh=class{static triangulate(e,t,n=2){return Sv(e,t,n)}},yi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Wp(e),Xp(n,e);let o=e.length;t.forEach(Wp);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Xp(n,t[l]);let a=kh.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Wp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Xp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Fn=class i extends Oe{constructor(e=new an([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ie(r,3)),this.setAttribute("uv",new Ie(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:zv,_,v=!1,T,b,w,A;g&&(_=g.getSpacedPoints(u),v=!0,d=!1,T=g.computeFrenetFrames(u,!1),b=new R,w=new R,A=new R),d||(m=0,f=0,p=0,x=0);let y=a.extractPoints(c),M=y.shape,E=y.holes;if(!yi.isClockWise(M)){M=M.reverse();for(let ee=0,ne=E.length;ee<ne;ee++){let K=E[ee];yi.isClockWise(K)&&(E[ee]=K.reverse())}}function I(ee){let K=10000000000000001e-36,Q=ee[0];for(let fe=1;fe<=ee.length;fe++){let de=fe%ee.length,ge=ee[de],Ke=ge.x-Q.x,Qe=ge.y-Q.y,B=Ke*Ke+Qe*Qe,P=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(Q.x),Math.abs(Q.y)),J=K*P*P;if(B<=J){ee.splice(de,1),fe--;continue}Q=ge}}I(M),E.forEach(I);let U=E.length,L=M;for(let ee=0;ee<U;ee++){let ne=E[ee];M=M.concat(ne)}function O(ee,ne,K){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ne,K)}let k=M.length;function V(ee,ne,K){let Q,fe,de,ge=ee.x-ne.x,Ke=ee.y-ne.y,Qe=K.x-ee.x,B=K.y-ee.y,P=ge*ge+Ke*Ke,J=ge*B-Ke*Qe;if(Math.abs(J)>Number.EPSILON){let ie=Math.sqrt(P),me=Math.sqrt(Qe*Qe+B*B),ae=ne.x-Ke/ie,He=ne.y+ge/ie,Te=K.x-B/me,Be=K.y+Qe/me,ze=((Te-ae)*B-(Be-He)*Qe)/(ge*B-Ke*Qe);Q=ae+ge*ze-ee.x,fe=He+Ke*ze-ee.y;let xe=Q*Q+fe*fe;if(xe<=2)return new ce(Q,fe);de=Math.sqrt(xe/2)}else{let ie=!1;ge>Number.EPSILON?Qe>Number.EPSILON&&(ie=!0):ge<-Number.EPSILON?Qe<-Number.EPSILON&&(ie=!0):Math.sign(Ke)===Math.sign(B)&&(ie=!0),ie?(Q=-Ke,fe=ge,de=Math.sqrt(P)):(Q=ge,fe=Ke,de=Math.sqrt(P/2))}return new ce(Q/de,fe/de)}let z=[];for(let ee=0,ne=L.length,K=ne-1,Q=ee+1;ee<ne;ee++,K++,Q++)K===ne&&(K=0),Q===ne&&(Q=0),z[ee]=V(L[ee],L[K],L[Q]);let W=[],Z,ue=z.concat();for(let ee=0,ne=U;ee<ne;ee++){let K=E[ee];Z=[];for(let Q=0,fe=K.length,de=fe-1,ge=Q+1;Q<fe;Q++,de++,ge++)de===fe&&(de=0),ge===fe&&(ge=0),Z[Q]=V(K[Q],K[de],K[ge]);W.push(Z),ue=ue.concat(Z)}let le;if(m===0)le=yi.triangulateShape(L,E);else{let ee=[],ne=[];for(let K=0;K<m;K++){let Q=K/m,fe=f*Math.cos(Q*Math.PI/2),de=p*Math.sin(Q*Math.PI/2)+x;for(let ge=0,Ke=L.length;ge<Ke;ge++){let Qe=O(L[ge],z[ge],de);oe(Qe.x,Qe.y,-fe),Q===0&&ee.push(Qe)}for(let ge=0,Ke=U;ge<Ke;ge++){let Qe=E[ge];Z=W[ge];let B=[];for(let P=0,J=Qe.length;P<J;P++){let ie=O(Qe[P],Z[P],de);oe(ie.x,ie.y,-fe),Q===0&&B.push(ie)}Q===0&&ne.push(B)}}le=yi.triangulateShape(ee,ne)}let be=le.length,q=p+x;for(let ee=0;ee<k;ee++){let ne=d?O(M[ee],ue[ee],q):M[ee];v?(w.copy(T.normals[0]).multiplyScalar(ne.x),b.copy(T.binormals[0]).multiplyScalar(ne.y),A.copy(_[0]).add(w).add(b),oe(A.x,A.y,A.z)):oe(ne.x,ne.y,0)}for(let ee=1;ee<=u;ee++)for(let ne=0;ne<k;ne++){let K=d?O(M[ne],ue[ne],q):M[ne];v?(w.copy(T.normals[ee]).multiplyScalar(K.x),b.copy(T.binormals[ee]).multiplyScalar(K.y),A.copy(_[ee]).add(w).add(b),oe(A.x,A.y,A.z)):oe(K.x,K.y,h/u*ee)}for(let ee=m-1;ee>=0;ee--){let ne=ee/m,K=f*Math.cos(ne*Math.PI/2),Q=p*Math.sin(ne*Math.PI/2)+x;for(let fe=0,de=L.length;fe<de;fe++){let ge=O(L[fe],z[fe],Q);oe(ge.x,ge.y,h+K)}for(let fe=0,de=E.length;fe<de;fe++){let ge=E[fe];Z=W[fe];for(let Ke=0,Qe=ge.length;Ke<Qe;Ke++){let B=O(ge[Ke],Z[Ke],Q);v?oe(B.x,B.y+_[u-1].y,_[u-1].x+K):oe(B.x,B.y,h+K)}}}N(),H();function N(){let ee=r.length/3;if(d){let ne=0,K=k*ne;for(let Q=0;Q<be;Q++){let fe=le[Q];se(fe[2]+K,fe[1]+K,fe[0]+K)}ne=u+m*2,K=k*ne;for(let Q=0;Q<be;Q++){let fe=le[Q];se(fe[0]+K,fe[1]+K,fe[2]+K)}}else{for(let ne=0;ne<be;ne++){let K=le[ne];se(K[2],K[1],K[0])}for(let ne=0;ne<be;ne++){let K=le[ne];se(K[0]+k*u,K[1]+k*u,K[2]+k*u)}}n.addGroup(ee,r.length/3-ee,0)}function H(){let ee=r.length/3,ne=0;G(L,ne),ne+=L.length;for(let K=0,Q=E.length;K<Q;K++){let fe=E[K];G(fe,ne),ne+=fe.length}n.addGroup(ee,r.length/3-ee,1)}function G(ee,ne){let K=ee.length;for(;--K>=0;){let Q=K,fe=K-1;fe<0&&(fe=ee.length-1);for(let de=0,ge=u+m*2;de<ge;de++){let Ke=k*de,Qe=k*(de+1),B=ne+Q+Ke,P=ne+fe+Ke,J=ne+fe+Qe,ie=ne+Q+Qe;pe(B,P,J,ie)}}}function oe(ee,ne,K){l.push(ee),l.push(ne),l.push(K)}function se(ee,ne,K){Ee(ee),Ee(ne),Ee(K);let Q=r.length/3,fe=S.generateTopUV(n,r,Q-3,Q-2,Q-1);F(fe[0]),F(fe[1]),F(fe[2])}function pe(ee,ne,K,Q){Ee(ee),Ee(ne),Ee(Q),Ee(ne),Ee(K),Ee(Q);let fe=r.length/3,de=S.generateSideWallUV(n,r,fe-6,fe-3,fe-2,fe-1);F(de[0]),F(de[1]),F(de[3]),F(de[1]),F(de[2]),F(de[3])}function Ee(ee){r.push(l[ee*3+0]),r.push(l[ee*3+1]),r.push(l[ee*3+2])}function F(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Hv(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new nc[r.type]().fromJSON(r)),new i(n,e.options)}},zv={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ce(s,o),new ce(a,l),new ce(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],p=e[r*3+2],x=e[s*3],m=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-h),new ce(d,1-p),new ce(x,1-g)]:[new ce(a,1-l),new ce(u,1-h),new ce(f,1-p),new ce(m,1-g)]}};function Hv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Jr=class i extends Ql{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ta=class i extends Oe{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=st(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,h=new R,d=new ce,f=new R,p=new R,x=new R,m=0,g=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,g=e[S+1].y-e[S].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[S+1].x-e[S].x,g=e[S+1].y-e[S].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let S=0;S<=t;S++){let _=n+S*u*r,v=Math.sin(_),T=Math.cos(_);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*v,h.y=e[b].y,h.z=e[b].x*T,o.push(h.x,h.y,h.z),d.x=S/t,d.y=b/(e.length-1),a.push(d.x,d.y);let w=l[3*b+0]*v,A=l[3*b+1],y=l[3*b+0]*T;c.push(w,A,y)}}for(let S=0;S<t;S++)for(let _=0;_<e.length-1;_++){let v=_+S*e.length,T=v,b=v+e.length,w=v+e.length+1,A=v+1;s.push(T,b,A),s.push(w,A,b)}this.setIndex(s),this.setAttribute("position",new Ie(o,3)),this.setAttribute("uv",new Ie(a,2)),this.setAttribute("normal",new Ie(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Yt=class i extends Oe{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let S=g*d-o;for(let _=0;_<c;_++){let v=_*h-s;p.push(v,-S,0),x.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let _=S+c*g,v=S+c*(g+1),T=S+1+c*(g+1),b=S+1+c*g;f.push(_,v,b),f.push(v,T,b)}this.setIndex(f),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Mr=class i extends Oe{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/r,f=new R,p=new ce;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){let g=s+m/n*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let x=0;x<r;x++){let m=x*(n+1);for(let g=0;g<n;g++){let S=g+m,_=S,v=S+n+1,T=S+n+2,b=S+1;a.push(_,v,b),a.push(v,T,b)}}this.setIndex(a),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ba=class i extends Oe{constructor(e=new an([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(s,3)),this.setAttribute("uv",new Ie(o,2));function c(u){let h=r.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;yi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let S=p[m];yi.isClockWise(S)===!0&&(p[m]=S.reverse())}let x=yi.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let S=p[m];f=f.concat(S)}for(let m=0,g=f.length;m<g;m++){let S=f[m];r.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let m=0,g=x.length;m<g;m++){let S=x[m],_=S[0]+h,v=S[1]+h,T=S[2]+h;n.push(_,v,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Vv(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function Vv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var ln=class i extends Oe{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new R,d=new R,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let S=[],_=g/n,v=0;g===0&&o===0?v=.5/t:g===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){let b=T/t;h.x=-e*Math.cos(r+b*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+b*s)*Math.sin(o+_*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(b+v,1-_),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){let _=u[g][S+1],v=u[g][S],T=u[g+1][S],b=u[g+1][S+1];(g!==0||o>0)&&f.push(_,v,b),(g!==n-1||l<Math.PI)&&f.push(v,T,b)}this.setIndex(f),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var er=class i extends Oe{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],l=[],c=[],u=new R,h=new R,d=new R;for(let f=0;f<=n;f++)for(let p=0;p<=r;p++){let x=p/r*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=r;p++){let x=(r+1)*f+p-1,m=(r+1)*(f-1)+p-1,g=(r+1)*(f-1)+p,S=(r+1)*f+p;o.push(x,m,S),o.push(m,g,S)}this.setIndex(o),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Sr=class i extends Oe{constructor(e=new va(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new ce,u=new R,h=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(f,2));function x(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),S(),g()}function m(_){u=e.getPointAt(_/t,u);let v=o.normals[_],T=o.binormals[_];for(let b=0;b<=r;b++){let w=b/r*Math.PI*2,A=Math.sin(w),y=-Math.cos(w);l.x=y*v.x+A*T.x,l.y=y*v.y+A*T.y,l.z=y*v.z+A*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=t;_++)for(let v=1;v<=r;v++){let T=(r+1)*(_-1)+(v-1),b=(r+1)*_+(v-1),w=(r+1)*_+v,A=(r+1)*(_-1)+v;p.push(T,b,A),p.push(b,w,A)}}function S(){for(let _=0;_<=t;_++)for(let v=0;v<=r;v++)c.x=_/t,c.y=v/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new nc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ea=class extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ct=class extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends Ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var rc=class extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sc=class extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function kl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gv(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function qp(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Bm(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}var tr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oc=class extends tr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hr,endingEnd:Hr}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vr:s=e,a=2*t-n;break;case $o:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vr:o=e,l=2*n-t;break;case $o:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,_=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let T=0;T!==a;++T)s[T]=g*o[u+T]+S*o[c+T]+_*o[l+T]+v*o[h+T];return s}},wa=class extends tr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},ac=class extends tr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},wn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kl(t,this.TimeBufferType),this.values=kl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kl(e.times,Array),values:kl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case Xr:t=this.InterpolantFactoryMethodLinear;break;case Gl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Xr;case this.InterpolantFactoryMethodSmooth:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&kv(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Gl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let x=t[h+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Xr;var nr=class extends wn{constructor(e,t,n){super(e,t,n)}};nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Wr;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};Aa.prototype.ValueTypeName="color";var Ti=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};Ti.prototype.ValueTypeName="number";var lc=class extends tr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Ue.slerpFlat(s,0,o,c-a,o,c,l);return s}},hi=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new lc(this.times,this.values,this.getValueSize(),e)}};hi.prototype.ValueTypeName="quaternion";hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends wn{constructor(e,t,n){super(e,t,n)}};ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Wr;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};di.prototype.ValueTypeName="vector";var bi=class{constructor(e="",t=-1,n=[],r=du){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Xv(n[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(wn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=Gv(l);l=qp(l,1,u),c=qp(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ti(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=r[h];d||(r[h]=d=[]),d.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,p,x){if(f.length!==0){let m=[],g=[];Bm(f,m,g,p),m.length!==0&&x.push(new h(d,m,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let x=0;x<d[p].morphTargets.length;x++)f[d[p].morphTargets[x]]=-1;for(let x in f){let m=[],g=[];for(let S=0;S!==d[p].morphTargets.length;++S){let _=d[p];m.push(_.time),g.push(_.morphTarget===x?1:0)}r.push(new Ti(".morphTargetInfluence["+x+"]",m,g))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(di,f+".position",d,"pos",r),n(hi,f+".quaternion",d,"rot",r),n(di,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Wv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ti;case"vector":case"vector2":case"vector3":case"vector4":return di;case"color":return Aa;case"quaternion":return hi;case"bool":case"boolean":return nr;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Xv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Wv(i.type);if(i.times===void 0){let t=[],n=[];Bm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Mi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},cc=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ka=new cc,fi=class{constructor(e){this.manager=e!==void 0?e:ka,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi={},Gh=class extends Error{constructor(e,t){super(e),this.response=t}},Ei=class extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Mi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:n,onError:r});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=qi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,m=new ReadableStream({start(g){S();function S(){h.read().then(({done:_,value:v})=>{if(_)g.close();else{x+=v.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let b=0,w=u.length;b<w;b++){let A=u[b];A.onProgress&&A.onProgress(T)}g.enqueue(v),S()}},_=>{g.error(_)})}}});return new Response(m)}else throw new Gh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Mi.add(`file:${e}`,c);let u=qi[e];delete qi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=qi[e];if(u===void 0)throw this.manager.itemError(e),c;delete qi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zs=new WeakMap,to=class extends fi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Mi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=zs.get(o);h===void 0&&(h=[],zs.set(o,h)),h.push({onLoad:t,onError:r})}return o}let a=Gs("img");function l(){u(),t&&t(this);let h=zs.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}zs.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Mi.remove(`image:${e}`);let d=zs.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}zs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Mi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var Ra=class extends fi{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new yr,a=new Ei(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Yn,o.wrapT=c.wrapT!==void 0?c.wrapT:Yn,o.magFilter=c.magFilter!==void 0?c.magFilter:It,o.minFilter=c.minFilter!==void 0?c.minFilter:It,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Kn),c.mipmapCount===1&&(o.minFilter=It),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}},Qr=class extends fi{constructor(e){super(e)}load(e,t,n,r){let s=new zt,o=new to(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},$r=class extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ca=class extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Uh=new ke,Yp=new R,jp=new R,Pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yp),jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jp),t.updateMatrixWorld(),Uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wh=class extends Pa{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=qr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ia=class extends $r{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zp=new ke,Yo=new R,Nh=new R,Xh=class extends Pa{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Yo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yo),Nh.copy(n.position),Nh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nh),n.updateMatrixWorld(),r.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Zp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zp,n.coordinateSystem,n.reversedDepth)}},La=class extends $r{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},rr=class extends oa{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qh=class extends Pa{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new qh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var sr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Oh=new WeakMap,Da=class extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Mi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(Oh.has(o)===!0)r&&r(Oh.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Oh.set(l,c),Mi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Mi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var uc=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ua=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var hc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){Ue.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){let o=this._workIndex*s;Ue.multiplyQuaternionsFlat(e,o,e,t,e,n),Ue.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){let o=1-r;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*r}}},pd="\\[\\]\\.:\\/",qv=new RegExp("["+pd+"]","g"),md="[^"+pd+"]",Yv="[^"+pd.replace("\\.","")+"]",jv=/((?:WC+[\/:])*)/.source.replace("WC",md),Zv=/(WCOD+)?/.source.replace("WCOD",Yv),Kv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",md),Jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",md),Qv=new RegExp("^"+jv+Zv+Kv+Jv+"$"),$v=["material","materials","bones","map"],Yh=class{constructor(e,t,n){let r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qv,"")}static parseTrackName(e){let t=Qv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);$v.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Yh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dc=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Hr,endingEnd:Hr};for(let c=0;c!==o;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_m,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ym:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case du:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,s=this._loopCount,o=n===hu;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===uu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Vr,r.endingEnd=Vr):(e?r.endingStart=this.zeroSlopeAtStart?Vr:Hr:r.endingStart=$o,t?r.endingEnd=this.zeroSlopeAtEnd?Vr:Hr:r.endingEnd=$o)}_scheduleFading(e,t,n){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},e_=new Float32Array(1),no=class extends Si{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let d=r[h],f=d.name,p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;p=new hc(At.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new wa(new Float32Array(2),new Float32Array(2),1,e_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let r=t||this._root,s=r.uuid,o=typeof e=="string"?bi.findByName(r,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=du),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new dc(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let n=t||this._root,r=n.uuid,s=typeof e=="string"?bi.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var io=class{constructor(e,t,n,r,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};var Na=class extends Zn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Oe;r.setAttribute("position",new Ie(t,3)),r.setAttribute("color",new Ie(n,3));let s=new vn({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){let r=new Me,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function gd(i,e,t,n){let r=t_(n);switch(t){case rd:return i*e;case Lc:return i*e/r.components*r.byteLength;case Dc:return i*e/r.components*r.byteLength;case od:return i*e*2/r.components*r.byteLength;case Uc:return i*e*2/r.components*r.byteLength;case sd:return i*e*3/r.components*r.byteLength;case Bn:return i*e*4/r.components*r.byteLength;case Nc:return i*e*4/r.components*r.byteLength;case Fa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:case zc:return Math.max(i,16)*Math.max(e,8)/4;case Oc:case Bc:return Math.max(i,8)*Math.max(e,8)/2;case Hc:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case iu:case ru:case su:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ou:case au:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lu:case cu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t_(i){switch(i){case mi:case ed:return{byteLength:1,components:1};case ao:case td:case Dt:return{byteLength:2,components:1};case Pc:case Ic:return{byteLength:2,components:4};case Tr:case Cc:case fn:return{byteLength:4,components:1};case nd:case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function lg(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function i_(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var r_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,f_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,v_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U_="gl_FragColor = linearToOutputTexel( gl_FragColor );",N_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ny=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ky=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,EM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:r_,alphahash_pars_fragment:s_,alphamap_fragment:o_,alphamap_pars_fragment:a_,alphatest_fragment:l_,alphatest_pars_fragment:c_,aomap_fragment:u_,aomap_pars_fragment:h_,batching_pars_vertex:d_,batching_vertex:f_,begin_vertex:p_,beginnormal_vertex:m_,bsdfs:g_,iridescence_fragment:x_,bumpmap_pars_fragment:v_,clipping_planes_fragment:__,clipping_planes_pars_fragment:y_,clipping_planes_pars_vertex:M_,clipping_planes_vertex:S_,color_fragment:T_,color_pars_fragment:b_,color_pars_vertex:E_,color_vertex:w_,common:A_,cube_uv_reflection_fragment:R_,defaultnormal_vertex:C_,displacementmap_pars_vertex:P_,displacementmap_vertex:I_,emissivemap_fragment:L_,emissivemap_pars_fragment:D_,colorspace_fragment:U_,colorspace_pars_fragment:N_,envmap_fragment:O_,envmap_common_pars_fragment:F_,envmap_pars_fragment:B_,envmap_pars_vertex:z_,envmap_physical_pars_fragment:K_,envmap_vertex:H_,fog_vertex:V_,fog_pars_vertex:k_,fog_fragment:G_,fog_pars_fragment:W_,gradientmap_pars_fragment:X_,lightmap_pars_fragment:q_,lights_lambert_fragment:Y_,lights_lambert_pars_fragment:j_,lights_pars_begin:Z_,lights_toon_fragment:J_,lights_toon_pars_fragment:Q_,lights_phong_fragment:$_,lights_phong_pars_fragment:ey,lights_physical_fragment:ty,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:ry,lights_fragment_end:sy,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:cy,map_fragment:uy,map_pars_fragment:hy,map_particle_fragment:dy,map_particle_pars_fragment:fy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:xy,morphnormal_vertex:vy,morphtarget_pars_vertex:_y,morphtarget_vertex:yy,normal_fragment_begin:My,normal_fragment_maps:Sy,normal_pars_fragment:Ty,normal_pars_vertex:by,normal_vertex:Ey,normalmap_pars_fragment:wy,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Py,opaque_fragment:Iy,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Uy,dithering_fragment:Ny,dithering_pars_fragment:Oy,roughnessmap_fragment:Fy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:zy,shadowmap_pars_vertex:Hy,shadowmap_vertex:Vy,shadowmask_pars_fragment:ky,skinbase_vertex:Gy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:qy,specularmap_fragment:Yy,specularmap_pars_fragment:jy,tonemapping_fragment:Zy,tonemapping_pars_fragment:Ky,transmission_fragment:Jy,transmission_pars_fragment:Qy,uv_pars_fragment:$y,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:rM,backgroundCube_vert:sM,backgroundCube_frag:oM,cube_vert:aM,cube_frag:lM,depth_vert:cM,depth_frag:uM,distanceRGBA_vert:hM,distanceRGBA_frag:dM,equirect_vert:fM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:xM,meshbasic_frag:vM,meshlambert_vert:_M,meshlambert_frag:yM,meshmatcap_vert:MM,meshmatcap_frag:SM,meshnormal_vert:TM,meshnormal_frag:bM,meshphong_vert:EM,meshphong_frag:wM,meshphysical_vert:AM,meshphysical_frag:RM,meshtoon_vert:CM,meshtoon_frag:PM,points_vert:IM,points_frag:LM,shadow_vert:DM,shadow_frag:UM,sprite_vert:NM,sprite_frag:OM},Ae={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ai={basic:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Me(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:pn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:pn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:pn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Me(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:pn([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:pn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:pn([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:pn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:pn([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:pn([Ae.common,Ae.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:pn([Ae.lights,Ae.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Ai.physical={uniforms:pn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var pu={r:0,b:0,g:0},as=new nn,FM=new ke;function BM(i,e,t,n,r,s,o){let a=new Me(0),l=s===!0?0:1,c,u,h=null,d=0,f=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1,T=p(_);T===null?g(a,l):T&&T.isColor&&(g(T,1),v=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){let T=p(v);T&&(T.isCubeTexture||T.mapping===Oa)?(u===void 0&&(u=new dt(new on(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:os(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),as.copy(v.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(FM.makeRotationFromEuler(as)),u.material.toneMapped=lt.getTransfer(T.colorSpace)!==_t,(h!==T||d!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new dt(new Yt(2,2),new bt({name:"BackgroundMaterial",uniforms:os(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(T.colorSpace)!==_t,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,v){_.getRGB(pu,dd(i)),n.buffers.color.setClear(pu.r,pu.g,pu.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,g(a,l)},render:x,addToRenderList:m,dispose:S}}function zM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(M,E,C,I,U){let L=!1,O=h(I,C,E);s!==O&&(s=O,c(s.object)),L=f(M,I,C,U),L&&p(M,I,C,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,v(M,E,C,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,E,C){let I=C.wireframe===!0,U=n[M.id];U===void 0&&(U={},n[M.id]=U);let L=U[E.id];L===void 0&&(L={},U[E.id]=L);let O=L[I];return O===void 0&&(O=d(l()),L[I]=O),O}function d(M){let E=[],C=[],I=[];for(let U=0;U<t;U++)E[U]=0,C[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:C,attributeDivisors:I,object:M,attributes:{},index:null}}function f(M,E,C,I){let U=s.attributes,L=E.attributes,O=0,k=C.getAttributes();for(let V in k)if(k[V].location>=0){let W=U[V],Z=L[V];if(Z===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),W===void 0||W.attribute!==Z||Z&&W.data!==Z.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function p(M,E,C,I){let U={},L=E.attributes,O=0,k=C.getAttributes();for(let V in k)if(k[V].location>=0){let W=L[V];W===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(W=M.instanceColor));let Z={};Z.attribute=W,W&&W.data&&(Z.data=W.data),U[V]=Z,O++}s.attributes=U,s.attributesNum=O,s.index=I}function x(){let M=s.newAttributes;for(let E=0,C=M.length;E<C;E++)M[E]=0}function m(M){g(M,0)}function g(M,E){let C=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;C[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),U[M]!==E&&(i.vertexAttribDivisor(M,E),U[M]=E)}function S(){let M=s.newAttributes,E=s.enabledAttributes;for(let C=0,I=E.length;C<I;C++)E[C]!==M[C]&&(i.disableVertexAttribArray(C),E[C]=0)}function _(M,E,C,I,U,L,O){O===!0?i.vertexAttribIPointer(M,E,C,U,L):i.vertexAttribPointer(M,E,C,I,U,L)}function v(M,E,C,I){x();let U=I.attributes,L=C.getAttributes(),O=E.defaultAttributeValues;for(let k in L){let V=L[k];if(V.location>=0){let z=U[k];if(z===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(z=M.instanceColor)),z!==void 0){let W=z.normalized,Z=z.itemSize,ue=e.get(z);if(ue===void 0)continue;let le=ue.buffer,be=ue.type,q=ue.bytesPerElement,N=be===i.INT||be===i.UNSIGNED_INT||z.gpuType===Cc;if(z.isInterleavedBufferAttribute){let H=z.data,G=H.stride,oe=z.offset;if(H.isInstancedInterleavedBuffer){for(let se=0;se<V.locationSize;se++)g(V.location+se,H.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,le);for(let se=0;se<V.locationSize;se++)_(V.location+se,Z/V.locationSize,be,W,G*q,(oe+Z/V.locationSize*se)*q,N)}else{if(z.isInstancedBufferAttribute){for(let H=0;H<V.locationSize;H++)g(V.location+H,z.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let H=0;H<V.locationSize;H++)m(V.location+H);i.bindBuffer(i.ARRAY_BUFFER,le);for(let H=0;H<V.locationSize;H++)_(V.location+H,Z/V.locationSize,be,W,Z*q,Z/V.locationSize*H*q,N)}}else if(O!==void 0){let W=O[k];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(V.location,W);break;case 3:i.vertexAttrib3fv(V.location,W);break;case 4:i.vertexAttrib4fv(V.location,W);break;default:i.vertexAttrib1fv(V.location,W)}}}}S()}function T(){A();for(let M in n){let E=n[M];for(let C in E){let I=E[C];for(let U in I)u(I[U].object),delete I[U];delete E[C]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;let E=n[M.id];for(let C in E){let I=E[C];for(let U in I)u(I[U].object),delete I[U];delete E[C]}delete n[M.id]}function w(M){for(let E in n){let C=n[E];if(C[M.id]===void 0)continue;let I=C[M.id];for(let U in I)u(I[U].object),delete I[U];delete C[M.id]}}function A(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function HM(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x]*d[x];t.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function VM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let A=w===Dt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==mi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fn&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:T,maxSamples:b}}function kM(i){let e=this,t=null,n=0,r=!1,s=!1,o=new _i,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{let S=s?0:n,_=S*4,v=g.clippingState||null;l.value=v,v=u(p,d,_,f);for(let T=0;T!==_;++T)v[T]=t[T];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,v=f;_!==x;++_,v+=4)o.copy(h[_]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function GM(i){let e=new WeakMap;function t(o,a){return a===so?o.mapping=ns:a===Ac&&(o.mapping=is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===so||a===Ac)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ys(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var fo=4,zm=[.125,.215,.35,.446,.526,.582],us=20,xd=new rr,Hm=new Me,vd=null,_d=0,yd=0,Md=!1,cs=(1+Math.sqrt(5))/2,ho=1/cs,Vm=[new R(-cs,ho,0),new R(cs,ho,0),new R(-ho,0,cs),new R(ho,0,cs),new R(0,cs,-ho),new R(0,cs,ho),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],WM=new R,mo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=WM}=s;vd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vd,_d,yd),this._renderer.xr.enabled=Md,e.scissorTest=!1,mu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Dt,format:Bn,colorSpace:Zt,depthBuffer:!1},r=km(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XM(s)),this._blurMaterial=qM(s,e,t)}return r}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,xd)}_sceneToCubeUV(e,t,n,r,s){let l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Hm),h.toneMapping=or,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let x=new Ht({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),m=new dt(new on,x),g=!1,S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,g=!0):(x.color.copy(Hm),g=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));let T=this._cubeSize;mu(r,v*T,_>2?T:0,T,T),h.setRenderTarget(r),g&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;mu(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vm[(r-s-1)%Vm.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new dt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*us-1),x=s/p,m=isFinite(s)?1+Math.floor(u*x):us;m>us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);let g=[],S=0;for(let w=0;w<us;++w){let A=w/x,y=Math.exp(-A*A/2);g.push(y),w===0?S+=y:w<m&&(S+=2*y)}for(let w=0;w<g.length;w++)g[w]=g[w]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;let v=this._sizeLods[r],T=3*v*(r>_-fo?r-_+fo:0),b=4*(this._cubeSize-v);mu(t,T,b,3*v,2*v),l.setRenderTarget(t),l.render(h,xd)}};function XM(i){let e=[],t=[],n=[],r=i,s=i-fo+1+zm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-fo?l=zm[o-i+fo-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,x=3,m=2,g=1,S=new Float32Array(x*p*f),_=new Float32Array(m*p*f),v=new Float32Array(g*p*f);for(let b=0;b<f;b++){let w=b%3*2/3-1,A=b>2?0:-1,y=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];S.set(y,x*p*b),_.set(d,m*p*b);let M=[b,b,b,b,b,b];v.set(M,g*p*b)}let T=new Oe;T.setAttribute("position",new je(S,x)),T.setAttribute("uv",new je(_,m)),T.setAttribute("faceIndex",new je(v,g)),e.push(T),r>fo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function km(i,e,t){let n=new Gt(i,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mu(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function qM(i,e,t){let n=new Float32Array(us),r=new R(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Gm(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Wm(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function YM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===so||l===Ac,u=l===ns||l===is;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new mo(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new mo(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ZM(i,e,t,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,x=0;if(f!==null){let S=f.array;x=f.version;for(let _=0,v=S.length;_<v;_+=3){let T=S[_+0],b=S[_+1],w=S[_+2];d.push(T,b,b,w,w,T)}}else if(p!==void 0){let S=p.array;x=p.version;for(let _=0,v=S.length/3-1;_<v;_+=3){let T=_+0,b=_+1,w=_+2;d.push(T,b,b,w,w,T)}}else return;let m=new(hd(d)?sa:ra)(d,1);m.version=x;let g=s.get(h);g&&e.remove(g),s.set(h,m)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function KM(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,d*o,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function h(d,f,p,x){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,p);let g=0;for(let S=0;S<p;S++)g+=f[S]*x[S];t.update(g,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function JM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function QM(i,e,t){let n=new WeakMap,r=new xt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*T*4*h),w=new na(b,v,T,h);w.type=fn,w.needsUpdate=!0;let A=_*4;for(let M=0;M<h;M++){let E=m[M],C=g[M],I=S[M],U=v*T*4*M;for(let L=0;L<E.count;L++){let O=L*A;f===!0&&(r.fromBufferAttribute(E,L),b[U+O+0]=r.x,b[U+O+1]=r.y,b[U+O+2]=r.z,b[U+O+3]=0),p===!0&&(r.fromBufferAttribute(C,L),b[U+O+4]=r.x,b[U+O+5]=r.y,b[U+O+6]=r.z,b[U+O+7]=0),x===!0&&(r.fromBufferAttribute(I,L),b[U+O+8]=r.x,b[U+O+9]=r.y,b[U+O+10]=r.z,b[U+O+11]=I.itemSize===4?r.w:1)}}d={count:h,texture:w,size:new ce(v,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function $M(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var cg=new zt,Xm=new ha(1,1),ug=new na,hg=new Zl,dg=new aa,qm=[],Ym=[],jm=new Float32Array(16),Zm=new Float32Array(9),Km=new Float32Array(4);function go(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=qm[r];if(s===void 0&&(s=new Float32Array(r),qm[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vu(i,e){let t=Ym[e];t===void 0&&(t=new Int32Array(e),Ym[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function e1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function t1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function n1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function i1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function r1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Qt(t,n))return;Km.set(n),i.uniformMatrix2fv(this.addr,!1,Km),$t(t,n)}}function s1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Qt(t,n))return;Zm.set(n),i.uniformMatrix3fv(this.addr,!1,Zm),$t(t,n)}}function o1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Qt(t,n))return;jm.set(n),i.uniformMatrix4fv(this.addr,!1,jm),$t(t,n)}}function a1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function l1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function c1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function u1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function h1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function d1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function f1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function p1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function m1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Xm.compareFunction=ad,s=Xm):s=cg,t.setTexture2D(e||s,r)}function g1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hg,r)}function x1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||dg,r)}function v1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ug,r)}function _1(i){switch(i){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return h1;case 36294:return d1;case 36295:return f1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return v1}}function y1(i,e){i.uniform1fv(this.addr,e)}function M1(i,e){let t=go(e,this.size,2);i.uniform2fv(this.addr,t)}function S1(i,e){let t=go(e,this.size,3);i.uniform3fv(this.addr,t)}function T1(i,e){let t=go(e,this.size,4);i.uniform4fv(this.addr,t)}function b1(i,e){let t=go(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function E1(i,e){let t=go(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function w1(i,e){let t=go(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function A1(i,e){i.uniform1iv(this.addr,e)}function R1(i,e){i.uniform2iv(this.addr,e)}function C1(i,e){i.uniform3iv(this.addr,e)}function P1(i,e){i.uniform4iv(this.addr,e)}function I1(i,e){i.uniform1uiv(this.addr,e)}function L1(i,e){i.uniform2uiv(this.addr,e)}function D1(i,e){i.uniform3uiv(this.addr,e)}function U1(i,e){i.uniform4uiv(this.addr,e)}function N1(i,e,t){let n=this.cache,r=e.length,s=vu(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||cg,s[o])}function O1(i,e,t){let n=this.cache,r=e.length,s=vu(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||hg,s[o])}function F1(i,e,t){let n=this.cache,r=e.length,s=vu(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||dg,s[o])}function B1(i,e,t){let n=this.cache,r=e.length,s=vu(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),$t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ug,s[o])}function z1(i){switch(i){case 5126:return y1;case 35664:return M1;case 35665:return S1;case 35666:return T1;case 35674:return b1;case 35675:return E1;case 35676:return w1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return P1;case 5125:return I1;case 36294:return L1;case 36295:return D1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return B1}}var Td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_1(t.type)}},bd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z1(t.type)}},Ed=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Sd=/(\w+)(\])?(\[|\.)?/g;function Jm(i,e){i.seq.push(e),i.map[e.id]=e}function H1(i,e,t){let n=i.name,r=n.length;for(Sd.lastIndex=0;;){let s=Sd.exec(n),o=Sd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Jm(t,c===void 0?new Td(a,i,e):new bd(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ed(a),Jm(t,h)),t=h}}}var po=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);H1(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Qm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var V1=37297,k1=0;function G1(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var $m=new qe;function W1(i){lt._getMatrix($m,lt.workingColorSpace,i);let e=`mat3( ${$m.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case ea:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function eg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+G1(i.getShaderSource(e),a)}else return s}function X1(i,e){let t=W1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function q1(i,e){let t;switch(e){case Mc:t="Linear";break;case Sc:t="Reinhard";break;case Tc:t="Cineon";break;case ro:t="ACESFilmic";break;case Ec:t="AgX";break;case wc:t="Neutral";break;case bc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gu=new R;function Y1(){lt.getLuminanceCoefficients(gu);let i=gu.x.toFixed(4),e=gu.y.toFixed(4),t=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function Z1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ga(i){return i!==""}function tg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ng(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J1=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(i){return i.replace(J1,$1)}var Q1=new Map;function $1(i,e){let t=ot[e];if(t===void 0){let n=Q1.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wd(t)}var eS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ig(i){return i.replace(eS,tS)}function tS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function iS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rS(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===is&&(e="ENVMAP_MODE_REFRACTION"),e}function sS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qh:e="ENVMAP_BLENDING_MULTIPLY";break;case gm:e="ENVMAP_BLENDING_MIX";break;case xm:e="ENVMAP_BLENDING_ADD";break}return e}function oS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aS(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nS(t),c=iS(t),u=rS(t),h=sS(t),d=oS(t),f=j1(t),p=Z1(s),x=r.createProgram(),m,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ga).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ga).join(`
`),g.length>0&&(g+=`
`)):(m=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),g=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?ot.tonemapping_pars_fragment:"",t.toneMapping!==or?q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,X1("linearToOutputTexel",t.outputColorSpace),Y1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),o=wd(o),o=tg(o,t),o=ng(o,t),a=wd(a),a=tg(a,t),a=ng(a,t),o=ig(o),a=ig(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=S+m+o,v=S+g+a,T=Qm(r,r.VERTEX_SHADER,_),b=Qm(r,r.FRAGMENT_SHADER,v);r.attachShader(x,T),r.attachShader(x,b),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(E){if(i.debug.checkShaderErrors){let C=r.getProgramInfoLog(x)||"",I=r.getShaderInfoLog(T)||"",U=r.getShaderInfoLog(b)||"",L=C.trim(),O=I.trim(),k=U.trim(),V=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,T,b);else{let W=eg(r,T,"vertex"),Z=eg(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+W+`
`+Z)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||k==="")&&(z=!1);z&&(E.diagnostics={runnable:V,programLog:L,vertexShader:{log:O,prefix:m},fragmentShader:{log:k,prefix:g}})}r.deleteShader(T),r.deleteShader(b),A=new po(r,x),y=K1(r,x)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,V1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}var lS=0,Ad=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rd(e),t.set(e,n)),n}},Rd=class{constructor(e){this.id=lS++,this.code=e,this.usedTimes=0}};function cS(i,e,t,n,r,s,o){let a=new ia,l=new Ad,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,E,C,I){let U=C.fog,L=I.geometry,O=y.isMeshStandardMaterial?C.environment:null,k=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),V=k&&k.mapping===Oa?k.image.height:null,z=p[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let W=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=W!==void 0?W.length:0,ue=0;L.morphAttributes.position!==void 0&&(ue=1),L.morphAttributes.normal!==void 0&&(ue=2),L.morphAttributes.color!==void 0&&(ue=3);let le,be,q,N;if(z){let mt=Ai[z];le=mt.vertexShader,be=mt.fragmentShader}else le=y.vertexShader,be=y.fragmentShader,l.update(y),q=l.getVertexShaderID(y),N=l.getFragmentShaderID(y);let H=i.getRenderTarget(),G=i.state.buffers.depth.getReversed(),oe=I.isInstancedMesh===!0,se=I.isBatchedMesh===!0,pe=!!y.map,Ee=!!y.matcap,F=!!k,ee=!!y.aoMap,ne=!!y.lightMap,K=!!y.bumpMap,Q=!!y.normalMap,fe=!!y.displacementMap,de=!!y.emissiveMap,ge=!!y.metalnessMap,Ke=!!y.roughnessMap,Qe=y.anisotropy>0,B=y.clearcoat>0,P=y.dispersion>0,J=y.iridescence>0,ie=y.sheen>0,me=y.transmission>0,ae=Qe&&!!y.anisotropyMap,He=B&&!!y.clearcoatMap,Te=B&&!!y.clearcoatNormalMap,Be=B&&!!y.clearcoatRoughnessMap,ze=J&&!!y.iridescenceMap,xe=J&&!!y.iridescenceThicknessMap,Ce=ie&&!!y.sheenColorMap,Je=ie&&!!y.sheenRoughnessMap,Ge=!!y.specularMap,Re=!!y.specularColorMap,nt=!!y.specularIntensityMap,X=me&&!!y.transmissionMap,_e=me&&!!y.thicknessMap,we=!!y.gradientMap,De=!!y.alphaMap,ve=y.alphaTest>0,he=!!y.alphaHash,Fe=!!y.extensions,tt=or;y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(tt=i.toneMapping);let Et={shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:be,defines:y.defines,customVertexShaderID:q,customFragmentShaderID:N,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:se,batchingColor:se&&I._colorsTexture!==null,instancing:oe,instancingColor:oe&&I.instanceColor!==null,instancingMorph:oe&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Zt,alphaToCoverage:!!y.alphaToCoverage,map:pe,matcap:Ee,envMap:F,envMapMode:F&&k.mapping,envMapCubeUVHeight:V,aoMap:ee,lightMap:ne,bumpMap:K,normalMap:Q,displacementMap:d&&fe,emissiveMap:de,normalMapObjectSpace:Q&&y.normalMapType===Tm,normalMapTangentSpace:Q&&y.normalMapType===Va,metalnessMap:ge,roughnessMap:Ke,anisotropy:Qe,anisotropyMap:ae,clearcoat:B,clearcoatMap:He,clearcoatNormalMap:Te,clearcoatRoughnessMap:Be,dispersion:P,iridescence:J,iridescenceMap:ze,iridescenceThicknessMap:xe,sheen:ie,sheenColorMap:Ce,sheenRoughnessMap:Je,specularMap:Ge,specularColorMap:Re,specularIntensityMap:nt,transmission:me,transmissionMap:X,thicknessMap:_e,gradientMap:we,opaque:y.transparent===!1&&y.blending===kr&&y.alphaToCoverage===!1,alphaMap:De,alphaTest:ve,alphaHash:he,combine:y.combine,mapUv:pe&&x(y.map.channel),aoMapUv:ee&&x(y.aoMap.channel),lightMapUv:ne&&x(y.lightMap.channel),bumpMapUv:K&&x(y.bumpMap.channel),normalMapUv:Q&&x(y.normalMap.channel),displacementMapUv:fe&&x(y.displacementMap.channel),emissiveMapUv:de&&x(y.emissiveMap.channel),metalnessMapUv:ge&&x(y.metalnessMap.channel),roughnessMapUv:Ke&&x(y.roughnessMap.channel),anisotropyMapUv:ae&&x(y.anisotropyMap.channel),clearcoatMapUv:He&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Te&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Je&&x(y.sheenRoughnessMap.channel),specularMapUv:Ge&&x(y.specularMap.channel),specularColorMapUv:Re&&x(y.specularColorMap.channel),specularIntensityMapUv:nt&&x(y.specularIntensityMap.channel),transmissionMapUv:X&&x(y.transmissionMap.channel),thicknessMapUv:_e&&x(y.thicknessMap.channel),alphaMapUv:De&&x(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Q||Qe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(pe||De),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:G,skinning:I.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:pe&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:de&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===rt,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function g(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let E in y.defines)M.push(E),M.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(S(M,y),_(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function _(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){let M=p[y.type],E;if(M){let C=Ai[M];E=_n.clone(C.uniforms)}else E=y.uniforms;return E}function T(y,M){let E;for(let C=0,I=u.length;C<I;C++){let U=u[C];if(U.cacheKey===M){E=U,++E.usedTimes;break}}return E===void 0&&(E=new aS(i,M,y,s),u.push(E)),E}function b(y){if(--y.usedTimes===0){let M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:T,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:A}}function uS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function hS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function og(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,f,p,x,m){let g=i[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:x,group:m},i[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=x,g.group=m),e++,g}function a(h,d,f,p,x,m){let g=o(h,d,f,p,x,m);f.transmission>0?n.push(g):f.transparent===!0?r.push(g):t.push(g)}function l(h,d,f,p,x,m){let g=o(h,d,f,p,x,m);f.transmission>0?n.unshift(g):f.transparent===!0?r.unshift(g):t.unshift(g)}function c(h,d){t.length>1&&t.sort(h||hS),n.length>1&&n.sort(d||sg),r.length>1&&r.sort(d||sg)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function dS(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new og,i.set(n,[o])):r>=s.length?(o=new og,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function fS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Me};break;case"SpotLight":t={position:new R,direction:new R,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function pS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mS=0;function gS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xS(i){let e=new fS,t=pS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let r=new R,s=new ke,o=new ke;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,S=0,_=0,v=0,T=0,b=0,w=0;c.sort(gS);for(let y=0,M=c.length;y<M;y++){let E=c[y],C=E.color,I=E.intensity,U=E.distance,L=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=C.r*I,h+=C.g*I,d+=C.b*I;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],I);w++}else if(E.isDirectionalLight){let O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let k=E.shadow,V=t.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=E.shadow.matrix,S++}n.directional[f]=O,f++}else if(E.isSpotLight){let O=e.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(C).multiplyScalar(I),O.distance=U,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[x]=O;let k=E.shadow;if(E.map&&(n.spotLightMap[T]=E.map,T++,k.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[x]=k.matrix,E.castShadow){let V=t.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=L,v++}x++}else if(E.isRectAreaLight){let O=e.get(E);O.color.copy(C).multiplyScalar(I),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=O,m++}else if(E.isPointLight){let O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){let k=E.shadow,V=t.get(E);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=L,n.pointShadowMatrix[p]=E.shadow.matrix,_++}n.point[p]=O,p++}else if(E.isHemisphereLight){let O=e.get(E);O.skyColor.copy(E.color).multiplyScalar(I),O.groundColor.copy(E.groundColor).multiplyScalar(I),n.hemi[g]=O,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==p||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==g||A.numDirectionalShadows!==S||A.numPointShadows!==_||A.numSpotShadows!==v||A.numSpotMaps!==T||A.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,A.directionalLength=f,A.pointLength=p,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=g,A.numDirectionalShadows=S,A.numPointShadows=_,A.numSpotShadows=v,A.numSpotMaps=T,A.numLightProbes=w,n.version=mS++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0,m=u.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){let _=c[g];if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function ag(i){let e=new xS(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vS(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new ag(i),e.set(r,[a])):s>=o.length?(a=new ag(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var _S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MS(i,e,t){let n=new Js,r=new ce,s=new ce,o=new xt,a=new rc({depthPacking:Sm}),l=new sc,c={},u=t.maxTextureSize,h={[li]:Jt,[Jt]:li,[rt]:rt},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:_S,fragmentShader:yS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Oe;p.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let g=this.type;this.render=function(b,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let y=i.getRenderTarget(),M=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),C=i.state;C.setBlending(pi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let I=g!==wi&&this.type===wi,U=g===wi&&this.type!==wi;for(let L=0,O=b.length;L<O;L++){let k=b[L],V=k.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let z=V.getFrameExtents();if(r.multiply(z),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,V.mapSize.y=s.y)),V.map===null||I===!0||U===!0){let Z=this.type!==wi?{minFilter:qt,magFilter:qt}:{};V.map!==null&&V.map.dispose(),V.map=new Gt(r.x,r.y,Z),V.map.texture.name=k.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let W=V.getViewportCount();for(let Z=0;Z<W;Z++){let ue=V.getViewport(Z);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),C.viewport(o),V.updateMatrices(k,Z),n=V.getFrustum(),v(w,A,V.camera,k,this.type)}V.isPointLightShadow!==!0&&this.type===wi&&S(V,A),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,E)};function S(b,w){let A=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gt(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,A,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,A,f,x,null)}function _(b,w,A,y){let M=null,E=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)M=E;else if(M=A.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let C=M.uuid,I=w.uuid,U=c[C];U===void 0&&(U={},c[C]=U);let L=U[I];L===void 0&&(L=M.clone(),U[I]=L,w.addEventListener("dispose",T)),M=L}if(M.visible=w.visible,M.wireframe=w.wireframe,y===wi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let C=i.properties.get(M);C.light=A}return M}function v(b,w,A,y,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===wi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);let I=e.update(b),U=b.material;if(Array.isArray(U)){let L=I.groups;for(let O=0,k=L.length;O<k;O++){let V=L[O],z=U[V.materialIndex];if(z&&z.visible){let W=_(b,z,y,M);b.onBeforeShadow(i,b,w,A,I,W,V),i.renderBufferDirect(A,null,I,W,b,V),b.onAfterShadow(i,b,w,A,I,W,V)}}}else if(U.visible){let L=_(b,U,y,M);b.onBeforeShadow(i,b,w,A,I,L,null),i.renderBufferDirect(A,null,I,L,b,null),b.onAfterShadow(i,b,w,A,I,L,null)}}let C=b.children;for(let I=0,U=C.length;I<U;I++)v(C[I],w,A,y,M)}function T(b){b.target.removeEventListener("dispose",T);for(let A in c){let y=c[A],M=b.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}var SS={[pc]:mc,[gc]:_c,[xc]:yc,[Gr]:vc,[mc]:pc,[_c]:gc,[yc]:xc,[vc]:Gr};function TS(i,e){function t(){let X=!1,_e=new xt,we=null,De=new xt(0,0,0,0);return{setMask:function(ve){we!==ve&&!X&&(i.colorMask(ve,ve,ve,ve),we=ve)},setLocked:function(ve){X=ve},setClear:function(ve,he,Fe,tt,Et){Et===!0&&(ve*=tt,he*=tt,Fe*=tt),_e.set(ve,he,Fe,tt),De.equals(_e)===!1&&(i.clearColor(ve,he,Fe,tt),De.copy(_e))},reset:function(){X=!1,we=null,De.set(-1,0,0,0)}}}function n(){let X=!1,_e=!1,we=null,De=null,ve=null;return{setReversed:function(he){if(_e!==he){let Fe=e.get("EXT_clip_control");he?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),_e=he;let tt=ve;ve=null,this.setClear(tt)}},getReversed:function(){return _e},setTest:function(he){he?H(i.DEPTH_TEST):G(i.DEPTH_TEST)},setMask:function(he){we!==he&&!X&&(i.depthMask(he),we=he)},setFunc:function(he){if(_e&&(he=SS[he]),De!==he){switch(he){case pc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case gc:i.depthFunc(i.LESS);break;case Gr:i.depthFunc(i.LEQUAL);break;case xc:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case _c:i.depthFunc(i.GREATER);break;case yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=he}},setLocked:function(he){X=he},setClear:function(he){ve!==he&&(_e&&(he=1-he),i.clearDepth(he),ve=he)},reset:function(){X=!1,we=null,De=null,ve=null,_e=!1}}}function r(){let X=!1,_e=null,we=null,De=null,ve=null,he=null,Fe=null,tt=null,Et=null;return{setTest:function(mt){X||(mt?H(i.STENCIL_TEST):G(i.STENCIL_TEST))},setMask:function(mt){_e!==mt&&!X&&(i.stencilMask(mt),_e=mt)},setFunc:function(mt,kn,Gn){(we!==mt||De!==kn||ve!==Gn)&&(i.stencilFunc(mt,kn,Gn),we=mt,De=kn,ve=Gn)},setOp:function(mt,kn,Gn){(he!==mt||Fe!==kn||tt!==Gn)&&(i.stencilOp(mt,kn,Gn),he=mt,Fe=kn,tt=Gn)},setLocked:function(mt){X=mt},setClear:function(mt){Et!==mt&&(i.clearStencil(mt),Et=mt)},reset:function(){X=!1,_e=null,we=null,De=null,ve=null,he=null,Fe=null,tt=null,Et=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,x=!1,m=null,g=null,S=null,_=null,v=null,T=null,b=null,w=new Me(0,0,0),A=0,y=!1,M=null,E=null,C=null,I=null,U=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,k=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=k>=2);let z=null,W={},Z=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),le=new xt().fromArray(Z),be=new xt().fromArray(ue);function q(X,_e,we,De){let ve=new Uint8Array(4),he=i.createTexture();i.bindTexture(X,he),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<we;Fe++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(_e+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return he}let N={};N[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),N[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),N[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(i.DEPTH_TEST),o.setFunc(Gr),K(!1),Q(jh),H(i.CULL_FACE),ee(pi);function H(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function G(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function oe(X,_e){return h[X]!==_e?(i.bindFramebuffer(X,_e),h[X]=_e,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_e),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function se(X,_e){let we=f,De=!1;if(X){we=d.get(_e),we===void 0&&(we=[],d.set(_e,we));let ve=X.textures;if(we.length!==ve.length||we[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Fe=ve.length;he<Fe;he++)we[he]=i.COLOR_ATTACHMENT0+he;we.length=ve.length,De=!0}}else we[0]!==i.BACK&&(we[0]=i.BACK,De=!0);De&&i.drawBuffers(we)}function pe(X){return p!==X?(i.useProgram(X),p=X,!0):!1}let Ee={[vr]:i.FUNC_ADD,[$p]:i.FUNC_SUBTRACT,[em]:i.FUNC_REVERSE_SUBTRACT};Ee[tm]=i.MIN,Ee[nm]=i.MAX;let F={[im]:i.ZERO,[rm]:i.ONE,[sm]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[hm]:i.SRC_ALPHA_SATURATE,[cm]:i.DST_COLOR,[am]:i.DST_ALPHA,[om]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[um]:i.ONE_MINUS_DST_COLOR,[lm]:i.ONE_MINUS_DST_ALPHA,[dm]:i.CONSTANT_COLOR,[fm]:i.ONE_MINUS_CONSTANT_COLOR,[pm]:i.CONSTANT_ALPHA,[mm]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(X,_e,we,De,ve,he,Fe,tt,Et,mt){if(X===pi){x===!0&&(G(i.BLEND),x=!1);return}if(x===!1&&(H(i.BLEND),x=!0),X!==Qp){if(X!==m||mt!==y){if((g!==vr||v!==vr)&&(i.blendEquation(i.FUNC_ADD),g=vr,v=vr),mt)switch(X){case kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ts:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}S=null,_=null,T=null,b=null,w.set(0,0,0),A=0,m=X,y=mt}return}ve=ve||_e,he=he||we,Fe=Fe||De,(_e!==g||ve!==v)&&(i.blendEquationSeparate(Ee[_e],Ee[ve]),g=_e,v=ve),(we!==S||De!==_||he!==T||Fe!==b)&&(i.blendFuncSeparate(F[we],F[De],F[he],F[Fe]),S=we,_=De,T=he,b=Fe),(tt.equals(w)===!1||Et!==A)&&(i.blendColor(tt.r,tt.g,tt.b,Et),w.copy(tt),A=Et),m=X,y=!1}function ne(X,_e){X.side===rt?G(i.CULL_FACE):H(i.CULL_FACE);let we=X.side===Jt;_e&&(we=!we),K(we),X.blending===kr&&X.transparent===!1?ee(pi):ee(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);let De=X.stencilWrite;a.setTest(De),De&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),de(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):G(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(X){M!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),M=X)}function Q(X){X!==Kp?(H(i.CULL_FACE),X!==E&&(X===jh?i.cullFace(i.BACK):X===Jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):G(i.CULL_FACE),E=X}function fe(X){X!==C&&(O&&i.lineWidth(X),C=X)}function de(X,_e,we){X?(H(i.POLYGON_OFFSET_FILL),(I!==_e||U!==we)&&(i.polygonOffset(_e,we),I=_e,U=we)):G(i.POLYGON_OFFSET_FILL)}function ge(X){X?H(i.SCISSOR_TEST):G(i.SCISSOR_TEST)}function Ke(X){X===void 0&&(X=i.TEXTURE0+L-1),z!==X&&(i.activeTexture(X),z=X)}function Qe(X,_e,we){we===void 0&&(z===null?we=i.TEXTURE0+L-1:we=z);let De=W[we];De===void 0&&(De={type:void 0,texture:void 0},W[we]=De),(De.type!==X||De.texture!==_e)&&(z!==we&&(i.activeTexture(we),z=we),i.bindTexture(X,_e||N[X]),De.type=X,De.texture=_e)}function B(){let X=W[z];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function P(){try{i.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ie(){try{i.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{i.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{i.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{i.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{i.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{i.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{i.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{i.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(X){le.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),le.copy(X))}function Je(X){be.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),be.copy(X))}function Ge(X,_e){let we=c.get(_e);we===void 0&&(we=new WeakMap,c.set(_e,we));let De=we.get(X);De===void 0&&(De=i.getUniformBlockIndex(_e,X.name),we.set(X,De))}function Re(X,_e){let De=c.get(_e).get(X);l.get(_e)!==De&&(i.uniformBlockBinding(_e,De,X.__bindingPointIndex),l.set(_e,De))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},z=null,W={},h={},d=new WeakMap,f=[],p=null,x=!1,m=null,g=null,S=null,_=null,v=null,T=null,b=null,w=new Me(0,0,0),A=0,y=!1,M=null,E=null,C=null,I=null,U=null,le.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:H,disable:G,bindFramebuffer:oe,drawBuffers:se,useProgram:pe,setBlending:ee,setMaterial:ne,setFlipSided:K,setCullFace:Q,setLineWidth:fe,setPolygonOffset:de,setScissorTest:ge,activeTexture:Ke,bindTexture:Qe,unbindTexture:B,compressedTexImage2D:P,compressedTexImage3D:J,texImage2D:ze,texImage3D:xe,updateUBOMapping:Ge,uniformBlockBinding:Re,texStorage2D:Te,texStorage3D:Be,texSubImage2D:ie,texSubImage3D:me,compressedTexSubImage2D:ae,compressedTexSubImage3D:He,scissor:Ce,viewport:Je,reset:nt}}function bS(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(B,P){return f?new OffscreenCanvas(B,P):Gs("canvas")}function x(B,P,J){let ie=1,me=Qe(B);if((me.width>J||me.height>J)&&(ie=J/Math.max(me.width,me.height)),ie<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let ae=Math.floor(ie*me.width),He=Math.floor(ie*me.height);h===void 0&&(h=p(ae,He));let Te=P?p(ae,He):h;return Te.width=ae,Te.height=He,Te.getContext("2d").drawImage(B,0,0,ae,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ae+"x"+He+")."),Te}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),B;return B}function m(B){return B.generateMipmaps}function g(B){i.generateMipmap(B)}function S(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(B,P,J,ie,me=!1){if(B!==null){if(i[B]!==void 0)return i[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ae=P;if(P===i.RED&&(J===i.FLOAT&&(ae=i.R32F),J===i.HALF_FLOAT&&(ae=i.R16F),J===i.UNSIGNED_BYTE&&(ae=i.R8)),P===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.R8UI),J===i.UNSIGNED_SHORT&&(ae=i.R16UI),J===i.UNSIGNED_INT&&(ae=i.R32UI),J===i.BYTE&&(ae=i.R8I),J===i.SHORT&&(ae=i.R16I),J===i.INT&&(ae=i.R32I)),P===i.RG&&(J===i.FLOAT&&(ae=i.RG32F),J===i.HALF_FLOAT&&(ae=i.RG16F),J===i.UNSIGNED_BYTE&&(ae=i.RG8)),P===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RG8UI),J===i.UNSIGNED_SHORT&&(ae=i.RG16UI),J===i.UNSIGNED_INT&&(ae=i.RG32UI),J===i.BYTE&&(ae=i.RG8I),J===i.SHORT&&(ae=i.RG16I),J===i.INT&&(ae=i.RG32I)),P===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),J===i.UNSIGNED_INT&&(ae=i.RGB32UI),J===i.BYTE&&(ae=i.RGB8I),J===i.SHORT&&(ae=i.RGB16I),J===i.INT&&(ae=i.RGB32I)),P===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),J===i.UNSIGNED_INT&&(ae=i.RGBA32UI),J===i.BYTE&&(ae=i.RGBA8I),J===i.SHORT&&(ae=i.RGBA16I),J===i.INT&&(ae=i.RGBA32I)),P===i.RGB&&(J===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),P===i.RGBA){let He=me?ea:lt.getTransfer(ie);J===i.FLOAT&&(ae=i.RGBA32F),J===i.HALF_FLOAT&&(ae=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ae=He===_t?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(B,P){let J;return B?P===null||P===Tr||P===lo?J=i.DEPTH24_STENCIL8:P===fn?J=i.DEPTH32F_STENCIL8:P===ao&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Tr||P===lo?J=i.DEPTH_COMPONENT24:P===fn?J=i.DEPTH_COMPONENT32F:P===ao&&(J=i.DEPTH_COMPONENT16),J}function T(B,P){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==qt&&B.minFilter!==It?Math.log2(Math.max(P.width,P.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?P.mipmaps.length:1}function b(B){let P=B.target;P.removeEventListener("dispose",b),A(P),P.isVideoTexture&&u.delete(P)}function w(B){let P=B.target;P.removeEventListener("dispose",w),M(P)}function A(B){let P=n.get(B);if(P.__webglInit===void 0)return;let J=B.source,ie=d.get(J);if(ie){let me=ie[P.__cacheKey];me.usedTimes--,me.usedTimes===0&&y(B),Object.keys(ie).length===0&&d.delete(J)}n.remove(B)}function y(B){let P=n.get(B);i.deleteTexture(P.__webglTexture);let J=B.source,ie=d.get(J);delete ie[P.__cacheKey],o.memory.textures--}function M(B){let P=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(P.__webglFramebuffer[ie]))for(let me=0;me<P.__webglFramebuffer[ie].length;me++)i.deleteFramebuffer(P.__webglFramebuffer[ie][me]);else i.deleteFramebuffer(P.__webglFramebuffer[ie]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[ie])}else{if(Array.isArray(P.__webglFramebuffer))for(let ie=0;ie<P.__webglFramebuffer.length;ie++)i.deleteFramebuffer(P.__webglFramebuffer[ie]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ie=0;ie<P.__webglColorRenderbuffer.length;ie++)P.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[ie]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let J=B.textures;for(let ie=0,me=J.length;ie<me;ie++){let ae=n.get(J[ie]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(J[ie])}n.remove(B)}let E=0;function C(){E=0}function I(){let B=E;return B>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+r.maxTextures),E+=1,B}function U(B){let P=[];return P.push(B.wrapS),P.push(B.wrapT),P.push(B.wrapR||0),P.push(B.magFilter),P.push(B.minFilter),P.push(B.anisotropy),P.push(B.internalFormat),P.push(B.format),P.push(B.type),P.push(B.generateMipmaps),P.push(B.premultiplyAlpha),P.push(B.flipY),P.push(B.unpackAlignment),P.push(B.colorSpace),P.join()}function L(B,P){let J=n.get(B);if(B.isVideoTexture&&ge(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&J.__version!==B.version){let ie=B.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(J,B,P);return}}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+P)}function O(B,P){let J=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){N(J,B,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+P)}function k(B,P){let J=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){N(J,B,P);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+P)}function V(B,P){let J=n.get(B);if(B.version>0&&J.__version!==B.version){H(J,B,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+P)}let z={[Ft]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Vs]:i.MIRRORED_REPEAT},W={[qt]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[rs]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Z={[bm]:i.NEVER,[Pm]:i.ALWAYS,[Em]:i.LESS,[ad]:i.LEQUAL,[wm]:i.EQUAL,[Cm]:i.GEQUAL,[Am]:i.GREATER,[Rm]:i.NOTEQUAL};function ue(B,P){if(P.type===fn&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===It||P.magFilter===oo||P.magFilter===rs||P.magFilter===Kn||P.minFilter===It||P.minFilter===oo||P.minFilter===rs||P.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,z[P.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,z[P.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,z[P.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,W[P.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,W[P.minFilter]),P.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,Z[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===qt||P.minFilter!==rs&&P.minFilter!==Kn||P.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function le(B,P){let J=!1;B.__webglInit===void 0&&(B.__webglInit=!0,P.addEventListener("dispose",b));let ie=P.source,me=d.get(ie);me===void 0&&(me={},d.set(ie,me));let ae=U(P);if(ae!==B.__cacheKey){me[ae]===void 0&&(me[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),me[ae].usedTimes++;let He=me[B.__cacheKey];He!==void 0&&(me[B.__cacheKey].usedTimes--,He.usedTimes===0&&y(P)),B.__cacheKey=ae,B.__webglTexture=me[ae].texture}return J}function be(B,P,J){return Math.floor(Math.floor(B/J)/P)}function q(B,P,J,ie){let ae=B.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,J,ie,P.data);else{ae.sort((xe,Ce)=>xe.start-Ce.start);let He=0;for(let xe=1;xe<ae.length;xe++){let Ce=ae[He],Je=ae[xe],Ge=Ce.start+Ce.count,Re=be(Je.start,P.width,4),nt=be(Ce.start,P.width,4);Je.start<=Ge+1&&Re===nt&&be(Je.start+Je.count-1,P.width,4)===Re?Ce.count=Math.max(Ce.count,Je.start+Je.count-Ce.start):(++He,ae[He]=Je)}ae.length=He+1;let Te=i.getParameter(i.UNPACK_ROW_LENGTH),Be=i.getParameter(i.UNPACK_SKIP_PIXELS),ze=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let xe=0,Ce=ae.length;xe<Ce;xe++){let Je=ae[xe],Ge=Math.floor(Je.start/4),Re=Math.ceil(Je.count/4),nt=Ge%P.width,X=Math.floor(Ge/P.width),_e=Re,we=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,nt,X,_e,we,J,ie,P.data)}B.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Te),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,ze)}}function N(B,P,J){let ie=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ie=i.TEXTURE_3D);let me=le(B,P),ae=P.source;t.bindTexture(ie,B.__webglTexture,i.TEXTURE0+J);let He=n.get(ae);if(ae.version!==He.__version||me===!0){t.activeTexture(i.TEXTURE0+J);let Te=lt.getPrimaries(lt.workingColorSpace),Be=P.colorSpace===ar?null:lt.getPrimaries(P.colorSpace),ze=P.colorSpace===ar||Te===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let xe=x(P.image,!1,r.maxTextureSize);xe=Ke(P,xe);let Ce=s.convert(P.format,P.colorSpace),Je=s.convert(P.type),Ge=_(P.internalFormat,Ce,Je,P.colorSpace,P.isVideoTexture);ue(ie,P);let Re,nt=P.mipmaps,X=P.isVideoTexture!==!0,_e=He.__version===void 0||me===!0,we=ae.dataReady,De=T(P,xe);if(P.isDepthTexture)Ge=v(P.format===co,P.type),_e&&(X?t.texStorage2D(i.TEXTURE_2D,1,Ge,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Ge,xe.width,xe.height,0,Ce,Je,null));else if(P.isDataTexture)if(nt.length>0){X&&_e&&t.texStorage2D(i.TEXTURE_2D,De,Ge,nt[0].width,nt[0].height);for(let ve=0,he=nt.length;ve<he;ve++)Re=nt[ve],X?we&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Re.width,Re.height,Ce,Je,Re.data):t.texImage2D(i.TEXTURE_2D,ve,Ge,Re.width,Re.height,0,Ce,Je,Re.data);P.generateMipmaps=!1}else X?(_e&&t.texStorage2D(i.TEXTURE_2D,De,Ge,xe.width,xe.height),we&&q(P,xe,Ce,Je)):t.texImage2D(i.TEXTURE_2D,0,Ge,xe.width,xe.height,0,Ce,Je,xe.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){X&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ge,nt[0].width,nt[0].height,xe.depth);for(let ve=0,he=nt.length;ve<he;ve++)if(Re=nt[ve],P.format!==Bn)if(Ce!==null)if(X){if(we)if(P.layerUpdates.size>0){let Fe=gd(Re.width,Re.height,P.format,P.type);for(let tt of P.layerUpdates){let Et=Re.data.subarray(tt*Fe/Re.data.BYTES_PER_ELEMENT,(tt+1)*Fe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,tt,Re.width,Re.height,1,Ce,Et)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,xe.depth,Ce,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Ge,Re.width,Re.height,xe.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,xe.depth,Ce,Je,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Ge,Re.width,Re.height,xe.depth,0,Ce,Je,Re.data)}else{X&&_e&&t.texStorage2D(i.TEXTURE_2D,De,Ge,nt[0].width,nt[0].height);for(let ve=0,he=nt.length;ve<he;ve++)Re=nt[ve],P.format!==Bn?Ce!==null?X?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Re.width,Re.height,Ce,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Ge,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?we&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Re.width,Re.height,Ce,Je,Re.data):t.texImage2D(i.TEXTURE_2D,ve,Ge,Re.width,Re.height,0,Ce,Je,Re.data)}else if(P.isDataArrayTexture)if(X){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ge,xe.width,xe.height,xe.depth),we)if(P.layerUpdates.size>0){let ve=gd(xe.width,xe.height,P.format,P.type);for(let he of P.layerUpdates){let Fe=xe.data.subarray(he*ve/xe.data.BYTES_PER_ELEMENT,(he+1)*ve/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,xe.width,xe.height,1,Ce,Je,Fe)}P.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ce,Je,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,xe.width,xe.height,xe.depth,0,Ce,Je,xe.data);else if(P.isData3DTexture)X?(_e&&t.texStorage3D(i.TEXTURE_3D,De,Ge,xe.width,xe.height,xe.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ce,Je,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,xe.width,xe.height,xe.depth,0,Ce,Je,xe.data);else if(P.isFramebufferTexture){if(_e)if(X)t.texStorage2D(i.TEXTURE_2D,De,Ge,xe.width,xe.height);else{let ve=xe.width,he=xe.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Ge,ve,he,0,Ce,Je,null),ve>>=1,he>>=1}}else if(nt.length>0){if(X&&_e){let ve=Qe(nt[0]);t.texStorage2D(i.TEXTURE_2D,De,Ge,ve.width,ve.height)}for(let ve=0,he=nt.length;ve<he;ve++)Re=nt[ve],X?we&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ce,Je,Re):t.texImage2D(i.TEXTURE_2D,ve,Ge,Ce,Je,Re);P.generateMipmaps=!1}else if(X){if(_e){let ve=Qe(xe);t.texStorage2D(i.TEXTURE_2D,De,Ge,ve.width,ve.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Je,xe)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Ce,Je,xe);m(P)&&g(ie),He.__version=ae.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function H(B,P,J){if(P.image.length!==6)return;let ie=le(B,P),me=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+J);let ae=n.get(me);if(me.version!==ae.__version||ie===!0){t.activeTexture(i.TEXTURE0+J);let He=lt.getPrimaries(lt.workingColorSpace),Te=P.colorSpace===ar?null:lt.getPrimaries(P.colorSpace),Be=P.colorSpace===ar||He===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ze=P.isCompressedTexture||P.image[0].isCompressedTexture,xe=P.image[0]&&P.image[0].isDataTexture,Ce=[];for(let he=0;he<6;he++)!ze&&!xe?Ce[he]=x(P.image[he],!0,r.maxCubemapSize):Ce[he]=xe?P.image[he].image:P.image[he],Ce[he]=Ke(P,Ce[he]);let Je=Ce[0],Ge=s.convert(P.format,P.colorSpace),Re=s.convert(P.type),nt=_(P.internalFormat,Ge,Re,P.colorSpace),X=P.isVideoTexture!==!0,_e=ae.__version===void 0||ie===!0,we=me.dataReady,De=T(P,Je);ue(i.TEXTURE_CUBE_MAP,P);let ve;if(ze){X&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,nt,Je.width,Je.height);for(let he=0;he<6;he++){ve=Ce[he].mipmaps;for(let Fe=0;Fe<ve.length;Fe++){let tt=ve[Fe];P.format!==Bn?Ge!==null?X?we&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe,0,0,tt.width,tt.height,Ge,tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe,nt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe,0,0,tt.width,tt.height,Ge,Re,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe,nt,tt.width,tt.height,0,Ge,Re,tt.data)}}}else{if(ve=P.mipmaps,X&&_e){ve.length>0&&De++;let he=Qe(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,nt,he.width,he.height)}for(let he=0;he<6;he++)if(xe){X?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce[he].width,Ce[he].height,Ge,Re,Ce[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,nt,Ce[he].width,Ce[he].height,0,Ge,Re,Ce[he].data);for(let Fe=0;Fe<ve.length;Fe++){let Et=ve[Fe].image[he].image;X?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe+1,0,0,Et.width,Et.height,Ge,Re,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe+1,nt,Et.width,Et.height,0,Ge,Re,Et.data)}}else{X?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ge,Re,Ce[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,nt,Ge,Re,Ce[he]);for(let Fe=0;Fe<ve.length;Fe++){let tt=ve[Fe];X?we&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe+1,0,0,Ge,Re,tt.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Fe+1,nt,Ge,Re,tt.image[he])}}}m(P)&&g(i.TEXTURE_CUBE_MAP),ae.__version=me.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function G(B,P,J,ie,me,ae){let He=s.convert(J.format,J.colorSpace),Te=s.convert(J.type),Be=_(J.internalFormat,He,Te,J.colorSpace),ze=n.get(P),xe=n.get(J);if(xe.__renderTarget=P,!ze.__hasExternalTextures){let Ce=Math.max(1,P.width>>ae),Je=Math.max(1,P.height>>ae);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,ae,Be,Ce,Je,P.depth,0,He,Te,null):t.texImage2D(me,ae,Be,Ce,Je,0,He,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),de(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,me,xe.__webglTexture,0,fe(P)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,me,xe.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(B,P,J){if(i.bindRenderbuffer(i.RENDERBUFFER,B),P.depthBuffer){let ie=P.depthTexture,me=ie&&ie.isDepthTexture?ie.type:null,ae=v(P.stencilBuffer,me),He=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=fe(P);de(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,ae,P.width,P.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ae,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,ae,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,He,i.RENDERBUFFER,B)}else{let ie=P.textures;for(let me=0;me<ie.length;me++){let ae=ie[me],He=s.convert(ae.format,ae.colorSpace),Te=s.convert(ae.type),Be=_(ae.internalFormat,He,Te,ae.colorSpace),ze=fe(P);J&&de(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Be,P.width,P.height):de(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,Be,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Be,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(B,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ie=n.get(P.depthTexture);ie.__renderTarget=P,(!ie.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),L(P.depthTexture,0);let me=ie.__webglTexture,ae=fe(P);if(P.depthTexture.format===ks)de(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(P.depthTexture.format===co)de(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function pe(B){let P=n.get(B),J=B.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==B.depthTexture){let ie=B.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ie){let me=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ie.removeEventListener("dispose",me)};ie.addEventListener("dispose",me),P.__depthDisposeCallback=me}P.__boundDepthTexture=ie}if(B.depthTexture&&!P.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");let ie=B.texture.mipmaps;ie&&ie.length>0?se(P.__webglFramebuffer[0],B):se(P.__webglFramebuffer,B)}else if(J){P.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[ie]),P.__webglDepthbuffer[ie]===void 0)P.__webglDepthbuffer[ie]=i.createRenderbuffer(),oe(P.__webglDepthbuffer[ie],B,!1);else{let me=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=P.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,ae)}}else{let ie=B.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),oe(P.__webglDepthbuffer,B,!1);else{let me=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(B,P,J){let ie=n.get(B);P!==void 0&&G(ie.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&pe(B)}function F(B){let P=B.texture,J=n.get(B),ie=n.get(P);B.addEventListener("dispose",w);let me=B.textures,ae=B.isWebGLCubeRenderTarget===!0,He=me.length>1;if(He||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=P.version,o.memory.textures++),ae){J.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer[Te]=[];for(let Be=0;Be<P.mipmaps.length;Be++)J.__webglFramebuffer[Te][Be]=i.createFramebuffer()}else J.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer=[];for(let Te=0;Te<P.mipmaps.length;Te++)J.__webglFramebuffer[Te]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(He)for(let Te=0,Be=me.length;Te<Be;Te++){let ze=n.get(me[Te]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&de(B)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){let Be=me[Te];J.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Te]);let ze=s.convert(Be.format,Be.colorSpace),xe=s.convert(Be.type),Ce=_(Be.internalFormat,ze,xe,Be.colorSpace,B.isXRRenderTarget===!0),Je=fe(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Ce,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,J.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(J.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),ue(i.TEXTURE_CUBE_MAP,P);for(let Te=0;Te<6;Te++)if(P.mipmaps&&P.mipmaps.length>0)for(let Be=0;Be<P.mipmaps.length;Be++)G(J.__webglFramebuffer[Te][Be],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Be);else G(J.__webglFramebuffer[Te],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(P)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Te=0,Be=me.length;Te<Be;Te++){let ze=me[Te],xe=n.get(ze),Ce=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ce=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,xe.__webglTexture),ue(Ce,ze),G(J.__webglFramebuffer,B,ze,i.COLOR_ATTACHMENT0+Te,Ce,0),m(ze)&&g(Ce)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Te=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,ie.__webglTexture),ue(Te,P),P.mipmaps&&P.mipmaps.length>0)for(let Be=0;Be<P.mipmaps.length;Be++)G(J.__webglFramebuffer[Be],B,P,i.COLOR_ATTACHMENT0,Te,Be);else G(J.__webglFramebuffer,B,P,i.COLOR_ATTACHMENT0,Te,0);m(P)&&g(Te),t.unbindTexture()}B.depthBuffer&&pe(B)}function ee(B){let P=B.textures;for(let J=0,ie=P.length;J<ie;J++){let me=P[J];if(m(me)){let ae=S(B),He=n.get(me).__webglTexture;t.bindTexture(ae,He),g(ae),t.unbindTexture()}}}let ne=[],K=[];function Q(B){if(B.samples>0){if(de(B)===!1){let P=B.textures,J=B.width,ie=B.height,me=i.COLOR_BUFFER_BIT,ae=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=n.get(B),Te=P.length>1;if(Te)for(let ze=0;ze<P.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);let Be=B.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let ze=0;ze<P.length;ze++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,He.__webglColorRenderbuffer[ze]);let xe=n.get(P[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,J,ie,0,0,J,ie,me,i.NEAREST),l===!0&&(ne.length=0,K.length=0,ne.push(i.COLOR_ATTACHMENT0+ze),B.depthBuffer&&B.resolveDepthBuffer===!1&&(ne.push(ae),K.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let ze=0;ze<P.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,He.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,He.__webglColorRenderbuffer[ze]);let xe=n.get(P[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,He.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){let P=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function fe(B){return Math.min(r.maxSamples,B.samples)}function de(B){let P=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function ge(B){let P=o.render.frame;u.get(B)!==P&&(u.set(B,P),B.update())}function Ke(B,P){let J=B.colorSpace,ie=B.format,me=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||J!==Zt&&J!==ar&&(lt.getTransfer(J)===_t?(ie!==Bn||me!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),P}function Qe(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=C,this.setTexture2D=L,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=Ee,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=G,this.useMultisampledRTT=de}function ES(i,e){function t(n,r=ar){let s,o=lt.getTransfer(r);if(n===mi)return i.UNSIGNED_BYTE;if(n===Pc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ic)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===id)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ed)return i.BYTE;if(n===td)return i.SHORT;if(n===ao)return i.UNSIGNED_SHORT;if(n===Cc)return i.INT;if(n===Tr)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Dt)return i.HALF_FLOAT;if(n===rd)return i.ALPHA;if(n===sd)return i.RGB;if(n===Bn)return i.RGBA;if(n===ks)return i.DEPTH_COMPONENT;if(n===co)return i.DEPTH_STENCIL;if(n===Lc)return i.RED;if(n===Dc)return i.RED_INTEGER;if(n===od)return i.RG;if(n===Uc)return i.RG_INTEGER;if(n===Nc)return i.RGBA_INTEGER;if(n===Fa||n===Ba||n===za||n===Ha)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Fc||n===Bc||n===zc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hc||n===Vc||n===kc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hc||n===Vc)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===jc||n===Zc||n===Kc||n===Jc||n===Qc||n===$c||n===eu||n===tu||n===nu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$c)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===iu||n===ru||n===su)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===iu)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ru)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===su)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ou||n===au||n===lu||n===cu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ou)return s.COMPRESSED_RED_RGTC1_EXT;if(n===au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var wS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Cd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new da(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bt({vertexShader:wS,fragmentShader:AS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pd=class extends Si{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Cd,g={},S=t.getContextAttributes(),_=null,v=null,T=[],b=[],w=new ce,A=null,y=new Xt;y.viewport=new xt;let M=new Xt;M.viewport=new xt;let E=[y,M],C=new uc,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let H=T[N];return H===void 0&&(H=new js,T[N]=H),H.getTargetRaySpace()},this.getControllerGrip=function(N){let H=T[N];return H===void 0&&(H=new js,T[N]=H),H.getGripSpace()},this.getHand=function(N){let H=T[N];return H===void 0&&(H=new js,T[N]=H),H.getHandSpace()};function L(N){let H=b.indexOf(N.inputSource);if(H===-1)return;let G=T[H];G!==void 0&&(G.update(N.inputSource,N.frame,c||o),G.dispatchEvent({type:N.type,data:N.inputSource}))}function O(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",k);for(let N=0;N<T.length;N++){let H=b[N];H!==null&&(b[N]=null,T[N].disconnect(H))}I=null,U=null,m.reset();for(let N in g)delete g[N];e.setRenderTarget(_),f=null,d=null,h=null,r=null,v=null,q.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",O),r.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,oe=null,se=null;S.depth&&(se=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=S.stencil?co:ks,oe=S.stencil?lo:Tr);let pe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Gt(d.textureWidth,d.textureHeight,{format:Bn,type:mi,depthTexture:new ha(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let G={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Gt(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),q.setContext(r),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(N){for(let H=0;H<N.removed.length;H++){let G=N.removed[H],oe=b.indexOf(G);oe>=0&&(b[oe]=null,T[oe].disconnect(G))}for(let H=0;H<N.added.length;H++){let G=N.added[H],oe=b.indexOf(G);if(oe===-1){for(let pe=0;pe<T.length;pe++)if(pe>=b.length){b.push(G),oe=pe;break}else if(b[pe]===null){b[pe]=G,oe=pe;break}if(oe===-1)break}let se=T[oe];se&&se.connect(G)}}let V=new R,z=new R;function W(N,H,G){V.setFromMatrixPosition(H.matrixWorld),z.setFromMatrixPosition(G.matrixWorld);let oe=V.distanceTo(z),se=H.projectionMatrix.elements,pe=G.projectionMatrix.elements,Ee=se[14]/(se[10]-1),F=se[14]/(se[10]+1),ee=(se[9]+1)/se[5],ne=(se[9]-1)/se[5],K=(se[8]-1)/se[0],Q=(pe[8]+1)/pe[0],fe=Ee*K,de=Ee*Q,ge=oe/(-K+Q),Ke=ge*-K;if(H.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ke),N.translateZ(ge),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),se[10]===-1)N.projectionMatrix.copy(H.projectionMatrix),N.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let Qe=Ee+ge,B=F+ge,P=fe-Ke,J=de+(oe-Ke),ie=ee*F/B*Qe,me=ne*F/B*Qe;N.projectionMatrix.makePerspective(P,J,ie,me,Qe,B),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function Z(N,H){H===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(H.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;let H=N.near,G=N.far;m.texture!==null&&(m.depthNear>0&&(H=m.depthNear),m.depthFar>0&&(G=m.depthFar)),C.near=M.near=y.near=H,C.far=M.far=y.far=G,(I!==C.near||U!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,U=C.far),C.layers.mask=N.layers.mask|6,y.layers.mask=C.layers.mask&3,M.layers.mask=C.layers.mask&5;let oe=N.parent,se=C.cameras;Z(C,oe);for(let pe=0;pe<se.length;pe++)Z(se[pe],oe);se.length===2?W(C,y,M):C.projectionMatrix.copy(y.projectionMatrix),ue(N,C,oe)};function ue(N,H,G){G===null?N.matrix.copy(H.matrixWorld):(N.matrix.copy(G.matrixWorld),N.matrix.invert(),N.matrix.multiply(H.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(H.projectionMatrix),N.projectionMatrixInverse.copy(H.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=qr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(N){return g[N]};let le=null;function be(N,H){if(u=H.getViewerPose(c||o),p=H,u!==null){let G=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let oe=!1;G.length!==C.cameras.length&&(C.cameras.length=0,oe=!0);for(let F=0;F<G.length;F++){let ee=G[F],ne=null;if(f!==null)ne=f.getViewport(ee);else{let Q=h.getViewSubImage(d,ee);ne=Q.viewport,F===0&&(e.setRenderTargetTextures(v,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(v))}let K=E[F];K===void 0&&(K=new Xt,K.layers.enable(F),K.viewport=new xt,E[F]=K),K.matrix.fromArray(ee.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ee.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(ne.x,ne.y,ne.width,ne.height),F===0&&(C.matrix.copy(K.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),oe===!0&&C.cameras.push(K)}let se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let F=h.getDepthInformation(G[0]);F&&F.isValid&&F.texture&&m.init(F,r.renderState)}if(se&&se.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let F=0;F<G.length;F++){let ee=G[F].camera;if(ee){let ne=g[ee];ne||(ne=new da,g[ee]=ne);let K=h.getCameraImage(ee);ne.sourceTexture=K}}}}for(let G=0;G<T.length;G++){let oe=b[G],se=T[G];oe!==null&&se!==void 0&&se.update(oe,H,c||o)}le&&le(N,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),p=null}let q=new lg;q.setAnimationLoop(be),this.setAnimationLoop=function(N){le=N},this.dispose=function(){}}},ls=new nn,RS=new ke;function CS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,dd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,S,_,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Jt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Jt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=e.get(g),_=S.envMap,v=S.envMapRotation;_&&(m.envMap.value=_,ls.copy(v),ls.x*=-1,ls.y*=-1,ls.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(RS.makeRotationFromEuler(ls)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=_*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let S=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function PS(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){let v=_.program;n.uniformBlockBinding(S,v)}function c(S,_){let v=r[S.id];v===void 0&&(p(S),v=u(S),r[S.id]=v,S.addEventListener("dispose",m));let T=_.program;n.updateUBOMapping(S,T);let b=e.render.frame;s[S.id]!==b&&(d(S),s[S.id]=b)}function u(S){let _=h();S.__bindingPointIndex=_;let v=i.createBuffer(),T=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let _=r[S.id],v=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,w=v.length;b<w;b++){let A=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,M=A.length;y<M;y++){let E=A[y];if(f(E,b,y,T)===!0){let C=E.__offset,I=Array.isArray(E.value)?E.value:[E.value],U=0;for(let L=0;L<I.length;L++){let O=I[L],k=x(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,C+U,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,U),U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,_,v,T){let b=S.value,w=_+"_"+v;if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:T[w]=b.clone(),!0;{let A=T[w];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return T[w]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function p(S){let _=S.uniforms,v=0,T=16;for(let w=0,A=_.length;w<A;w++){let y=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,E=y.length;M<E;M++){let C=y[M],I=Array.isArray(C.value)?C.value:[C.value];for(let U=0,L=I.length;U<L;U++){let O=I[U],k=x(O),V=v%T,z=V%k.boundary,W=V+z;v+=z,W!==0&&T-W<k.storage&&(v+=T-W),C.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=v,v+=k.storage}}}let b=v%T;return b>0&&(v+=T-b),S.__size=v,S.__cache={},this}function x(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){let _=S.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function g(){for(let S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}var xu=class{constructor(e={}){let{canvas:t=Im(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,S=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,T=!1;this._outputColorSpace=yt;let b=0,w=0,A=null,y=-1,M=null,E=new xt,C=new xt,I=null,U=new Me(0),L=0,O=t.width,k=t.height,V=1,z=null,W=null,Z=new xt(0,0,O,k),ue=new xt(0,0,O,k),le=!1,be=new Js,q=!1,N=!1,H=new ke,G=new R,oe=new xt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function Ee(){return A===null?V:1}let F=n;function ee(D,Y){return t.getContext(D,Y)}try{let D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",ve,!1),F===null){let Y="webgl2";if(F=ee(Y,D),F===null)throw ee(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ne,K,Q,fe,de,ge,Ke,Qe,B,P,J,ie,me,ae,He,Te,Be,ze,xe,Ce,Je,Ge,Re,nt;function X(){ne=new jM(F),ne.init(),Ge=new ES(F,ne),K=new VM(F,ne,e,Ge),Q=new TS(F,ne),K.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),fe=new JM(F),de=new uS,ge=new bS(F,ne,Q,de,K,Ge,fe),Ke=new GM(v),Qe=new YM(v),B=new i_(F),Re=new zM(F,B),P=new ZM(F,B,fe,Re),J=new $M(F,P,B,fe),xe=new QM(F,K,ge),Te=new kM(de),ie=new cS(v,Ke,Qe,ne,K,Re,Te),me=new CS(v,de),ae=new dS,He=new vS(ne),ze=new BM(v,Ke,Qe,Q,J,f,l),Be=new MS(v,J,K),nt=new PS(F,fe,K,Q),Ce=new HM(F,ne,fe),Je=new KM(F,ne,fe),fe.programs=ie.programs,v.capabilities=K,v.extensions=ne,v.properties=de,v.renderLists=ae,v.shadowMap=Be,v.state=Q,v.info=fe}X();let _e=new Pd(v,F);this.xr=_e,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let D=ne.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=ne.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(D){D!==void 0&&(V=D,this.setSize(O,k,!1))},this.getSize=function(D){return D.set(O,k)},this.setSize=function(D,Y,te=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=D,k=Y,t.width=Math.floor(D*V),t.height=Math.floor(Y*V),te===!0&&(t.style.width=D+"px",t.style.height=Y+"px"),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(O*V,k*V).floor()},this.setDrawingBufferSize=function(D,Y,te){O=D,k=Y,V=te,t.width=Math.floor(D*te),t.height=Math.floor(Y*te),this.setViewport(0,0,D,Y)},this.getCurrentViewport=function(D){return D.copy(E)},this.getViewport=function(D){return D.copy(Z)},this.setViewport=function(D,Y,te,re){D.isVector4?Z.set(D.x,D.y,D.z,D.w):Z.set(D,Y,te,re),Q.viewport(E.copy(Z).multiplyScalar(V).round())},this.getScissor=function(D){return D.copy(ue)},this.setScissor=function(D,Y,te,re){D.isVector4?ue.set(D.x,D.y,D.z,D.w):ue.set(D,Y,te,re),Q.scissor(C.copy(ue).multiplyScalar(V).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(D){Q.setScissorTest(le=D)},this.setOpaqueSort=function(D){z=D},this.setTransparentSort=function(D){W=D},this.getClearColor=function(D){return D.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(D=!0,Y=!0,te=!0){let re=0;if(D){let j=!1;if(A!==null){let ye=A.texture.format;j=ye===Nc||ye===Uc||ye===Dc}if(j){let ye=A.texture.type,Pe=ye===mi||ye===Tr||ye===ao||ye===lo||ye===Pc||ye===Ic,Ve=ze.getClearColor(),Ne=ze.getClearAlpha(),$e=Ve.r,et=Ve.g,Ye=Ve.b;Pe?(p[0]=$e,p[1]=et,p[2]=Ye,p[3]=Ne,F.clearBufferuiv(F.COLOR,0,p)):(x[0]=$e,x[1]=et,x[2]=Ye,x[3]=Ne,F.clearBufferiv(F.COLOR,0,x))}else re|=F.COLOR_BUFFER_BIT}Y&&(re|=F.DEPTH_BUFFER_BIT),te&&(re|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ze.dispose(),ae.dispose(),He.dispose(),de.dispose(),Ke.dispose(),Qe.dispose(),J.dispose(),Re.dispose(),nt.dispose(),ie.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Gn),_e.removeEventListener("sessionend",cl),Hi.stop()};function we(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let D=fe.autoReset,Y=Be.enabled,te=Be.autoUpdate,re=Be.needsUpdate,j=Be.type;X(),fe.autoReset=D,Be.enabled=Y,Be.autoUpdate=te,Be.needsUpdate=re,Be.type=j}function ve(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function he(D){let Y=D.target;Y.removeEventListener("dispose",he),Fe(Y)}function Fe(D){tt(D),de.remove(D)}function tt(D){let Y=de.get(D).programs;Y!==void 0&&(Y.forEach(function(te){ie.releaseProgram(te)}),D.isShaderMaterial&&ie.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,te,re,j,ye){Y===null&&(Y=se);let Pe=j.isMesh&&j.matrixWorld.determinant()<0,Ve=nh(D,Y,te,re,j);Q.setMaterial(re,Pe);let Ne=te.index,$e=1;if(re.wireframe===!0){if(Ne=P.getWireframeAttribute(te),Ne===void 0)return;$e=2}let et=te.drawRange,Ye=te.attributes.position,ut=et.start*$e,wt=(et.start+et.count)*$e;ye!==null&&(ut=Math.max(ut,ye.start*$e),wt=Math.min(wt,(ye.start+ye.count)*$e)),Ne!==null?(ut=Math.max(ut,0),wt=Math.min(wt,Ne.count)):Ye!=null&&(ut=Math.max(ut,0),wt=Math.min(wt,Ye.count));let Bt=wt-ut;if(Bt<0||Bt===1/0)return;Re.setup(j,re,Ve,te,Ne);let Pt,Rt=Ce;if(Ne!==null&&(Pt=B.get(Ne),Rt=Je,Rt.setIndex(Pt)),j.isMesh)re.wireframe===!0?(Q.setLineWidth(re.wireframeLinewidth*Ee()),Rt.setMode(F.LINES)):Rt.setMode(F.TRIANGLES);else if(j.isLine){let Ze=re.linewidth;Ze===void 0&&(Ze=1),Q.setLineWidth(Ze*Ee()),j.isLineSegments?Rt.setMode(F.LINES):j.isLineLoop?Rt.setMode(F.LINE_LOOP):Rt.setMode(F.LINE_STRIP)}else j.isPoints?Rt.setMode(F.POINTS):j.isSprite&&Rt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))Rt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Ze=j._multiDrawStarts,Ut=j._multiDrawCounts,gt=j._multiDrawCount,Ln=Ne?B.get(Ne).bytesPerElement:1,Es=de.get(re).currentProgram.getUniforms();for(let Dn=0;Dn<gt;Dn++)Es.setValue(F,"_gl_DrawID",Dn),Rt.render(Ze[Dn]/Ln,Ut[Dn])}else if(j.isInstancedMesh)Rt.renderInstances(ut,Bt,j.count);else if(te.isInstancedBufferGeometry){let Ze=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ut=Math.min(te.instanceCount,Ze);Rt.renderInstances(ut,Bt,Ut)}else Rt.render(ut,Bt)};function Et(D,Y,te){D.transparent===!0&&D.side===rt&&D.forceSinglePass===!1?(D.side=Jt,D.needsUpdate=!0,Ts(D,Y,te),D.side=li,D.needsUpdate=!0,Ts(D,Y,te),D.side=rt):Ts(D,Y,te)}this.compile=function(D,Y,te=null){te===null&&(te=D),g=He.get(te),g.init(Y),_.push(g),te.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),D!==te&&D.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();let re=new Set;return D.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let ye=j.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){let Ve=ye[Pe];Et(Ve,te,j),re.add(Ve)}else Et(ye,te,j),re.add(ye)}),g=_.pop(),re},this.compileAsync=function(D,Y,te=null){let re=this.compile(D,Y,te);return new Promise(j=>{function ye(){if(re.forEach(function(Pe){de.get(Pe).currentProgram.isReady()&&re.delete(Pe)}),re.size===0){j(D);return}setTimeout(ye,10)}ne.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let mt=null;function kn(D){mt&&mt(D)}function Gn(){Hi.stop()}function cl(){Hi.start()}let Hi=new lg;Hi.setAnimationLoop(kn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(D){mt=D,_e.setAnimationLoop(D),D===null?Hi.stop():Hi.start()},_e.addEventListener("sessionstart",Gn),_e.addEventListener("sessionend",cl),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(Y),Y=_e.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,Y,A),g=He.get(D,_.length),g.init(Y),_.push(g),H.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),be.setFromProjectionMatrix(H,ai,Y.reversedDepth),N=this.localClippingEnabled,q=Te.init(this.clippingPlanes,N),m=ae.get(D,S.length),m.init(),S.push(m),_e.enabled===!0&&_e.isPresenting===!0){let ye=v.xr.getDepthSensingMesh();ye!==null&&Fo(ye,Y,-1/0,v.sortObjects)}Fo(D,Y,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(z,W),pe=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,pe&&ze.addToRenderList(m,D),this.info.render.frame++,q===!0&&Te.beginShadows();let te=g.state.shadowsArray;Be.render(te,D,Y),q===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();let re=m.opaque,j=m.transmissive;if(g.setupLights(),Y.isArrayCamera){let ye=Y.cameras;if(j.length>0)for(let Pe=0,Ve=ye.length;Pe<Ve;Pe++){let Ne=ye[Pe];Ss(re,j,D,Ne)}pe&&ze.render(D);for(let Pe=0,Ve=ye.length;Pe<Ve;Pe++){let Ne=ye[Pe];ul(m,D,Ne,Ne.viewport)}}else j.length>0&&Ss(re,j,D,Y),pe&&ze.render(D),ul(m,D,Y);A!==null&&w===0&&(ge.updateMultisampleRenderTarget(A),ge.updateRenderTargetMipmap(A)),D.isScene===!0&&D.onAfterRender(v,D,Y),Re.resetDefaultState(),y=-1,M=null,_.pop(),_.length>0?(g=_[_.length-1],q===!0&&Te.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Fo(D,Y,te,re){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)te=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||be.intersectsSprite(D)){re&&oe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(H);let Pe=J.update(D),Ve=D.material;Ve.visible&&m.push(D,Pe,Ve,te,oe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||be.intersectsObject(D))){let Pe=J.update(D),Ve=D.material;if(re&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),oe.copy(D.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),oe.copy(Pe.boundingSphere.center)),oe.applyMatrix4(D.matrixWorld).applyMatrix4(H)),Array.isArray(Ve)){let Ne=Pe.groups;for(let $e=0,et=Ne.length;$e<et;$e++){let Ye=Ne[$e],ut=Ve[Ye.materialIndex];ut&&ut.visible&&m.push(D,Pe,ut,te,oe.z,Ye)}}else Ve.visible&&m.push(D,Pe,Ve,te,oe.z,null)}}let ye=D.children;for(let Pe=0,Ve=ye.length;Pe<Ve;Pe++)Fo(ye[Pe],Y,te,re)}function ul(D,Y,te,re){let j=D.opaque,ye=D.transmissive,Pe=D.transparent;g.setupLightsView(te),q===!0&&Te.setGlobalState(v.clippingPlanes,te),re&&Q.viewport(E.copy(re)),j.length>0&&Dr(j,Y,te),ye.length>0&&Dr(ye,Y,te),Pe.length>0&&Dr(Pe,Y,te),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Ss(D,Y,te,re){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[re.id]===void 0&&(g.state.transmissionRenderTarget[re.id]=new Gt(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Dt:mi,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let ye=g.state.transmissionRenderTarget[re.id],Pe=re.viewport||E;ye.setSize(Pe.z*v.transmissionResolutionScale,Pe.w*v.transmissionResolutionScale);let Ve=v.getRenderTarget(),Ne=v.getActiveCubeFace(),$e=v.getActiveMipmapLevel();v.setRenderTarget(ye),v.getClearColor(U),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),pe&&ze.render(te);let et=v.toneMapping;v.toneMapping=or;let Ye=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),g.setupLightsView(re),q===!0&&Te.setGlobalState(v.clippingPlanes,re),Dr(D,te,re),ge.updateMultisampleRenderTarget(ye),ge.updateRenderTargetMipmap(ye),ne.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let wt=0,Bt=Y.length;wt<Bt;wt++){let Pt=Y[wt],Rt=Pt.object,Ze=Pt.geometry,Ut=Pt.material,gt=Pt.group;if(Ut.side===rt&&Rt.layers.test(re.layers)){let Ln=Ut.side;Ut.side=Jt,Ut.needsUpdate=!0,hl(Rt,te,re,Ze,Ut,gt),Ut.side=Ln,Ut.needsUpdate=!0,ut=!0}}ut===!0&&(ge.updateMultisampleRenderTarget(ye),ge.updateRenderTargetMipmap(ye))}v.setRenderTarget(Ve,Ne,$e),v.setClearColor(U,L),Ye!==void 0&&(re.viewport=Ye),v.toneMapping=et}function Dr(D,Y,te){let re=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,ye=D.length;j<ye;j++){let Pe=D[j],Ve=Pe.object,Ne=Pe.geometry,$e=Pe.group,et=Pe.material;et.allowOverride===!0&&re!==null&&(et=re),Ve.layers.test(te.layers)&&hl(Ve,Y,te,Ne,et,$e)}}function hl(D,Y,te,re,j,ye){D.onBeforeRender(v,Y,te,re,j,ye),D.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),j.onBeforeRender(v,Y,te,re,D,ye),j.transparent===!0&&j.side===rt&&j.forceSinglePass===!1?(j.side=Jt,j.needsUpdate=!0,v.renderBufferDirect(te,Y,re,j,D,ye),j.side=li,j.needsUpdate=!0,v.renderBufferDirect(te,Y,re,j,D,ye),j.side=rt):v.renderBufferDirect(te,Y,re,j,D,ye),D.onAfterRender(v,Y,te,re,j,ye)}function Ts(D,Y,te){Y.isScene!==!0&&(Y=se);let re=de.get(D),j=g.state.lights,ye=g.state.shadowsArray,Pe=j.state.version,Ve=ie.getParameters(D,j.state,ye,Y,te),Ne=ie.getProgramCacheKey(Ve),$e=re.programs;re.environment=D.isMeshStandardMaterial?Y.environment:null,re.fog=Y.fog,re.envMap=(D.isMeshStandardMaterial?Qe:Ke).get(D.envMap||re.environment),re.envMapRotation=re.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,$e===void 0&&(D.addEventListener("dispose",he),$e=new Map,re.programs=$e);let et=$e.get(Ne);if(et!==void 0){if(re.currentProgram===et&&re.lightsStateVersion===Pe)return Bo(D,Ve),et}else Ve.uniforms=ie.getUniforms(D),D.onBeforeCompile(Ve,v),et=ie.acquireProgram(Ve,Ne),$e.set(Ne,et),re.uniforms=Ve.uniforms;let Ye=re.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ye.clippingPlanes=Te.uniform),Bo(D,Ve),re.needsLights=bs(D),re.lightsStateVersion=Pe,re.needsLights&&(Ye.ambientLightColor.value=j.state.ambient,Ye.lightProbe.value=j.state.probe,Ye.directionalLights.value=j.state.directional,Ye.directionalLightShadows.value=j.state.directionalShadow,Ye.spotLights.value=j.state.spot,Ye.spotLightShadows.value=j.state.spotShadow,Ye.rectAreaLights.value=j.state.rectArea,Ye.ltc_1.value=j.state.rectAreaLTC1,Ye.ltc_2.value=j.state.rectAreaLTC2,Ye.pointLights.value=j.state.point,Ye.pointLightShadows.value=j.state.pointShadow,Ye.hemisphereLights.value=j.state.hemi,Ye.directionalShadowMap.value=j.state.directionalShadowMap,Ye.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ye.spotShadowMap.value=j.state.spotShadowMap,Ye.spotLightMatrix.value=j.state.spotLightMatrix,Ye.spotLightMap.value=j.state.spotLightMap,Ye.pointShadowMap.value=j.state.pointShadowMap,Ye.pointShadowMatrix.value=j.state.pointShadowMatrix),re.currentProgram=et,re.uniformsList=null,et}function dl(D){if(D.uniformsList===null){let Y=D.currentProgram.getUniforms();D.uniformsList=po.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function Bo(D,Y){let te=de.get(D);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function nh(D,Y,te,re,j){Y.isScene!==!0&&(Y=se),ge.resetTextureUnits();let ye=Y.fog,Pe=re.isMeshStandardMaterial?Y.environment:null,Ve=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zt,Ne=(re.isMeshStandardMaterial?Qe:Ke).get(re.envMap||Pe),$e=re.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,et=!!te.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ye=!!te.morphAttributes.position,ut=!!te.morphAttributes.normal,wt=!!te.morphAttributes.color,Bt=or;re.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Bt=v.toneMapping);let Pt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Rt=Pt!==void 0?Pt.length:0,Ze=de.get(re),Ut=g.state.lights;if(q===!0&&(N===!0||D!==M)){let gn=D===M&&re.id===y;Te.setState(re,D,gn)}let gt=!1;re.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ut.state.version||Ze.outputColorSpace!==Ve||j.isBatchedMesh&&Ze.batching===!1||!j.isBatchedMesh&&Ze.batching===!0||j.isBatchedMesh&&Ze.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ze.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ze.instancing===!1||!j.isInstancedMesh&&Ze.instancing===!0||j.isSkinnedMesh&&Ze.skinning===!1||!j.isSkinnedMesh&&Ze.skinning===!0||j.isInstancedMesh&&Ze.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ze.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ze.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ze.instancingMorph===!1&&j.morphTexture!==null||Ze.envMap!==Ne||re.fog===!0&&Ze.fog!==ye||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Te.numPlanes||Ze.numIntersection!==Te.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==et||Ze.morphTargets!==Ye||Ze.morphNormals!==ut||Ze.morphColors!==wt||Ze.toneMapping!==Bt||Ze.morphTargetsCount!==Rt)&&(gt=!0):(gt=!0,Ze.__version=re.version);let Ln=Ze.currentProgram;gt===!0&&(Ln=Ts(re,Y,j));let Es=!1,Dn=!1,zo=!1,Nt=Ln.getUniforms(),Wn=Ze.uniforms;if(Q.useProgram(Ln.program)&&(Es=!0,Dn=!0,zo=!0),re.id!==y&&(y=re.id,Dn=!0),Es||M!==D){Q.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Nt.setValue(F,"projectionMatrix",D.projectionMatrix),Nt.setValue(F,"viewMatrix",D.matrixWorldInverse);let Sn=Nt.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,G.setFromMatrixPosition(D.matrixWorld)),K.logarithmicDepthBuffer&&Nt.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Nt.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),M!==D&&(M=D,Dn=!0,zo=!0)}if(j.isSkinnedMesh){Nt.setOptional(F,j,"bindMatrix"),Nt.setOptional(F,j,"bindMatrixInverse");let gn=j.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Nt.setValue(F,"boneTexture",gn.boneTexture,ge))}j.isBatchedMesh&&(Nt.setOptional(F,j,"batchingTexture"),Nt.setValue(F,"batchingTexture",j._matricesTexture,ge),Nt.setOptional(F,j,"batchingIdTexture"),Nt.setValue(F,"batchingIdTexture",j._indirectTexture,ge),Nt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(F,"batchingColorTexture",j._colorsTexture,ge));let Xn=te.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&xe.update(j,te,Ln),(Dn||Ze.receiveShadow!==j.receiveShadow)&&(Ze.receiveShadow=j.receiveShadow,Nt.setValue(F,"receiveShadow",j.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Wn.envMap.value=Ne,Wn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&Y.environment!==null&&(Wn.envMapIntensity.value=Y.environmentIntensity),Dn&&(Nt.setValue(F,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&ih(Wn,zo),ye&&re.fog===!0&&me.refreshFogUniforms(Wn,ye),me.refreshMaterialUniforms(Wn,re,V,k,g.state.transmissionRenderTarget[D.id]),po.upload(F,dl(Ze),Wn,ge)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(po.upload(F,dl(Ze),Wn,ge),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Nt.setValue(F,"center",j.center),Nt.setValue(F,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(F,"normalMatrix",j.normalMatrix),Nt.setValue(F,"modelMatrix",j.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){let gn=re.uniformsGroups;for(let Sn=0,oh=gn.length;Sn<oh;Sn++){let Ur=gn[Sn];nt.update(Ur,Ln),nt.bind(Ur,Ln)}}return Ln}function ih(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function bs(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,Y,te){let re=de.get(D);re.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),de.get(D.texture).__webglTexture=Y,de.get(D.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:te,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Y){let te=de.get(D);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0};let rh=F.createFramebuffer();this.setRenderTarget=function(D,Y=0,te=0){A=D,b=Y,w=te;let re=!0,j=null,ye=!1,Pe=!1;if(D){let Ne=de.get(D);if(Ne.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(F.FRAMEBUFFER,null),re=!1;else if(Ne.__webglFramebuffer===void 0)ge.setupRenderTarget(D);else if(Ne.__hasExternalTextures)ge.rebindTextures(D,de.get(D.texture).__webglTexture,de.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let Ye=D.depthTexture;if(Ne.__boundDepthTexture!==Ye){if(Ye!==null&&de.has(Ye)&&(D.width!==Ye.image.width||D.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(D)}}let $e=D.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Pe=!0);let et=de.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(et[Y])?j=et[Y][te]:j=et[Y],ye=!0):D.samples>0&&ge.useMultisampledRTT(D)===!1?j=de.get(D).__webglMultisampledFramebuffer:Array.isArray(et)?j=et[te]:j=et,E.copy(D.viewport),C.copy(D.scissor),I=D.scissorTest}else E.copy(Z).multiplyScalar(V).floor(),C.copy(ue).multiplyScalar(V).floor(),I=le;if(te!==0&&(j=rh),Q.bindFramebuffer(F.FRAMEBUFFER,j)&&re&&Q.drawBuffers(D,j),Q.viewport(E),Q.scissor(C),Q.setScissorTest(I),ye){let Ne=de.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,te)}else if(Pe){let Ne=Y;for(let $e=0;$e<D.textures.length;$e++){let et=de.get(D.textures[$e]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$e,et.__webglTexture,te,Ne)}}else if(D!==null&&te!==0){let Ne=de.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ne.__webglTexture,te)}y=-1},this.readRenderTargetPixels=function(D,Y,te,re,j,ye,Pe,Ve=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=de.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Q.bindFramebuffer(F.FRAMEBUFFER,Ne);try{let $e=D.textures[Ve],et=$e.format,Ye=$e.type;if(!K.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-re&&te>=0&&te<=D.height-j&&(D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ve),F.readPixels(Y,te,re,j,Ge.convert(et),Ge.convert(Ye),ye))}finally{let $e=A!==null?de.get(A).__webglFramebuffer:null;Q.bindFramebuffer(F.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(D,Y,te,re,j,ye,Pe,Ve=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=de.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne)if(Y>=0&&Y<=D.width-re&&te>=0&&te<=D.height-j){Q.bindFramebuffer(F.FRAMEBUFFER,Ne);let $e=D.textures[Ve],et=$e.format,Ye=$e.type;if(!K.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.bufferData(F.PIXEL_PACK_BUFFER,ye.byteLength,F.STREAM_READ),D.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ve),F.readPixels(Y,te,re,j,Ge.convert(et),Ge.convert(Ye),0);let wt=A!==null?de.get(A).__webglFramebuffer:null;Q.bindFramebuffer(F.FRAMEBUFFER,wt);let Bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Lm(F,Bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ye),F.deleteBuffer(ut),F.deleteSync(Bt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Y=null,te=0){let re=Math.pow(2,-te),j=Math.floor(D.image.width*re),ye=Math.floor(D.image.height*re),Pe=Y!==null?Y.x:0,Ve=Y!==null?Y.y:0;ge.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,te,0,0,Pe,Ve,j,ye),Q.unbindTexture()};let sh=F.createFramebuffer(),fl=F.createFramebuffer();this.copyTextureToTexture=function(D,Y,te=null,re=null,j=0,ye=null){ye===null&&(j!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=j,j=0):ye=0);let Pe,Ve,Ne,$e,et,Ye,ut,wt,Bt,Pt=D.isCompressedTexture?D.mipmaps[ye]:D.image;if(te!==null)Pe=te.max.x-te.min.x,Ve=te.max.y-te.min.y,Ne=te.isBox3?te.max.z-te.min.z:1,$e=te.min.x,et=te.min.y,Ye=te.isBox3?te.min.z:0;else{let Xn=Math.pow(2,-j);Pe=Math.floor(Pt.width*Xn),Ve=Math.floor(Pt.height*Xn),D.isDataArrayTexture?Ne=Pt.depth:D.isData3DTexture?Ne=Math.floor(Pt.depth*Xn):Ne=1,$e=0,et=0,Ye=0}re!==null?(ut=re.x,wt=re.y,Bt=re.z):(ut=0,wt=0,Bt=0);let Rt=Ge.convert(Y.format),Ze=Ge.convert(Y.type),Ut;Y.isData3DTexture?(ge.setTexture3D(Y,0),Ut=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ge.setTexture2DArray(Y,0),Ut=F.TEXTURE_2D_ARRAY):(ge.setTexture2D(Y,0),Ut=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);let gt=F.getParameter(F.UNPACK_ROW_LENGTH),Ln=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Es=F.getParameter(F.UNPACK_SKIP_PIXELS),Dn=F.getParameter(F.UNPACK_SKIP_ROWS),zo=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Pt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$e),F.pixelStorei(F.UNPACK_SKIP_ROWS,et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ye);let Nt=D.isDataArrayTexture||D.isData3DTexture,Wn=Y.isDataArrayTexture||Y.isData3DTexture;if(D.isDepthTexture){let Xn=de.get(D),gn=de.get(Y),Sn=de.get(Xn.__renderTarget),oh=de.get(gn.__renderTarget);Q.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Q.bindFramebuffer(F.DRAW_FRAMEBUFFER,oh.__webglFramebuffer);for(let Ur=0;Ur<Ne;Ur++)Nt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,de.get(D).__webglTexture,j,Ye+Ur),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,de.get(Y).__webglTexture,ye,Bt+Ur)),F.blitFramebuffer($e,et,Pe,Ve,ut,wt,Pe,Ve,F.DEPTH_BUFFER_BIT,F.NEAREST);Q.bindFramebuffer(F.READ_FRAMEBUFFER,null),Q.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||D.isRenderTargetTexture||de.has(D)){let Xn=de.get(D),gn=de.get(Y);Q.bindFramebuffer(F.READ_FRAMEBUFFER,sh),Q.bindFramebuffer(F.DRAW_FRAMEBUFFER,fl);for(let Sn=0;Sn<Ne;Sn++)Nt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xn.__webglTexture,j,Ye+Sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xn.__webglTexture,j),Wn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gn.__webglTexture,ye,Bt+Sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gn.__webglTexture,ye),j!==0?F.blitFramebuffer($e,et,Pe,Ve,ut,wt,Pe,Ve,F.COLOR_BUFFER_BIT,F.NEAREST):Wn?F.copyTexSubImage3D(Ut,ye,ut,wt,Bt+Sn,$e,et,Pe,Ve):F.copyTexSubImage2D(Ut,ye,ut,wt,$e,et,Pe,Ve);Q.bindFramebuffer(F.READ_FRAMEBUFFER,null),Q.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Wn?D.isDataTexture||D.isData3DTexture?F.texSubImage3D(Ut,ye,ut,wt,Bt,Pe,Ve,Ne,Rt,Ze,Pt.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(Ut,ye,ut,wt,Bt,Pe,Ve,Ne,Rt,Pt.data):F.texSubImage3D(Ut,ye,ut,wt,Bt,Pe,Ve,Ne,Rt,Ze,Pt):D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ye,ut,wt,Pe,Ve,Rt,Ze,Pt.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ye,ut,wt,Pt.width,Pt.height,Rt,Pt.data):F.texSubImage2D(F.TEXTURE_2D,ye,ut,wt,Pe,Ve,Rt,Ze,Pt);F.pixelStorei(F.UNPACK_ROW_LENGTH,gt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ln),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Es),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,zo),ye===0&&Y.generateMipmaps&&F.generateMipmap(Ut),Q.unbindTexture()},this.initRenderTarget=function(D){de.get(D).__webglFramebuffer===void 0&&ge.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ge.setTextureCube(D,0):D.isData3DTexture?ge.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ge.setTexture2DArray(D,0):ge.setTexture2D(D,0),Q.unbindTexture()},this.resetState=function(){b=0,w=0,A=null,Q.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};function Ld(i,e){if(e===fu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ss||e===uo){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===ss)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ci=class extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new $d(t)})}load(e,t,n,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=sr.extractUrlBase(e);o=sr.resolveURL(c,this.path)}else o=sr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ei(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xg){try{o[ct.KHR_BINARY_GLTF]=new ef(e)}catch(h){r&&r(h);return}s=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new lf(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:o[h]=new Fd;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[h]=new tf(s,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[h]=new nf;break;case ct.KHR_MESH_QUANTIZATION:o[h]=new rf;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function IS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Od=class{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new Me(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new es(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new La(u),c.distance=h;break;case"spot":c=new Ia(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Fd=class{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,n){let r=[];e.color=new Me(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,yt))}return Promise.all(r)}},Bd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},zd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(a,a)}return Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Vd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},kd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Gd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},Wd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(a[0],a[1],a[2],Zt),Promise.all(s)}},Xd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},qd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(s)}},Yd=class{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},jd=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},Zd=class{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Kd=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Jd=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Qd=class{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,r.mode,r.filter),f})})}else return null}},$d=class{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let c of r.primitives)if(c.mode!==Jn.TRIANGLES&&c.mode!==Jn.TRIANGLE_STRIP&&c.mode!==Jn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let x=new ke,m=new R,g=new Ue,S=new R(1,1,1),_=new En(p.geometry,p.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,v),l.SCALE&&S.fromBufferAttribute(l.SCALE,v),_.setMatrixAt(v,x.compose(m,g,S));for(let v in l)if(v==="_COLOR_0"){let T=l[v];_.instanceColor=new Ji(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,l[v]);it.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},xg="glTF",Wa=12,fg={JSON:1313821514,BIN:5130562},ef=class{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Wa,s=new DataView(e,Wa),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===fg.JSON){let c=new Uint8Array(e,Wa+o,a);this.content=n.decode(c)}else if(l===fg.BIN){let c=Wa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=of[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=of[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=xo[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(f){for(let p in f.attributes){let x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}h(f)},a,c,Zt,d)})})}},nf=class{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},rf=class{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}},_u=class extends tr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,x=p-c,m=-2*f+3*d,g=f-d,S=1-m,_=g-d+h;for(let v=0;v!==a;v++){let T=o[x+v+a],b=o[x+v+l]*u,w=o[p+v+a],A=o[p+v]*u;s[v]=S*T+_*b+m*w+g*A}return s}},LS=new Ue,sf=class extends _u{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return LS.fromArray(s).normalize().toArray(s),s}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pg={9728:qt,9729:It,9984:Rc,9985:oo,9986:rs,9987:Kn},mg={33071:Yn,33648:Vs,10497:Ft},Dd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},of={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},DS={CUBICSPLINE:void 0,LINEAR:Xr,STEP:Wr},Ud={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function US(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),i.DefaultMaterial}function hs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function NS(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(r){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(s){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function OS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function FS(i){let e,t=i.extensions&&i.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nd(t.attributes):e=i.indices+":"+Nd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Nd(i.targets[n]);return e}function Nd(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function af(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var zS=new ke,lf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new IS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new Qr(this.options.manager):this.textureLoader=new Da(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ei(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return hs(s,a,r),Ri(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){n.load(sr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=Dd[r.type],a=xo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new je(c,o,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=Dd[r.type],c=xo[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,p=r.normalized===!0,x,m;if(f&&f!==h){let g=Math.floor(d/f),S="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count,_=t.cache.get(S);_||(x=new c(a,g*f,r.count*f/u),_=new Yr(x,f/u),t.cache.add(S,_)),m=new jr(_,l,d%f/u,p)}else a===null?x=new c(r.count*l):x=new c(a,d,r.count*l),m=new je(x,l,p);if(r.sparse!==void 0){let g=Dd.SCALAR,S=xo[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,T=new S(o[1],_,r.sparse.count*g),b=new c(o[2],v,r.sparse.count*l);a!==null&&(m=new je(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,A=T.length;w<A;w++){let y=T[w];if(m.setX(y,b[w*l]),l>=2&&m.setY(y,b[w*l+1]),l>=3&&m.setZ(y,b[w*l+2]),l>=4&&m.setW(y,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return u.magFilter=pg[d.magFilter]||It,u.minFilter=pg[d.minFilter]||Kn,u.wrapS=mg[d.wrapS]||Ft,u.wrapT=mg[d.wrapT]||Ft,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qt&&u.minFilter!==It,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=r.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let m=new zt(x);m.needsUpdate=!0,d(m)}),t.load(sr.resolveURL(h,s.path),p,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ri(h,o),h.userData.mimeType=o.mimeType||BS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ct.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Qs,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new vn,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ct}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){let h=r[ct.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Zt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,yt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=rt);let u=s.alphaMode||Ud.OPAQUE;if(u===Ud.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ud.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ht&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ce(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Ht&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ht){let h=s.emissiveFactor;a.emissive=new Me().setRGB(h[0],h[1],h[2],Zt)}return s.emissiveTexture!==void 0&&o!==Ht&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,yt)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),Ri(h,s),t.associations.set(h,{materials:e}),s.extensions&&hs(r,h,s),h})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return gg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=FS(c),h=r[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=gg(new Oe,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?US(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let x=u[f],m=o[f],g,S=c[f];if(m.mode===Jn.TRIANGLES||m.mode===Jn.TRIANGLE_STRIP||m.mode===Jn.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new Ki(x,S):new dt(x,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Jn.TRIANGLE_STRIP?g.geometry=Ld(g.geometry,uo):m.mode===Jn.TRIANGLE_FAN&&(g.geometry=Ld(g.geometry,ss));else if(m.mode===Jn.LINES)g=new Zn(x,S);else if(m.mode===Jn.LINE_STRIP)g=new Qi(x,S);else if(m.mode===Jn.LINE_LOOP)g=new ca(x,S);else if(m.mode===Jn.POINTS)g=new Zr(x,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&OS(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Ri(g,s),m.extensions&&hs(r,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&hs(r,h[0],s),h[0];let d=new ht;s.extensions&&hs(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(We.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new rr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new ke;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ci(a,l)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){let f=r.channels[h],p=r.samplers[f.sampler],x=f.target,m=x.node,g=r.parameters!==void 0?r.parameters[p.input]:p.input,S=r.parameters!==void 0?r.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",S)),c.push(p),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],x=h[3],m=h[4],g=[];for(let _=0,v=d.length;_<v;_++){let T=d[_],b=f[_],w=p[_],A=x[_],y=m[_];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let M=n._createAnimationTracks(T,b,w,A,y);if(M)for(let E=0;E<M.length;E++)g.push(M[E])}let S=new bi(s,void 0,g);return Ri(S,r),S})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,zS)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Ks:c.length>1?u=new ht:c.length===1?u=c[0]:u=new it,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ri(u,s),s.extensions&&hs(n,u,s),s.matrix!==void 0){let h=new ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new ht;n.name&&(s.name=r.createUniqueName(n.name)),Ri(s,n),n.extensions&&hs(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of r.associations)(d instanceof hn||d instanceof zt)&&h.set(d,f);return u.traverse(d=>{let f=r.associations.get(d);f!=null&&h.set(d,f)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){let o=[],a=e.name?e.name:e.uuid,l=[];Er[s.path]===Er.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Er[s.path]){case Er.weights:c=Ti;break;case Er.rotation:c=hi;break;case Er.translation:case Er.scale:c=di;break;default:n.itemSize===1?c=Ti:c=di;break}let u=r.interpolation!==void 0?DS[r.interpolation]:Xr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let p=new c(l[d]+"."+Er[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=af(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof hi?sf:_u;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function HS(i,e,t){let n=e.attributes,r=new Kt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let u=af(xo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new R,l=new R;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=af(xo[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;let o=new Tn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function gg(i,e,t){let n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=of[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return lt.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Ri(i,e),HS(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?NS(i,e.targets,t):i})}function vg(){let i=new ht;return i.name="\u4E2D\u5F0F\u5251 \xB7 VVayToyek",i.visible=!1,i.userData.ready=!1,i.userData.readyPromise=new Ci().loadAsync("assets/models/sword/sword-1.glb").then(e=>{let t=e.scene;t.scale.x=1.6,t.position.y=-.016,t.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),i.add(t),i.userData.ready=!0}).catch(e=>{i.userData.error=String(e),console.error("Sword model failed to load",e)}),i}var wr=Math.PI*2,zn=(i,e)=>i+Math.random()*(e-i);function _g(){let i,e,t=!1,n=0,r=0,s=0,o=[],a={},l=new Set;function c(m,g){let _=i.createBuffer(1,Math.ceil(m*22050),22050),v=_.getChannelData(0);return g(v,22050),_}function u(m,g,S,_){let v=i.createBufferSource(),T=i.createGain(),b=i.createStereoPanner();v.buffer=g,v.loop=!0,T.gain.value=S,b.pan.value=_,v.connect(T).connect(b).connect(e),v.start(),o.push({name:m,gain:T,panner:b,level:S,pan:_})}function h(){if(i)return!0;let m=window.AudioContext||window.webkitAudioContext;if(!m)return!1;i=new m,e=i.createGain(),e.gain.value=0,e.connect(i.destination),a.wind=c(11,(g,S)=>{let _=0;for(let v=0;v<g.length;v++){let T=v/S;_=_*.985+(Math.random()*2-1)*.015;let b=Math.min(1,T/.3,(11-T)/.3);g[v]=_*(.7+.3*Math.sin(wr*T/11))*b}}),u("wind",a.wind,.65,0);for(let g=0;g<2;g++){let S=g?17:13,_=g?3650:3150,v=c(S,(T,b)=>{let w=0,A=0;for(let y=0;y<T.length;y++){let M=y/b,E=Math.pow(.5-.5*Math.cos(wr*M/S),.8),C=.25+.75*Math.pow(.5+.5*Math.sin(wr*(67+g*9)*M+1.8*Math.sin(M*2)),2);A=A*.2+(Math.random()*2-1)*.8,w+=wr*(_+90*Math.sin(M*1.7)+35*A)/b,T[y]=E*C*(.55*Math.sin(w)+.16*Math.sin(w*2)+.29*A)}});a["cicada"+g]=v,u("cicada",v,g?.063:.078,g?.65:-.6)}for(let g=0;g<2;g++){let S=g?23:19,_=c(S,(v,T)=>{for(let b=zn(.1,.5);b<S-.7;b+=zn(1.05,2.7)){let w=3+Math.floor(Math.random()*3),A=zn(3900,4600),y=zn(.5,1);for(let M=0;M<w;M++){let E=b+M*.082,C=.044;for(let I=0;I<C*T;I++){let U=Math.floor(E*T)+I;if(U>=v.length)break;let L=I/T,O=Math.pow(Math.sin(Math.PI*L/C),1.5);v[U]+=y*O*Math.sin(wr*A*L+1.4*Math.sin(wr*45*L))}}}});a["cricket"+g]=_,u("cricket",_,.034,g?-.8:.8)}return a.step=c(.14,(g,S)=>{let _=0;for(let v=0;v<g.length;v++)_=_*.65+(Math.random()*2-1)*.35,g[v]=_*Math.exp(-v/(S*.019))}),!0}function d(m,g,S=0,_=1,v=i.currentTime){let T=i.createBufferSource(),b=i.createGain(),w=i.createStereoPanner();T.buffer=m,T.playbackRate.value=_,b.gain.value=g,w.pan.value=S,T.connect(b).connect(w).connect(e),l.add(T),T.onended=()=>{T.disconnect(),b.disconnect(),w.disconnect(),l.delete(T)},T.start(v)}function f(){let m=2+Math.floor(Math.random()*4),g=zn(-.85,.85),S=zn(.065,.12),_=zn(1800,3e3),v=Math.random()>.45,T=i.currentTime+.03;for(let b=0;b<m;b++){let w=zn(.09,.21),A=_+zn(-180,180),y=A*(v?1.35:.72),M=c(w,(E,C)=>{let I=0;for(let U=0;U<E.length;U++){let L=U/C,O=L/w;I+=wr*(A+(y-A)*O+80*Math.sin(wr*24*L))/C,E[U]=Math.pow(Math.sin(Math.PI*O),1.3)*(Math.sin(I)+.12*Math.sin(I*2))}});d(M,S,g,1,T),T+=w+zn(.06,.17)}s++}async function p(m){return m&&!h()||(t=m,!i)?!1:(t?(await i.resume(),e.gain.setTargetAtTime(.38,i.currentTime,.3),n=i.currentTime+.7):(e.gain.cancelScheduledValues(i.currentTime),e.gain.setValueAtTime(0,i.currentTime),await i.suspend()),t)}function x(m=0,g=0){if(!t||!i||i.state!=="running")return;let S=i.currentTime;if(S<r)return;r=S+.25;let _=1/(1+Math.max(0,g)*.025);for(let v of o)v.gain.gain.setTargetAtTime(v.level*_,S,1),v.panner.pan.setTargetAtTime(v.pan*Math.cos(m)+.2*Math.sin(m),S,.35);S>=n&&(f(),n=S+zn(4.5,10.5))}return document.addEventListener("visibilitychange",()=>{!i||!t||(document.hidden?i.suspend().catch(()=>{}):i.resume().catch(()=>{}))}),{setEnabled:p,update:x,step(){t&&i?.state==="running"&&d(a.step,.29,zn(-.08,.08),zn(.9,1.12))},sample(){return{enabled:t,state:i?.state||"uninitialized",layers:o.map(m=>m.name),birdPhrases:s,activeOneShots:l.size}}}}function cf(i,e){return new R(-Math.sin(i)*Math.cos(e),-Math.sin(e),-Math.cos(i)*Math.cos(e))}function yg(i,e,t,n=.48,r=.18){return i.x<t.minX+n||i.x>t.maxX-n||i.z<t.minZ+n||i.z>t.maxZ-n||i.y>120?!1:!e.some(s=>i.y-r<s.h&&i.y+1.85>(s.bottom||0)&&Math.abs(i.x-s.x)<s.w/2+n&&Math.abs(i.z-s.z)<s.d/2+n)}function Mg({player:i,colliders:e,bounds:t,groundAt:n,supportAt:r=n,sword:s,onNotice:o}){i.root.add(s);let a=new R,l=new R,c=new R,u=new R(0,0,-1),h="walk",d=0,f=0,p=!1,x=0;function m(_=!1){h="walk",x=0,_||i.cancelLanding?.(),i.airborne=!1,d=0,a.set(0,0,0),s.visible=!1,i.riding=!1,i.body.rotation.y=0,i.root.rotation.set(0,i.root.rotation.y,0)}function g(){if(h!=="flying"){if(s.userData.ready===!1){o(s.userData.error?"\u5B9D\u5251\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5":"\u5B9D\u5251\u6B63\u5728\u52A0\u8F7D\u2026");return}h="flying",p=!0,f=Math.min(119,i.root.position.y+2.3),x=0,a.set(0,0,0),s.visible=!0,i.riding=!0,i.airborne=!1,i.cancelLanding?.(),o("\u5FA1\u5251 \xB7 W \u6CBF\u89C6\u7EBF\u98DE\u884C\uFF0CShift \u52A0\u901F\uFF0CS \u5239\u8F66\uFF0CR \u6536\u5251\u843D\u4E0B")}else h="landing",p=!1,a.set(0,0,0),d=0,x=0,s.visible=!1,i.riding=!1,i.root.rotation.set(0,i.root.rotation.y,0),i.airborne=!0,i.prepareFall?.(),o("\u6536\u5251 \xB7 \u843D\u5230\u811A\u4E0B\u7684\u5730\u9762\u6216\u5C4B\u9876")}function S(_,{keys:v,yaw:T,pitch:b,time:w,paused:A}){if(h==="walk")return!1;let y=i.root.position;if(h==="landing"){let M=pl(y,A?0:_,x,r);if(x=M.velocity,d=0,M.landed)return m(!0),i.land?.(),i.animate(_,0,w),!0}else{let M=!A&&(v.has("KeyW")||v.has("ArrowUp")),E=!A&&(v.has("KeyS")||v.has("ArrowDown")),C=A?0:Number(v.has("KeyD")||v.has("ArrowRight"))-Number(v.has("KeyA")||v.has("ArrowLeft")),I=v.has("ShiftLeft")||v.has("ShiftRight");l.copy(cf(T,b)).multiplyScalar(M?1:0),l.add(new R(Math.cos(T),0,-Math.sin(T)).multiplyScalar(C*.65)),l.lengthSq()>0&&l.normalize().multiplyScalar(I?52:26),(E||A)&&l.set(0,0,0),u.copy(l.lengthSq()>1e-8?l:cf(T,b)).normalize();let U=We.damp(a.length(),l.length(),E||A?10:2.5,_);a.copy(u).multiplyScalar(U);let L=Math.max(1,Math.ceil(a.length()*_/.18));for(let O=0;O<L;O++)for(let k of["x","y","z"])c.copy(y),c[k]+=a[k]*_/L,c.y=Math.max(n(c.x,c.z)+.65,Math.min(120,c.y)),yg(c,e,t,.48,p?0:.18)?y.copy(c):a[k]=0;p&&(c.copy(y),c.y=We.damp(y.y,f,4,_),yg(c,e,t,.48,p?0:.18)&&(y.y=c.y),(Math.abs(y.y-f)<.06||M)&&(p=!1)),d=a.length()}return h==="flying"&&(d>.001?u.copy(a).normalize():u.copy(cf(T,b)),i.root.rotation.set(Math.asin(We.clamp(u.y,-1,1)),Math.atan2(-u.x,-u.z),0,"YXZ")),i.body.rotation.y=0,i.riding=h==="flying",i.animate(A?0:_,0,w),!0}return{toggle:g,reset:m,update:S,get active(){return h!=="walk"},get speed(){return d},get mode(){return h},sample(){return{mode:h,speed:+d.toFixed(2),height:+(i.root.position.y-n(i.root.position.x,i.root.position.z)).toFixed(2),swordVisible:s.visible,swordDirection:new R(0,0,-1).applyQuaternion(i.root.quaternion).toArray(),velocity:a.toArray()}}}}function Sg(i,e,t){let r=new Uint8Array(16384);for(let u=0;u<64;u++)for(let h=0;h<64;h++){let d=Math.hypot((h+.5)/64*2-1,(u+.5)/64*2-1),f=(u*64+h)*4;r[f]=r[f+1]=r[f+2]=255,r[f+3]=Math.round(255*Math.pow(Math.max(0,1-d*d),2))}let s=new yr(r,64,64);s.needsUpdate=!0,s.magFilter=s.minFilter=It;let o=new Yt(1,1);o.rotateX(-Math.PI/2);let a=new R,l=new R,c=e.map(u=>{let h=["L","R"].map(d=>{let f=new Ht({map:s,color:1515556,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),p=new dt(o,f);return p.visible=!1,p.name="Foot contact shadow",i.add(p),{side:d,mesh:p,bone:null}});return{person:u,feet:h}});return{update(){for(let{person:u,feet:h}of c)if(u.ready){u.root.updateMatrixWorld(!0);for(let d of h){if(d.bone??=u.root.getObjectByName("J_Bip_"+d.side+"_Foot"),!d.bone)continue;d.bone.getWorldPosition(a);let f=t(a.x,a.z,a.y+.1),p=Math.max(0,a.y-f-.12),x=.3*(1-We.smoothstep(p,.02,.4));d.mesh.visible=u.root.visible&&x>.005,d.mesh.material.opacity=x,d.mesh.position.set(a.x,f+.009,a.z),l.set(0,0,1).transformDirection(u.root.matrixWorld),d.mesh.rotation.y=Math.atan2(l.x,l.z),d.mesh.scale.set(.33+p*.25,1,.48+p*.25)}}},sample(){return c[0].feet.map(({mesh:u})=>({visible:u.visible,position:u.position.toArray(),opacity:u.material.opacity}))}}}function Tg({canvas:i,hint:e,canCapture:t,onMove:n,onRelease:r,doc:s=document,win:o=window}){let a=!1,l=!1,c=0,u="",h=()=>s.pointerLockElement===i;function d(){let m=h()&&a&&t();s.body.classList.toggle("pointer-locked",m),e.textContent=m?"\u79FB\u52A8\u9F20\u6807\u73AF\u987E \xB7 Esc \u663E\u793A\u9F20\u6807":l?"\u6B63\u5728\u8FDB\u5165\u9F20\u6807\u63A7\u5236\u2026":u?"\u9F20\u6807\u672A\u9501\u5B9A \xB7 \u70B9\u51FB\u753B\u9762\u91CD\u8BD5":"\u70B9\u51FB\u753B\u9762\u5F00\u59CB\u63A7\u5236 \xB7 Esc \u663E\u793A\u9F20\u6807"}function f(m,g=c){g!==c||!a||(l=!1,a=!1,u=m?.name||"PointerLockError",r(),d())}function p(){if(!t()||l||h())return;a=!0,l=!0,u="";let m=++c;if(typeof i.requestPointerLock!="function"){f({name:"NotSupportedError"},m);return}try{i.requestPointerLock()?.catch(g=>f(g,m)),d()}catch(g){f(g,m)}}function x(){a=!1,l=!1,c++,r(),h()&&s.exitPointerLock(),d()}return s.addEventListener("pointerlockchange",()=>{if(l=!1,h()){if(!a||!t()||s.hidden){x();return}u="",i.focus()}else a=!1,r();d()}),s.addEventListener("pointerlockerror",()=>f()),s.addEventListener("mousemove",m=>{!h()||!a||!t()||Number.isFinite(m.movementX)&&Number.isFinite(m.movementY)&&n(m.movementX,m.movementY)}),s.addEventListener("visibilitychange",()=>{s.hidden&&x()}),o.addEventListener("blur",x),i.addEventListener("click",p),d(),{capture:p,release:x,refresh:d}}function ds(i,e,t){if(Math.abs(e-i.x)>i.w/2||Math.abs(t-i.z)>i.d/2)return!1;if(!i.polygon)return!0;let n=!1;for(let r=0,s=i.polygon.length-1;r<i.polygon.length;s=r++){let[o,a]=i.polygon[r],[l,c]=i.polygon[s];a>t!=c>t&&e<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}var yu=class extends Ra{constructor(e){super(e),this.type=Dt}parse(e){let o=function(A,y){switch(A){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(y||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(y||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(y||""))}},h=function(A,y,M){y=y||1024;let C=A.pos,I=-1,U=0,L="",O=String.fromCharCode.apply(null,new Uint16Array(A.subarray(C,C+128)));for(;0>(I=O.indexOf(`
`))&&U<y&&C<A.byteLength;)L+=O,U+=O.length,C+=128,O+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(C,C+128)));return-1<I?(M!==!1&&(A.pos+=U+I+1),L+O.slice(0,I)):!1},d=function(A){let y=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,I=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,U={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},L,O;for((A.pos>=A.byteLength||!(L=h(A)))&&o(1,"no header found"),(O=L.match(y))||o(3,"bad initial token"),U.valid|=1,U.programtype=O[1],U.string+=L+`
`;L=h(A),L!==!1;){if(U.string+=L+`
`,L.charAt(0)==="#"){U.comments+=L+`
`;continue}if((O=L.match(M))&&(U.gamma=parseFloat(O[1])),(O=L.match(E))&&(U.exposure=parseFloat(O[1])),(O=L.match(C))&&(U.valid|=2,U.format=O[1]),(O=L.match(I))&&(U.valid|=4,U.height=parseInt(O[1],10),U.width=parseInt(O[2],10)),U.valid&2&&U.valid&4)break}return U.valid&2||o(3,"missing format specifier"),U.valid&4||o(3,"missing image size specifier"),U},f=function(A,y,M){let E=y;if(E<8||E>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);E!==(A[2]<<8|A[3])&&o(3,"wrong scanline width");let C=new Uint8Array(4*y*M);C.length||o(4,"unable to allocate buffer space");let I=0,U=0,L=4*E,O=new Uint8Array(4),k=new Uint8Array(L),V=M;for(;V>0&&U<A.byteLength;){U+4>A.byteLength&&o(1),O[0]=A[U++],O[1]=A[U++],O[2]=A[U++],O[3]=A[U++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=E)&&o(3,"bad rgbe scanline format");let z=0,W;for(;z<L&&U<A.byteLength;){W=A[U++];let ue=W>128;if(ue&&(W-=128),(W===0||z+W>L)&&o(3,"bad scanline data"),ue){let le=A[U++];for(let be=0;be<W;be++)k[z++]=le}else k.set(A.subarray(U,U+W),z),z+=W,U+=W}let Z=E;for(let ue=0;ue<Z;ue++){let le=0;C[I]=k[ue+le],le+=E,C[I+1]=k[ue+le],le+=E,C[I+2]=k[ue+le],le+=E,C[I+3]=k[ue+le],I+=4}V--}return C},p=function(A,y,M,E){let C=A[y+3],I=Math.pow(2,C-128)/255;M[E+0]=A[y+0]*I,M[E+1]=A[y+1]*I,M[E+2]=A[y+2]*I,M[E+3]=1},x=function(A,y,M,E){let C=A[y+3],I=Math.pow(2,C-128)/255;M[E+0]=_r.toHalfFloat(Math.min(A[y+0]*I,65504)),M[E+1]=_r.toHalfFloat(Math.min(A[y+1]*I,65504)),M[E+2]=_r.toHalfFloat(Math.min(A[y+2]*I,65504)),M[E+3]=_r.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let g=d(m),S=g.width,_=g.height,v=f(m.subarray(m.pos),S,_),T,b,w;switch(this.type){case fn:w=v.length/4;let A=new Float32Array(w*4);for(let M=0;M<w;M++)p(v,M*4,A,M*4);T=A,b=fn;break;case Dt:w=v.length/4;let y=new Uint16Array(w*4);for(let M=0;M<w;M++)x(v,M*4,y,M*4);T=y,b=Dt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:S,height:_,data:T,header:g.string,gamma:g.gamma,exposure:g.exposure,type:b}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){switch(o.type){case fn:case Dt:o.colorSpace=Zt,o.minFilter=It,o.magFilter=It,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,r)}};var Mu=class extends yu{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}};var vo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},VS=new rr(-1,1,1,-1,0,1),uf=class extends Oe{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}},kS=new uf,Pi=class{constructor(e){this._mesh=new dt(kS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Su=class extends yn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_n.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xa=class extends yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},Tu=class extends yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var bu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Su(vo),this.copyPass.material.blending=pi,this.clock=new Ua}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xa!==void 0&&(o instanceof Xa?n=!0:o instanceof Tu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Eu=class extends yn{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};var bg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var _o=class i extends yn{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Gt(s,o,{type:Dt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Gt(s,o,{type:Dt});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Gt(s,o,{type:Dt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}let a=bg;this.highPassUniforms=_n.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_n.clone(vo.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,blending:ts,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Me,this._oldClearAlpha=1,this._basic=new Ht,this._fsQuad=new Pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ce(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};_o.BlurDirectionX=new ce(1,0);_o.BlurDirectionY=new ce(0,1);var qa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var wu=class extends yn{constructor(){super(),this.uniforms=_n.clone(qa.uniforms),this.material=new Ea({name:qa.name,uniforms:this.uniforms,vertexShader:qa.vertexShader,fragmentShader:qa.fragmentShader}),this._fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===bc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ya={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ja={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Au={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var Ru=class extends yn{constructor(){super(),this._edgesRT=new Gt(1,1,{depthBuffer:!1,type:Dt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Gt(1,1,{depthBuffer:!1,type:Dt}),this._weightsRT.texture.name="SMAAPass.weights";let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new zt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=It,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new zt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=qt,this._searchTexture.minFilter=qt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=_n.clone(Ya.uniforms),this._materialEdges=new bt({defines:Object.assign({},Ya.defines),uniforms:this._uniformsEdges,vertexShader:Ya.vertexShader,fragmentShader:Ya.fragmentShader}),this._uniformsWeights=_n.clone(ja.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new bt({defines:Object.assign({},ja.defines),uniforms:this._uniformsWeights,vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader}),this._uniformsBlend=_n.clone(Au.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new bt({uniforms:this._uniformsBlend,vertexShader:Au.vertexShader,fragmentShader:Au.fragmentShader}),this._fsQuad=new Pi(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}};var Ii=1e-7;function Za(i,e){return Math.min(i.x+i.w/2,e.x+e.w/2)-Math.max(i.x-i.w/2,e.x-e.w/2)>Ii&&Math.min(i.z+i.d/2,e.z+e.d/2)-Math.max(i.z-i.d/2,e.z-e.d/2)>Ii}function Cu(i,e){if(!Za(i,e))return[i];let t=i.x-i.w/2,n=i.x+i.w/2,r=i.z-i.d/2,s=i.z+i.d/2,o=Math.max(t,e.x-e.w/2),a=Math.min(n,e.x+e.w/2),l=Math.max(r,e.z-e.d/2),c=Math.min(s,e.z+e.d/2);return[[t,o,r,s],[a,n,r,s],[o,a,r,l],[o,a,c,s]].filter(([u,h,d,f])=>h-u>Ii&&f-d>Ii).map(([u,h,d,f])=>({...i,x:(u+h)/2,z:(d+f)/2,w:h-u,d:f-d}))}function GS(i){let e=[],t=i.map((n,r)=>({...n,id:r})).sort((n,r)=>r.top-n.top||r.id-n.id);for(let n=0;n<t.length;n++){let r=[t[n]];for(let s=0;s<n&&r.length;s++)Za(t[n],t[s])&&(r=r.flatMap(o=>Cu(o,t[s])));e.push(...r)}return e}function Eg(){let i=[];return{add(e,t,n,r,s,o,a){i.push({m:e,x:t,z:r,w:s,d:a,y:n,h:o,top:n+o/2})},flush(e,t=[]){let n=t.filter(f=>!f.polygon&&!i.some(p=>Math.abs(p.x-f.x)<Ii&&Math.abs(p.z-f.z)<Ii&&Math.abs(p.w-f.w)<Ii&&Math.abs(p.d-f.d)<Ii&&Math.abs(p.top-f.y)<Ii)),r=GS(i),s=0;for(let f of n)r=r.flatMap(p=>f.y+Ii<p.top||!Za(p,f)?[p]:(s++,Cu(p,f)));let o=new Map,a=new on(1,1,1).toNonIndexed(),l=a.attributes.position,c=a.attributes.normal,u=a.attributes.uv;for(let f of r){let p=i[f.id],x=o.get(f.m);x||(x={positions:[],normals:[],uvs:[]},o.set(f.m,x));for(let m=0;m<l.count;m++){let g=f.x+l.getX(m)*f.w,S=f.y+l.getY(m)*f.h,_=f.z+l.getZ(m)*f.d;x.positions.push(g,S,_),x.normals.push(c.getX(m),c.getY(m),c.getZ(m)),Math.abs(c.getY(m))>.5?x.uvs.push((g-p.x)/p.w+.5,.5-(_-p.z)/p.d):x.uvs.push(u.getX(m),u.getY(m))}}a.dispose();for(let[f,p]of o){let x=new Oe;x.setAttribute("position",new Ie(p.positions,3)),x.setAttribute("normal",new Ie(p.normals,3)),x.setAttribute("uv",new Ie(p.uvs,2)),x.computeBoundingSphere();let m=new dt(x,f);m.receiveShadow=!0,m.castShadow=!1,m.name="Resolved ground paving",e.add(m)}let h=0,d=0;for(let f=0;f<i.length;f++)for(let p=0;p<f;p++)Za(i[f],i[p])&&h++;for(let f=0;f<r.length;f++)for(let p=0;p<f;p++)Za(r[f],r[p])&&d++;return{sourceSlabs:i.length,coveredBySteps:s,overlappingPairsBefore:h,overlappingPairsAfter:d,resolvedPieces:r.length,materialBatches:o.size,rectangles:r.map(({x:f,z:p,w:x,d:m,top:g,id:S})=>({x:f,z:p,w:x,d:m,top:g,id:S}))}}}}var hf=4312;function Se(){return hf=hf*1664525+1013904223>>>0,hf/4294967296}var $=(i,e={})=>new Ct({color:i,roughness:.83,...e});function ft(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let r=new ua(n);return r.colorSpace=yt,r}var WS=new Qr;function fs(i,e,t=16777215){let n={};for(let[s,o]of[["map","color"],["normalMap","normal"],["roughnessMap","rough"]]){let a=WS.load(`assets/${i}-${o}.jpg`);a.wrapS=a.wrapT=Ft,a.repeat.set(e,e),a.anisotropy=8,s==="map"&&(a.colorSpace=yt),n[s]=a}let r=$(t,{...n,normalScale:new ce(.55,.55),roughness:.95});return i==="asphalt"&&(r.userData.groundSlab=!0),r}var Pu=ft(1024,1024,(i,e,t)=>{i.fillStyle="#7b7b70",i.fillRect(0,0,e,t);for(let n=0;n<16;n++)for(let r=-1;r<8;r++){let s=Math.floor(151+Se()*24);i.fillStyle=`rgb(${s},${s+1},${s-4})`,i.fillRect(r*128+n%2*64+2,n*64+2,124,60)}for(let n=0;n<4e4;n++){let r=Se()>.5?255:20;i.fillStyle=`rgba(${r},${r},${r},.045)`,i.fillRect(Se()*e,Se()*t,2,2)}});Pu.wrapS=Pu.wrapT=Ft;Pu.anisotropy=8;function gi(i,e){let t=Pu.clone();t.repeat.set(i/5,e/5);let n=$(15197400,{map:t,roughness:.95});return n.userData.groundSlab=!0,n}var Ar=ft(256,512,(i,e,t)=>{i.fillStyle="#736657",i.fillRect(0,0,e,t);for(let n=0;n<1700;n++){let r=45+Se()*90;i.strokeStyle=`rgba(${r+12},${r+5},${r},.3)`,i.lineWidth=Se()*5+.4;let s=Se()*e,o=Se()*t;i.beginPath(),i.moveTo(s,o),i.lineTo(s+Se()*9-4,o+10+Se()*100),i.stroke()}});Ar.wrapS=Ar.wrapT=Ft;var wg=ft(256,256,(i,e,t)=>{for(let n=0;n<36;n++){let r=20+Se()*216,s=20+Se()*216,o=12+Se()*16;i.save(),i.translate(r,s),i.rotate(Se()*6.28),i.fillStyle=`rgb(${80+Se()*75},${102+Se()*80},${32+Se()*42})`,i.beginPath(),i.ellipse(0,0,o,o*.42,0,0,6.28),i.fill(),i.strokeStyle="#b6bd6470",i.lineWidth=.7,i.beginPath(),i.moveTo(-o,0),i.lineTo(o,0),i.stroke(),i.restore()}}),Y2=ft(512,512,(i,e,t)=>{i.fillStyle="#ded7c1",i.fillRect(0,0,e,t);for(let n=0;n<170;n++){let r=Se()*e,s=Se()*t;i.save(),i.translate(r,s),i.rotate(Se()*6.28),i.fillStyle=["#414641","#5c6256","#879077","#a49d85"][Math.floor(Se()*4)],i.beginPath(),i.ellipse(0,0,5+Se()*12,3+Se()*5,Se()*3,0,6.28),i.fill(),i.restore()}});function Ag(i,{bg:e=null,color:t="#413c33",size:n=64,width:r=1024,height:s=128,font:o='"Noto Serif SC",serif'}={}){return ft(r,s,(a,l,c)=>{e&&(a.fillStyle=e,a.fillRect(0,0,l,c)),a.font=`500 ${n}px ${o}`,a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.fillText(i,l/2,c/2,l-30)})}var Ka=ft(128,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#a7b8b7"),n.addColorStop(.45,"#5f787f"),n.addColorStop(1,"#364b50"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="#d7d3ba55",i.fillRect(3,3,20,t-6),i.fillRect(e-19,3,16,t-6);for(let r=0;r<6;r++)i.fillStyle="#eef0d819",i.fillRect(4+r*3,0,1,t);i.fillStyle="#293e4140",i.fillRect(0,t*.7,e,t*.09)});function Rg({box:i,inst:e,path:t,tree:n,shrubs:r,solid:s,roads:o}){let a=$(11184535),l=$(5655351),c=$(8810576),u=new Mt(1,1,.07,16),h=[[-38,-11,3.2,66],[38,-11,3.2,66],[0,-28,79,4],[0,-36,7,16],[0,20,79,4]];for(let[p,x,m,g]of h)t(p,x,m,g);for(let p of[-17,17]){t(p,-31,5.8,3.5);let x=Math.max(...o.filter(m=>Math.abs(p-m.x)<m.w/2&&Math.abs(-31-m.z)<m.d/2).map(m=>m.y));i(a,p,x+.22,-31.8,4.3,.44,.68);for(let m=0;m<5;m++)i(c,p,x+.46,-32.07+m*.135,4.4,.055,.12);s(p,-31.8,4.4,.75,x+.5)}let d=[[-10,-38,9,6],[-24,-38,9,6],[-33,-37,5,6],[10,-38,9,6],[24,-38,9,6],[33,-37,5,6],[-43,-19,4,10],[-43,-4,4,10],[-43,11,4,9],[43,-27,4,9],[43,-12,4,10],[43,4,4,10],[43,16,4,6]];for(let[p,x,m,g]of d)e(u,l,p,.035,x,m*.51,1,g*.51),r.addPatch(p,x,m,g,{baseY:.065,height:.6}),s(p,x,m*.8,g*.8,.65);let f=[[-10,-38,.94],[-24,-38,1.06],[-33,-37,.85],[10,-38,1.02],[24,-38,.97],[33,-37,.86],[-43,-19,1.05],[-43,-4,.95],[-43,11,1.02],[43,-27,.92],[43,-12,1.08],[43,4,.94],[43,16,.87]];for(let[p,x,m]of f)n(p,x,m);return{beds:d.length,trees:f.length,seats:2,paths:h.length,confidence:"approximate peripheral planting, exact positions unverified"}}function Cg({box:i,mesh:e,tree:t,hedge:n,surfaces:r,roads:s}){let o=$(12435381),a=$(6844524),l=fs("grass",12,8691040),c=.35,u=.14,h=.07,d=new ln(c,24,16),f=new Mt(.11,.16,h,16);function p(x,m){let g=Math.max(0,...s.filter(v=>ds(v,x,m)).map(v=>v.y),...r.filter(v=>ds(v,x,m)).map(v=>v.y)),S=g+u;i(o,x,g+u/2,m,.72,u,.72),e(f,o,x,S+h/2,m);let _=e(d,o,x,S+h+c-.015,m);_.name="forecourt-stone-bollard"}i(l,0,.08,175.5,14,.16,32),r.push({x:0,z:175.5,w:14,d:32,y:.16});for(let x of[-7.1,7.1])i(o,x,.16,175.5,.23,.32,32.3);for(let x of[159.4,191.6])i(o,0,.16,x,14.4,.32,.23);for(let x of[-1,1]){for(let m of[8.25,15.75])i(a,x*m,.151,176,.25,.03,43);for(let m=159;m<198;m+=3.2)i(a,x*12,.151,m,7.45,.03,.16);n(x*24,161,13,1.2),n(x*24,195,13,1.2),n(x*29.8,178,1.2,31),n(x*24,146.7,22,1.3);for(let m of[165,186])i(o,x*24,.13,m,5.3,.26,3.3),i(l,x*24,.27,m,4.95,.1,2.95),n(x*24,m,4.5,2.5);for(let m of[9,12,15])p(x*m,198)}t(-4.3,169,.83),t(4.4,164.6,.93),t(-4.4,160.8,.83),i(gi(6.8,8.7),0,.19,184.8,6.8,.1,8.7),r.push({x:0,z:184.8,w:6.8,d:8.7,y:.24})}var XS={x:-74,z:157.5,w:20,d:45,h:16.6,entranceZ:157,landingY:1.21};function Pg({box:i,label:e,solid:t,buildings:n,surfaces:r,path:s}){let{x:o,z:a,w:l,d:c,h:u,entranceZ:h,landingY:d}=XS,f=$(12566194),p=$(13027004),x=$(8752006),m=$(3688522),g=$(9937307,{metalness:.4,roughness:.5}),S=$(13752789,{map:Ka,metalness:.25,roughness:.35}),_=$(6713449);S.userData.castShadow=!1,g.userData.castShadow=!1,n.push({name:"\u884C\u653F\u697C",x:o,z:a,w:l,d:c,h:u}),t(o,a,l,c,u),i(f,o,u/2,a,l,u,c),i(x,o,.59,a,l+.1,1.18,c+.1),i(_,o,u+.07,a,l+.18,.14,c+.18),n.push({name:"\u884C\u653F\u697C\u5357\u7FFC",x:-108.5,z:170,w:49,d:20,h:u}),t(-108.5,170,49,20,u),i(f,-108.5,u/2,170,49,u,20),i(x,-108.5,.59,170,49.1,1.18,20.1),i(_,-108.5,u+.07,170,49.18,.14,20.18);let v=[{x:-64,z:157.5,nx:1,nz:0,ux:0,uz:1,length:45},{x:-74,z:135,nx:0,nz:-1,ux:1,uz:0,length:20},{x:-84,z:147.5,nx:-1,nz:0,ux:0,uz:1,length:25},{x:-108.5,z:160,nx:0,nz:-1,ux:1,uz:0,length:49},{x:-133,z:170,nx:-1,nz:0,ux:0,uz:1,length:20},{x:-98.5,z:180,nx:0,nz:1,ux:1,uz:0,length:69}];function T(E,C,I,U,L,O,k,V){i(C,E.x+E.ux*I+E.nx*L,U,E.z+E.uz*I+E.nz*L,E.nx?V:O,k,E.nx?O:V)}for(let E of v){let C=Math.floor(E.length/3.4),I=(E.length-1.4)/C;for(let U=0;U<4;U++){let L=2.62+U*3.48;for(let O=0;O<C;O++){let k=-E.length/2+.7+(O+.5)*I;if(!(E.nx===1&&U===0&&Math.abs(E.z+k-h)<5.1)){T(E,m,k,L,.035,2.22,2.26,.12),T(E,S,k,L,.11,2.02,2.1,.05);for(let V of[-1.03,0,1.03])T(E,g,k+V,L,.16,.055,2.18,.075);for(let V of[-1.07,.35,1.07])T(E,g,k,L+V,.16,2.12,.055,.075);T(E,p,k,L-1.2,.18,2.38,.17,.4),T(E,p,k,L+1.22,.1,2.32,.13,.24)}}U>0&&T(E,p,0,L-1.6,.075,E.length,.13,.22)}for(let U of[-E.length/2+.18,E.length/2-.18])T(E,p,U,u/2,.1,.36,u,.24);T(E,p,0,u-.1,.2,E.length+.3,.38,.55),T(E,p,0,u+.4,.04,E.length+.12,.65,.24),T(E,_,0,u+.77,.08,E.length+.24,.1,.38)}let b=o+l/2,w=6.4;i(m,b+.06,d+1.65,h,.14,3.3,w+.3);for(let E=0;E<4;E++){let C=h+(E-1.5)*w/4;i(S,b+.17,d+1.61,C,.06,3.12,w/4-.08),i(g,b+.23,d+1.63,C+w/8,.085,3.22,.065)}for(let E of[-.17,.17])i(p,b+.32,d+1.42,h+E,.075,.68,.055);i(p,b+1.02,d+3.51,h,2.35,.32,10.55),i(_,b+1.03,d+3.72,h,2.46,.1,10.72);for(let E of[-4.76,4.76])i(p,b+1.58,d+1.68,h+E,.4,3.36,.4),t(b+1.58,h+E,.44,.44,d+3.36);let A=e("\u884C\u653F\u697C",b+2.23,d+3.49,h,3,.55,{font:'"Kaiti SC",serif',color:"#554d3e"});A.rotation.y=Math.PI/2;let y=1.8,M=10.4;i(p,b+y/2,d/2,h,y,d,M),r.push({x:b+y/2,z:h,w:y,d:M,y:d});for(let E=0;E<7;E++){let C=b+y+(E+.5)*.5,I=d-E*.15;i(p,C,I/2,h,.5,I,M),i(x,C+.228,I-.055,h,.035,.035,M-.12),r.push({x:C,z:h,w:.5,d:M,y:I});for(let U of[-1,1])i(p,C,(I+.2)/2,h+U*5.38,.5,I+.2,.3),t(C,h+U*5.38,.5,.3,I+.2)}for(let E of[-1,1])i(p,b+.9,(d+.2)/2,h+E*5.38,1.8,d+.2,.3),t(b+.9,h+E*5.38,1.8,.3,d+.2);s(b+5.65,h,1.3,11.5),i(gi(1.25,c),b+.69,.055,a,1.25,.1,c),r.push({x:b+.69,z:a,w:1.25,d:c,y:.105})}function Ja(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Oe,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in s){let h=Ig(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let p=Ig(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Ig(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new je(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let x=u.getComponent(d,p);a.setComponent(d+h,p,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Lg(){let i={rubber:[],paint:[],metal:[],reflector:[]},e={rubber:new Ct({color:2566953,roughness:.92}),paint:new Ct({color:3430739,metalness:.3,roughness:.52}),metal:new Ct({color:10267304,metalness:.55,roughness:.52}),reflector:new Ct({color:10961969,roughness:.5})};function t(p,x){i[p].push(x)}function n(p,x,m,g=.013,S=6){let _=new R(...x),v=new R(...m).sub(_),T=new Mt(g,g,v.length(),S);T.applyQuaternion(new Ue().setFromUnitVectors(new R(0,1,0),v.clone().normalize())),T.translate(..._.addScaledVector(v,.5).toArray()),t(p,T)}function r(p,x,m,g,S,_,v){t(p,new on(S,_,v).translate(x,m,g))}function s(p,x,m,g,S,_=.008,v=Math.PI*2,T=0){let b=new er(S,_,5,Math.ceil(36*v/(Math.PI*2)),v);b.rotateZ(T),b.translate(x,m,g),t(p,b)}let o=[-.53,.34,0],a=[.54,.34,0],l=[-.08,.29,0],c=[-.23,.81,0],u=[.34,.86,0],h=[.39,.7,0];for(let[p,x]of[o,a]){s("rubber",p,x,0,.317,.023),s("metal",p,x,0,.291,.009),n("metal",[p,x,-.05],[p,x,.05],.023,8);for(let m=0;m<16;m++){let g=m*Math.PI/8;n("metal",[p,x,m%2?.023:-.023],[p+Math.cos(g)*.287,x+Math.sin(g)*.287,0],.003,4)}s("paint",p,x,0,.362,.013,Math.PI+.3,-.15)}for(let[p,x]of[[l,c],[c,u],[u,h],[h,l]])n("paint",p,x,.021,8);for(let p of[-1,1])n("paint",[-.53,.34,p*.052],[-.08,.29,p*.035],.013),n("paint",[-.53,.34,p*.052],[-.23,.81,p*.025],.013),n("paint",[.39,.7,p*.047],[.54,.34,p*.047],.018);n("metal",c,[-.26,.94,0],.014);let d=new an;d.moveTo(-.15,-.085),d.quadraticCurveTo(-.2,0,-.15,.085),d.quadraticCurveTo(-.07,.11,.015,.045),d.lineTo(.13,.025),d.quadraticCurveTo(.16,0,.13,-.025),d.lineTo(.015,-.045),d.quadraticCurveTo(-.07,-.11,-.15,-.085);let f=new Fn(d,{depth:.035,steps:1,bevelEnabled:!0,bevelSize:.008,bevelThickness:.007,bevelSegments:1,curveSegments:4});f.rotateX(-Math.PI/2),f.translate(-.25,.93,0),t("rubber",f),n("metal",u,[.3,1.04,0],.015),n("metal",[.3,1.04,0],[.38,1.04,0],.014),n("metal",[.38,1.04,-.16],[.38,1.04,.16],.014);for(let p of[-1,1])n("metal",[.38,1.04,p*.16],[.28,1.07,p*.24],.014),n("rubber",[.28,1.07,p*.24],[.18,1.07,p*.29],.022,8),n("metal",[.28,1.045,p*.2],[.18,1.035,p*.24],.007);t("metal",new ln(.027,8,5).scale(1,.6,1).translate(.35,1.065,.12));for(let p of[-1,1])n("metal",[-.76,.77,p*.115],[-.36,.77,p*.115],.01),n("metal",[-.7,.77,p*.115],[-.53,.34,p*.065],.01),n("metal",[-.36,.77,p*.115],[-.24,.82,p*.03],.01);for(let p of[-.76,-.66,-.55,-.45,-.36])n("metal",[p,.77,-.115],[p,.77,.115],.009);r("reflector",-.778,.748,0,.018,.052,.07),s("metal",-.08,.29,.085,.083,.012),s("metal",-.53,.34,.085,.037,.009),n("rubber",[-.53,.379,.086],[-.08,.375,.086],.007,4),n("rubber",[-.53,.301,.086],[-.08,.205,.086],.007,4);for(let p of[-1,1]){let x=-.08+p*.12,m=.29-p*.09;n("metal",[-.08,.29,p*.085],[x,m,p*.085],.012),n("metal",[x,m,p*.085],[x,m,p*.155],.012),r("rubber",x,m,p*.17,.1,.033,.13)}return n("metal",[-.16,.28,-.055],[-.31,.014,-.26],.012),r("rubber",-.31,.01,-.26,.065,.02,.04),Object.entries(i).map(([p,x])=>{let m=x.map(S=>S.index?S.toNonIndexed():S),g=Ja(m);return new Set([...x,...m]).forEach(S=>S.dispose()),g.computeBoundingBox(),{kind:p,geometry:g,material:e[p]}})}var Lu=ft(512,1024,(i,e,t)=>{i.fillStyle="#b8b8b3",i.fillRect(0,0,e,t);for(let n=0;n<52e3;n++){let r=105+Se()*135;i.fillStyle=`rgba(${r},${r},${r-3},${.03+Se()*.13})`;let s=Se()*9+1;i.fillRect(Se()*e,Se()*t,s,s*.5)}for(let n=0;n<100;n++){i.strokeStyle=`rgba(75,82,83,${Se()*.11})`,i.lineWidth=Se()*8+1,i.beginPath();let r=Se()*e,s=Se()*t;i.moveTo(r,s);for(let o=0;o<12;o++)r+=Se()*35-17,s+=Se()*40,i.lineTo(r,s);i.stroke()}for(let n=0;n<t;n+=128)i.fillStyle="#72777360",i.fillRect(0,n,e,2),i.fillStyle="#eeeee230",i.fillRect(0,n+2,e,2)});Lu.wrapS=Lu.wrapT=Ft;var rn=$(15724522,{map:Lu,bumpMap:Lu,bumpScale:.015,roughness:.72}),Iu=$(13224383,{roughness:.75}),ps=$(10067349),Qa=$(9607828,{metalness:.52,roughness:.47}),Rr=$(4344910,{metalness:.28,roughness:.42}),$a=Array.from({length:8},(i,e)=>{let t=ft(256,384,(n,r,s)=>{let o=n.createLinearGradient(0,0,80,s);o.addColorStop(0,e%3===0?"#72919e":"#687f89"),o.addColorStop(.5,"#44575e"),o.addColorStop(1,"#283637"),n.fillStyle=o,n.fillRect(0,0,r,s);let a=15+e*8;n.fillStyle=e%3===0?"#c1c1ad88":"#9caca582",n.fillRect(0,0,a,s),n.fillRect(r-a*.6,0,a*.6,s);for(let l=0;l<a;l+=6)n.fillStyle="#e8e4cc24",n.fillRect(l,0,2,s);n.fillStyle="#17262a55",n.fillRect(0,s*.73,r,5),n.fillRect(0,s*.12,r,3),n.fillStyle="#b1c6cb24",n.beginPath(),n.moveTo(0,0),n.lineTo(r,0),n.lineTo(r,s*.35),n.lineTo(0,s*.55),n.fill()});return $(16777215,{map:t,metalness:.22,roughness:.3,envMapIntensity:.85})});for(let i of[Qa,...$a])i.userData.castShadow=!1;var qS=$(12434865),YS=ft(128,80,(i,e,t)=>{i.fillStyle="#c3c5bc",i.fillRect(0,0,e,t),i.strokeStyle="#78817e",i.lineWidth=2;for(let n=6;n<53;n+=5)i.beginPath(),i.moveTo(n,8),i.lineTo(n,t-8),i.stroke();for(let n=6;n<29;n+=3)i.beginPath(),i.arc(88,40,n,0,Math.PI*2),i.stroke()}),jS=$(15198172,{map:YS}),Li=new an;Li.moveTo(-.74,-.26);Li.lineTo(.74,-.26);Li.quadraticCurveTo(.74,-.13,.87,-.13);Li.lineTo(.87,.13);Li.quadraticCurveTo(.74,.13,.74,.26);Li.lineTo(-.74,.26);Li.quadraticCurveTo(-.74,.13,-.87,.13);Li.lineTo(-.87,-.13);Li.quadraticCurveTo(-.74,-.13,-.74,-.26);var ZS=new Fn(Li,{depth:.055,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.032,bevelThickness:.025});function Dg(i){let{box:e,inst:t,mesh:n,label:r,solid:s,buildings:o,surfaces:a}=i,l=(p,x,m,g,S,_=0,v=1)=>{e(Rr,p,x,m,g+.15,S+.13,.08),e($a[_%8],p,x,m+v*.06,g,S,.06);for(let T of[-g/2,0,g/2])e(Qa,p+T,x,m+v*.105,.045,S+.06,.09);for(let T of[-S/2,S/2,S*.23])e(Qa,p,x+T,m+v*.11,g+.08,.035,.11)},c=(p,x,m,g=1)=>{e(qS,p,x,m,.65,.43,.27),e(jS,p,x,m+g*.143,.61,.38,.015),e(Rr,p,x-.245,m+g*.08,.72,.035,.35)};function u(){o.push({name:"\u4E3B\u6559\u697C",x:0,z:133,w:97,d:19,h:23.5}),s(0,133,97,19,23.5),e(ps,0,23.5/2,133,97,23.5,19);for(let v of[-1,1]){let T=133+v*9.5;for(let b=0;b<31;b++){let w=(b-15)*3.06;for(let A=0;A<6;A++){let y=2.3+A*3.54;l(w,y,T+v*.08,2.08,2.36,(b*3+A*7)%8,v),A<5&&(e(Iu,w,y+1.74,T+v*.13,2.58,.88,.17),t(ZS,ps,w,y+1.74,T+v*.235,1,1,1,v<0?Math.PI:0)),(b+A)%3!==1&&A>0&&c(w+.2,y-1.56,T+v*.43,v)}}for(let b=0;b<=31;b++){let w=-47.43+b*3.06;e(rn,w,13.35,T+v*.31,.63,19.8,.6);for(let A of[-1,1])e(Iu,w+A*.26,13.35,T+v*.645,.075,19.3,.06);e(Rr,w,22.42,T+v*.66,.09,.5,.025)}e(rn,0,23.35,T+v*.4,98,.4,.9),e(Iu,0,23.65,T+v*.45,98.2,.16,1),e(Rr,0,23.09,T+v*.42,97.7,.12,.7)}e(rn,0,.4,133,97.7,.8,19.5),e(Rr,0,23.55,133,97,.2,19),e(Rr,0,2.77,142.59,14,3.4,.13);for(let v of[-5.2,-2.6,0,2.6,5.2])l(v,2.75,142.7,2.2,3.3,3);e(rn,0,4.74,145.2,17.6,.4,5.8),e(Iu,0,5,145.2,18,.13,6),e(rn,0,.53,145.15,17,1.06,5.3),a.push({x:0,z:145.15,w:17,d:5.3,y:1.06});for(let v of[-7.35,-4.8,4.8,7.35])e(rn,v,2.81,147,.48,3.5,.48),s(v,147,.48,.48,4.6);for(let v=0;v<6;v++){let T=148.075+v*.55,b=1.06-v*.15;e(rn,0,b/2,T,18,b,.55),a.push({x:0,z:T,w:18,d:.55,y:b});for(let w of[-1,1])e(rn,w*9.15,(b+.15)/2,T,.3,b+.15,.55),s(w*9.15,T,.3,.55,b+.15)}let _=$(6580330,{metalness:.6,roughness:.65});for(let[v,T]of[..."\u5317\u4EAC\u5316\u5DE5\u5927\u5B66"].entries()){let b=(v-2.5)*5.5,w=ft(512,512,M=>{M.font='700 420px "STXingkai","Xingkai SC","Kaiti SC",serif',M.textAlign="center",M.textBaseline="middle",M.fillStyle=M.strokeStyle="#b51d2b",M.lineWidth=10,M.lineJoin="round",M.strokeText(T,256,274),M.fillText(T,256,274)});w.anisotropy=8;let A=new Ht({map:w,alphaTest:.45,side:rt,toneMapped:!1}),y=n(new Yt(5.3,5.3),A,b,26.15,142.15);y.name="\u5C4B\u9876\u6821\u540D \xB7 "+T;for(let M of[-.9,.9])e(_,b+M,25.45,141.93,.07,3.5,.09)}for(let v of[24.55,26.3])e(_,0,v,141.92,32,.065,.085);r("\u5B8F \u5FB7 \u535A \u5B66   \u5316 \u80B2 \u5929 \u5DE5",0,5.76,148.25,16.8,1.35,{font:'"Heiti SC",sans-serif',color:"#ad231d",size:116}),r("\u5B8F \u5FB7 \u535A \u5B66    \u5316 \u80B2 \u5929 \u5DE5",0,21.45,122.74,34,2.2,{font:'"Kaiti SC",serif',color:"#9d3026",size:86}).rotation.y=Math.PI;for(let v of[-1,1]){let T=v*48.5;for(let b=0;b<6;b++)for(let w=0;w<5;w++){let A=126+w*3.5,y=2.3+b*3.54;e(Rr,T+v*.06,y,A,.13,2.49,2.12),e($a[(b+w)%8],T+v*.14,y,A,.05,2.36,1.97);for(let M of[-.98,0,.98])e(Qa,T+v*.2,y,A+M,.08,2.4,.055);for(let M of[-1.18,.36,1.18])e(Qa,T+v*.2,y+M,A,.08,.04,2.03);e(rn,T+v*.24,y-1.3,A,.42,.14,2.3)}for(let b of[3.75,7.25,10.75,14.3,17.8,23.5])e(rn,T+v*.22,b,133,.46,.18,19.2)}}let h=[];function d(){o.push({name:"\u9038\u592B\u56FE\u4E66\u9986",x:0,z:-13,w:57,d:23,h:18.8}),s(0,-13,57,23,18.8);let S=$(2702659,{roughness:.9}),_=$(11845312,{metalness:.66,roughness:.32}),v=$(9018271,{metalness:.52,roughness:.3});_.userData.castShadow=!1,e(S,0,9,-15,56,18,18);let T=Array.from({length:4},(y,M)=>{let E=new dn({color:new Me([4614777,5601412,4285555,5930120][M]),metalness:.12,roughness:.2,transparent:!0,opacity:.92,clearcoat:.5,clearcoatRoughness:.16,envMapIntensity:.8,reflectivity:.5});return E.userData.castShadow=!1,E.userData.libraryGlass=!0,h.push(E),E}),b=new Yt(1,1),w=38,A=1.5;for(let y=0;y<w;y++){let M=-27.75+y*A,E=-1.4+2.2*(1-(M/29)**2),C=Math.atan(4.4*M/841);for(let I=0;I<5;I++){let U=1.72+I*3.16;t(b,T[(y*7+I)%4],M,U,E,1.46,3.02,1,C),e(_,M+.745,U,E+.07,.052,3.16,.09);for(let L of[-1.51,-.4,.67,1.51])e(_,M,U+L,E+.07,1.5,.043,.09);if(I>0){e(v,M,U-1.51,E-.12,1.5,.43,.38);for(let L=0;L<3;L++)e(_,M,U-1.7+L*.14,E+.35,1.5,.045,.72)}e(S,M,U-1.55,E-1.65,1.5,.16,3.2)}t(b,T[2],M,17.58,E-.48,1.43,1.55,1,C),e(_,M+.73,17.59,E-.32,.065,1.75,.1),e(rn,M,18.59,E+.36,1.53,.18,2.2)}e(rn,0,9.3,-24.1,56.25,18.6,.18),e(rn,0,18.72,-11.8,57.2,.2,26),e(ps,0,.3,-24.22,56.4,.6,.18);for(let y=0;y<6;y++){let M=1.7+y*3.05;for(let E=0;E<18;E++){let C=(E-8.5)*3;t(b,$a[(E+y*3)%8],C,M,-24.225,2.58,2.2,1,Math.PI);for(let I of[-1.32,0,1.32])e(_,C+I,M,-24.27,.065,2.28,.07);for(let I of[-1.13,.32,1.13])e(_,C,M+I,-24.27,2.7,.065,.07)}e(v,0,M+1.43,-24.22,56.35,.3,.16)}for(let y of[-1,1]){e(rn,y*28.08,9.3,-20.3,.16,18.6,7.6);for(let M=0;M<6;M++){let E=1.7+M*3.05;for(let C=0;C<3;C++){let I=-22.9+C*2.5;t(b,$a[(C+M*3)%8],y*28.19,E,I,2.1,2.2,1,y*Math.PI/2);for(let U of[-1.08,0,1.08])e(_,y*28.23,E,I+U,.07,2.28,.065);for(let U of[-1.13,.32,1.13])e(_,y*28.23,E+U,I,.07,.065,2.23)}e(v,y*28.2,E+1.43,-20.3,.18,.3,7.7)}e(ps,y*28.19,.3,-20.3,.18,.6,7.7)}for(let y of[-1,1]){e(rn,y*31,10,-9,6,20,15),s(y*31,-9,6,15,20);for(let M=1;M<20;M+=1.1)e(ps,y*31,M,-1.465,6,.025,.025);for(let M of[-2,0,2])e(ps,y*31+M,10,-1.46,.025,20,.03)}r("\u9038\u592B\u56FE\u4E66\u9986",31,16.8,-1.4,5.4,1.05,{font:'"Kaiti SC",serif',color:"#4d554f"}),e(S,0,2.35,1.1,8.5,4.7,.14);for(let y of[-3,-1,1,3])t(b,T[0],y,2.25,1.38,1.92,4.4,1),e(_,y+1,2.25,1.45,.065,4.5,.1),Math.abs(y)===1&&e(_,y*.43,1.8,1.62,.06,1,.08);e(_,0,4.61,1.48,8.6,.17,.2);for(let y of[-5.4,5.4]){n(new Mt(.93,.93,5.1,32),rn,y,2.55,1.45),s(y,1.45,1.9,1.9,5.1);for(let M=.75;M<5;M+=.75){let E=n(new er(.935,.011,4,40),ps,y,M,1.45);E.rotation.x=Math.PI/2}}for(let y=0;y<3;y++){let M=.1+y*.12,E=3.8-y*.75;e(rn,0,M,E,15,M*2,.9),a.push({x:0,z:E,w:15,d:.9,y:M*2})}}function f(){o.push({name:"\u79D1\u6280\u5927\u53A6",x:0,z:-155,w:73,d:26,h:37}),s(0,-155,73,26,37);let _=$(8426904),v=$(11187636,{metalness:.45,roughness:.38});e(_,0,37/2,-155,73,37,26);for(let b=0;b<10;b++)for(let w=0;w<36;w++){let A=-35+w*2,y=2.2+b*3.45;l(A,y,-141.84,1.86,2.38,(w+b*2)%8),e(_,A,y-1.48,-141.66,2,.57,.46)}for(let b of[-1,1]){e(_,b*36,19,-141.9,2,38,3);for(let w=0;w<13;w++)l(b*36,1.5+w*2.9,-140.32,.65,1.7,3);for(let w=0;w<10;w++){let A=b*(5.8+w*1.15),y=-140.95+Math.sin(w/9*Math.PI)*2.3;for(let M=0;M<11;M++)l(A,1.9+M*3.22,y,1.08,2.75,(w*2+M)%8),e(v,A,3.38+M*3.22,y+.15,1.16,.18,.24);e(v,A+.57,18.5,y+.2,.105,37,.32)}}for(let b=0;b<11;b++)for(let w=0;w<5;w++)l(-4+w*2,1.9+b*3.22,-141.25,1.88,2.78,(b+w)%8);for(let b=0;b<41;b++)e(v,-17+b*.85,40,-153,.07,5,.1);for(let b of[37.5,38.1,40,41.9,42.5])e(v,0,b,-153,34,.1,.12);r("\u5317 \u4EAC \u5316 \u5DE5 \u5927 \u5B66",0,40.2,-152.8,29.5,2.5,{font:'"STXingkai","Kaiti SC",serif',color:"#ad913b"}),e(v,0,7.6,-139,21,.3,4.5);let T=$(7116956,{metalness:.35,roughness:.22});e(Rr,0,3.7,-141.1,20.5,7.4,.15);for(let b=0;b<10;b++)for(let w=0;w<3;w++)e(T,-9+b*2,1.24+w*2.35,-140.91,1.94,2.29,.08),e(v,-10+b*2,3.7,-140.81,.065,7.4,.12);for(let b of[-9.9,-6.6,6.6,9.9])n(new Mt(.27,.29,7.5,16),rn,b,3.75,-137.8),s(b,-137.8,.65,.65,7.7);for(let b=0;b<21;b++)e(v,-34+b*3.4,38.1,-144,.055,1.3,.055);e(v,0,38.76,-144,70,.055,.06)}return{main:u,library:d,tower:f,reflectionMaterials:h}}function Ug(i){let e=null,t=0,n=0,r=c=>e===null?0:Math.max(0,e-c);function s(){e=null,t=n=0,i.stop(),i.setEffectiveWeight(0)}function o(c){s(),e=c}function a(c){let u=r(c)>=1.2;e=null,u?(i.reset().play(),t=.62):s()}function l(c,u,h){t=Math.max(0,t-c);let d=h&&r(u)>=1.2;return d&&!i.enabled&&(i.reset().play(),i.paused=!0),n=d?1:Math.min(1,t/.18),i.enabled=n>0,i.setEffectiveWeight(n),n}return s(),{begin:o,finish:a,cancel:s,update:l,sample:()=>({weight:n,landingTime:t,startY:e,minDrop:1.2})}}var KS=0;function Ng(i,{blinkIndex:e=null}={}){let t=new Map;i.traverse(E=>{E.isBone&&t.set(E.name,E)});let n=E=>t.get("J_Bip_"+E),r=n("C_Hips"),s=[...t.values()].map(E=>({o:E,q:E.quaternion.clone(),p:E.position.clone()})),o=!1,a=0,l=[];e!==null&&i.traverse(E=>{E.morphTargetInfluences?.length===54&&l.push(E)});let c=KS++*2.173,u={time:c},h=new Ue,d=new nn,f=new Ue,p=new R,x=new R,m=new R,g=new R,S=new R,_=new R,v=new R,T=new R,b=new R,w=["L","R"].map(E=>{let C=n(E+"_UpperLeg"),I=n(E+"_LowerLeg"),U=n(E+"_Foot");return!C||!I||!U?null:{upper:C,lower:I,foot:U,anchor:i.worldToLocal(U.getWorldPosition(new R)),sole:U.getWorldQuaternion(new Ue).premultiply(i.getWorldQuaternion(new Ue).invert())}}).filter(Boolean);function A(E,C,I,U,L){let O=n(E);O&&(d.set(C*L,I*L,U*L),O.quaternion.multiply(h.setFromEuler(d)))}function y(E,C,I){E.getWorldPosition(m),C.getWorldPosition(g),p.subVectors(g,m).normalize(),T.subVectors(I,m).normalize(),h.setFromUnitVectors(p,T).multiply(E.getWorldQuaternion(f)),f.copy(E.parent.getWorldQuaternion(f)).invert(),E.quaternion.copy(f.multiply(h)),E.updateMatrixWorld(!0)}function M(E,C){let{upper:I,lower:U,foot:L,anchor:O,sole:k}=E;I.getWorldPosition(m),U.getWorldPosition(g),L.getWorldPosition(S);let V=m.distanceTo(g),z=g.distanceTo(S);_.copy(O),_.x+=Math.sign(O.x)*(.08-a*.03),_.z+=O.x>0?.08+a*.195:-.055-a*.21,i.localToWorld(_),_.lerp(S,1-C),T.subVectors(_,m);let W=We.clamp(T.length(),Math.abs(V-z)+.001,V+z-1e-4);T.normalize();let Z=(V*V-z*z+W*W)/(2*W),ue=Math.sqrt(Math.max(0,V*V-Z*Z));b.set(0,0,-1).transformDirection(i.matrixWorld),b.addScaledVector(T,-b.dot(T)).normalize(),v.copy(m).addScaledVector(T,Z).addScaledVector(b,ue),y(I,U,v),y(U,L,_),h.copy(i.getWorldQuaternion(f)).multiply(k),f.copy(L.parent.getWorldQuaternion(f)).invert(),L.quaternion.copy(f.multiply(h))}return{restore(){if(o)for(let E of s)E.o.quaternion.copy(E.q),E.o.position.copy(E.p);o=!1},update(E,C,I={}){a=We.damp(a,I.riding?1:0,9,E);for(let le of s)le.q.copy(le.o.quaternion),le.p.copy(le.o.position);o=!0,u.time+=E;let U=u.time%9.7,L=Math.min(Math.abs(U-3.4),Math.abs(U-8.8));for(let le of l)le.morphTargetInfluences[e]=Math.max(0,1-L/.105);let O=u.time,k=Math.sin(O*1.48),V=Math.sin(O*.43)*.7+Math.sin(O*.19)*.3,z=We.smoothstep(C,.02,1),W=1-a,Z=(k+1)*.5;r&&(r.position.x+=z*(.036+.027*V),r.position.y-=z*(.028+.003*(1-k)+a*.1));let ue=n("C_Chest");ue&&(ue.position.y+=z*.005*Z,ue.position.z+=z*.006*Z);for(let le of["L","R"]){let be=n(le+"_Shoulder");be&&(be.position.y+=z*(-.012+.004*Z+(le==="L"?-.003:.003)*W))}A("C_Hips",.012*W,.028*V,-.025-.018*V,z),A("C_Spine",.035+.012*k+a*.1,0,.025+.016*V,z),A("C_Chest",-.035-.024*k,.018*Math.sin(O*.29),-.008*V,z),A("C_UpperChest",-.01*k,0,0,z),A("C_Head",.012+.019*Math.sin(O*.47),.085*Math.sin(O*.24)+.025*Math.sin(O*.63),.02*Math.sin(O*.36),z),A("L_UpperArm",.035,-.06,-.075+.016*k-a*.17,z),A("R_UpperArm",-.02,.04,.095-.013*k+a*.17,z),A("L_LowerArm",.025,-.24,.055,z),A("R_LowerArm",.015,.16,-.04,z),A("L_Hand",.02,.03,-.06,z),A("R_Hand",-.025,-.03,.07,z);for(let le of["L","R"])for(let be of["Index","Middle","Ring","Little"])for(let q of["1","2","3"])A(le+"_"+be+q,0,0,(le==="L"?1:-1)*.16,z);if(i.updateMatrixWorld(!0),z>.001)for(let le of w)M(le,z)},sample(){return i.updateMatrixWorld(!0),{phase:+u.time.toFixed(3),hips:r?.position.toArray().map(E=>+E.toFixed(5)),chest:n("C_Chest")?.quaternion.toArray().map(E=>+E.toFixed(5)),head:n("C_Head")?.quaternion.toArray().map(E=>+E.toFixed(5)),feet:w.map(E=>i.worldToLocal(E.foot.getWorldPosition(new R)).toArray().map(C=>+C.toFixed(5)))}},get phase(){return u.time}}}function Og(i){let e=new Map,t=new Map,n=i.clone();return Fg(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Fg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Fg(i.children[n],e.children[n],t)}var Du=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),vt=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),Bg=class extends it{constructor(i){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${i}`,this.expressionName=i,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(i){this._binds.push(i)}deleteBind(i){let e=this._binds.indexOf(i);e>=0&&this._binds.splice(e,1)}applyWeight(i){var e;let t=this.outputWeight;t*=(e=i?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(i=>i.clearAppliedWeight())}};function y0(i,e,t){var n,r;let s=i.parser.json,o=(n=s.nodes)==null?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;let a=o.mesh;if(a==null)return null;let l=(r=s.meshes)==null?void 0:r[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;let c=l.primitives.length,u=[];return t.traverse(h=>{u.length<c&&h.isMesh&&u.push(h)}),u}function zg(i,e){return vt(this,null,function*(){let t=yield i.parser.getDependency("node",e);return y0(i,e,t)})}function Hg(i){return vt(this,null,function*(){let e=yield i.parser.getDependencies("node"),t=new Map;return e.forEach((n,r)=>{let s=y0(i,r,n);s!=null&&t.set(r,s)}),t})}var bf={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function M0(i){return Math.max(Math.min(i,1),0)}var Vg=class S0{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){let e={},t=new Set(Object.values(bf));return Object.entries(this._expressionMap).forEach(([n,r])=>{t.has(n)&&(e[n]=r)}),e}get customExpressionMap(){let e={},t=new Set(Object.values(bf));return Object.entries(this._expressionMap).forEach(([n,r])=>{t.has(n)||(e[n]=r)}),e}copy(e){return this._expressions.concat().forEach(t=>{this.unregisterExpression(t)}),e._expressions.forEach(t=>{this.registerExpression(t)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new S0().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){let t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;let n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){let n=this.getExpression(e);n&&(n.weight=M0(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){let t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){let e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1,r=t.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(r=>{e-=r.overrideBlinkAmount,t-=r.overrideLookAtAmount,n-=r.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},el={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},JS={_Color:el.Color,_EmissionColor:el.EmissionColor,_ShadeColor:el.ShadeColor,_RimColor:el.RimColor,_OutlineColor:el.OutlineColor},QS=new Me,T0=class b0{constructor({material:e,type:t,targetValue:n,targetAlpha:r}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=r??1;let s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){let{color:t,alpha:n}=this._state;if(t!=null){let{propertyName:r,deltaValue:s}=t,o=this.material[r];o?.add(QS.copy(s).multiplyScalar(e))}if(n!=null){let{propertyName:r,deltaValue:s}=n;this.material[r]!=null&&(this.material[r]+=s*e)}}clearAppliedWeight(){let{color:e,alpha:t}=this._state;if(e!=null){let{propertyName:n,initialValue:r}=e,s=this.material[n];s?.copy(r)}if(t!=null){let{propertyName:n,initialValue:r}=t;this.material[n]!=null&&(this.material[n]=r)}}_initColorBindState(){var e,t,n;let{material:r,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=r.name)!=null?n:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;let c=r[l].clone(),u=new Me(o.r-c.r,o.g-c.g,o.b-c.b);return{propertyName:l,initialValue:c,deltaValue:u}}_initAlphaBindState(){var e,t,n;let{material:r,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=r.name)!=null?n:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;let c=r[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(b0._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};T0._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var kg=T0,Hu=class{constructor({primitives:i,index:e,weight:t}){this.primitives=i,this.index=e,this.weight=t}applyWeight(i){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*i)})}clearAppliedWeight(){this.primitives.forEach(i=>{var e;((e=i.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(i.morphTargetInfluences[this.index]=0)})}},Gg=new ce,E0=class w0{constructor({material:e,scale:t,offset:n}){var r,s;this.material=e,this.scale=t,this.offset=n;let o=(r=Object.entries(w0._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:r[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;let c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;let u=c.offset.clone(),h=c.repeat.clone(),d=n.clone().sub(u),f=t.clone().sub(h);this._properties.push({name:a,initialOffset:u,deltaOffset:d,initialScale:h,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{let n=this.material[t.name];n!==void 0&&(n.offset.add(Gg.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(Gg.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{let t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};E0._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Wg=E0,$S=new Set(["1.0","1.0-beta"]),A0=class R0{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return vt(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return vt(this,null,function*(){let t=yield this._v1Import(e);return t||(yield this._v0Import(e))||null})}_v1Import(e){return vt(this,null,function*(){var t,n;let r=this.parser.json;if(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))===-1)return null;let s=(n=r.extensions)==null?void 0:n.VRMC_vrm;if(!s)return null;let o=s.specVersion;if(!$S.has(o))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let a=s.expressions;if(!a)return null;let l=new Set(Object.values(bf)),c=new Map;a.preset!=null&&Object.entries(a.preset).forEach(([h,d])=>{if(d!=null){if(!l.has(h)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${h}" detected. Ignoring the expression`);return}c.set(h,d)}}),a.custom!=null&&Object.entries(a.custom).forEach(([h,d])=>{if(l.has(h)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${h}". Ignoring the expression`);return}c.set(h,d)});let u=new Vg;return yield Promise.all(Array.from(c.entries()).map(h=>vt(this,[h],function*([d,f]){var p,x,m,g,S,_,v;let T=new Bg(d);if(e.scene.add(T),T.isBinary=(p=f.isBinary)!=null?p:!1,T.overrideBlink=(x=f.overrideBlink)!=null?x:"none",T.overrideLookAt=(m=f.overrideLookAt)!=null?m:"none",T.overrideMouth=(g=f.overrideMouth)!=null?g:"none",(S=f.morphTargetBinds)==null||S.forEach(b=>vt(this,null,function*(){var w;if(b.node===void 0||b.index===void 0)return;let A=yield zg(e,b.node),y=b.index;if(!A.every(M=>Array.isArray(M.morphTargetInfluences)&&y<M.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${f.name} attempts to index morph #${y} but not found.`);return}T.addBind(new Hu({primitives:A,index:y,weight:(w=b.weight)!=null?w:1}))})),f.materialColorBinds||f.textureTransformBinds){let b=[];e.scene.traverse(w=>{let A=w.material;A&&(Array.isArray(A)?b.push(...A):b.push(A))}),(_=f.materialColorBinds)==null||_.forEach(w=>vt(this,null,function*(){b.filter(A=>{var y;let M=(y=this.parser.associations.get(A))==null?void 0:y.materials;return w.material===M}).forEach(A=>{T.addBind(new kg({material:A,type:w.type,targetValue:new Me().fromArray(w.targetValue),targetAlpha:w.targetValue[3]}))})})),(v=f.textureTransformBinds)==null||v.forEach(w=>vt(this,null,function*(){b.filter(A=>{var y;let M=(y=this.parser.associations.get(A))==null?void 0:y.materials;return w.material===M}).forEach(A=>{var y,M;T.addBind(new Wg({material:A,offset:new ce().fromArray((y=w.offset)!=null?y:[0,0]),scale:new ce().fromArray((M=w.scale)!=null?M:[1,1])}))})}))}u.registerExpression(T)}))),u})}_v0Import(e){return vt(this,null,function*(){var t;let n=this.parser.json,r=(t=n.extensions)==null?void 0:t.VRM;if(!r)return null;let s=r.blendShapeMaster;if(!s)return null;let o=new Vg,a=s.blendShapeGroups;if(!a)return o;let l=new Set;return yield Promise.all(a.map(c=>vt(this,null,function*(){var u;let h=c.presetName,d=h!=null&&R0.v0v1PresetNameMap[h]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${h} has duplicated entries. Ignoring the expression`);return}l.add(f);let p=new Bg(f);e.scene.add(p),p.isBinary=(u=c.isBinary)!=null?u:!1,c.binds&&c.binds.forEach(m=>vt(this,null,function*(){var g;if(m.mesh===void 0||m.index===void 0)return;let S=[];(g=n.nodes)==null||g.forEach((v,T)=>{v.mesh===m.mesh&&S.push(T)});let _=m.index;yield Promise.all(S.map(v=>vt(this,null,function*(){var T;let b=yield zg(e,v);if(!b.every(w=>Array.isArray(w.morphTargetInfluences)&&_<w.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${_}th morph but not found.`);return}p.addBind(new Hu({primitives:b,index:_,weight:.01*((T=m.weight)!=null?T:100)}))})))}));let x=c.materialValues;x&&x.length!==0&&x.forEach(m=>{if(m.materialName===void 0||m.propertyName===void 0||m.targetValue===void 0)return;let g=[];e.scene.traverse(_=>{if(_.material){let v=_.material;Array.isArray(v)?g.push(...v.filter(T=>(T.name===m.materialName||T.name===m.materialName+" (Outline)")&&g.indexOf(T)===-1)):v.name===m.materialName&&g.indexOf(v)===-1&&g.push(v)}});let S=m.propertyName;g.forEach(_=>{if(S==="_MainTex_ST"){let T=new ce(m.targetValue[0],m.targetValue[1]),b=new ce(m.targetValue[2],m.targetValue[3]);b.y=1-b.y-T.y,p.addBind(new Wg({material:_,scale:T,offset:b}));return}let v=JS[S];if(v){p.addBind(new kg({material:_,type:v,targetValue:new Me().fromArray(m.targetValue),targetAlpha:m.targetValue[3]}));return}console.warn(S+" is not supported")})}),o.registerExpression(p)}))),o})}};A0.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var eT=A0;var Pf=class Eo{constructor(e,t){this._firstPersonOnlyLayer=Eo.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Eo.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Eo(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Eo.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Eo.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(r=>{n.type==="firstPersonOnly"?(r.layers.set(this._firstPersonOnlyLayer),r.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(r.layers.set(this._thirdPersonOnlyLayer),r.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(r)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,r){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){let a=e[o],l=e[o+1],c=e[o+2],u=t[a],h=n[a];if(u[0]>0&&r.includes(h[0])||u[1]>0&&r.includes(h[1])||u[2]>0&&r.includes(h[2])||u[3]>0&&r.includes(h[3]))continue;let d=t[l],f=n[l];if(d[0]>0&&r.includes(f[0])||d[1]>0&&r.includes(f[1])||d[2]>0&&r.includes(f[2])||d[3]>0&&r.includes(f[3]))continue;let p=t[c],x=n[c];p[0]>0&&r.includes(x[0])||p[1]>0&&r.includes(x[1])||p[2]>0&&r.includes(x[2])||p[3]>0&&r.includes(x[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){let n=new Ki(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);let r=n.geometry,s=r.getAttribute("skinIndex"),o=s instanceof io?[]:s.array,a=[];for(let x=0;x<o.length;x+=4)a.push([o[x],o[x+1],o[x+2],o[x+3]]);let l=r.getAttribute("skinWeight"),c=l instanceof io?[]:l.array,u=[];for(let x=0;x<c.length;x+=4)u.push([c[x],c[x+1],c[x+2],c[x+3]]);let h=r.getIndex();if(!h)throw new Error("The geometry doesn't have an index buffer");let d=Array.from(h.array),f=this._excludeTriangles(d,u,a,t),p=[];for(let x=0;x<f;x++)p[x]=d[x];return r.setIndex(p),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new ci(e.skeleton.bones,e.skeleton.boneInverses),new ke),n}_createHeadlessModelForSkinnedMesh(e,t){let n=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);let r=this._createErasedMesh(t,n);e.add(r)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{let t=new ht;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{let r=n;this._createHeadlessModelForSkinnedMesh(t,r)})}else if(e.type==="SkinnedMesh"){let t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Pf.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Pf.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var Xg=Pf,tT=new Set(["1.0","1.0-beta"]),nT=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(i){this.parser=i}afterRoot(i){return vt(this,null,function*(){let e=i.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");i.userData.vrmFirstPerson=yield this._import(i,e)}})}_import(i,e){return vt(this,null,function*(){if(e==null)return null;let t=yield this._v1Import(i,e);return t||(yield this._v0Import(i,e))||null})}_v1Import(i,e){return vt(this,null,function*(){var t,n;let r=this.parser.json;if(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))===-1)return null;let s=(n=r.extensions)==null?void 0:n.VRMC_vrm;if(!s)return null;let o=s.specVersion;if(!tT.has(o))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let a=s.firstPerson,l=[],c=yield Hg(i);return Array.from(c.entries()).forEach(([u,h])=>{var d,f;let p=(d=a?.meshAnnotations)==null?void 0:d.find(x=>x.node===u);l.push({meshes:h,type:(f=p?.type)!=null?f:"auto"})}),new Xg(e,l)})}_v0Import(i,e){return vt(this,null,function*(){var t;let n=this.parser.json,r=(t=n.extensions)==null?void 0:t.VRM;if(!r)return null;let s=r.firstPerson;if(!s)return null;let o=[],a=yield Hg(i);return Array.from(a.entries()).forEach(([l,c])=>{let u=n.nodes[l],h=s.meshAnnotations?s.meshAnnotations.find(d=>d.mesh===u.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(h?.firstPersonFlag)})}),new Xg(e,o)})}_convertV0FlagToV1Type(i){return i==="FirstPersonOnly"?"firstPersonOnly":i==="ThirdPersonOnly"?"thirdPersonOnly":i==="Both"?"both":"auto"}};var qg=new R,Yg=new R,iT=new Ue,jg=class extends ht{constructor(i){super(),this.vrmHumanoid=i,this._boneAxesMap=new Map,Object.values(i.humanBones).forEach(e=>{let t=new Na(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(i=>{i.geometry.dispose(),i.material.dispose()})}updateMatrixWorld(i){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(qg,iT,Yg);let n=qg.set(.1,.1,.1).divide(Yg);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(i)}},df=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"];var rT={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function C0(i){return i.invert?i.invert():i.inverse(),i}var ms=new R,gs=new Ue,Ef=class{constructor(i){this.humanBones=i,this.restPose=this.getAbsolutePose()}getAbsolutePose(){let i={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);n&&(ms.copy(n.position),gs.copy(n.quaternion),i[t]={position:ms.toArray(),rotation:gs.toArray()})}),i}getPose(){let i={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);if(!n)return;ms.set(0,0,0),gs.identity();let r=this.restPose[t];r!=null&&r.position&&ms.fromArray(r.position).negate(),r!=null&&r.rotation&&C0(gs.fromArray(r.rotation)),ms.add(n.position),gs.premultiply(n.quaternion),i[t]={position:ms.toArray(),rotation:gs.toArray()}}),i}setPose(i){Object.entries(i).forEach(([e,t])=>{let n=e,r=this.getBoneNode(n);if(!r)return;let s=this.restPose[n];s&&(t!=null&&t.position&&(r.position.fromArray(t.position),s.position&&r.position.add(ms.fromArray(s.position))),t!=null&&t.rotation&&(r.quaternion.fromArray(t.rotation),s.rotation&&r.quaternion.multiply(gs.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([i,e])=>{let t=this.getBoneNode(i);t&&(e!=null&&e.position&&t.position.fromArray(e.position),e!=null&&e.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(i){var e;return(e=this.humanBones[i])!=null?e:void 0}getBoneNode(i){var e,t;return(t=(e=this.humanBones[i])==null?void 0:e.node)!=null?t:null}},ff=new R,sT=new Ue,oT=new R,Zg=class P0 extends Ef{static _setupTransforms(e){let t=new it;t.name="VRMHumanoidRig";let n={},r={},s={},o={};df.forEach(l=>{var c;let u=e.getBoneNode(l);if(u){let h=new R,d=new Ue;u.updateWorldMatrix(!0,!1),u.matrixWorld.decompose(h,d,ff),n[l]=h,r[l]=d,s[l]=u.quaternion.clone();let f=new Ue;(c=u.parent)==null||c.matrixWorld.decompose(ff,f,ff),o[l]=f}});let a={};return df.forEach(l=>{var c;let u=e.getBoneNode(l);if(u){let h=n[l],d=l,f;for(;f==null&&(d=rT[d],d!=null);)f=n[d];let p=new it;p.name="Normalized_"+u.name,(d?(c=a[d])==null?void 0:c.node:t).add(p),p.position.copy(h),f&&p.position.sub(f),a[l]={node:p}}}),{rigBones:a,root:t,parentWorldRotations:o,boneRotations:s}}constructor(e){let{rigBones:t,root:n,parentWorldRotations:r,boneRotations:s}=P0._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=r,this._boneRotations=s}update(){df.forEach(e=>{let t=this.original.getBoneNode(e);if(t!=null){let n=this.getBoneNode(e),r=this._parentWorldRotations[e],s=sT.copy(r).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(r).premultiply(s).multiply(o),e==="hips"){let a=n.getWorldPosition(oT);t.parent.updateWorldMatrix(!0,!1);let l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},Kg=class I0{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new Ef(e),this._normalizedHumanBones=new Zg(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Ef(e.humanBones),this._normalizedHumanBones=new Zg(this._rawHumanBones),this}clone(){return new I0(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},aT={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},lT=new Set(["1.0","1.0-beta"]),Jg={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},cT=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(i){return vt(this,null,function*(){i.userData.vrmHumanoid=yield this._import(i)})}_import(i){return vt(this,null,function*(){let e=yield this._v1Import(i);return e||(yield this._v0Import(i))||null})}_v1Import(i){return vt(this,null,function*(){var e,t;let n=this.parser.json;if(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))===-1)return null;let r=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!r)return null;let s=r.specVersion;if(!lT.has(s))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${s}"`),null;let o=r.humanoid;if(!o)return null;let a=o.humanBones.leftThumbIntermediate!=null||o.humanBones.rightThumbIntermediate!=null,l={};o.humanBones!=null&&(yield Promise.all(Object.entries(o.humanBones).map(u=>vt(this,[u],function*([h,d]){let f=h,p=d.node;if(a){let m=Jg[f];m!=null&&(f=m)}let x=yield this.parser.getDependency("node",p);if(x==null){console.warn(`A glTF node bound to the humanoid bone ${f} (index = ${p}) does not exist`);return}l[f]={node:x}}))));let c=new Kg(this._ensureRequiredBonesExist(l),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(c.normalizedHumanBonesRoot),this.helperRoot){let u=new jg(c);this.helperRoot.add(u),u.renderOrder=this.helperRoot.renderOrder}return c})}_v0Import(i){return vt(this,null,function*(){var e;let t=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!t)return null;let n=t.humanoid;if(!n)return null;let r={};n.humanBones!=null&&(yield Promise.all(n.humanBones.map(o=>vt(this,null,function*(){let a=o.bone,l=o.node;if(a==null||l==null)return;let c=yield this.parser.getDependency("node",l);if(c==null){console.warn(`A glTF node bound to the humanoid bone ${a} (index = ${l}) does not exist`);return}let u=Jg[a],h=u??a;if(r[h]!=null){console.warn(`Multiple bone entries for ${h} detected (index = ${l}), ignoring duplicated entries.`);return}r[h]={node:c}}))));let s=new Kg(this._ensureRequiredBonesExist(r),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(s.normalizedHumanBonesRoot),this.helperRoot){let o=new jg(s);this.helperRoot.add(o),o.renderOrder=this.helperRoot.renderOrder}return s})}_ensureRequiredBonesExist(i){let e=Object.values(aT).filter(t=>i[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return i}},Qg=class extends Oe{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new je(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new je(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,i=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let i=0;i<64;i++){let e=i/63*this._currentTheta;this._attrPos.setXYZ(i+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<63;i++)this._attrIndex.setXYZ(i*3,0,i+1,i+2);this._attrIndex.needsUpdate=!0}},uT=class extends Oe{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new R,this._currentTail=new R,this._attrPos=new je(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new je(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){let e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Uu=new Ue,$g=new Ue,tl=new R,e0=new R,t0=Math.sqrt(2)/2,hT=new Ue(0,0,-t0,t0),dT=new R(0,1,0),fT=class extends ht{constructor(i){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=i;{let e=new Qg;e.radius=.5;let t=new Ht({color:65280,transparent:!0,opacity:.5,side:rt,depthTest:!1,depthWrite:!1});this._meshPitch=new dt(e,t),this.add(this._meshPitch)}{let e=new Qg;e.radius=.5;let t=new Ht({color:16711680,transparent:!0,opacity:.5,side:rt,depthTest:!1,depthWrite:!1});this._meshYaw=new dt(e,t),this.add(this._meshYaw)}{let e=new uT;e.radius=.1;let t=new vn({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Zn(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(i){let e=We.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();let t=We.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(tl),this.vrmLookAt.getLookAtWorldQuaternion(Uu),Uu.multiply(this.vrmLookAt.getFaceFrontQuaternion($g)),this._meshYaw.position.copy(tl),this._meshYaw.quaternion.copy(Uu),this._meshPitch.position.copy(tl),this._meshPitch.quaternion.copy(Uu),this._meshPitch.quaternion.multiply($g.setFromAxisAngle(dT,e)),this._meshPitch.quaternion.multiply(hT);let{target:n,autoUpdate:r}=this.vrmLookAt;n!=null&&r&&(n.getWorldPosition(e0).sub(tl),this._lineTarget.geometry.tail.copy(e0),this._lineTarget.geometry.update(),this._lineTarget.position.copy(tl)),super.updateMatrixWorld(i)}},pT=new R,mT=new R;function wf(i,e){return i.matrixWorld.decompose(pT,e,mT),e}function Fu(i){return[Math.atan2(-i.z,i.x),Math.atan2(i.y,Math.sqrt(i.x*i.x+i.z*i.z))]}function n0(i){let e=Math.round(i/2/Math.PI);return i-2*Math.PI*e}var i0=new R(0,0,1),gT=new R,xT=new R,vT=new R,_T=new Ue,pf=new Ue,r0=new Ue,yT=new Ue,mf=new nn,L0=class D0{constructor(e,t){this.offsetFromHeadBone=new R,this.autoUpdate=!0,this.faceFront=new R(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Ue)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new nn)}getEuler(e){return e.set(We.DEG2RAD*this._pitch,We.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new D0(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){let t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){let t=this.humanoid.getRawBoneNode("head");return wf(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(i0)<.01)return e.copy(this._restHeadWorldQuaternion).invert();let[t,n]=Fu(this.faceFront);return mf.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(mf).premultiply(yT.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(pf),this.getFaceFrontQuaternion(r0),e.copy(i0).applyQuaternion(pf).applyQuaternion(r0).applyEuler(this.getEuler(mf))}lookAt(e){let t=_T.copy(this._restHeadWorldQuaternion).multiply(C0(this.getLookAtWorldQuaternion(pf))),n=this.getLookAtWorldPosition(xT),r=vT.copy(e).sub(n).applyQuaternion(t).normalize(),[s,o]=Fu(this.faceFront),[a,l]=Fu(r),c=n0(a-s),u=n0(o-l);this._yaw=We.RAD2DEG*c,this._pitch=We.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(gT)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};L0.EULER_ORDER="YXZ";var MT=L0,ST=new R(0,0,1),Di=new Ue,yo=new Ue,Qn=new nn(0,0,0,"YXZ"),Bu=class{constructor(i,e,t,n,r){this.humanoid=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=r,this.faceFront=new R(0,0,1),this._restQuatLeftEye=new Ue,this._restQuatRightEye=new Ue,this._restLeftEyeParentWorldQuat=new Ue,this._restRightEyeParentWorldQuat=new Ue;let s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),wf(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),wf(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(i,e){let t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),r=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Qn.x=-We.DEG2RAD*this.rangeMapVerticalDown.map(-e):Qn.x=We.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?Qn.y=-We.DEG2RAD*this.rangeMapHorizontalInner.map(-i):Qn.y=We.DEG2RAD*this.rangeMapHorizontalOuter.map(i),Di.setFromEuler(Qn),this._getWorldFaceFrontQuat(yo),r.quaternion.copy(yo).multiply(Di).multiply(yo.invert()),Di.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(r.quaternion).multiply(Di).premultiply(Di.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?Qn.x=-We.DEG2RAD*this.rangeMapVerticalDown.map(-e):Qn.x=We.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?Qn.y=-We.DEG2RAD*this.rangeMapHorizontalOuter.map(-i):Qn.y=We.DEG2RAD*this.rangeMapHorizontalInner.map(i),Di.setFromEuler(Qn),this._getWorldFaceFrontQuat(yo),s.quaternion.copy(yo).multiply(Di).multiply(yo.invert()),Di.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(s.quaternion).multiply(Di).premultiply(Di.invert()).multiply(this._restQuatRightEye))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=We.RAD2DEG*i.y,t=We.RAD2DEG*i.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(i){if(this.faceFront.distanceToSquared(ST)<.01)return i.identity();let[e,t]=Fu(this.faceFront);return Qn.set(0,.5*Math.PI+e,t,"YZX"),i.setFromEuler(Qn)}};Bu.type="bone";var Af=class{constructor(i,e,t,n,r){this.expressions=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=r}applyYawPitch(i,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),i<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-i))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(i)))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=We.RAD2DEG*i.y,t=We.RAD2DEG*i.x;this.applyYawPitch(e,t)}};Af.type="expression";var s0=class{constructor(i,e){this.inputMaxValue=i,this.outputScale=e}map(i){return this.outputScale*M0(i/this.inputMaxValue)}},TT=new Set(["1.0","1.0-beta"]),Nu=.01,bT=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e?.helperRoot}afterRoot(i){return vt(this,null,function*(){let e=i.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");let t=i.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");i.userData.vrmLookAt=yield this._import(i,e,t)}})}_import(i,e,t){return vt(this,null,function*(){if(e==null||t==null)return null;let n=yield this._v1Import(i,e,t);return n||(yield this._v0Import(i,e,t))||null})}_v1Import(i,e,t){return vt(this,null,function*(){var n,r,s;let o=this.parser.json;if(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))===-1)return null;let a=(r=o.extensions)==null?void 0:r.VRMC_vrm;if(!a)return null;let l=a.specVersion;if(!TT.has(l))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${l}"`),null;let c=a.lookAt;if(!c)return null;let u=c.type==="expression"?1:10,h=this._v1ImportRangeMap(c.rangeMapHorizontalInner,u),d=this._v1ImportRangeMap(c.rangeMapHorizontalOuter,u),f=this._v1ImportRangeMap(c.rangeMapVerticalDown,u),p=this._v1ImportRangeMap(c.rangeMapVerticalUp,u),x;c.type==="expression"?x=new Af(t,h,d,f,p):x=new Bu(e,h,d,f,p);let m=this._importLookAt(e,x);return m.offsetFromHeadBone.fromArray((s=c.offsetFromHeadBone)!=null?s:[0,.06,0]),m})}_v1ImportRangeMap(i,e){var t,n;let r=(t=i?.inputMaxValue)!=null?t:90,s=(n=i?.outputScale)!=null?n:e;return r<Nu&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),r=Nu),new s0(r,s)}_v0Import(i,e,t){return vt(this,null,function*(){var n,r,s,o;let a=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!a)return null;let l=a.firstPerson;if(!l)return null;let c=l.lookAtTypeName==="BlendShape"?1:10,u=this._v0ImportDegreeMap(l.lookAtHorizontalInner,c),h=this._v0ImportDegreeMap(l.lookAtHorizontalOuter,c),d=this._v0ImportDegreeMap(l.lookAtVerticalDown,c),f=this._v0ImportDegreeMap(l.lookAtVerticalUp,c),p;l.lookAtTypeName==="BlendShape"?p=new Af(t,u,h,d,f):p=new Bu(e,u,h,d,f);let x=this._importLookAt(e,p);return l.firstPersonBoneOffset?x.offsetFromHeadBone.set((r=l.firstPersonBoneOffset.x)!=null?r:0,(s=l.firstPersonBoneOffset.y)!=null?s:.06,-((o=l.firstPersonBoneOffset.z)!=null?o:0)):x.offsetFromHeadBone.set(0,.06,0),x.faceFront.set(0,0,-1),p instanceof Bu&&p.faceFront.set(0,0,-1),x})}_v0ImportDegreeMap(i,e){var t,n;let r=i?.curve;JSON.stringify(r)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=i?.xRange)!=null?t:90,o=(n=i?.yRange)!=null?n:e;return s<Nu&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=Nu),new s0(s,o)}_importLookAt(i,e){let t=new MT(i,e);if(this.helperRoot){let n=new fT(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function ET(i,e){return typeof i!="string"||i===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(i)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(i)||/^data:.*,.*$/i.test(i)||/^blob:.*$/i.test(i)?i:e+i)}var wT=new Set(["1.0","1.0-beta"]),AT=class{get name(){return"VRMMetaLoaderPlugin"}constructor(i,e){var t,n,r;this.parser=i,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(r=e?.acceptV0Meta)!=null?r:!0}afterRoot(i){return vt(this,null,function*(){i.userData.vrmMeta=yield this._import(i)})}_import(i){return vt(this,null,function*(){let e=yield this._v1Import(i);if(e!=null)return e;let t=yield this._v0Import(i);return t??null})}_v1Import(i){return vt(this,null,function*(){var e,t,n;let r=this.parser.json;if(((e=r.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))===-1)return null;let s=(t=r.extensions)==null?void 0:t.VRMC_vrm;if(s==null)return null;let o=s.specVersion;if(!wT.has(o))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let a=s.meta;if(!a)return null;let l=a.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(l))throw new Error(`VRMMetaLoaderPlugin: The license url "${l}" is not accepted`);let c;return this.needThumbnailImage&&a.thumbnailImage!=null&&(c=(n=yield this._extractGLTFImage(a.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:a.name,version:a.version,authors:a.authors,copyrightInformation:a.copyrightInformation,contactInformation:a.contactInformation,references:a.references,thirdPartyLicenses:a.thirdPartyLicenses,thumbnailImage:c,licenseUrl:a.licenseUrl,avatarPermission:a.avatarPermission,allowExcessivelyViolentUsage:a.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:a.allowExcessivelySexualUsage,commercialUsage:a.commercialUsage,allowPoliticalOrReligiousUsage:a.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:a.allowAntisocialOrHateUsage,creditNotation:a.creditNotation,allowRedistribution:a.allowRedistribution,modification:a.modification,otherLicenseUrl:a.otherLicenseUrl}})}_v0Import(i){return vt(this,null,function*(){var e;let t=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!t)return null;let n=t.meta;if(!n)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let r;return this.needThumbnailImage&&n.texture!=null&&n.texture!==-1&&(r=yield this.parser.getDependency("texture",n.texture)),{metaVersion:"0",allowedUserName:n.allowedUserName,author:n.author,commercialUssageName:n.commercialUssageName,contactInformation:n.contactInformation,licenseName:n.licenseName,otherLicenseUrl:n.otherLicenseUrl,otherPermissionUrl:n.otherPermissionUrl,reference:n.reference,sexualUssageName:n.sexualUssageName,texture:r??void 0,title:n.title,version:n.version,violentUssageName:n.violentUssageName}})}_extractGLTFImage(i){return vt(this,null,function*(){var e;let t=(e=this.parser.json.images)==null?void 0:e[i];if(t==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image doesn't exist`),null;let n=t.uri;if(t.bufferView!=null){let r=yield this.parser.getDependency("bufferView",t.bufferView),s=new Blob([r],{type:t.mimeType});n=URL.createObjectURL(s)}return n==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new to().loadAsync(ET(n,this.parser.options.path)).catch(r=>(console.error(r),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},RT=class{constructor(i){this.scene=i.scene,this.meta=i.meta,this.humanoid=i.humanoid,this.expressionManager=i.expressionManager,this.firstPerson=i.firstPerson,this.lookAt=i.lookAt}update(i){this.humanoid.update(),this.lookAt&&this.lookAt.update(i),this.expressionManager&&this.expressionManager.update()}};var CT=class extends RT{constructor(i){super(i),this.materials=i.materials,this.springBoneManager=i.springBoneManager,this.nodeConstraintManager=i.nodeConstraintManager}update(i){super.update(i),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(i),this.materials&&this.materials.forEach(e=>{e.update&&e.update(i)})}},PT=Object.defineProperty,o0=Object.getOwnPropertySymbols,IT=Object.prototype.hasOwnProperty,LT=Object.prototype.propertyIsEnumerable,a0=(i,e,t)=>e in i?PT(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,l0=(i,e)=>{for(var t in e||(e={}))IT.call(e,t)&&a0(i,t,e[t]);if(o0)for(var t of o0(e))LT.call(e,t)&&a0(i,t,e[t]);return i},xs=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),DT={"":3e3,srgb:3001};function UT(i,e){parseInt("180",10)>=152?i.colorSpace=e:i.encoding=DT[e]}var NT=class{get pending(){return Promise.all(this._pendings)}constructor(i,e){this._parser=i,this._materialParams=e,this._pendings=[]}assignPrimitive(i,e){e!=null&&(this._materialParams[i]=e)}assignColor(i,e,t){e!=null&&(this._materialParams[i]=new Me().fromArray(e),t&&this._materialParams[i].convertSRGBToLinear())}assignTexture(i,e,t){return xs(this,null,function*(){let n=xs(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,i,e),t&&UT(this._materialParams[i],"srgb"))});return this._pendings.push(n),n})}assignTextureByIndex(i,e,t){return xs(this,null,function*(){return this.assignTexture(i,e!=null?{index:e}:void 0,t)})}},OT=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,FT=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,BT={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},c0={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},zT={3e3:"",3001:"srgb"};function gf(i){return parseInt("180",10)>=152?i.colorSpace:zT[i.encoding]}var HT=class extends bt{constructor(i={}){var e;super({vertexShader:OT,fragmentShader:FT}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Va,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=BT.None,this._outlineWidthMode=c0.None,this._isOutline=!1,i.transparentWithZWrite&&(i.depthWrite=!0),delete i.transparentWithZWrite,i.fog=!0,i.lights=!0,i.clipping=!0,this.uniforms=_n.merge([Ae.common,Ae.normalmap,Ae.emissivemap,Ae.fog,Ae.lights,{litFactor:{value:new Me(1,1,1)},mapUvTransform:{value:new qe},colorAlpha:{value:1},normalMapUvTransform:{value:new qe},shadeColorFactor:{value:new Me(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new qe},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new qe},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Me(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new qe},parametricRimColorFactor:{value:new Me(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new qe},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Me(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new qe},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new qe},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Me(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new qe},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=i.uniforms)!=null?e:{}]),this.setValues(i),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${gf(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${gf(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${gf(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{let n=parseInt("180",10),r=Object.entries(l0(l0({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=r+t.vertexShader,t.fragmentShader=r+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(i){this.uniforms.litFactor.value=i}get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}get normalMap(){return this.uniforms.normalMap.value}set normalMap(i){this.uniforms.normalMap.value=i}get normalScale(){return this.uniforms.normalScale.value}set normalScale(i){this.uniforms.normalScale.value=i}get emissive(){return this.uniforms.emissive.value}set emissive(i){this.uniforms.emissive.value=i}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(i){this.uniforms.emissiveIntensity.value=i}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(i){this.uniforms.emissiveMap.value=i}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(i){this.uniforms.shadeColorFactor.value=i}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(i){this.uniforms.shadeMultiplyTexture.value=i}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(i){this.uniforms.shadingShiftFactor.value=i}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(i){this.uniforms.shadingShiftTexture.value=i}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(i){this.uniforms.shadingShiftTextureScale.value=i}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(i){this.uniforms.shadingToonyFactor.value=i}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(i){this.uniforms.giEqualizationFactor.value=i}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(i){this.uniforms.matcapFactor.value=i}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(i){this.uniforms.matcapTexture.value=i}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(i){this.uniforms.parametricRimColorFactor.value=i}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(i){this.uniforms.rimMultiplyTexture.value=i}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(i){this.uniforms.rimLightingMixFactor.value=i}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(i){this.uniforms.parametricRimFresnelPowerFactor.value=i}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(i){this.uniforms.parametricRimLiftFactor.value=i}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(i){this.uniforms.outlineWidthMultiplyTexture.value=i}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(i){this.uniforms.outlineWidthFactor.value=i}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(i){this.uniforms.outlineColorFactor.value=i}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(i){this.uniforms.outlineLightingMixFactor.value=i}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(i){this.uniforms.uvAnimationMaskTexture.value=i}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(i){this.uniforms.uvAnimationScrollXOffset.value=i}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(i){this.uniforms.uvAnimationScrollYOffset.value=i}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(i){this.uniforms.uvAnimationRotationPhase.value=i}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(i){this._ignoreVertexColor=i,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(i){this._v0CompatShade=i,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(i){this._debugMode=i,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(i){this._outlineWidthMode=i,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(i){this._isOutline=i,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(i){this._uploadUniformsWorkaround(),this._updateUVAnimation(i)}copy(i){return super.copy(i),this.map=i.map,this.normalMap=i.normalMap,this.emissiveMap=i.emissiveMap,this.shadeMultiplyTexture=i.shadeMultiplyTexture,this.shadingShiftTexture=i.shadingShiftTexture,this.matcapTexture=i.matcapTexture,this.rimMultiplyTexture=i.rimMultiplyTexture,this.outlineWidthMultiplyTexture=i.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=i.uvAnimationMaskTexture,this.normalMapType=i.normalMapType,this.uvAnimationScrollXSpeedFactor=i.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=i.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=i.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=i.ignoreVertexColor,this.v0CompatShade=i.v0CompatShade,this.debugMode=i.debugMode,this.outlineWidthMode=i.outlineWidthMode,this.isOutline=i.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(i){this.uniforms.uvAnimationScrollXOffset.value+=i*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=i*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=i*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){let i=parseInt("180",10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:i,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===c0.ScreenCoordinates}}_updateTextureMatrix(i,e){i.value&&(i.value.matrixAutoUpdate&&i.value.updateMatrix(),e.value.copy(i.value.matrix))}},VT=new Set(["1.0","1.0-beta"]),U0=class zu{get name(){return zu.EXTENSION_NAME}constructor(e,t={}){var n,r,s,o;this.parser=e,this.materialType=(n=t.materialType)!=null?n:HT,this.renderOrderOffset=(r=t.renderOrderOffset)!=null?r:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return xs(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return xs(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){let n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return xs(this,null,function*(){var t;let n=this.parser,r=(t=n.json.meshes)==null?void 0:t[e];if(r==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);let s=r.primitives,o=yield n.loadMesh(e);if(s.length===1){let a=o,l=s[0].material;l!=null&&this._setupPrimitive(a,l)}else{let a=o;for(let l=0;l<s.length;l++){let c=a.children[l],u=s[l].material;u!=null&&this._setupPrimitive(c,u)}}return o})}_removeUnlitExtensionIfMToonExists(){let e=this.parser.json.materials;e?.map((t,n)=>{var r;this._getMToonExtension(n)&&(r=t.extensions)!=null&&r.KHR_materials_unlit&&delete t.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;let r=(t=this.parser.json.materials)==null?void 0:t[e];if(r==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let s=(n=r.extensions)==null?void 0:n[zu.EXTENSION_NAME];if(s==null)return;let o=s.specVersion;if(!VT.has(o)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${zu.EXTENSION_NAME} specVersion "${o}"`);return}return s}_extendMaterialParams(e,t){return xs(this,null,function*(){var n;delete t.metalness,delete t.roughness;let r=new NT(this.parser,t);r.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),r.assignColor("shadeColorFactor",e.shadeColorFactor),r.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),r.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),r.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),r.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),r.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),r.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),r.assignColor("matcapFactor",e.matcapFactor),r.assignTexture("matcapTexture",e.matcapTexture,!0),r.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),r.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),r.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),r.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),r.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),r.assignPrimitive("outlineWidthMode",e.outlineWidthMode),r.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),r.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),r.assignColor("outlineColorFactor",e.outlineColorFactor),r.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),r.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),r.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),r.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),r.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),r.assignPrimitive("v0CompatShade",this.v0CompatShade),r.assignPrimitive("debugMode",this.debugMode),yield r.pending})}_setupPrimitive(e,t){let n=this._getMToonExtension(t);if(n){let r=this._parseRenderOrder(n);e.renderOrder=r+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){let t=e.material;if(!(t instanceof hn)||!this._shouldGenerateOutline(t))return;e.material=[t];let n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=Jt,e.material.push(n);let r=e.geometry,s=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,s,0),r.addGroup(0,s,1)}_addToMaterialSet(e){let t=e.material,n=new Set;Array.isArray(t)?t.forEach(r=>n.add(r)):n.add(t);for(let r of n)this._mToonMaterialSet.add(r)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};U0.EXTENSION_NAME="VRMC_materials_mtoon";var kT=U0,GT=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),N0=class Rf{get name(){return Rf.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return GT(this,null,function*(){let n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");let r=n.emissiveMultiplier;t.emissiveIntensity=r})}_getHDREmissiveMultiplierExtension(e){var t,n;let r=(t=this.parser.json.materials)==null?void 0:t[e];if(r==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let s=(n=r.extensions)==null?void 0:n[Rf.EXTENSION_NAME];if(s!=null)return s}};N0.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var WT=N0,XT=Object.defineProperty,qT=Object.defineProperties,YT=Object.getOwnPropertyDescriptors,u0=Object.getOwnPropertySymbols,jT=Object.prototype.hasOwnProperty,ZT=Object.prototype.propertyIsEnumerable,h0=(i,e,t)=>e in i?XT(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Ui=(i,e)=>{for(var t in e||(e={}))jT.call(e,t)&&h0(i,t,e[t]);if(u0)for(var t of u0(e))ZT.call(e,t)&&h0(i,t,e[t]);return i},d0=(i,e)=>qT(i,YT(e)),KT=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())});function Mo(i){return Math.pow(i,2.2)}var JT=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(i){var e;this.parser=i,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;let t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return KT(this,null,function*(){var i;let e=this.parser.json,t=(i=e.extensions)==null?void 0:i.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((r,s)=>{var o,a;let l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(r.shader==="VRM/MToon"){let c=this._parseV0MToonProperties(r,l);e.materials[s]=c}else if((a=r.shader)!=null&&a.startsWith("VRM/Unlit")){let c=this._parseV0UnlitProperties(r,l);e.materials[s]=c}else r.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${r.shader}`)}))})}_parseV0MToonProperties(i,e){var t,n,r,s,o,a,l,c,u,h,d,f,p,x,m,g,S,_,v,T,b,w,A,y,M,E,C,I,U,L,O,k,V,z,W,Z,ue,le,be,q,N,H,G,oe,se,pe,Ee,F,ee,ne,K,Q,fe,de,ge;let Ke=(n=(t=i.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,Qe=((r=i.floatProperties)==null?void 0:r._ZWrite)===1&&Ke,B=this._v0ParseRenderQueue(i),P=(o=(s=i.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,J=Ke?"BLEND":P?"MASK":"OPAQUE",ie=P?(l=(a=i.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,me=((u=(c=i.floatProperties)==null?void 0:c._CullMode)!=null?u:2)===0,ae=this._portTextureTransform(i),He=((d=(h=i.vectorProperties)==null?void 0:h._Color)!=null?d:[1,1,1,1]).map((fl,D)=>D===3?fl:Mo(fl)),Te=(f=i.textureProperties)==null?void 0:f._MainTex,Be=Te!=null?{index:Te,extensions:Ui({},ae)}:void 0,ze=(x=(p=i.floatProperties)==null?void 0:p._BumpScale)!=null?x:1,xe=(m=i.textureProperties)==null?void 0:m._BumpMap,Ce=xe!=null?{index:xe,scale:ze,extensions:Ui({},ae)}:void 0,Je=((S=(g=i.vectorProperties)==null?void 0:g._EmissionColor)!=null?S:[0,0,0,1]).map(Mo),Ge=(_=i.textureProperties)==null?void 0:_._EmissionMap,Re=Ge!=null?{index:Ge,extensions:Ui({},ae)}:void 0,nt=((T=(v=i.vectorProperties)==null?void 0:v._ShadeColor)!=null?T:[.97,.81,.86,1]).map(Mo),X=(b=i.textureProperties)==null?void 0:b._ShadeTexture,_e=X!=null?{index:X,extensions:Ui({},ae)}:void 0,we=(A=(w=i.floatProperties)==null?void 0:w._ShadeShift)!=null?A:0,De=(M=(y=i.floatProperties)==null?void 0:y._ShadeToony)!=null?M:.9;De=We.lerp(De,1,.5+.5*we),we=-we-(1-De);let ve=(C=(E=i.floatProperties)==null?void 0:E._IndirectLightIntensity)!=null?C:.1,he=ve?1-ve:void 0,Fe=(I=i.textureProperties)==null?void 0:I._SphereAdd,tt=Fe!=null?[1,1,1]:void 0,Et=Fe!=null?{index:Fe}:void 0,mt=(L=(U=i.floatProperties)==null?void 0:U._RimLightingMix)!=null?L:0,kn=(O=i.textureProperties)==null?void 0:O._RimTexture,Gn=kn!=null?{index:kn,extensions:Ui({},ae)}:void 0,cl=((V=(k=i.vectorProperties)==null?void 0:k._RimColor)!=null?V:[0,0,0,1]).map(Mo),Hi=(W=(z=i.floatProperties)==null?void 0:z._RimFresnelPower)!=null?W:1,Fo=(ue=(Z=i.floatProperties)==null?void 0:Z._RimLift)!=null?ue:0,ul=["none","worldCoordinates","screenCoordinates"][(be=(le=i.floatProperties)==null?void 0:le._OutlineWidthMode)!=null?be:0],Ss=(N=(q=i.floatProperties)==null?void 0:q._OutlineWidth)!=null?N:0;Ss=.01*Ss;let Dr=(H=i.textureProperties)==null?void 0:H._OutlineWidthTexture,hl=Dr!=null?{index:Dr,extensions:Ui({},ae)}:void 0,Ts=((oe=(G=i.vectorProperties)==null?void 0:G._OutlineColor)!=null?oe:[0,0,0]).map(Mo),dl=((pe=(se=i.floatProperties)==null?void 0:se._OutlineColorMode)!=null?pe:0)===1?(F=(Ee=i.floatProperties)==null?void 0:Ee._OutlineLightingMix)!=null?F:1:0,Bo=(ee=i.textureProperties)==null?void 0:ee._UvAnimMaskTexture,nh=Bo!=null?{index:Bo,extensions:Ui({},ae)}:void 0,ih=(K=(ne=i.floatProperties)==null?void 0:ne._UvAnimScrollX)!=null?K:0,bs=(fe=(Q=i.floatProperties)==null?void 0:Q._UvAnimScrollY)!=null?fe:0;bs!=null&&(bs=-bs);let rh=(ge=(de=i.floatProperties)==null?void 0:de._UvAnimRotation)!=null?ge:0,sh={specVersion:"1.0",transparentWithZWrite:Qe,renderQueueOffsetNumber:B,shadeColorFactor:nt,shadeMultiplyTexture:_e,shadingShiftFactor:we,shadingToonyFactor:De,giEqualizationFactor:he,matcapFactor:tt,matcapTexture:Et,rimLightingMixFactor:mt,rimMultiplyTexture:Gn,parametricRimColorFactor:cl,parametricRimFresnelPowerFactor:Hi,parametricRimLiftFactor:Fo,outlineWidthMode:ul,outlineWidthFactor:Ss,outlineWidthMultiplyTexture:hl,outlineColorFactor:Ts,outlineLightingMixFactor:dl,uvAnimationMaskTexture:nh,uvAnimationScrollXSpeedFactor:ih,uvAnimationScrollYSpeedFactor:bs,uvAnimationRotationSpeedFactor:rh};return d0(Ui({},e),{pbrMetallicRoughness:{baseColorFactor:He,baseColorTexture:Be},normalTexture:Ce,emissiveTexture:Re,emissiveFactor:Je,alphaMode:J,alphaCutoff:ie,doubleSided:me,extensions:{VRMC_materials_mtoon:sh}})}_parseV0UnlitProperties(i,e){var t,n,r,s,o;let a=i.shader==="VRM/UnlitTransparentZWrite",l=i.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(i),u=i.shader==="VRM/UnlitCutout",h=l?"BLEND":u?"MASK":"OPAQUE",d=u?(n=(t=i.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,f=this._portTextureTransform(i),p=((s=(r=i.vectorProperties)==null?void 0:r._Color)!=null?s:[1,1,1,1]).map(Mo),x=(o=i.textureProperties)==null?void 0:o._MainTex,m=x!=null?{index:x,extensions:Ui({},f)}:void 0,g={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:p,shadeMultiplyTexture:m};return d0(Ui({},e),{pbrMetallicRoughness:{baseColorFactor:p,baseColorTexture:m},alphaMode:h,alphaCutoff:d,extensions:{VRMC_materials_mtoon:g}})}_portTextureTransform(i){var e,t,n,r,s;let o=(e=i.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};let a=[(t=o?.[0])!=null?t:0,(n=o?.[1])!=null?n:0],l=[(r=o?.[2])!=null?r:1,(s=o?.[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(i){var e,t;let n=i.shader==="VRM/UnlitTransparentZWrite",r=((e=i.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||n,s=((t=i.floatProperties)==null?void 0:t._ZWrite)===1||n,o=0;if(r){let a=i.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(i){let e=new Set,t=new Set;i.forEach(n=>{var r,s;let o=n.shader==="VRM/UnlitTransparentZWrite",a=((r=n.keywordMap)==null?void 0:r._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||o,l=((s=n.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){let c=n.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,r)=>{let s=Math.min(Math.max(r-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,s)}),Array.from(t).sort().forEach((n,r)=>{let s=Math.min(Math.max(r,0),9);this._renderQueueMapTransparentZWrite.set(n,s)})}},f0=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),Cr=new R,xf=class extends ht{constructor(i){super(),this._attrPosition=new je(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(ld);let e=new Oe;e.setAttribute("position",this._attrPosition);let t=new vn({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Qi(e,t),this.add(this._line),this.constraint=i}updateMatrixWorld(i){Cr.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Cr.x,Cr.y,Cr.z),this.constraint.source&&Cr.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Cr.x,Cr.y,Cr.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(i)}};function p0(i,e){return e.set(i.elements[12],i.elements[13],i.elements[14])}var QT=new R,$T=new R;function eb(i,e){return i.decompose(QT,e,$T),e}function Vu(i){return i.invert?i.invert():i.inverse(),i}var If=class{constructor(i,e){this.destination=i,this.source=e,this.weight=1}},tb=new R,nb=new R,ib=new R,rb=new Ue,sb=new Ue,ob=new Ue,ab=class extends If{get aimAxis(){return this._aimAxis}set aimAxis(i){this._aimAxis=i,this._v3AimAxis.set(i==="PositiveX"?1:i==="NegativeX"?-1:0,i==="PositiveY"?1:i==="NegativeY"?-1:0,i==="PositiveZ"?1:i==="NegativeZ"?-1:0)}get dependencies(){let i=new Set([this.source]);return this.destination.parent&&i.add(this.destination.parent),i}constructor(i,e){super(i,e),this._aimAxis="PositiveX",this._v3AimAxis=new R(1,0,0),this._dstRestQuat=new Ue}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);let i=rb.identity(),e=sb.identity();this.destination.parent&&(eb(this.destination.parent.matrixWorld,i),Vu(e.copy(i)));let t=tb.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(i),n=p0(this.source.matrixWorld,nb).sub(p0(this.destination.matrixWorld,ib)).normalize(),r=ob.setFromUnitVectors(t,n).premultiply(e).multiply(i).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}};function lb(i,e){let t=[i],n=i.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(r=>{e(r)})}var cb=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(i){this._constraints.add(i);let e=this._objectConstraintsMap.get(i.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(i.destination,e)),e.add(i)}deleteConstraint(i){this._constraints.delete(i),this._objectConstraintsMap.get(i.destination).delete(i)}setInitState(){let i=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,i,e,n=>n.setInitState())}update(){let i=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,i,e,n=>n.update())}_processConstraint(i,e,t,n){if(t.has(i))return;if(e.has(i))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(i);let r=i.dependencies;for(let s of r)lb(s,o=>{let a=this._objectConstraintsMap.get(o);if(a)for(let l of a)this._processConstraint(l,e,t,n)});n(i),t.add(i)}},ub=new Ue,hb=new Ue,db=class extends If{get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._dstRestQuat=new Ue,this._invSrcRestQuat=new Ue}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Vu(this._invSrcRestQuat.copy(this.source.quaternion))}update(){let i=ub.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=hb.copy(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},fb=new R,pb=new Ue,mb=new Ue,gb=class extends If{get rollAxis(){return this._rollAxis}set rollAxis(i){this._rollAxis=i,this._v3RollAxis.set(i==="X"?1:0,i==="Y"?1:0,i==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._rollAxis="X",this._v3RollAxis=new R(1,0,0),this._dstRestQuat=new Ue,this._invDstRestQuat=new Ue,this._invSrcRestQuatMulDstRestQuat=new Ue}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Vu(this._invDstRestQuat.copy(this._dstRestQuat)),Vu(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){let i=pb.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=fb.copy(this._v3RollAxis).applyQuaternion(i),t=mb.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(t,this.weight)}},xb=new Set(["1.0","1.0-beta"]),O0=class sl{get name(){return sl.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return f0(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return f0(this,null,function*(){var t;let n=this.parser.json;if(((t=n.extensionsUsed)==null?void 0:t.indexOf(sl.EXTENSION_NAME))===-1)return null;let r=new cb,s=yield this.parser.getDependencies("node");return s.forEach((o,a)=>{var l;let c=n.nodes[a],u=(l=c?.extensions)==null?void 0:l[sl.EXTENSION_NAME];if(u==null)return;let h=u.specVersion;if(!xb.has(h)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${sl.EXTENSION_NAME} specVersion "${h}"`);return}let d=u.constraint;if(d.roll!=null){let f=this._importRollConstraint(o,s,d.roll);r.addConstraint(f)}else if(d.aim!=null){let f=this._importAimConstraint(o,s,d.aim);r.addConstraint(f)}else if(d.rotation!=null){let f=this._importRotationConstraint(o,s,d.rotation);r.addConstraint(f)}}),e.scene.updateMatrixWorld(),r.setInitState(),r})}_importRollConstraint(e,t,n){let{source:r,rollAxis:s,weight:o}=n,a=t[r],l=new gb(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){let c=new xf(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,n){let{source:r,aimAxis:s,weight:o}=n,a=t[r],l=new ab(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){let c=new xf(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,n){let{source:r,weight:s}=n,o=t[r],a=new db(e,o);if(s!=null&&(a.weight=s),this.helperRoot){let l=new xf(a);this.helperRoot.add(l)}return a}};O0.EXTENSION_NAME="VRMC_node_constraint";var vb=O0,Ou=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),Lf=class{},vf=new R,So=new R,F0=class extends Lf{get type(){return"capsule"}constructor(i){var e,t,n,r;super(),this.offset=(e=i?.offset)!=null?e:new R(0,0,0),this.tail=(t=i?.tail)!=null?t:new R(0,0,0),this.radius=(n=i?.radius)!=null?n:0,this.inside=(r=i?.inside)!=null?r:!1}calculateCollision(i,e,t,n){vf.setFromMatrixPosition(i),So.subVectors(this.tail,this.offset).applyMatrix4(i),So.sub(vf);let r=So.lengthSq();n.copy(e).sub(vf);let s=So.dot(n);s<=0||(r<=s||So.multiplyScalar(s/r),n.sub(So));let o=n.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(n.multiplyScalar(1/o),this.inside&&n.negate()),a}},_f=new R,m0=new qe,B0=class extends Lf{get type(){return"plane"}constructor(i){var e,t;super(),this.offset=(e=i?.offset)!=null?e:new R(0,0,0),this.normal=(t=i?.normal)!=null?t:new R(0,0,1)}calculateCollision(i,e,t,n){n.setFromMatrixPosition(i),n.negate().add(e),m0.getNormalMatrix(i),_f.copy(this.normal).applyNormalMatrix(m0).normalize();let r=n.dot(_f)-t;return n.copy(_f),r}},_b=new R,z0=class extends Lf{get type(){return"sphere"}constructor(i){var e,t,n;super(),this.offset=(e=i?.offset)!=null?e:new R(0,0,0),this.radius=(t=i?.radius)!=null?t:0,this.inside=(n=i?.inside)!=null?n:!1}calculateCollision(i,e,t,n){n.subVectors(e,_b.setFromMatrixPosition(i));let r=n.length(),s=this.inside?this.radius-t-r:r-t-this.radius;return s<0&&(n.multiplyScalar(1/r),this.inside&&n.negate()),s}},Ni=new R,yb=class extends Oe{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new R,this._currentTail=new R,this._shape=i,this._attrPos=new je(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new je(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0);let t=Ni.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),i=!0),i&&this._buildPosition()}_buildPosition(){Ni.copy(this._currentTail).sub(this._currentOffset);let i=Ni.length()/this._currentRadius;for(let n=0;n<=16;n++){let r=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(r),-Math.cos(r),0),this._attrPos.setXYZ(17+n,i+Math.sin(r),Math.cos(r),0),this._attrPos.setXYZ(34+n,-Math.sin(r),0,-Math.cos(r)),this._attrPos.setXYZ(51+n,i+Math.sin(r),0,Math.cos(r))}for(let n=0;n<32;n++){let r=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(r),Math.cos(r)),this._attrPos.setXYZ(100+n,i,Math.sin(r),Math.cos(r))}let e=Math.atan2(Ni.y,Math.sqrt(Ni.x*Ni.x+Ni.z*Ni.z)),t=-Math.atan2(Ni.z,Ni.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<34;i++){let e=(i+1)%34;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(68+i*2,34+i,34+e)}for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(136+i*2,68+i,68+e),this._attrIndex.setXY(200+i*2,100+i,100+e)}this._attrIndex.needsUpdate=!0}},Mb=class extends Oe{constructor(i){super(),this.worldScale=1,this._currentOffset=new R,this._currentNormal=new R,this._shape=i,this._attrPos=new je(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new je(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},Sb=class extends Oe{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new R,this._shape=i,this._attrPos=new je(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new je(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){let e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.needsUpdate=!0}},Tb=new R,yf=class extends ht{constructor(i){if(super(),this.matrixAutoUpdate=!1,this.collider=i,this.collider.shape instanceof z0)this._geometry=new Sb(this.collider.shape);else if(this.collider.shape instanceof F0)this._geometry=new yb(this.collider.shape);else if(this.collider.shape instanceof B0)this._geometry=new Mb(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");let e=new vn({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Zn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=Tb.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},bb=class extends Oe{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new R,this._springBone=i,this._attrPos=new je(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new je(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1,e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){let e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){let e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Eb=new R,wb=class extends ht{constructor(i){super(),this.matrixAutoUpdate=!1,this.springBone=i,this._geometry=new bb(this.springBone);let e=new vn({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Zn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=Eb.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},Mf=class extends it{constructor(i){super(),this.colliderMatrix=new ke,this.shape=i}updateWorldMatrix(i,e){super.updateWorldMatrix(i,e),Ab(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function Ab(i,e,t){let n=e.elements;i.copy(e),t&&(i.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],i.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],i.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var Rb=new ke;function Cb(i){return i.invert?i.invert():i.getInverse(Rb.copy(i)),i}var Pb=class{constructor(i){this._inverseCache=new ke,this._shouldUpdateInverse=!0,this.matrix=i;let e={set:(t,n,r)=>(this._shouldUpdateInverse=!0,t[n]=r,!0)};this._originalElements=i.elements,i.elements=new Proxy(i.elements,e)}get inverse(){return this._shouldUpdateInverse&&(Cb(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},Sf=new ke,To=new R,nl=new R,il=new R,rl=new R,Ib=new ke,Lb=class{constructor(i,e,t={},n=[]){this._currentTail=new R,this._prevTail=new R,this._boneAxis=new R,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new ke,this._initialLocalRotation=new Ue,this._initialLocalChildPosition=new R;var r,s,o,a,l,c;this.bone=i,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(r=t.hitRadius)!=null?r:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new R(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=n}get dependencies(){let i=new Set,e=this.bone.parent;e&&i.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)i.add(this.colliderGroups[t].colliders[n]);return i}get center(){return this._center}set center(i){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=i,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new Pb(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:Sf}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);let i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);let i=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail)}update(i){if(i<=0)return;this._calcWorldSpaceBoneLength();let e=nl.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);rl.copy(this._currentTail).add(To.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*i).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*i),il.setFromMatrixPosition(this.bone.matrixWorld),rl.sub(il).normalize().multiplyScalar(this._worldSpaceBoneLength).add(il),this._collision(rl),this._prevTail.copy(this._currentTail),this._currentTail.copy(rl).applyMatrix4(this._getMatrixWorldToCenter());let t=Ib.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,To.copy(rl).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(i){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){let n=this.colliderGroups[e].colliders[t],r=n.shape.calculateCollision(n.colliderMatrix,i,this.settings.hitRadius,To);if(r<0){i.addScaledVector(To,-r),i.sub(il);let s=i.length();i.multiplyScalar(this._worldSpaceBoneLength/s).add(il)}}}_calcWorldSpaceBoneLength(){To.setFromMatrixPosition(this.bone.matrixWorld),this.child?nl.setFromMatrixPosition(this.child.matrixWorld):(nl.copy(this._initialLocalChildPosition),nl.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=To.sub(nl).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:Sf}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:Sf}};function Db(i,e){let t=[],n=i;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(r=>{e(r)})}function Cf(i,e){i.children.forEach(t=>{e(t)||Cf(t,e)})}function Ub(i){var e;let t=new Map;for(let n of i){let r=n;do{let s=((e=t.get(r))!=null?e:0)+1;if(s===i.size)return r;t.set(r,s),r=r.parent}while(r!==null)}return null}var g0=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){let i=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{i.add(t)})}),Array.from(i)}get colliders(){let i=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{i.add(t)})}),Array.from(i)}addJoint(i){this._joints.add(i);let e=this._objectSpringBonesMap.get(i.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(i.bone,e)),e.add(i),this._isSortedJointsDirty=!0}addSpringBone(i){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(i)}deleteJoint(i){this._joints.delete(i),this._objectSpringBonesMap.get(i.bone).delete(i),this._isSortedJointsDirty=!0}deleteSpringBone(i){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(i)}setInitState(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){let e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let i=0;i<this._sortedJoints.length;i++){let e=this._sortedJoints[i];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(i){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){let t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(i),Cf(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;let i=[],e=new Set,t=new Set,n=new Set;for(let s of this._joints)this._insertJointSort(s,e,t,i,n);this._sortedJoints=i;let r=Ub(n);this._ancestors=[],r&&(this._ancestors.push(r),Cf(r,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(s),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(i,e,t,n,r){if(t.has(i))return;if(e.has(i)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(i);let s=i.dependencies;for(let o of s){let a=!1,l=null;Db(o,c=>{let u=this._objectSpringBonesMap.get(c);if(u)for(let h of u)a=!0,this._insertJointSort(h,e,t,n,r);else a||(l=c)}),l&&r.add(l)}n.push(i),t.add(i)}_relevantChildrenUpdated(i){var e,t;return((t=(e=this._objectSpringBonesMap.get(i))==null?void 0:e.size)!=null?t:0)>0?!0:(i.updateWorldMatrix(!1,!1),!1)}},x0="VRMC_springBone_extended_collider",Nb=new Set(["1.0","1.0-beta"]),Ob=new Set(["1.0"]),H0=class wo{get name(){return wo.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return Ou(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Ou(this,null,function*(){let t=yield this._v1Import(e);if(t!=null)return t;let n=yield this._v0Import(e);return n??null})}_v1Import(e){return Ou(this,null,function*(){var t,n,r,s,o;let a=e.parser.json;if(((t=a.extensionsUsed)==null?void 0:t.indexOf(wo.EXTENSION_NAME))===-1)return null;let l=new g0,c=yield e.parser.getDependencies("node"),u=(n=a.extensions)==null?void 0:n[wo.EXTENSION_NAME];if(!u)return null;let h=u.specVersion;if(!Nb.has(h))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${wo.EXTENSION_NAME} specVersion "${h}"`),null;let d=(r=u.colliders)==null?void 0:r.map((p,x)=>{var m,g,S,_,v,T,b,w,A,y,M,E,C,I,U;let L=c[p.node];if(L==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${x} attempted to use the node #${p.node} but not found`),null;let O=p.shape,k=(m=p.extensions)==null?void 0:m[x0];if(this.useExtendedColliders&&k!=null){let V=k.specVersion;if(!Ob.has(V))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${x0} specVersion "${V}". Fallbacking to the ${wo.EXTENSION_NAME} definition`);else{let z=k.shape;if(z.sphere)return this._importSphereCollider(L,{offset:new R().fromArray((g=z.sphere.offset)!=null?g:[0,0,0]),radius:(S=z.sphere.radius)!=null?S:0,inside:(_=z.sphere.inside)!=null?_:!1});if(z.capsule)return this._importCapsuleCollider(L,{offset:new R().fromArray((v=z.capsule.offset)!=null?v:[0,0,0]),radius:(T=z.capsule.radius)!=null?T:0,tail:new R().fromArray((b=z.capsule.tail)!=null?b:[0,0,0]),inside:(w=z.capsule.inside)!=null?w:!1});if(z.plane)return this._importPlaneCollider(L,{offset:new R().fromArray((A=z.plane.offset)!=null?A:[0,0,0]),normal:new R().fromArray((y=z.plane.normal)!=null?y:[0,0,1])})}}if(O.sphere)return this._importSphereCollider(L,{offset:new R().fromArray((M=O.sphere.offset)!=null?M:[0,0,0]),radius:(E=O.sphere.radius)!=null?E:0,inside:!1});if(O.capsule)return this._importCapsuleCollider(L,{offset:new R().fromArray((C=O.capsule.offset)!=null?C:[0,0,0]),radius:(I=O.capsule.radius)!=null?I:0,tail:new R().fromArray((U=O.capsule.tail)!=null?U:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${x} has no valid shape`)}),f=(s=u.colliderGroups)==null?void 0:s.map((p,x)=>{var m;return{colliders:((m=p.colliders)!=null?m:[]).flatMap(g=>{let S=d?.[g];return S??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${x} attempted to use a collider #${g} but not found`),[])}),name:p.name}});return(o=u.springs)==null||o.forEach((p,x)=>{var m;let g=p.joints,S=(m=p.colliderGroups)==null?void 0:m.map(T=>{let b=f?.[T];if(b==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${x} attempted to use a colliderGroup ${T} but not found`);return b}),_=p.center!=null?c[p.center]:void 0,v;g.forEach(T=>{if(v){let b=v.node,w=c[b],A=T.node,y=c[A],M={hitRadius:v.hitRadius,dragForce:v.dragForce,gravityPower:v.gravityPower,stiffness:v.stiffness,gravityDir:v.gravityDir!=null?new R().fromArray(v.gravityDir):void 0},E=this._importJoint(w,y,M,S);_&&(E.center=_),l.addJoint(E)}v=T})}),l.setInitState(),l})}_v0Import(e){return Ou(this,null,function*(){var t,n,r;let s=e.parser.json;if(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))===-1)return null;let o=(n=s.extensions)==null?void 0:n.VRM,a=o?.secondaryAnimation;if(!a)return null;let l=a?.boneGroups;if(!l)return null;let c=new g0,u=yield e.parser.getDependencies("node"),h=(r=a.colliderGroups)==null?void 0:r.map(d=>{var f;let p=u[d.node];return{colliders:((f=d.colliders)!=null?f:[]).map((x,m)=>{var g,S,_;let v=new R(0,0,0);return x.offset&&v.set((g=x.offset.x)!=null?g:0,(S=x.offset.y)!=null?S:0,x.offset.z?-x.offset.z:0),this._importSphereCollider(p,{offset:v,radius:(_=x.radius)!=null?_:0,inside:!1})})}});return l?.forEach((d,f)=>{let p=d.bones;p&&p.forEach(x=>{var m,g,S,_;let v=u[x],T=new R;d.gravityDir?T.set((m=d.gravityDir.x)!=null?m:0,(g=d.gravityDir.y)!=null?g:0,(S=d.gravityDir.z)!=null?S:0):T.set(0,-1,0);let b=d.center!=null?u[d.center]:void 0,w={hitRadius:d.hitRadius,dragForce:d.dragForce,gravityPower:d.gravityPower,stiffness:d.stiffiness,gravityDir:T},A=(_=d.colliderGroups)==null?void 0:_.map(y=>{let M=h?.[y];if(M==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${f} attempted to use a colliderGroup ${y} but not found`);return M});v.traverse(y=>{var M;let E=(M=y.children[0])!=null?M:null,C=this._importJoint(y,E,w,A);b&&(C.center=b),c.addJoint(C)})})}),e.scene.updateMatrixWorld(),c.setInitState(),c})}_importJoint(e,t,n,r){let s=new Lb(e,t,n,r);if(this.jointHelperRoot){let o=new wb(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){let n=new z0(t),r=new Mf(n);if(e.add(r),this.colliderHelperRoot){let s=new yf(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importCapsuleCollider(e,t){let n=new F0(t),r=new Mf(n);if(e.add(r),this.colliderHelperRoot){let s=new yf(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importPlaneCollider(e,t){let n=new B0(t),r=new Mf(n);if(e.add(r),this.colliderHelperRoot){let s=new yf(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}};H0.EXTENSION_NAME="VRMC_springBone";var Fb=H0,V0=class{get name(){return"VRMLoaderPlugin"}constructor(i,e){var t,n,r,s,o,a,l,c,u,h;this.parser=i;let d=e?.helperRoot,f=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new eT(i),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new nT(i),this.humanoidPlugin=(r=e?.humanoidPlugin)!=null?r:new cT(i,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(s=e?.lookAtPlugin)!=null?s:new bT(i,{helperRoot:d}),this.metaPlugin=(o=e?.metaPlugin)!=null?o:new AT(i),this.mtoonMaterialPlugin=(a=e?.mtoonMaterialPlugin)!=null?a:new kT(i),this.materialsHDREmissiveMultiplierPlugin=(l=e?.materialsHDREmissiveMultiplierPlugin)!=null?l:new WT(i),this.materialsV0CompatPlugin=(c=e?.materialsV0CompatPlugin)!=null?c:new JT(i),this.springBonePlugin=(u=e?.springBonePlugin)!=null?u:new Fb(i,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(h=e?.nodeConstraintPlugin)!=null?h:new vb(i,{helperRoot:d})}beforeRoot(){return Du(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(i){return Du(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(i)})}getMaterialType(i){let e=this.mtoonMaterialPlugin.getMaterialType(i);return e??null}extendMaterialParams(i,e){return Du(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(i,e),yield this.mtoonMaterialPlugin.extendMaterialParams(i,e)})}afterRoot(i){return Du(this,null,function*(){yield this.metaPlugin.afterRoot(i),yield this.humanoidPlugin.afterRoot(i),yield this.expressionPlugin.afterRoot(i),yield this.lookAtPlugin.afterRoot(i),yield this.firstPersonPlugin.afterRoot(i),yield this.springBonePlugin.afterRoot(i),yield this.nodeConstraintPlugin.afterRoot(i),yield this.mtoonMaterialPlugin.afterRoot(i);let e=i.userData.vrmMeta,t=i.userData.vrmHumanoid;if(e&&t){let n=new CT({scene:i.scene,expressionManager:i.userData.vrmExpressionManager,firstPerson:i.userData.vrmFirstPerson,humanoid:t,lookAt:i.userData.vrmLookAt,meta:e,materials:i.userData.vrmMToonMaterials,springBoneManager:i.userData.vrmSpringBoneManager,nodeConstraintManager:i.userData.vrmNodeConstraintManager});i.userData.vrm=n}})}};function Bb(i){let e=new Set;return i.traverse(t=>{if(!t.isMesh)return;let n=t;e.add(n)}),e}function v0(i,e,t){if(e.size===1){let s=e.values().next().value;if(s.weight===1)return i[s.index]}let n=new Float32Array(i[0].count*3),r=0;if(t)r=1;else for(let s of e)r+=s.weight;for(let s of e){let o=i[s.index],a=s.weight/r;for(let l=0;l<o.count;l++)n[l*3+0]+=o.getX(l)*a,n[l*3+1]+=o.getY(l)*a,n[l*3+2]+=o.getZ(l)*a}return new je(n,3)}function zb(i){var e;let t=Bb(i.scene),n=new Map,r=(e=i.expressionManager)==null?void 0:e.expressionMap;if(r!=null)for(let[s,o]of Object.entries(r)){let a=new Set;for(let l of o.binds)if(l instanceof Hu){if(l.weight!==0)for(let c of l.primitives){let u=n.get(c);u==null&&(u=new Map,n.set(c,u));let h=u.get(s);h==null&&(h=new Set,u.set(s,h)),h.add(l)}a.add(l)}for(let l of a)o.deleteBind(l)}for(let s of t){let o=n.get(s);if(o==null)continue;let a=s.geometry.morphAttributes;s.geometry.morphAttributes={};let l=s.geometry.clone();s.geometry=l;let c=l.morphTargetsRelative,u=a.position!=null,h=a.normal!=null,d={},f={},p=[];if(u||h){u&&(d.position=[]),h&&(d.normal=[]);let x=0;for(let[m,g]of o)u&&(d.position[x]=v0(a.position,g,c)),h&&(d.normal[x]=v0(a.normal,g,c)),r?.[m].addBind(new Hu({index:x,weight:1,primitives:[s]})),f[m]=x,p.push(0),x++}l.morphAttributes=d,s.morphTargetDictionary=f,s.morphTargetInfluences=p}}function ku(i,e,t){if(i.getComponent)return i.getComponent(e,t);{let n=i.array[e*i.itemSize+t];return i.normalized&&(n=We.denormalize(n,i.array)),n}}function k0(i,e,t,n){i.setComponent?i.setComponent(e,t,n):(i.normalized&&(n=We.normalize(n,i.array)),i.array[e*i.itemSize+t]=n)}function Hb(i){var e;let t=Vb(i),n=new Set;for(let h of t)n.has(h.geometry)&&(h.geometry=Yb(h.geometry)),n.add(h.geometry);let r=new Map;for(let h of n){let d=h.getAttribute("skinIndex"),f=(e=r.get(d))!=null?e:new Map;r.set(d,f);let p=h.getAttribute("skinWeight"),x=kb(d,p);f.set(p,x)}let s=new Map;for(let h of t){let d=Gb(h,r);s.set(h,d)}let o=[];for(let[h,d]of s){let f=!1;for(let p of o)if(Wb(d,p.boneInverseMap)){f=!0,p.meshes.add(h);for(let[x,m]of d)p.boneInverseMap.set(x,m);break}f||o.push({boneInverseMap:d,meshes:new Set([h])})}let a=new Map,l=new Tf,c=new Tf,u=new Tf;for(let h of o){let{boneInverseMap:d,meshes:f}=h,p=Array.from(d.keys()),x=Array.from(d.values()),m=new ci(p,x),g=c.getOrCreate(m);for(let S of f){let _=S.geometry.getAttribute("skinIndex"),v=l.getOrCreate(_),T=S.skeleton.bones,b=T.map(y=>u.getOrCreate(y)).join(","),w=`${v};${g};${b}`,A=a.get(w);A==null&&(A=_.clone(),Xb(A,T,p),a.set(w,A)),S.geometry.setAttribute("skinIndex",A)}for(let S of f)S.bind(m,new ke)}}function Vb(i){let e=new Set;return i.traverse(t=>{if(!t.isSkinnedMesh)return;let n=t;e.add(n)}),e}function kb(i,e){let t=new Set;for(let n=0;n<i.count;n++)for(let r=0;r<i.itemSize;r++){let s=ku(i,n,r);ku(e,n,r)!==0&&t.add(s)}return t}function Gb(i,e){let t=new Map,n=i.skeleton,r=i.geometry,s=r.getAttribute("skinIndex"),o=r.getAttribute("skinWeight"),a=e.get(s),l=a?.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(let c of l)t.set(n.bones[c],n.boneInverses[c]);return t}function Wb(i,e){for(let[t,n]of i.entries()){let r=e.get(t);if(r!=null&&!qb(n,r))return!1}return!0}function Xb(i,e,t){let n=new Map;for(let s of e)n.set(s,n.size);let r=new Map;for(let[s,o]of t.entries()){let a=n.get(o);r.set(a,s)}for(let s=0;s<i.count;s++)for(let o=0;o<i.itemSize;o++){let a=ku(i,s,o),l=r.get(a);k0(i,s,o,l)}i.needsUpdate=!0}function qb(i,e,t){if(t=t||1e-4,i.elements.length!=e.elements.length)return!1;for(let n=0,r=i.elements.length;n<r;n++)if(Math.abs(i.elements[n]-e.elements[n])>t)return!1;return!0}var Tf=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(i){return this._objectIndexMap.get(i)}getOrCreate(i){let e=this._objectIndexMap.get(i);return e==null&&(e=this._index,this._objectIndexMap.set(i,e),this._index++),e}};function Yb(i){var e,t,n,r;let s=new Oe;s.name=i.name,s.setIndex(i.index);for(let[o,a]of Object.entries(i.attributes))s.setAttribute(o,a);for(let[o,a]of Object.entries(i.morphAttributes)){let l=o;s.morphAttributes[l]=a.concat()}s.morphTargetsRelative=i.morphTargetsRelative,s.groups=[];for(let o of i.groups)s.addGroup(o.start,o.count,o.materialIndex);return s.boundingSphere=(t=(e=i.boundingSphere)==null?void 0:e.clone())!=null?t:null,s.boundingBox=(r=(n=i.boundingBox)==null?void 0:n.clone())!=null?r:null,s.drawRange.start=i.drawRange.start,s.drawRange.count=i.drawRange.count,s.userData=i.userData,s}function _0(i){if(Object.values(i).forEach(e=>{e!=null&&e.isTexture&&e.dispose()}),i.isShaderMaterial){let e=i.uniforms;e&&Object.values(e).forEach(t=>{let n=t.value;n!=null&&n.isTexture&&n.dispose()})}i.dispose()}function jb(i){let e=i.geometry;e&&e.dispose();let t=i.skeleton;t&&t.dispose();let n=i.material;n&&(Array.isArray(n)?n.forEach(r=>_0(r)):n&&_0(n))}function Zb(i){i.traverse(jb)}function Kb(i,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");let r=(t=e?.experimentalSameBoneCounts)!=null?t:!1,s=[];i.traverse(l=>{l.type==="SkinnedMesh"&&s.push(l)});let o=new Map,a=0;for(let l of s){let c=l.geometry.getAttribute("skinIndex");if(o.has(c))continue;let u=new Map,h=new Map;for(let d=0;d<c.count;d++)for(let f=0;f<c.itemSize;f++){let p=ku(c,d,f),x=u.get(p);x==null&&(x=u.size,u.set(p,x),h.set(x,p)),k0(c,d,f,x)}c.needsUpdate=!0,o.set(c,h),a=Math.max(a,u.size)}for(let l of s){let c=l.geometry.getAttribute("skinIndex"),u=o.get(c),h=[],d=[],f=r?a:u.size;for(let x=0;x<f;x++){let m=(n=u.get(x))!=null?n:0;h.push(l.skeleton.bones[m]),d.push(l.skeleton.boneInverses[m])}let p=new ci(h,d);l.bind(p,new ke)}}function Jb(i){let e=new Map;i.traverse(t=>{var n,r,s,o;if(!t.isMesh)return;let a=t,l=a.geometry,c=l.index;if(c==null)return;let u=e.get(l);if(u!=null){a.geometry=u;return}let h=Object.values(l.attributes)[0].count,d=new Array(h),f=0,p=c.array;for(let v=0;v<p.length;v++){let T=p[v];d[T]||(d[T]=!0,f++)}if(f===h)return;let x=[],m=[],g=0;for(let v=0;v<d.length;v++)if(d[v]){let T=g++;x[v]=T,m[T]=v}let S=new Oe;S.name=l.name,S.morphTargetsRelative=l.morphTargetsRelative,l.groups.forEach(v=>{S.addGroup(v.start,v.count,v.materialIndex)}),S.boundingBox=(r=(n=l.boundingBox)==null?void 0:n.clone())!=null?r:null,S.boundingSphere=(o=(s=l.boundingSphere)==null?void 0:s.clone())!=null?o:null,S.setDrawRange(l.drawRange.start,l.drawRange.count),S.userData=l.userData,e.set(l,S);{let v=c.array,T=new v.constructor(v.length);for(let b=0;b<v.length;b++){let w=v[b],A=x[w];T[b]=A}S.setIndex(new je(T,1,!1))}Object.keys(l.attributes).forEach(v=>{let T=l.attributes[v];if(T.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");let b=T.array,{itemSize:w,normalized:A}=T,y=new b.constructor(m.length*w);m.forEach((M,E)=>{for(let C=0;C<w;C++)y[E*w+C]=b[M*w+C]}),S.setAttribute(v,new je(y,w,A))});let _=!0;for(let[v,T]of Object.entries(l.morphAttributes)){let b=v;S.morphAttributes[b]=[];for(let w=0;w<T.length;w++){let A=T[w];if(A.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");let y=A.array,{itemSize:M,normalized:E}=A,C=new y.constructor(m.length*M);m.forEach((I,U)=>{for(let L=0;L<M;L++)C[U*M+L]=y[I*M+L]}),_=_&&C.every(I=>I===0),S.morphAttributes[b][w]=new je(C,M,E)}}_&&(S.morphAttributes={}),a.geometry=S}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function Qb(i){var e;((e=i.meta)==null?void 0:e.metaVersion)==="0"&&(i.scene.rotation.y=Math.PI)}var bo=class{constructor(){}};bo.combineMorphs=zb,bo.combineSkeletons=Hb,bo.deepDispose=Zb,bo.removeUnnecessaryJoints=Kb,bo.removeUnnecessaryVertices=Jb,bo.rotateVRM0=Qb;var Df=new Map,Uf=new Map,G0=new Ct({color:12567228,roughness:.9,side:rt});function $b(i){i.traverse(e=>{let t=new Map;for(let n of[...e.children]){if(!n.isSkinnedMesh||!n.visible||!n.geometry.index||Array.isArray(n.material))continue;let r=n.geometry.attributes.position;t.has(r)||t.set(r,new Map);let s=t.get(r);s.has(n.material)||s.set(n.material,[]),s.get(n.material).push(n)}for(let n of t.values())for(let r of n.values()){if(r.length<2)continue;let s=r[0],o=new Oe;for(let[l,c]of Object.entries(s.geometry.attributes))o.setAttribute(l,c);o.morphAttributes=s.geometry.morphAttributes,o.morphTargetsRelative=s.geometry.morphTargetsRelative,o.setIndex(r.flatMap(l=>Array.from(l.geometry.index.array)));let a=new Ki(o,s.material);a.name=s.name,a.position.copy(s.position),a.quaternion.copy(s.quaternion),a.scale.copy(s.scale),a.bind(s.skeleton,s.bindMatrix),a.castShadow=!0,a.receiveShadow=s.receiveShadow,a.frustumCulled=!1,r.forEach(l=>e.remove(l)),e.add(a)}})}function eE(i){i.traverse(e=>{if(!e.isSkinnedMesh||![e.material].flat().every(l=>/Body.*SKIN/.test(l.name)))return;let t=e.geometry,n=t.index,r=t.attributes.skinWeight,s=t.attributes.skinIndex;if(!n||!r||!s)return;let o=l=>{let c=0,u=0;for(let h=0;h<4;h++){let d=e.skeleton.bones[s.getComponent(l,h)]?.name||"",f=r.getComponent(l,h);/UpperArm|LowerArm/.test(d)&&(c+=f),/Hand|Index|Middle|Ring|Little|Thumb/.test(d)&&(u+=f)}return c>.55&&u<.15},a=[];for(let l=0;l<n.count;l+=3){let c=[n.getX(l),n.getX(l+1),n.getX(l+2)];c.every(o)||a.push(...c)}e.geometry=t.clone(),e.geometry.setIndex(a)})}function tE(i){return Df.has(i)||Df.set(i,(async()=>{let e=new Ci;i==="host"&&e.register(o=>new V0(o));let[t,n,r]=await Promise.all([e.loadAsync(`assets/models/anime/${i}.${i==="host"?"vrm":"glb"}`),new Ei().loadAsync(`assets/models/anime/${i}-motions.json`),i==="host"?new Ei().loadAsync("assets/models/anime/host-skate.json"):null]);t.userData.vrm&&(t.userData.vrm.humanoid.autoUpdateHumanBones=!1,t.userData.vrm.springBoneManager=void 0);let s=t.scene;return s.traverse(o=>{if(o.isMesh)if(o.castShadow=!0,o.receiveShadow=i!=="host",o.frustumCulled=!1,i!=="host")o.material=G0;else for(let a of[o.material].flat())"outlineWidthFactor"in a&&(a.outlineWidthFactor*=.35)}),i==="host"&&eE(s),$b(s),{model:s,clips:[...JSON.parse(n),...r?JSON.parse(r):[]].map(o=>bi.parse(o))}})()),Df.get(i)}function nE(i,e){let t=e?"Hair_Buns":"Hair_SimpleParted";return Uf.has(t)||Uf.set(t,new Ci().loadAsync(`assets/models/anime/${t}.glb`)),Uf.get(t).then(n=>{let r=i.getObjectByName("J_Bip_C_Head");if(!r)return;let s=new ht;s.rotation.y=Math.PI,s.scale.set(1.2,e?.88:.82,1.1),s.position.y=.02;let o=n.scene.clone(!0);o.position.set(0,e?-1.5496000058:-1.5997999686,e?.0108997822:.017399986),o.traverse(a=>{a.isMesh&&(a.material=G0,a.castShadow=!0,a.receiveShadow=!0)}),s.add(o),r.add(s)})}function Gu({player:i=!1,female:e=!1,old:t=!1}={}){let n=new ht,r=new ht;n.add(r);let s={root:n,body:r,head:null,ready:!1,speed:0,mixer:null,idle:null,walk:null,run:null,animate(o,a){if(!this.ready)return;this.speed=We.damp(this.speed,a,10,o);let l=We.clamp(this.speed/.32,0,1),c=We.clamp((this.speed-2.8)/1.4,0,1),u=this.fallMotion?.update(o,this.root.position.y,this.airborne)||0;this.skateWeight=this.riding?We.damp(this.skateWeight||0,1,14,o):0,this.skate&&(this.skate.enabled=!!this.riding);let h=(1-this.skateWeight)*(1-u);this.skate?.setEffectiveWeight(this.skateWeight*(1-u)),this.idle.setEffectiveWeight((1-l)*h),this.walk.setEffectiveWeight(l*(1-c)*h),this.run.setEffectiveWeight(l*c*h),this.walk.timeScale=Math.max(.45,this.speed/1.65),this.run.timeScale=Math.max(.65,this.speed/4.4),this.naturalIdle?.restore(),this.mixer.update(o),this.naturalIdle?.update(o,(1-l)*h)}};return s.readyPromise=tE(i?"host":e?"npc-female":"npc-male").then(async({model:o,clips:a})=>{let l=Og(o);r.add(l),l.updateMatrixWorld(!0);let c=l.getObjectByName("J_Bip_C_Head"),u=l.getObjectByName("J_Adj_L_FaceEye")||l.getObjectByName("J_Bip_L_Eye");c&&u&&u.getWorldPosition(new R).z>c.getWorldPosition(new R).z&&l.rotateY(Math.PI),s.head=c,s.mixer=new no(l),s.idle=s.mixer.clipAction(a.find(h=>h.name==="Idle")),s.walk=s.mixer.clipAction(a.find(h=>h.name==="Walk")),s.run=s.mixer.clipAction(a.find(h=>h.name==="Run")||a.find(h=>h.name==="Walk")),i&&(s.skate=s.mixer.clipAction(a.find(h=>h.name==="Skate")),s.skate.setLoop(hu).play().setEffectiveWeight(0),s.landing=s.mixer.clipAction(a.find(h=>h.name==="Land")),s.landing.setLoop(uu,1),s.landing.clampWhenFinished=!0,s.fallMotion=Ug(s.landing),s.prepareFall=(h=s.root.position.y)=>s.fallMotion.begin(h),s.land=()=>s.fallMotion.finish(s.root.position.y),s.cancelLanding=()=>s.fallMotion.cancel()),s.idle.play(),s.walk.play().setEffectiveWeight(0),s.run.play().setEffectiveWeight(0),s.mixer.update(.01),l.updateMatrixWorld(!0),s.naturalIdle=Ng(l,{blinkIndex:i?11:null}),i||await nE(l,e),t&&!i&&l.scale.setScalar(.98),s.ready=!0}).catch(o=>console.error("Anime character failed to load",o)),s}function W0(i){let e=91827,t=0,n=new Map,r=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),s=ft(512,512,(p,x,m)=>{let g=6249,S=()=>(g=Math.imul(g,1664525)+1013904223>>>0,g/4294967296);p.fillStyle="#3c4c29",p.fillRect(0,0,x,m);for(let _=0;_<2700;_++){let v=S()*x,T=S()*m,b=3+S()*6,w=S()*Math.PI,A=S();p.fillStyle=`rgb(${48+A*34},${64+A*38},${27+A*17})`;for(let y of[-x,0,x])for(let M of[-m,0,m])v+y+b<0||v+y-b>x||T+M+b<0||T+M-b>m||(p.beginPath(),p.ellipse(v+y,T+M,b,b*.43,w,0,Math.PI*2),p.fill())}});s.anisotropy=4;let o=new Ct({roughness:1,color:13948605,map:s});function a(p,x){let m=new ln(1,p,x);return m.scale(.46,.4,.46),m.translate(0,.42,0),m}let l=[[a(8,5),0],[a(8,3),32],[a(6,3),72]];function c(p,x,m,g,S){let _=new En(x,o,g.length);g.forEach((v,T)=>{_.setMatrixAt(T,v),_.setColorAt(T,S[T])}),_.castShadow=!0,_.receiveShadow=!0,_.computeBoundingSphere(),p.addLevel(_,m,.18)}function u(p,x,m){x.forEach((g,S)=>{let _=g.clone(),v=_.elements;v[12]+=p.x,v[13]+=p.y,v[14]+=p.z;let T=Math.floor(v[12]/24)*24+12,b=Math.floor(v[14]/24)*24+12,w=T+":"+b;n.has(w)||n.set(w,{x:T,z:b,matrices:[],tints:[]}),v[12]-=T,v[14]-=b;let A=n.get(w);A.matrices.push(_),A.tints.push(m[S])})}function h(){for(let p of n.values()){let x=new bn;x.position.set(p.x,0,p.z);for(let[m,g]of l)c(x,m,g,p.matrices,p.tints);i.add(x)}n.clear()}function d(p,x,m,g,S=0){let _=m>g,v=Math.max(m,g),T=Math.min(m,g),b=Math.ceil(v/8);for(let w=0;w<b;w++){let A=v/b,y=Math.ceil(A/.55),M=-v/2+A*(w+.5),E=new bn;E.position.set(p+(_?M:0),S,x+(_?0:M));let C=[],I=[],U=new it;for(let L=0;L<y;L++){let O=-A/2+A*(L+.5)/y,k=(r()-.5)*.13;U.position.set(_?O:k,.025,_?k:O),U.rotation.y=r()*Math.PI*2;let V=.91+r()*.15;U.scale.set(V*T,.79+r()*.16,V*T),U.updateMatrix(),C.push(U.matrix.clone()),I.push(new Me().setHSL(.22+r()*.025,.07,.88+r()*.1))}u(E.position,C,I),t+=y}}function f(p,x,m,g,{baseY:S=0,height:_=1,tint:v=16777215}={}){let T=new bn,b=new it,w=[];T.position.set(p,S,x);for(let A=-m/2+.35;A<m/2;A+=.85)for(let y=-g/2+.35;y<g/2;y+=.85){if((A/(m/2))**2+(y/(g/2))**2>1.08)continue;b.position.set(A+(r()-.5)*.24,.035,y+(r()-.5)*.24),b.rotation.y=r()*Math.PI*2;let M=1.15+r()*.35;b.scale.set(M,_*(.85+r()*.3),M),b.updateMatrix(),w.push(b.matrix.clone())}w.length&&(u(T.position,w,w.map(()=>new Me(v))),t+=w.length)}return{addHedge:d,addPatch:f,flush:h,get count(){return t}}}function X0(i){let e=91827,t=0,n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),r=new Ct({vertexColors:!0,roughness:.87,metalness:0,side:rt}),s=Array.from({length:3},(c,u)=>({near:o(180,u),far:o(65,u)}));function o(c,u){let h=[],d=[],f=[],p=new Me,x=new R,m=new R,g=new R,S=new R,_=new R;function v(E,C){return h.push(E.x,E.y,E.z),d.push(C.r,C.g,C.b),h.length/3-1}function T(E,C,I){let U=C.clone().sub(E).normalize(),L=new R().crossVectors(U,new R(0,0,1)).normalize(),O=new R().crossVectors(U,L).normalize(),k=h.length/3,V=new Me(5326645);for(let[z,W]of[[E,I],[C,I*.48]])for(let Z=0;Z<5;Z++){let ue=Z*Math.PI*2/5;v(z.clone().addScaledVector(L,Math.cos(ue)*W).addScaledVector(O,Math.sin(ue)*W),V)}for(let z=0;z<5;z++){let W=(z+1)%5;f.push(k+z,k+W,k+5+z,k+W,k+5+W,k+5+z)}}let b=new Jr(1,1),w=b.attributes.position,A=h.length/3;for(let E=0;E<w.count;E++){let C=w.getX(E),I=w.getY(E),U=w.getZ(E),L=1+.08*Math.sin(C*9+u)+.06*Math.cos(U*8+I*5);p.setHSL(.245+u*.008,.43,.16+(I+1)*.036,yt),v(new R(C*.4*L,.49+I*.36,U*.4*L),p)}for(let E=0;E<w.count;E+=3)f.push(A+E,A+E+1,A+E+2);b.dispose(),T(new R(0,0,0),new R(.015,.6,0),.024);for(let E=0;E<19;E++){let C=E*2.399+u*.4,I=.28+n()*.58,U=.18+n()*.22;if(x.set(0,.16+n()*.19,0),m.set(Math.cos(C)*U,I,Math.sin(C)*U),T(x,m,.009+n()*.004),c>200)for(let L=0;L<2;L++)T(m.clone().lerp(x,.2),m.clone().add(new R((n()-.5)*.2,.1,(n()-.5)*.2)),.003)}for(let E=0;E<c;E++){let C=E*2.399+n()*.6,I=n()*2-1,U=Math.sqrt(Math.max(0,1-I*I)),L=1+.075*Math.sin(C*5+u)+.07*Math.sin(I*9+C*3),O=(.79+n()*.21)*L,k=new R(Math.cos(C)*U*.49*O,.5+I*.44,Math.sin(C)*U*.49*O);_.set(Math.cos(C)*U,I*.6+.65,Math.sin(C)*U).normalize(),_.add(new R((n()-.5)*1.3,(n()-.5)*.6,(n()-.5)*1.3)).normalize(),g.crossVectors(_,new R(0,1,0)).normalize(),S.crossVectors(_,g).normalize();let V=n()*Math.PI*2;g.multiplyScalar(Math.cos(V)).addScaledVector(S,Math.sin(V)),S.crossVectors(_,g).normalize();let z=c>100?1.75:2.4,W=(.07+n()*.04)*z,Z=W*(.31+n()*.1),ue=.19+k.y*.09+n()*.055;p.setHSL(.235+n()*.035,.38+n()*.2,ue,yt);let le=h.length/3,be=c>200?[[0,-.5,0],[-1,-.08,0],[-.65,.3,0],[0,.5,0],[.65,.3,0],[1,-.08,0],[0,.03,.1]]:[[0,-.5,0],[-1,0,0],[0,.5,0],[1,0,0]];for(let[q,N,H]of be){let G=k.clone().addScaledVector(g,q*Z).addScaledVector(S,N*W).addScaledVector(_,H*W);v(G,p)}if(c>200)for(let q=0;q<6;q++)f.push(le+6,le+q,le+(q+1)%6);else f.push(le,le+1,le+2,le,le+2,le+3)}let y=new Oe;y.setAttribute("position",new Ie(h,3)),y.setAttribute("color",new Ie(d,3)),y.setIndex(f),y.computeVertexNormals();let M=y.attributes.normal;for(let E=0;E<w.count;E++){let C=new R(w.getX(E),w.getY(E),w.getZ(E)).normalize();M.setXYZ(E,C.x,C.y,C.z)}return y.computeBoundingSphere(),y}function a(c,u,h,d,f=0){let p=h>d,x=Math.max(h,d),m=Math.min(h,d),g=Math.ceil(x/8);for(let S=0;S<g;S++){let _=x/g,v=Math.ceil(_/.55),T=-x/2+_*(S+.5),b=new bn;b.position.set(c+(p?T:0),f,u+(p?0:T));let w=s[(S+Math.round(Math.abs(c+u)))%s.length],A=[],y=[],M=new it;for(let E=0;E<v;E++){let C=-_/2+_*(E+.5)/v,I=(n()-.5)*.13;M.position.set(p?C:I,.025,p?I:C),M.rotation.y=n()*Math.PI*2;let U=.91+n()*.15;M.scale.set(U*m,.79+n()*.16,U*m),M.updateMatrix(),A.push(M.matrix.clone()),y.push(new Me().setHSL(.22+n()*.025,.07,.88+n()*.1))}for(let[E,C]of[[w.near,0],[w.far,26]]){let I=new En(E,r,v);A.forEach((U,L)=>{I.setMatrixAt(L,U),I.setColorAt(L,y[L])}),I.castShadow=!0,I.receiveShadow=!0,I.computeBoundingSphere(),b.addLevel(I,C,.15)}i.add(b),t+=v}}function l(c,u,h,d,{baseY:f=0,height:p=1,tint:x=16777215}={}){let m=new bn,g=new it,S=[];m.position.set(c,f,u);for(let v=-h/2+.35;v<h/2;v+=.85)for(let T=-d/2+.35;T<d/2;T+=.85){if((v/(h/2))**2+(T/(d/2))**2>1.08)continue;g.position.set(v+(n()-.5)*.24,.035,T+(n()-.5)*.24),g.rotation.y=n()*Math.PI*2;let b=1.15+n()*.35;g.scale.set(b,p*(.85+n()*.3),b),g.updateMatrix(),S.push(g.matrix.clone())}if(!S.length)return;let _=s[Math.round(Math.abs(c+u))%3];for(let[v,T]of[[_.near,0],[_.far,20]]){let b=new En(v,r,S.length);S.forEach((w,A)=>{b.setMatrixAt(A,w),b.setColorAt(A,new Me(x))}),b.castShadow=!0,b.receiveShadow=!0,b.computeBoundingSphere(),m.addLevel(b,T,.15)}i.add(m),t+=S.length}return{addHedge:a,addPatch:l,get count(){return t}}}var Nf=41731,ol=()=>(Nf=Math.imul(Nf,1664525)+1013904223>>>0,Nf/4294967296),iE=ft(1024,1024,(i,e,t)=>{for(let n=0;n<1450;n++){let r=ol()*Math.PI*2,s=Math.sqrt(ol())*.46*(.88+.1*Math.sin(r*5)+.06*Math.cos(r*3)),o=e*(.5+Math.cos(r)*s),a=t*(.5+Math.sin(r)*s),l=6+ol()*12;i.save(),i.translate(o,a),i.rotate(r+ol()*2);let c=ol();i.fillStyle=`rgb(${48+c*42},${68+c*49},${24+c*23})`,i.beginPath(),i.ellipse(0,0,l,l*.39,0,0,Math.PI*2),i.fill(),i.strokeStyle="#a6b07870",i.lineWidth=.65,i.beginPath(),i.moveTo(-l,0),i.lineTo(l,0),i.stroke(),i.restore()}}),rE=new Ct({map:iE,alphaTest:.42,alphaToCoverage:!0,side:rt,roughness:1,color:14277047});function Of(i,e,t,n,r=1){let s=r+345,o=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),a=[];for(let c=0;c<i;c++){let u=c*2.399963,h=1-2*(c+.5)/i,d=Math.sqrt(1-h*h),f=e*(.43+o()*.2),p=e*(i>20?1:1.26),x=new Yt(p,p*.84);x.rotateX((o()-.5)*1.4),x.rotateY(u),x.rotateZ((o()-.5)*.5),x.translate(Math.cos(u)*d*f,t+h*n*.32,Math.sin(u)*d*f),a.push(x)}let l=Ja(a);return a.forEach(c=>c.dispose()),l.computeBoundingSphere(),l}function q0(i,e){let t=new Ct({map:Ar,roughness:1,color:12168852}),n=new Ct({map:Ar,roughness:1,color:14802897}),r=[];function s(f,p,x,m){let g=new R(...p).sub(new R(...f)),S=new Mt(m,x,g.length(),7,1);S.applyQuaternion(new Ue().setFromUnitVectors(new R(0,1,0),g.clone().normalize())),S.translate(...new R(...f).addScaledVector(g,.5).toArray()),r.push(S)}s([0,1.4,0],[.18,5.8,0],.2,.1);for(let f=0;f<6;f++){let p=f*2.399;s([.1,3.3+f*.2,0],[Math.cos(p)*1.8,6.6+f*.18,Math.sin(p)*1.8],.085,.025)}let o=Ja(r);r.forEach(f=>f.dispose());let a=new Mt(.205,.23,1.4,7);a.translate(0,.7,0);let l=Of(20,3.8,6.6,5,13),c=Of(10,3.8,6.6,5,13),u=Of(5,3.8,6.6,5,13),h=new Map,d=new it;for(let f of e){let p=Math.floor(f.x/24),x=Math.floor(f.z/24),m=p+":"+x;h.has(m)||h.set(m,{x:p*24+12,z:x*24+12,trees:[]}),h.get(m).trees.push(f)}for(let f of h.values()){let p=new bn;p.position.set(f.x,0,f.z);for(let[x,m]of[[l,0],[c,48],[u,105]]){let g=new ht;for(let[S,_,v]of[[o,t,!0],[a,n,!0],[x,rE,!0]]){let T=new En(S,_,f.trees.length);f.trees.forEach((b,w)=>{let A=b.size||1;d.position.set(b.x-f.x,b.baseY||0,b.z-f.z),d.rotation.set(0,w*2.399+b.x*.3,0),d.scale.set(A,A,A),d.updateMatrix(),T.setMatrixAt(w,d.matrix)}),T.castShadow=v,T.receiveShadow=!0,T.computeBoundingSphere(),g.add(T)}p.addLevel(g,m,.18)}i.add(p)}return{trees:e.length,cells:h.size,nearTriangles:o.index.count/3+a.index.count/3+l.index.count/3}}function Y0({box:i,inst:e,mesh:t,label:n,solid:r,buildings:s,surfaces:o}){let a=517,l=()=>(a=Math.imul(a,1664525)+1013904223>>>0,a/4294967296),c=ft(256,256,(C,I,U)=>{C.fillStyle="#d9d7cc",C.fillRect(0,0,I,U);for(let L=0;L<14e3;L++)C.fillStyle=`rgba(58,57,48,${l()*.075})`,C.fillRect(l()*I,l()*U,1,1)});c.wrapS=c.wrapT=Ft;let u=$(12960174,{map:c}),h=$(14013383,{map:c}),d=$(10583146,{map:c}),f=$(11647415,{map:c}),p=$(7830904),x=$(12698295),m=$(8885135,{metalness:.58,roughness:.38}),g=$(3227198),S=$(6909542),_=$(6124660,{metalness:.5,roughness:.4}),v=$(4346708,{metalness:.38,roughness:.27}),T=Array.from({length:8},(C,I)=>{let U=ft(256,256,(L,O,k)=>{let V=L.createLinearGradient(0,0,60,k);V.addColorStop(0,["#78918e","#6e8789","#85999a"][I%3]),V.addColorStop(1,"#26373a"),L.fillStyle=V,L.fillRect(0,0,O,k);let z=18+I*7,W=30+I%4*9;L.fillStyle=["#bdb8a7aa","#c8cec199","#d3c8af88"][I%3],L.fillRect(0,0,z,k),L.fillRect(O-W,0,W,k),L.fillStyle="#eeeee922";for(let Z=5;Z<z;Z+=6)L.fillRect(Z,0,2,k);L.fillStyle="#12222288",L.fillRect(0,175,O,6)});return $(14016217,{map:U,roughness:.29,metalness:.22})}),b=ft(128,128,(C,I,U)=>{C.fillStyle="#b4b7ad",C.fillRect(0,0,I,U),C.strokeStyle="#697575",C.lineWidth=3;for(let L=8;L<50;L+=6)C.beginPath(),C.moveTo(L,15),C.lineTo(L,110),C.stroke();for(let L=8;L<37;L+=5)C.beginPath(),C.arc(85,64,L,0,6.283),C.stroke()}),w=$(16777215,{map:b});for(let C of[...T,m,_,w])C.userData.castShadow=!1;function A(C,I,U,L,O,k,V=1){i(g,C,I,U,L+.22,O+.2,.14),i(T[k%8],C,I,U+V*.092,L,O,.05);for(let z of[-L/2,0,L/2])i(m,C+z,I,U+V*.15,.055,O+.09,.075);for(let z of[-O/2,O*.2,O/2])i(m,C,I+z,U+V*.15,L+.08,.05,.075);i(x,C,I-O/2-.1,U+V*.18,L+.28,.14,.36),i(x,C,I+O/2+.12,U+V*.12,L+.22,.1,.25)}function y(C,I,U,L){i(x,C,I,U,.75,.49,.34),i(w,C,I,U+L*.18,.68,.42,.018);for(let O of[-.26,.26])i(_,C+O,I-.27,U,.04,.055,.42)}function M(C,I,U,L=1,O="",k=!1){let V=k?Math.min(10,U*.4):4.5;i(g,C,1.65,I+.11*L,V+.38,3.3,.24);for(let W=0;W<4;W++){let Z=(W-1.5)*V/4;i(T[W],C+Z,1.6,I+.28*L,V/4-.06,3.1,.09),i(m,C+Z+V/8,1.6,I+.34*L,.06,3.2,.09),(W===1||W===2)&&i(x,C+Z,1.65,I+.42*L,.045,.7,.06)}i(x,C,3.48,I+.7*L,V+1.1,.26,1.8),i(m,C,3.29,I+.82*L,V+1,.05,1.7);for(let W of[-V/2,V/2])i(p,C+W,1.65,I+.95*L,.2,3.3,.2);for(let W=0;W<3;W++){let Z=.12+W*.12,ue=I+L*(2.4-W*.58);i(x,C,Z/2,ue,V+1.5,Z,.65),o.push({x:C,z:ue,w:V+1.5,d:.65,y:Z})}let z=n(O,C,4.02,I+.4*L,Math.min(U-1,k?9:6.5),.6,{font:'"Kaiti SC",serif',color:"#534f43"});L<0&&(z.rotation.y=Math.PI)}function E({name:C,x:I,z:U,w:L,d:O,h:k=16,floors:V=4,style:z="old"}){let W=z==="dorm",Z=/实验|研究|科研|工程/.test(C),ue=C==="\u5B66\u751F\u98DF\u5802",le=C==="\u79D1\u5B66\u4F1A\u5802",be=C==="\u6821\u533B\u9662",q=W?h:ue?d:Z?f:u;s.push({name:C,x:I,z:U,w:L,d:O,h:k}),r(I,U,L,O,k),i(q,I,k/2,U,L,k,O),i(p,I,.48,U,L+.12,.96,O+.12),i(S,I,k+.08,U,L+.2,.16,O+.2);for(let H of[-1,1]){let G=U+H*(O/2+.04),oe=Math.floor(L/(W?3.35:3.9)),se=(L-.9)/oe;i(x,I,k+.42,G,L+.34,.66,.27),i(p,I,k+.78,G,L+.45,.095,.4);for(let pe=0;pe<V;pe++){let Ee=2.08+pe*(k-.95)/V,F=W?1.83:Z?1.95:1.96;(W||Z)&&i(W?x:m,I,Ee-F/2-.31,G+H*.1,L,.15,.27);for(let ee=0;ee<oe;ee++){let ne=I-L/2+.45+se*(ee+.5);if(A(ne,Ee,G,se*(W?.69:.64),F,(ee*3+pe*5)%8,H),W&&pe>0&&ee%3!==0){let K=se*.85,Q=G+H*.69;i(x,ne,Ee-1.1,Q,K,.16,1.1),i(_,ne,Ee-.55,G+H*1.2,K,1,.06),i(m,ne,Ee-.02,G+H*1.24,K+.08,.065,.09);for(let fe of[-K/2,K/2])i(x,ne+fe,Ee-.52,Q,.11,1.1,1.15);i(T[(ee+pe)%8],ne,Ee-.55,G+H*1.25,K-.12,.82,.03);for(let fe=0;fe<3;fe++)i(m,ne+K*.32,Ee-.78+fe*.22,G+H*1.3,K*.24,.075,.08)}else pe>0&&(ee+pe)%3===1&&y(ne+se*.28,Ee-1.34,G+H*.33,H)}}for(let pe of[-L/2+.2,L/2-.2])i(x,I+pe,k/2,G+H*.09,.29,k,.2),i(p,I+pe+.19,k/2,G+H*.22,.075,k,.08)}for(let H of[-1,1]){let G=I+H*L/2;for(let oe=0;oe<V;oe++)for(let se=0;se<Math.max(2,Math.floor(O/4));se++){let pe=U-O/2+2+se*(O-4)/Math.max(1,Math.floor(O/4)-1),Ee=2.08+oe*(k-.95)/V;i(g,G+H*.02,Ee,pe,.13,2.07,1.77),i(T[(se+oe)%8],G+H*.105,Ee,pe,.05,1.9,1.6);for(let F of[-.83,0,.83])i(m,G+H*.15,Ee,pe+F,.08,1.96,.05);for(let F of[-1,.4,1])i(x,G+H*.14,Ee+F,pe,.19,.08,1.88)}}i(q,I+L*.27,k+.82,U-O*.2,4.3,1.6,3.5),i(S,I+L*.27,k+1.68,U-O*.2,4.6,.12,3.8);for(let H of[-1,1])i(x,I+H*L/2,k+.42,U,.27,.65,O);let N=U+O/2;if(W||M(I,N,L,1,C,ue||le),W){i(p,I,k/2,N+.06,3,k,.24);for(let H=1;H<V;H++)A(I,1.45+H*(k-.95)/V,N+.24,1.9,2.35,2);M(I,N+.3,L,1,C)}if(Z)for(let H=0;H<3;H++){let G=I-L*.22+H*2.1;i(m,G,k+.85,U,1.2,1.7,1.2),i(S,G,k+1.73,U,1.48,.1,1.48)}if(le){for(let H of[-L*.36,L*.36])i(x,I+H,3.2,N+.8,.55,6.4,1.2);i(x,I,6.5,N+.7,L*.85,.3,1.7)}if(be&&n("\uFF0B",I+3.5,4.15,N+.3,.55,.7,{color:"#8e3935"}),ue){for(let H of[-1,1])for(let G=0;G<8;G++)i(m,I+H*(L/2+.2),4.1+G*.12,U-O*.3,.32,.065,7);i(gi(12,5),I,.11,N+4.6,12,.14,5),o.push({x:I,z:N+4.6,w:12,d:5,y:.18}),n("\u4E00\u996D\u4E00\u852C \xB7 \u4E00\u65E5\u4E09\u9910",I,3.58,N+1.66,5.9,.28,{color:"#eee0c2"})}return{x:I,z:U,w:L,d:O,h:k}}return{building:E}}function j0({box:i,mesh:e,label:t,solid:n,buildings:r,surfaces:s,path:o,interactables:a}){let f=$(12039072),p=$(10001297),x=$(9977138),m=$(14931897),g=$(5990760,{metalness:.5,roughness:.45}),S=$(2440510),_=$(8493718,{transparent:!0,opacity:.2,metalness:.15,roughness:.28}),v=$(6383973);r.push({name:"\u70DB\u5149\u8D85\u5E02",x:-78,z:119,w:20,d:12,h:4.8}),n(-78,119,20,12,4.8),i(f,-78,2.3,119+.35,20,4.6,12-.7),i(p,-78,.23,119,20+.12,.46,12+.12),i(v,-78,4.72,119,20+.3,.22,12+.3),o(-65.5,119,5,12),o(-78,110.1,20,5.8),o(-66.5,110.5,3,5);function T(E,C,I,U,L,O,k){i(E,-78+U,I,113-C,k,O,L)}function b(E,C,I,U,L,O,k){let V=t(E,-78+U,I,113-C,L,O,k);return V.rotation.y=Math.PI,V}T(S,-.28,2,0,.12,3.4,11.5);let A=[13076300,8297332,13351021,11949896,7838630].map(E=>$(E));for(let E of[-1,1]){let C=E*3.8;for(let I=0;I<3;I++){let U=.9+I*.64;T(m,-.3,U,C,.4,.065,3.1);for(let L=0;L<9;L++)T(A[(L+I)%A.length],-.23,U+.23,C-1.34+L*.33,.17,.36,.22)}T(_,.03,2.05,C,.035,3.18,3.25);for(let I of[-1.66,0,1.66])T(g,.075,2.03,C+I,.1,3.35,.06);for(let I of[.39,3.68])T(g,.075,I,C,.1,.075,3.4)}for(let E of[-1,1]){let C=E*.72;T(_,.055,1.93,C,.04,3.15,1.36);for(let I of[-.69,.69])T(g,.1,1.93,C+I,.11,3.22,.055);T(m,.19,1.54,E*.16,.07,.72,.055)}T(x,.12,4.06,0,.24,.85,11.8),T(m,.25,4.52,0,.3,.075,12);let y=b("\u70DB \u5149 \u8D85 \u5E02",.26,4.12,0,7.5,.69,{font:'"Noto Sans SC",sans-serif',color:"#fff2cb"}),M=b("\u6821\u56ED\u751F\u6D3B \xB7 \u65E5\u7528\u767E\u8D27",.265,3.86,0,6.3,.19,{color:"#efdec0"});T(x,.63,3.63,0,1.55,.12,12.1);for(let E=0;E<24;E++)T(E%2?m:x,.64,3.54,-5.75+E*.5,1.48,.1,.47);T(g,.45,4.75,-5.6,.9,.07,.07),T(x,.82,4.2,-5.6,.1,1.12,.88);for(let E of[-1,1]){let C=t("\u8D85\u5E02",-83.6+E*.46,4.2,112.18,.77,.37,{color:"#fff1c8"});C.rotation.y=E*Math.PI/2}for(let E of[-1,1])T(g,-.3,2.15,E*8,.1,2.15,2.5),T(S,-.24,2.15,E*8,.035,1.97,2.32),T(g,-.2,2.15,E*8,.07,1.98,.065);for(let E=0;E<3;E++)i(g,-78+20/2+.04,2.25,119-3.5+E*3.5,.06,1.3,2.5);i(v,-82,5,119,4,.4,3);for(let E=0;E<9;E++)i(g,-78-5.5+E*.4,5.23,119,.07,.05,2.6);a.push({kind:"object",name:"\u70DB\u5149\u8D85\u5E02\u7684\u6A71\u7A97",x:-78,z:113-1.8,radius:3.4,title:"\u4E0B\u8BFE\u4EE5\u540E\u7684\u5C0F\u5356\u90E8",type:"\u6821\u56ED\u8D85\u5E02 \xB7 \u6A71\u7A97",body:`\u4E00\u74F6\u6C34\uFF0C\u4E00\u5305\u997C\u5E72\uFF0C\u987A\u624B\u7ED9\u5BA4\u53CB\u5E26\u70B9\u4E1C\u897F\u3002

\u4EE5\u524D\u53EA\u662F\u4E0B\u8BFE\u8DEF\u8FC7\u7684\u51E0\u5206\u949F\uFF0C\u5982\u4ECA\u56DE\u60F3\u8D77\u6765\uFF0C\u8FDE\u7AD9\u5728\u95E8\u53E3\u7B49\u4EBA\u7684\u7247\u523B\u4E5F\u5F88\u6E05\u695A\u3002

\u3014\u6000\u65E7\u6587\u5B57\u4E3A\u573A\u666F\u521B\u4F5C\uFF1B\u8D85\u5E02\u70B9\u4F4D\u4F9D\u636E\u5386\u53F2\u6821\u56ED\u56FE\uFF0C\u5165\u53E3\u671D\u5317\u4F9D\u636E\u6821\u53CB\u7EA0\u6B63\uFF0C\u5E97\u9762\u7EC6\u8282\u4E3A\u8865\u5EFA\u3002\u3015`})}function Z0({box:i,inst:e,mesh:t,solid:n}){let r=$(2645585,{roughness:.66,metalness:.35}),s=$(9672844),o=$(5009765,{roughness:.7,metalness:.3,transparent:!0,side:rt,depthWrite:!1});r.userData.castShadow=!1,o.userData.castShadow=!1,o.onBeforeCompile=g=>{g.vertexShader=`varying vec2 fenceMeters;
`+g.vertexShader,g.vertexShader=g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
fenceMeters=uv;`),g.fragmentShader=`varying vec2 fenceMeters;
float wireIntegral(float x,float duty){return floor(x)*duty+min(fract(x),duty);}
float wireCoverage(float q){float duty=.046;float w=max(fwidth(q),.001);float p=q+duty*.5;return clamp((wireIntegral(p+w*.5,duty)-wireIntegral(p-w*.5,duty))/w,0.,1.);}
`+g.fragmentShader,g.fragmentShader=g.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
float a=wireCoverage((fenceMeters.x+fenceMeters.y)/.09);
float b=wireCoverage((fenceMeters.x-fenceMeters.y)/.09);
diffuseColor.a*=1.-(1.-a)*(1.-b);`)},o.customProgramCacheKey=()=>"integrated-chain-link-v1";let a=new Mt(1,1,1,10),l=[],c=[],u=[],h=new Set,d=0,f=0;function p(g,S,_,v,T=4.1,b=.16,w=!0){let A=_-g,y=v-S,M=Math.hypot(A,y);if(M<.03)return;let E=l.length/3;l.push(g,b,S,_,b,v,_,T,v,g,T,S),c.push(0,b,M,b,M,T,0,T),u.push(E,E+1,E+2,E,E+2,E+3),d++;let C=-Math.atan2(y,A),I=(g+_)/2,U=(S+v)/2;for(let O of[b,T*.5,T])i(r,I,O,U,M,.045,.045,C);let L=Math.ceil(M/2.8);for(let O=0;O<=L;O++){let k=g+A*O/L,V=S+y*O/L,z=`${k.toFixed(3)},${V.toFixed(3)},${T}`;h.has(z)||(h.add(z),e(a,r,k,T/2,V,.048,T+.08,.048),i(s,k,.075,V,.24,.15,.24),i(r,k,T+.05,V,.12,.055,.12))}if(w)if(Math.abs(A)<.001)n(I,U,.16,M,T);else if(Math.abs(y)<.001)n(I,U,M,.16,T);else throw new Error("Fence collision requires an orthogonal run")}function x(g,S,_,v,T=4.1,b=[]){let w=Math.hypot(_-g,v-S),A=(_-g)/w,y=(v-S)/w,M=0;for(let[E,C]of[...b].sort((I,U)=>I[0]-U[0])){let I=E-C/2,U=E+C/2;if(I<M||U>w)throw new Error("Invalid fence opening");p(g+A*M,S+y*M,g+A*I,S+y*I,T);for(let L of[I,U]){let O=g+A*L,k=S+y*L;p(O,k,O-y*C*.46,k+A*C*.46,2.25)}M=U,f++}p(g+A*M,S+y*M,_,v,T)}function m(){let g=new Oe;g.setAttribute("position",new Ie(l,3)),g.setAttribute("uv",new Ie(c,2)),g.setIndex(u),g.computeVertexNormals(),g.computeBoundingSphere();let S=t(g,o,0,0,0);return S.castShadow=!1,S.name="Sports perimeter chain-link \u2014 filtered in screen space",{panels:d,gates:f}}return{run:x,finish:m}}function K0({box:i,inst:e,mesh:t,label:n,solid:r,surfaces:s}){let o=734,a=()=>(o=Math.imul(o,1664525)+1013904223>>>0,o/4294967296),l=ft(512,512,(q,N,H)=>{q.fillStyle="#e1e1e1",q.fillRect(0,0,N,H);for(let G=0;G<65e3;G++){let oe=110+a()*140;q.fillStyle=`rgba(${oe},${oe},${oe},.55)`,q.fillRect(a()*N,a()*H,1+a()*2,1+a()*2)}});l.wrapS=l.wrapT=Ft,l.repeat.set(24,55),l.anisotropy=8;let c=$(2455217,{map:l,roughness:.96}),u=$(3235206),h=$(3635621),d=$(5610944),f=$(11383984),p=$(14738900),x=$(8227977,{metalness:.5,roughness:.45}),m=$(3492684),g=$(11032135);for(let q of[p,x])q.userData.castShadow=!1;let S=new Mt(1,1,1,8),_=new ln(1,10,7);function v(q,N,H=.045,G=x){let oe=new R(...q),se=new R(...N),pe=se.sub(oe),Ee=t(S,G,...oe.addScaledVector(pe,.5).toArray());return Ee.quaternion.setFromUnitVectors(new R(0,1,0),pe.clone().normalize()),Ee.scale.set(H,pe.length(),H),Ee.castShadow=!1,Ee}let T=ft(128,128,q=>{q.strokeStyle="#d1d8cf",q.lineWidth=3,q.strokeRect(0,0,128,128)});T.wrapS=T.wrapT=Ft,T.repeat.set(64,22),T.anisotropy=8;let b=$(13095366,{map:T,transparent:!0,alphaTest:.12,side:rt,depthWrite:!1});b.userData.castShadow=!1;let w=-105,A=-118,y=39,M=30.8,E=new an;E.absarc(0,-y,M,Math.PI,0,!1),E.lineTo(M,y),E.absarc(0,y,M,0,Math.PI,!1),E.closePath();let C=t(new ba(E,96),c,w,.14,A);C.rotation.x=-Math.PI/2,s.push({x:w,z:A,w:60,d:134,y:.16});let I=$(6000201,{map:l,roughness:.96}),U=$(4157512,{map:l,roughness:.96});for(let q=0;q<17;q++)i(q%2?I:U,w,.17,A-46.4+5.8*q,42,.06,5.8);function L(q,N=.07,H=.217,G=p){let oe=[],se=[];for(let F=0;F<q.length;F++){let ee=q[Math.max(0,F-1)],ne=q[Math.min(q.length-1,F+1)],K=ne[0]-ee[0],Q=ne[1]-ee[1],fe=Math.hypot(K,Q)||1;oe.push(q[F][0]-Q/fe*N/2,H,q[F][1]+K/fe*N/2,q[F][0]+Q/fe*N/2,H,q[F][1]-K/fe*N/2),F&&se.push(F*2-2,F*2,F*2-1,F*2-1,F*2,F*2+1)}let pe=new Oe;pe.setAttribute("position",new Ie(oe,3)),pe.setIndex(se),pe.computeVertexNormals();let Ee=t(pe,G,0,0,0);return Ee.castShadow=!1,Ee}for(let q=0;q<=6;q++){let N=24.1+q*1.05,H=[];for(let G=0;G<=90;G++){let oe=Math.PI+G*Math.PI/90;H.push([w+Math.cos(oe)*N,A-y+Math.sin(oe)*N])}for(let G=0;G<=90;G++){let oe=G*Math.PI/90;H.push([w+Math.cos(oe)*N,A+y+Math.sin(oe)*N])}H.push(H[0]),L(H,.075,.225)}for(let q of[-21,21])i(p,w+q,.224,A,.09,.015,98);for(let q of[-49,0,49])i(p,w,.224,A+q,42,.015,.09);let O=t(new Mr(8,8.1,72),p,w,.226,A);O.rotation.x=-Math.PI/2;for(let q of[-1,1]){let N=A+q*49;for(let se of[30,14]){let pe=se===30?14:5;for(let Ee of[-se/2,se/2])i(p,w+Ee,.225,N-q*pe/2,.09,.015,pe);i(p,w,.225,N-q*pe,se,.015,.09)}let H=t(new fa(.13,12),p,w,.227,N-q*10);H.rotation.x=-Math.PI/2;let G=N+q*.22;for(let se of[-3.65,3.65])e(S,p,w+se,1.42,G,.06,2.55,.06),v([w+se,2.7,G],[w+se,.2,G+q*1.7],.04,p);i(p,w,2.7,G,7.42,.11,.11),i(p,w,.25,G+q*1.7,7.4,.06,.06);let oe=t(new Yt(7.3,2.45),b,w,1.42,G+q*1.2);oe.rotation.x=q*.35,oe.castShadow=!1}i(p,w+27.3,.232,A+26,6.7,.015,.12);for(let q=0;q<6;q++){let N=n(String(q+1),w+24.6+q*1.05,.24,A+28,.68,1.1,{font:"Arial",color:"#e9eedc"});N.rotation.x=-Math.PI/2}for(let q of[-1,1])for(let N=0;N<6;N++){let H=-143-N*.64,G=A+q*32,oe=.24+N*.35;i(N%2?h:d,H,oe/2,G,.67,oe,40),s.push({x:H,z:G,w:.67,d:40,y:oe})}i(f,-146,.38,A,6,.76,20),s.push({x:-146,z:A,w:6,d:20,y:.76}),i(u,-148.8,2.5,A,.2,3.5,19.5),r(-148.8,A,.28,20,4.4);let k=n("\u5B8F\u5FB7\u535A\u5B66    \u5316\u80B2\u5929\u5DE5",-148.65,2.55,A,14,.86,{font:'"Kaiti SC",serif',color:"#e4e8d5"});k.rotation.y=Math.PI/2,i(u,-146,4.65,A,6.2,.12,22);for(let q of[A-10,A+10])i(x,-148.3,2.5,q,.16,5,.16),r(-148.3,q,.3,.3,5),v([-143,4.5,q],[-149,4.5,q]);for(let q=A-10;q<A+10;q+=2)v([-143,4.35,q],[-143,4.9,q+1],.036),v([-143,4.9,q+1],[-143,4.35,q+2],.036);let V=n("\u5317\u4EAC\u5316\u5DE5\u5927\u5B66\u8FD0\u52A8\u573A",-145,5.2,A,17,1,{font:'"Kaiti SC",serif',color:"#a9393f"});V.rotation.y=Math.PI/2;for(let[q,N]of[[-136,-175],[-136,-61],[-74,-175],[-74,-61]]){e(S,x,q,7,N,.11,14,.11),r(q,N,.35,.35,14),i(x,q,14,N,1.8,.1,.2);for(let H=0;H<3;H++)i(m,q+(H-1)*.55,13.7,N,.44,.45,.18),i(p,q+(H-1)*.55,13.7,N+.11,.36,.34,.02)}let z=Z0({box:i,inst:e,mesh:t,solid:r});z.run(-137.3,-189,-72.8,-189,4.2,[[32.3,5]]),z.run(-72.8,-189,-72.8,-46.5,4.2,[[53,3.6],[124,3.6]]),z.run(-72.8,-46.5,-137.3,-46.5,4.2,[[32.3,6]]),z.run(-137.3,-46.5,-137.3,-189,3.2,[[71.5,5]]);let W=$(5539710,{map:l}),Z=$(10445139,{map:l}),ue=$(8559254,{transparent:!0,opacity:.42,metalness:.2});for(let[q,N,H,G]of[[84.5,2,60,63],[-77.25,13,41.5,36],[-115.1,14.1,30.2,39.8]])i(Z,q,.045,N,H,.09,G),s.push({x:q,z:N,w:H,d:G,y:.09});let le=$(8752774,{roughness:.95});for(let[q,N,H,G]of[[74,43,3.6,19],[-115,40,3.2,12],[-77.5,38.5,3.2,15],[-63.1,-65,21.8,3.6]])i(le,q,.055,N,H,.11,G),s.push({x:q,z:N,w:H,d:G,y:.11});for(let q of[64,84,104])for(let N of[-14,18]){i(Z,q,.11,N,18,.14,28),i(W,q,.19,N,14,.025,24),s.push({x:q,z:N,w:18,d:28,y:.21});for(let G of[-11.8,0,11.8])i(p,q,.224,N+G,13.8,.014,.08);for(let G of[-6.8,6.8])i(p,q+G,.224,N,.08,.014,24);let H=t(new Mr(1.74,1.82,48),p,q,.231,N);H.rotation.x=-Math.PI/2;for(let G of[-1,1]){let oe=N+G*11.8;for(let F of[-2.35,2.35])i(p,q+F,.226,oe-G*2.8,.08,.014,5.6);i(p,q,.226,oe-G*5.6,4.7,.014,.08);let se=[];for(let F=0;F<=64;F++){let ee=F*Math.PI/64;se.push([q+Math.cos(ee)*5.8,oe-G*(1.2+Math.sin(ee)*5.8)])}L(se,.075,.23);let pe=N+G*12.8;i(m,q,1.5,pe,.35,3,.42),r(q,pe,.55,.6,3.5),v([q,2.5,pe],[q,3.2,oe-G*.65],.08,m),i(p,q,3.25,oe-G*.65,1.88,1.15,.1),i(ue,q,3.25,oe-G*.72,1.72,.97,.025);for(let F of[-.3,.3])i(g,q+F,3.06,oe-G*.78,.04,.41,.025);i(g,q,3.26,oe-G*.78,.64,.04,.025);let Ee=t(new er(.23,.018,8,24),g,q,2.98,oe-G*1.05);Ee.rotation.x=Math.PI/2;for(let F=0;F<10;F++){let ee=F*6.283/10;v([q+Math.cos(ee)*.23,2.96,oe-G*1.05+Math.sin(ee)*.23],[q+Math.cos(ee)*.13,2.57,oe-G*1.05+Math.sin(ee)*.13],.009,p)}}}for(let q of[-87,-67]){i(W,q,.1,12,19,.14,31),s.push({x:q,z:12,w:19,d:31,y:.18});for(let H of[-8,-6,6,8])i(p,q+H,.19,12,.08,.01,28);for(let H of[-14,-6,6,14])i(p,q,.19,12+H,16,.01,.08);i(p,q,.19,12,.08,.01,12);let N=t(new Yt(18,.92),b,q,.74,12);N.castShadow=!1,i(p,q,1.22,12,18,.04,.045);for(let H of[-9,9])e(S,x,q+H,.72,12,.045,1.44,.045),r(q+H,12,.2,.2,1.5)}z.run(54.5,-29.5,114.5,-29.5,4.1,[[29.5,3.2]]),z.run(114.5,-29.5,114.5,33.5,4.1,[[31.5,3.2]]),z.run(114.5,33.5,54.5,33.5,4.1,[[40.5,3.6]]),z.run(54.5,33.5,54.5,-29.5,4.1,[[31.5,3.6]]),z.run(-98,-5,-56.5,-5,4.1),z.run(-56.5,-5,-56.5,31,4.1,[[20,3.2]]),z.run(-56.5,31,-98,31,4.1,[[21,3.2]]),z.run(-98,31,-98,-5,4.1);let be=$(5405068,{map:l,roughness:.93});for(let q of[-125,-115,-105])for(let N of[4,24]){i(Z,q,.09,N,8.8,.12,17),i(be,q,.16,N,6.9,.02,14.4),s.push({x:q,z:N,w:8.8,d:17,y:.18});for(let se of[-3.05,-2.59,2.59,3.05])i(p,q+se,.185,N,.045,.01,13.4);for(let se of[-6.7,-5.94,-1.98,1.98,5.94,6.7])i(p,q,.185,N+se,6.1,.01,.045);for(let se of[-1,1])i(p,q,.185,N+se*4.34,.045,.01,4.72);let H=T.clone();H.repeat.set(54,7),H.needsUpdate=!0;let G=b.clone();G.map=H;let oe=t(new Yt(6.35,.72),G,q,1.22,N);oe.castShadow=!1,i(p,q,1.59,N,6.4,.045,.035);for(let se of[-1,1])e(S,m,q+se*3.22,.87,N,.028,1.55,.028),r(q+se*3.22,N,.12,.12,1.65)}z.run(-130.2,-5.8,-100,-5.8,3.6),z.run(-100,-5.8,-100,34,3.6,[[19.8,3.2]]),z.run(-100,34,-130.2,34,3.6,[[15,3.2]]),z.run(-130.2,34,-130.2,-5.8,3.6,[[20,3.2]]),z.finish()}function J0({inst:i,solid:e,roads:t,surfaces:n}){let r=407,s=()=>(r=r*1664525+1013904223>>>0)/4294967296,o=ft(128,256,(_,v,T)=>{let b=_.createLinearGradient(0,0,v,0);b.addColorStop(0,"#385128"),b.addColorStop(.43,"#799048"),b.addColorStop(.5,"#92a45c"),b.addColorStop(.57,"#617b37"),b.addColorStop(1,"#344e26"),_.fillStyle=b,_.fillRect(0,0,v,T);for(let A=0;A<36;A++){let y=s()*v;_.strokeStyle=`rgba(188,201,125,${.035+s()*.09})`,_.lineWidth=.4+s(),_.beginPath(),_.moveTo(y,0),_.bezierCurveTo(y+4,T*.3,y-3,T*.7,y,T),_.stroke()}let w=_.createLinearGradient(0,0,0,T);w.addColorStop(0,"#0a241e88"),w.addColorStop(.3,"#182e0900"),w.addColorStop(1,"#bac57b22"),_.fillStyle=w,_.fillRect(0,0,v,T)});o.anisotropy=4;let a=$(16777215,{map:o,side:rt,vertexColors:!0,roughness:.61}),l=[],c=[],u=[],h=[];for(let _=0;_<22;_++){let v=_>=15,T=_>=9&&_<15,b=_*2.39996+s()*.28,w=v?.15+s()*.15:T?.4+s()*.15:.62+s()*.18,A=v?.83+s()*.19:T?.62+s()*.16:.4+s()*.15,y=v?.04:T?.13:.24,M=v?.045+s()*.013:.064+s()*.02,E=new Me().setHSL(.235+s()*.025,.15+s()*.08,.7+s()*.16),C=l.length/3,I=(s()-.5)*.75,U=.045+s()*.045;for(let L=0;L<=8;L++){let O=L/8,k=b+I*O,V=U+w*Math.pow(O,1.22),z=.55+A*Math.sin(O*Math.PI*.62)-y*Math.pow(O,3),W=M*Math.pow(Math.sin(Math.PI*(O*.96+.04)),.62)*(1-.62*Math.pow(O,5));for(let Z=-1;Z<=1;Z++){let ue=Z===0?0:.022*Math.sin(Math.PI*O);l.push(Math.cos(k)*V-Math.sin(k)*Z*W,z+ue,Math.sin(k)*V+Math.cos(k)*Z*W),c.push((Z+1)/2,O),u.push(E.r,E.g,E.b)}if(L<8)for(let Z=0;Z<2;Z++){let ue=C+L*3+Z;h.push(ue,ue+3,ue+1,ue+1,ue+3,ue+4)}}}let d=new Oe;d.setAttribute("position",new Ie(l,3)),d.setAttribute("uv",new Ie(c,2)),d.setAttribute("color",new Ie(u,3)),d.setIndex(h),d.computeVertexNormals();let f=new Ta([[0,0],[.37,0],[.39,.05],[.49,.55],[.515,.58],[.515,.62],[.458,.62],[.452,.565],[.43,.5]].map(_=>new ce(..._)),20),p=ft(128,128,(_,v,T)=>{_.fillStyle="#aaa89a",_.fillRect(0,0,v,T);for(let b=0;b<1900;b++)_.fillStyle=s()>.5?"#d4d0be18":"#514d4115",_.fillRect(s()*v,s()*T,1,1)}),x=$(13024944,{map:p,roughness:.94}),m=new Mt(.448,.448,.035,20),g=ft(128,128,(_,v,T)=>{_.fillStyle="#302a20",_.fillRect(0,0,v,T);for(let b=0;b<700;b++)_.fillStyle=["#74664a","#4f4430","#1e2118"][b%3],_.fillRect(s()*v,s()*T,1+s()*3,1+s()*2)}),S=$(16777215,{map:g,roughness:1});for(let[_,[v,T]]of[[-71,181],[-80,-69],[102,176],[73,107]].entries()){let b=.035;for(let w of[...t,...n])Math.abs(v-w.x)<=w.w/2&&Math.abs(T-w.z)<=w.d/2&&(b=Math.max(b,w.y||0));i(f,x,v,b,T,1,1,1),i(m,S,v,b+.555,T,1,1,1),i(d,a,v,b,T,1,1+_%2*.08,1,_*1.71),e(v,T,1,1,b+.65)}}function Q0({box:i,inst:e,mesh:t,label:n,solid:r,surfaces:s,roads:o,buildings:a,treePositions:l,bench:c,bike:u,road:h}){let d=$(12828073),f=$(7830898),p=$(5661531,{metalness:.55,roughness:.42}),x=$(7835796,{metalness:.28,roughness:.25}),m=$(3819073),g=$(10056027,{metalness:.72,roughness:.36}),S=$(13948361),_=$(10650486),v=new Mt(1,1,1,12);function T(z,W,Z,ue){i(gi(Z,ue),z,.1,W,Z,.16,ue),s.push({x:z,z:W,w:Z,d:ue,y:.18})}function b(z,W,Z=.03,ue=p){let le=new R(...W).sub(new R(...z)),be=t(v,ue,...new R(...z).addScaledVector(le,.5).toArray());be.quaternion.setFromUnitVectors(new R(0,1,0),le.clone().normalize()),be.scale.set(Z,le.length(),Z),be.castShadow=!1}for(let z of[-1,1]){let W=z*36;i(d,W,2.1,223,43,4.2,5.6),r(W,223,43,5.6,4.5);for(let be=-20;be<=20;be+=2)i(f,W+be,2.1,225.84,.025,4.1,.035);for(let be=.7;be<4.2;be+=.7)i(f,W,be,225.84,42,.025,.035);i(f,W,.2,223,43.4,.4,6),i(m,W,4.33,223,44,.24,6.4);let Z=new an;Z.moveTo(-3.3,0),Z.lineTo(0,1.12),Z.lineTo(3.3,0),Z.closePath();let ue=new Fn(Z,{depth:44,bevelEnabled:!1});ue.rotateY(Math.PI/2),ue.translate(-22,0,0),t(ue,m,W,4.45,223),i(m,W,5.58,223,44.2,.1,.2);let le=z*17.5;i(d,le,1.6,216,3.5,3.2,4),r(le,216,3.5,4,3.5);for(let be of[-1,1]){i(x,le,1.94,216+be*2.05,3.17,1.72,.08);for(let q of[-1.62,-.54,.54,1.62])i(p,le+q,1.93,216+be*2.1,.07,1.83,.1)}i(m,le,3.33,216,4,.2,4.5),i(d,z*13.8,3.1,222,1.2,6.2,1.2),i(f,z*13.8,6.2,222,1.5,.2,1.5),r(z*13.8,222,1.4,1.4,6.5);for(let be=0;be<10;be++){let q=z*(10+be*.28);i(p,q,1,223.5,.035,1.8,.06),b([q,.3,223.5],[q+z*.27,1.5,223.5],.018),b([q,1.5,223.5],[q+z*.27,.3,223.5],.018)}}n("\u5317\u4EAC\u5316\u5DE5\u5927\u5B66",33.5,2.4,225.91,18,1.45,{font:'"STXingkai","Kaiti SC",serif',color:"#514b37"}),n("BEIJING UNIVERSITY OF CHEMICAL TECHNOLOGY",33.5,1.38,225.92,18,.36,{font:"Arial",color:"#6b674f"}),T(0,217,25,12),h(0,244,340,19);for(let z=-160;z<160;z+=9)i(S,z,.14,244,4,.015,.13);for(let z=-130;z<=130;z+=3.5)e(v,p,z,1.04,233,.027,2.08,.027);for(let z of[.52,1.4])i(p,0,z,233,265,.032,.035);T(0,155,97,8),T(0,202,33,8);let w=ft(128,128,z=>{z.fillStyle="#6d7265",z.fillRect(0,0,128,128),z.strokeStyle="#303e35",z.lineWidth=5;for(let W=7;W<128;W+=13)z.beginPath(),z.moveTo(W,0),z.lineTo(W,128),z.stroke()});w.wrapS=w.wrapT=Ft,w.anisotropy=8;let A=$(10726043,{map:w,metalness:.35});for(let z of l){if(Math.abs(z.x)>65||Math.abs(z.z)<135)continue;let{x:W,z:Z}=z;for(let ue of[-.64,.64])i(A,W+ue,.075,Z,.7,.035,1.9);for(let ue of[-.64,.64])i(A,W,.075,Z+ue,.6,.035,.7)}let y=-116.5;i(d,0,.17,y,7.3,.34,3.6),i(f,0,.36,y,6.6,.16,3.1),r(0,y,6.6,3.1,3.8);let M=new an;M.absellipse(0,0,2.65,1.65,0,Math.PI*2,!1);let E=new $i;E.absellipse(0,0,2.25,1.28,0,Math.PI*2,!0),M.holes.push(E);let C=new Fn(M,{depth:.3,curveSegments:64,bevelEnabled:!0,bevelSize:.045,bevelThickness:.045,bevelSegments:2,steps:1});t(C,g,0,2.03,y);let I=new an;I.moveTo(-1.4,-.9),I.lineTo(-1.01,1),I.quadraticCurveTo(-.92,1.15,-.5,1.17),I.lineTo(-.45,1.28),I.lineTo(.45,1.28),I.lineTo(.5,1.17),I.quadraticCurveTo(.92,1.15,1.01,1),I.lineTo(1.4,-.9),I.quadraticCurveTo(.7,-.69,0,-1.02),I.quadraticCurveTo(-.7,-.69,-1.4,-.9),t(new Fn(I,{depth:.35,curveSegments:36,bevelEnabled:!0,bevelSize:.04,bevelThickness:.045,bevelSegments:2,steps:1}),g,0,1.98,y+.06);let U=$(11966327,{metalness:.65,roughness:.38});for(let z of[1.3,1.44,2.64,2.8])i(U,0,z,y+.47,2.15,.045,.045);for(let z of[-.1,.1])i(U,z,2.02,y+.47,.025,1.08,.04);n("\u5B8F\u5FB7  \u535A\u5B66",0,2.26,y+.5,1.85,.31,{font:'"Kaiti SC",serif',color:"#c4a184"}),n("\u5316\u80B2  \u5929\u5DE5",0,1.88,y+.5,1.85,.31,{font:'"Kaiti SC",serif',color:"#c4a184"}),n("1958",0,1.19,y+.49,1.5,.25,{font:"serif",color:"#c2a17b"}),n("\u5317\u4EAC\u5316\u5DE5\u5927\u5B66",0,.69,y+.46,3.1,.43,{font:'"Kaiti SC",serif',color:"#c4a184"});let L="BEIJING UNIVERSITY OF CHEMICAL TECHNOLOGY";for(let z=0;z<L.length;z++){let W=L,Z=Math.PI*.95-z*Math.PI*.9/(W.length-1),ue=n(W[z]||"",Math.cos(Z)*2.47,2.03+Math.sin(Z)*1.47,y+.37,.16,.17,{font:"serif",color:"#bea186"});ue.rotation.z=Z-Math.PI/2}T(0,-135,37,8);for(let z of[-3.4,0,3.4])e(v,p,z,7,-138,.045,14,.045),r(z,-138,.2,.2,14);function O(z,W,Z=13){T(z,W,Z+1,4);for(let ue of[-Z/2,Z/2])for(let le of[-1.45,1.45])i(p,z+ue,1.3,W+le,.075,2.6,.075),r(z+ue,W+le,.16,.16,2.7);i(p,z,2.66,W,Z+.35,.13,3.7),i(x,z,2.73,W,Z+.18,.035,3.5);for(let ue=-Z/2;ue<=Z/2;ue+=1.1)i(p,z+ue,2.74,W,.045,.065,3.6),u(z+ue,W,Math.PI/2)}O(-105,149,13),O(98,183,12),O(-65,-69,11);for(let[z,W,Z,ue]of[[-43,166,"\u4E3B\u6559\u697C \u2192","\u2190 \u5B66\u751F\u5BBF\u820D"],[43,62,"\u56FE\u4E66\u9986 \u2190","\u2192 \u6559\u5B66\u79D1\u7814\u533A"],[-43,-55,"\u8FD0\u52A8\u573A \u2190","\u2190 \u5B66\u751F\u98DF\u5802"],[43,-126,"\u79D1\u6280\u5927\u53A6 \u2190","\u5357\u95E8 \u2193"]]){i(p,z,1.45,W,.09,2.9,.09),r(z,W,.17,.17,3);for(let[le,be]of[Z,ue].entries())i(p,z,2.44-le*.45,W,2.7,.38,.07),n(be,z,2.44-le*.45,W+.05,2.4,.25,{font:'"Noto Sans SC",sans-serif',color:"#e4e0cd"})}J0({inst:e,solid:r,roads:o,surfaces:s});function k(z,W,Z,ue){let le=[{x:z,z:W,w:Z,d:ue}];for(let be of o.filter(q=>q.type==="asphalt"))le=le.flatMap(q=>Cu(q,be));for(let be of le)i(gi(be.w,be.d),be.x,.065,be.z,be.w,.11,be.d),s.push({...be,y:.12,walkway:!0})}function V(z,W,Z,ue){let le=Math.min(z,Z)-1.2,be=Math.max(z,Z)+1.2,q=Math.min(W,ue)-1.2,N=Math.max(W,ue)+1.2;return!a.some(H=>be>H.x-H.w/2&&le<H.x+H.w/2&&N>H.z-H.d/2&&q<H.z+H.d/2)}for(let z of a){if(["\u4E3B\u6559\u697C","\u4E3B\u697C\u897F\u7FFC","\u4E3B\u697C\u4E1C\u7FFC","\u9038\u592B\u56FE\u4E66\u9986","\u79D1\u6280\u5927\u53A6","\u70DB\u5149\u8D85\u5E02","\u884C\u653F\u697C","\u884C\u653F\u697C\u5357\u7FFC","\u65E0\u673A\u697C","\u65E0\u673A\u697C\u5357\u7FFC"].includes(z.name))continue;let W=z.x,Z=z.z+z.d/2+4.3;k(W,Z,Math.min(12,z.w*.6),4.1);let ue=o.filter(le=>le.type==="asphalt").map(le=>le.w<le.d?{x:le.x,z:We.clamp(Z,le.z-le.d/2,le.z+le.d/2)}:{x:We.clamp(W,le.x-le.w/2,le.x+le.w/2),z:le.z}).filter(le=>Math.hypot(le.x-W,le.z-Z)<60&&V(W,Z,le.x,le.z)).sort((le,be)=>Math.hypot(le.x-W,le.z-Z)-Math.hypot(be.x-W,be.z-Z));if(ue.length){let le=ue[0];k((W+le.x)/2,(Z+le.z)/2,Math.max(2.4,Math.abs(le.x-W)),Math.max(2.4,Math.abs(le.z-Z)))}}for(let z of[-47,46])for(let W of[110,199,-42,-184])i(A,z,.085,W,.5,.025,1.1)}function $0({box:i,inst:e,mesh:t,label:n,solid:r,surfaces:s}){let o=718,a=()=>(o=Math.imul(o,1664525)+1013904223>>>0,o/4294967296),l=ft(256,256,(w,A,y)=>{w.fillStyle="#aeb4b1",w.fillRect(0,0,A,y);for(let M=0;M<1e4;M++){let E=85+a()*155;w.fillStyle=`rgb(${E},${E+2},${E})`;let C=1+a()*4;w.fillRect(a()*A,a()*y,C,C*.7)}});l.wrapS=l.wrapT=Ft,l.anisotropy=8;let c=$(14803673,{map:l,bumpMap:l,bumpScale:.065,roughness:.96}),u=$(5328195),h=$(7558472),d=$(15123594,{emissive:14726250,emissiveIntensity:.6});for(let w of[-1,1]){i(h,w*21.15,.1,64,2.7,.14,10.4);for(let A=0;A<5;A++){let y=w*(20.3+A%2*.14),M=60.1+A*1.95,E=[1.76,1.86,1.71,1.91,1.82][A],C=new on(.85,E,1.8,2,6,6),I=C.attributes.position;for(let L=0;L<I.count;L++){let O=I.getX(L),k=I.getY(L),V=I.getZ(L);I.setXYZ(L,O*(1-.13*(k/E+.5))+(a()-.5)*.018,k,V*(1-.1*(k/E+.5)))}C.computeVertexNormals(),t(C,c,y,E/2+.15,M),r(y,M,.9,1.85,E+.15);let U=y+w*.67;if(i(u,U,.13,M,.38,.1,.4),i(d,U,.19,M,.18,.04,.2),A===4){let L=n("60",y+w*.445,1.26,M,1.25,.94,{font:"Arial,sans-serif",color:"#ede8d5"});L.rotation.y=w*Math.PI/2;let O=n("1958 \xB7 2018",y+w*.45,.61,M,1.35,.17,{font:"Arial,sans-serif",color:"#d8d5c7"});O.rotation.y=w*Math.PI/2}}}let f=-31,p=26,x=2.7,m=$(13948100,{metalness:.36,roughness:.42}),g=$(9986877),S=$(11974309,{side:rt}),_=[$(9713728),$(7823480),$(4356762),m];function v(w,A,y=m){return t(new Sr(new ui(w.map(M=>new R(...M))),18,A,6,!1),y,f,0,p)}let T=t(new Mt(x,x,.18,6),g,f,.14,p);T.rotation.y=0,s.push({x:f,z:p,w:4.5,d:4.5,y:.23});for(let w=0;w<6;w++){let A=w*Math.PI/3+Math.PI/6,y=Math.cos(A),M=Math.sin(A);v([[y*(x-.25),.23,M*(x-.25)],[y*x,.6,M*x],[y*x,2.23,M*x],[y*(x-.25),2.6,M*(x-.25)],[y*1.65,3.45,M*1.65]],.095),r(f+y*x,p+M*x,.22,.22,2.6);let E=(w+1)*Math.PI/3+Math.PI/6;if(w!==5)for(let C=0;C<4;C++)v([[y*x,.67+C*.17,M*x],[Math.cos(E)*x,.67+C*.17,Math.sin(E)*x]],.045,_[C]);for(let C=0;C<5;C++){let I=x-C*.22,U=2.45+C*.2;v([[y*I,U,M*I],[Math.cos(E)*I,U,Math.sin(E)*I]],.033)}}let b=t(new pa(1.66,.12,6),S,f,3.52,p);b.rotation.y=0;for(let w=0;w<5;w++){let A=w*Math.PI/3+Math.PI/6,y=(w+1)*Math.PI/3+Math.PI/6,M=x-.36,E=f+Math.cos(A)*M,C=p+Math.sin(A)*M,I=f+Math.cos(y)*M,U=p+Math.sin(y)*M,L=(E+I)/2,O=(C+U)/2,k=Math.hypot(I-E,U-C),V=-Math.atan2(U-C,I-E);i(g,L,.56,O,k,.12,.48,V),i(g,L,.38,O,k,.26,.12,V);for(let z=0;z<8;z++){let W=(z+.5)/8;r(E+(I-E)*W,C+(U-C)*W,Math.abs(I-E)/8+.32,Math.abs(U-C)/8+.32,.63)}}}function ex(i){let{box:e,inst:t,mesh:n,label:r,solid:s,surfaces:o,interactables:a,bench:l}=i,c=$(11974058,{roughness:.82}),u=$(6777959),h=$(6575171),d=$(12961991,{metalness:1,roughness:.21,envMapIntensity:1.7}),f=fs("grass",10);f.color.setRGB(1,1.5,.82);let p=1.12,x=53;function m(N=0){return[[-21-N,36],[21+N,36],[21+N,67+N],[14+N,74+N],[-14-N,74+N],[-21-N,67+N]]}function g(N,H,G,oe,se=null){let pe=new an(N.map(([K,Q])=>new ce(K,-Q)));se&&pe.holes.push(new $i(se.map(([K,Q])=>new ce(K,-Q))));let Ee=new Fn(pe,{depth:G,bevelEnabled:!1});Ee.rotateX(-Math.PI/2);let F=Ee.attributes.uv;for(let K=0;K<F.count;K++)F.setXY(K,F.getX(K)/42,F.getY(K)/38);n(Ee,oe,0,H-G,0);let ee=N.map(K=>K[0]),ne=N.map(K=>K[1]);o.push({x:(Math.min(...ee)+Math.max(...ee))/2,z:(Math.min(...ne)+Math.max(...ne))/2,w:Math.max(...ee)-Math.min(...ee),d:Math.max(...ne)-Math.min(...ne),y:H,polygon:N})}g(m(),p-.05,p-.08,c),g(m(-.06),p,.05,f);let S=$(15124887,{emissive:15118179,emissiveIntensity:.42,roughness:1});for(let N=7;N>=0;N--){let H=(N+1)*.48,G=p-N*.14,oe=m(H);g(oe,G,G,c,m(-.06));let se=oe.slice(2);for(let pe=0;pe<se.length-1;pe++){let[Ee,F]=se[pe],[ee,ne]=se[pe+1],K=Math.hypot(ee-Ee,ne-F),Q=-Math.atan2(ne-F,ee-Ee);e(u,(Ee+ee)/2,G-.018,(F+ne)/2,K,.035,.15,Q),e(S,(Ee+ee)/2,G-.052,(F+ne)/2+.04,K,.022,.035,Q)}}e(u,0,p+.007,74.36,27,.013,.5);for(let N=-13;N<13;N+=1.18)e(c,N,p+.021,74.36,1.06,.018,.4);for(let N of[-1,1])for(let H=0;H<8;H++){let G=.14+H*.14,oe=N*(25-H*.5);e(c,oe,G/2,57,.52,G,5),o.push({x:oe,z:57,w:.52,d:5,y:G})}e(d,0,p+.1,x,1.45,.2,1.22),s(0,x,3.6,2.1,4.1);function _(N,H,G=48){return n(new Sr(new ui(N.map(oe=>new R(...oe))),G,H,10,!1),d,0,p,x)}for(let N of[-1,1]){let H=N===1?1:.86,G=N===1?-.1:.13,oe=[[N*.24,.05,G],[N*.36,.5,G],[N*.77,1.13,G],[N*1.2,1.82,G],[N*1.4,2.47,G]],se=new ui(oe.map(([K,Q,fe])=>new R(K,Q*H,fe))),pe=[],Ee=[],F=32,ee=20;for(let K=0;K<=F;K++){let Q=K/F,fe=se.getPoint(Q),de=se.getTangent(Q),ge=new R(N*.85,0,1);ge.addScaledVector(de,-ge.dot(de)).normalize();let Ke=new R().crossVectors(de,ge).normalize(),Qe=.34+.24*Math.sin(Q*Math.PI*.75),B=.22-.08*Q;for(let P=0;P<ee;P++){let J=P*Math.PI*2/ee,ie=fe.clone().addScaledVector(Ke,Math.cos(J)*B).addScaledVector(ge,Math.sin(J)*Qe);pe.push(ie.x,ie.y,ie.z)}}for(let K=0;K<F;K++)for(let Q=0;Q<ee;Q++){let fe=K*ee+Q,de=K*ee+(Q+1)%ee,ge=fe+ee,Ke=de+ee;Ee.push(fe,de,ge,de,Ke,ge)}for(let K=1;K<ee-1;K++){Ee.push(0,K+1,K);let Q=F*ee;Ee.push(Q,Q+K,Q+K+1)}let ne=new Oe;ne.setAttribute("position",new Ie(pe,3)),ne.setIndex(Ee),ne.computeVertexNormals(),n(ne,d,0,p,x);for(let K=0;K<4;K++){let Q=(K-1.5)*.23,fe=G+Q*.77,de=N*(1.4+Q*.65),ge=(2.88+[0,.13,.08,-.05][K])*H;_([[de-.04*N,2.28*H,fe],[de+.04*N,2.55*H,fe],[de+.03*N,ge-.08,fe],[de-.04*N,ge,fe]],.1,22),n(new ln(.092,12,8),d,de-.04*N,p+ge,x+fe)}_([[N*.69,1.1*H,G+.28],[N*.69,1.58*H,G+.44],[N*.47,1.93*H,G+.47],[N*.35,2.02*H,G+.46]],.14,24)}let v=new ln(.205,20,14);for(let N=0;N<3;N++){let H=[],G=1.18+N*.43,oe=7.75-N*.61;for(let pe=0;pe<=70;pe++){let Ee=pe/70,F=Ee*Math.PI*2.3+N*Math.PI*2/3,ee=(.91-.46*Ee)*(1+.16*Math.sin(Ee*Math.PI));H.push([Math.cos(F)*ee+.14*Ee,G+(oe-G)*Ee,Math.sin(F)*ee*.65])}_(H,.037,92);let se=new ui(H.map(pe=>new R(...pe)));for(let pe=0;pe<6;pe++){let Ee=se.getPoint(pe/5);t(v,d,Ee.x,p+Ee.y,x+Ee.z,1,1,1)}}e(u,3.15,p+.25,56,2.7,.5,.6),r("\u6BCD\u6821\u4E4B\u5149",3.15,p+.27,56.31,2.45,.42,{font:'"Kaiti SC",serif',color:"#c3b89d"}),e($(9514550),-10,p+.13,70.2,7.9,.26,.55),r("I",-13,p+.83,70.5,.55,1.3,{font:"Arial,sans-serif",color:"#eee9dc",size:88}),r("\u2665",-11.9,p+.83,70.5,1.55,1.3,{font:"Arial,sans-serif",color:"#a32935",size:88}),r("BUCT",-8.9,p+.83,70.5,4.6,1.3,{font:"Arial,sans-serif",color:"#eee9dc",size:88}),r("\u5317\u4EAC\u5316\u5DE5\u5927\u5B66\u5EFA\u682160\u5468\u5E74",-10,p+.13,70.49,6.3,.18,{font:"sans-serif",color:"#e6e1d5"}),$0(i);let T=$(11711916),b=$(5203548),w=$(16777215,{side:rt,vertexColors:!0}),A=$(9537197,{roughness:1}),y=[],M=[],E=[],C=new Me;for(let N=0;N<7;N++){let H=N%2?1:-1,G=H*(.1+N%3*.025),oe=-.29+N*.085,se=y.length/3;C.setHSL(.26+N%3*.015,.34,.21+N%4*.025,yt);for(let[pe,Ee,F]of[[0,0,-.13],[-.065,0,0],[0,.015,.15],[.065,0,0]])y.push(G+pe,Ee,oe+F),E.push(C.r,C.g,C.b);M.push(se,se+1,se+2,se,se+2,se+3)}let I=new Oe;I.setAttribute("position",new Ie(y,3)),I.setAttribute("color",new Ie(E,3)),I.setIndex(M),I.computeVertexNormals();let U=new ln(1,5,3),L=351,O=()=>(L=Math.imul(L,1664525)+1013904223>>>0,L/4294967296),k=33,V=p;e(c,0,V/2,k,44,V,6),o.push({x:0,z:k,w:44,d:6,y:V});for(let N=0;N<8;N++){let H=V-N*.14;for(let oe of[-1,1]){let se=oe*(22.24+N*.48);e(c,se,H/2,k,.5,H,5.2),o.push({x:se,z:k,w:.5,d:5.2,y:H})}let G=29.76-N*.48;e(c,0,H/2,G,5.2,H,.5),o.push({x:0,z:G,w:5.2,d:.5,y:H})}for(let N=0;N<10;N++){let H=-20.25+N*4.5;for(let G of[30.9,35.1])e(T,H,V+1.63,G,.34,3.26,.34),e(c,H,V+.16,G,.46,.32,.46),s(H,G,.46,.46,V+3.5);e(b,H,V+3.24,k,.25,.25,5.1)}for(let N of[30.9,35.1])e(b,0,V+3.3,N,43,.24,.19);for(let N=-21.5;N<=21.5;N+=.56)e(h,N,V+3.48,k,.12,.12,5.2);let z=$(13750471,{roughness:.83});for(let N of[-1,1])e(u,N*12,V+.18,36,18,.36,.64),e(z,N*12,V+.4,36,18.2,.12,.78),s(N*12,36,18.2,.78,V+.46);let W=new Jr(1,2),Z=W.attributes.position,ue=[];for(let N=0;N<Z.count;N++){let H=Z.getX(N),G=Z.getY(N),oe=Z.getZ(N),se=1+.08*Math.sin(H*9+oe*7)+.06*Math.cos(G*11-H*4);Z.setXYZ(N,H*se,G*se,oe*se),C.setHSL(.245+.014*Math.sin(H*8+oe*6),.4,.22+(G+1)*.05,yt),ue.push(C.r,C.g,C.b)}W.setAttribute("color",new Ie(ue,3)),W.computeVertexNormals();let le=[];for(let N=0;N<Z.count;N++){let H=new R(Z.getX(N),Z.getY(N),Z.getZ(N)).normalize();le.push(H.x,H.y,H.z)}W.setAttribute("normal",new Ie(le,3));let be=ft(256,256,(N,H,G)=>{for(let oe=0;oe<640;oe++){let se=O()*H,pe=O()*G,Ee=4+O()*7;N.save(),N.translate(se,pe),N.rotate(O()*6.28);let F=Math.floor(145+O()*90);N.fillStyle=`rgb(${F},${Math.min(230,F+18)},${Math.floor(F*.67)})`,N.beginPath(),N.ellipse(0,0,Ee,Ee*.48,0,0,6.28),N.fill(),N.restore()}});be.anisotropy=8;let q=$(16777215,{map:be,vertexColors:!0,roughness:1,alphaTest:.45,alphaToCoverage:!0,side:rt});for(let N=-21;N<=21;N+=1.45)for(let H of[31,33,35])t(W,q,N+(O()-.5)*.6,V+3.61+O()*.28,H+(O()-.5)*.4,1.2+O()*.35,.32+O()*.22,1.25+O()*.3,O()*6.28);for(let N=-21;N<=21;N+=.95)for(let H of[-1,1]){if(Math.abs(N)<2.7)continue;let G=.28+O()*.7;t(W,q,N,V+3.36-G*.25,33+H*2.35,.65+O()*.3,G*.75,.48+O()*.25,O()*6.28)}for(let N=0;N<1900;N++){let H=-22+O()*44,G=30.1+O()*5.8,oe=V+3.75+O()*.6;if(t(I,w,H,oe,G,1.1+O()*.7,1,1.1+O()*.6,O()*6.28,(O()-.5)*1.1),N%3===0){let se=N%2?1:-1,pe=-20.25+Math.round((H+20.25)/4.5)*4.5;t(I,w,pe+(O()-.5)*1.3,V+1.2+O()*2.3,33+se*2.25,1.4,1.4,1.4,O()*6.28,.9+O()*.6)}if(N%50===0)for(let se=0;se<9;se++){let pe=.072*(1-se/12);t(U,A,H+Math.sin(se*2.4)*pe*.45,V+3.2-se*.043,G+Math.cos(se*2.4)*pe*.45,pe,.041,pe)}}for(let N of[-20.25,-11.25,-2.25,6.75,15.75]){let H=[];for(let G=0;G<28;G++){let oe=G/27;H.push(new R(N+Math.sin(oe*13)*.18,V+.08+oe*3.4,30.9+Math.cos(oe*13)*.18))}n(new Sr(new ui(H),36,.055,6,!1),h,0,0,0)}a.push({kind:"object",name:"\u5B66\u5B50\u4E4B\u6811",x:-14.8,z:68.5,radius:3.8,title:"\u5B66\u5B50\u4E4B\u6811",type:"\u6811\u4E0B\u7684\u5706\u5F62\u77F3\u5EA7",body:"\u6811\u836B\u843D\u5728\u77F3\u5EA7\u4E0A\u3002\u5750\u8FC7\u7684\u4EBA\u4E00\u5C4A\u4E00\u5C4A\u5730\u79BB\u5F00\uFF0C\u6811\u8FD8\u5728\u8FD9\u91CC\u3002"}),a.push({kind:"object",name:"\u6BCD\u6821\u4E4B\u5149",x:0,z:57,radius:4.2,title:"\u6BCD\u6821\u4E4B\u5149",type:"\u7EFF\u56ED\u91CC\u7684\u8001\u76F8\u8BC6",body:`\u53CC\u624B\u6258\u8D77\u5F2F\u66F2\u7684\u5206\u5B50\u94FE\uFF0C\u91D1\u5C5E\u7403\u4E0A\u843D\u7740\u6821\u56ED\u7684\u5929\u5149\u3002

\u4EE5\u524D\u53EA\u662F\u4ECE\u5B83\u8EAB\u8FB9\u8D70\u8FC7\u3002\u4ECA\u5929\u624D\u60F3\u505C\u4E0B\u6765\uFF0C\u597D\u597D\u770B\u4E00\u773C\u3002`}),a.push({kind:"object",name:"\u7D2B\u85E4\u5ECA\u67B6",x:-19,z:33,radius:3.2,title:"\u7D2B\u85E4\u67B6\u4E0B",type:"\u4E00\u5C0F\u6BB5\u9634\u51C9",body:`\u85E4\u8513\u53C8\u722C\u8FC7\u4E86\u4E00\u6839\u6A2A\u6881\u3002

\u5F53\u5E74\u7EA6\u597D\u5728\u8FD9\u91CC\u89C1\u9762\u7684\u4EBA\uFF0C\u5982\u4ECA\u6563\u5728\u4E0D\u540C\u7684\u57CE\u5E02\u3002\u5750\u8FC7\u7684\u5730\u65B9\uFF0C\u8FD8\u5728\u3002`})}var Wu=new URLSearchParams(location.search).has("legacyVegetation"),_s={minX:-151,maxX:151,minZ:-237,maxZ:229},ys=[],vi=[],Pn=[],lr=[],Ms=[],al=[],Rn=[],nx=[],Hf=[],Bi=new Map,sE=new on(1,1,1),Bf=new Mt(1,1,1,9),Mn=new it,ix=Eg(),$n,Ro,rx=[],St={wall:$(12566450),trim:$(14013383),darkTrim:$(7830644),brick:$(10652789),roof:$(7829870),glass:$(10468288,{map:Ka,metalness:.5,roughness:.23}),glassDark:$(8032924,{map:Ka,metalness:.35,roughness:.3}),glassWarm:$(9605500,{metalness:.3,roughness:.3}),metal:$(4741199,{metalness:.55,roughness:.45}),stone:$(10855572),white:$(14342086),wood:$(8677192),red:$(10895666),bark:$(16777215,{map:Ar}),whiteBark:$(12500399,{map:Ar}),hedge:$(4675110),lamp:$(16768672,{emissive:16758613,emissiveIntensity:.55}),black:$(2371114)};function ei(i,e,t,n,r,s,o,a,l=0,c=0){let u=i.uuid+e.uuid,h=Bi.get(u);h||(h={g:i,m:e,items:[]},Bi.set(u,h)),Mn.position.set(t,n,r),Mn.rotation.set(0,l,c),Mn.scale.set(s,o,a),Mn.updateMatrix(),h.items.push(Mn.matrix.clone())}function at(i,e,t,n,r,s,o,a=0){if(!a&&t+s/2>3&&r>=.18&&o>=.18&&Math.abs(e)<155&&Math.abs(n)<240&&Hf.push({x:e,z:n,w:r,d:o,h:t+s/2,bottom:t-s/2}),i.userData.groundSlab&&!a&&t+s/2<.5){ix.add(i,e,t,n,r,s,o);return}ei(sE,i,e,t,n,r,s,o,a)}function Co(i,e,t,n,r,s){ei(Bf,i,e,t,n,r,s,r)}function Cn(i,e,t,n,r=10){ys.push({x:i,z:e,w:t,d:n,h:r})}function Oi(i,e,t,n,r){let s=new dt(i,e);return s.position.set(t,n,r),s.castShadow=!0,s.receiveShadow=!0,$n.add(s),s}function Fi(i,e,t,n,r,s,o={}){let a=Ag(i,{size:80,width:Math.max(512,Math.ceil(r/s*128)),height:128,...o}),l=new Ht({map:a,transparent:!0,depthWrite:!1,side:rt,toneMapped:!1}),c=Oi(new Yt(r,s),l,e,t,n);return c.castShadow=!1,c}function Vt(i,e,t,n,r="paver"){let s=r==="asphalt"?fs("asphalt",1,12105902):gi(t,n);if(r==="asphalt"){for(let a of["map","normalMap","roughnessMap"])s[a].repeat.set(t/6,n/6);s.normalScale.set(.22,.22)}let o=r==="asphalt"?.075:.12;at(s,i,o-.0325,e,t,.065,n),Pn.push({x:i,z:e,w:t,d:n,type:r,y:o})}function oE(){for(let i of Pn.filter(e=>e.type==="asphalt"))for(let e of[!0,!1])for(let t of[-1,1]){let n=e?i.x:i.z,r=(e?i.z:i.x)+t*((e?i.d:i.w)/2+.13),s=e?i.w:i.d,o=[[n-s/2,n+s/2]];for(let a of[...Pn,...Rn.filter(l=>l.walkway)]){if(a===i||Math.abs(r-(e?a.z:a.x))>(e?a.d:a.w)/2+.3)continue;let l=(e?a.x:a.z)-(e?a.w:a.d)/2-.26,c=(e?a.x:a.z)+(e?a.w:a.d)/2+.26;o=o.flatMap(([u,h])=>c<=u||l>=h?[[u,h]]:[[u,Math.max(u,l)],[Math.min(h,c),h]].filter(([d,f])=>f-d>.1))}for(let[a,l]of o)at(St.stone,e?(a+l)/2:r,.12,e?r:(a+l)/2,e?l-a:.26,.2,e?.26:l-a)}}function xi(i,e,t,n){Vt(i,e,t,n,"asphalt")}var sx;function sn(i){return sx.building(i)}function aE(){return wg}var qu=new Yt(1,1),Pr=new Ct({map:aE(),alphaTest:.42,side:rt,roughness:1,color:12239232});Pr.onBeforeCompile=i=>{i.uniforms.uTime={value:0},Pr.userData.shader=i,i.vertexShader=`uniform float uTime;
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += sin(uTime*0.75+instanceMatrix[3].x*.3+instanceMatrix[3].z*.22+position.y*2.)*.06;`)};function lE(i,e,t){let n=new R().subVectors(e,i),r=n.length(),s=new it;s.position.copy(i).addScaledVector(n,.5),s.quaternion.setFromUnitVectors(new R(0,1,0),n.normalize()),s.scale.set(t,r,t),s.updateMatrix();let o=Bf.uuid+St.bark.uuid,a=Bi.get(o);a||(a={g:Bf,m:St.bark,items:[]},Bi.set(o,a)),a.items.push(s.matrix.clone())}function An(i,e,t=1){if(Pn.some(s=>Math.abs(i-s.x)<s.w/2+.8&&Math.abs(e-s.z)<s.d/2+.8)||e>-6&&e<35&&i>-131&&i<-56||e>-30&&e<35&&i>54&&i<116)return;let n=(8+Se()*2.5)*t,r=(3.2+Se())*t;if(al.push({x:i,z:e,r:.27*t,size:t,baseY:Math.abs(i)<21&&e>=36&&e<=74?1.12:0}),ys.push({x:i,z:e,w:.6*t,d:.6*t,h:n*.7}),!Wu){let s=Math.abs(i)<65?Math.abs(i)<46&&(e>26&&e<121||e>157&&e<200)?1295:0:1305;for(let o=0;o<s;o++)Se();return}if(Math.abs(i)<65){rx.push({x:i,z:e,size:t}),Math.abs(i)<46&&(e>26&&e<121||e>157&&e<200)&&cE(i,e,t);return}Co(St.bark,i,n*.32,e,.21*t,n*.64),Co(St.whiteBark,i,.7,e,.22*t,1.4);for(let s=0;s<5;s++){let o=s*6.28/5+Se(),a=new R(i+Math.cos(o)*r*.63,n*(.65+Se()*.1),e+Math.sin(o)*r*.63);lE(new R(i,n*.4,e),a,.09*t)}for(let s=0;s<185;s++){let o=Se()*Math.PI*2,a=Se()*2-1,l=Math.sqrt(1-a*a),c=Math.cbrt(Se())*r,u=i+Math.cos(o)*l*c,h=n*.82+a*c*.65,d=e+Math.sin(o)*l*c,f=qu.uuid+Pr.uuid,p=Bi.get(f);p||(p={g:qu,m:Pr,items:[]},Bi.set(f,p)),Mn.position.set(u,h,d),Mn.rotation.set(Se()*Math.PI,Se()*6.28,Se()*6.28);let x=(1.45+Se()*.9)*t;Mn.scale.set(x,x,x),Mn.updateMatrix(),p.items.push(Mn.matrix.clone())}}function cE(i,e,t){let n=Math.abs(i)<21&&e>=36&&e<=74?1.12:0;for(let r=0;r<185;r++){let s=r*2.399+Se()*.35,o=Se()*2-1,a=Math.sqrt(1-o*o),l=(.65+Se()*.35)*3.45*t*(1+.14*Math.sin(s*3)+.09*Math.cos(s*5)),c=qu.uuid+Pr.uuid,u=Bi.get(c);u||(u={g:qu,m:Pr,items:[]},Bi.set(c,u)),Mn.position.set(i+Math.cos(s)*a*l,n+6.5*t+o*l*.67+Math.sin(s*2)*t*.3,e+Math.sin(s)*a*l),Mn.rotation.set(Se()*Math.PI,Se()*6.28,Se()*6.28);let h=(1.35+Se()*.65)*t;Mn.scale.set(h,h,h),Mn.updateMatrix(),u.items.push(Mn.matrix.clone())}}function uE(){let i=$(5260853,{roughness:1}),e=$(10394505,{roughness:1}),t=new Mt(1,1,.09,40);function n(a,l,c,u,h=1,d=0,f=16777215){ei(t,i,a,d+.035,l,c*.52,1,u*.52),Ro.addPatch(a,l,c,u,{height:h,baseY:d+.08,tint:f}),Cn(a,l,c*.86,u*.86,d+h)}for(let[a,l,c]of[[-14.8,68.5,1.1],[-10,26,1.05],[10,26,1.03],[-20,25,1.12],[20,25,1.08],[-17,40,1.05],[-12.5,42,.84],[16.5,40,1.1],[13.5,45,.86],[18,52,1.03],[-36,39,1.12],[-40,46,1.06],[-35,54,1.15],[-40,64,1.18],[-36,72,1.03],[32,38,1.08],[40,42,1.2],[33,49,1.12],[41,55,1.05],[33,66,1.18],[41,72,1.14],[-34,86,1.05],[-39,95,1.16],[-28,93,.99],[-17,99,1.08],[17,99,1.1],[29,92,1.1],[39,86,1.18],[-37,113,1.12],[-27,116,1.04],[-17,112,1.03],[17,112,1.09],[28,116,1.12],[39,112,1.1],[-40,164,1.04],[-42,184,1.17],[-38,194,1.13],[-19,164,1.04],[-23,182,1.15],[40,165,1.06],[42,184,1.14],[38,195,1.05],[19,166,1.07],[23,181,1.12]])al.some(u=>Math.hypot(u.x-a,u.z-l)<2)||An(a,l,c);n(-16,43,8,10,1.05,1.12),n(16,43,8,10,1.15,1.12),n(-18,50,4,4,.85,1.12),n(18,51,3.6,3,.95,1.12),n(-18,61,4,6,1.05,1.12),n(17,62,5,10,1.1,1.12);for(let a of[-1,1])n(a*30.5,47,6.3,18,1.2),n(a*30.5,68,6.3,15,1.15),n(a*17,86,17,6,.74),n(a*39,29,8,5,1.05);for(let[a,l,c,u,h]of[[-37,43,8,9,1.1],[-38,56,7,10,.9],[-38,68,7,9,1.15],[35,41,10,7,1.1],[36,48,10,5,.86],[37,64,10,8,1.12],[36,72,10,6,.92],[-35,87,12,7,.94],[-35,96,12,6,1.15],[35,86,12,6,1],[35,95,12,6,1.12]])n(a,l,c,u,h);for(let a of[-1,1]){vs(a*29,89,1.35,12),vs(a*15,96,16,1.25),n(a*13,26,14,3.1,.82),vs(a*36,34,15,1.25),n(a*28,114,13,5,1.18),n(a*15,115,7,4,.85);for(let l of[165,182,193])n(a*39,l,7.5,7,1.07),n(a*21,l,7,6,.8)}let r=new Mr(1.35,1.9,56);r.rotateX(-Math.PI/2);let s=Oi(r,St.stone,-14.8,1.57,68.5);s.castShadow=!1;let o=new Mt(1.9,1.9,.4,56,1,!0);Oi(o,St.stone,-14.8,1.35,68.5),Cn(-14.8,68.5,3.8,3.8,1.57)}function vs(i,e,t,n){for(let u=0;u<Math.max(t,n)/.9;u++)Se();let r=t>n,s=r?i:e,o=r?e:i,a=Math.max(t,n),l=Math.min(t,n),c=[[s-a/2,s+a/2]];for(let u of Pn){let h=r?u.z:u.x,d=r?u.d:u.w;if(Math.abs(o-h)>l/2+d/2+.18)continue;let f=r?u.x:u.z,p=(r?u.w:u.d)/2+.22,x=f-p,m=f+p;c=c.flatMap(([g,S])=>m<=g||x>=S?[[g,S]]:[[g,Math.max(g,x)],[Math.min(S,m),S]].filter(([_,v])=>v-_>.8))}for(let[u,h]of c){let d=r?(u+h)/2:i,f=r?e:(u+h)/2,p=r?h-u:t,x=r?n:h-u;Cn(d,f,p,x,.9),Ro.addHedge(d,f,p,x)}}function Vf(i,e,t=0,n=!0){let r=new ht;for(let s=0;s<5;s++){let o=new dt(new on(2.05,.07,.1),St.wood);o.position.set(0,.52,(s-2)*.115),r.add(o)}for(let s=0;s<4;s++){let o=new dt(new on(2.05,.1,.055),St.wood);o.position.set(0,.72+s*.13,.27),o.rotation.x=-.13,r.add(o)}for(let s of[-1,1])for(let o of[-.2,.2]){let a=new dt(new on(.065,.54,.065),St.metal);a.position.set(s*.78,.27,o),r.add(a)}r.position.set(i,0,e),r.rotation.y=t,r.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),$n.add(r),Cn(i,e,Math.abs(Math.cos(t))*2+.5,Math.abs(Math.sin(t))*2+.5,1.2),n&&lr.push({kind:"object",name:"\u6811\u4E0B\u7684\u957F\u6905",x:i,z:e,radius:3.1,title:"\u5750\u8FC7\u7684\u5730\u65B9",type:"\u4E00\u5F20\u957F\u6905",body:`\u6905\u80CC\u88AB\u8BB8\u591A\u4E2A\u590F\u5929\u6652\u5F97\u6E29\u70ED\u3002

\u4EE5\u524D\u5728\u8FD9\u91CC\u7B49\u4EBA\uFF0C\u603B\u89C9\u5F97\u5341\u5206\u949F\u5F88\u957F\u3002\u73B0\u5728\u7AD9\u4E00\u4F1A\u513F\uFF0C\u53C8\u89C9\u5F97\u51E0\u5E74\u4E5F\u4E0D\u8FC7\u662F\u4E00\u9635\u98CE\u3002`})}function hE(i,e){Co(St.metal,i,2.3,e,.055,4.6),at(St.metal,i,4.58,e,.65,.06,.4),at(St.lamp,i,4.43,e,.43,.23,.29),at(St.metal,i,4.29,e,.49,.07,.35)}function Ff(i,e,t,n){for(let s of[-1,1])at(St.metal,i+s*1.13,1.3,e,.07,2.6,.08);at(St.wood,i,1.9,e,2.65,1.5,.17),at(St.trim,i,1.9,e+.11,2.4,1.24,.08),Fi(t,i,2.28,e+.17,2.16,.3,{color:"#415643",size:70});let r=["\u6B22\u8FCE\u6821\u53CB\u56DE\u5BB6","\u6821\u56ED\u97F3\u4E50\u4F1A \xB7 \u5468\u4E94\u508D\u665A","\u8BF7\u628A\u811A\u6B65\u653E\u6162\u4E00\u4E9B"];for(let s=0;s<3;s++)at(s===0?St.wall:St.white,i+(s-1)*.72,1.76,e+.17,.59,.55,.01),Fi(r[s],i+(s-1)*.72,1.77,e+.19,.54,.1,{size:39,color:"#5d6a56",width:640});Cn(i,e,2.7,.35,2.8),lr.push({kind:"board",name:t,x:i,z:e,radius:3.5,title:t,type:"\u6821\u56ED\u544A\u793A\u680F",body:n})}function dE(){let i=$(4803916,{roughness:.82}),e=$(14145745,{roughness:.78});at(e,0,.13,180,6.3,.26,5.5),at(e,0,.35,180,5.7,.18,4.9),at(i,0,1.52,180,2.3,2.2,2.15),at(i,0,2.7,180,2.6,.18,2.4),at(e,0,2.84,180,2.2,.12,2),at(St.darkTrim,0,1.5,181.083,1.7,1.35,.035),Fi("\u6BDB\u6CFD\u4E1C\u540C\u5FD7",0,1.65,181.11,1.45,.32,{color:"#a8a298",size:65});for(let t of[-1,1])for(let n=0;n<6;n++){let r=t*2.6,s=178+n*.8;Co(e,r,.68,s,.095,.52),at(e,r,.82,s,.23,.09,.22),n<5&&at(e,r,.62,s+.4,.09,.1,.8)}for(let t of[-1,1])for(let n=0;n<5;n++){let r=-2.1+n*1.05;at(e,r,.62,180+t*2,.95,.1,.09),Co(e,r,.66,180+t*2,.07,.5)}Cn(0,180,5.7,4.9,7.5),new Ci().load("assets/models/mao-scan.glb",t=>{let n=t.scene;n.updateMatrixWorld(!0);let r=new Kt().setFromObject(n),s=r.getSize(new R),o=r.getCenter(new R),a=4.2/s.y;n.scale.multiplyScalar(a),n.position.set(-o.x*a,2.9-r.min.y*a,180-o.z*a),n.traverse(l=>{if(l.isMesh){l.castShadow=!0,l.receiveShadow=!0;let c=l.material;l.material=new Ct({color:14408403,roughness:.75,normalMap:c.normalMap,normalScale:new ce(.6,.6)})}}),n.name="Mao Zhedong \u2014 Mo\xF8kan, CC BY 4.0; substitute scan",$n.add(n)},void 0,t=>{console.error("Statue model failed to load",t)})}function fE(){ex({box:at,inst:ei,mesh:Oi,label:Fi,solid:Cn,surfaces:Rn,interactables:lr,bench:Vf})}var Xu;function zf(i,e,t){Xu??=Lg();let n=0;for(let s of[...Pn,...Rn])ds(s,i,e)&&(n=Math.max(n,s.y??0));for(let s of Xu)ei(s.geometry,s.material,i,n,e,1,1,1,t);let r=new Kt;for(let s of Xu)r.union(s.geometry.boundingBox);r.applyMatrix4(new ke().makeRotationY(t).setPosition(i,n,e)),nx.push({x:i,y:n,z:e,angle:t,min:r.min.toArray(),max:r.max.toArray()})}function tx(i,e,t,n){at(St.stone,i,.05,e,t,.1,n),Rn.push({x:i,z:e,w:t,d:n,y:.1})}function pE(){K0({box:at,inst:ei,mesh:Oi,label:Fi,solid:Cn,surfaces:Rn})}function mE(){Q0({box:at,inst:ei,mesh:Oi,label:Fi,solid:Cn,surfaces:Rn,roads:Pn,buildings:vi,treePositions:al,bench:Vf,bike:zf,road:xi})}function gE(){let i=fs("grass",90,16777215);i.color.setRGB(1,1.7,.78),at(i,0,-.18,0,340,.3,510);let e=$(9013879);at(e,0,-.35,0,3e3,.05,3e3);for(let t of[-1,1]){let n=t<0?-52:51,r=t<0?-55.5:55.5;xi(n,-42.5,10,299),xi((n+r)/2,112,Math.abs(n-r)+10,10),xi(r,146.5,6,69),xi((n+r)/2,182,Math.abs(n-r)+10,6),xi(n,196,10,26)}xi(-139,0,8,442),xi(139,0,8,442);for(let t of[208,103,-48,-192])xi(0,t,283,9);xi(-99,49,90,7),xi(105,56,86,7),Vt(-12,176,8,43),Vt(12,176,8,43),Vt(0,199,33,10),Vt(0,104,24,20),Vt(0,91,9,22),Vt(0,25,9,20),Vt(-24,51,4,46),Vt(24,51,4,46),Vt(0,33,44,6),Vt(0,20,57,9),Vt(0,-67,7,67),Vt(0,-112,60,7),Vt(0,-134,20,15),Vt(-24,-85,5,54),Vt(26,-85,5,54),Vt(0,80,87,4),Vt(0,-90,87,4);for(let t of[-32,32]){Vt(t,180,4,44);for(let n=161;n<200;n+=12)An(t+(t<0?-5:5),n,.9)}for(let t of[-1,1]){for(let n=-208;n<=205;n+=15)Math.abs(n-103)<8||Math.abs(n+48)<9||Math.abs(n+192)<9||((n<125||n>185)&&An(t*61,n,.9+Se()*.22),(n<118||n>149)&&hE(t*46,n));for(let n=31;n<101;n+=15)An(t*17,n===31?26:n,1.02),An(t*38,n,.9);for(let n=-128;n<-55;n+=15)An(t*15,n,.88),An(t*38,n,.95);for(let n=-217;n<217;n+=16)An(t*146,n,1.15)}for(let t of[-1,1])for(let n of[158,175,193])An(t*21,n,1.15);for(let t=-128;t<130;t+=16)An(t,-221,.95),Math.abs(t)>55&&An(t,216,.95);for(let t of[-29,29]){for(let n=0;n<59/.9;n++)Se();vs(t,-91,1.1,61)}for(let t of[31,96,-122,-61]){if(t>0){for(let n=0;n<2;n++)for(let r=0;r<21/.9;r++)Se();continue}vs(-17,t,21,1),vs(17,t,21,1)}for(let t of[91,-75,-110])for(let n of[-1,1])Vf(n*9,t,n<0?Math.PI/2:-Math.PI/2,t===70||t===-110)}function xE(){for(let n of[113,155,-38,-183])for(let r of[-46,45])at(St.metal,r,.55,n,.6,1.1,.55),at(St.black,r,1.12,n,.63,.08,.58);tx(-33.05,109.7,11.1,2.3);for(let n=0;n<10;n++)zf(-38+n*1.1,109.7,Math.PI/2);tx(-44,-36.8,2.3,10.3);for(let n=0;n<8;n++)zf(-44,-41+n*1.2,0);let i=ft(128,128,n=>{for(let r=0;r<5;r++){let s=r*Math.PI*2/5;n.fillStyle="#e1c99f",n.beginPath(),n.ellipse(64+Math.cos(s)*23,64+Math.sin(s)*23,25,15,s,0,Math.PI*2),n.fill()}n.fillStyle="#9f8239",n.beginPath(),n.arc(64,64,12,0,Math.PI*2),n.fill()}),e=[14273442,12691632,14536315].map(n=>$(n,{map:i,alphaTest:.45,side:rt}));e.forEach(n=>n.userData.castShadow=!1);let t=new Yt(.19,.19);t.rotateX(-Math.PI/2);for(let n=0;n<700;n++){let r=Se()>.5?1:-1,s=r*(6+Se()*7),o=25+Se()*3,a=.18+Se()*.18;ei(t,e[n%3],s,a,o,1,1,1)}for(let n=0;n<28;n++){let r=(Se()>.5?1:-1)*(66+Se()*64),s=-221+Se()*440;vi.some(o=>Math.abs(r-o.x)<o.w/2+4&&Math.abs(s-o.z)<o.d/2+4)||Pn.some(o=>Math.abs(r-o.x)<o.w/2+3&&Math.abs(s-o.z)<o.d/2+3)||An(r,s,.7+Se()*.5)}for(let n of[-1,1]){at(St.stone,n*154,1,0,1,2,474);for(let r=-235;r<237;r+=6)Co(St.trim,n*154,1.8,r,.2,3.6)}at(St.stone,0,1,-239,308,2,1)}function vE(){let i=new Float32Array([-.009,0,0,.009,0,0,.012,.12,.012]),e=new Oe;e.setAttribute("position",new je(i,3)),e.computeVertexNormals();let t=[$(6519606,{side:rt}),$(7637314,{side:rt}),$(6320692,{side:rt})];for(let n=0;n<9e4;n++){let r=(Se()-.5)*90,s=Se()>.5?25+Se()*77:-130+Se()*72;if(Pn.some(a=>Math.abs(r-a.x)<a.w/2+.2&&Math.abs(s-a.z)<a.d/2+.2)||vi.some(a=>Math.abs(r-a.x)<a.w/2+1&&Math.abs(s-a.z)<a.d/2+1))continue;let o=.5+Se()*.8;ei(e,t[n%3],r,.02,s,o,o,o,Se()*6.28)}}function _E(){let i=$(9541777),e=$(5730682);for(let t of[-1,1])for(let n=0;n<13;n++){let r=t*(185+Se()*100),s=-260+n*43,o=22+Se()*27,a=16+Se()*13,l=13+Se()*18;at(i,r,o/2,s,a,o,l);for(let c=2;c<o-2;c+=3)for(let u of[-1,1])at(e,r,c,s+u*(l/2+.05),a-2,1.1,.05),at(e,r+u*(a/2+.05),c,s,.05,1.1,l-2);at(St.roof,r,o+.4,s,a*.65,.8,l*.65)}for(let t=0;t<14;t++){let n=-250+t*38,r=18+Se()*29;at(i,n,r/2,-285,20,r,20)}}function Ao({name:i,x:e,z:t,color:n,line:r,route:s,female:o=!1,old:a=!1}){let l=Gu({shirt:n,female:o,old:a,hair:a?9868427:2435623});l.root.position.set(e,0,t),$n.add(l.root);let c={kind:"npc",name:i,x:e,z:t,radius:3.1,line:r,person:l,route:s||[[e,t]],waypoint:0,speed:.55+Se()*.3,pause:Se()*2};Ms.push(c),lr.push(c)}function yE(){Ff(-43,193,"\u5357\u95E8 \xB7 \u6821\u56ED\u544A\u793A",`\u6B22\u8FCE\u6821\u53CB\u56DE\u5BB6

\u65E0\u8BBA\u4F60\u6BD5\u4E1A\u591A\u4E45\uFF0C\u8FD9\u91CC\u603B\u6709\u4E00\u6761\u719F\u6089\u7684\u8DEF\u3002

\u6821\u56ED\u5F00\u653E\u65E5 \xB7 \u8BF7\u6CBF\u5BA4\u5916\u9053\u8DEF\u6F2B\u6B65\u3002\u6559\u5B66\u697C\u3001\u5B9E\u9A8C\u697C\u4E0E\u5BBF\u820D\u4E0D\u5F00\u653E\u5165\u5185\u3002

\u3014\u573A\u666F\u4E2D\u7684\u544A\u793A\u4E3A\u521B\u4F5C\u5185\u5BB9\u3015`),Ff(42,15,"\u6811\u4E0B\u7684\u516C\u544A\u680F",`\u6821\u56ED\u8349\u576A\u97F3\u4E50\u4F1A

\u5468\u4E94\u508D\u665A\uFF0C\u5E26\u7740\u5409\u4ED6\u6765\u3002\u6CA1\u6709\u821E\u53F0\uFF0C\u4E5F\u4E0D\u9700\u8981\u62A5\u540D\u3002

\u5982\u679C\u4F60\u521A\u597D\u8DEF\u8FC7\uFF0C\u5C31\u591A\u505C\u4E00\u4F1A\u513F\u3002

\u3014\u573A\u666F\u521B\u4F5C \xB7 \u5E76\u975E\u771F\u5B9E\u6D3B\u52A8\u901A\u77E5\u3015`),Ff(-68,-67,"\u64CD\u573A\u8FB9\u7684\u65E7\u6D77\u62A5",`\u6BD5\u4E1A\u90A3\u5929\uFF0C\u8BB0\u5F97\u518D\u5408\u4E00\u5F20\u5F71\u3002

\u6709\u4E9B\u4EBA\u6BCF\u5929\u89C1\u9762\u7684\u65F6\u5019\uFF0C\u6CA1\u60F3\u8FC7\u6709\u4E00\u5929\u4F1A\u5F88\u96BE\u518D\u89C1\u3002

\u8FD9\u4E2A\u590F\u5929\uFF0C\u795D\u4F60\u4E00\u8DEF\u987A\u98CE\u3002`),Ao({name:"\u6563\u6B65\u7684\u8001\u6821\u53CB",x:-5,z:191,color:7960679,old:!0,route:[[-5,191],[-8,199],[-10,191]],line:"\u4E0D\u8D76\u65F6\u95F4\u7684\u8BDD\uFF0C\u518D\u8D70\u4E00\u5708\u5427\u3002"}),Ao({name:"\u62B1\u7740\u4E66\u7684\u540C\u5B66",x:8,z:13,color:12828062,female:!0,route:[[8,13],[17,19],[8,24]],line:"\u4F60\u4EEC\u90A3\u65F6\u5019\uFF0C\u4E5F\u4F1A\u5360\u9760\u7A97\u7684\u4F4D\u7F6E\u5417\uFF1F"}),Ao({name:"\u98DF\u5802\u65C1\u7684\u8001\u5E08\u5085",x:-47,z:-82,color:7900822,old:!0,route:[[-47,-82],[-47,-96]],line:"\u6709\u4E9B\u5473\u9053\uFF0C\u8FC7\u4E86\u5F88\u591A\u5E74\u8FD8\u8BB0\u5F97\u3002"}),Ao({name:"\u521A\u8DD1\u5B8C\u6B65\u7684\u540C\u5B66",x:-70,z:-133,color:10840139,route:[[-70,-133],[-70,-115],[-70,-93]],line:"\u6BD5\u4E1A\u4EE5\u540E\uFF0C\u6211\u4EEC\u8FD8\u7EA6\u5728\u8FD9\u91CC\u6253\u7403\u5427\u3002"}),Ao({name:"\u6811\u836B\u4E0B\u7684\u6821\u53CB",x:8,z:74,color:9345923,female:!0,route:[[8,74],[10,80],[8,85]],line:"\u8FD9\u6761\u8DEF\uFF0C\u95ED\u7740\u773C\u90FD\u77E5\u9053\u600E\u4E48\u8D70\u3002"}),Ao({name:"\u79D1\u6280\u697C\u524D\u7684\u5B66\u751F",x:10,z:-125,color:8423835,route:[[10,-125],[18,-132]],line:"\u613F\u4F60\u4ECA\u5929\u80FD\u5728\u8FD9\u91CC\u627E\u56DE\u4E00\u70B9\u65E7\u65F6\u5149\u3002"}),lr.push({kind:"object",name:"\u505C\u5728\u6811\u4E0B\u7684\u81EA\u884C\u8F66",x:-32,z:109.7,radius:3.5,title:"\u4E00\u8F86\u65E7\u81EA\u884C\u8F66",type:"\u65E5\u5E38\u7559\u4E0B\u7684\u75D5\u8FF9",body:`\u8F66\u94C3\u4E0A\u6709\u4E00\u70B9\u9508\uFF0C\u8F66\u5EA7\u88AB\u592A\u9633\u6652\u5F97\u53D1\u767D\u3002

\u66FE\u7ECF\u4ECE\u5BBF\u820D\u5230\u6559\u5B66\u697C\u7684\u51E0\u5206\u949F\uFF0C\u5C31\u662F\u4E00\u5929\u91CC\u6700\u81EA\u7531\u7684\u4E00\u6BB5\u8DEF\u3002`})}function ME(){Promise.all(["tree-small-02.glb","tree-small-02-far.glb"].map(i=>new Ci().loadAsync("assets/models/"+i))).then(([i,e])=>{let t=i.scene;t.updateMatrixWorld(!0);let n=new Kt().setFromObject(t),r=n.max.y-n.min.y,s=[];t.traverse(a=>{if(a.isMesh){let l=a.geometry.clone();l.applyMatrix4(a.matrixWorld),l.translate(0,-n.min.y,0);let c=a.material.clone();if(c.transparent=!1,c.alphaTest=.4,c.side=rt,c.envMapIntensity=.38,c.name.includes("leaves")){let u=l.attributes.position,h=l.index.array,d=Array.from({length:u.count},(x,m)=>m),f=x=>{for(;d[x]!==x;)d[x]=d[d[x]],x=d[x];return x};for(let x=0;x<h.length;x+=3){let m=f(h[x]);d[f(h[x+1])]=m,d[f(h[x+2])]=m}let p=new Map;for(let x=0;x<u.count;x++){let m=f(x);p.has(m)||p.set(m,[]),p.get(m).push(x)}for(let x of p.values()){if(x.length>60)continue;let m=new R;for(let g of x)m.add(new R().fromBufferAttribute(u,g));m.divideScalar(x.length);for(let g of x){let S=new R().fromBufferAttribute(u,g).sub(m).multiplyScalar(1.6).add(m);u.setXYZ(g,S.x,S.y,S.z)}}u.needsUpdate=!0,l.computeBoundingSphere(),c.color.setRGB(1.15,1.2,.83)}s.push({geo:l,m:c})}});let o=[];e.scene.updateMatrixWorld(!0),e.scene.traverse(a=>{if(a.isMesh){let l=a.geometry.clone();l.applyMatrix4(a.matrixWorld),l.translate(0,-n.min.y,0),o.push(l)}});for(let[a,l]of rx.entries()){let c=new ht,u=8.5*l.size/r;c.position.set(l.x,Math.abs(l.x)<21&&l.z>=36&&l.z<=74?1.12:0,l.z),c.rotation.y=a*2.399,c.scale.set(u*(.9+a%3*.08),u,u);let h=new ht,d=new ht;s.forEach(({geo:p,m:x},m)=>{let g=new dt(p,x);g.castShadow=!0,g.receiveShadow=!0,h.add(g);let S=new dt(o[m]||p,x);S.castShadow=!0,S.receiveShadow=!0,d.add(S)});let f=new bn;f.addLevel(h,0),f.addLevel(d,26,.12),c.add(f),$n.add(c)}}).catch(i=>console.error("Tree scan failed to load",i))}function ox(i){$n=i,Ro=(Wu?X0:W0)($n),sx=Y0({box:at,inst:ei,mesh:Oi,label:Fi,solid:Cn,buildings:vi,surfaces:Rn}),gE();let e=Dg({box:at,inst:ei,mesh:Oi,label:Fi,solid:Cn,buildings:vi,surfaces:Rn});e.main(),e.library(),e.tower(),Pg({box:at,label:Fi,solid:Cn,buildings:vi,surfaces:Rn,path:Vt}),sn({name:"\u673A\u68B0\u697C",x:-91,z:77,w:32,d:20,h:16,floors:4}),sn({name:"\u5B66\u751F\u5BBF\u820D",x:-94,z:192,w:64,d:15,h:18,floors:5,style:"dorm"}),sn({name:"\u5B66\u751F\u5BBF\u820D",x:-110,z:122,w:37,d:17,h:18,floors:5,style:"dorm"}),sn({name:"\u5B66\u751F\u5BBF\u820D",x:-105,z:-207,w:48,d:14,h:18,floors:5,style:"dorm"}),sn({name:"\u5B66\u751F\u5BBF\u820D",x:-52,z:-212,w:30,d:15,h:18,floors:5,style:"dorm"}),sn({name:"\u5B66\u751F\u5BBF\u820D",x:8,z:-211,w:58,d:17,h:18,floors:5,style:"dorm"}),sn({name:"\u65E0\u673A\u697C",x:71,z:152.5,w:18,d:43,h:15,floors:4}),sn({name:"\u65E0\u673A\u697C\u5357\u7FFC",x:102.5,z:164,w:45,d:20,h:15,floors:4}),sn({name:"\u6709\u673A\u697C",x:85,z:83,w:34,d:24,h:17,floors:4}),sn({name:"\u79D1\u5B66\u4F1A\u5802",x:120,z:77,w:20,d:31,h:12,floors:3}),sn({name:"\u5B9E\u9A8C\u697C",x:94,z:123,w:57,d:16,h:14,floors:4}),sn({name:"\u5B66\u751F\u98DF\u5802",x:-65.5,z:-100,w:14,d:50,h:12,floors:3,color:St.brick}),sn({name:"\u6821\u533B\u9662",x:-92,z:-34,w:35,d:15,h:9,floors:2}),sn({name:"\u5927\u5B66\u751F\u6D3B\u52A8\u4E2D\u5FC3",x:16,z:-65,w:23,d:15,h:10,floors:2}),sn({name:"\u7814\u7A76\u697C",x:97,z:-114,w:22,d:110,h:23,floors:6,style:"modern"}),sn({name:"\u5DE5\u7A0B\u8BAD\u7EC3\u4E2D\u5FC3",x:86,z:-178,w:58,d:18,h:17,floors:4}),sn({name:"\u79D1\u7814\u697C",x:106,z:-215,w:51,d:17,h:19,floors:5}),sn({name:"\u5B66\u751F\u5BBF\u820D",x:104,z:194,w:49,d:16,h:17,floors:5,style:"dorm"}),j0({box:at,mesh:Oi,label:Fi,solid:Cn,buildings:vi,surfaces:Rn,path:Vt,interactables:lr});let t=Rg({box:at,inst:ei,path:Vt,tree:An,shrubs:Ro,solid:Cn,roads:Pn});uE(),pE(),mE(),Cg({box:at,mesh:Oi,tree:An,hedge:vs,surfaces:Rn,roads:Pn}),dE(),fE(),xE(),oE(),Wu?ME():q0($n,al),vE(),_E(),yE(),Ro.flush?.();let n=ix.flush($n,Rn);for(let r of Bi.values()){let s=new En(r.g,r.m,r.items.length);r.items.forEach((o,a)=>s.setMatrixAt(a,o)),s.castShadow=r.m.userData.castShadow!==!1&&r.m!==St.glass&&r.m!==St.glassDark,s.receiveShadow=!0,r.m===Pr&&(s.castShadow=!0,s.receiveShadow=!0),s.computeBoundingSphere(),$n.add(s)}return Bi.clear(),{leafM:Pr,pavingRectangles:n.rectangles,captureReflections(r){let s=[];$n.traverse(c=>{c.isMesh&&c.material?.userData?.libraryGlass&&s.push([c,c.visible])});let o=new Ys(128,{type:Dt}),a=new qs(.5,450,o);a.position.set(0,9,7);let l=r.shadowMap.enabled;try{for(let[c]of s)c.visible=!1;r.shadowMap.enabled=!1,a.update(r,$n);for(let c of e.reflectionMaterials)c.envMap=o.texture,c.needsUpdate=!0}finally{r.shadowMap.enabled=l;for(let[c,u]of s)c.visible=u;r.shadowMap.needsUpdate=!0}return{meshes:s.length,materials:e.reflectionMaterials.map(c=>({type:c.type,emissive:c.emissive.getHexString(),intensity:c.emissiveIntensity,opacity:c.opacity})),visible:s.map(([c])=>c.visible)}},stats:{pavingAudit:{...n,rectangles:void 0},libraryLandscape:t,cars:0,bicycles:nx.length,bicycleMaterialBatches:Xu?.length||0,shrubs:Ro.count,foliageMode:Wu?"legacy-leaf-geometry":"textured-mounds-and-reduced-crown-cards",buildings:vi.length,trees:al.length,npcs:Ms.length,interactions:lr.length}}}var Xe=i=>document.querySelector(i),Oo=Xe("#world"),kt;try{kt=new xu({canvas:Oo,antialias:!1,powerPreference:"high-performance"})}catch(i){throw Xe("#load-status").textContent="\u6D4F\u89C8\u5668\u65E0\u6CD5\u542F\u52A8\u4E09\u7EF4\u753B\u9762\uFF0C\u8BF7\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u540E\u5237\u65B0\u3002",i}var fx=()=>Math.max(1,Math.min(1.5,Math.sqrt(23e5/(innerWidth*innerHeight))));kt.setSize(innerWidth,innerHeight);kt.setPixelRatio(fx());kt.info.autoReset=!1;kt.shadowMap.enabled=!0;kt.shadowMap.autoUpdate=!1;kt.shadowMap.needsUpdate=!0;kt.shadowMap.type=fc;kt.toneMapping=ro;kt.toneMappingExposure=1.15;kt.outputColorSpace=yt;var en=new Zs;en.background=new Me(14141092);en.fog=new la(13876373,.0016);var Hn=new Xt(54,innerWidth/innerHeight,.12,1400),ep=new dt(new ln(900,40,24),new bt({side:Jt,depthWrite:!1,uniforms:{sunDir:{value:new R(-.82,.25,.5).normalize()}},vertexShader:"varying vec3 vPos;void main(){vPos=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vPos;uniform vec3 sunDir;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}void main(){vec3 d=normalize(vPos);float h=max(d.y,0.);vec3 col=mix(vec3(.95,.66,.34),vec3(.18,.33,.48),sqrt(clamp(h*3.,0.,1.)));float a=max(dot(d,sunDir),0.);col+=vec3(1.,.49,.12)*pow(a,16.)*.28;col+=vec3(1.,.68,.28)*pow(a,180.)*.25;float disk=smoothstep(.99955,.99985,a);col=mix(col,vec3(3.2,2.5,1.25),disk);vec2 uv=d.xz/(h+.25)*3.;float n=noise(uv)+noise(uv*2.1)*.38+noise(uv*4.3)*.14;float clouds=smoothstep(.83,1.1,n)*smoothstep(.04,.2,h)*(1.-smoothstep(.4,.75,h));col=mix(col,vec3(.89,.79,.65),clouds*.22);gl_FragColor=vec4(col,1.);}`}));en.add(ep);var SE=new Ca(12900065,7764052,.85);en.add(SE);var jt=new es(16760182,3.8);jt.position.set(-105,42,82);jt.castShadow=!0;jt.shadow.mapSize.set(3072,3072);jt.shadow.camera.left=-62;jt.shadow.camera.right=62;jt.shadow.camera.top=62;jt.shadow.camera.bottom=-62;jt.shadow.camera.near=.1;jt.shadow.camera.far=330;jt.shadow.normalBias=.045;jt.shadow.bias=-12e-5;jt.shadow.radius=2;en.add(jt);en.add(jt.target);var px=new R(-105,42,82),Yf=px.clone().normalize(),jf=new R(Yf.z,0,-Yf.x).normalize(),ax=new R().crossVectors(Yf,jf),Po=new R,Yu=(jt.shadow.camera.right-jt.shadow.camera.left)/jt.shadow.mapSize.x;function TE(i){Po.set(i.x,i.y,i.z);let e=Po.dot(jf),t=Po.dot(ax);Po.addScaledVector(jf,Math.round(e/Yu)*Yu-e).addScaledVector(ax,Math.round(t/Yu)*Yu-t),jt.target.position.copy(Po),jt.position.copy(Po).add(px),jt.target.updateMatrixWorld()}var tp=new Zs;tp.background=new Me(14081230);tp.add(ep.clone());var mx=new mo(kt);en.environment=mx.fromScene(tp,.02).texture;en.environmentIntensity=.35;mx.dispose();var gx,bE=new Promise(i=>gx=i);ka.onLoad=()=>gx();ka.onProgress=(i,e,t)=>{Xe("#load-status").textContent=`\u94FA\u597D\u719F\u6089\u7684\u8DEF\u2026 ${Math.round(e/t*100)}%`};Xe("#load-status").textContent="\u94FA\u597D\u719F\u6089\u7684\u8DEF\uFF0C\u7B49\u4E00\u9635\u98CE\u2026";new Mu().load("assets/sunset-sky.hdr",i=>{i.mapping=so,ep.visible=!1,en.background=i,en.environment=i,en.backgroundIntensity=.35,en.environmentIntensity=.22,en.backgroundRotation.y=4,en.environmentRotation.y=4});var Zf=ox(en),pt=Gu({player:!0,pants:4737858,skin:12949879,old:!0});en.add(pt.root);pt.root.position.set(0,0,202);var Do=lp({boxes:Hf,colliders:ys,bounds:_s,groundAt:th}),Kf=Sg(en,[pt,...Ms.map(i=>i.person)],(i,e,t)=>Do.supportAt(i,e,t)),Jf=0,ni=!1,ur=!1,ti=0,zi=.08,kf=8.064,Ku=8.064,Uo=0,Ir=null,np=0,cr=null,Io=!1,Vn=0,lx=0;var mn=new Set,Lo=new R,Gf=new R,Qf=new R(0,1.4,202),cx=new Zi,EE=new Gt(innerWidth,innerHeight,{type:Dt,samples:Math.min(4,kt.capabilities.maxSamples)}),Lr=new bu(kt,EE);Lr.setSize(innerWidth,innerHeight);Lr.addPass(new Eu(en,Hn));var wE=new _o(new ce(innerWidth,innerHeight),.16,.45,1.2);Lr.addPass(wE);var AE=new Ru;Lr.addPass(AE);Lr.addPass(new wu);var Qu=800,Zu=new Float32Array(Qu*3),RE=new Float32Array(Qu),xx=new Float32Array(Qu*3);for(let i=0;i<Qu;i++)RE[i]=Se()*100,Zu[i*3]=(Se()-.5)*110,Zu[i*3+1]=Se()*6+.2,Zu[i*3+2]=(Se()-.5)*110,xx.set([1,.72+Se()*.2,.36+Se()*.2],i*3);var ip=new Oe;ip.setAttribute("position",new je(Zu,3));ip.setAttribute("color",new je(xx,3));var rp=new bt({uniforms:{uTime:{value:0},ratio:{value:kt.getPixelRatio()}},vertexColors:!0,transparent:!0,depthWrite:!1,blending:ts,vertexShader:"varying vec3 vColor;varying float vFade;uniform float uTime;uniform float ratio;void main(){vColor=color;vec3 p=position;p.x+=sin(uTime*.17+position.z)*.7;p.y+=sin(uTime*.6+position.x)*.3;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(100./-mv.z,1.8,7.)*ratio;vFade=(.3+.7*pow(sin(uTime*.6+position.x*4.)*.5+.5,3.))*smoothstep(55.,8.,-mv.z);}",fragmentShader:"varying vec3 vColor;varying float vFade;void main(){float d=length(gl_PointCoord-.5);float a=pow(max(0.,1.-d*2.),2.5)*vFade;gl_FragColor=vec4(vColor*1.5,a*.7);}"}),vx=new Zr(ip,rp);en.add(vx);var sp=_g(),Wf=!1;async function CE(){if(!Wf){Wf=!0;try{Io=await sp.setEnabled(!Io),Xe("#sound").textContent=Io?"\u266B":"\u266A",Xe("#sound").setAttribute("aria-label",Io?"\u5173\u95ED\u73AF\u5883\u58F0\u97F3":"\u5F00\u542F\u73AF\u5883\u58F0\u97F3"),Xe("#sound").setAttribute("aria-pressed",String(Io)),No(Io?"\u542C\u89C1\u98CE\u3001\u8749\u9E23\u3001\u866B\u9E23\u548C\u9E1F\u53EB":"\u73AF\u5883\u58F0\u97F3\u5DF2\u5173\u95ED")}catch{No("\u58F0\u97F3\u6682\u65F6\u672A\u5F00\u542F\uFF0C\u8BF7\u518D\u70B9\u4E00\u6B21\u97F3\u7B26")}finally{Wf=!1}}}Xe("#sound").addEventListener("click",CE);function No(i){Xe("#toast").textContent=i,Xe("#toast").classList.add("show"),clearTimeout(No.timer),No.timer=setTimeout(()=>Xe("#toast").classList.remove("show"),2800)}function _x(){ni||(ni=!0,Xe("#welcome").classList.add("hidden"),Xe("#hud").classList.remove("hidden"),ti=0,zi=.08,Hn.position.set(pt.root.position.x+3,3,pt.root.position.z+6),yx())}Xe("#enter").addEventListener("click",_x);var op=["#reading","#help","#map-dialog"].map(Xe),In=()=>op.some(i=>i.open);function $u(i){Xe(i).showModal(),Mx()}function ll(){for(let i of op)i.open&&i.close();yx()}for(let i of op)i.querySelector(".close").onclick=ll,i.addEventListener("close",()=>eh.refresh()),i.addEventListener("click",e=>{if(e.target===i){let t=i.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&ll()}});Xe("#help-btn").onclick=()=>$u("#help");Xe("#map-btn").onclick=()=>{Ju(Xe("#bigmap"),!0),$u("#map-dialog")};Xe("#photo-btn").onclick=$f;Xe("#reset-position").onclick=()=>{Lt.reset(),ap(),pt.root.position.set(0,0,202),Qf.set(0,1.4,202),ti=0,ll(),No("\u56DE\u5230\u5357\u95E8\u4E86\u3002")};function $f(){!ni||In()||(ur=!ur,document.body.classList.toggle("photo-mode",ur),Xe("header").classList.toggle("hidden",ur),Xe("#hud").classList.toggle("hidden",ur),Xe("#photo-hint").classList.toggle("hidden",!ur),Xe("#speech").classList.add("hidden"))}function PE(){if(In()){ll();return}if(!cr||!ni)return;let i=cr;if(i.kind==="npc"){Ir=i,np=Vn+7.5,Xe("#speech-name").textContent=i.name,Xe("#speech-text").textContent=i.line,Xe("#speech").classList.remove("hidden");let e=pt.root.position.x-i.x,t=pt.root.position.z-i.z;i.person.root.rotation.y=Math.atan2(-e,-t)}else Xe("#reading-title").textContent=i.title,Xe("#reading-type").textContent=i.type,Xe("#reading-content").replaceChildren(...i.body.split(`

`).map(e=>{let t=document.createElement("p");return t.textContent=e,t})),$u("#reading")}window.addEventListener("keydown",i=>{if(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&!In()&&i.preventDefault(),i.repeat){In()||mn.add(i.code);return}if(!ni&&i.code==="Enter"){_x();return}if(i.code==="Escape"){Mx(),ur&&$f();return}if(i.code==="KeyR"){Tx();return}if(i.code==="KeyF"){PE();return}if(i.code==="KeyM"&&ni){Xe("#map-dialog").open?ll():(Ju(Xe("#bigmap"),!0),$u("#map-dialog"));return}if(i.code==="KeyP"){$f();return}In()||mn.add(i.code)});window.addEventListener("keyup",i=>mn.delete(i.code));var eh=Tg({canvas:Oo,hint:Xe("#mouse-look-hint"),canCapture:()=>ni&&!In()&&!document.hidden,onMove:(i,e)=>{ti-=i*.004,zi=We.clamp(zi+e*.003,Lt.active?-1.35:-.8,Lt.active?1.35:1)},onRelease:()=>{mn.clear(),Uo=0}});function yx(){eh.capture()}function Mx(){eh.release()}Oo.addEventListener("wheel",i=>{!ni||In()||(i.preventDefault(),Ku=We.clamp(Ku+i.deltaY*.008,2.4,11))},{passive:!1});Oo.addEventListener("contextmenu",i=>i.preventDefault());function IE(i,e,t=.32){if(i<_s.minX+t||i>_s.maxX-t||e<_s.minZ+t||e>_s.maxZ-t)return!1;for(let n of ys){let r=Math.max(Math.abs(i-n.x)-n.w/2,0),s=Math.max(Math.abs(e-n.z)-n.d/2,0);if(r*r+s*s<t*t)return!1}return!0}function th(i,e){let t=0;for(let n of Pn)Math.abs(i-n.x)<n.w/2&&Math.abs(e-n.z)<n.d/2&&(t=Math.max(t,n.y));for(let n of Rn)ds(n,i,e)&&(t=Math.max(t,n.y));return t}var Lt=Mg({player:pt,bounds:_s,groundAt:th,supportAt:Do.supportAt,sword:vg(),onNotice:No,colliders:[...ys,...Do.obstacles]}),Sx=Xe("#flight-status");function ap(){Xe("#flight-btn").innerHTML=Lt.mode==="landing"?"\u8D77\u98DE <kbd>R</kbd>":Lt.active?"\u6536\u5251 <kbd>R</kbd>":"\u5FA1\u5251 <kbd>R</kbd>",Xe("#flight-btn").setAttribute("aria-pressed",String(Lt.active)),Xe("#movement-hint").textContent=Lt.active?"W \u524D\u98DE \xB7 A/D \u6A2A\u79FB \xB7 S \u5239\u8F66":"W A S D \u8DD1\u6B65",Xe("#shift-hint").textContent=Lt.active?"Shift \u52A0\u901F":"Shift \u6162\u8D70",Sx.classList.toggle("hidden",!Lt.active)}function Tx(){!ni||In()||(Lt.toggle(),Jf=0,mn.clear(),Uo=0,Ir=null,ap())}Xe("#flight-btn").onclick=Tx;function LE(i){if(Lt.active){Lt.update(i,{keys:mn,yaw:ti,pitch:zi,time:Vn,paused:In()||document.hidden}),Lt.active||(zi=We.clamp(zi,-.8,1),ap());return}let e=(mn.has("KeyD")||mn.has("ArrowRight")?1:0)-(mn.has("KeyA")||mn.has("ArrowLeft")?1:0),t=(mn.has("KeyW")||mn.has("ArrowUp")?1:0)-(mn.has("KeyS")||mn.has("ArrowDown")?1:0),n=ni&&!In()&&(e||t)?mn.has("ShiftLeft")||mn.has("ShiftRight")?1.35:4.8:0;if(Uo=We.damp(Uo,n,10,i),n>0){let a=Math.hypot(e,t),l=(e*Math.cos(ti)-t*Math.sin(ti))/a,c=(-e*Math.sin(ti)-t*Math.cos(ti))/a,u=Uo*i,h=Math.ceil(u/.16);for(let p=0;p<h;p++){let x=pt.root.position;Do.canWalk(x.x+l*u/h,x.z,x.y,.32,x)&&(x.x+=l*u/h),Do.canWalk(x.x,x.z+c*u/h,x.y,.32,x)&&(x.z+=c*u/h)}let d=Math.atan2(-l,-c),f=We.euclideanModulo(d-pt.root.rotation.y+Math.PI,Math.PI*2)-Math.PI;pt.root.rotation.y+=f*Math.min(1,i*12),Vn-lx>(n>3?.3:.46)&&(sp.step(n),lx=Vn)}let r=pt.airborne,s=pt.root.position.y,o=pl(pt.root.position,In()?0:i,Jf,Do.supportAt);Jf=o.velocity,pt.airborne=!o.landed,pt.airborne&&!r&&pt.prepareFall?.(s),o.landed&&r&&pt.land?.(),pt.animate(i,n,Vn)}function DE(i){for(let e of Ms){let t=e.person.root.position,n=Ir===e&&Vn<np||Math.hypot(t.x-pt.root.position.x,t.z-pt.root.position.z)<2.5,r=0;if(!n&&!In()){let s=e.route[e.waypoint],o=s[0]-t.x,a=s[1]-t.z,l=Math.hypot(o,a);if(l<.3)e.pause-=i,e.pause<=0&&(e.waypoint=(e.waypoint+1)%e.route.length,e.pause=2+Se()*3);else{r=e.speed;let c=t.x+o/l*r*i,u=t.z+a/l*r*i;IE(c,u,.22)?(t.x=c,t.z=u):e.waypoint=(e.waypoint+1)%e.route.length;let h=Math.atan2(-o,-a),d=We.euclideanModulo(h-e.person.root.rotation.y+Math.PI,Math.PI*2)-Math.PI;e.person.root.rotation.y+=d*Math.min(1,i*4)}}t.y=We.damp(t.y,th(t.x,t.z),14,i),e.x=t.x,e.z=t.z,e.person.animate(i,r,Vn)}}var Xf=new Kt,ux=new R;function bx(i){let e=We.damp(Hn.fov,Lt.active?60+Lt.speed*.22:54,4,i);Math.abs(e-Hn.fov)>.005&&(Hn.fov=e,Hn.updateProjectionMatrix());let t=pt.root.position;Qf.lerp(new R(t.x,t.y+1.4,t.z),1-Math.exp(-i*8)),kf=We.damp(kf,Lt.active?Math.max(Ku,9.792)+Lt.speed*.045:Ku,7,i),Lo.copy(Qf),Lt.active||(Lo.y+=Math.max(0,-zi-.1)*4.5);let n=kf;Gf.set(Math.sin(ti)*Math.cos(zi),Math.sin(zi),Math.cos(ti)*Math.cos(zi)),cx.set(Lo,Gf);for(let r of ys)Math.abs(r.x-t.x)>20||Math.abs(r.z-t.z)>20||(Xf.min.set(r.x-r.w/2-.15,0,r.z-r.d/2-.15),Xf.max.set(r.x+r.w/2+.15,r.h,r.z+r.d/2+.15),cx.intersectBox(Xf,ux)&&(n=Math.min(n,Math.max(.6,Lo.distanceTo(ux)-.18))));Hn.position.copy(Lo).addScaledVector(Gf,n),Hn.position.y=Math.max(.4,Hn.position.y),Hn.lookAt(Lo)}function UE(){cr=null;let i=99;for(let e of lr){let t=Math.hypot(pt.root.position.x-e.x,pt.root.position.z-e.z);if(!Lt.active&&Math.abs(pt.root.position.y-th(e.x,e.z))<2.5&&t<e.radius&&t<i){let n=!1;for(let r of vi){let s=(pt.root.position.x+e.x)/2,o=(pt.root.position.z+e.z)/2;if(Math.abs(s-r.x)<r.w/2&&Math.abs(o-r.z)<r.d/2){n=!0;break}}n||(i=t,cr=e)}}if(Xe("#interaction").classList.toggle("hidden",!cr||!ni||ur||In()),cr&&(Xe("#interaction-label").textContent=cr.kind==="npc"?`\u548C${cr.name}\u804A\u804A`:`\u770B\u770B${cr.name}`),Ir&&Vn<np&&!In()&&!ur){let e=new R(Ir.x,Ir.person.root.position.y+2.2,Ir.z).project(Hn),t=e.z<1&&e.z>-1&&Math.abs(e.x)<1.2;Xe("#speech").classList.toggle("hidden",!t),Xe("#speech").style.left=`${(e.x*.5+.5)*innerWidth}px`,Xe("#speech").style.top=`${(-e.y*.5+.5)*innerHeight}px`}else Xe("#speech").classList.add("hidden"),Ir=null}function NE(){let i=pt.root.position;return i.x<-58&&i.x>-95&&i.z>125&&i.z<173?"\u884C\u653F\u697C \xB7 \u4E3B\u697C\u897F\u4FA7":i.x<-58&&i.x>-92&&i.z>99&&i.z<128?"\u70DB\u5149\u8D85\u5E02 \xB7 \u4E0B\u8BFE\u4EE5\u540E":i.z>162?"\u5357\u95E8 \xB7 \u521D\u89C1":i.z>108?"\u4E3B\u6559\u697C \xB7 \u8001\u5730\u65B9":i.x<-72&&i.z<-62&&i.z>-188?"\u64CD\u573A \xB7 \u518D\u8D70\u4E00\u5708":i.z>25&&Math.abs(i.x)<47?"\u4E2D\u5FC3\u82B1\u56ED \xB7 \u6BCD\u6821\u4E4B\u5149":i.z>-40&&i.z<25&&Math.abs(i.x)<45?"\u9038\u592B\u56FE\u4E66\u9986":i.z<-128&&i.z>-188&&Math.abs(i.x)<50?"\u79D1\u6280\u5927\u53A6":i.z<-50&&Math.abs(i.x)<45?"\u5317\u82B1\u56ED \xB7 \u6811\u5F71":i.x>58&&i.z>-45&&i.z<44?"\u7BEE\u7403\u573A":i.x<-100&&i.x>-131&&i.z>-6&&i.z<43?"\u897F\u4FA7\u7403\u573A \xB7 \u7FBD\u6BDB\u7403":i.x>-99&&i.x<-56&&i.z>-6&&i.z<43?"\u897F\u4FA7\u7403\u573A \xB7 \u7F51\u7403":i.x<-63&&i.z>103?"\u5BBF\u820D\u533A \xB7 \u65E5\u5E38":i.x<-57&&i.z<-63?"\u98DF\u5802\u65C1":"\u6821\u56ED\u5C0F\u8DEF"}function Ju(i,e=!1){let t=i.getContext("2d"),n=i.width,r=i.height;t.clearRect(0,0,n,r);let s=e?48:15,o=Math.min((n-s*2)/310,(r-s*2)/480),a=n/2,l=r/2,c=(f,p)=>[a+f*o,l+p*o];t.fillStyle=e?"#e3e7d6":"#263e32",t.fillRect(0,0,n,r),t.fillStyle=e?"#f5f3e8":"#82937c";for(let f of Pn){let p=c(f.x-f.w/2,f.z-f.d/2);t.fillRect(p[0],p[1],f.w*o,f.d*o)}t.fillStyle=e?"#b6bead":"#adbaa2";for(let f of vi){let p=c(f.x-f.w/2,f.z-f.d/2);t.fillRect(p[0],p[1],f.w*o,f.d*o)}t.strokeStyle=e?"#aa806a":"#a0a17b",t.lineWidth=e?7:2;let u=c(-105,-118);if(t.beginPath(),t.ellipse(u[0],u[1],25*o,66*o,0,0,Math.PI*2),t.stroke(),e){t.font="20px system-ui",t.textAlign="center",t.fillStyle="#5c6856";for(let[f,p,x]of[["\u5357\u95E8",0,227],["\u4E3B\u6559\u697C",0,134],["\u9038\u592B\u56FE\u4E66\u9986",0,-12],["\u79D1\u6280\u5927\u53A6",0,-155],["\u64CD\u573A",-105,-117],["\u98DF\u5802",-67,-96],["\u5BBF\u820D\u533A",-105,186],["\u7BEE\u7403\u573A",91,3],["\u6BCD\u6821\u4E4B\u5149",0,52],["\u70DB\u5149\u8D85\u5E02",-78,119],["\u884C\u653F\u697C",-74,157]]){let m=c(p,x);t.fillText(f,...m)}t.fillStyle="#495b44",t.fillText("\u5317 \u2191",n-48,30)}let h=c(-78,119);t.fillStyle=e?"#a44835":"#ffd790",t.fillRect(h[0]-3,h[1]-3,6,6),e||(t.font="10px system-ui",t.textAlign="right",t.fillText("\u8D85\u5E02",h[0]-5,h[1]+3));let d=c(pt.root.position.x,pt.root.position.z);t.fillStyle=e?"#b8863c":"#f8d796",t.beginPath(),t.arc(...d,e?6:4,0,Math.PI*2),t.fill(),t.save(),t.translate(...d),t.rotate(-ti),t.fillStyle=e?"#b8863c44":"#f8d79644",t.beginPath(),t.moveTo(0,0),t.lineTo(-10,-23),t.lineTo(10,-23),t.fill(),t.restore()}var OE=Xe("#fps-counter"),hx=0;var qf=0,ju=0;function FE(){kt.setPixelRatio(fx()),kt.setSize(innerWidth,innerHeight),Lr.setPixelRatio(kt.getPixelRatio()),Lr.setSize(innerWidth,innerHeight),rp.uniforms.ratio.value=kt.getPixelRatio(),Hn.aspect=innerWidth/innerHeight,Hn.updateProjectionMatrix()}window.addEventListener("resize",FE);eh.refresh();bx(.1);var dx=performance.now(),BE=0;function Ex(i){requestAnimationFrame(Ex);let e=(i-dx)/1e3,t=Math.min(e,.05);if(dx=i,document.hidden)return;Vn+=t,LE(t),DE(t),Kf.update(),bx(t);let n=pt.root.position;TE(n),vx.position.set(Math.floor(n.x/12)*12,0,Math.floor(n.z/12)*12),rp.uniforms.uTime.value=Vn,Zf.leafM.userData.shader&&(Zf.leafM.userData.shader.uniforms.uTime.value=Vn),UE(),Vn-hx>.25&&(Lt.active&&(Sx.textContent=`${Lt.mode==="landing"?"\u6536\u5251\u4E0B\u843D":"\u5FA1\u5251"} \xB7 ${Math.round(Lt.speed*3.6)} km/h \xB7 \u79BB\u5730 ${Math.round(Lt.sample().height)} m`),Ju(Xe("#minimap")),Xe("#area-name").textContent=NE(),hx=Vn,Xe("#map-dialog").open&&Ju(Xe("#bigmap"),!0)),sp.update(ti,Lt.active?Lt.sample().height:0),qf++,ju+=e,ju>1&&(OE.textContent=`FPS ${Math.round(qf/ju)}`,qf=ju=0),kt.shadowMap.needsUpdate=BE++%(Uo>.1?2:3)===0,kt.info.reset(),Lr.render()}requestAnimationFrame(Ex);Promise.all([document.fonts.ready,bE,Promise.all([pt,...Ms.map(i=>i.person)].map(i=>i.readyPromise)),new Promise(i=>setTimeout(i,900))]).then(()=>{let i=[pt,...Ms.map(e=>e.person)];i.forEach(e=>e.root.visible=!1),Kf.update();try{Zf.captureReflections(kt)}catch(e){console.warn("Local glass reflections unavailable",e)}finally{i.forEach(e=>e.root.visible=!0),Kf.update()}Xe("#loading").classList.add("hidden"),Oo.setAttribute("data-ready","true"),ni||Xe("#welcome").classList.remove("hidden")});Oo.addEventListener("webglcontextlost",i=>{i.preventDefault(),Xe("#loading").classList.remove("hidden"),Xe("#load-status").textContent="\u753B\u9762\u6682\u65F6\u4E2D\u65AD\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u8D70\u8FDB\u6821\u56ED\u3002"});
