import{_ as a}from"./VSimpleDatatables.vue_vue_type_style_index_0_lang-3ea7a5ea.js";import{C as e,o as s,a as t,K as r,N as n,d as i,k as l}from"./index-2b32231c.js";import{u as o}from"./viewWrapper-bcc55ab0.js";const d={perPageSelect:[5,10,20,25,50,100],perPage:10,columns:[{select:0,hidden:!0},{select:1,render:function(a){return`\n          <div class="v-avatar">\n              <img class="avatar" src="${a}" alt="">\n          </div>\n      `},sortable:!1},{select:2,render:function(a){return`<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${a}</span>`}},{select:3,render:function(a){return`<span class="light-text">${a}</span>`}},{select:4,render:function(a){return`\n          <div class="status is-${a}">\n              <i aria-hidden="true" class="fas fa-circle"></i>\n              <span class="is-capitalize">${a}</span>\n          </div>\n      `}},{select:5,render:function(a,e,s){return`<div class="has-text-right"><button class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Manage</button></div>`},sortable:!1}],data:{headings:["ID","Picture","Name","Position","Status","Actions"],data:[[0,"/images/avatars/svg/vuero-1.svg","Erik Kovalsky","Product Manager","busy",!0],[1,"/demo/avatars/7.jpg","Alice Carasca","Software Engineer","offline",!0],[2,"/demo/avatars/13.jpg","Tara Svenson","UI/UX Designer","offline",!0],[3,"/demo/avatars/5.jpg","Mary Lebowski","Project Manager","available",!0],[4,"/images/avatars/placeholder-f.jpg","Kaylee Jennings","Web Developer","available",!0],[5,"/demo/avatars/27.jpg","Carmen Escudero","HR Manager","offline",!0],[6,"/demo/avatars/22.jpg","Dwayne Hicks","Product Manager","offline",!0],[7,"/images/avatars/placeholder-m.jpg","Paul Morris","Backend Developer","available",!0],[8,"/demo/avatars/23.jpg","Irina Vierbovsky","Project Manager","available",!0],[9,"/demo/avatars/28.jpg","Edouard Falant","Web Developer","busy",!0],[10,"/images/avatars/placeholder-f.jpg","Shana Williams","Sales Manager","offline",!0],[11,"/images/avatars/placeholder-m.jpg","Benjamin Hoffman","Product Manager","offline",!0],[12,"/demo/avatars/39.jpg","Alejandro Badajoz","Web Developer","busy",!0],[13,"/demo/avatars/21.jpg","Elizabeth Fisher","Mobile Developer","available",!0],[14,"/demo/avatars/37.jpg","Helmut Fritz","Product Manager","available",!0],[15,"/demo/avatars/31.jpg","Yasseen Amzi","Business Analyst","offline",!0]]}},c=e({__name:"DatatableV1",setup:e=>(e,n)=>{const i=a;return s(),t(i,{options:r(d)},null,8,["options"])}}),v={class:"page-content-inner"},p=e({__name:"list-datatable-1",setup:a=>(o().setPageTitle("List Datatable 1"),n({title:"List Datatable 1 - Sidebar - Vuero"}),(a,e)=>{const t=c;return s(),i("div",v,[l(t)])})});export{p as default};
