"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4085],{64085:function(e,n,s){s.r(n);var t=s(29439),r=s(72791),c=s(31243),l=s(78983),o=s(26238),i=s(1645),a=s(57689),u=s(80184);n.default=function(){var e=(0,r.useState)(""),n=(0,t.Z)(e,2),s=n[0],h=n[1],d=(0,r.useState)(""),x=(0,t.Z)(d,2),j=x[0],f=x[1],m=(0,r.useState)(!1),p=(0,t.Z)(m,2),C=p[0],b=p[1],g=(0,r.useState)([]),k=(0,t.Z)(g,2),N=k[0],v=k[1],S=(0,r.useState)(!1),y=(0,t.Z)(S,2),_=y[0],w=y[1],D=(0,r.useState)(""),Z=(0,t.Z)(D,2),T=Z[0],A=Z[1],E=(0,r.useContext)(i.Z).userID,V=(0,a.s0)();return(0,r.useEffect)((function(){fetch("http://localhost:7070/k8s/geteks/"+E).then((function(e){if(200===e.status)return e.json();throw new Error("Failed to fetch clusters")})).then((function(e){if(!e.clusters||!Array.isArray(e.clusters))throw new Error("Invalid cluster data");w(!1),v(e.clusters)})).catch((function(e){console.error(e)}))}),[E]),(0,u.jsxs)(l.rb,{children:[(0,u.jsx)(l.b7,{xs:12,children:(0,u.jsxs)(l.xH,{className:"mb-4",children:[(0,u.jsx)(l.bn,{children:(0,u.jsx)("strong",{children:"Create EKS"})}),(0,u.jsx)(l.sl,{children:(0,u.jsxs)(o.q3,{href:"forms/input-group",children:[(0,u.jsx)(l.YR,{className:"mb-3",children:(0,u.jsx)(l.jO,{placeholder:"Cluster Name","aria-label":"Cluster Name",value:s,onChange:function(e){return h(e.target.value)}})}),(0,u.jsxs)(l.YR,{className:"mb-3",children:[(0,u.jsxs)(l.LX,{id:"inputGroupSelect02",value:j,onChange:function(e){return f(e.target.value)},children:[(0,u.jsx)("option",{children:"Choose your cluster version"}),(0,u.jsx)("option",{value:"1.24",children:"1.24"}),(0,u.jsx)("option",{value:"1.25",children:"1.25"}),(0,u.jsx)("option",{value:"1.26",children:"1.26"})]}),(0,u.jsx)(l.wV,{component:"label",htmlFor:"inputGroupSelect02",children:"Versions"})]}),(0,u.jsx)(l.u5,{onClick:function(){var e={clusterName:s,clusterVersion:j};c.Z.post("http://localhost:7070/k8s/createeks/"+E,e).then((function(e){if(200===e.status)return b(!C),e.json();console.log("olmadi")})).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))},children:"Create"}),(0,u.jsxs)(l.Tk,{visible:C,onClose:function(){return b(!1)},children:[(0,u.jsx)(l.p0,{onClose:function(){return b(!1)},children:(0,u.jsx)(l.fl,{children:"Successfully"})}),(0,u.jsx)(l.sD,{children:"Database Successfully Created!"}),(0,u.jsx)(l.Ym,{children:(0,u.jsx)(l.u5,{color:"secondary",onClick:function(){b(!1),V("/base/list-groups")},children:"Go AWS Database List"})})]})]})})]})}),(0,u.jsx)(l.b7,{xs:12,children:(0,u.jsxs)(l.xH,{className:"mb-4",children:[(0,u.jsx)(l.bn,{children:(0,u.jsx)("strong",{children:"Clusters"})}),(0,u.jsxs)(l.sl,{children:[(0,u.jsxs)(l.Sx,{children:[(0,u.jsx)(l.V,{children:(0,u.jsxs)(l.T6,{children:[(0,u.jsx)(l.is,{children:"Cluster Name"}),(0,u.jsx)(l.is,{className:"text-end",children:"Action"})]})}),(0,u.jsx)("tbody",{children:N.map((function(e,n){return(0,u.jsxs)(l.T6,{children:[(0,u.jsx)(l.NN,{children:e}),(0,u.jsx)(l.NN,{className:"text-end",children:(0,u.jsx)(l.u5,{color:"danger",onClick:function(){A(e),w(!0)},children:"Delete"})})]},n)}))})]}),(0,u.jsxs)(l.Tk,{visible:_,onClose:function(){return w(!1)},children:[(0,u.jsx)(l.p0,{onClose:function(){return w(!1)},children:(0,u.jsx)(l.fl,{children:"Attention"})}),(0,u.jsx)(l.sD,{children:"Do you want to delete your database?"}),(0,u.jsxs)(l.Ym,{children:[(0,u.jsx)(l.u5,{color:"danger",onClick:function(){var e={clusterName:T};console.log(e),fetch("http://localhost:7070/k8s/deleteeks/".concat(E),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){200===e.status?(w(!1),console.log(e)):console.log("olmadi")})).catch((function(e){console.error(e)}))},children:"Delete"}),(0,u.jsx)(l.u5,{color:"secondary",onClick:function(){return w(!1)},children:"Cancel"})]})]})]})]})})]})}}}]);
//# sourceMappingURL=4085.5aabce05.chunk.js.map