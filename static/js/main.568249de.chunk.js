(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{108:function(e,t,c){},109:function(e,t,c){},112:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},127:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(60),a=c.n(s),i=c(48),n=c(5),o=c(32),d=c(67),l=c(3),j=Object(d.b)({name:"goods",initialState:{items:[],isFirstLoading:!0},reducers:{addProduct:function(e,t){e.items.push(t.payload)},updateProduct:function(e,t){var c=t.payload,r=c.id,s=c.updates,a=e.items.map((function(e){return e.id===r?Object(l.a)(Object(l.a)({},e),s):e}));return Object(l.a)(Object(l.a)({},e),{},{items:a})},deleteProduct:function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))},setGoods:function(e,t){e.items=t.payload},setLoading:function(e,t){e.isFirstLoading=t.payload}}}),m=j.actions,b=m.addProduct,u=(m.updateProduct,m.deleteProduct),O=m.setGoods,h=m.setLoading,x=j.reducer,g=Object(d.a)({reducer:{goods:x}}),p=(c(108),c(109),c(83)),f=c.n(p),v=c(1),N=Object(r.memo)((function(){return Object(v.jsx)("header",{className:"header",children:Object(v.jsxs)("nav",{className:"nav",children:[Object(v.jsx)(i.b,{to:"/",className:function(e){var t=e.isActive;return f()("link__item",{"is-active":t})},children:"Home Page"}),Object(v.jsx)(i.b,{to:"addNewGoods",className:function(e){var t=e.isActive;return f()("link__item",{"is-active":t})},children:"Add goods"})]})})})),y=function(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(N,{}),Object(v.jsx)("main",{className:"main",children:Object(v.jsx)(n.b,{})})]})},w=c(6),S=(c(112),Object(r.memo)((function(e){var t=e.nameSearch,c=e.setNameChange;return Object(v.jsx)("div",{className:"input-search",children:Object(v.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(v.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:t,onChange:function(e){return c(e.target.value)}}),Object(v.jsx)("span",{className:"icon is-left",children:Object(v.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),t&&Object(v.jsx)("span",{className:"icon is-right",children:Object(v.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})})}))),k=c(74),C=c(61),q=c(146),R=c(91),L=c.n(R),P=Object(r.memo)((function(e){var t=e.row,c=Object(o.b)();return Object(v.jsx)(q.a,{type:"button",onClick:function(){return c(u(t.id))},"aria-label":"delete",size:"large",children:Object(v.jsx)(L.a,{fontSize:"inherit"})})})),F=(c(120),[{header:"ID",accessorKey:"id"},{header:"Title",accessorKey:"title"},{header:"Description",accessorKey:"description"},{header:"Price",accessorKey:"price"},{header:"Images",accessorKey:"images",cell:function(e){var t=e.row.original;return Object(v.jsx)("img",{className:"prodImg",src:"string"!==typeof t.images?t.images[0]:t.images,alt:"img"})}},{header:"Rating",accessorKey:"rating"},{header:"Stock",accessorKey:"stock"},{header:"Category",accessorKey:"category"},{header:"Delete",accessorFn:function(e){return e},cell:function(e){var t=e.row.original;return Object(v.jsx)(P,{row:t})}}]),K=function(e){var t=e.data,c=Object(r.useState)([]),s=Object(w.a)(c,2),a=s[0],i=s[1],n=Object(k.b)({data:t,columns:F,state:{sorting:a},onSortingChange:i,getCoreRowModel:Object(C.b)(),getSortedRowModel:Object(C.c)(),debugTable:!0});return Object(v.jsx)("div",{className:"box",children:Object(v.jsxs)("table",{className:"table",children:[Object(v.jsx)("thead",{children:n.getHeaderGroups().map((function(e){return Object(v.jsx)("tr",{children:e.headers.map((function(e){var t;return Object(v.jsx)("th",{colSpan:e.colSpan,children:e.isPlaceholder?null:Object(v.jsx)("div",{className:"table-header",children:Object(v.jsxs)("div",{className:e.column.getCanSort()?"cursor-pointer select-none":"",onClick:e.column.getToggleSortingHandler(),children:[Object(k.a)(e.column.columnDef.header,e.getContext()),null!==(t={asc:" \u25b2",desc:" \u25bc"}[e.column.getIsSorted()])&&void 0!==t?t:null]})})},e.id)}))},e.id)}))}),Object(v.jsx)("tbody",{children:n.getRowModel().rows.map((function(e){return Object(v.jsx)("tr",{children:e.getVisibleCells().map((function(e){return Object(v.jsx)("td",{style:{verticalAlign:"middle"},children:Object(v.jsx)("div",{className:"table-row",children:Object(k.a)(e.column.columnDef.cell,e.getContext())})},e.id)}))},e.id)}))})]})})},D=Object(r.memo)((function(e){var t=e.nameSearch,c=Object(r.useState)(!1),s=Object(w.a)(c,2),a=s[0],i=s[1],n=Object(o.b)(),d=Object(o.c)((function(e){return e.goods.items})),l=Object(o.c)((function(e){return e.goods.isFirstLoading}));console.log({first:l,goods:d}),Object(r.useEffect)((function(){l&&(i(!0),fetch("https://dummyjson.com/products").then((function(e){return e.json()})).then((function(e){var t=e.products.map((function(e){return{id:e.id,title:e.title,description:e.description,price:e.price,images:e.images,rating:e.rating,stock:e.stock,category:e.category}}));n(O(t)),i(!1),n(h(!1))})))}),[d]);var j=d.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.category.toLowerCase().includes(t.toLowerCase())}));return Object(v.jsx)(v.Fragment,{children:a?Object(v.jsx)("p",{children:"Data is Loading..."}):Object(v.jsx)(K,{data:j})})})),G=(c(121),Object(r.memo)((function(){var e=Object(r.useState)(""),t=Object(w.a)(e,2),c=t[0],s=t[1];return Object(v.jsxs)("div",{className:"homePage",children:[Object(v.jsx)(S,{nameSearch:c,setNameChange:function(e){console.log({value:e}),s(e)}}),Object(v.jsx)(D,{nameSearch:c})]})}))),I=c(20),A=c(33),_=(c(122),function(){var e=Object(o.b)(),t=A.b({id:A.c().required("Required"),title:A.c().required("Required"),description:A.c().required("Required"),price:A.a().required("Required"),images:A.c().url().required("Required"),rating:A.a().required("Required"),stock:A.a().required("Required"),category:A.c().required("Required")});return Object(v.jsx)(I.d,{initialValues:{id:"",title:"",description:"",price:"",images:"",rating:"",stock:"",category:""},validationSchema:t,onSubmit:function(t,c){var r=c.resetForm;e(b(t)),r()},children:function(e){var t=e.isSubmitting;return Object(v.jsxs)(I.c,{className:"form",children:[Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(I.b,{placeholder:"id",className:"form-field",type:"text",id:"id",name:"id"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(I.a,{name:"id"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(I.b,{placeholder:"title",className:"form-field",type:"text",id:"title",name:"title"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(I.a,{name:"title"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(I.b,{placeholder:"description",className:"form-field",type:"text",id:"description",name:"description"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(I.a,{name:"description"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(I.b,{placeholder:"price",className:"form-field",type:"number",id:"price",name:"price"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(I.a,{name:"price"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(I.b,{placeholder:"images",className:"form-field",type:"text",id:"images",name:"images"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(I.a,{name:"images"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(I.b,{placeholder:"rating",className:"form-field",type:"number",id:"rating",name:"rating"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(I.a,{name:"rating"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(I.b,{placeholder:"stock",className:"form-field",type:"number",id:"stock",name:"stock"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(I.a,{name:"stock"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(I.b,{placeholder:"category",className:"form-field",type:"text",id:"category",name:"category"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(I.a,{name:"category"})})]}),Object(v.jsx)("button",{className:"bottom",type:"submit",disabled:t,children:"Submit"})]})}})}),H=Object(r.memo)((function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(_,{})})}));c(123),c(124),c(125);a.a.render(Object(v.jsx)(o.a,{store:g,children:Object(v.jsx)(i.a,{children:Object(v.jsx)(n.e,{children:Object(v.jsxs)(n.c,{path:"/",element:Object(v.jsx)(y,{}),children:[Object(v.jsx)(n.c,{path:"/home",element:Object(v.jsx)(n.a,{to:"/",replace:!0})}),Object(v.jsx)(n.c,{index:!0,element:Object(v.jsx)(G,{})}),Object(v.jsx)(n.c,{path:"addNewGoods",element:Object(v.jsx)(H,{})})]})})})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.568249de.chunk.js.map