(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports=n(217)},190:function(e,t,n){},191:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(39),i=n.n(s),o=n(3),u=n(29),c=n(98),l=n(28),d=n(101),m=[],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SESSION":return[].concat(Object(d.a)(e),[t.session]);case"GET_SESSIONS":return t.sessions;case"REMOVE_SESSION":return e.filter(function(e){return e.id!==t.id});case"EDIT_SESSION":return e.map(function(e){return e.id===t.id?Object(l.a)({},e,t.newData):e});default:return e}},E={text:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(l.a)({},e,{text:t.text});default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{uid:t.uid};case"LOGOUT":return{};default:return e}},b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,g=n(41),v=n.n(g),O={apiKey:"AIzaSyCenGtO42IZtzBJWrIMGjmG6cZtW8hCA1g",authDomain:"studentsessions-f28d1.firebaseapp.com",databaseURL:"https://studentsessions-f28d1.firebaseio.com",projectId:"studentsessions-f28d1",storageBucket:"studentsessions-f28d1.appspot.com",messagingSenderId:"714019666546"};v.a.initializeApp(O);var S=v.a.database(),y=new v.a.auth.GoogleAuthProvider,j=(n(190),n(191),n(27)),k=n(8),A=n(16),N=n(17),_=n(19),I=n(18),w=n(20),D=n(11),L=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(_.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){e.preventDefault(),n.props.startRemoveSession({id:n.props.id})},n}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props,t=e.studentEmail,n=e.id;return r.a.createElement("div",null,r.a.createElement("p",{style:{display:"inline-block",marginBottom:"20px"}},t),r.a.createElement(D.a,{to:"/edit/".concat(n),className:"button"},"Edit"),r.a.createElement("button",{onClick:this.handleClick},"Delete"))}}]),t}(r.a.Component),C=Object(o.b)(null,function(e,t){return{startRemoveSession:function(t){return e(function(e){var t=e.id;return function(e,n){var a=n().auth.uid;return S.ref("users/".concat(a,"/sessions/").concat(t)).remove().then(function(){e(function(){return{type:"REMOVE_SESSION",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:t}))})}}(t))}}})(L),G=Object(o.b)(function(e){return{sessions:e.sessions.filter(function(e){return e.studentEmail?e.studentEmail:"no email provided"})}})(function(e){return r.a.createElement("div",null,0===e.sessions.length?r.a.createElement("p",null,"You don't have any sessions"):e.sessions.map(function(e){return r.a.createElement(C,Object.assign({key:e.id},e))}))}),T=function(e){function t(){return Object(A.a)(this,t),Object(_.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Your Sessions "),r.a.createElement(G,null))}}]),t}(a.Component),x=Object(o.b)(void 0,function(e){return{startLogin:function(){return e(function(){return v.a.auth().signInWithPopup(y)})}}})(function(e){var t=e.startLogin;return r.a.createElement("div",null,r.a.createElement("h1",null," Login with Google "),r.a.createElement("button",{onClick:t}," Just Login "))}),R=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(_.a)(this,Object(I.a)(t).call(this,e))).onStudentEmailChange=function(e){var t=e.target.value;n.setState({studentEmail:t})},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit({studentEmail:n.state.studentEmail})},n.state={studentEmail:e.session?e.session.studentEmail:""},n}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"email",value:this.state.studentEmail,onChange:this.onStudentEmailChange,placeholder:"Student's email address",autoFocus:!0}),r.a.createElement("button",null," Submit ")))}}]),t}(a.Component),U=Object(o.b)()(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null," Add New Session "),r.a.createElement(R,{onSubmit:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,n){var a=n().auth.uid,r=e.studentEmail,s={studentEmail:void 0===r?"":r};return S.ref("users/".concat(a,"/sessions")).push(s).then(function(e){t(function(e){return{type:"ADD_SESSION",session:e}}(Object(l.a)({id:e.key},s)))})}}(t)),e.history.push("/dashboard")}}))}),B=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(_.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.startEditSession(n.props.session.id,e),n.props.history.push("/dashboard")},n}return Object(w.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props.session;return r.a.createElement("div",null,r.a.createElement("h1",null," Edit Session "),r.a.createElement(R,{session:e,onSubmit:this.onSubmit}))}}]),t}(r.a.Component),F=Object(o.b)(function(e,t){return{session:e.sessions.find(function(e){return e.id===t.match.params.id})}},function(e,t){return{startEditSession:function(t,n){return e(function(e,t){return function(n,a){var r=a().auth.uid;return S.ref("users/".concat(r,"/sessions/").concat(e)).update(t).then(function(){n(function(e,t){return{type:"EDIT_SESSION",id:e,newData:t}}(e,t))})}}(t,n))}}})(B),q=n(30),M=n(100),J=n.n(M),K="AKfycbybxxydhZ1KDHGUJExxiU1ZqO-IfTqFhk0QyCknBNKSsLSWcXo",W=function(e){function t(e){var n;return Object(A.a)(this,t),(n=Object(_.a)(this,Object(I.a)(t).call(this,e))).getSessions=n.getSessions.bind(Object(q.a)(Object(q.a)(n))),n.handleForm=n.handleForm.bind(Object(q.a)(Object(q.a)(n))),n.state={sessions:[],loading:!1,loadingStarted:!1,error:null,dates:[],duration:[],studentNames:[],sessionAggregates:[],mentor:{month:1,year:2019,email:""}},n}return Object(w.a)(t,e),Object(N.a)(t,[{key:"componentWillUpdate",value:function(e,t){this.state.mentor!==t.mentor&&this.getSessions(t.mentor)}},{key:"componentDidMount",value:function(){0}},{key:"handleForm",value:function(e){e.preventDefault();var t={month:e.target.elements.month.value,year:e.target.elements.year.value,email:e.target.elements.email.value};this.setState({mentor:t,loadingStarted:!0,loading:!0}),this.getSessions(t)}},{key:"getSessions",value:function(e){var t=this,n="https://script.google.com/macros/s/".concat(K,"/exec?email=").concat(e.email,"&key=").concat("ioHEDXRKPyTOqmaL_frc","&month=").concat(e.month,"&year=").concat(e.year);J.a.get(n).then(function(e){var n=e.data.aggregates,a=e.data.details.map(function(e){return e.date}),r=e.data.details.map(function(e){return e.student_name}),s=e.data.details.map(function(e){return e.duration});t.setState({sessions:e.data.details,studentNames:r,duration:s,dates:a,sessionAggregates:n,loading:!1,error:null})}).catch(function(e){t.setState({loading:!1,error:"Uh, oh, something is wrong :O"})})}},{key:"renderLoading",value:function(){return this.state.loading?r.a.createElement("p",null," Loading... "):r.a.createElement("p",null," Loaded ")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null," Track your sessions with students "),r.a.createElement("form",{onSubmit:this.handleForm},r.a.createElement("input",{type:"email",placeholder:"Email",name:"email",required:!0}),r.a.createElement("input",{type:"integer",placeholder:"Month (integer)",name:"month",required:!0}),r.a.createElement("input",{type:"integer",placeholder:"Year (integer)",name:"year",required:!0}),r.a.createElement("button",null," Go "),this.state.loadingStarted?this.renderLoading():r.a.createElement("p",null,r.a.createElement("small",null,"add your email, month and year")),r.a.createElement("span",{className:"error"},this.state.error," "))),r.a.createElement("section",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," Student Name "),r.a.createElement("th",null," Duration "),r.a.createElement("th",null," Date "))),r.a.createElement("tbody",null,this.state.sessions.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null," ",e.student_name," "),r.a.createElement("td",null," ",e.duration," "),r.a.createElement("td",null," ",e.date," "))}))),r.a.createElement("div",{className:"aggregates"},r.a.createElement("h4",null," Session count: ",this.state.sessionAggregates.session_count," "),r.a.createElement("h4",null," Session time: ",this.state.sessionAggregates.total_session_time," "),r.a.createElement("h4",null," Euros Billable: ",this.state.sessionAggregates.euros_billable," "))))}}]),t}(a.Component),X=function(){return r.a.createElement("div",null,"404 - ",r.a.createElement(D.a,{to:"/"},"Go home, be safe"))},P=n(58),Z=Object(o.b)(void 0,function(e){return{startLogout:function(){return e(function(){return v.a.auth().signOut()})}}})(function(e){var t=e.startLogout;return r.a.createElement("header",null,r.a.createElement(D.b,{to:"/dashboard"}," Dashboard | "),r.a.createElement(D.b,{to:"/addSession",activeClassName:"is-active"},"Add New | "),r.a.createElement(D.b,{to:"/oldSessions"}," Google Api Sessions "),r.a.createElement("button",{onClick:t}," Log out "))}),z=Object(o.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(P.a)(e,["isAuthenticated","component"]);return r.a.createElement(j.b,Object.assign({},a,{component:function(e){return t?r.a.createElement("div",null,r.a.createElement(Z,null),r.a.createElement(n,e)):r.a.createElement(j.a,{to:"/"})}}))}),V=Object(o.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(P.a)(e,["isAuthenticated","component"]);return r.a.createElement(j.b,Object.assign({},a,{component:function(e){return t?r.a.createElement(j.a,{to:"/dashboard"}):r.a.createElement(n,e)}}))}),Y=Object(k.a)(),H=function(){return r.a.createElement(j.c,{history:Y},r.a.createElement(j.d,null,r.a.createElement(V,{path:"/",component:x,exact:!0}),r.a.createElement(z,{path:"/dashboard",component:T}),r.a.createElement(z,{path:"/addSession",component:U}),r.a.createElement(z,{path:"/edit/:id",component:F}),r.a.createElement(j.b,{path:"/oldSessions",component:W}),r.a.createElement(j.b,{component:X})))},Q=Object(u.e)(Object(u.c)({sessions:h,filters:p,auth:f}),b(Object(u.a)(c.a))),$=r.a.createElement(o.a,{store:Q},r.a.createElement(H,null)),ee=!1,te=function(){ee||(i.a.render($,document.getElementById("root")),ee=!0)};v.a.auth().onAuthStateChanged(function(e){e?(Q.dispatch({type:"LOGIN",uid:e.uid}),Q.dispatch(function(e,t){var n=t().auth.uid;return S.ref("users/".concat(n,"/sessions")).once("value").then(function(t){var n=[];t.forEach(function(e){n.push(Object(l.a)({id:e.key},e.val()))}),e(function(e){return{type:"GET_SESSIONS",sessions:e}}(n))})}).then(function(){te(),"/"===Y.location.pathname&&Y.push("/dashboard")})):(Q.dispatch({type:"LOGOUT"}),te(),Y.push("/"))}),i.a.render(r.a.createElement("p",null," Loading... "),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.a852e088.chunk.js.map