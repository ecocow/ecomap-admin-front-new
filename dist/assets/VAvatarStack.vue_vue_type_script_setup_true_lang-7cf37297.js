import{_ as a}from"./VAvatar.vue_vue_type_style_index_0_lang-4d856f95.js";import{C as s,o as t,d as i,b as e,F as l,l as r,a as n,f as o,e as c,t as u,g as v}from"./index-2b32231c.js";const p={class:"avatar-stack"},d={class:"avatar is-more"},m={class:"inner"},_=s({__name:"VAvatarStack",props:{limit:{default:5},size:{default:void 0},avatars:{default:()=>[]}},setup(s){const _=s;return(f,z)=>{const g=a;return t(),i("div",p,[e(f.$slots,"default",{},(()=>[(t(!0),i(l,null,r(s.avatars.slice(0,_.limit),((a,s)=>(t(),n(g,{key:s,size:_.size,picture:a.picture,initials:a.initials,color:a.color},null,8,["size","picture","initials","color"])))),128)),s.avatars.length>_.limit?(t(),i("div",{key:0,class:o(["v-avatar",[s.size&&"is-"+_.size]])},[c("span",d,[c("span",m,[c("span",null,"+"+u(s.avatars.length-_.limit),1)])])],2)):v("",!0)]))])}}});export{_};
