(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{109:function(e,t,c){},110:function(e,t,c){},113:function(e,t,c){},121:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},130:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(60),a=c.n(s),i=c(48),n=c(5),o=c(32),d=c(67),l=c(3),j=Object(d.b)({name:"goods",initialState:{items:[],isFirstLoading:!0},reducers:{addProduct:function(e,t){e.items.push(t.payload)},updateProduct:function(e,t){var c=t.payload,r=c.id,s=c.updates,a=e.items.map((function(e){return e.id===r?Object(l.a)(Object(l.a)({},e),s):e}));return Object(l.a)(Object(l.a)({},e),{},{items:a})},deleteProduct:function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))},setGoods:function(e,t){e.items=t.payload},setLoading:function(e,t){e.isFirstLoading=t.payload}}}),m=j.actions,b=m.addProduct,u=(m.updateProduct,m.deleteProduct),O=m.setGoods,h=m.setLoading,x=j.reducer,g=Object(d.a)({reducer:{goods:x}}),p=(c(109),c(110),c(83)),f=c.n(p),v=c(1),N=Object(r.memo)((function(){return Object(v.jsx)("header",{className:"header",children:Object(v.jsxs)("nav",{className:"nav",children:[Object(v.jsx)(i.b,{to:"/",className:function(e){var t=e.isActive;return f()("link__item",{"is-active":t})},children:"Home Page"}),Object(v.jsx)(i.b,{to:"addNewGoods",className:function(e){var t=e.isActive;return f()("link__item",{"is-active":t})},children:"Add goods"})]})})})),y=function(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(N,{}),Object(v.jsx)("main",{className:"main",children:Object(v.jsx)(n.b,{})})]})},w=c(6),S=(c(113),Object(r.memo)((function(e){var t=e.nameSearch,c=e.setNameChange;return Object(v.jsx)("div",{className:"input-search",children:Object(v.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(v.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:t,onChange:function(e){return c(e.target.value)}}),Object(v.jsx)("span",{className:"icon is-left",children:Object(v.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),t&&Object(v.jsx)("span",{className:"icon is-right",children:Object(v.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})})}))),k=c(92),C=c.n(k),q=c(74),R=c(61),P=c(149),L=c(91),F=c.n(L),K=Object(r.memo)((function(e){var t=e.row,c=Object(o.b)();return Object(v.jsx)(P.a,{type:"button",onClick:function(){return c(u(t.id))},"aria-label":"delete",size:"large",children:Object(v.jsx)(F.a,{fontSize:"inherit"})})})),D=(c(121),[{header:"ID",accessorKey:"id"},{header:"Title",accessorKey:"title"},{header:"Description",accessorKey:"description"},{header:"Price",accessorKey:"price"},{header:"Images",accessorKey:"images",cell:function(e){var t=e.row.original;return Object(v.jsx)("img",{className:"prodImg",src:"string"!==typeof t.images?t.images[0]:t.images,alt:"img"})}},{header:"Rating",accessorKey:"rating"},{header:"Stock",accessorKey:"stock"},{header:"Category",accessorKey:"category"},{header:"Delete",accessorFn:function(e){return e},cell:function(e){var t=e.row.original;return Object(v.jsx)(K,{row:t})}}]),G=function(e){var t=e.data,c=Object(r.useState)([]),s=Object(w.a)(c,2),a=s[0],i=s[1],n=Object(q.b)({data:t,columns:D,state:{sorting:a},onSortingChange:i,getCoreRowModel:Object(R.b)(),getSortedRowModel:Object(R.c)(),debugTable:!0});return Object(v.jsx)("div",{className:"box",children:Object(v.jsxs)("table",{className:"table",children:[Object(v.jsx)("thead",{children:n.getHeaderGroups().map((function(e){return Object(v.jsx)("tr",{children:e.headers.map((function(e){var t;return Object(v.jsx)("th",{colSpan:e.colSpan,children:e.isPlaceholder?null:Object(v.jsx)("div",{className:"table-header",children:Object(v.jsxs)("div",{className:e.column.getCanSort()?"cursor-pointer select-none":"",onClick:e.column.getToggleSortingHandler(),children:[Object(q.a)(e.column.columnDef.header,e.getContext()),null!==(t={asc:" \u25b2",desc:" \u25bc"}[e.column.getIsSorted()])&&void 0!==t?t:null]})})},e.id)}))},e.id)}))}),Object(v.jsx)("tbody",{children:n.getRowModel().rows.map((function(e){return Object(v.jsx)("tr",{children:e.getVisibleCells().map((function(e){return Object(v.jsx)("td",{style:{verticalAlign:"middle"},children:Object(v.jsx)("div",{className:"table-row",children:Object(q.a)(e.column.columnDef.cell,e.getContext())})},e.id)}))},e.id)}))})]})})},I=Object(r.memo)((function(e){var t=e.nameSearch,c=Object(o.b)(),s=Object(o.c)((function(e){return e.goods.items})),a=Object(o.c)((function(e){return e.goods.isFirstLoading}));console.log({first:a,goods:s}),Object(r.useEffect)((function(){a&&fetch("https://dummyjson.com/products").then((function(e){return e.json()})).then((function(e){var t=e.products.map((function(e){return{id:e.id,title:e.title,description:e.description,price:e.price,images:e.images,rating:e.rating,stock:e.stock,category:e.category}}));c(O(t)),setTimeout((function(){c(h(!1))}),2e3)}))}),[s]);var i=s.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.category.toLowerCase().includes(t.toLowerCase())}));return Object(v.jsx)(v.Fragment,{children:a?Object(v.jsx)(C.a,{color:"#36d7b7"}):Object(v.jsx)(G,{data:i})})})),A=(c(124),Object(r.memo)((function(){var e=Object(r.useState)(""),t=Object(w.a)(e,2),c=t[0],s=t[1];return Object(v.jsxs)("div",{className:"homePage",children:[Object(v.jsx)(S,{nameSearch:c,setNameChange:function(e){console.log({value:e}),s(e)}}),Object(v.jsx)(I,{nameSearch:c})]})}))),T=c(20),_=c(33),H=(c(125),function(){var e=Object(o.b)(),t=_.b({id:_.c().required("Required"),title:_.c().required("Required"),description:_.c().required("Required"),price:_.a().required("Required"),images:_.c().url().required("Required"),rating:_.a().required("Required"),stock:_.a().required("Required"),category:_.c().required("Required")});return Object(v.jsx)(T.d,{initialValues:{id:"",title:"",description:"",price:"",images:"",rating:"",stock:"",category:""},validationSchema:t,onSubmit:function(t,c){var r=c.resetForm;e(b(t)),r()},children:function(e){var t=e.isSubmitting;return Object(v.jsxs)(T.c,{className:"form",children:[Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(T.b,{placeholder:"id",className:"form-field",type:"text",id:"id",name:"id"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(T.a,{name:"id"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(T.b,{placeholder:"title",className:"form-field",type:"text",id:"title",name:"title"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(T.a,{name:"title"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(T.b,{placeholder:"description",className:"form-field",type:"text",id:"description",name:"description"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(T.a,{name:"description"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(T.b,{placeholder:"price",className:"form-field",type:"number",id:"price",name:"price"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(T.a,{name:"price"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(T.b,{placeholder:"images",className:"form-field",type:"text",id:"images",name:"images"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(T.a,{name:"images"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(T.b,{placeholder:"rating",className:"form-field",type:"number",id:"rating",name:"rating"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(T.a,{name:"rating"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(T.b,{placeholder:"stock",className:"form-field",type:"number",id:"stock",name:"stock"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(T.a,{name:"stock"})})]}),Object(v.jsxs)("div",{className:"form-row",children:[Object(v.jsx)(T.b,{placeholder:"category",className:"form-field",type:"text",id:"category",name:"category"}),Object(v.jsx)("div",{className:"error-message",children:Object(v.jsx)(T.a,{name:"category"})})]}),Object(v.jsx)("button",{className:"bottom",type:"submit",disabled:t,children:"Submit"})]})}})}),M=Object(r.memo)((function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(H,{})})}));c(126),c(127),c(128);a.a.render(Object(v.jsx)(o.a,{store:g,children:Object(v.jsx)(i.a,{children:Object(v.jsx)(n.e,{children:Object(v.jsxs)(n.c,{path:"/",element:Object(v.jsx)(y,{}),children:[Object(v.jsx)(n.c,{path:"/home",element:Object(v.jsx)(n.a,{to:"/",replace:!0})}),Object(v.jsx)(n.c,{index:!0,element:Object(v.jsx)(A,{})}),Object(v.jsx)(n.c,{path:"addNewGoods",element:Object(v.jsx)(M,{})})]})})})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.593990f0.chunk.js.map