(this.webpackJsonptextutiles=this.webpackJsonptextutiles||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),l=a(4),n=a.n(l),s=(a(9),a(2)),r=(a(10),a(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",id:"nav",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link","aria-current":"page",href:"#",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"#",children:e.about})})]}),Object(r.jsxs)("form",{className:"d-flex",children:[Object(r.jsx)("div",{className:"container my-2",children:Object(r.jsxs)("select",{className:"form-select form-select-sm ","aria-label":".form-select-sm example",defaultValue:"",onChange:function(t){e.setcolor(t.target.value),console.log("clicked in nav"+t.target.value)},id:"theme",children:[Object(r.jsx)("option",{value:"",disabled:!0,children:"Choose a Theme ..."}),Object(r.jsx)("option",{value:"green",children:"Green"}),Object(r.jsx)("option",{value:"pink",children:"pink"}),Object(r.jsx)("option",{value:"blue",children:"Blue"}),Object(r.jsx)("option",{value:"default",children:"default"})]})}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," my-1"),children:[Object(r.jsx)("input",{className:"form-check-input my-3",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggle}),Object(r.jsxs)("label",{className:"form-check-label mx-0 ",htmlFor:"flexSwitchCheckDefault",children:["Enable ","light"===e.mode?"dark":"light"," mode"]})]})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(s.a)(t,2),o=a[0],l=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:{backgroundColor:("dark"===e.mode||e.theme,"dark"),color:"dark"===e.mode?"white":"#0f2b54"},children:[Object(r.jsx)("h1",{children:e.title}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",id:"mybox",rows:"8",onChange:function(e){console.log("Onchanged"),l(e.target.value)},value:o,placeholder:"Type something..."})}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("uppercase was clicked "+o);var t=o.toUpperCase();l(t),e.showalert("Converted to uppercase !","success")},style:{backgroundColor:("dark"===e.mode||e.theme,"light".concat(e.theme)),color:"dark"===e.mode?"white":"#0f2b54"},children:"convert to uppercase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("lowercase was clicked "+o);var t=o.toLowerCase();l(t),e.showalert("Converted to lowercase !","success")},style:{backgroundColor:("dark"===e.mode||e.theme,"light".concat(e.theme||e.mode)),color:"dark"===e.mode?"white":"#0f2b54"},children:"convert to Lowercase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("clear was clicked ");l(""),e.showalert("Text has been cleared !","success")},style:{backgroundColor:("dark"===e.mode||e.theme,"light".concat(e.theme)),color:"dark"===e.mode?"white":"#0f2b54"},children:"Clear text"}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("copy was used");var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.showalert("copied to clipboard !","success")},style:{backgroundColor:("dark"===e.mode||e.theme,"light".concat(e.theme)),color:"dark"===e.mode?"white":"#0f2b54"},children:"copy the text"}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Remove was used");var t=o.split(/[ ]+/);l(t.join(" ")),e.showalert("Extra spaces has been removed !","success")},style:{backgroundColor:("dark"===e.mode||e.theme,"light".concat(e.theme)),color:"dark"===e.mode?"white":"#0f2b54"},children:"remove extra spaces"})]}),Object(r.jsxs)("div",{className:"container my-3",style:{backgroundColor:("dark"===e.mode||e.theme,"dark"),color:"dark"===e.mode?"white":"#0f2b54"},children:[Object(r.jsx)("h1",{children:"Your Text Summary"}),Object(r.jsxs)("p",{style:{color:0===o.length?"grey":"".concat("dark"===e.mode?"white":"black")},children:[o.split(" ").length," words and ",o.length," characters"]}),Object(r.jsxs)("p",{style:{color:0===o.length?"grey":"".concat("dark"===e.mode?"white":"black")},children:[.008*o.split(" ").length," minutes read"]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{style:{color:0===o.length?"grey":"".concat("dark"===e.mode?"white":"black")},children:o.length>0?o:"Enter something in textarea to preview here"})]})]})}var b=function(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),"! "]}),e.alert.msg,Object(r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})};var h=function(){var e=Object(c.useState)("light"),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(c.useState)(null),n=Object(s.a)(l,2),h=n[0],m=n[1],u=Object(c.useState)("white"),j=Object(s.a)(u,2),g=j[0],x=j[1],p=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),1500)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"textutiles",about:"about",mode:a,toggle:function(){"light"===a?(o("dark"),document.body.style.backgroundColor="#2e363e",p("dark mode has been enabled","success"),document.title="Textutiles - Dark mode"):(o("light"),document.body.style.backgroundColor="white",p("light mode has been enabled","success"))},theme:g,setcolor:function(e){"light"===a&&"default"===e&&(x(e="white"),console.log("here color is "+e),document.body.style.backgroundColor="white"),"dark"===a&&"default"===e?(x(e="#2e363e"),console.log(e),document.body.style.backgroundColor="#2e363e"):document.body.style.backgroundColor=e}}),Object(r.jsx)(b,{alert:h}),Object(r.jsxs)("div",{className:"container my-3",children:[Object(r.jsx)(d,{title:"Enter your text to analyse",mode:a,showalert:p,theme:g}),Object(r.jsx)(d,{title:"Enter your text to analyse",mode:a,showalert:p,theme:g})]})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,l=t.getLCP,n=t.getTTFB;a(e),c(e),o(e),l(e),n(e)}))};n.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.258aca5d.chunk.js.map