(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var o=c(1),s=c.n(o),n=c(7),a=c.n(n),d=c(3),l=(c(13),c(8)),i=c(0),r=function(t){var e=t.setInputText,c=t.todos,o=t.setTodos,s=t.inputText,n=t.setStatus;t.setFilteredTodos;return Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{type:"text",className:"todo-input",value:s,onChange:function(t){return e(t.target.value)}}),Object(i.jsx)("button",{onClick:function(t){t.preventDefault();var n={id:Math.floor(1e3*Math.random()),text:s,completed:!1};o([].concat(Object(l.a)(c),[n])),e("")},className:"todo-button",type:"submit",children:Object(i.jsx)("i",{className:"fas fa-plus-square"})}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",{name:"todos",className:"filter-todo",onChange:function(t){return n(t.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"completed",children:"Completed"}),Object(i.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},j=c(6),u=function(t){var e=t.todo,c=t.todos,o=t.setTodos;return Object(i.jsxs)("div",{className:"todo ",children:[Object(i.jsx)("li",{className:"todo-item ".concat(e.completed?"completed":""),children:e.text}),Object(i.jsx)("button",{className:"complete-btn",onClick:function(){o(c.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t})))},children:Object(i.jsx)("i",{className:"fas fa-check"})}),Object(i.jsx)("button",{className:"trash-btn",onClick:function(){o(c.filter((function(t){return t.id!==e.id})))},children:Object(i.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,c=t.setTodos,o=t.filteredTodos;return Object(i.jsx)("div",{className:"todo-container",children:Object(i.jsx)("ul",{className:"todo-list",children:o.map((function(t){return Object(i.jsx)(u,{todos:e,setTodos:c,todo:t},t.id)}))})})};var O=function(){var t=Object(o.useState)(""),e=Object(d.a)(t,2),c=e[0],s=e[1],n=Object(o.useState)([]),a=Object(d.a)(n,2),l=a[0],j=a[1],u=Object(o.useState)("all"),O=Object(d.a)(u,2),m=O[0],f=O[1],p=Object(o.useState)([]),x=Object(d.a)(p,2),h=x[0],v=x[1];Object(o.useEffect)((function(){N()}),[l,m]);var N=function(){switch(m){case"completed":v(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(l.filter((function(t){return t.completed})));break;default:v(l)}};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Will's todo list"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)(r,{inputText:c,setTodos:j,setInputText:s,todos:l,setStatus:f}),Object(i.jsx)(b,{todos:l,setTodos:j,setFilteredTodos:v,filteredTodos:h})]})]})};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a1f1bcb6.chunk.js.map