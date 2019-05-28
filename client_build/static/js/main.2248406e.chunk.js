(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,t,a){e.exports=a(384)},238:function(e,t,a){},239:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},244:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),i=a.n(o),s=(a(238),a(18)),l=a(12),c=a(21),u=a(19),d=a(22),m=(a(239),a(33)),p=a(46),h={lightStatus:!1,gasStatus:!1,arduinoID:"1"};var g={token:localStorage.getItem("TOKEN")};var f={};var E={};var v={};var b=Object(p.b)({status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STATUS_DATA_FETCHED":return Object.assign({},t.data);default:return e}},arduionsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARDUIONS_LIST_LOADED":case"DEVICE_ACTION_SUCCEEDED":return Object.assign({},t.data);case"DEVICE_ADDITION_FIELD":return Object.assign({},{errorMsg:t.error});case"UPDATE_ARDUINO_ID":return Object.assign({},{arduinoId:t.data});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCEEDED":return localStorage.setItem("TOKEN",t.token),Object.assign({},{token:t.data.token});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_FAILED":return Object.assign({},{errorMsg:t.error});case"LOGIN_SUCCEEDED":return Object.assign({},t.data);default:return e}},statusHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STATUS_HISTORY_DATA_FETCHED":return Object.assign({},t.data);default:return e}}}),y=(a(244),a(24)),x=a(4),S=function(e){return{root:Object(y.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"350px",width:"400px",paddingRight:"0px !important",paddingLeft:"0px !important"}),rowForIndicators:{display:"-webkit-box"},header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},date:{fontSize:"18px",marginBottom:"20px",color:"whitesmoke"},arduinoID:{fontSize:"16px",color:"#a28b8b",textAlign:"left",marginLeft:"30px",fontFamily:"Montserrat"},inidcatorSection:{marginTop:"20px"},formControl:{margin:3*e.spacing.unit}}},w=a(23),O=a(32),j=a.n(O),N=a(156),D=a.n(N),k=a(38),T=Object(k.a)({}),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={currentTime:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getStatus(this.props.token,this.props._id,this.props.arduinoId);var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["January","February","March","April","May","June","July","August","September","October","November","December"];setInterval(function(){var n=new Date;e.setState({currentTime:t[n.getDay()]+", "+n.getDate()+" "+a[n.getMonth()]+" "+n.getFullYear()+", "+n.toLocaleTimeString()})},1e3),setInterval(function(){e.props.getStatus(e.props.token,e.props._id,e.props.arduinoId)},1e4)}},{key:"render",value:function(){var e=this.props,t=e.lightStatus,a=e.gasStatus,o=e.arduinoId,i=e.classes;return void 0===this.props.token||null===this.props.token||""===this.props.token?(T.push("/"),r.a.createElement("div",null)):r.a.createElement(n.Fragment,null,r.a.createElement(x.f,{className:i.root,elevation:1},r.a.createElement(j.a,{className:i.header,position:"static",color:"default"},r.a.createElement(x.n,{className:i.title},"Current Status"),r.a.createElement(x.n,{className:i.date},this.state.currentTime)),r.a.createElement("p",{className:i.arduinoID},r.a.createElement("b",null," Arduino Id : ")," ",o," ",a," ",t),r.a.createElement(x.b,{className:i.inidcatorSection,component:"fieldset"},r.a.createElement(x.e,{component:"legend"}," ",r.a.createElement(D.a,null)," Indicators"),r.a.createElement(x.d,null,r.a.createElement(x.c,{control:r.a.createElement(x.g,{checked:a,value:"Leaking"}),label:"Gas Leaking ",labelPlacement:"start"}),r.a.createElement(x.c,{control:r.a.createElement(x.g,{checked:t,value:"Lit"}),label:"Gas Lit ",labelPlacement:"start"})))))}}]),t}(n.Component),C=Object(w.withStyles)(S)(I);var R=a(39),A=a.n(R),L="https://iot-gas-monitor.herokuapp.com";var _=Object(m.b)(function(e){return Object(y.a)({token:e.app.token},e.status,e.login,e.arduionsList)},function(e){return{getStatus:function(t,a,n){var r;console.log("Asked status for "+n+" arduino"),(r=a,A.a.get(L+"/status/"+r)).then(function(t){var a=t.data.filter(function(e){return e.id==n});a.length>0?(console.log("Status data fetched for arduino "+n),e({type:"STATUS_DATA_FETCHED",data:a[0]})):console.log("Couldnt find status for arduino "+n)}).catch(function(e){console.error("Status data fetched failed"),console.error(e)})}}})(C),M=a(27),U=function(e){return{root:Object(y.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"370px",width:"400px",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},error:{color:"red",fontSize:"18px",margin:"5px"},field:{margin:"5px"}}},F=a(26),H=a.n(F),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={errorMsg:""},a.handleSubmit=a.handleSubmit.bind(Object(M.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}}]),Object(l.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.userName.value,a=this.password.value,n=this.email.value,r=this.name.value;""==t||""==a||""==n||""==r?this.setState({errorMsg:"Field can not be empty"}):/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())?this.props.register(this.userName.value,this.password.value,this.name.value,this.email.value):this.setState({errorMsg:"Email adress is not valid"})}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(x.f,{className:t.root,elevation:1},r.a.createElement(j.a,{className:t.header,position:"static",color:"default"},r.a.createElement(x.n,{className:t.title},"Register")),r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(H.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{id:"name",variant:"outlined",label:"Name",inputRef:function(t){return e.name=t}})),r.a.createElement(H.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{id:"email",variant:"outlined",label:"Email",inputRef:function(t){return e.email=t}})),r.a.createElement(H.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{id:"userName",variant:"outlined",label:"User Name",inputRef:function(t){return e.userName=t}})),r.a.createElement(H.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{ref:"password",type:"password",variant:"outlined",inputRef:function(t){return e.password=t},label:"Password"})),r.a.createElement("p",{className:t.error},this.state.errorMsg),r.a.createElement(x.a,{type:"submit",variant:"contained",color:"primary",className:t.button},"Create account")))))}}]),t}(n.Component),B=Object(w.withStyles)(U)(z);var P=Object(m.b)(function(e){return Object(y.a)({},e.register)},function(e){return{register:function(t,a,n,r){(function(e,t,a,n){return A.a.post(L+"/users/register",{username:e,password:t,name:a,email:n},{headers:{"Content-Type":"application/json"}})})(t,a,n,r).then(function(t){console.log("User register succeeded"),e({type:"REGISTER_SUCCEEDED",data:t.data}),T.push("/")}).catch(function(t){console.error("User register failed"),e({type:"REGISTER_FAILED",error:t})})}}})(B),G=function(e){return{root:Object(y.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"370px",width:"400px",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},signUp:{textDecoration:"underline",cursor:"pointer"},error:{color:"red",fontSize:"18px",margin:"5px"},field:{margin:"10px"}}},W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={errorMsg:""},a.handleSubmit=a.handleSubmit.bind(Object(M.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}}]),Object(l.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.userName.value,a=this.password.value;""==t||""==a?this.setState({errorMsg:"Field can not be empty"}):this.props.login(this.userName.value,this.password.value)}},{key:"componentWillReceiveProps",value:function(e){this.setState({errorMsg:e.errorMsg})}},{key:"routeToRegister",value:function(){T.push("register")}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(x.f,{className:t.root,elevation:1},r.a.createElement(j.a,{className:t.header,position:"static",color:"default"},r.a.createElement(x.n,{className:t.title},"Log In")),r.a.createElement(x.b,null),r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(H.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{id:"userName",variant:"outlined",label:"User Name",inputRef:function(t){return e.userName=t}})),r.a.createElement(H.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{ref:"password",type:"password",variant:"outlined",inputRef:function(t){return e.password=t},label:"Password"})),r.a.createElement("p",{className:t.error},this.state.errorMsg),r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement(x.a,{type:"submit",variant:"contained",color:"primary",className:t.button},"Log In"))),r.a.createElement("p",{className:t.text},"Dont have an account yet? ",r.a.createElement("a",{href:!0,className:t.signUp,onClick:this.routeToRegister}," Sign up ")))))}}]),t}(n.Component),Y=Object(w.withStyles)(G)(W);var J=Object(m.b)(function(e){return Object(y.a)({},e.login)},function(e){return{login:function(t,a){(function(e,t){return A.a.post(L+"/users/authenticate",{username:e,password:t},{headers:{"Content-Type":"application/json"}})})(t,a).then(function(t){console.log("User login succeeded"),e({type:"LOGIN_SUCCEEDED",data:t.data}),T.push("/arduionsList")}).catch(function(t){console.error("User login failed"),console.error(t),e({type:"LOGIN_FAILED",error:t.response.data.message})})}}})(Y),V=function(e){return{root:Object(y.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"350px",width:"400px",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},signUp:{textDecoration:"underline",cursor:"pointer"},addButton:{color:"cornflowerblue",cursor:"pointer",marginRight:"80px"},tableRows:{height:"100px",maxHeight:"100px",overflowY:"scroll"},error:{color:"red",fontSize:"18px",margin:"5px"},addDeviceTitle:{fontSize:"18px",color:"darkslategray",float:"left",marginLeft:"20px",marginBottom:"0px",fontFamily:"Montserrat"}}},K=a(105),Z=a.n(K),$=a(158),q=a.n($),Q=a(157),X=a.n(Q),ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleRouteToStatus=function(e){a.props.updateAdruinoId(e)},a.handleAddRow=function(e){e.preventDefault();var t=a.id.value,n=a.name.value;""==t||""==n?a.setState({errorMsg:"Field can not be empty"}):isNaN(t)?a.setState({errorMsg:"Device id field must contain only numbers"}):(a.props.addNewDevice(a.props.token,a.props._id,a.id.value,a.name.value),a.setState({formElement:e.target}))},a.handleDeleteRow=function(e){a.props.deleteDevice(a.props.token,a.props._id,e)},a.state={errorMsg:"",devices:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserDevices(this.props.token,this.props._id)}}]),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errorMsg?this.setState({errorMsg:e.errorMsg}):e.devices&&(this.state.formElement&&this.state.formElement.reset(),this.setState({devices:e.devices,errorMsg:""}))}},{key:"routeToStatusHistory",value:function(){T.push("statusHistory")}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props,a=t.classes;t.devices;return r.a.createElement(n.Fragment,null,r.a.createElement(x.f,{className:a.root,elevation:1},r.a.createElement(j.a,{className:a.header,position:"static",color:"default"},r.a.createElement(X.a,{onClick:this.routeToStatusHistory}),r.a.createElement(x.n,{className:a.title},"Your Arduions")),r.a.createElement(x.h,{className:a.table},r.a.createElement(x.k,null,r.a.createElement(x.l,null,r.a.createElement(x.j,null,"Arduino Id"),r.a.createElement(x.j,null,"Name"),r.a.createElement(x.j,null)))),r.a.createElement("div",{style:{overflow:"auto",height:"100px"}},r.a.createElement(x.h,{style:{tableLayout:"fixed"}},r.a.createElement(x.i,{className:a.tableRows},this.state.devices&&this.state.devices.map(function(t,a){return r.a.createElement(x.l,{key:a,hover:!0,onClick:function(){return e.handleRouteToStatus(t.id)}},r.a.createElement(x.j,{component:"th",scope:"row"},t.id),r.a.createElement(x.j,null,t.name),r.a.createElement(x.j,null,r.a.createElement(Z.a,{onClick:function(){return e.handleDeleteRow(t.id)}})))})))),r.a.createElement("p",{className:a.addDeviceTitle},"Add device"),r.a.createElement("form",{onSubmit:this.handleAddRow},r.a.createElement(H.a,{container:!0,spacing:24},r.a.createElement(H.a,{item:!0,xs:5},r.a.createElement(x.m,{id:"id",placeholder:"Arduino Id",inputRef:function(t){return e.id=t},style:{width:95}})),r.a.createElement(H.a,{item:!0,xs:5},r.a.createElement(x.m,{id:"name",placeholder:"Name",inputRef:function(t){return e.name=t},style:{width:100}})),r.a.createElement(H.a,{item:!0,xs:1},r.a.createElement(x.a,{type:"submit"},r.a.createElement(q.a,{className:a.addButton}))))),r.a.createElement("p",{className:a.error},this.state.errorMsg)))}}]),t}(n.Component),te=Object(w.withStyles)(V)(ee);function ae(e){return{type:"DEVICE_ACTION_SUCCEEDED",data:e}}var ne=Object(m.b)(function(e){return Object(y.a)({token:e.app.token},e.arduionsList,e.login)},function(e){return{getUserDevices:function(t,a){console.log("token"+t),function(e,t){return A.a.get(L+"/devices/"+t,{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})}(t,a).then(function(t){console.log("User devices loaded"),e({type:"ARDUIONS_LIST_LOADED",data:t.data})}).catch(function(e){console.error("User devices load failed"),console.error(e)})},updateAdruinoId:function(t){e({type:"UPDATE_ARDUINO_ID",data:t}),T.push("/status")},addNewDevice:function(t,a,n,r){(function(e,t,a,n){return A.a.post(L+"/devices/"+t,{id:a,name:n},{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})})(t,a,n,r).then(function(t){console.log("Device with id "+n+" was added successfully."),e(ae(t.data))}).catch(function(t){console.log("Error in device addition with id "+n),console.log(t.response),e({type:"DEVICE_ADDITION_FIELD",error:t.response.data.message})})},deleteDevice:function(t,a,n){(function(e,t,a){return A.a.delete(L+"/devices/"+t,{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"},data:{arduinoId:a}})})(t,a,n).then(function(t){console.log("Delete device with id "+n+" succeeded."),e(ae(t.data))}).catch(function(e){console.log("Error in deleting device with id "+n),console.log(e)})},updateDevice:function(t,a,n){(function(e,t,a){return A.a.put(L+"/devices/5caba627e4b63200044dc316",{id:t,name:a},{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})})(t,a,n).then(function(t){console.log("Device with id "+a+" was updated successfully."),e(ae(t.data))}).catch(function(e){console.log("Error in device updating with id "+a),console.log(e)})}}})(te),re=a(47),oe=a(160),ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleExpand=function(e){var t=Object(re.a)(a.state.expandedRows),n=(a.state.allExpanded,t.findIndex(function(t){return t===e.id}));n>-1?(console.log("Collapsing "+e.id+" "+n),t.splice(n,1)):(console.log("Expanding "+e.id),t.push(e.id)),console.log("Expanded rows"),console.log(t),a.setState({expandedRows:Object(re.a)(t)})},a.isExpanded=function(e){return a.state.expandedRows.find(function(t){return t===e.id})>-1},a.expandAll=function(e){if(console.log("ExapndedRows: "+a.state.expandedRows.length),console.log("Players:      "+e.length),a.state.expandedRows.length===e.length){a.setState({expandedRows:[].concat([])}),console.log("Collapsing all...")}else{var t=e.map(function(e){return e.history.arduinoId});a.setState({expandedRows:Object(re.a)(t)}),console.log("Expanding all..."),console.log("Expanded rows "+t.length)}},a.getRows=function(e){var t=[],n=r.a.createElement(x.l,{onClick:function(){return a.handleExpand(e)}},r.a.createElement(x.j,null,r.a.createElement(oe.a,null,a.isExpanded(e)?"-":"+")),r.a.createElement(x.j,null,e.id));if(t.push(n),a.isExpanded(e)){var o=e.history.map(function(e){return r.a.createElement(x.l,{className:"player-details"},r.a.createElement(x.j,{colSpan:"4",className:"player-details"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"attribute"},r.a.createElement("div",{className:"attribute-name"},"time used::"),r.a.createElement("div",{className:"attribute-value"},e.time)),r.a.createElement("br",null),r.a.createElement("div",{className:"attribute"},r.a.createElement("div",{className:"attribute-name"},"Light status:"),r.a.createElement("div",{className:"attribute-value"},e.lightStatus.toString())),r.a.createElement("br",null),r.a.createElement("div",{className:"attribute"},r.a.createElement("div",{className:"attribute-name"},"Gas status:"),r.a.createElement("div",{className:"attribute-value"},e.gasStatus.toString())),r.a.createElement("br",null)))});t.push(o)}return t},a.getPlayerTable=function(){var e=a.state.devicesHistory.map(function(e){return a.getRows(e)});return r.a.createElement(x.h,{style:{tableLayout:"fixed"},className:"my-table"},r.a.createElement(x.k,null,"Device id"),r.a.createElement(x.i,null,e))},a.state={expandedRows:[],devicesHistory:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getStatusHistory(this.props.token)}}]),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.devicesHistory&&(this.state.formElement&&this.state.formElement.reset(),this.setState({devicesHistory:e.devicesHistory}))}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(x.f,{elevation:1},r.a.createElement(j.a,{position:"static",color:"default"},r.a.createElement(x.n,null,"Your Arduions history status:")),r.a.createElement("div",{style:{overflow:"auto",height:"300px"}},this.getPlayerTable())))}}]),t}(n.Component);var se=Object(m.b)(function(e){return Object(y.a)({token:e.app.token},e.statusHistory)},function(e){return{getStatusHistory:function(t){console.log("token"+t),function(e,t){return A.a.get(L+"/status/getArduinoHistory/5ce0144b62e5ed00047b38d2",{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})}(t).then(function(t){console.log("status history  loaded"),console.log(t.data);var a={devicesHistory:t.data};e({type:"STATUS_HISTORY_DATA_FETCHED",data:a})}).catch(function(e){console.error("status history loading failed"),console.error(e)})}}})(ie),le=a(388),ce=Object(p.c)(b);ce.subscribe(function(){localStorage.setItem("TOKEN",ce.getState().token)});var ue=Object(w.createMuiTheme)({typography:{fontFamily:"Montserrat"}}),de=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(w.MuiThemeProvider,{theme:ue},r.a.createElement(m.a,{store:ce},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(le.b,{history:T},r.a.createElement(le.a,{path:"/",exact:!0,component:J}),r.a.createElement(le.a,{path:"/register",component:P}),r.a.createElement(le.a,{path:"/status",component:_}),r.a.createElement(le.a,{path:"/arduionsList",component:ne}),r.a.createElement(le.a,{path:"/statusHistory",component:se}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[233,1,2]]]);
//# sourceMappingURL=main.2248406e.chunk.js.map