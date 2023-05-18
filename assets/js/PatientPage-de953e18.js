import{_ as X}from"./CpRadioBtn-79647bf8.js";import{_ as Y}from"./CpIcon-56491ba7.js";import{_ as Z}from"./CpNavBar-ea159524.js";import{b as j,e as G,c as H,d as J}from"./user-15b71d69.js";import{e as ee,d as ae,b as te}from"./vue-router-fd42b9e3.js";import{F as oe,n as ne,i as se}from"./rules-a3ea3144.js";import{A as le,a as ie}from"./index-470ccc52.js";import{P as ue,s as w,a as de}from"./request-4f3541ce.js";import{O as ce,u as v,Z as re,I as R,o as l,R as i,Q as n,K as _,ab as f,S as s,a5 as pe,a7 as _e,U as u,W as S,A as me,c as ve,V as fe,T as k,X as ge,Y as he,_ as Ce}from"./_plugin-vue_export-helper-4a308993.js";import{B as ke}from"./index-a2a726fb.js";import{F as be}from"./index-da14ea08.js";import{C as ye}from"./index-009019c7.js";import{s as Pe}from"./function-call-4bcc473f.js";import"./use-placeholder-ca8c31e0.js";import"./index-f7b1a7d1.js";import"./use-route-27c093b5.js";import"./index-5f55da43.js";import"./interceptor-4f4458bc.js";import"./index-93886e3d.js";import"./use-id-7753a9b6.js";const b=g=>(ge("data-v-acfa28c6"),g=g(),he(),g),Ve={class:"patient-page"},we={key:0,class:"patient-change"},Fe=b(()=>s("h3",null,"请选择患者信息",-1)),xe=b(()=>s("p",null,"以便医生给出更准确的治疗，信息仅医生可见",-1)),Be=[Fe,xe],Re={class:"patient-list"},Se=["onClick"],$e={class:"info"},Ie={class:"name"},Ue={class:"id"},Ae={class:"icon"},Ne={key:0,class:"tag"},Te=b(()=>s("p",null,"添加患者",-1)),De=b(()=>s("div",{class:"patient-tip"},"最多可添加 6 人",-1)),Le={key:1,class:"patient-next"},ze=ce({__name:"PatientPage",setup(g){const d=v([]),y=async()=>{const o=await j();d.value=o.data,T()};re(()=>{y()});const $=[{label:"男",value:1},{label:"女",value:0}],c=v(!1),F=o=>{if(o){const{id:t,name:h,idCard:C,defaultFlag:V,gender:p}=o;e.value={id:t,name:h,idCard:C,defaultFlag:V,gender:p}}else e.value={...x};c.value=!0},x={name:"",idCard:"",gender:1,defaultFlag:0},e=v({...x}),P=R({get(){return e.value.defaultFlag===1},set(o){e.value.defaultFlag=o?1:0}}),B=v(),I=async()=>{var t;if(await((t=B.value)==null?void 0:t.validate()),+e.value.idCard.slice(-2,-1)%2!==e.value.gender)return w("性别与身份证不符");e.value.id?await G(e.value):await H(e.value),c.value=!1,y(),de(e.value.id?"编辑成功":"添加成功")},U=async()=>{if(e.value.id){let o=e.value.id;await Pe({title:"温馨提示",message:`您确定要删除 ${e.value.name} 患者信息吗？`}).then(async()=>{await J(o),c.value=!1,y(),w("删除成功")}).catch(()=>{})}},A=ae(),m=R(()=>A.query.isChange==="1"),r=v(),N=o=>{m.value&&(r.value=o.id)},T=()=>{if(m.value&&d.value.length){const o=d.value.find(t=>t.defaultFlag===1);o?r.value=o.id:r.value=d.value[0].id}},D=ee(),L=te(),z=()=>{if(!r.value)return w("请选择就诊择患者");D.setPatient(r.value),L.push("/consult/pay")};return(o,t)=>{const h=Z,C=Y,V=ke,p=be,q=X,E=ye,K=oe,M=le,O=ie,Q=ue;return l(),i("div",Ve,[n(h,{title:_(m)?"选择患者":"家庭档案"},null,8,["title"]),_(m)?(l(),i("div",we,Be)):f("",!0),s("div",Re,[(l(!0),i(pe,null,_e(d.value,a=>(l(),i("div",{class:fe(["patient-item",{selected:r.value===a.id}]),key:a.id,onClick:W=>N(a)},[s("div",$e,[s("span",Ie,k(a.name),1),s("span",Ue,k(a.idCard.replace(/^(.{6}).+(.{4})$/,"$1********$2")),1),s("span",null,k(a.genderValue),1),s("span",null,k(a.age)+"岁",1)]),s("div",Ae,[n(C,{name:"user-edit",onClick:W=>F(a)},null,8,["onClick"])]),a.defaultFlag===1?(l(),i("div",Ne,"默认")):f("",!0)],10,Se))),128)),d.value.length<6?(l(),i("div",{key:0,class:"patient-add",onClick:t[0]||(t[0]=a=>F())},[n(C,{name:"user-add"}),Te])):f("",!0),De]),_(m)?(l(),i("div",Le,[n(V,{type:"primary",onClick:z,round:"",block:""},{default:u(()=>[S("下一步")]),_:1})])):f("",!0),n(Q,{show:c.value,"onUpdate:show":t[5]||(t[5]=a=>c.value=a),position:"right"},{default:u(()=>[n(h,{back:()=>c.value=!1,title:e.value.id?"编辑患者":"添加患者","right-text":"保存",onClickRight:I},null,8,["back","title"]),n(K,{autocomplete:"off",ref_key:"form",ref:B},{default:u(()=>[n(p,{modelValue:e.value.name,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value.name=a),label:"真实姓名",placeholder:"请输入真实姓名",rules:_(ne)},null,8,["modelValue","rules"]),n(p,{modelValue:e.value.idCard,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value.idCard=a),label:"身份证号",placeholder:"请输入身份证号",rules:_(se)},null,8,["modelValue","rules"]),n(p,{label:"性别",class:"bp4"},{input:u(()=>[n(q,{modelValue:e.value.gender,"onUpdate:modelValue":t[3]||(t[3]=a=>e.value.gender=a),options:$},null,8,["modelValue"])]),_:1}),n(p,{label:"默认就诊人"},{input:u(()=>[n(E,{modelValue:_(P),"onUpdate:modelValue":t[4]||(t[4]=a=>me(P)?P.value=a:null),"icon-size":18,round:""},null,8,["modelValue"])]),_:1})]),_:1},512),e.value.id?(l(),ve(O,{key:0},{default:u(()=>[n(M,{onClick:U},{default:u(()=>[S("删除")]),_:1})]),_:1})):f("",!0)]),_:1},8,["show"])])}}});const la=Ce(ze,[["__scopeId","data-v-acfa28c6"]]);export{la as default};
