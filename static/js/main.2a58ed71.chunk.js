(this.webpackJsonpmenu=this.webpackJsonpmenu||[]).push([[0],{16:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i.n(c),r=i(9),n=i.n(r),s=(i(16),i(10)),o=i(11),l=[{id:1,title:"buttermilk pancakes",category:"breakfast",price:15.99,img:"./images/item-1.jpeg",desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "},{id:2,title:"diner double",category:"lunch",price:13.99,img:"./images/item-2.jpeg",desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "},{id:3,title:"godzilla milkshake",category:"shakes",price:6.99,img:"./images/item-3.jpeg",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."},{id:4,title:"country delight",category:"breakfast",price:20.99,img:"./images/item-4.jpeg",desc:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "},{id:5,title:"egg attack",category:"lunch",price:22.99,img:"./images/item-5.jpeg",desc:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "},{id:6,title:"oreo dream",category:"shakes",price:18.99,img:"./images/item-6.jpeg",desc:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"},{id:7,title:"bacon overflow",category:"breakfast",price:8.99,img:"./images/item-7.jpeg",desc:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "},{id:8,title:"american classic",category:"lunch",price:12.99,img:"./images/item-8.jpeg",desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "},{id:9,title:"quarantine buddy",category:"lunch",price:16.99,img:"./images/item-9.jpeg",desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."}],m=i(4),u=i(5),d=i(7),b=i(6),g=i(0),h=function(e){Object(d.a)(i,e);var t=Object(b.a)(i);function i(){return Object(m.a)(this,i),t.apply(this,arguments)}return Object(u.a)(i,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"btn-container",children:this.props.categories.map((function(t,i){return Object(g.jsx)("button",{type:"button",className:"filter-btn",onClick:function(){return e.props.onFilterMenu(t)},children:t},i)}))})}}]),i}(c.Component),j=function(e){Object(d.a)(i,e);var t=Object(b.a)(i);function i(){return Object(m.a)(this,i),t.apply(this,arguments)}return Object(u.a)(i,[{key:"render",value:function(){var e=this.props.menu,t=e.desc,i=e.img,c=e.price,a=e.title;return Object(g.jsxs)("article",{className:"menu-item",children:[Object(g.jsx)("img",{src:i,alt:a,className:"photo"}),Object(g.jsxs)("div",{className:"item-info",children:[Object(g.jsxs)("header",{children:[Object(g.jsx)("h4",{children:a}),Object(g.jsxs)("h4",{className:"price",children:["$",c]})]}),Object(g.jsx)("p",{className:"item-text",children:t})]})]})}}]),i}(c.Component);var p=function(){var e=Object(c.useState)(l),t=Object(o.a)(e,2),i=t[0],a=t[1],r=["all"].concat(Object(s.a)(new Set(l.map((function(e){return e.category})))));return Object(g.jsx)("main",{children:Object(g.jsxs)("section",{className:"menu section",children:[Object(g.jsxs)("div",{className:"title",children:[Object(g.jsx)("h2",{children:"our menu"}),Object(g.jsx)("div",{className:"underline"})]}),Object(g.jsx)(h,{onFilterMenu:function(e){var t=l.filter((function(t){return"all"===e?l:t.category===e}));a(t)},categories:r}),Object(g.jsx)("div",{className:"section-center",children:i.map((function(e){return Object(g.jsx)(j,{menu:e},e.id)}))})]})})};n.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2a58ed71.chunk.js.map