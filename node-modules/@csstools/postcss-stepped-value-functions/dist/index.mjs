import e from"postcss-value-parser";function t(t,o,r,u){const a=[];let s=!1;if(t.nodes.forEach((e=>{"word"!==e.type?function(e){return"function"===e.type&&"var"===e.value.toLowerCase()}(e)&&(s=!0):a.push(e)})),s)return void n(o,r,`Failed to transform ${o.value} as variables can't be processed.`,u);if(2!==a.length)return void n(o,r,`Failed to transform ${o.value} as it's expecting 2 arguments instead of ${a.length}`,u);const i=e.unit(a[0].value),l=e.unit(a[1].value);if(i&&l){if(i.unit===l.unit)return[i,l];n(o,r,`Failed to transform ${o.value} as the units don't match`,u)}}function n(e,t,n,o){"warn"===o.onInvalid&&e.warn(t,n)}function o(e){delete e.nodes;const t=e;return t.type="word",t}var r;!function(e){e.Nearest="nearest",e.Up="up",e.Down="down",e.ToZero="to-zero"}(r||(r={}));const u=/^[a-z|-]+$/i;const a=a=>{const s=Object.assign({preserve:!1,onInvalid:""},a);return{postcssPlugin:"postcss-stepped-value-functions",Declaration(a,{result:i}){const l=["mod(","rem(","round("].some((e=>a.value.toLowerCase().includes(e)));if(!a||!l)return;const c=a.clone();if(c.value.toLowerCase().includes("mod(")){const n=function(n,r,u){const a=e(n.value);return a.walk((e=>{if("function"!==e.type||"mod"!==e.value.toLowerCase())return;const a=t(e,n,r,u);if(!a)return;const[s,i]=a,l=Number(s.number),c=Number(i.number),v=(l%c+c)%c;"number"!=typeof v||isNaN(v)||(o(e).value=0===v?"0":`${v}${s.unit}`)}),!0),a.toString()}(c,i,s);n&&(c.value=n)}if(c.value.toLowerCase().includes("rem(")){const n=function(n,r,u){const a=e(n.value);return a.walk((e=>{if("function"!==e.type||"rem"!==e.value.toLowerCase())return;const a=t(e,n,r,u);if(!a)return;const[s,i]=a,l=Number(s.number)%Number(i.number);("number"==typeof l||isNaN(l))&&(o(e).value=0===l?"0":`${l}${s.unit}`)}),!0),a.toString()}(c,i,s);n&&(c.value=n)}if(c.value.toLowerCase().includes("round(")){const t=function(t,a,s){const i=e(t.value);return i.walk((i=>{if("function"!==i.type||"round"!==i.value.toLowerCase())return;if(3!==i.nodes.length&&5!==i.nodes.length)return void n(t,a,`Failed to transform ${t.value} as the amount of arguments isn't valid`,s);const l=i.nodes.filter((e=>"word"===e.type)),c=l[0].value;let v,d,f;if(u.test(c.toLowerCase())){var m,p;if(!Object.values(r).includes(c.toLowerCase()))return void n(t,a,`Failed to transform ${t.value} as ${c} is not a valid rounding strategy.`,s);v=c.toLowerCase(),d=e.unit((null==l||null==(m=l[1])?void 0:m.value)||""),f=e.unit((null==l||null==(p=l[2])?void 0:p.value)||"")}else{var b,w;v=r.Nearest,d=e.unit((null==l||null==(b=l[0])?void 0:b.value)||""),f=e.unit((null==l||null==(w=l[1])?void 0:w.value)||"")}if(!d||!f)return;if(d.unit!==f.unit)return void n(t,a,`Failed to transform ${t.value} as the units don't match`,s);const h=Number(d.number),N=Number(f.number);let $;switch(v){case r.Down:$=Math.floor(h/N)*N;break;case r.Up:$=Math.ceil(h/N)*N;break;case r.ToZero:$=Math.trunc(h/N)*N;break;case r.Nearest:default:$=Math.round(h/N)*N}"number"!=typeof $||isNaN($)||(o(i).value=0===$?"0":`${$}${d.unit}`)}),!0),i.toString()}(c,i,s);t&&(c.value=t)}a.value!==c.value&&(a.before(c),s.preserve||a.remove())}}};a.postcss=!0;export{a as default};