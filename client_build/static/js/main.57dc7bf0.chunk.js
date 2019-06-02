(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{239:function(e,t,a){e.exports=a(417)},244:function(e,t,a){},245:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},250:function(e,t,a){},417:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(27),i=a.n(r),s=(a(244),a(19)),l=a(12),c=a(22),u=a(20),d=a(23),p=(a(245),a(29)),m=a(49),h={lightStatus:!1,gasStatus:!1,arduinoID:"1"};var g={token:localStorage.getItem("TOKEN"),user_id:localStorage.getItem("USER_ID")};var f={};var E={};var v={};var b={};var y=Object(m.b)({status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STATUS_DATA_FETCHED":return Object.assign({},t.data);case"STATUS_RESET":return Object.assign({});default:return e}},arduionsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARDUIONS_LIST_LOADED":case"DEVICE_ACTION_SUCCEEDED":return Object.assign({},t.data);case"DEVICE_ADDITION_FIELD":return Object.assign({},{errorMsg:t.error});case"UPDATE_ARDUINO_ID":return Object.assign({},{arduinoId:t.data});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCEEDED":return localStorage.setItem("TOKEN",t.data.token),localStorage.setItem("USER_ID",t.data._id),Object.assign({},{user_id:t.data._id,token:t.data.token});case"LOGOUT":return localStorage.setItem("TOKEN",void 0),Object.assign({},{token:void 0});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_FAILED":return Object.assign({},{errorMsg:t.error});case"LOGIN_SUCCEEDED":return Object.assign({},t.data);default:return e}},statusHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STATUS_HISTORY_DATA_FETCHED":return Object.assign({},t.data);default:return e}},statisticsChart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STATISTICS_DATA_FETCHED":return Object.assign({},t.data);default:return e}}}),S=(a(250),a(21)),O=a(4),x=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"450px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),rowForIndicators:{display:"-webkit-box"},header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},date:{fontSize:"18px",marginBottom:"20px",color:"whitesmoke"},arduinoID:{fontSize:"16px",color:"#a28b8b",textAlign:"left",marginLeft:"30px",fontFamily:"Montserrat"},inidcatorSection:{marginTop:"20px"},formControl:{margin:3*e.spacing.unit}}},w=a(18),D=a(28),k=a.n(D),j=a(164),T=a.n(j),N=a(38),C=Object(N.a)({}),I=a(77),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={currentTime:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getStatus(this.props.token,this.props.user_id,this.props.arduinoId);var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["January","February","March","April","May","June","July","August","September","October","November","December"];setInterval(function(){var n=new Date;e.setState({currentTime:t[n.getDay()]+", "+n.getDate()+" "+a[n.getMonth()]+" "+n.getFullYear()+", "+n.toLocaleTimeString()})},1e3),setInterval(function(){e.props.getStatus(e.props.token,e.props.user_id,e.props.arduinoId)},1e4)}},{key:"render",value:function(){var e=this.props,t=e.lightStatus,a=e.gasStatus,r=e.arduinoId,i=e.classes;return void 0===this.props.token||null===this.props.token||""===this.props.token?(C.push("/"),o.a.createElement("div",null)):o.a.createElement(n.Fragment,{key:this.props.arduinoId},o.a.createElement(O.f,{className:i.root,elevation:1},o.a.createElement(k.a,{className:i.header,position:"static",color:"default"},o.a.createElement(O.n,{className:i.title},"Current Status"),o.a.createElement(O.n,{className:i.date},this.state.currentTime)),o.a.createElement("p",{className:i.arduinoID},o.a.createElement("b",null," Device Id: ")," ",r," ",a," ",t),o.a.createElement(O.b,{className:i.inidcatorSection,component:"fieldset"},o.a.createElement(O.e,{component:"legend"}," ",o.a.createElement(T.a,null)," Indicators"),o.a.createElement(O.d,null,o.a.createElement(O.c,{control:o.a.createElement(O.g,{checked:a||!1,value:"Leaking"}),label:"Gas Leaking ",labelPlacement:"start"}),o.a.createElement(O.c,{control:o.a.createElement(O.g,{checked:t||!1,value:"Lit"}),label:"Gas Lit ",labelPlacement:"start"}))),!t&&a&&o.a.createElement("div",null,o.a.createElement(I.a,{style:{color:"red"}},o.a.createElement("a",{href:"tel:102",style:{color:"red",textDecoration:"none"}},"Call Fire department!")))))}}]),t}(n.Component),R=Object(w.withStyles)(x)(_);var A=a(39),L=a.n(A),U="https://iot-gas-monitor.herokuapp.com";function M(e,t){return L.a.get(U+"/status/getArduinoHistory/"+t,{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})}var F=Object(p.b)(function(e,t){return Object(S.a)({token:e.app.token,user_id:e.app.user_id,arduinoId:t.match.params.id},e.status,e.login,e.arduionsList)},function(e){return{getStatus:function(t,a,n){var o;console.log("Asked status for "+n+" arduino"),(o=a,L.a.get(U+"/status/"+o)).then(function(t){var a=t.data.filter(function(e){return e.id==n});a.length>0?(console.log("Status data fetched for arduino "+n),e({type:"STATUS_DATA_FETCHED",data:a[0]})):console.log("Couldnt find status for arduino "+n)}).catch(function(e){console.error("Status data fetched failed"),console.error(e)})}}})(R),z=a(26),H=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"450px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},error:{color:"red",fontSize:"18px",margin:"5px"},field:{margin:"5px"}}},B=a(31),W=a.n(B),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={errorMsg:""},a.handleSubmit=a.handleSubmit.bind(Object(z.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}}]),Object(l.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.userName.value,a=this.password.value,n=this.email.value,o=this.name.value;""==t||""==a||""==n||""==o?this.setState({errorMsg:"Field can not be empty"}):/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())?this.props.register(this.userName.value,this.password.value,this.name.value,this.email.value):this.setState({errorMsg:"Email adress is not valid"})}},{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement(n.Fragment,null,o.a.createElement(O.f,{className:t.root,elevation:1},o.a.createElement(k.a,{className:t.header,position:"static",color:"default"},o.a.createElement(O.n,{className:t.title},"Register")),o.a.createElement("div",{className:"Login"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(W.a,{item:!0,xs:12,className:t.field},o.a.createElement(O.m,{id:"name",variant:"outlined",label:"Name",inputRef:function(t){return e.name=t}})),o.a.createElement(W.a,{item:!0,xs:12,className:t.field},o.a.createElement(O.m,{id:"email",variant:"outlined",label:"Email",inputRef:function(t){return e.email=t}})),o.a.createElement(W.a,{item:!0,xs:12,className:t.field},o.a.createElement(O.m,{id:"userName",variant:"outlined",label:"User Name",inputRef:function(t){return e.userName=t}})),o.a.createElement(W.a,{item:!0,xs:12,className:t.field},o.a.createElement(O.m,{ref:"password",type:"password",variant:"outlined",inputRef:function(t){return e.password=t},label:"Password"})),o.a.createElement("p",{className:t.error},this.state.errorMsg),o.a.createElement(O.a,{type:"submit",variant:"contained",color:"primary",className:t.button},"Create account")))))}}]),t}(n.Component),P=Object(w.withStyles)(H)(G);var Y=Object(p.b)(function(e){return Object(S.a)({},e.register)},function(e){return{register:function(t,a,n,o){(function(e,t,a,n){return L.a.post(U+"/users/register",{username:e,password:t,name:a,email:n},{headers:{"Content-Type":"application/json"}})})(t,a,n,o).then(function(t){console.log("User register succeeded"),e({type:"REGISTER_SUCCEEDED",data:t.data}),C.push("/")}).catch(function(t){console.error("User register failed"),e({type:"REGISTER_FAILED",error:t})})}}})(P),J=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"450px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},signUp:{textDecoration:"underline",cursor:"pointer"},error:{color:"red",fontSize:"18px",margin:"5px"},field:{margin:"10px"}}},K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={errorMsg:""},a.handleSubmit=a.handleSubmit.bind(Object(z.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}}]),Object(l.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.userName.value,a=this.password.value;""==t||""==a?this.setState({errorMsg:"Field can not be empty"}):this.props.login(this.userName.value,this.password.value)}},{key:"componentWillReceiveProps",value:function(e){this.setState({errorMsg:e.errorMsg})}},{key:"routeToRegister",value:function(){C.push("register")}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props.classes;return o.a.createElement(n.Fragment,null,o.a.createElement(O.f,{className:t.root,elevation:1},o.a.createElement(k.a,{className:t.header,position:"static",color:"default"},o.a.createElement(O.n,{className:t.title},"Log In")),o.a.createElement(O.b,null),o.a.createElement("div",{className:"Login"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(W.a,{item:!0,xs:12,className:t.field},o.a.createElement(O.m,{id:"userName",variant:"outlined",label:"User Name",inputRef:function(t){return e.userName=t}})),o.a.createElement(W.a,{item:!0,xs:12,className:t.field},o.a.createElement(O.m,{ref:"password",type:"password",variant:"outlined",inputRef:function(t){return e.password=t},label:"Password"})),o.a.createElement("p",{className:t.error},this.state.errorMsg),o.a.createElement(W.a,{item:!0,xs:12},o.a.createElement(O.a,{type:"submit",variant:"contained",color:"primary",className:t.button},"Log In"))),o.a.createElement("p",{className:t.text},"Dont have an account yet? ",o.a.createElement("a",{href:!0,className:t.signUp,onClick:this.routeToRegister}," Sign up ")))))}}]),t}(n.Component),V=Object(w.withStyles)(J)(K);var Z=Object(p.b)(function(e){return Object(S.a)({},e.login)},function(e){return{login:function(t,a){(function(e,t){return L.a.post(U+"/users/authenticate",{username:e,password:t},{headers:{"Content-Type":"application/json"}})})(t,a).then(function(t){console.log("User login succeeded"),e({type:"LOGIN_SUCCEEDED",data:t.data}),C.push("/device_list")}).catch(function(t){console.error("User login failed"),console.error(t),e({type:"LOGIN_FAILED",error:t.response.data.message})})}}})(V),$=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"450px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},signUp:{textDecoration:"underline",cursor:"pointer"},addButton:{color:"cornflowerblue",cursor:"pointer",marginRight:"80px"},tableRows:{height:"100px",maxHeight:"100px",overflowY:"scroll"},error:{color:"red",fontSize:"18px",margin:"5px"},addDeviceTitle:{color:"darkslategray",float:"left",marginLeft:"20px",marginBottom:"0px"}}},q=a(114),Q=a.n(q),X=a(167),ee=a.n(X),te=a(166),ae=a.n(te),ne=a(165),oe=a.n(ne),re=a(168),ie=a.n(re),se=a(71),le=a.n(se),ce=a(75),ue=a.n(ce),de=a(73),pe=a.n(de),me=a(74),he=a.n(me),ge=a(72),fe=a.n(ge),Ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleRouteToStatus=function(e){a.props.resetStatus(),a.props.updateAdruinoId(e)},a.handleAddRow=function(e){e.preventDefault();var t=a.id.value,n=a.name.value;""==t||""==n?a.setState({errorMsg:"Field can not be empty"}):isNaN(t)?a.setState({errorMsg:"Device id field must contain only numbers"}):(a.props.addNewDevice(a.props.token,a.props.user_id,a.id.value,a.name.value),a.setState({formElement:e.target}))},a.handleDeleteRow=function(e){a.props.deleteDevice(a.props.token,a.props.user_id,e)},a.state={errorMsg:"",devices:[],isDialogOpen:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserDevices(this.props.token,this.props.user_id)}}]),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errorMsg?this.setState({errorMsg:e.errorMsg}):e.devices&&(this.state.formElement&&this.state.formElement.reset(),this.setState({devices:e.devices,errorMsg:""}))}},{key:"routeToStatusHistory",value:function(){C.push("status_history")}},{key:"routeToStatistics",value:function(){C.push("statistics_chart")}},{key:"logout",value:function(){this.props.logout(),C.push("")}},{key:"handleCloseDialog",value:function(){this.setState({isDialogOpen:!1})}},{key:"render",value:function(){var e=this;console.log(this.props);var t=this.props,a=t.classes;t.devices;return o.a.createElement(n.Fragment,null,o.a.createElement(O.f,{className:a.root,elevation:1},o.a.createElement(k.a,{className:a.header,position:"static",color:"default"},o.a.createElement(O.n,{className:a.title},"Your Devices"),o.a.createElement("div",null,o.a.createElement(oe.a,{onClick:this.logout.bind(this),style:{float:"right",fontSize:35,cursor:"pointer"}}),o.a.createElement(ae.a,{onClick:this.routeToStatusHistory,style:{float:"left",fontSize:35,cursor:"pointer"}}),o.a.createElement(ee.a,{onClick:this.routeToStatistics,style:{float:"left",fontSize:35,cursor:"pointer"}}),o.a.createElement(ie.a,{onClick:function(){return e.setState({isDialogOpen:!0})},style:{float:"left",fontSize:35,cursor:"pointer"}}))),o.a.createElement(O.h,{className:a.table},o.a.createElement(O.k,null,o.a.createElement(O.l,null,o.a.createElement(O.j,null,"Device Id"),o.a.createElement(O.j,null,"Description"),o.a.createElement(O.j,null)))),o.a.createElement("div",{style:{overflow:"auto",maxHeight:"300px"}},o.a.createElement(O.h,{style:{tableLayout:"fixed"}},o.a.createElement(O.i,{className:a.tableRows},this.state.devices&&this.state.devices.map(function(t){return o.a.createElement(O.l,{key:t.id,hover:!0},o.a.createElement(O.j,{component:"th",scope:"row",onClick:function(){return e.handleRouteToStatus(t.id)}},t.id),o.a.createElement(O.j,{onClick:function(){return e.handleRouteToStatus(t.id)}},t.name),o.a.createElement(O.j,null,o.a.createElement(Q.a,{onClick:function(){return e.handleDeleteRow(t.id)},style:{cursor:"pointer"}})))})))),o.a.createElement(le.a,{open:this.state.isDialogOpen,onClose:this.handleCloseDialog.bind(this),"aria-labelledby":"form-dialog-title"},o.a.createElement("form",{onSubmit:this.handleAddRow},o.a.createElement(fe.a,{id:"form-dialog-title"},"Add a new device"),o.a.createElement(pe.a,null,o.a.createElement(he.a,null,"Add a new gas monitor device."),o.a.createElement(O.m,{id:"id",placeholder:"Device Id",inputRef:function(t){return e.id=t},autoFocus:!0,margin:"dense",fullWidth:!0}),o.a.createElement(O.m,{id:"name",placeholder:"Name",inputRef:function(t){return e.name=t},margin:"dense",fullWidth:!0})),o.a.createElement(ue.a,null,o.a.createElement(O.a,{onClick:this.handleCloseDialog.bind(this),color:"primary"},"Close"),o.a.createElement(O.a,{onClick:this.handleCloseDialog.bind(this),color:"primary",type:"submit"},"Add")))),o.a.createElement("p",{className:a.error},this.state.errorMsg)))}}]),t}(n.Component),ve=Object(w.withStyles)($)(Ee);function be(e){return{type:"DEVICE_ACTION_SUCCEEDED",data:e}}var ye=Object(p.b)(function(e){return Object(S.a)({token:e.app.token,user_id:e.app.user_id},e.arduionsList,e.login)},function(e){return{logout:function(){console.log("Logged out"),e({type:"LOGOUT"})},resetStatus:function(){e({type:"STATUS_RESET"})},getUserDevices:function(t,a){console.log("token"+t),function(e,t){return L.a.get(U+"/devices/"+t,{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})}(t,a).then(function(t){console.log("User devices loaded"),e({type:"ARDUIONS_LIST_LOADED",data:t.data})}).catch(function(e){console.error("User devices load failed"),console.error(e)})},updateAdruinoId:function(t){e({type:"UPDATE_ARDUINO_ID",data:t}),C.push("/device_status/"+t)},addNewDevice:function(t,a,n,o){(function(e,t,a,n){return L.a.post(U+"/devices/"+t,{id:a,name:n},{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})})(t,a,n,o).then(function(t){console.log("Device with id "+n+" was added successfully."),e(be(t.data))}).catch(function(t){console.log("Error in device addition with id "+n),console.log(t.response),e({type:"DEVICE_ADDITION_FIELD",error:t.response.data.message})})},deleteDevice:function(t,a,n){(function(e,t,a){return L.a.delete(U+"/devices/"+t,{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"},data:{arduinoId:a}})})(t,a,n).then(function(t){console.log("Delete device with id "+n+" succeeded."),e(be(t.data))}).catch(function(e){console.log("Error in deleting device with id "+n),console.log(e)})},updateDevice:function(t,a,n){(function(e,t,a){return L.a.put(U+"/devices/5caba627e4b63200044dc316",{id:t,name:a},{headers:{authorization:"Bearer "+e,"Content-Type":"application/json"}})})(t,a,n).then(function(t){console.log("Device with id "+a+" was updated successfully."),e(be(t.data))}).catch(function(e){console.log("Error in device updating with id "+a),console.log(e)})}}})(ve),Se=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"450px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},chart:{width:"100%",height:"280px"},tabs:{fontSize:"20px",color:"Black",fontFamily:"Montserrat"},loader:{marginTop:"100px"}}},Oe=a(115),xe=a(42),we=(a(390),a(170)),De=a.n(we),ke={hAxis:{title:"Days"},vAxis:{title:"Times",viewWindow:{min:0,max:10}},legend:{position:"none"}},je=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={tabIndex:0,isLoading:!0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getStatistics(this.props.token,this.props.user_id)}}]),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,r=t.lightOptions,i=t.gasOptions;return o.a.createElement(n.Fragment,null,o.a.createElement(O.f,{className:a.root,elevation:1},o.a.createElement(k.a,{className:a.header,position:"static",color:"default"},o.a.createElement(O.n,{className:a.title},"Statistics")),this.state.isLoading&&o.a.createElement("div",{className:a.loader},o.a.createElement(De.a,{type:"Oval",color:"#00BFFF",height:"100",width:"100"})),!this.state.isLoading&&o.a.createElement(xe.d,{selectedIndex:this.state.tabIndex,onSelect:function(t){return e.setState({tabIndex:t})},className:a.tabs},o.a.createElement(xe.b,null,o.a.createElement(xe.a,null,"Light"),o.a.createElement(xe.a,null,"Gas")),o.a.createElement(xe.c,null,o.a.createElement("div",null,o.a.createElement("p",null,"Last week light statistics "),o.a.createElement(Oe.a,{className:a.chart,chartType:"ColumnChart",data:r,options:ke}))),o.a.createElement(xe.c,null,o.a.createElement("div",null,o.a.createElement("p",null,"Last week gas statistics "),o.a.createElement(Oe.a,{className:a.chart,chartType:"ColumnChart",data:i,options:ke}))))))}}]),t}(n.Component),Te=Object(w.withStyles)(Se)(je);var Ne=Object(p.b)(function(e){return Object(S.a)({token:e.app.token,user_id:e.app.user_id},e.arduionsList,e.login,e.statisticsChart)},function(e){return{getStatistics:function(t,a){M(t,a).then(function(t){var a=function(e){var t=new Date;t.setDate(t.getDate()-7);var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=[0,0,0,0,0,0,0],o=[0,0,0,0,0,0,0],r=[];e.forEach(function(e){r=r.concat(e.history)}),r.forEach(function(e){var a=new Date(e.time);a>t&&(e.gasStatus&&o[a.getDay()]++,e.lightStatus&&n[a.getDay()]++)});for(var i=0;i<(new Date).getDay()+1;i++){var s=a.shift(),l=n.shift(),c=o.shift();a.push(s),n.push(l),o.push(c)}for(var u=[["Element","Count",{role:"style"}]],d=[["Element","Count",{role:"style"}]],p=0;p<7;p++)u.push([a[p],o[p],"cornflowerblue"]),d.push([a[p],n[p],"cornflowerblue"]);return{lightOptions:d,gasOptions:u}}(t.data);e({type:"STATISTICS_DATA_FETCHED",data:a})}).catch(function(e){console.error("User devices load failed"),console.error(e)})}}})(Te),Ce=a(50),Ie=function(e){return{root:Object(S.a)({},e.mixins.gutters(),{paddingBottom:2*e.spacing.unit,height:"450px",width:"85% ",paddingRight:"0px !important",paddingLeft:"0px !important"}),header:{paddingTop:"10px",backgroundColor:"cornflowerblue",color:"whitesmoke !important"},title:{fontSize:"35px",fontWeight:"bold",color:"whitesmoke"},text:{fontSize:"16px",color:"black"},signUp:{textDecoration:"underline",cursor:"pointer"}}},_e=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleExpand=function(e){var t=Object(Ce.a)(a.state.expandedRows),n=(a.state.allExpanded,t.findIndex(function(t){return t===e.id}));n>-1?(console.log("Collapsing "+e.id+" "+n),t.splice(n,1)):(console.log("Expanding "+e.id),t.push(e.id)),console.log("Expanded rows"),console.log(t),a.setState({expandedRows:Object(Ce.a)(t)})},a.isExpanded=function(e){return a.state.expandedRows.find(function(t){return t===e.id})>-1},a.expandAll=function(e){if(console.log("ExapndedRows: "+a.state.expandedRows.length),console.log("devices:      "+e.length),a.state.expandedRows.length===e.length){a.setState({expandedRows:[].concat([])}),console.log("Collapsing all...")}else{var t=e.map(function(e){return e.history.arduinoId});a.setState({expandedRows:Object(Ce.a)(t)}),console.log("Expanding all..."),console.log("Expanded rows "+t.length)}},a.getRows=function(e){var t=[],n=o.a.createElement(O.l,{onClick:function(){return a.handleExpand(e)}},o.a.createElement(O.j,null,o.a.createElement(I.a,null,a.isExpanded(e)?"-":"+")),o.a.createElement(O.j,null,e.id));if(t.push(n),a.isExpanded(e)){var r=e.history.map(function(e){return o.a.createElement(O.l,null,o.a.createElement(O.j,{colSpan:"4"},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"attribute"},o.a.createElement("div",{className:"attribute-name"},"time used::"),o.a.createElement("div",{className:"attribute-value"},e.time)),o.a.createElement("br",null),o.a.createElement("div",{className:"attribute"},o.a.createElement("div",{className:"attribute-name"},"Light status:"),o.a.createElement("div",{className:"attribute-value"},e.lightStatus.toString())),o.a.createElement("br",null),o.a.createElement("div",{className:"attribute"},o.a.createElement("div",{className:"attribute-name"},"Gas status:"),o.a.createElement("div",{className:"attribute-value"},e.gasStatus.toString())),o.a.createElement("br",null)))});t.push(r)}return t},a.getTable=function(){var e=a.state.devicesHistory.map(function(e){return a.getRows(e)});return o.a.createElement(O.h,{style:{tableLayout:"fixed"},className:"my-table"},o.a.createElement(O.i,null,e))},a.state={expandedRows:[],devicesHistory:[]},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getStatusHistory(this.props.token,this.props.user_id)}}]),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.devicesHistory&&(this.state.formElement&&this.state.formElement.reset(),this.setState({devicesHistory:e.devicesHistory}))}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(n.Fragment,null,o.a.createElement(O.f,{className:e.root,elevation:1},o.a.createElement(k.a,{className:e.header,position:"static",color:"default"},o.a.createElement(O.n,null,"Your devices history")),o.a.createElement("div",{style:{overflow:"auto",height:"300px"}},this.getTable())))}}]),t}(n.Component),Re=Object(w.withStyles)(Ie)(_e);var Ae=Object(p.b)(function(e){return Object(S.a)({token:e.app.token,user_id:e.app.user_id},e.statusHistory,e.login)},function(e){return{getStatusHistory:function(t,a){console.log("token"+t),M(t,a).then(function(t){console.log("status history  loaded"),console.log(t.data);var a={devicesHistory:function(){var e=[];return t.data.forEach(function(t){t.history.filter(function(e){if(!0===e.gasStatus||!0===e.lightStatus)return e}).length>0&&e.push(t)}),e}()};e({type:"STATUS_HISTORY_DATA_FETCHED",data:a})}).catch(function(e){console.error("status history loading failed"),console.error(e)})}}})(Re),Le=a(421),Ue=Object(m.c)(y);Ue.subscribe(function(){localStorage.setItem("TOKEN",Ue.getState().app.token),localStorage.setItem("USER_ID",Ue.getState().app.user_id)});var Me=Object(w.createMuiTheme)({typography:{fontFamily:"Montserrat"}}),Fe=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(w.MuiThemeProvider,{theme:Me},o.a.createElement(p.a,{store:Ue},o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(Le.b,{history:C},o.a.createElement(Le.a,{path:"/",exact:!0,component:Z}),o.a.createElement(Le.a,{path:"/register",component:Y}),o.a.createElement(Le.a,{path:"/device_status/:id",component:F}),o.a.createElement(Le.a,{path:"/device_list",component:ye}),o.a.createElement(Le.a,{path:"/status_history",component:Ae}),o.a.createElement(Le.a,{path:"/statistics_chart",component:Ne}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[239,1,2]]]);
//# sourceMappingURL=main.57dc7bf0.chunk.js.map