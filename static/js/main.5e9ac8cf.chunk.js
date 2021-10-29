(this["webpackJsonpghost-hunters-almanac"]=this["webpackJsonpghost-hunters-almanac"]||[]).push([[0],{78:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(29),s=n.n(r),o=(n(78),n(107)),c=n(112),l=n(92),h=n(111),u=n(113),d=n(114),p=n(11),g=n(15),m=n(106),b={small:["Bleasdale Farmhouse","Edgefield Street House","Grafton Farmhouse","Ridgeview Road House","Tanglewood Street House","Willow Street House"],medium:["Brownstone High School","Prison","Maple Lodge Campsite"],large:["Asylum"],difficulties:["Amateur","Intermediate","Professional","Nightmare"]},j=n(47),f=n(48),y=n(105),w=function(){function e(t){Object(j.a)(this,e),this.subject=void 0,this.subject=new y.a(t)}return Object(f.a)(e,[{key:"set",value:function(e){this.subject.next(e)}},{key:"get",value:function(){return this.subject.value}}]),e}(),v=n(115),O=function(e,t){var n,i=function(e){var t=Object(v.a)([e]),n=Object(p.a)(t,2),i=n[0],r=n[1];return[Object(a.useMemo)((function(){return i[e]}),[i,e]),Object(a.useCallback)((function(t){return r(e,t)}),[e,r])]}(t),r=Object(p.a)(i,2),s=r[0],o=r[1],c=(n=null!==s&&void 0!==s?s:e,Object(a.useRef)(new w(n)).current);return Object(a.useEffect)((function(){var e=c.subject.subscribe((function(e){o(e)}));return function(){return e.unsubscribe()}}),[o,c]),c},x=n(14),k=n(110),_=n(117),T=n(12),S=n(9),F=n(3),M=function(e){var t=e.sharedState,n=e.maps,i=e.title,r=function(e){var t=Object(a.useState)(e.get()),n=Object(p.a)(t,2),i=n[0],r=n[1];return Object(a.useEffect)((function(){var t=e.subject.subscribe((function(e){return r(e)}));return function(){return t.unsubscribe()}}),[e,r]),[i,Object(a.useCallback)((function(t){e.set(t)}),[e])]}(t),s=Object(p.a)(r,2),o=s[0],c=s[1],h=Object(a.useMemo)((function(){var e,t=0,a=Object(x.a)(n);try{for(a.s();!(e=a.n()).done;){var i=e.value;o.includes(i)&&t++}}catch(r){a.e(r)}finally{a.f()}return[t===n.length,t>0]}),[n,o]),u=Object(p.a)(h,2),d=u[0],g=u[1];return Object(F.jsxs)(l.a,{direction:"row",gap:"small",pad:"small",children:[Object(F.jsx)(k.a,{checked:d,indeterminate:!d&&g,onChange:function(e){e.stopPropagation(),e.preventDefault(),function(){if(d){var e,t=o.slice(),a=Object(x.a)(n);try{for(a.s();!(e=a.n()).done;){var i=e.value,r=t.indexOf(i);r>=0&&t.splice(r,1)}}catch(p){a.e(p)}finally{a.f()}c(t)}else{var s,l=o.slice(),h=Object(x.a)(n);try{for(h.s();!(s=h.n()).done;){var u=s.value;l.includes(u)||l.push(u)}}catch(p){h.e(p)}finally{h.f()}c(l)}}()}}),Object(F.jsx)(_.a,{dropAlign:{top:"bottom"},dropProps:{round:"small"},dropContent:Object(F.jsx)(l.a,{direction:"column",pad:"small",gap:"small",background:"dark-1",children:n.map((function(e){return Object(F.jsx)(k.a,{checked:o.includes(e),onChange:function(){return function(e){var t=o.slice(),n=t.indexOf(e);n>=0?(t.splice(n,1),c(t)):(t.push(e),c(t))}(e)},label:e},e)}))}),children:Object(F.jsxs)(l.a,{direction:"row",align:"center",justify:"center",gap:"small",border:{side:"bottom"},children:[i,Object(F.jsx)(T.a,{icon:S.c})]})})]})},G=function(){var e=O([].concat(Object(g.a)(b.small),Object(g.a)(b.medium),Object(g.a)(b.large)),"selectedMaps"),t=O(Object(g.a)(b.difficulties),"selectedDifficulties"),n=Object(a.useState)(!1),i=Object(p.a)(n,2),r=i[0],s=i[1];Object(a.useEffect)((function(){var t=e.subject.subscribe((function(e){s(0===e.length)}));return function(){return t.unsubscribe()}}),[e,s]);var o=Object(a.useState)(void 0),c=Object(p.a)(o,2),u=c[0],d=c[1],j=Object(a.useState)(void 0),f=Object(p.a)(j,2),y=f[0],w=f[1];return Object(F.jsxs)(l.a,{gap:"medium",align:"center",children:[Object(F.jsxs)(l.a,{direction:"row",wrap:!0,children:[Object(F.jsx)(M,{sharedState:e,maps:b.small,title:"Small"}),Object(F.jsx)(M,{sharedState:e,maps:b.medium,title:"Medium"}),Object(F.jsx)(M,{sharedState:e,maps:b.large,title:"Large"}),Object(F.jsx)(M,{sharedState:t,maps:b.difficulties,title:"Difficulty"})]}),Object(F.jsxs)(l.a,{children:[Object(F.jsx)(m.a,{primary:!0,disabled:r,label:Object(F.jsxs)(l.a,{direction:"row",align:"center",justify:"center",gap:"small",children:[Object(F.jsx)(h.a,{children:"Randomize"}),Object(F.jsx)(T.a,{icon:S.e})]}),onClick:function(){return function(){var n=e.get();if(n.length>0){var a;do{a=n[Math.floor(Math.random()*n.length)]}while(u===a);d(a)}var i=t.get();if(i.length>0){var r=i[Math.floor(Math.random()*i.length)];w(r)}else w(void 0)}()}}),r&&Object(F.jsx)(h.a,{color:"status-error",size:"small",children:"Please select at least 1 map"})]}),void 0!==u&&Object(F.jsxs)(l.a,{round:"small",align:"center",justify:"center",pad:{vertical:"xsmall",horizontal:"small"},border:{size:"1px"},background:"accent-2",width:{min:"300px"},children:[Object(F.jsx)(h.a,{children:u}),y&&Object(F.jsxs)(h.a,{children:["on ",y]})]})]})},W=n(102),A=function(e){var t=e.icon,n=e.label,a=e.link;return Object(F.jsxs)(l.a,{direction:"row",align:"center",gap:"xsmall",onClick:function(){return window.open(a,"_blank")},children:[t,Object(F.jsx)(h.a,{weight:"bold",children:n})]})},z=n(67),C=function(){return Object(F.jsx)(W.a,{background:"dark-1",pad:"small",justify:"end",children:Object(F.jsx)(A,{icon:Object(F.jsx)(T.a,{icon:z.a}),label:"GitHub",link:"https://github.com/smilligan93/ghost-hunters-almanac"})})},P=n(103),B=function(e){return e.replaceAll("_"," ")},E=function(e){switch(e){case"EMF_Level_5":return S.h;case"DOTS_Projector":return S.k;case"Fingerprints":return S.f;case"Ghost_Orb":return S.d;case"Ghost_Writing":return S.b;case"Freezing_Temperature":return S.i;case"Spirit_Box":return S.g}},D=[{type:"Banshee",evidence:["Fingerprints","DOTS_Projector","Ghost_Orb"],description:"A Banshee is a natural hunter and will attack anything. It has been known to stalk its prey one at a time until making its kill.",strength:"A Banshee will only target one person at a time.",weakness:"Banshees fear the Crucifix and will be less aggressive when near one.",tips:["Will only target one player at a time","Initiates hunts at <50% sanity if the target is outside","Initiates hunts as early as 80% sanity if the target is inside","Can navigate to a location near its target and start a hunt when the target has been visible for 20 seconds"]},{type:"Demon",evidence:["Fingerprints","Ghost_Writing","Freezing_Temperature"],description:"A Demon is one of the worst Ghosts you can encounter. It has been known to attack without a reason.",strength:"Demons are the most aggressive ghosts and will begin Hunts more often.",weakness:"Asking a Demon successful questions on the Ouija Board will drain less sanity.",tips:["Initiates hunts at <70% sanity","Successful Ouija Board questions will not lower your sanity as much as other ghosts","Failed Ouija Board questions will lower sanity as much as other ghosts"]},{type:"Goryo",evidence:["EMF_Level_5","Fingerprints","DOTS_Projector"],description:"When a Goryo passes through a DOTS projector, using a video camera is the only way to see it.",strength:"Goryo will usually only show itself on camera when there are no people nearby.",weakness:"Goryo are rarely seen far from their place of death.",tips:["Unlikely to roam when they are not hunting","DOTS can only be seen through a video camera","Can be seen manifesting normally during ghost events and hunts"]},{type:"Hantu",evidence:["Fingerprints","Ghost_Orb","Freezing_Temperature"],description:"A rare ghost that can be found in hot climates. They are known to attack more often in cold weather",strength:"Lower temperatures allow the Hantu to move at faster speeds.",weakness:"Hantus move slower in warmer areas",tips:["Runs much faster through cold rooms (1.8 m/s) than through warm rooms (1.0 m/s)","Keeping the breaker on will keep temperatures up, slowing the Hantu down"]},{type:"Jinn",evidence:["EMF_Level_5","Fingerprints","Freezing_Temperature"],description:"A Jinn is a territorial Ghost that will attack when threatened. It also has been known to travel at significant speed.",strength:"A Jinn will travel at a faster speed if its victim is far away.",weakness:"Turning off the location's power source will prevent the Jinn from using its ability.",tips:["Runs much faster (2.0 m/s) when chasing a player that is far away","Can lower sanity of all players within range by 25%","Cannot use abilities if the fuse box is turned off"]},{type:"Mare",evidence:["Spirit_Box","Ghost_Orb","Ghost_Writing"],description:"A Mare is the source of all nightmares, making it most powerful in the dark.",strength:"A Mare will have an increased chance to attack in the dark.",weakness:"Turning the lights on around the Mare will lower its chance to attack.",tips:["Initiates hunts as early as 60% sanity if lights are off","Will not hunt until 40% sanity if lights are on","Cannot turn lights on"]},{type:"Myling",evidence:["EMF_Level_5","Fingerprints","Ghost_Writing"],description:"A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.",strength:"A Myling is known to be quieter when hunting.",weakness:"Mylings more frequently make paranormal sounds.",tips:["Can be heard frequently on the parabolic microphone","During a hunt, a Myling's footsteps will only be heard when the ghost is close enough to glitch electronics"]},{type:"Obake",evidence:["EMF_Level_5","Fingerprints","Ghost_Orb"],description:"Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen taking on humanoid shapes to attract their prey.",strength:"When interacting with the environment, an Obake will rarely leave a trace.",weakness:"Sometimes this ghost will shapeshift, leaving behind unique evidence.",tips:["Fingerprints may appear with 6 fingers instead of 5","Number of fingers can change between fingerprints","When interacting with an object, an Obake will sometimes place it back to its original position"]},{type:"Oni",evidence:["EMF_Level_5","Freezing_Temperature","DOTS_Projector"],description:"Onis are a cousin to the Demon and possess extreme strength. There have been rumors that they become more active around their prey.",strength:"Oni are more active when people are nearby and have been seen moving objects at great speed.",weakness:"Being more active will make the Oni easier to find and identify.",tips:["Much more active when people are nearby","Will often throw objects across the room"]},{type:"Onryo",evidence:["Spirit_Box","Ghost_Orb","Freezing_Temperature"],description:'The Onryo is often referred to as "The Wrathful Spirit." It steals souls from dying victims\' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.',strength:"Extinguishing a flame can cause an Onryo to attack.",weakness:"When threatened, this ghost will be less likely to attack.",tips:["Can hunt at any sanity if a flame is extinguished nearby","Will not leave the room if there is an open flame","Everything changed when the fire nation attacked"]},{type:"Phantom",evidence:["Spirit_Box","Fingerprints","DOTS_Projector"],description:"A Phantom is a Ghost that can possess the living, most commonly summoned by a Ouija Board. It also induces fear into those around it.",strength:"Looking at a Phantom will considerably drop your sanity.",weakness:"Taking a photo of the Phantom will make it temporarily disappear.",tips:["When a photo is taken of the phantom, it will disappear","During a hunt, phantoms will flash every 1-2 seconds as opposed to every 0.3-1 seconds","Looking at a phantom will reduce sanity by 0.4% per second, as opposed to 0.2% per second"]},{type:"Poltergeist",evidence:["Spirit_Box","Ghost_Writing","Fingerprints"],description:"One of the most famous Ghosts, a Poltergeist, also known as a noisy ghost can manipulate objects around it to spread fear into it's victims.",strength:"Poltergeists can throw multiple objects at once.",weakness:"With nothing to throw, Poltergeists become powerless.",tips:["If a player is nearby when an item is thrown, sanity will decrease","Multiple items can be thrown at the same time"]},{type:"Raiju",evidence:["EMF_Level_5","Ghost_Orb","DOTS_Projector"],description:"A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.",strength:"A Raiju can siphon power from nearby electrical devices, making it move faster.",weakness:"Raiju are constantly disrupting electronic equipment, making it easier to track when attacking.",tips:["While hunting, electronic devices (that are turned on) will increase the Raiju's movement speed (applies to items in the players hand or on the floor)","When near activated electronic equipment, the Raiju can hunt at <70% sanity"]},{type:"Revenant",evidence:["Ghost_Orb","Ghost_Writing","Freezing_Temperature"],description:"A Revenant is a slow but violent Ghost that will attack indiscriminately. It has been rumored to travel at a significantly high speed when hunting.",strength:"A Revenant will travel at a significantly faster speed when hunting their prey.",weakness:"Hiding from the Revenant will cause it to move very slowly.",tips:["Roams at 0.5x speed when hunting, runs at 2x speed when chasing a player"]},{type:"Shade",evidence:["EMF_Level_5","Ghost_Writing","Freezing_Temperature"],description:"A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are multiple people nearby.",strength:"Shades are much harder to find.",weakness:"The ghost will not enter a hunt if there are multiple people nearby.",tips:["Ghost Activity and Events occur less when multiple players are in the room with it","Chance of hunting reduces when multiple players are in the room with it"]},{type:"Spirit",evidence:["EMF_Level_5","Spirit_Box","Ghost_Writing"],description:"Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.",strength:"N/a",weakness:"A Spirit can be temporarily stopped by burning Smudge Sticks near them.",tips:["Cannot initiate a hunt within 180 seconds of using Smudge Sticks (compared to 90 seconds with most other ghosts)"]},{type:"The_Twins",evidence:["EMF_Level_5","Spirit_Box","Freezing_Temperature"],description:"These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey.",strength:"Either Twin can be angered and initiate an attack on their prey.",weakness:"The Twins will often interact with the environment at the same time.",tips:["When not hunting, they can move separately and interact with the environment on their own or at the same time",'There is a "Main" Twin, which primarily remains in the Ghost Room (creates Freezing Temperatures and responds to Spirit Box)',"The Other Twin cannot set off motion sensors, cannot respond to Spirit Box, nor spread Freezing Temperatures","The Other Twin can create EMF Level 5 events","Either Twin can initiate a Hunt"]},{type:"Wraith",evidence:["EMF_Level_5","Spirit_Box","DOTS_Projector"],description:"A wraith is one of the most dangerous Ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.",strength:"Wraiths almost never touch the ground, meaning it can't be tracked by footsteps.",weakness:"Wraiths have a toxic reaction to Salt.",tips:["When not hunting, a Wraith can teleport to within 3 meters of a random player, generating an EMF Level 2 reading (25% chance to be EMF Level 5)","Will not leave UV Footprints after stepping in salt (it will show the imprint in the salt)"]},{type:"Yokai",evidence:["Spirit_Box","Ghost_Orb","DOTS_Projector"],description:"A common type of ghost that is attracted to human voices. They can usually be found haunting family homes.",strength:"Talking near a Yokai will anger it, increasing the chance of an attack.",weakness:"When hunting, a Yokai can only hear voices close to it.",tips:["Talking near a Yokai can cause it hunt at <80% sanity compared to normal (<50% sanity)","When hunting, a Yokai can only hear voices within 2 meters of it"]},{type:"Yurei",evidence:["Ghost_Orb","Freezing_Temperature","DOTS_Projector"],description:"A Yurei is a Ghost that has returned to the physical world, usually for the purpose of revenge or hatred.",strength:"Yurei have been known to have a stronger effect on people sanity.",weakness:"Smudging the Yurei's place of death will trap it temporarily, reducing how much it wanders.",tips:["Player's sanity drops faster (0.4% per second) during a ghost event or hunt, compared to most other ghosts (0.2% per second)","No special effects to sanity outside of ghost events or hunts","Using smudge sticks will cause a Yurei to roam for 90 seconds"]}],L=n(119),R=n(109),H=function(e){var t=e.ghosts;return Object(F.jsx)(l.a,{align:"center",width:"600px",margin:{bottom:"large"},children:Object(F.jsx)(L.a,{fill:"horizontal",children:t.map((function(e){var t,n;return Object(F.jsx)(R.a,{label:Object(F.jsxs)(l.a,{direction:"row",gap:"small",pad:"small",fill:"horizontal",justify:"between",align:"center",children:[Object(F.jsx)(h.a,{weight:"bold",size:"large",children:(n=e.type,n.replaceAll("_"," "))}),Object(F.jsx)(l.a,{direction:"row",gap:"xsmall",children:e.evidence.map((function(e){return Object(F.jsx)(l.a,{width:"25px",align:"center",justify:"center",children:Object(F.jsx)(T.a,{title:B(e),size:"1x",icon:E(e)})},e)}))})]}),children:Object(F.jsxs)(l.a,{gap:"small",pad:{horizontal:"medium"},align:"center",children:[Object(F.jsx)(h.a,{size:"small",children:Object(F.jsx)("i",{children:e.description})}),Object(F.jsx)(l.a,{direction:"row",background:"accent-2",round:"xsmall",justify:"evenly",wrap:!0,border:{size:"1px",color:"dark-1"},pad:{vertical:"xsmall",horizontal:"small"},children:e.evidence.map((function(e){return Object(F.jsxs)(l.a,{margin:{horizontal:"small",vertical:"xxsmall"},direction:"row",align:"center",gap:"xsmall",children:[Object(F.jsx)(h.a,{children:B(e)}),Object(F.jsx)(T.a,{icon:E(e)})]},e)}))}),Object(F.jsxs)(l.a,{direction:"column",align:"start",fill:"horizontal",children:[Object(F.jsx)("b",{children:"Strengths"}),Object(F.jsx)(h.a,{children:Object(F.jsx)("i",{children:e.strength})}),Object(F.jsx)("br",{}),Object(F.jsx)("b",{children:"Weaknesses"}),Object(F.jsx)(h.a,{children:Object(F.jsx)("i",{children:e.weakness})}),Object(F.jsx)("br",{}),Object(F.jsx)("b",{children:"Tips and Strategies"}),Object(F.jsx)("ul",{style:{marginTop:"2px"},children:null===(t=e.tips)||void 0===t?void 0:t.map((function(e){return Object(F.jsx)("li",{children:e},e)}))})]}),Object(F.jsx)(l.a,{pad:{bottom:"small"},children:Object(F.jsx)(m.a,{label:Object(F.jsxs)(l.a,{direction:"row",gap:"small",align:"center",justify:"between",children:[Object(F.jsx)(h.a,{children:"Wiki Page"}),Object(F.jsx)(T.a,{icon:S.a})]}),onClick:function(){return window.open("https://phasmophobia.fandom.com/wiki/".concat(e.type),"_blank")}})})]})},e.type)}))})})},I=function(){var e=Object(a.useMemo)((function(){var e,t=[],n=Object(x.a)(D);try{for(n.s();!(e=n.n()).done;){var a,i=e.value,r=Object(x.a)(i.evidence);try{for(r.s();!(a=r.n()).done;){var s=a.value;t.includes(s)||t.push(s)}}catch(o){r.e(o)}finally{r.f()}}}catch(o){n.e(o)}finally{n.f()}return t.sort((function(e,t){return e.localeCompare(t)})),t}),[]),t=Object(a.useState)([]),n=Object(p.a)(t,2),i=n[0],r=n[1],s=Object(a.useMemo)((function(){return D.filter((function(e){return i.reduce((function(t,n){return t&&e.evidence.includes(n)}),!0)}))}),[i]),o=Object(a.useMemo)((function(){var e,t=new Set,n=Object(x.a)(s);try{for(n.s();!(e=n.n()).done;){var a,i=e.value,r=Object(x.a)(i.evidence);try{for(r.s();!(a=r.n()).done;){var o=a.value;t.add(o)}}catch(c){r.e(c)}finally{r.f()}}}catch(c){n.e(c)}finally{n.f()}return Array.from(t.values())}),[s]);return Object(F.jsxs)(l.a,{align:"center",children:[Object(F.jsx)(l.a,{direction:"row",wrap:!0,align:"center",justify:"center",margin:{bottom:"small"},width:{max:"1000px"},children:e.map((function(e){return Object(F.jsx)(l.a,{pad:"small",children:Object(F.jsx)(k.a,{label:Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(h.a,{weight:"bold",style:o.includes(e)?void 0:{textDecoration:"line-through"},children:[e.replaceAll("_"," "),"\xa0"]}),Object(F.jsx)(T.a,{icon:E(e)})]}),disabled:!o.includes(e),checked:i.includes(e),onChange:function(t){if(t.target.checked&&!i.includes(e))r([].concat(Object(g.a)(i),[e]));else{var n=Object(g.a)(i),a=n.indexOf(e);a>=0&&(n.splice(a,1),r(n))}}})},e)}))}),Object(F.jsx)(m.a,{primary:!0,onClick:function(){return r([])},title:"Clear enabled evidences",label:Object(F.jsxs)(l.a,{width:"100px",direction:"row",justify:"center",align:"center",children:[Object(F.jsx)(h.a,{children:"Clear"}),"\xa0\xa0",Object(F.jsx)(T.a,{icon:S.j})]})}),Object(F.jsx)(l.a,{fill:"vertical",overflow:"auto",margin:{top:"small"},children:Object(F.jsx)(H,{ghosts:s})})]})},q={global:{colors:{brand:"#e02401","accent-1":"#f78812","accent-2":"#ab6d23","accent-3":"#51050f"}}};var Y=function(){return Object(F.jsx)(P.a,{children:Object(F.jsx)(o.a,{full:!0,background:"dark-2",theme:q,children:Object(F.jsxs)(c.a,{rows:["auto","flex","auto"],columns:["auto"],fill:"vertical",children:[Object(F.jsx)(l.a,{pad:"small",align:"center",background:"dark-1",direction:"row",justify:"center",children:Object(F.jsx)(h.a,{size:"xlarge",children:Object(F.jsx)("i",{children:"Ghost Hunter's Almanac"})})}),Object(F.jsx)(l.a,{align:"center",pad:"large",overflow:"auto",children:Object(F.jsxs)(u.a,{children:[Object(F.jsx)(d.a,{title:"Random Map",children:Object(F.jsx)(l.a,{pad:{top:"small"},children:Object(F.jsx)(G,{})})}),Object(F.jsx)(d.a,{title:"Ghost Helper",children:Object(F.jsx)(l.a,{pad:{top:"small"},children:Object(F.jsx)(I,{})})})]})}),Object(F.jsx)(C,{})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(Y,{})}),document.getElementById("root")),J()}},[[90,1,2]]]);
//# sourceMappingURL=main.5e9ac8cf.chunk.js.map