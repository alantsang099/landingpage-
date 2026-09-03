"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88],{6088:(e,t,i)=>{i.r(t),i.d(t,{WaveGridBackground:()=>S});var r=i(9951),s=i(3431),a=i(1901),n=i(5334);let o={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class l{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let d=new a.qUd(-1,1,1,-1,0,1);class h extends a.LoY{constructor(){super(),this.setAttribute("position",new a.qtW([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new a.qtW([0,2,0,0,2,0],2))}}let f=new h;class u{constructor(e){this._mesh=new a.eaF(f,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,d)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class c extends l{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof a.BKk?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=a.LlO.clone(e.uniforms),this.material=new a.BKk({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new u(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class g extends l{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let r,s,a=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0),this.inverse?(r=0,s=1):(r=1,s=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,r,0xffffffff),n.buffers.stencil.setClear(s),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,0xffffffff),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}}class p extends l{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class v{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){let i=e.getSize(new a.I9Y);this._width=i.width,this._height=i.height,(t=new a.nWS(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:a.ix0})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new c(o),this.copyPass.material.blending=a.XIg,this.timer=new a.M4G}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),void 0===e&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(!1!==r.enabled){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let t=this.renderer.getContext(),i=this.renderer.state.buffers.stencil;i.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),i.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==g&&(r instanceof g?i=!0:r instanceof p&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new a.I9Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}let m={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class w extends l{constructor(){super(),this.isOutputPass=!0,this.uniforms=a.LlO.clone(m.uniforms),this.material=new a.D$Q({name:m.name,uniforms:this.uniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}),this._fsQuad=new u(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},a.ppV.getTransfer(this._outputColorSpace)===a.KLL&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===a.kyO?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===a.Mjd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===a.nNL?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===a.FV?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===a.LAk?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===a.aJ8?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===a.g7M&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),!0===this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _ extends l{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new a.Q1f}render(e,t,i){let r,s,a=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(r),null!==this.overrideMaterial&&(this.scene.overrideMaterial=s),e.autoClear=a}}let x={uniforms:{tDiffuse:{value:null},shiftAmount:{value:.004},vignetteRadius:{value:.3},vignetteSoftness:{value:.3}},vertexShader:"\n    varying vec2 vUv;\n\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform float shiftAmount;\n    uniform float vignetteRadius;\n    uniform float vignetteSoftness;\n    varying vec2 vUv;\n\n    void main() {\n      vec2 center = vec2(0.5);\n      float dist = distance(vUv, center);\n      float horzQuadrant = sign(vUv.x - center.x);\n      float vertQuadrant = sign(vUv.y - center.y);\n      float vignetteFactor = smoothstep(vignetteRadius, vignetteRadius + vignetteSoftness, dist);\n      float currentShift = shiftAmount * vignetteFactor;\n\n      vec3 shiftedColor;\n      if (currentShift > 0.00001) {\n        float r = texture2D(tDiffuse, vUv + vec2(currentShift * horzQuadrant, currentShift * vertQuadrant)).r;\n        float g = texture2D(tDiffuse, vUv).g;\n        float b = texture2D(tDiffuse, vUv - vec2(currentShift * horzQuadrant, currentShift * vertQuadrant)).b;\n        shiftedColor = vec3(r, g, b);\n      } else {\n        shiftedColor = texture2D(tDiffuse, vUv).rgb;\n      }\n      float darken = 1.0 - vignetteFactor * 0.34;\n\n      gl_FragColor = vec4(shiftedColor * darken, 1.0);\n    }\n  "};function C(e){return e.replace("#include <common>","#include <common>\n      varying float vHeight;\n      attribute vec2 aOffset;\n      uniform sampler2D uTrailTexture;\n      uniform int uTrailCount;\n      uniform float uWaveSpeed;\n      uniform float uWaveFreq;\n      uniform float uWaveWidth;\n      uniform float uFadeTime;\n      uniform float uAmplitude;\n      uniform float uJitter;\n      uniform float uMaxHeight;\n\n      vec2 hash2(vec2 p) {\n        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\n        return fract(sin(p) * 43758.5453123) - 0.5;\n      }").replace("#include <begin_vertex>","#include <begin_vertex>\n\n      vHeight = 0.0;\n\n      if (position.y > 0.0) {\n        vec2 jitter = hash2(aOffset) * uJitter;\n        vec2 worldXZ = aOffset + jitter;\n        float waveHeight = 0.0;\n        float totalWeight = 0.0;\n        float strongestWave = 0.0;\n\n        for (int i = 0; i < uTrailCount; i++) {\n          vec4 td = texture2D(uTrailTexture, vec2((float(i) + 0.5) / 128.0, 0.5));\n          float dist = length(worldXZ - td.rg);\n          float wavefront = uWaveSpeed * td.b;\n          float relDist = dist - wavefront;\n          float window = exp(-(relDist * relDist) / (uWaveWidth * uWaveWidth));\n          float fade = exp(-td.b / uFadeTime);\n          float atten = 1.0 / (1.0 + dist * 0.1);\n          float weight = fade * window * atten * td.a;\n\n          waveHeight += weight * cos(uWaveFreq * relDist);\n          totalWeight += weight;\n          strongestWave = max(strongestWave, td.a);\n        }\n\n        waveHeight /= max(totalWeight, 1.0);\n        waveHeight *= strongestWave;\n\n        float displacement = clamp(waveHeight * uAmplitude, -uMaxHeight, uMaxHeight);\n        transformed.y += displacement;\n        vHeight = displacement;\n      }")}function S(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let t=e.current;if(t)try{var i;let e=new a.Z58;e.background=new a.Q1f("#f8fafc");let r=new n.JeP({antialias:!0,canvas:t});r.toneMapping=a.FV,r.toneMappingExposure=2.12,r.shadowMap.enabled=!0,r.shadowMap.type=a.QP0,r.setClearColor("#f8fafc");let s=new a.ubm(40,1,.1,200);s.up.set(0,0,-1),e.add(s);let o=new a.$p8("#ffffff",1.2);e.add(o);let l=new a.ZyN("#ffffff",4);l.position.set(-20,10,6),l.castShadow=!0,l.shadow.mapSize.set(512,512),l.shadow.radius=10,l.shadow.camera.near=.1,l.shadow.camera.far=60,l.shadow.camera.left=-22,l.shadow.camera.right=22,l.shadow.camera.top=22,l.shadow.camera.bottom=-22,l.shadow.bias=1e-4,e.add(l);let d=new a.ZyN("#ffffff",1);d.position.set(10,5,-3),e.add(d);let h=window.innerWidth<768?32:40,f=h*h,u=new a.iNn(.8,3,.8),g=new a.uWO(new Float32Array(2*f),2);u.setAttribute("aOffset",g);let p=[],m=new Float32Array(512),S=new a.GYF(m,128,1,a.GWd,a.RQf);S.needsUpdate=!0;let T={value:2},M={value:0},b={value:S},P=new a.tXL({color:0xffffff});P.onBeforeCompile=e=>{e.uniforms.uTrailTexture=b,e.uniforms.uTrailCount=M,e.uniforms.uFadeTime=T,e.uniforms.uWaveSpeed={value:6},e.uniforms.uWaveFreq={value:1.2},e.uniforms.uWaveWidth={value:3},e.uniforms.uAmplitude={value:.4},e.uniforms.uJitter={value:.2},e.uniforms.uMaxHeight={value:.4},e.uniforms.uColorBase={value:new a.Q1f("#f8fafc")},e.uniforms.uColorHigh={value:new a.Q1f("#3c82f6")},e.vertexShader=C(e.vertexShader),e.fragmentShader=e.fragmentShader.replace("#include <common>","#include <common>\n          varying float vHeight;\n          uniform vec3 uColorBase;\n          uniform vec3 uColorHigh;\n          uniform float uMaxHeight;").replace("#include <color_fragment>","#include <color_fragment>\n          float t = clamp(vHeight / uMaxHeight, 0.0, 1.0);\n          diffuseColor.rgb = mix(uColorBase, uColorHigh, t);")};let A=new a.CSG;A.onBeforeCompile=e=>{e.uniforms.uTrailTexture=b,e.uniforms.uTrailCount=M,e.uniforms.uFadeTime=T,e.uniforms.uWaveSpeed={value:6},e.uniforms.uWaveFreq={value:1.2},e.uniforms.uWaveWidth={value:3},e.uniforms.uAmplitude={value:.4},e.uniforms.uJitter={value:.2},e.uniforms.uMaxHeight={value:.4},e.vertexShader=C(e.vertexShader)};let E=new a.ZLX(u,P,f);E.customDepthMaterial=A,E.castShadow=!0,E.receiveShadow=!0,e.add(E);let R=new a.B69,F=(h-1)*.81/2;for(let e=0;e<h;e+=1)for(let t=0;t<h;t+=1){let i=e*h+t,r=.81*e-F,s=.81*t-F;R.position.set(r,0,s),R.updateMatrix(),E.setMatrixAt(i,R.matrix),g.setXY(i,r,s)}E.instanceMatrix.needsUpdate=!0,g.needsUpdate=!0;let N=new v(r);N.addPass(new _(e,s));let D=new c(x);N.addPass(D),N.addPass(new w);let L=new a.I9Y(0,0),y=new a.I9Y(0,0),W=new a.Zcv(new a.Pq0(0,1,0),0),O=new a.tBo,k=new a.Pq0,I=0,U=performance.now(),B=.6,H=0,G="visible"===document.visibilityState,Q=document.querySelector("[data-landing-scroll-root]"),z=document.querySelector(".sticky-flow"),q=window.matchMedia("(max-width: 767px)"),j=null!=(i=null==Q?void 0:Q.clientHeight)?i:window.innerHeight,X=()=>{Q&&z&&(j=Q.scrollTop+z.getBoundingClientRect().top-Q.getBoundingClientRect().top)},Y=()=>{if(!Q)return!1;if(q.matches){let e=Math.max(1,j-Q.clientHeight+1);return Q.scrollTop>=e}return Q.scrollTop>=.95*Q.clientHeight};X();let V=Y();t.classList.toggle("wave-grid-background--content",V),D.uniforms.shiftAmount.value=.004*!V;let Z=()=>{var e,t;let i=(H+=1)%3==0?1.15:.85;e=y.x,t=y.y,p.length>=128&&p.shift(),p.push({age:0,distDelta:i,x:e,z:t})},J=()=>{let e=window.innerWidth,t=window.innerHeight,i=Math.min(window.devicePixelRatio,1.35);r.setSize(e,t),r.setPixelRatio(i),N.setSize(e,t),N.setPixelRatio(i),s.aspect=e/t,s.updateProjectionMatrix()},K=()=>{if(!Q)return;let e=Y();e!==V&&(V=e,t.classList.toggle("wave-grid-background--content",V),D.uniforms.shiftAmount.value=.004*!V,U=performance.now(),p.length=0,M.value=0,B=0,V||(H=0,et(),Z()))},$=()=>{X(),K(),J(),ee(),et()},ee=()=>{s.position.set(0,12,0),s.lookAt(0,0,0),s.updateMatrixWorld()},et=()=>{let e=document.querySelector("[data-wave-origin]");if(!e)return void y.set(0,0);let t=e.getBoundingClientRect(),i=t.left+t.width/2,r=t.top+t.height/2;L.set(i/window.innerWidth*2-1,-(2*(r/window.innerHeight))+1),O.setFromCamera(L,s),O.ray.intersectPlane(W,k)&&y.set(k.x,k.z)},ei=e=>{try{let t=Math.min((e-U)/1e3,.05);U=e,G&&!V&&(ee(),(e=>{let t=4*T.value;for(let i=p.length-1;i>=0;i-=1)p[i].age+=e,p[i].age>t&&p.splice(i,1);(B+=e)>=1.1&&(Z(),B=0);let i=Math.min(p.length,128);for(let e=0;e<i;e+=1){let t=4*e;m[t]=p[e].x,m[t+1]=p[e].z,m[t+2]=p[e].age,m[t+3]=p[e].distDelta}S.needsUpdate=!0,M.value=i})(t),N.render()),I=window.requestAnimationFrame(ei)}catch(e){console.warn("Wave grid background disabled after a render error.",e)}},er=()=>{G="visible"===document.visibilityState,U=performance.now()};return J(),ee(),et(),Z(),window.addEventListener("resize",$),document.addEventListener("visibilitychange",er),null==Q||Q.addEventListener("scroll",K,{passive:!0}),I=window.requestAnimationFrame(ei),()=>{window.cancelAnimationFrame(I),window.removeEventListener("resize",$),document.removeEventListener("visibilitychange",er),null==Q||Q.removeEventListener("scroll",K),t.classList.remove("wave-grid-background--content"),N.dispose(),r.dispose(),u.dispose(),P.dispose(),A.dispose(),S.dispose()}}catch(e){console.warn("Wave grid background disabled.",e);return}},[]),(0,r.jsx)("canvas",{ref:e,"aria-hidden":!0,className:"wave-grid-background"})}}}]);