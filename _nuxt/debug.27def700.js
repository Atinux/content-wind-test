import{r as a}from"./runtime-core.esm-bundler.266f19db.js";function d(t){let o=[],i=!1;const s=(u,r)=>{const{loc:e}=r,n=[`🔑 ${u}`];e!=null&&e.file&&(n.push(""),n.push(`🔗 ${e.file}`)),e!=null&&e.type&&(n.push(""),n.push(`❓ Missing token inside a ${e.type==="v"?"variant":"computed style or CSS prop"}.`)),o.push(n.join(`
`)),i||(a(()=>{console.log("🖌️ Pinceau `runtime` encountered some errors!"),o.forEach(l=>{console.log(l)}),console.log("‼️ This warning will be hidden from production and can be disabled using `dev: false` option.")}),i=!0)};t.onNotFound=s}export{d as usePinceauRuntimeDebug};
