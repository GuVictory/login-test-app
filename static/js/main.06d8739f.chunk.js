(this["webpackJsonplogin-app"]=this["webpackJsonplogin-app"]||[]).push([[0],{22:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(16),n=a.n(r),o=a(8),l=a(2),i=a(4),d=a.n(i),j=(a(22),a(1)),b=function(e){var t=e.className,a=e.children;return Object(j.jsx)("div",{className:d()("PageContainer",t),children:a})},u=a(7),p=(a(24),function(e){var t=e.className,a=e.children,s=e.disabled,c=e.type,r=e.tabIndex,n=e.onClick;return Object(j.jsx)("button",{className:d()("Button",{disabled:s},t),type:c,tabIndex:r,onClick:s?void 0:n,children:Object(j.jsx)("span",{className:d()("Button-text"),children:a})})}),O=a(10),m=(a(25),function(e){var t=e.className,a=e.children,s=e.width,c=void 0===s?"feat":s;return Object(j.jsx)("div",{className:d()("Card",Object(O.a)({},"Card-".concat(c),!0),t),children:a})}),h=a(5),x=function(e,t){switch(t.type){case"setUsername":return Object(h.a)(Object(h.a)({},e),{},{username:t.payload,isError:!1});case"setPassword":return Object(h.a)(Object(h.a)({},e),{},{password:t.payload,isError:!1});case"setIsButtonDisabled":return Object(h.a)(Object(h.a)({},e),{},{isButtonDisabled:t.payload});case"loginSuccess":return Object(h.a)(Object(h.a)({},e),{},{helperText:t.payload,isError:!1});case"loginFailed":return Object(h.a)(Object(h.a)({},e),{},{helperText:t.payload,isError:!0});case"setIsError":return Object(h.a)(Object(h.a)({},e),{},{isError:t.payload})}},g={username:"",password:"",isButtonDisabled:!0,helperText:"",isError:!1},y=(a(26),a(17)),f=a(14),w=a(15),v=(a(32),["className","error"]),N=Object(j.jsx)(f.a,{className:"icon",icon:w.a}),C=Object(j.jsx)(f.a,{className:"icon",icon:w.b}),P=function(e){var t=e.className,a=e.error,c=Object(y.a)(e,v),r="password"===(null===c||void 0===c?void 0:c.type),n=Object(s.useState)(!1),o=Object(u.a)(n,2),l=o[0],i=o[1],b=Object(s.useCallback)((function(e){var t;e.preventDefault(),null===(t=c.onChange)||void 0===t||t.call(c,e.target.value)}),[c]),p=Object(s.useCallback)((function(){i(!l)}),[l]),O=Object(s.useMemo)((function(){return Object(j.jsx)("input",Object(h.a)(Object(h.a)({className:d()("TextInput__input"),onChange:b},c),{},{type:r?l?"text":"password":null===c||void 0===c?void 0:c.type}))}),[b,r,c,l]);return Object(j.jsxs)("div",{className:d()("TextInput",{TextInput__error:a},t),children:[O,r&&Object(j.jsx)(j.Fragment,{children:l?Object(j.jsx)("i",{onClick:p,children:N}):Object(j.jsx)("i",{onClick:p,children:C})})]})},E=function(){var e=Object(s.useReducer)(x,g),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(s.useEffect)((function(){a.username.trim()&&a.password.trim()?c({type:"setIsButtonDisabled",payload:!1}):c({type:"setIsButtonDisabled",payload:!0})}),[a.username,a.password]);var r=Object(s.useCallback)((function(){"test@email.com"===a.username&&"password"===a.password?(c({type:"loginSuccess",payload:"Login Successfully"}),document.documentElement.style.setProperty("--card-shadow-color-1","rgba(110, 252, 252, 0.8)"),document.documentElement.style.setProperty("--card-shadow-color-2","rgba(66, 155, 155, 0.8)")):(c({type:"loginFailed",payload:"Incorrect username or password"}),document.documentElement.style.setProperty("--card-shadow-color-1","rgba(252, 110, 110, 0.8)"),document.documentElement.style.setProperty("--card-shadow-color-2","rgba(252, 110, 110, 0.8)"))}),[a.password,a.username]),n=Object(s.useCallback)((function(e){13!==e.keyCode&&13!==e.which||a.isButtonDisabled||r()}),[r,a.isButtonDisabled]),l=Object(s.useCallback)((function(e){c({type:"setPassword",payload:e.target.value})}),[]),i=Object(s.useCallback)((function(e){c({type:"setUsername",payload:e.target.value})}),[]);return Object(j.jsx)(b,{className:d()("LoginPage"),children:Object(j.jsxs)(m,{className:d()("LoginPage__card"),children:[Object(j.jsx)("h1",{className:d()("LoginPage__card-title"),children:"Welcome Back"}),Object(j.jsx)(P,{className:d()("LoginPage__card-input"),type:"text",placeholder:"Email",tabIndex:1,onChange:i,onKeyPress:n,error:a.isError}),Object(j.jsx)(P,{className:d()("LoginPage__card-input"),type:"password",placeholder:"Password",tabIndex:2,onChange:l,onKeyPress:n,error:a.isError}),Object(j.jsx)("span",{className:d()("LoginPage__card-error",{visible:a.isError}),children:a.helperText}),Object(j.jsx)(p,{children:"Sign In",className:"test",disabled:a.isButtonDisabled,tabIndex:3,onClick:r}),Object(j.jsxs)("div",{className:d()("LoginPage__card-link"),children:["New here? ",Object(j.jsx)(o.b,{to:"/register",children:"Create account"})]}),Object(j.jsx)("div",{className:d()("LoginPage__card-link"),children:Object(j.jsx)(o.b,{to:"/forgot",children:"Forgot your password?"})})]})})},_=function(){return Object(j.jsx)(o.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(E,{})}),Object(j.jsx)(l.a,{path:"/login",element:Object(j.jsx)(E,{})}),Object(j.jsx)(l.a,{path:"/register",element:Object(j.jsx)(b,{children:Object(j.jsx)("p",{children:"\u0411\u044b\u0442\u044c \u043c\u043e\u0436\u0435\u0442 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c"})})}),Object(j.jsx)(l.a,{path:"/forgot",element:Object(j.jsx)(b,{children:Object(j.jsxs)("p",{children:["\u0417\u0430\u0431\u044b\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u0438 - \u043f\u043b\u043e\u0445\u043e, \u043d\u043e \u0435\u0441\u0442\u044c \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u044e\u0437\u0435\u0440:",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("code",{children:"Email: test@email.com"}),Object(j.jsx)("br",{}),Object(j.jsx)("code",{children:"Password: password"})]})})})]})})})};a(33);n.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.06d8739f.chunk.js.map