import{r as n}from"./request-4f3541ce.js";const a=(t,s)=>n("/login/password","POST",{mobile:t,password:s}),o=(t,s)=>n("/code","GET",{mobile:t,type:s}),d=(t,s)=>n("/login","POST",{mobile:t,code:s}),l=()=>n("/patient/myUser"),c=()=>n("/patient/mylist"),g=t=>n("/patient/add","POST",t),r=t=>n("/patient/update","PUT",t),P=t=>n(`/patient/del/${t}`,"DELETE"),p=t=>n(`patient/info/${t}`),T=(t,s,e)=>n("/login/thirdparty","POST",{openId:t,source:"qq",nickname:s,avatar:e}),b=t=>n("/login/binding","POST",t);export{d as a,c as b,g as c,P as d,r as e,p as f,l as g,T as h,b as i,a as l,o as s};
