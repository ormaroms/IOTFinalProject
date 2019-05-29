(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(e,t,a){e.exports=a(388)},242:function(e,t,a){},243:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},248:function(e,t,a){},388:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),i=a.n(o),s=(a(242),a(16)),c=a(12),l=a(19),u=a(17),d=a(20),p=(a(243),a(30)),m=a(47),h={lightStatus:!1,gasStatus:!1,arduinoID:"1"};var g={token:localStorage.getItem("TOKEN"),user_id:localStorage.getItem("USER_ID")};var f={};var E={};var v={};var b={};var y=Object(m.b)({status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STATUS_DATA_FETCHED":return Object.assign({},t.data);case"STATUS_RESET":return Object.assign({});default:return e}},arduionsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARDUIONS_LIST_LOADED":case"DEVICE_ACTION_SUCCEEDED":return Object.assign({},t.data);case"DEVICE_ADDITION_FIELD":return Object.assign({},{errorMsg:t.error});case"UPDATE_ARDUINO_ID":return Object.assign({},{arduinoId:t.data});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCEEDED":return localStorage.setItem("TOKEN",t.data.token),localStorage.setItem("USER_ID",t.data._id),Object.assign({},{user_id:t.data._id,token:t.data.token});case"LOGOUT":return localStorage.setItem("TOKEN",void 0),Object.assign({},{token:void 0});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_FAILED":return Object.assign({},{errorMsg:t.error});case"LOGIN_SUCCEEDED":return Object.assign({},t.data);default:return e}},statusHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STATUS_HISTORY_DATA_FETCHED":return Object.assign({},t.data);default:return e}},statisticsChart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STATISTICS_DATA_FETCHED":return Object.assign({},t.data);default:return e}}}),S=(a(248),a(18)),x=a(4),O=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"350px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),rowForIndicators:{display:"-webkit-box"},header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},date:{fontSize:"18px",marginBottom:"20px",color:"whitesmoke"},arduinoID:{fontSize:"16px",color:"#a28b8b",textAlign:"left",marginLeft:"30px",fontFamily:"Montserrat"},inidcatorSection:{marginTop:"20px"},formControl:{margin:3*e.spacing.unit}}},w=a(15),j=a(29),D=a.n(j),k=a(156),T=a.n(k),N=a(38),I=Object(N.a)({}),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={currentTime:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getStatus(this.props.token,this.props.user_id,this.props.arduinoId);var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["January","February","March","April","May","June","July","August","September","October","November","December"];setInterval(function(){var n=new Date;e.setState({currentTime:t[n.getDay()]+", "+n.getDate()+" "+a[n.getMonth()]+" "+n.getFullYear()+", "+n.toLocaleTimeString()})},1e3),setInterval(function(){e.props.getStatus(e.props.token,e.props.user_id,e.props.arduinoId)},1e4)}},{key:"render",value:function(){var e=this.props,t=e.lightStatus,a=e.gasStatus,o=e.arduinoId,i=e.classes;return void 0===this.props.token||null===this.props.token||""===this.props.token?(I.push("/"),r.a.createElement("div",null)):r.a.createElement(n.Fragment,{key:this.props.arduinoId},r.a.createElement(x.f,{className:i.root,elevation:1},r.a.createElement(D.a,{className:i.header,position:"static",color:"default"},r.a.createElement(x.n,{className:i.title},"Current Status"),r.a.createElement(x.n,{className:i.date},this.state.currentTime)),r.a.createElement("p",{className:i.arduinoID},r.a.createElement("b",null," Arduino Id : ")," ",o," ",a," ",t),r.a.createElement(x.b,{className:i.inidcatorSection,component:"fieldset"},r.a.createElement(x.e,{component:"legend"}," ",r.a.createElement(T.a,null)," Indicators"),r.a.createElement(x.d,null,r.a.createElement(x.c,{control:r.a.createElement(x.g,{checked:a||!1,value:"Leaking"}),label:"Gas Leaking ",labelPlacement:"start"}),r.a.createElement(x.c,{control:r.a.createElement(x.g,{checked:t||!1,value:"Lit"}),label:"Gas Lit ",labelPlacement:"start"})))))}}]),t}(n.Component),C=Object(w.withStyles)(O)(_);var A=a(39),R=a.n(A),L="https://iot-gas-monitor.herokuapp.com";function U(e,t){return R.a.get(L+"/status/getArduinoHistory/"+t,{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})}var M=Object(p.b)(function(e,t){return Object(S.a)({token:e.app.token,user_id:e.app.user_id,arduinoId:t.match.params.id},e.status,e.login,e.arduionsList)},function(e){return{getStatus:function(t,a,n){var r;console.log("Asked status for "+n+" arduino"),(r=a,R.a.get(L+"/status/"+r)).then(function(t){var a=t.data.filter(function(e){return e.id==n});a.length>0?(console.log("Status data fetched for arduino "+n),e({type:"STATUS_DATA_FETCHED",data:a[0]})):console.log("Couldnt find status for arduino "+n)}).catch(function(e){console.error("Status data fetched failed"),console.error(e)})}}})(C),F=a(27),z=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"370px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},error:{color:"red",fontSize:"18px",margin:"5px"},field:{margin:"5px"}}},H=a(26),B=a.n(H),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={errorMsg:""},a.handleSubmit=a.handleSubmit.bind(Object(F.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}}]),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.userName.value,a=this.password.value,n=this.email.value,r=this.name.value;""==t||""==a||""==n||""==r?this.setState({errorMsg:"Field can not be empty"}):/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())?this.props.register(this.userName.value,this.password.value,this.name.value,this.email.value):this.setState({errorMsg:"Email adress is not valid"})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(x.f,{className:t.root,elevation:1},r.a.createElement(D.a,{className:t.header,position:"static",color:"default"},r.a.createElement(x.n,{className:t.title},"Register")),r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(B.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{id:"name",variant:"outlined",label:"Name",inputRef:function(t){return e.name=t}})),r.a.createElement(B.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{id:"email",variant:"outlined",label:"Email",inputRef:function(t){return e.email=t}})),r.a.createElement(B.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{id:"userName",variant:"outlined",label:"User Name",inputRef:function(t){return e.userName=t}})),r.a.createElement(B.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{ref:"password",type:"password",variant:"outlined",inputRef:function(t){return e.password=t},label:"Password"})),r.a.createElement("p",{className:t.error},this.state.errorMsg),r.a.createElement(x.a,{type:"submit",variant:"contained",color:"primary",className:t.button},"Create account")))))}}]),t}(n.Component),G=Object(w.withStyles)(z)(W);var P=Object(p.b)(function(e){return Object(S.a)({},e.register)},function(e){return{register:function(t,a,n,r){(function(e,t,a,n){return R.a.post(L+"/users/register",{username:e,password:t,name:a,email:n},{headers:{"Content-Type":"application/json"}})})(t,a,n,r).then(function(t){console.log("User register succeeded"),e({type:"REGISTER_SUCCEEDED",data:t.data}),I.push("/")}).catch(function(t){console.error("User register failed"),e({type:"REGISTER_FAILED",error:t})})}}})(G),Y=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"370px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},signUp:{textDecoration:"underline",cursor:"pointer"},error:{color:"red",fontSize:"18px",margin:"5px"},field:{margin:"10px"}}},J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={errorMsg:""},a.handleSubmit=a.handleSubmit.bind(Object(F.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}}]),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.userName.value,a=this.password.value;""==t||""==a?this.setState({errorMsg:"Field can not be empty"}):this.props.login(this.userName.value,this.password.value)}},{key:"componentWillReceiveProps",value:function(e){this.setState({errorMsg:e.errorMsg})}},{key:"routeToRegister",value:function(){I.push("register")}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(x.f,{className:t.root,elevation:1},r.a.createElement(D.a,{className:t.header,position:"static",color:"default"},r.a.createElement(x.n,{className:t.title},"Log In")),r.a.createElement(x.b,null),r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(B.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{id:"userName",variant:"outlined",label:"User Name",inputRef:function(t){return e.userName=t}})),r.a.createElement(B.a,{item:!0,xs:12,className:t.field},r.a.createElement(x.m,{ref:"password",type:"password",variant:"outlined",inputRef:function(t){return e.password=t},label:"Password"})),r.a.createElement("p",{className:t.error},this.state.errorMsg),r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(x.a,{type:"submit",variant:"contained",color:"primary",className:t.button},"Log In"))),r.a.createElement("p",{className:t.text},"Dont have an account yet? ",r.a.createElement("a",{href:!0,className:t.signUp,onClick:this.routeToRegister}," Sign up ")))))}}]),t}(n.Component),K=Object(w.withStyles)(Y)(J);var V=Object(p.b)(function(e){return Object(S.a)({},e.login)},function(e){return{login:function(t,a){(function(e,t){return R.a.post(L+"/users/authenticate",{username:e,password:t},{headers:{"Content-Type":"application/json"}})})(t,a).then(function(t){console.log("User login succeeded"),e({type:"LOGIN_SUCCEEDED",data:t.data}),I.push("/device_list")}).catch(function(t){console.error("User login failed"),console.error(t),e({type:"LOGIN_FAILED",error:t.response.data.message})})}}})(K),Z=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"350px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},signUp:{textDecoration:"underline",cursor:"pointer"},addButton:{color:"cornflowerblue",cursor:"pointer",marginRight:"80px"},tableRows:{height:"100px",maxHeight:"100px",overflowY:"scroll"},error:{color:"red",fontSize:"18px",margin:"5px"},addDeviceTitle:{fontSize:"18px",color:"darkslategray",float:"left",marginLeft:"20px",marginBottom:"0px",fontFamily:"Montserrat"}}},$=a(105),q=a.n($),Q=a(160),X=a.n(Q),ee=a(158),te=a.n(ee),ae=a(157),ne=a.n(ae),re=a(159),oe=a.n(re),ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleRouteToStatus=function(e){a.props.resetStatus(),a.props.updateAdruinoId(e)},a.handleAddRow=function(e){e.preventDefault();var t=a.id.value,n=a.name.value;""==t||""==n?a.setState({errorMsg:"Field can not be empty"}):isNaN(t)?a.setState({errorMsg:"Device id field must contain only numbers"}):(a.props.addNewDevice(a.props.token,a.props.user_id,a.id.value,a.name.value),a.setState({formElement:e.target}))},a.handleDeleteRow=function(e){a.props.deleteDevice(a.props.token,a.props.user_id,e)},a.state={errorMsg:"",devices:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserDevices(this.props.token,this.props.user_id)}}]),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errorMsg?this.setState({errorMsg:e.errorMsg}):e.devices&&(this.state.formElement&&this.state.formElement.reset(),this.setState({devices:e.devices,errorMsg:""}))}},{key:"routeToStatusHistory",value:function(){I.push("status_history")}},{key:"routeToStatistics",value:function(){I.push("statistics_chart")}},{key:"logout",value:function(){this.props.logout(),I.push("")}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props,a=t.classes;t.devices;return r.a.createElement(n.Fragment,null,r.a.createElement(x.f,{className:a.root,elevation:1},r.a.createElement(D.a,{className:a.header,position:"static",color:"default"},r.a.createElement(x.n,{className:a.title},"Your Devices"),r.a.createElement("div",null,r.a.createElement(ne.a,{onClick:this.routeToStatusHistory,style:{float:"right"}}),r.a.createElement(te.a,{onClick:this.routeToStatistics,style:{float:"right"}}),r.a.createElement(oe.a,{onClick:this.logout.bind(this),style:{float:"right"}}))),r.a.createElement(x.h,{className:a.table},r.a.createElement(x.k,null,r.a.createElement(x.l,null,r.a.createElement(x.j,null,"Arduino Id"),r.a.createElement(x.j,null,"Name"),r.a.createElement(x.j,null)))),r.a.createElement("div",{style:{overflow:"auto",maxHeight:"100px"}},r.a.createElement(x.h,{style:{tableLayout:"fixed"}},r.a.createElement(x.i,{className:a.tableRows},this.state.devices&&this.state.devices.map(function(t){return r.a.createElement(x.l,{key:t.id,hover:!0},r.a.createElement(x.j,{component:"th",scope:"row",onClick:function(){return e.handleRouteToStatus(t.id)}},t.id),r.a.createElement(x.j,{onClick:function(){return e.handleRouteToStatus(t.id)}},t.name),r.a.createElement(x.j,null,r.a.createElement(q.a,{onClick:function(){return e.handleDeleteRow(t.id)}})))})))),r.a.createElement("p",{className:a.addDeviceTitle},"Add device"),r.a.createElement("form",{onSubmit:this.handleAddRow},r.a.createElement(B.a,{container:!0,spacing:24},r.a.createElement(B.a,{item:!0,xs:5},r.a.createElement(x.m,{id:"id",placeholder:"Arduino Id",inputRef:function(t){return e.id=t},style:{width:95}})),r.a.createElement(B.a,{item:!0,xs:5},r.a.createElement(x.m,{id:"name",placeholder:"Name",inputRef:function(t){return e.name=t},style:{width:100}})),r.a.createElement(B.a,{item:!0,xs:1},r.a.createElement(x.a,{type:"submit"},r.a.createElement(X.a,{className:a.addButton}))))),r.a.createElement("p",{className:a.error},this.state.errorMsg)))}}]),t}(n.Component),se=Object(w.withStyles)(Z)(ie);function ce(e){return{type:"DEVICE_ACTION_SUCCEEDED",data:e}}var le=Object(p.b)(function(e){return Object(S.a)({token:e.app.token,user_id:e.app.user_id},e.arduionsList,e.login)},function(e){return{logout:function(){console.log("Logged out"),e({type:"LOGOUT"})},resetStatus:function(){e({type:"STATUS_RESET"})},getUserDevices:function(t,a){console.log("token"+t),function(e,t){return R.a.get(L+"/devices/"+t,{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})}(t,a).then(function(t){console.log("User devices loaded"),e({type:"ARDUIONS_LIST_LOADED",data:t.data})}).catch(function(e){console.error("User devices load failed"),console.error(e)})},updateAdruinoId:function(t){e({type:"UPDATE_ARDUINO_ID",data:t}),I.push("/device_status/"+t)},addNewDevice:function(t,a,n,r){(function(e,t,a,n){return R.a.post(L+"/devices/"+t,{id:a,name:n},{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})})(t,a,n,r).then(function(t){console.log("Device with id "+n+" was added successfully."),e(ce(t.data))}).catch(function(t){console.log("Error in device addition with id "+n),console.log(t.response),e({type:"DEVICE_ADDITION_FIELD",error:t.response.data.message})})},deleteDevice:function(t,a,n){(function(e,t,a){return R.a.delete(L+"/devices/"+t,{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"},data:{arduinoId:a}})})(t,a,n).then(function(t){console.log("Delete device with id "+n+" succeeded."),e(ce(t.data))}).catch(function(e){console.log("Error in deleting device with id "+n),console.log(e)})},updateDevice:function(t,a,n){(function(e,t,a){return R.a.put(L+"/devices/5caba627e4b63200044dc316",{id:t,name:a},{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})})(t,a,n).then(function(t){console.log("Device with id "+a+" was updated successfully."),e(ce(t.data))}).catch(function(e){console.log("Error in device updating with id "+a),console.log(e)})}}})(se),ue=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"370px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},chart:{width:"100%",height:"300px"}}},de=a(161),pe={hAxis:{title:"Days"},vAxis:{title:"Times",viewWindow:{min:0,max:10}}},me=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getStatistics(this.props.token,this.props.user_id)}}]),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.chartData;return r.a.createElement(n.Fragment,null,r.a.createElement(x.f,{className:t.root,elevation:1},r.a.createElement(D.a,{className:t.header,position:"static",color:"default"},r.a.createElement(x.n,{className:t.title},"Statistics")),r.a.createElement("div",null,r.a.createElement(de.a,{className:t.chart,chartType:"ColumnChart",data:a,options:pe}))))}}]),t}(n.Component),he=Object(w.withStyles)(ue)(me);var ge=Object(p.b)(function(e){return Object(S.a)({token:e.app.token,user_id:e.app.user_id},e.arduionsList,e.login,e.statisticsChart)},function(e){return{getStatistics:function(t,a){U(t,a).then(function(t){var a=function(e){var t=new Date;t.setDate(t.getDate()-7);var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=[0,0,0,0,0,0,0],r=[];e.forEach(function(e){r=r.concat(e.history)}),r.forEach(function(e){var a=new Date(e.time);a>t&&e.gasStatus&&n[a.getDay()]++});for(var o=0;o<(new Date).getDay()+1;o++){var i=a.shift(),s=n.shift();a.push(i),n.push(s)}for(var c=[["Element","Count",{role:"style"}]],l=0;l<7;l++)c.push([a[l],n[l],"blue"]);return c}(t.data);e({type:"STATISTICS_DATA_FETCHED",data:{chartData:a}})}).catch(function(e){console.error("User devices load failed"),console.error(e)})}}})(he),fe=a(48),Ee=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"350px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},signUp:{textDecoration:"underline",cursor:"pointer"}}},ve=a(164),be=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleExpand=function(e){var t=Object(fe.a)(a.state.expandedRows),n=(a.state.allExpanded,t.findIndex(function(t){return t===e.id}));n>-1?(console.log("Collapsing "+e.id+" "+n),t.splice(n,1)):(console.log("Expanding "+e.id),t.push(e.id)),console.log("Expanded rows"),console.log(t),a.setState({expandedRows:Object(fe.a)(t)})},a.isExpanded=function(e){return a.state.expandedRows.find(function(t){return t===e.id})>-1},a.expandAll=function(e){if(console.log("ExapndedRows: "+a.state.expandedRows.length),console.log("devices:      "+e.length),a.state.expandedRows.length===e.length){a.setState({expandedRows:[].concat([])}),console.log("Collapsing all...")}else{var t=e.map(function(e){return e.history.arduinoId});a.setState({expandedRows:Object(fe.a)(t)}),console.log("Expanding all..."),console.log("Expanded rows "+t.length)}},a.getRows=function(e){var t=[],n=r.a.createElement(x.l,{onClick:function(){return a.handleExpand(e)}},r.a.createElement(x.j,null,r.a.createElement(ve.a,null,a.isExpanded(e)?"-":"+")),r.a.createElement(x.j,null,e.id));if(t.push(n),a.isExpanded(e)){var o=e.history.map(function(e){return r.a.createElement(x.l,null,r.a.createElement(x.j,{colSpan:"4"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"attribute"},r.a.createElement("div",{className:"attribute-name"},"time used::"),r.a.createElement("div",{className:"attribute-value"},e.time)),r.a.createElement("br",null),r.a.createElement("div",{className:"attribute"},r.a.createElement("div",{className:"attribute-name"},"Light status:"),r.a.createElement("div",{className:"attribute-value"},e.lightStatus.toString())),r.a.createElement("br",null),r.a.createElement("div",{className:"attribute"},r.a.createElement("div",{className:"attribute-name"},"Gas status:"),r.a.createElement("div",{className:"attribute-value"},e.gasStatus.toString())),r.a.createElement("br",null)))});t.push(o)}return t},a.getTable=function(){var e=a.state.devicesHistory.map(function(e){return a.getRows(e)});return r.a.createElement(x.h,{style:{tableLayout:"fixed"},className:"my-table"},r.a.createElement(x.i,null,e))},a.state={expandedRows:[],devicesHistory:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getStatusHistory(this.props.token,this.props.user_id)}}]),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.devicesHistory&&(this.state.formElement&&this.state.formElement.reset(),this.setState({devicesHistory:e.devicesHistory}))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(x.f,{className:e.root,elevation:1},r.a.createElement(D.a,{className:e.header,position:"static",color:"default"},r.a.createElement(x.n,null,"Your Arduions history")),r.a.createElement("div",{style:{overflow:"auto",height:"300px"}},this.getTable())))}}]),t}(n.Component),ye=Object(w.withStyles)(Ee)(be);var Se=Object(p.b)(function(e){return Object(S.a)({token:e.app.token,user_id:e.app.user_id},e.statusHistory,e.login)},function(e){return{getStatusHistory:function(t,a){console.log("token"+t),U(t,a).then(function(t){console.log("status history  loaded"),console.log(t.data);var a={devicesHistory:function(){var e=[];return t.data.forEach(function(t){t.history.filter(function(e){if(!0===e.gasStatus||!0===e.lightStatus)return e}).length>0&&e.push(t)}),e}()};e({type:"STATUS_HISTORY_DATA_FETCHED",data:a})}).catch(function(e){console.error("status history loading failed"),console.error(e)})}}})(ye),xe=a(392),Oe=Object(m.c)(y);Oe.subscribe(function(){localStorage.setItem("TOKEN",Oe.getState().app.token),localStorage.setItem("USER_ID",Oe.getState().app.user_id)});var we=Object(w.createMuiTheme)({typography:{fontFamily:"Montserrat"}}),je=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(w.MuiThemeProvider,{theme:we},r.a.createElement(p.a,{store:Oe},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(xe.b,{history:I},r.a.createElement(xe.a,{path:"/",exact:!0,component:V}),r.a.createElement(xe.a,{path:"/register",component:P}),r.a.createElement(xe.a,{path:"/device_status/:id",component:M}),r.a.createElement(xe.a,{path:"/device_list",component:le}),r.a.createElement(xe.a,{path:"/status_history",component:Se}),r.a.createElement(xe.a,{path:"/statistics_chart",component:ge}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[237,1,2]]]);
//# sourceMappingURL=main.88b5d835.chunk.js.map