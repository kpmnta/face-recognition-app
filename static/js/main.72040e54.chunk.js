(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{106:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},379:function(e,t,n){},380:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(9),i=n.n(s),o=n(53),c=n.n(o),r=(n(106),n(26)),l=n(27),d=n(29),h=n(28),m=n(54),b=n.n(m),u=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(a.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)("p",{onClick:function(){return t("signout")},className:"f4 link dim white underline pa3 pointer",children:"Sign Out"})}):Object(a.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(a.jsx)("p",{onClick:function(){return t("signin")},className:"f4 link dim white underline pa3 pointer",children:"Sign In"}),Object(a.jsx)("p",{onClick:function(){return t("register")},className:"f4 link dim white underline pa3 pointer",children:"Register"})]})},p=n(99),j=n.n(p),g=n.p+"static/media/icon.920d773e.png",f=(n(144),function(){return Object(a.jsx)("div",{className:"ma4 mt0",children:Object(a.jsx)(j.a,{className:"Tilt br2 shadow-2",options:{max:40},style:{height:120,width:120},children:Object(a.jsx)("div",{className:"Tilt-inner pa3",children:Object(a.jsx)("img",{src:g,alt:"logo"})})})})}),O=(n(145),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"f3 ma3",children:"We will detect faces in your pictures. Give it a try! :)"}),Object(a.jsx)("div",{className:"center",children:Object(a.jsxs)("div",{className:"form center pa4 br3",children:[Object(a.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",placeholder:"enter an image link here",onChange:t}),Object(a.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),x=(n(146),function(e){var t=e.imageURL,n=e.box;return Object(a.jsx)("div",{className:"center ma",children:Object(a.jsxs)("div",{className:"absolute mt2",children:[Object(a.jsx)("img",{id:"inputimg",src:t,alt:"",width:"600px",height:"auto"}),Object(a.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(a.jsx)("article",{className:"br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-1 mw5 center",children:Object(a.jsx)("main",{className:"pa 4 black-80 mt3",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph4 pl3 mv2-l",children:[Object(a.jsx)("legend",{className:"f3 fw6 ph0 mh0",children:"Sign In"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 1h-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 1h-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib",type:"submit",value:"Sign In"})}),Object(a.jsx)("div",{className:"1h-copy mt3",children:Object(a.jsx)("p",{onClick:function(){return e("register")},className:"f5 link dim white db pointer mv4",children:"Register"})})]})})})}}]),n}(s.Component),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("article",{className:"br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-1 mw5 center",children:Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f3 fw6 ph0 mh0",children:"Register"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 1h-copy f6",htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})]}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 1h-copy f6",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 1h-copy f6",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(s.Component),C=n(100),N=n.n(C),y=(n(378),n(379),new b.a.App({apiKey:"1d58e1c45b4443ababfcdbe5708dfa9d"})),S={particles:{number:{value:80},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimg"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageURL:e.state.input}),y.models.predict(b.a.FACE_DETECT_MODEL,e.state.input).then((function(t){t&&fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageURL:"",box:{},route:"home",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageURL,s=e.route,i=e.box;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(N.a,{className:"particles",params:S}),Object(a.jsx)(u,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===s?Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{}),Object(a.jsx)(O,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(a.jsx)(x,{box:i,imageURL:n})]}):"signin"===s?Object(a.jsx)(w,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(a.jsx)(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(s.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,381)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),I()}},[[380,1,2]]]);
//# sourceMappingURL=main.72040e54.chunk.js.map