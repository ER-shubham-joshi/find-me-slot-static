(this["webpackJsonpfind-me-slot"]=this["webpackJsonpfind-me-slot"]||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),s=(a(102),a(50)),o=a(14),l=a(13),d=a.n(l),u=a(19),j=a(11),b=a(150),p=a(155),h=a(161),m=a(157),x=a(156),g=a(149),O=a(153),f=a(151),v=a(75),y=a(148),w=a(152),k=a(147),S=a(172),C=a(154),N=a(171),T=a(158),I=a(175),D=a(169),A=a(177),B=a(173),P=a(162),F=a(163),W=a(77),M=a(164),G=a(165),q=a(166),J=a(167),_=a(168),H=(a(104),a(2));function V(){return Object(H.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(H.jsx)(k.a,{color:"inherit",href:"/",children:"findmeslot"})," ",(new Date).getFullYear(),"."]})}var Y=Object(y.a)((function(e){return{toolbarTitle:{flexGrow:1},icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1,padding:"5% 10%"},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},slotContent:{textAlign:"center"}}}));function z(){var e=Object(o.f)(),t=Object(n.useState)(""),a=Object(j.a)(t,2),c=a[0],i=a[1];window.localStorage.getItem("isAuthenticated")&&"false"!==window.localStorage.getItem("isAuthenticated")||e.push("/login");var s=Y(),l=Object(n.useState)(!1),y=Object(j.a)(l,2),k=y[0],z=y[1],R=Object(n.useState)([]),E=Object(j.a)(R,2),L=E[0],U=E[1],K=Object(n.useState)([]),Q=Object(j.a)(K,2),X=Q[0],Z=Q[1],$=Object(n.useState)([]),ee=Object(j.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(j.a)(ne,2),ce=re[0],ie=re[1],se=Object(n.useState)(""),oe=Object(j.a)(se,2),le=oe[0],de=oe[1],ue=Object(n.useState)(""),je=Object(j.a)(ue,2),be=je[0],pe=je[1],he=Object(n.useState)(""),me=Object(j.a)(he,2),xe=me[0],ge=me[1],Oe=Object(n.useState)(""),fe=Object(j.a)(Oe,2),ve=fe[0],ye=fe[1],we=Object(n.useState)(!1),ke=Object(j.a)(we,2),Se=ke[0],Ce=ke[1];Object(n.useEffect)((function(){Te(),Ne()}),[]);var Ne=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,r,c,s,o,l,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/getDataForUI/subscriptionInfo");case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,t.ok){e.next=10;break}return i(a.message),e.abrupt("return");case 10:i(""),n=a.data,r=n.email,c=n.stateId,s=n.districtId,o=n.pincode,l=n.age,u=n.subscribed,ye(r),c&&Ae(c),de(s||""),ie(c||""),pe(o||""),ge(l||""),z(u),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),i(e.t0.message);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}(),Te=function(){var t=Object(u.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/getDataForUI/states");case 3:return a=t.sent,t.next=6,a.json();case 6:if(n=t.sent,a.ok){t.next=11;break}return i(n.message),e.push("/login"),t.abrupt("return");case 11:i(""),U(n.data.states),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),i(t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}}(),Ie=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={email:ve,districtId:le,stateId:ce,pincode:be?parseInt(be):void 0,age:xe?parseInt(xe):void 0},e.next=4,fetch("/api/user/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:if(n=e.sent,a.ok){e.next=11;break}return i(n.message),e.abrupt("return");case 11:i(""),z(!0),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),i(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),De=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={email:ve},e.next=4,fetch("/api/user/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:if(n=e.sent,a.ok){e.next=11;break}return i(n.message),e.abrupt("return");case 11:i(""),z(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),i(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/getDataForUI/district?stateId=".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,a.ok){e.next=10;break}return i(n.message),e.abrupt("return");case 10:i(""),Z(n.data.districts),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),i(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),Be=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/session?districtId=".concat(le,"&age=").concat(xe,"&pincode=").concat(be));case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,t.ok){e.next=11;break}return i(a.message),ae([]),e.abrupt("return");case 11:i(""),ae(a.data),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),i(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(H.jsxs)(r.a.Fragment,{children:[Object(H.jsx)(g.a,{}),Object(H.jsx)(b.a,{position:"relative",children:Object(H.jsxs)(f.a,{children:[Object(H.jsx)(v.a,{variant:"h6",color:"inherit",noWrap:!0,className:s.toolbarTitle,children:"Find Me Slot"}),Object(H.jsx)(S.a,{label:ve,color:"primary"})]})}),Object(H.jsxs)("main",{children:[Object(H.jsx)("div",{className:s.heroContent,children:Object(H.jsxs)(w.a,{maxWidth:"lg",children:[Object(H.jsx)(v.a,{component:"h1",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0,children:"Find next available vaccine slot"}),Object(H.jsx)(v.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0,children:"To get alerts at your email, switch on the alert."}),Object(H.jsx)("div",{className:s.heroButtons,children:Object(H.jsx)(O.a,{container:!0,spacing:2,justify:"center",children:Object(H.jsx)(O.a,{item:!0,children:Object(H.jsx)(C.a,{control:Object(H.jsx)(N.a,{checked:k,onChange:function(e){Ce(!0),k?De():Ie(),setTimeout((function(){Ce(!1)}),1e4)},name:"alert",color:"primary",disabled:Se}),label:"Alert"})})})})]})}),Object(H.jsxs)(w.a,{className:s.cardGrid,maxWidth:"lg",children:[Object(H.jsx)(O.a,{container:!0,spacing:2,justify:"center",children:Object(H.jsx)(O.a,{item:!0,xs:12,sm:12,md:4,children:Object(H.jsxs)(p.a,{className:s.card,children:[Object(H.jsx)(x.a,{className:s.cardMedia,image:"https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",title:"Image title"}),Object(H.jsxs)(m.a,{className:s.cardContent,children:[Object(H.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Vaccine slot"}),Object(H.jsxs)(T.a,{variant:"outlined",className:"formControl",children:[Object(H.jsx)(I.a,{id:"state-label",children:"State"}),Object(H.jsx)(D.a,{labelId:"state-label",id:"state-select",value:ce,onChange:function(e){var t=e.target.value;ie(t),Ae(t)},label:"State",children:L&&L.map((function(e){return Object(H.jsx)(A.a,{value:e.state_id,children:e.state_name},e.state_id)}))})]}),Object(H.jsxs)(T.a,{variant:"outlined",className:"formControl",children:[Object(H.jsx)(I.a,{id:"district-label",children:"District"}),Object(H.jsx)(D.a,{labelId:"district-label",id:"district-select",value:le,onChange:function(e){var t=e.target.value;de(t)},label:"District",children:X&&X.map((function(e){return Object(H.jsx)(A.a,{value:e.district_id,children:e.district_name},e.district_id)}))})]}),Object(H.jsx)(T.a,{variant:"outlined",className:"formControl",children:Object(H.jsx)(B.a,{id:"pincode",label:"Pincode",variant:"outlined",value:be,onChange:function(e){var t=e.target.value;pe(t)}})}),Object(H.jsx)(T.a,{variant:"outlined",className:"formControl",children:Object(H.jsx)(B.a,{id:"age",label:"Age",variant:"outlined",value:xe,onChange:function(e){var t=e.target.value;ge(t)}})})]}),Object(H.jsx)(h.a,{children:Object(H.jsx)(P.a,{size:"small",color:"primary",onClick:Be,children:"Find Slots"})})]})})}),Object(H.jsx)(O.a,{container:!0,spacing:2,justify:"center",children:Object(H.jsxs)(O.a,{item:!0,xs:12,sm:12,md:12,className:s.slotContent,children:[c&&Object(H.jsx)(S.a,{label:c,color:"secondary"}),te.length>0&&Object(H.jsx)(F.a,{component:W.a,children:Object(H.jsxs)(M.a,{className:"table","aria-label":"simple table",children:[Object(H.jsx)(G.a,{children:Object(H.jsxs)(q.a,{children:[Object(H.jsx)(J.a,{children:"Center Name"}),Object(H.jsx)(J.a,{align:"right",children:"Center Address"}),Object(H.jsx)(J.a,{align:"right",children:"Pincode"}),Object(H.jsx)(J.a,{align:"right",children:"Vaccine Name"}),Object(H.jsx)(J.a,{align:"right",children:"Available Vaccines"}),Object(H.jsx)(J.a,{align:"right",children:"Age"}),Object(H.jsx)(J.a,{align:"right",children:"Date"})]})}),Object(H.jsx)(_.a,{children:te&&te.map((function(e){return Object(H.jsxs)(q.a,{children:[Object(H.jsx)(J.a,{component:"th",scope:"row",children:e.name}),Object(H.jsx)(J.a,{align:"right",children:e.address}),Object(H.jsx)(J.a,{align:"right",children:e.pincode}),Object(H.jsx)(J.a,{align:"right",children:e.vaccine}),Object(H.jsx)(J.a,{align:"right",children:e.available_capacity}),Object(H.jsx)(J.a,{align:"right",children:e.min_age_limit}),Object(H.jsx)(J.a,{align:"right",children:e.date})]},e.session_id)}))})]})})]})})]})]}),Object(H.jsxs)("footer",{className:s.footer,children:[Object(H.jsx)(v.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Save India"}),Object(H.jsx)(v.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Lets get vaccinated!"}),Object(H.jsx)(V,{})]})]})}var R=a(174),E=a(170),L=a(58),U=a.n(L);function K(){return Object(H.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(H.jsx)(k.a,{color:"inherit",href:"/",children:"findmeslot"})," ",(new Date).getFullYear(),"."]})}var Q=Object(y.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://images.unsplash.com/photo-1585559604959-6388fe69c92a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function X(){var e=Object(o.f)(),t=Q(),a=Object(n.useState)(""),r=Object(j.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(""),l=Object(j.a)(s,2),b=l[0],p=l[1],h=Object(n.useState)(""),m=Object(j.a)(h,2),x=m[0],f=m[1],y=function(){var t=Object(u.a)(d.a.mark((function t(a){var n,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,n={email:c,password:b},t.next=5,fetch("/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return r=t.sent,t.next=8,r.json();case 8:if(i=t.sent,r.ok){t.next=12;break}return f(i.message),t.abrupt("return");case 12:window.localStorage.setItem("isAuthenticated",!0),e.push("/"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(1),window.localStorage.setItem("isAuthenticated",!1),f(t.t0.message);case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(H.jsxs)(O.a,{container:!0,component:"main",className:t.root,children:[Object(H.jsx)(g.a,{}),Object(H.jsx)(O.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),Object(H.jsx)(O.a,{item:!0,xs:12,sm:8,md:5,component:W.a,elevation:6,square:!0,children:Object(H.jsxs)("div",{className:t.paper,children:[Object(H.jsx)(R.a,{className:t.avatar,children:Object(H.jsx)(U.a,{})}),Object(H.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(H.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:y,children:[Object(H.jsx)(B.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:c,onChange:function(e){return i(e.target.value)}}),Object(H.jsx)(B.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:b,onChange:function(e){return p(e.target.value)}}),Object(H.jsx)(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(H.jsx)(E.a,{mt:5,children:Object(H.jsx)(K,{})})]}),x&&Object(H.jsx)(S.a,{label:x})]})})]})}function Z(){return Object(H.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(H.jsx)(k.a,{color:"inherit",href:"/",children:"findmeslot"})," ",(new Date).getFullYear(),"."]})}var $=Object(y.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://images.unsplash.com/photo-1585635628839-39621c7033ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ee(){var e=Object(o.f)(),t=$(),a=Object(n.useState)(""),r=Object(j.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(""),l=Object(j.a)(s,2),b=l[0],p=l[1],h=Object(n.useState)(""),m=Object(j.a)(h,2),x=m[0],f=m[1],y=Object(n.useState)(""),w=Object(j.a)(y,2),k=w[0],C=w[1],N=function(){var t=Object(u.a)(d.a.mark((function t(a){var n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,n={email:b,password:x},t.next=5,fetch("/api/user/create",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(k)},body:JSON.stringify(n)});case 5:return r=t.sent,t.next=8,r.json();case 8:if(c=t.sent,r.ok){t.next=12;break}return i(c.message),t.abrupt("return");case 12:e.push("/login"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),i(t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return Object(H.jsxs)(O.a,{container:!0,component:"main",className:t.root,children:[Object(H.jsx)(g.a,{}),Object(H.jsx)(O.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),Object(H.jsx)(O.a,{item:!0,xs:12,sm:8,md:5,component:W.a,elevation:6,square:!0,children:Object(H.jsxs)("div",{className:t.paper,children:[Object(H.jsx)(R.a,{className:t.avatar,children:Object(H.jsx)(U.a,{})}),Object(H.jsx)(v.a,{component:"h1",variant:"h5",children:"Register"}),Object(H.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:N,children:[Object(H.jsx)(B.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:b,onChange:function(e){return p(e.target.value)}}),Object(H.jsx)(B.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:x,onChange:function(e){return f(e.target.value)}}),Object(H.jsx)(B.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"admin password",label:"Admin Password",type:"password",id:"adminPassword",autoComplete:"current-password",value:k,onChange:function(e){return C(e.target.value)}}),Object(H.jsx)(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Register"}),c&&Object(H.jsx)(S.a,{label:c}),Object(H.jsx)(E.a,{mt:5,children:Object(H.jsx)(Z,{})})]})]})})]})}function te(){return Object(H.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(H.jsx)(k.a,{color:"inherit",href:"/",children:"findmeslot"})," ",(new Date).getFullYear(),"."]})}var ae=Object(y.a)((function(e){return{toolbarTitle:{flexGrow:1},icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1,padding:"5% 10%"},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},slotContent:{textAlign:"center"}}}));function ne(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],i=ae(),s=Object(n.useState)(!1),o=Object(j.a)(s,2),l=o[0],h=o[1],x=Object(n.useState)(!1),y=Object(j.a)(x,2),k=y[0],I=y[1],D=Object(n.useState)(""),A=Object(j.a)(D,2),P=A[0],F=A[1];Object(n.useEffect)((function(){}),[]);var W=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/cronJob/start",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(P)},body:""});case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,t.ok){e.next=10;break}return c(a.message),e.abrupt("return");case 10:c(""),h(!0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),c(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/cronJob/stop",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(P)},body:""});case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,t.ok){e.next=10;break}return c(a.message),e.abrupt("return");case 10:c(""),h(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),c(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(H.jsxs)(r.a.Fragment,{children:[Object(H.jsx)(g.a,{}),Object(H.jsx)(b.a,{position:"relative",children:Object(H.jsx)(f.a,{children:Object(H.jsx)(v.a,{variant:"h6",color:"inherit",noWrap:!0,className:i.toolbarTitle,children:"Find Me Slot"})})}),Object(H.jsxs)("main",{children:[Object(H.jsx)("div",{className:i.heroContent,children:Object(H.jsxs)(w.a,{maxWidth:"lg",children:[Object(H.jsx)(v.a,{component:"h1",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0,children:"Job Scheduler"}),Object(H.jsx)(v.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0,children:"You can switch on/off alert job here."}),Object(H.jsx)("div",{className:i.heroButtons,children:Object(H.jsx)(O.a,{container:!0,spacing:2,justify:"center",children:Object(H.jsx)(O.a,{item:!0,children:Object(H.jsx)(C.a,{control:Object(H.jsx)(N.a,{checked:l,onChange:function(e){I(!0),l?M():W(),setTimeout((function(){I(!1)}),1e4)},name:"alert",color:"primary",disabled:k}),label:"Alert Job"})})})})]})}),Object(H.jsxs)(w.a,{className:i.cardGrid,maxWidth:"lg",children:[Object(H.jsx)(O.a,{container:!0,spacing:2,justify:"center",children:Object(H.jsx)(O.a,{item:!0,xs:12,sm:12,md:4,children:Object(H.jsx)(p.a,{className:i.card,children:Object(H.jsx)(m.a,{className:i.cardContent,children:Object(H.jsx)(T.a,{variant:"outlined",className:"formControl",children:Object(H.jsx)(B.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"admin password",label:"Admin Password",type:"password",id:"adminPassword",autoComplete:"current-password",value:P,onChange:function(e){var t=e.target.value;F(t)}})})})})})}),Object(H.jsx)(O.a,{container:!0,spacing:2,justify:"center",children:Object(H.jsx)(O.a,{item:!0,xs:12,sm:12,md:12,className:i.slotContent,children:a&&Object(H.jsx)(S.a,{label:a,color:"secondary"})})})]})]}),Object(H.jsxs)("footer",{className:i.footer,children:[Object(H.jsx)(v.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Save India"}),Object(H.jsx)(v.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Lets get vaccinated!"}),Object(H.jsx)(te,{})]})]})}var re=function(){return Object(H.jsx)(s.a,{children:Object(H.jsxs)(o.c,{children:[Object(H.jsx)(o.a,{path:"/login",children:Object(H.jsx)(X,{})}),Object(H.jsx)(o.a,{path:"/register",children:Object(H.jsx)(ee,{})}),Object(H.jsx)(o.a,{path:"/jobscheduler",children:Object(H.jsx)(ne,{})}),Object(H.jsx)(o.a,{path:"/",children:Object(H.jsx)(z,{})})]})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(re,{})}),document.getElementById("root")),ce()}},[[115,1,2]]]);
//# sourceMappingURL=main.820947cc.chunk.js.map