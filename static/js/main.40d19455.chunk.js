(this["webpackJsonpsydneyweddingvideo.github.io"]=this["webpackJsonpsydneyweddingvideo.github.io"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),c=(a(80),a(5)),s=a(10),o=a(11),m=a(13),d=a(12),g=a(19),u=(a(81),a(14)),h=a(23),p=a(40),b=a(8),E=a(49),v=a(35),y=a.n(v),f=a(16),j=a(114),O=a(41),w=O.a.div({visible:{opacity:1},hidden:{opacity:0}}),C=/[^@]+@[^@]+\.[^@]+/,k={center:{display:"flex",justifyContent:"center",alignItems:"center"}},S={name:"",email:"",message:"",error:null,submitted:!1,sending:!1,sent:!1},x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){if(n.setState({submitted:!0}),!(!n.state.name||!C.test(n.state.email)||!n.state.message)){var t=n.state;n.setState({sending:!0}),y.a.post("https://formspree.io/f/xnqonepp",{data:t}).then((function(e){n.setState(Object(c.a)(Object(c.a)({},S),{},{sent:!n.state.sent})),setTimeout((function(){n.setState({sent:!n.state.sent})}),3200)})).catch((function(e){n.setState({error:e,sending:!1})}))}},n.onChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.state=Object(c.a)({},S),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:k.center},r.a.createElement(b.a,{style:{maxWidth:600,width:"70%"}},r.a.createElement(b.a.Group,{controlId:"name"},r.a.createElement(b.a.Label,null,"Your Name"),r.a.createElement(b.a.Control,{name:"name",placeholder:"Name",value:this.state.name,isInvalid:!this.state.name&&this.state.submitted,onChange:this.onChange}),r.a.createElement(b.a.Control.Feedback,{type:"invalid"},"Please enter a name.")),r.a.createElement(b.a.Group,{controlId:"email"},r.a.createElement(b.a.Label,null,"Your Email"),r.a.createElement(b.a.Control,{name:"email",type:"email",isInvalid:!C.test(this.state.email)&&this.state.submitted,placeholder:"Email",value:this.state.email,onChange:this.onChange}),r.a.createElement(b.a.Control.Feedback,{type:"invalid"},"Please enter a valid email.")),r.a.createElement(b.a.Group,{controlId:"message"},r.a.createElement(b.a.Label,null,"Message"),r.a.createElement(b.a.Control,{name:"message",as:"textarea",placeholder:"Message",isInvalid:this.state.submitted&&!this.state.message,value:this.state.message,onChange:this.onChange}),r.a.createElement(b.a.Control.Feedback,{type:"invalid"},"Password must be at least 6 letters.")),r.a.createElement(f.a,{onClick:this.onSubmit,style:{width:90}},this.state.sending?r.a.createElement(j.a,{animation:"border",role:"status",size:"sm"}):r.a.createElement("div",null,"Send")),this.state.error&&r.a.createElement(E.a,{variant:"danger",style:{margin:15}},this.state.error.message),r.a.createElement(w,{style:k.center,pose:this.state.sent?"visible":"hidden"},r.a.createElement("h3",null,"Thanks, I'll be in touch shortly!"))))}}]),a}(n.Component),A=a(42),I=(O.a.div({visible:{opacity:1},hidden:{opacity:0}}),/[^@]+@[^@]+\.[^@]+/),R={center:{display:"flex",justifyContent:"center",alignItems:"center"}},T={name:"",email:"",message:"",error:null,submitted:!1,sending:!1,sent:!1},W=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){if(n.setState({submitted:!0}),!(!n.state.name||!I.test(n.state.email)||!n.state.message)){var t=n.state;n.setState({sending:!0}),y.a.post("https://formspree.io/f/xnqonepp",{data:t}).then((function(e){n.setState(Object(c.a)(Object(c.a)({},T),{},{sent:!n.state.sent})),setTimeout((function(){n.setState({sent:!n.state.sent})}),3200)})).catch((function(e){n.setState({error:e,sending:!1})}))}},n.onChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.state=Object(c.a)({},T),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:R.center},r.a.createElement(f.a,{variant:"primary",style:{padding:3,marginLeft:5,marginRight:5,borderRadius:1e3},target:"_blank",href:"https://www.linkedin.com/in/winton-nathan-roberts/"},r.a.createElement(h.a,{color:"white",icon:A.c,size:"lg",style:{margin:0,padding:0}})),r.a.createElement(f.a,{variant:"primary",style:{padding:3,marginLeft:5,marginRight:5,borderRadius:1e3},target:"_blank",href:"https://www.facebook.com/crypticdeluge/"},r.a.createElement(h.a,{color:"white",icon:A.a,size:"lg",style:{margin:0,padding:0}})),r.a.createElement(f.a,{variant:"primary",style:{padding:3,marginLeft:5,marginRight:5,borderRadius:1e3},target:"_blank",href:"https://www.instagram.com/sydneyhandsanitiser/"},r.a.createElement(h.a,{color:"white",icon:A.b,size:"lg",style:{margin:0,padding:0}})))}}]),a}(n.Component),F=a(21),P=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(F.a.Link,this.props,this.props.children)}}]),a}(r.a.Component),L=u.ScrollLink(P),N=a(71),B=a.n(N),D=a(72),_=a.n(D),z=a(73),G=a.n(z),H=a(51),M=a.n(H),V=a(74),q=a.n(V),J=a(30),U=a(27),Y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,this.props,this.props.children)}}]),a}(r.a.Component),K=u.ScrollLink(Y),$={center:{display:"flex",justifyContent:"center",alignItems:"center"}},Q={},X=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state=Object(c.a)({},Q),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(U.a,{style:{width:"22rem",margin:30,marginTop:10,marginBottom:10}},r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},$.center),{},{backgroundColor:"lightgrey"})},r.a.createElement("h2",{style:{margin:0,fontWeight:300}},this.props.title)),r.a.createElement(U.a.Body,null,r.a.createElement(U.a.Title,{style:$.center},this.props.price),r.a.createElement(U.a.Text,null,this.props.desc)),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:10}},r.a.createElement(K,{variant:"primary",activeClass:"active",className:"btn",type:"submit",value:"Test 2",to:"contact",spy:!0,smooth:!0,offset:-this.props.offset,duration:500},"Contact")))}}]),a}(n.Component),Z={center:{display:"flex",justifyContent:"center",alignItems:"center"},card:Object(g.a)({width:"18rem",margin:20},"width",500),background:{backgroundColor:"purple"},navbar:{backgroundColor:"#7D3C98"}},ee=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).INIT_STATE={active:"aboutme"},n.state=Object(c.a)({},n.INIT_STATE),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){u.scrollSpy.update()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J.a,{style:Object(c.a)({},Z.navbar),variant:"dark",expand:"lg",sticky:"top"},r.a.createElement(J.a.Brand,{href:"#home",style:Z.center},r.a.createElement("img",{alt:"Shutter Logo",src:_.a,style:{height:42,color:"white",marginRight:5}}),r.a.createElement("strong",{style:{fontWeight:700}},"Sydney Wedding Video")),r.a.createElement(J.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(J.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(F.a,{className:"mr-auto"},r.a.createElement(F.a.Link,{href:"tel:+61 434 674 369"},r.a.createElement("div",{style:Z.center},r.a.createElement(h.a,{color:"white",icon:p.b,size:"lg",style:{width:40}}),r.a.createElement("div",{style:{fontWeight:500,color:"white"}},"0478741332"))),r.a.createElement(F.a.Link,{href:"mailto:winton.nathan.roberts@gmail.com"},r.a.createElement("div",{style:Z.center},r.a.createElement(h.a,{color:"white",icon:p.a,size:"lg",style:{width:40}}),r.a.createElement("div",{style:{fontWeight:500,color:"white"}},"winton.nathan.roberts@gmail.com")))),r.a.createElement(F.a,{className:"ml-auto",variant:"pills"},r.a.createElement(L,{activeClass:"active",to:"aboutme",spy:!0,smooth:!0,offset:-55,duration:500,onSetActive:this.handleSetActive},r.a.createElement("strong",{style:{fontWeight:700,color:"white"}},"ABOUT")),r.a.createElement(L,{activeClass:"active",to:"portfolio",spy:!0,smooth:!0,offset:-55,duration:500,onSetActive:this.handleSetActive},r.a.createElement("strong",{style:{fontWeight:700,color:"white"}},"PORTFOLIO")),r.a.createElement(L,{activeClass:"active",to:"packages",spy:!0,smooth:!0,offset:-55,duration:500,onSetActive:this.handleSetActive},r.a.createElement("strong",{style:{fontWeight:700,color:"white"}},"PACKAGES")),r.a.createElement(L,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-55,duration:500,onSetActive:this.handleSetActive},r.a.createElement("strong",{style:{fontWeight:700,color:"white"}},"CONTACT"))))),r.a.createElement(u.Element,{name:"aboutme",className:"element",style:{padding:20,paddingBottom:0}},r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("h1",{style:Object(c.a)(Object(c.a)({},Z.center),{},{textAlign:"center"})},"Hi, I'm Winton. "),r.a.createElement("div",{style:Z.center},r.a.createElement("div",{style:{height:250,width:250,borderRadius:1e3,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",margin:20}},r.a.createElement("img",{alt:"Avatar Image",src:B.a,style:{height:240,borderRadius:1e3}}))),r.a.createElement("div",{style:Z.center},r.a.createElement("small",{style:{fontSize:18,textAlign:"center"}},"I produce wedding videos in Sydney at affordable prices. ")),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},Z.center),{},{bottom:0,marginTop:30})},r.a.createElement("img",{alt:"Purple Divider",src:q.a,style:{width:550,maxWidth:"100%"}})))),r.a.createElement(u.Element,{name:"portfolio",className:"element"},r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},Z.background),{},{padding:20})},r.a.createElement("h1",{style:Object(c.a)(Object(c.a)({},Z.center),{},{textAlign:"center",color:"white"})},"My Recent Work"),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},Z.center),{},{margin:0,padding:0,marginBottom:40})},r.a.createElement("img",{alt:"White Divider",src:G.a,style:{width:400}})),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",margin:10}},r.a.createElement("iframe",{title:"Wedding Portfolio Video 1",src:"https://player.vimeo.com/video/163485902",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0})))),r.a.createElement(u.Element,{name:"packages",className:"packages"},r.a.createElement("div",{style:{padding:20}},r.a.createElement("h1",{style:Object(c.a)(Object(c.a)({},Z.center),{},{textAlign:"center",color:"black"})}," Videography Packages"),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},Z.center),{},{margin:0,padding:0,marginBottom:40})},r.a.createElement("img",{alt:"Purple Divider",src:M.a,style:{width:400}})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"stretch",flexWrap:"wrap"}},r.a.createElement(X,{price:"FREE",desc:r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Professional videography, editing and colour grading"),r.a.createElement("li",null,"5 minute Cinematic Highlight Reel"),r.a.createElement("li",null,"Dropbox hosted Film and Raw Footage")),r.a.createElement("small",{style:Object(c.a)(Object(c.a)({},Z.center),{},{textAlign:"center"})},"Up to 6 Hours Coverage")),title:"Basic",offset:55}),r.a.createElement(X,{price:"FREE",desc:r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Professional videography, editing and colour grading"),r.a.createElement("li",null,"7 minute Cinematic Highlight Reel"),r.a.createElement("li",null,"Dropbox hosted Film and Raw Footage")),r.a.createElement("small",{style:Object(c.a)(Object(c.a)({},Z.center),{},{textAlign:"center"})},"Full Day Coverage")),title:"Standard",offset:55}),r.a.createElement(X,{price:"FREE",desc:r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"Professional videography, editing and colour grading"),r.a.createElement("li",null,"9 minute Cinematic Highlight Reel"),r.a.createElement("li",null,"Dropbox hosted Film and Raw Footage")),r.a.createElement("small",{style:Object(c.a)(Object(c.a)({},Z.center),{},{textAlign:"center"})},"Full Day Coverage")),title:"Premium",offset:55})))),r.a.createElement(u.Element,{name:"contact",className:"element",id:"contact"},r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},Z.background),{},{backgroundColor:"white",padding:20,marginTop:60})},r.a.createElement("h1",{style:Object(c.a)(Object(c.a)({},Z.center),{},{textAlign:"center",color:"black"})},"Get In Touch"),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},Z.center),{},{margin:0,padding:0,marginBottom:40})},r.a.createElement("img",{alt:"Purple Divider",src:M.a,style:{width:400}})),r.a.createElement(x,null))),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},Z.navbar),{},{padding:20})},r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("div",{style:Object(c.a)(Object(c.a)({},Z.center),{},{color:"white",margin:60})},"Copyright \xa9 Winton Nathan-Roberts 2020")),r.a.createElement("div",{style:{height:"40vh"}})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(110);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,a){e.exports=a.p+"static/media/divider_purple.062a695d.svg"},71:function(e,t,a){e.exports=a.p+"static/media/avatar.5fd88976.svg"},72:function(e,t,a){e.exports=a.p+"static/media/shutter.7acc9f27.svg"},73:function(e,t,a){e.exports=a.p+"static/media/divider_white.79a9fab4.svg"},74:function(e,t,a){e.exports=a.p+"static/media/divider_alt_purple.29534bf7.svg"},75:function(e,t,a){e.exports=a(111)},80:function(e,t,a){},81:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.40d19455.chunk.js.map