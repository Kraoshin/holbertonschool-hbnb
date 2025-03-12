import{q as it,a as Te,r as P,D as Se,G as ae,e as x,N as _e,v as w,K as k,o as A,f,g as $,j as s,J as u,h as E,I as D,k as g,$ as m,a7 as W,L as B,t as U,a9 as ne,F as ee,B as Ee,w as fe,Q as ut,as as Je,O as be,S as Le,s as we,C as ze,P as Ze,n as Ke}from"./app-DpkBHAPK.js";import"./constants-DgoLmzql.js";import{D as T,a as Fe}from"./DatabaseType-DdlHHJUc.js";import{b as He}from"./viewUtil-DCbZMcCo.js";import{c as pe}from"./codemirror-vWuP6PmA.js";import{E as Me,a as Ie}from"./index-R2dczJ2r.js";import{E as et}from"./index-C4WZBdZq.js";import{E as Pe,a as xe}from"./index-CdzL6Dt_.js";import{E as $e,a as he}from"./index-DjbjUSf7.js";import{E as ge}from"./index-C_rDxKqp.js";import{v as Oe}from"./directive-g6-k1bIB.js";import{A as je}from"./arrayUtil-CzswX_vs.js";import{E as ct}from"./index-BgCRwDBR.js";import{S as V}from"./stringBuilder-DUZQE8vS.js";import{g as re,c as X,a as mt,i as Tt,b as me,E as _t}from"./wrapper-Dum3tDzW.js";import{l as At}from"./common_view_utils-DtMDy133.js";import"./index-CmKJXY_C.js";import"./_baseIteratee-YC_v17fo.js";import"./isEqual-CgrBoG8O.js";import"./merge-C79bRH0f.js";import"./_initCloneObject-BgIGPM_D.js";import"./isArrayLikeObject-Cyb4RVH-.js";import"./index-DR6S1W94.js";import"./index-MPx4qsnF.js";import"./_baseFindIndex-D7XfJLKM.js";import"./castArray-BZYO1OfP.js";import"./clone-C0llql1I.js";import"./_baseClone-DrQXJxqM.js";import"./objectUtil-Z6JRxuBJ.js";const Ae=it("design",{state:()=>({schema:"",table:"",columns:[],tableMeta:{},dbType:T.MYSQL,dialect:null,remainHeight:0,activePanel:"column"}),getters:{canAlterTable(c){return![T.SQLITE].includes(c.dbType)},supportForeignKey(c){return c.dbType==T.DUCK_DB||!Fe(c.dbType)&&(!c.tableMeta.engine||c.tableMeta.engine!="MyISAM")},supportCheck(c){return![T.D1,T.SQLITE,T.DUCK_DB,T.SNOWFLAKE].includes(c.dbType)&&!Fe(c.dbType)},supportTrigger(c){return!Fe(c.dbType)},supportIndex(c){return![T.SNOWFLAKE,T.DATABRICKS,T.ATHENA,T.BIG_QUERY,T.PRESTO,T.TRINO].includes(c.dbType)}},actions:{updateDBType(c){this.dbType=c},updateFullInfo(c){for(const e in c)this[e]=c[e]}}}),dt={class:"design-toolbar"},Nt={class:"text-center"},Rt=Te({__name:"IndexPanel",setup(c){const e=P([]),t=P([]),n=P(!0),r=Ae(),{dbType:l,dialect:a,remainHeight:i,activePanel:o}=Se(r),N={visible:!1,loading:!1,column:null,columns:null,type:"INDEX"},R=ae({...N}),O=x(()=>{var y;return((y=R.columns)==null?void 0:y.length)>0?a.value.newIndex({...R}):""});_e(()=>{w.on("designMetaNext",()=>{R.visible=!1,t.value=a.value.indexTypes(),L()}).on("indexes",y=>{e.value=y,n.value=!1}).on("success",y=>{y=="index"&&(R.loading=!1,R.visible=!1,L())}).on("error",()=>{R.loading=!1})});const L=()=>{w.emit("indexes"),n.value=!0},b=()=>{Object.assign(R,N),R.visible=!0,R.loading=!1},h=y=>a.value.formatIndexType(y),_=()=>{R.loading=!0,w.emit("execute",{type:"index",sql:O.value})},C=y=>{fe(m("design.deleteIndexConfirm")).then(()=>{w.emit("execute",{type:"index",sql:a.value.dropIndex(y.index_name)})})};return(y,H)=>{const G=k("vsc-button"),v=k("vsc-tooltip"),M=Me,q=et,Q=Ie,K=k("RedMark"),j=Pe,le=xe,Y=$e,J=he,se=ge,Re=Oe;return A(),f("div",null,[$("div",dt,[s(v,{title:E(m)("common.new")},{default:u(()=>[["ClickHouse"].includes(E(l))?g("",!0):(A(),D(G,{key:0,type:"icon",icon:"codicon-add text-base",onClick:b}))]),_:1},8,["title"]),s(v,{title:E(m)("common.refresh")},{default:u(()=>[s(G,{type:"icon",icon:"codicon-refresh text-base",onClick:L})]),_:1},8,["title"])]),E(o)=="index"?W((A(),D(Q,{key:0,data:e.value,height:E(i),border:""},{default:u(()=>[s(M,{resizable:!0,align:"center",prop:"index_name",label:E(m)("design.indexName"),width:"200"},null,8,["label"]),s(M,{resizable:!0,align:"center",prop:"column_name",label:E(m)("design.column"),width:"200"},null,8,["label"]),s(M,{align:"center",prop:"isUnique",label:E(m)("design.unique"),width:"200"},{default:u(({row:F})=>[s(q,{disabled:"","model-value":E(He)(F.isUnique)},null,8,["model-value"])]),_:1},8,["label"]),s(M,{resizable:!0,align:"center",prop:"index_type",label:E(m)("common.type"),width:"200"},{default:u(({row:F})=>[B(U(h(F)),1)]),_:1},8,["label"]),["PostgreSQL"].includes(E(l))?(A(),D(M,{key:0,resizable:!0,align:"center",prop:"index_method",label:E(m)("design.indexMethod"),width:"200"},null,8,["label"])):g("",!0),["ClickHouse"].includes(E(l))?g("",!0):(A(),D(M,{key:1,label:E(m)("design.operation"),width:"120"},{default:u(({row:F})=>[$("div",Nt,[s(G,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:de=>C(F)},null,8,["onClick"])])]),_:1},8,["label"]))]),_:1},8,["data","height"])),[[Re,n.value]]):g("",!0),s(se,{modelValue:R.visible,"onUpdate:modelValue":H[3]||(H[3]=F=>R.visible=F),"show-close":!1,title:E(m)("design.newIndex"),width:"520px",closeOnClickModal:!1,center:""},{footer:u(()=>[s(G,{type:"secondary",onClick:H[2]||(H[2]=F=>R.visible=!1)},{default:u(()=>[B(U(E(m)("common.cancel")),1)]),_:1}),s(G,{type:"primary",loading:R.loading,onClick:_},{default:u(()=>[B(U(E(m)("common.ok")),1)]),_:1},8,["loading"]),H[4]||(H[4]=$("br",null,null,-1)),H[5]||(H[5]=B()),H[6]||(H[6]=$("br",null,null,-1)),W(s(pe,{ref:"cmEditor",value:O.value,readonly:!0},null,8,["value"]),[[ne,O.value]])]),default:u(()=>[s(J,{inline:!0,"label-width":"75px",size:"small"},{default:u(()=>[s(Y,null,{label:u(()=>[s(K),B(U(E(m)("design.column")),1)]),default:u(()=>[s(le,{modelValue:R.columns,"onUpdate:modelValue":H[0]||(H[0]=F=>R.columns=F),size:"small",filterable:"",multiple:"",class:"!w-[150px]"},{default:u(()=>[(A(!0),f(ee,null,Ee(E(r).columns,F=>(A(),D(j,{key:F.name,label:F.name,value:F.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(Y,null,{label:u(()=>[s(K),B(U(E(m)("common.type")),1)]),default:u(()=>[s(le,{modelValue:R.type,"onUpdate:modelValue":H[1]||(H[1]=F=>R.type=F),size:"small",class:"!w-[110px]"},{default:u(()=>[(A(!0),f(ee,null,Ee(t.value,(F,de)=>(A(),D(j,{key:de,label:F.label,value:F.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),Ct={ref:"infoPanel",class:"design-toolbar"},St=Te({__name:"DDL",setup(c){const e=Ae(),t=P(!1),n=P("");_e(()=>{w.on("designMetaNext",()=>{w.emit("ddl")}).on("ddl",({ddl:l})=>{t.value=!1,n.value=l})});const r=()=>{navigator.clipboard.writeText(n.value),Je("Copy DDL success!")};return(l,a)=>{const i=k("vsc-button"),o=k("vsc-tooltip"),N=Oe;return W((A(),f("div",null,[$("div",Ct,[s(o,{title:"Copy DDL"},{default:u(()=>[s(i,{type:"icon",icon:"el-icon-document-copy text-base",onClick:r})]),_:1}),s(o,{title:l.$t("common.refresh")},{default:u(()=>[s(i,{type:"icon",icon:"codicon-refresh text-base",onClick:a[0]||(a[0]=R=>E(w).emit("ddl"))})]),_:1},8,["title"])],512),E(e).activePanel=="ddl"?(A(),D(pe,{key:0,dbType:E(e).dbType,value:n.value,readonly:!0,style:ut({maxHeight:E(e).remainHeight+"px",overflow:"auto"}),class:"large"},null,8,["dbType","value","style"])):g("",!0)])),[[N,t.value]])}}}),pt={key:0,class:"design-toolbar"},Ot={class:"text-center"},Lt=Te({__name:"ForeignKey",setup(c){const e=Ae(),{dialect:t,canAlterTable:n,remainHeight:r,activePanel:l}=Se(e),a=P([]),i=P([]),o=P([]),N=P([]),R=P(!0),O=ae({visible:!1,loading:!1}),L={column:null,refTable:null,refColumn:null,foreignKeyName:null,onUpdate:"NO ACTION",onDelete:"NO ACTION"},b=ae({...L}),h=x(()=>{const{column:v,refTable:M,refColumn:q}=b;return v||M||q?t.value.newForeignKey(b):""});_e(()=>{w.on("designMetaNext",()=>{O.visible=!1,N.value=t.value.strategies(),C(),w.emit("tables")}).on("foreignKeys",v=>{R.value=!1,a.value=v}).on("columnsById",v=>{b.refColumn="",o.value=v}).on("success",v=>{v=="fk"&&(O.loading=!1,O.visible=!1,C())}).on("error",()=>{O.loading=!1}).on("tables",v=>{i.value=v})});const _=v=>{w.emit("columnsById",v)},C=()=>{const v=t.value.showForeignKeys();v&&(R.value=!0,w.emit("foreignKeys",v))},y=()=>{Object.assign(b,L),O.visible=!0,O.loading=!1},H=()=>{O.loading=!0,w.emit("execute",{type:"fk",sql:h.value})},G=v=>{fe(m("design.deleteFkConfirm")).then(()=>{w.emit("execute",{type:"fk",sql:t.value.dropForeignKey(v.constraint_name)})})};return(v,M)=>{const q=k("vsc-button"),Q=k("vsc-tooltip"),K=Me,j=Ie,le=k("RedMark"),Y=Pe,J=xe,se=$e,Re=be,F=he,de=ge,ve=Oe;return A(),f("div",null,[E(n)?(A(),f("div",pt,[s(Q,{title:E(m)("common.new")},{default:u(()=>[s(q,{type:"icon",icon:"codicon-add text-base",onClick:y})]),_:1},8,["title"]),s(Q,{title:E(m)("common.refresh")},{default:u(()=>[s(q,{type:"icon",icon:"codicon-refresh text-base",onClick:C})]),_:1},8,["title"])])):g("",!0),E(l)=="foreignKey"?W((A(),D(j,{key:1,data:a.value,style:{width:"100%"},height:E(r),border:""},{default:u(()=>[E(n)?(A(),D(K,{key:0,resizable:!0,align:"center",prop:"constraint_name",label:E(m)("design.constraintName"),width:"150"},null,8,["label"])):g("",!0),s(K,{resizable:!0,align:"center",prop:"column_name",label:E(m)("design.column"),width:"150"},null,8,["label"]),s(K,{resizable:!0,align:"center",prop:"referenced_table",label:E(m)("design.referencedTable"),width:"150"},null,8,["label"]),s(K,{resizable:!0,align:"center",prop:"referenced_column",label:E(m)("design.referencedColumn"),width:"155"},null,8,["label"]),s(K,{align:"center",prop:"updateRule",label:E(m)("design.updateRule"),width:"150"},null,8,["label"]),s(K,{align:"center",prop:"deleteRule",label:E(m)("design.deleteRule"),width:"150"},null,8,["label"]),E(n)?(A(),D(K,{key:1,label:E(m)("design.operation"),width:"120"},{default:u(({row:I})=>[$("div",Ot,[s(q,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:S=>G(I)},null,8,["onClick"])])]),_:1},8,["label"])):g("",!0)]),_:1},8,["data","height"])),[[ve,R.value]]):g("",!0),s(de,{modelValue:O.visible,"onUpdate:modelValue":M[7]||(M[7]=I=>O.visible=I),"show-close":!1,title:E(m)("design.newForeignKey"),width:"780px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(q,{type:"secondary",onClick:M[6]||(M[6]=I=>O.visible=!1)},{default:u(()=>[B(U(E(m)("common.cancel")),1)]),_:1}),s(q,{type:"primary",loading:O.loading,onClick:H},{default:u(()=>[B(U(E(m)("common.ok")),1)]),_:1},8,["loading"]),M[9]||(M[9]=$("br",null,null,-1)),M[10]||(M[10]=B()),M[11]||(M[11]=$("br",null,null,-1)),W(s(pe,{ref:"cmEditor",value:h.value,readonly:!0},null,8,["value"]),[[ne,h.value]])]),default:u(()=>[s(F,{inline:!0,"label-width":"150px","label-position":"left",size:"small"},{default:u(()=>[s(se,null,{label:u(()=>[s(le),B(U(E(m)("design.column")),1)]),default:u(()=>[s(J,{modelValue:b.column,"onUpdate:modelValue":M[0]||(M[0]=I=>b.column=I),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(A(!0),f(ee,null,Ee(E(e).columns,I=>(A(),D(Y,{key:I.name,label:I.name,value:I.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(se,null,{label:u(()=>[B(U(E(m)("design.constraintName")),1)]),default:u(()=>[s(Re,{modelValue:b.foreignKeyName,"onUpdate:modelValue":M[1]||(M[1]=I=>b.foreignKeyName=I),class:"!w-[170px]"},null,8,["modelValue"])]),_:1}),M[8]||(M[8]=$("br",null,null,-1)),s(se,null,{label:u(()=>[s(le),B(U(E(m)("design.referencedTable")),1)]),default:u(()=>[s(J,{modelValue:b.refTable,"onUpdate:modelValue":M[2]||(M[2]=I=>b.refTable=I),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(A(!0),f(ee,null,Ee(i.value,I=>(A(),D(Y,{key:I.name,label:I.name,value:I.name,onClick:S=>_(I.id)},null,8,["label","value","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(se,null,{label:u(()=>[s(le),B(U(E(m)("design.referencedColumn")),1)]),default:u(()=>[s(J,{modelValue:b.refColumn,"onUpdate:modelValue":M[3]||(M[3]=I=>b.refColumn=I),size:"small",filterable:"",class:"!w-[170px]"},{default:u(()=>[(A(!0),f(ee,null,Ee(o.value,I=>(A(),D(Y,{key:I.name,label:I.name,value:I.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(se,{label:"On Update"},{default:u(()=>[s(J,{modelValue:b.onUpdate,"onUpdate:modelValue":M[4]||(M[4]=I=>b.onUpdate=I),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:u(()=>[(A(!0),f(ee,null,Ee(N.value,I=>(A(),D(Y,{key:I,label:I,value:I},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(se,{label:"On Delete"},{default:u(()=>[s(J,{modelValue:b.onDelete,"onUpdate:modelValue":M[5]||(M[5]=I=>b.onDelete=I),size:"small",filterable:"",class:"!w-[170px]"},{default:u(()=>[(A(!0),f(ee,null,Ee(N.value,I=>(A(),D(Y,{key:I,label:I,value:I},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),bt={key:0,ref:"infoPanel",class:"design-toolbar"},Mt=["title"],It={class:"text-center"},$t={class:"max-h-[300px] overflow-y-auto"},ht=["onClick"],gt=Te({__name:"ColumnPanel",setup(c){const e=Ae(),{dbType:t,columns:n,dialect:r,canAlterTable:l,remainHeight:a,activePanel:i}=Se(e),o=ae({visible:!1,inputting:!1}),N=x(()=>r.value.columnTypes()),R=P([]),O=P(!1),L=P(!0),b=P([]),h={name:"",type:"",unsigned:null,zerofill:null,comment:null,isNotNull:null,defaultValue:null,useCurrentTimestamp:null},_=ae({...h}),C=ae({isNew:!0,editDisable:!1,editVisible:!1,editLoading:!1}),y=x(()=>{var S,p;return v.value&&((p=(S=_.type)==null?void 0:S.match)==null?void 0:p.call(S,/(\bint|decimal|float|double)/i))}),H=x(()=>{var S,p;return v.value&&((p=(S=_.type)==null?void 0:S.match)==null?void 0:p.call(S,/timestamp/i))}),G=x(()=>window.innerWidth<=1200),v=x(()=>["MySQL","Doris","MariaDB"].includes(t.value)),M=x(()=>{const S=C.isNew?"design.newColumn":"design.updateColumn";return m(S)}),q=x(()=>o.inputting&&_.type?N.value.filter(S=>(S.label||S).match(new RegExp(_.type,"i"))):N.value),Q=x(()=>{if(C.isNew){const{name:S,type:p}=_;return S&&p?r.value.newColumn(_):""}y.value||(_.zerofill=!1,_.unsigned=!1),H.value||(_.useCurrentTimestamp=!1);try{return r.value.updateColumn({newColumnName:_.name,columnType:_.type,nullable:!_.isNotNull,..._})}catch(S){return console.error(S),C.editDisable=!0,S}}),K=x(()=>[T.MYSQL,T.MARIA_DB,T.PG,T.DB2].includes(t.value));_e(()=>{w.on("designMetaNext",S=>{b.value=je.clone(S.columns),C.editVisible=!1,L.value=!1}).on("columns",S=>{b.value=je.clone(S),L.value=!1}).on("indexes",S=>{O.value=!0,R.value=S.filter(p=>He(p.isUnique)).map(p=>p.column_name)}).on("success",S=>{S=="column"&&(C.editLoading=!1,C.editVisible=!1,J())}).on("error",()=>{C.editLoading=!1,J()})});const j=(...S)=>!S.includes(t.value),le=S=>{S&&(_.defaultValue="CURRENT_TIMESTAMP")},Y=()=>{const S=q.value[0];S&&(_.type=S.value||S,o.visible=!1)},J=()=>{w.emit("columns"),L.value=!0},se=()=>{Object.assign(_,h),C.isNew=!0,C.editVisible=!0},Re=S=>{Object.assign(_,{...S,columnName:S.name,oldRow:S}),C.isNew=!1,C.editVisible=!0,C.editDisable=!1,C.editLoading=!1},F=(S,p)=>{C.isNew=!1,Object.assign(_,{...S,columnName:S.name,oldRow:b.value[p]}),de()},de=()=>{if(!Q.value)return we("No any change!");if(C.editLoading=!0,C.isNew)return ve();try{w.emit("execute",{type:"column",sql:Q.value})}catch(S){we(S.message),C.editLoading=!1}},ve=()=>{w.emit("execute",{type:"column",sql:Q.value})},I=S=>{fe(m("design.deleteColumnConfirm")).then(()=>{w.emit("execute",{type:"column",sql:r.value.dropColumn(S.name)})})};return(S,p)=>{const Ce=k("vsc-button"),Ge=k("vsc-tooltip"),z=Me,oe=et,rt=Ie,qe=k("RedMark"),De=be,ce=$e,lt=ct,st=he,ot=ge,Et=Oe;return A(),f("div",null,[E(l)?(A(),f("div",bt,[s(Ge,{title:E(m)("common.new")},{default:u(()=>[s(Ce,{type:"icon",icon:"codicon-add text-base",onClick:se})]),_:1},8,["title"]),s(Ge,{title:E(m)("common.refresh")},{default:u(()=>[s(Ce,{type:"icon",icon:"codicon-refresh text-base",onClick:J})]),_:1},8,["title"])],512)):g("",!0),E(i)=="column"?W((A(),D(rt,{key:1,data:E(n),height:E(a),border:"",onRowDblclick:Re},{default:u(()=>[s(z,{resizable:!0,align:"center",prop:"name",label:E(m)("common.name"),width:"180"},null,8,["label"]),s(z,{resizable:!0,align:"center",prop:"type",label:E(m)("common.type"),width:G.value?100:130},null,8,["label","width"]),s(z,{resizable:!0,align:"center",prop:"maximum_length",width:80,label:E(m)("design.length")},null,8,["label"]),["DuckDB"].includes(E(t))?g("",!0):(A(),D(z,{key:0,resizable:!0,align:"center",prop:"comment",label:E(m)("common.comment"),width:"100"},{default:u(({row:d})=>[$("span",{title:d==null?void 0:d.comment},U(d==null?void 0:d.comment),9,Mt)]),_:1},8,["label"])),s(z,{resizable:!0,align:"center",prop:"defaultValue",width:G.value?75:110,label:E(m)("common.default")},null,8,["width","label"]),s(z,{align:"center",label:"Not Null",width:80},{default:u(({row:d,$index:te})=>[s(oe,{modelValue:d.isNotNull,"onUpdate:modelValue":Z=>d.isNotNull=Z,onChange:Z=>F(d,te)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),s(z,{align:"center",label:E(m)("design.isPrimary"),width:110},{default:u(({row:d})=>[s(oe,{disabled:"","model-value":d.isPrimary},null,8,["model-value"])]),_:1},8,["label"]),O.value||["MySQL","MariaDB","Doris"].includes(E(t))?(A(),D(z,{key:1,align:"center",label:E(m)("design.isUnique"),width:80},{default:u(({row:d})=>[s(oe,{disabled:"","model-value":d.isUnique||R.value.includes(d.name)},null,8,["model-value"])]),_:1},8,["label"])):g("",!0),["DuckDB"].includes(E(t))?g("",!0):(A(),D(z,{key:2,align:"center",label:E(m)("design.isAutoIncrement"),width:"130"},{default:u(({row:d,$index:te})=>[s(oe,{modelValue:d.isAutoIncrement,"onUpdate:modelValue":Z=>d.isAutoIncrement=Z,disabled:!d.isPrimary||!K.value,onChange:Z=>F(d,te)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"])),["SQLite"].includes(E(t))?g("",!0):(A(),D(z,{key:3,label:E(m)("design.operation"),width:"100"},{default:u(({row:d})=>[$("div",It,[s(Ce,{type:"icon",icon:"codicon-edit",title:"edit",onClick:te=>Re(d)},null,8,["onClick"]),s(Ce,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:te=>I(d)},null,8,["onClick"])])]),_:1},8,["label"])),v.value?(A(),f(ee,{key:4},[s(z,{align:"center",label:"UNSIGNED",width:"100"},{default:u(({row:d,$index:te})=>[s(oe,{modelValue:d.unsigned,"onUpdate:modelValue":Z=>d.unsigned=Z,"true-value":"1","false-value":"0",onChange:Z=>F(d,te)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),s(z,{align:"center",label:"Zerofill",width:"80"},{default:u(({row:d,$index:te})=>[s(oe,{modelValue:d.zerofill,"onUpdate:modelValue":Z=>d.zerofill=Z,"true-value":"1","false-value":"0",onChange:Z=>F(d,te)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})],64)):g("",!0)]),_:1},8,["data","height"])),[[Et,L.value]]):g("",!0),s(ot,{modelValue:C.editVisible,"onUpdate:modelValue":p[12]||(p[12]=d=>C.editVisible=d),"show-close":!1,title:M.value,width:"680px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(Ce,{type:"secondary",onClick:p[11]||(p[11]=d=>C.editVisible=!1)},{default:u(()=>[B(U(E(m)("common.cancel")),1)]),_:1}),s(Ce,{type:"primary",loading:C.editLoading,disabled:C.editDisable,onClick:de},{default:u(()=>[B(U(E(m)("common.ok")),1)]),_:1},8,["loading","disabled"]),p[14]||(p[14]=$("br",null,null,-1)),p[15]||(p[15]=B()),p[16]||(p[16]=$("br",null,null,-1)),W(s(pe,{ref:"cmEditor",value:Q.value,readonly:!0},null,8,["value"]),[[ne,Q.value]])]),default:u(()=>[s(st,{inline:!0,"label-width":"90px",size:"small"},{default:u(()=>[s(ce,null,{label:u(()=>[s(qe),B(U(E(m)("common.name")),1)]),default:u(()=>[s(De,{modelValue:_.name,"onUpdate:modelValue":p[0]||(p[0]=d=>_.name=d),size:"small",fixed:""},null,8,["modelValue"])]),_:1}),y.value?(A(),D(ce,{key:0,label:"ZEROFILL"},{default:u(()=>[s(oe,{modelValue:_.zerofill,"onUpdate:modelValue":p[1]||(p[1]=d=>_.zerofill=d),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):g("",!0),H.value?(A(),D(ce,{key:1,label:"CURRENT_TIMESTAMP","label-width":"160px"},{default:u(()=>[s(oe,{modelValue:_.useCurrentTimestamp,"onUpdate:modelValue":p[2]||(p[2]=d=>_.useCurrentTimestamp=d),onChange:le},null,8,["modelValue"])]),_:1})):g("",!0),p[13]||(p[13]=$("br",null,null,-1)),s(ce,null,{label:u(()=>[s(qe),B(U(E(m)("common.type")),1)]),default:u(()=>[s(lt,{visible:o.visible,"onUpdate:visible":p[6]||(p[6]=d=>o.visible=d),placement:"bottom-start","popper-class":"!p-0",trigger:"click",tabindex:null},{reference:u(()=>[s(De,{modelValue:_.type,"onUpdate:modelValue":p[3]||(p[3]=d=>_.type=d),size:"small",fixed:"",onKeyup:Le(Y,["enter"]),onInput:p[4]||(p[4]=d=>{o.inputting=!0,o.visible=!0}),onClick:p[5]||(p[5]=d=>o.inputting=!1)},null,8,["modelValue"])]),default:u(()=>[$("div",$t,[(A(!0),f(ee,null,Ee(q.value,(d,te)=>(A(),f(ee,null,[d=="hr"?(A(),f("div",{key:te,class:"w-full type-hr bg-bg"})):(A(),f("div",{key:1,class:"el-select-dropdown__item !h-6 min-w-[190px] bg-[var(--vscode-dropdown-background)]",onClick:Z=>{_.type=d.value||d,o.visible=!1}},U(d.label||d),9,ht))],64))),256))])]),_:1},8,["visible"])]),_:1}),j("ClickHouse")?(A(),D(ce,{key:2,label:E(m)("design.isNotNull")},{default:u(()=>[s(oe,{modelValue:_.isNotNull,"onUpdate:modelValue":p[7]||(p[7]=d=>_.isNotNull=d)},null,8,["modelValue"])]),_:1},8,["label"])):g("",!0),y.value?(A(),D(ce,{key:3,label:"UNSIGNED"},{default:u(()=>[s(oe,{modelValue:_.unsigned,"onUpdate:modelValue":p[8]||(p[8]=d=>_.unsigned=d),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):g("",!0),!["SqlServer","Snowflake"].includes(E(t))||C.isNew?(A(),D(ce,{key:4,label:E(m)("common.default")},{default:u(()=>[s(De,{modelValue:_.defaultValue,"onUpdate:modelValue":p[9]||(p[9]=d=>_.defaultValue=d),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"])):g("",!0),["DuckDB"].includes(E(t))?g("",!0):(A(),D(ce,{key:5,label:E(m)("common.comment")},{default:u(()=>[s(De,{modelValue:_.comment,"onUpdate:modelValue":p[10]||(p[10]=d=>_.comment=d),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"]))]),_:1})]),_:1},8,["modelValue","title"])])}}}),Dt=ze(gt,[["__scopeId","data-v-2591f846"]]),wt={class:"ml-4"},ft={class:"flex flex-col gap-y-2"},Ut={class:"flex-wrap"},yt={class:"inline-block mr-5"},Bt={class:"font-bold mr-5 inline-block"},vt={class:"inline-block mr-5"},Ft={class:"font-bold mr-5 inline-block"},Ht={class:"flex-wrap"},Pt={key:0,class:"inline-block mr-5"},xt={class:"font-bold mr-5 inline-block"},kt={key:1,class:"inline-block mr-5"},Vt={class:"font-bold mr-5 inline-block"},Yt={class:"inline-block pt-1"},Wt=Te({__name:"InfoPanel",setup(c){const e=Ae(),{dialect:t}=Se(e),n=P([]),r=ae({name:null,schema:null,newTableName:null,comment:null,newComment:null,collation:null,newCollation:null});_e(()=>{w.on("designMetaNext",a=>{r.name=a.table,r.schema=a.schema,r.newTableName=a.table,r.comment=a.comment,r.newComment=a.comment,r.collation=a.collation,r.newCollation=a.collation}).on("collations",a=>{n.value=a})});const l=()=>{const a={...r,table:r.name};w.emit("updateTable",a);const i=t.value.updateTable(a);i?w.emit("execute",{type:"table",sql:i}):we("No any change!")};return(a,i)=>{const o=be,N=Pe,R=xe,O=k("vsc-button");return A(),f("div",wt,[$("div",ft,[$("div",Ut,[$("div",yt,[$("label",Bt,U(a.$t("design.table")),1),s(o,{modelValue:r.newTableName,"onUpdate:modelValue":i[0]||(i[0]=L=>r.newTableName=L),class:"!w-48",required:"",onKeyup:Le(l,["enter"])},null,8,["modelValue"])]),$("div",vt,[$("label",Ft,U(a.$t("common.comment")),1),s(o,{modelValue:r.newComment,"onUpdate:modelValue":i[1]||(i[1]=L=>r.newComment=L),class:"!w-48",onKeyup:Le(l,["enter"])},null,8,["modelValue"])])]),$("div",Ht,[E(e).tableMeta.engine?(A(),f("div",Pt,[$("label",xt,U(a.$t("design.engine")),1),s(o,{value:E(e).tableMeta.engine,class:"!w-24",disabled:""},null,8,["value"])])):g("",!0),r.collation&&n.value.length>0?(A(),f("div",kt,[$("label",Vt,U(a.$t("design.collate")),1),s(R,{modelValue:r.newCollation,"onUpdate:modelValue":i[2]||(i[2]=L=>r.newCollation=L),size:"small",filterable:""},{default:u(()=>[(A(!0),f(ee,null,Ee(n.value,L=>(A(),D(N,{key:L.name,label:L.name,value:L.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])):g("",!0),$("div",Yt,[s(O,{type:"success",onClick:l},{default:u(()=>[B(U(a.$t("common.update")),1)]),_:1})])])])])}}}),Gt={key:0,class:"design-toolbar"},qt={class:"text-center"},Kt=Te({__name:"Check",setup(c){const e=Ae(),{dialect:t,canAlterTable:n,remainHeight:r,activePanel:l}=Se(e),a=P([]),i=P(!0),o=ae({visible:!1,loading:!1}),N=ae({clause:null}),R=x(()=>N.clause?t.value.newCheck(N.clause):"");_e(()=>{w.on("designMetaNext",_=>{_.isSupportCheck&&(O(),o.visible=!1)}).on("checks",_=>{i.value=!1,a.value=_}).on("success",_=>{_=="check"&&(O(),o.visible=!1,o.loading=!1)}).on("error",()=>{o.loading=!1})});const O=()=>{const _=t.value.showChecks();if(!_){console.log("This database type does not currently support check."),i.value=!1;return}i.value=!0,w.emit("checks",_)},L=()=>{o.visible=!0,o.loading=!1,N.clause=null},b=()=>{o.loading=!0,w.emit("execute",{type:"check",sql:R.value})},h=_=>{fe(m("design.deleteCheckConfirm")).then(()=>{w.emit("execute",{type:"check",sql:t.value.dropCheck(_.name)})})};return(_,C)=>{const y=k("vsc-button"),H=k("vsc-tooltip"),G=Me,v=Ie,M=k("RedMark"),q=be,Q=$e,K=he,j=ge,le=Oe;return A(),f("div",null,[E(n)?(A(),f("div",Gt,[s(H,{title:E(m)("common.new")},{default:u(()=>[s(y,{type:"icon",icon:"codicon-add text-base",onClick:L})]),_:1},8,["title"]),s(H,{title:E(m)("common.refresh")},{default:u(()=>[s(y,{type:"icon",icon:"codicon-refresh text-base",onClick:O})]),_:1},8,["title"])])):g("",!0),E(l)=="check"?W((A(),D(v,{key:1,data:a.value,height:E(r),border:""},{default:u(()=>[E(n)?(A(),D(G,{key:0,resizable:!0,align:"center",prop:"name",label:E(m)("design.constraintName"),width:"200"},null,8,["label"])):g("",!0),s(G,{resizable:!0,align:"center",prop:"clause",label:E(m)("design.clause"),width:"200"},null,8,["label"]),E(n)?(A(),D(G,{key:1,label:E(m)("design.operation"),width:"100"},{default:u(({row:Y})=>[$("div",qt,[s(y,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:J=>h(Y)},null,8,["onClick"])])]),_:1},8,["label"])):g("",!0)]),_:1},8,["data","height"])),[[le,i.value]]):g("",!0),s(j,{modelValue:o.visible,"onUpdate:modelValue":C[3]||(C[3]=Y=>o.visible=Y),"show-close":!1,title:E(m)("design.newCheck"),width:"430px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(y,{type:"secondary",onClick:C[2]||(C[2]=Y=>o.visible=!1)},{default:u(()=>[B(U(E(m)("common.cancel")),1)]),_:1}),s(y,{type:"primary",loading:o.loading,onClick:b},{default:u(()=>[B(U(E(m)("common.ok")),1)]),_:1},8,["loading"]),C[4]||(C[4]=$("br",null,null,-1)),C[5]||(C[5]=B()),C[6]||(C[6]=$("br",null,null,-1)),W(s(pe,{ref:"cmEditor",value:R.value,readonly:!0},null,8,["value"]),[[ne,R.value]])]),default:u(()=>[s(K,{inline:!0,"label-width":"80px","label-position":"left",onSubmit:C[1]||(C[1]=Ze(()=>{},["prevent"])),onKeyup:Le(b,["enter"])},{default:u(()=>[s(Q,null,{label:u(()=>[s(M),B(U(E(m)("design.clause")),1)]),default:u(()=>[s(q,{modelValue:N.clause,"onUpdate:modelValue":C[0]||(C[0]=Y=>N.clause=Y),class:"!w-[290px]",size:"small",placeholder:"e.g. id >20 and name!='admin'"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),jt={key:0,class:"design-toolbar"},Qt=Te({__name:"Trigger",setup(c){const e=Ae(),{dialect:t,canAlterTable:n,remainHeight:r,activePanel:l}=Se(e),a=P([]),i=P(!0),o=ae({visible:!1,loading:!1}),N=ae({clause:null}),R=x(()=>"");_e(()=>{w.on("designMetaNext",()=>{O(),o.visible=!1}).on("triggers",b=>{i.value=!1,a.value=b}).on("success",b=>{b=="trigger"&&(O(),o.visible=!1,o.loading=!1)}).on("error",()=>{o.loading=!1})});const O=()=>{i.value=!0,w.emit("triggers")},L=()=>{o.loading=!0,w.emit("execute",{type:"trigger",sql:R.value})};return(b,h)=>{const _=k("vsc-button"),C=k("vsc-tooltip"),y=Me,H=Ie,G=k("RedMark"),v=be,M=$e,q=he,Q=ge,K=Oe;return A(),f("div",null,[E(n)?(A(),f("div",jt,[s(C,{title:E(m)("common.refresh")},{default:u(()=>[s(_,{type:"icon",icon:"codicon-refresh text-base",onClick:O})]),_:1},8,["title"])])):g("",!0),E(l)=="trigger"?W((A(),D(H,{key:1,data:a.value,height:E(r),border:""},{default:u(()=>[s(y,{resizable:!0,align:"center",prop:"trigger_name",label:E(m)("design.triggerName"),width:"200"},null,8,["label"]),s(y,{resizable:!0,align:"center",prop:"timing",label:E(m)("design.timing"),width:"200"},null,8,["label"]),s(y,{resizable:!0,align:"center",prop:"manipulation",label:E(m)("design.manipulation"),width:"200"},null,8,["label"]),s(y,{resizable:!0,align:"center",prop:"orientation",label:E(m)("design.orientation"),width:"200"},null,8,["label"]),s(y,{resizable:!0,align:"center",prop:"statement",label:E(m)("design.statement"),width:"200"},{default:u(j=>[B(U(j.row.source||j.row.statement),1)]),_:1},8,["label"])]),_:1},8,["data","height"])),[[K,i.value]]):g("",!0),s(Q,{modelValue:o.visible,"onUpdate:modelValue":h[3]||(h[3]=j=>o.visible=j),"show-close":!1,title:E(m)("design.newTrigger"),width:"430px",closeOnClickModal:!1,"close-on-press-escape":!1,center:""},{footer:u(()=>[s(_,{type:"secondary",onClick:h[2]||(h[2]=j=>o.visible=!1)},{default:u(()=>[B(U(E(m)("common.cancel")),1)]),_:1}),s(_,{type:"primary",loading:o.loading,onClick:L},{default:u(()=>[B(U(E(m)("common.ok")),1)]),_:1},8,["loading"]),h[4]||(h[4]=$("br",null,null,-1)),h[5]||(h[5]=B()),h[6]||(h[6]=$("br",null,null,-1)),W(s(pe,{ref:"cmEditor",value:R.value,readonly:!0},null,8,["value"]),[[ne,R.value]])]),default:u(()=>[s(q,{inline:!0,"label-width":"80px","label-position":"left",onSubmit:h[1]||(h[1]=Ze(()=>{},["prevent"])),onKeyup:Le(L,["enter"])},{default:u(()=>[s(M,null,{label:u(()=>[s(G),B(U(E(m)("design.clause")),1)]),default:u(()=>[s(v,{modelValue:N.clause,"onUpdate:modelValue":h[0]||(h[0]=j=>N.clause=j),class:"!w-[290px]",size:"small",placeholder:"e.g. AFTER INSERT ON table_name FOR EACH ROW"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}});class ie{showAllComments(){return null}showAllForeignKeys(){return null}showAllConstraints(){return null}dropIndex(e,t){throw new Error("Method not implemented.")}showVersion(){return null}showIndex(e,t){return null}createIndex(e){return null}showDatabases(){return null}updateUser(e){return null}showCollations(){return null}showPackages(e){return null}showChecks(e,t){return null}showPartitions(e,t){return null}showActualPartitions(e,t){return null}showForeignKeys(e,t){return null}updateColumnSql(e){throw new Error("Method not implemented.")}showMaterialViews(e,t){return""}showTriggers(e,t){return null}showSequences(e){return null}showCustomTypes(e){return null}showExternalTables(e){return`select foreign_table_name "name",foreign_server_name "server",foreign_server_catalog "server_db" from information_schema.foreign_tables where foreign_table_schema='${e}';`}showEvents(e){return`SELECT EVENT_NAME "name" FROM information_schema.EVENTS where EVENT_SCHEMA='${e}' ORDER BY EVENT_NAME;`}dropEventTemplate(e){return`DROP EVENT IF EXISTS ${e};`}dropDatabase(e){return`DROP DATABASE ${e}`}showTableSource(e,t){return null}materializedViewTemplate(){return this.viewTemplate(!0)}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
[BEFORE/AFTER] INSERT ON ${e??"[table_name]$2"}
FOR EACH ROW BEGIN
    $3
END;`}eventTemplate(){return`CREATE EVENT event_name$1
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
BEGIN
    SELECT now()$2;
END;`}kill(e){return null}pingDataBase(e,t){return null}dropTriggerTemplate(e,t){return`DROP TRIGGER ${e}`}}class Xt extends ie{showVersion(){return"select version() server_version"}createIndex(e){const t=e.indexType||"btree";return`CREATE INDEX ${e.column}_${new Date().getTime()}_index ON ${e.table} USING ${t} (${e.column})`}dropIndex(e,t){return`DROP INDEX ${t}`}showIndex(e,t){return`select name index_name,is_in_sorting_key indexdef  FROM system.columns WHERE database = '${e}' and table ='${t}' and indexdef=1`}variableList(){return"select name , value as setting,description from system.settings s "}statusList(){return"select name as db , engine as status from system.databases d "}kill(e){return`KILL QUERY WHERE query_id='${e.ID}'`}processList(){return`
    SELECT query_id AS "ID", user AS "User",
    current_database AS "DB",os_user AS "State",
    addSeconds(now(), elapsed) AS "Time",
    query AS "SQL"
    FROM system.processes p 
    ORDER BY elapsed desc`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN [column] [type]`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password'"}updateColumn(e,t){const{name:n,type:r,comment:l,nullable:a,defaultValue:i}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${r};
-- change column name
ALTER TABLE ${e}  
    RENAME COLUMN ${n} TO [newColumnName]`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:r,comment:l,table:a,defaultValue:i,oldRow:o}=e;return console.log(n,o),new V("",`
`).if(n!=o.type,`ALTER TABLE ${a} ALTER COLUMN ${t} TYPE ${n};`).if(i&&i!=o.defaultValue,`ALTER TABLE ${a} MODIFY COLUMN ${t} DEFAULT ${re(i,n)};`).if(l&&l!=o.comment,`ALTER TABLE ${a} MODIFY COLUMN ${t} COMMENT '${l}';`).if(t!=r,`ALTER TABLE ${a} RENAME COLUMN ${t} TO ${r};`).toString()}showUsers(){return"SELECT * FROM system.users"}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`ALTER TABLE ${t} MODIFY COMMENT '${l}';`),n&&t!=n&&(a+=`ALTER TABLE ${t} RENAME TO ${n};`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return`SELECT create_table_query as "Create Table",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${t}'`}showViewSource(e,t){return`SELECT create_table_query as "Create View",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${t}'`}showProcedureSource(e,t){return"select number from system.numbers where 1=0"}showFunctionSource(e,t){return"select number from system.numbers where 1=0"}showTriggerSource(e,t){return"select number from system.numbers where 1=0"}showColumns(e,t){return`select name,type, null as maximum_length,default_expression as defaultValue,is_in_primary_key as key from system.columns c where database='${e}' and table='${t}' `}showProcedures(e){return"select number from system.numbers where 1=0"}showFunctions(e){return`select name as "ROUTINE_NAME" from system.functions  where origin !='System'`}showViews(e){return`select name ,engine as type from system.tables where database='${e}' and engine = 'View' ORDER BY name`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n}`}showTables(e){return`select name, engine as type from system.tables where database='${e}' and engine <> 'View' ORDER BY name`}showDatabases(){return"SELECT name as Database FROM system.databases where name not in ('information_schema','INFORMATION_SCHEMA') order by name ASC"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id UUID,
    create_time DATETIME,
    name$2 String
)
ENGINE = MergeTree()
ORDER BY (id)
PRIMARY KEY(id);`}viewTemplate(){return`CREATE VIEW $1
AS
SELECT * FROM $2`}procedureTemplate(){return"select number from system.numbers where 1=0"}functionTemplate(){return"CREATE FUNCTION [func_name] AS (a, b, c) -> a * b * c;"}}class Ue{constructor(e){this.param=e,this.afterTablePrefix=`ALTER TABLE "${e.table}"`,this.afterColumnPrefix=`${this.afterTablePrefix} ALTER COLUMN "${e.columnName}"`}genAlterSQL(){const{columnName:e,newColumnName:t}=this.param;return new V("",`
`).append(this.changeTypePart()).append(this.notNullPart()).append(this.defaultPart()).append(this.otherPart()).append(this.commentPart()).if(e!=t,`${this.afterTablePrefix} RENAME COLUMN "${e}" TO "${t}";`).toString()}changeTypePart(){const{oldRow:e,columnType:t}=this.param;return e.type==t?"":`${this.afterColumnPrefix} TYPE ${t};`}notNullPart(){const{oldRow:e,isNotNull:t}=this.param;return e.isNotNull==t?"":`${this.afterColumnPrefix} ${t?"SET NOT NULL":"DROP NOT NULL"};`}otherPart(){return null}defaultPart(){const{oldRow:e,defaultValue:t,columnType:n}=this.param;return e.defaultValue==t?"":`${this.afterColumnPrefix} ${X(t)?"DROP DEFAULT":`SET DEFAULT ${re(t,n)}`};`}commentPart(){return""}}class Ne extends ie{showVersion(){return""}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type||"key"} ("${e.column||"[column]"}")`}dropIndex(e,t){return`DROP INDEX "${t}"`}showIndex(e,t){return null}variableList(){return null}statusList(){return null}processList(){return null}addColumn(e,t){const n=t?` AFTER "${t}"`:"";return`ALTER TABLE ${e}
    ADD COLUMN [column] [type] COMMENT ''${n};`}createUser(){return`CREATE USER 'username'@'%' IDENTIFIED BY 'password';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO 'username'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var O;const{name:n,type:r,comment:l,nullable:a,defaultValue:i,extra:o,character_set_name:N,collation_name:R}=t;return new V(`ALTER TABLE ${e}`).append(`
	CHANGE ${n} ${n} ${r}`).if(N,`CHARACTER SET ${N}`).if(R,`COLLATE ${R}`).if(a!="YES","NOT NULL").if((O=o==null?void 0:o.toLowerCase())==null?void 0:O.includes("auto_increment"),"AUTO_INCREMENT").if(l,`COMMENT '${l}'`).if(i,`DEFAULT ${i=="CURRENT_TIMESTAMP"?i:`'${i}'`}`).toString()}updateColumnSql(e){return new Ue(e).genAlterSQL()}showUsers(){return"SELECT concat(user,'@',host) user FROM mysql.user;"}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`RENAME TABLE "${t}" TO "${n}";`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',table_schema,'"."',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`SHOW CREATE TABLE ${e}.${t};`}showViewSource(e,t,n){return`SHOW CREATE VIEW database.${t};`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE database.${t};`}showFunctionSource(e,t,n){return`SHOW CREATE FUNCTION database.${t};`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER database.${t};`}showColumns(e,t){return`SELECT COLUMN_NAME name,DATA_TYPE type, IS_NULLABLE nullable
            FROM information_schema.columns WHERE table_schema = '${e}' AND table_name = '${t}' ORDER BY ORDINAL_POSITION;`}showTriggers(e,t){return""}showProcedures(e){return""}showFunctions(e){return""}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t=e){return`SELECT TABLE_NAME "name" FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showViews(e,t=e){return`SELECT TABLE_NAME name FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${t}' ORDER BY TABLE_NAME`}showDatabases(){return"SELECT SCHEMA_NAME as Database FROM information_schema.schemata ORDER BY Database;"}showSchemas(e){return"SELECT SCHEMA_NAME as schema FROM information_schema.schemata ORDER BY schema;"}tableTemplate(e){return`CREATE TABLE table_name$1(
    id int,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}procedureTemplate(){return`CREATE PROCEDURE procedure_name$1()
BEGIN
    $2
END;`}functionTemplate(){return`CREATE FUNCTION function_name$1() RETURNS int
BEGIN
    $2
    return 0;
END;`}}class ke extends ie{updateColumn(e,t){return null}showSchemas(e){return null}showTables(e,t){return null}addColumn(e,t){return null}showColumns(e,t,n){return null}showViews(e,t){return null}showUsers(){return null}createUser(){return null}showTriggers(e,t){return null}showProcedures(e){return null}showFunctions(e){return null}buildPageSql(e,t,n){return null}createDatabase(e){return null}truncateDatabase(e){return null}updateTable(e){return null}showViewSource(e,t,n){return null}showProcedureSource(e,t){return null}showFunctionSource(e,t,n){return null}showTriggerSource(e,t){return null}tableTemplate(e){return null}viewTemplate(e){return null}procedureTemplate(){return null}functionTemplate(){return null}processList(){return null}variableList(){return null}statusList(){return null}}class tt extends ie{showVersion(){return`select RTRIM(SUBSTR(REPLACE(banner,'Oracle Database ',''),1,3)) "server_version" from v$version where rownum=1`}showAllForeignKeys(){return`SELECT 
    a.constraint_name AS "constraint_name",
    a.owner AS "table_schema",
    a.table_name AS "table_name",
    a.column_name AS "column_name",
    c.owner AS "referenced_schema",
    c.table_name AS "referenced_table",
    c.column_name AS "referenced_column"
FROM 
    ALL_CONS_COLUMNS a 
JOIN 
    ALL_CONSTRAINTS b ON a.owner = b.owner AND a.constraint_name = b.constraint_name
JOIN 
    ALL_CONS_COLUMNS c ON b.r_owner = c.owner AND b.r_constraint_name = c.constraint_name
WHERE 
    b.constraint_type = 'R'
    and a.owner not in ('SYS','APEX_040200')`}showAllConstraints(){return`SELECT 
        b.CONSTRAINT_NAME "constraint_name",
        c.CONSTRAINT_TYPE "constraint_type",
        b.owner "table_schema",
        b.table_name "table_name",
        b.COLUMN_NAME "column_name"
         FROM ALL_CONS_COLUMNS b 
          join ALL_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME 
          WHERE CONSTRAINT_TYPE='P'
          and b.owner not in ('SYS','APEX_040200')`}showAllComments(){return`SELECT 
        owner "table_schema",
        table_name "table_name",
        COLUMN_NAME "column_name",
        COMMENTS "comment"
         FROM all_col_comments WHERE COMMENTS is not null
         and owner not in ('SYS','APEX_040200')`}createIndex(e){const{table:t,column:n}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n})`}dropIndex(e,t){return`DROP INDEX ${t}`}showIndex(e,t){return`SELECT 
col.COLUMN_NAME "column_name",col.INDEX_NAME "index_name",idx.UNIQUENESS='UNIQUE' "isUnique"
from ALL_IND_COLUMNS col
join ALL_INDEXES idx on col.index_name = idx.index_name
WHERE col.TABLE_OWNER='${e}'
     and col.TABLE_NAME='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}kill(e){const{SID:t,SERIAL:n}=e;return`ALTER SYSTEM KILL SESSION '${t},${n}' IMMEDIATE;`}processList(){return`SELECT 
        SID, SERIAL# as SERIAL,
        s.username "User", s.schemaname "Schema", 
        s.status "Status", 
        sql.sql_text SQL
        FROM v$session s,
             v$sql     sql
       WHERE sql.sql_id(+) = s.sql_id
         AND s.type     = 'USER'`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment'`}createUser(){return`CREATE USER $1 IDENTIFIED BY [password$2];
GRANT CONNECT TO $1;
ALTER USER $1 quota unlimited on USERS;
        `}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password]`}updateColumn(e,t){const{name:n,type:r,comment:l,nullable:a,defaultValue:i}=t;return`-- change column type
ALTER TABLE ${e} MODIFY ${n} ${r};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${n} TO [newColumnName];
COMMENT ON COLUMN ${e}.${n} IS '${l||""}'`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:r,comment:l,defaultValue:a,table:i,isNotNull:o,oldRow:N}=e;return new V("","").if(n!=N.type,`ALTER TABLE "${i}" MODIFY "${t}" ${n};`).if(o!=N.isNotNull,`
ALTER TABLE "${i}" MODIFY "${t}"${o?"NOT NULL":"NULL"};`).if(a!=null&&a!=N.defaultValue,`
ALTER TABLE "${i}" MODIFY "${t}" DEFAULT ${a!=null&&a.match(/(:|nextval)/i)?a:`'${a==null?void 0:a.replace(/(^'|'$)/g,"")}'`};`).if(l&&l!=N.comment,`
COMMENT ON COLUMN "${i}"."${t}" is '${l}';`).if(t!=r,`
ALTER TABLE "${i}" RENAME COLUMN "${t}" TO "${r}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`ALTER SESSION SET current_schema = "${e}"`:null}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`ALTER TABLE "${t}" RENAME TO "${n}"`),a}truncateDatabase(e){return`SELECT 'TRUNCATE TABLE "' || owner || '"."' || object_name || '";' trun FROM all_objects where  owner ='${e}' and object_type ='TABLE'`}createDatabase(e){return"CREATE USER $1 IDENTIFIED BY password$2;"}showViewSource(e,t,n){return n?`select QUERY "Create View" from ALL_MVIEWS where OWNER='${e}' and mview_name='${t}'`:`SELECT DBMS_METADATA.GET_DDL('VIEW', '${t}', '${e}') AS VIEW_DDL FROM DUAL;`}showProcedureSource(e,t){return`SELECT text "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showFunctionSource(e,t){return`SELECT 'CREATE ' || LISTAGG(text) within group( order by line ) "source"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showTriggerSource(e,t){return`SELECT text
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showColumns(e,t){return e?`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_PRECISION "precision",
        a.DATA_SCALE "scale",
        a.DATA_TYPE "type",
        COALESCE(a.DATA_PRECISION, a.data_length) "maximum_length",
        a.NULLABLE "nullable"
      from
        all_tab_columns a
      where
        a.owner = '${e}'
        and a.table_name = '${t}'`:`select
a.COLUMN_NAME "name",
a.DATA_DEFAULT "defaultValue",
a.DATA_PRECISION "precision",
a.DATA_SCALE "scale",
a.DATA_TYPE "type",
COALESCE(a.DATA_PRECISION, a.data_length) "maximum_length",
a.NULLABLE "nullable"
from
    user_tab_columns a
where
a.table_name = '${t}'`}showChecks(e,t){return`SELECT
        c.constraint_name "name",
        c.search_condition "clause"
    FROM
        all_constraints c
    WHERE
        c.owner = '${e}' and
        c.table_name = '${t}'
        AND c.constraint_type = 'C';`}showForeignKeys(e,t){let n=`select
        b.CONSTRAINT_NAME "constraint_name",
        b.COLUMN_NAME "column_name",
        c_pk.table_name "referenced_table",
        b_pk.COLUMN_NAME "referenced_column"
    from ALL_CONS_COLUMNS b
        join ALL_CONSTRAINTS c on b.owner=c.owner and b.CONSTRAINT_NAME = c.CONSTRAINT_NAME
        JOIN all_constraints c_pk ON c.r_owner = c_pk.owner AND c.r_constraint_name = c_pk.constraint_name
        join ALL_CONS_COLUMNS b_pk on b_pk.CONSTRAINT_NAME = c_pk.CONSTRAINT_NAME
    where
        b.owner = '${e}' and
        b.table_name = '${t}'
        and c.CONSTRAINT_TYPE = 'R';`;return e||(n=n.replace(/all_/ig,"USER_").replace("b.owner = 'undefined' and","")),n}showTriggers(e,t){const n=t?` AND TABLE_NAME='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name",TABLE_NAME "table_name",TRIGGERING_EVENT "event" FROM all_triggers WHERE TABLE_OWNER='${e}' ${n} ORDER BY TRIGGER_NAME`}showPackages(e){return`SELECT 
                    object_name "name" ,
                    status "status"
                FROM 
                    ALL_OBJECTS 
                WHERE 
                    OBJECT_TYPE IN ('PACKAGE') 
                    AND owner='${e}' 
                ORDER BY 
                    "name"`}showProcedures(e){return`SELECT 
                    object_name "ROUTINE_NAME" ,
                    status "status"
                FROM 
                    all_objects 
                WHERE 
                    object_type = 'PROCEDURE' 
                    AND owner = '${e}' 
                ORDER BY 
                    "ROUTINE_NAME"`}showFunctions(e){return`SELECT 
                    object_name "ROUTINE_NAME" ,
                    status "status"
                FROM 
                    all_objects 
                WHERE 
                    object_type = 'FUNCTION' 
                    AND owner='${e}' 
                ORDER BY 
                    "ROUTINE_NAME"`}showViews(e,t){return`select object_type "type",object_name "name" from all_objects where object_type = 'VIEW' and owner='${t}' ORDER BY "type","name"`}showMaterialViews(e,t){return`select object_type "type",object_name "name" from all_objects where object_type = 'MATERIALIZED VIEW' and owner='${t}' ORDER BY "type","name"`}buildPageSql(e,t,n){return`SELECT * FROM ${t} WHERE ROWNUM <= ${n}`}showTables(e,t){return`select o.object_name "name", nvl(t.num_rows, -1) "table_rows", c.comments "comment" from all_objects o
        LEFT JOIN all_tables t on o.owner = t.owner and o.object_name = t.table_name
        LEFT JOIN all_tab_comments c on o.owner = c.owner and o.object_name = c.table_name
        where o.owner = '${t}' and o.object_type = 'TABLE' ORDER BY "name"`}showDatabases(){return'select username as "Database" from sys.all_users order by username'}showSchemas(){return'select username as "Database" from sys.all_users order by username'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id NUMBER GENERATED AS IDENTITY PRIMARY KEY,
    create_time DATE,
    name$2 VARCHAR2(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.$2 IS '$4'`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN NUMBER) 
RETURN NUMBER 
IS
BEGIN 
    $2
    RETURN x*2;
END;`}}class Jt extends tt{showVersion(){return`SELECT REPLACE(banner,'DM Database Server 64 ','') "server_version"  FROM v$version where rownum=1;`}createIndex(e){const{table:t,column:n="$2"}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n});`}dropIndex(e,t){return`DROP INDEX ${t};`}showIndex(e,t){return`SELECT COLUMN_NAME "column_name",INDEX_NAME "index_name" from all_IND_COLUMNS WHERE TABLE_OWNER='${e}' and TABLE_NAME='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"SELECT SESS_ID,STATE,SQL_TEXT FROM v$sessions"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN $1 $2;
COMMENT ON COLUMN ${e}.$3 IS 'comment$4';`}createUser(){return"CREATE USER $1 IDENTIFIED BY [password]$2;"}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password];`}updateColumn(e,t){const{name:n,type:r,comment:l,nullable:a,defaultValue:i}=t;return`-- change column type
ALTER TABLE ${e} MODIFY ${n} ${r};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${n} TO [newColumnName];
COMMENT ON COLUMN ${e}.${n} IS '${l||""}';`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:r,comment:l,defaultValue:a,table:i,isNotNull:o,oldRow:N}=e;return new V("","").if(n!=N.type,`ALTER TABLE "${i}" MODIFY "${t}" ${n};`).if(o!=N.isNotNull,`
ALTER TABLE "${i}" MODIFY "${t}"${o?"NOT NULL":"NULL"};`).if(a!=null&&a!=N.defaultValue,`
ALTER TABLE "${i}" MODIFY "${t}" DEFAULT ${a!=null&&a.match(/(:|nextval)/i)?a:`'${a==null?void 0:a.replace(/(^'|'$)/g,"")}'`};`).if(l&&l!=N.comment,`
COMMENT ON COLUMN "${i}"."${t}" is '${l}';`).if(t!=r,`
ALTER TABLE "${i}" RENAME COLUMN "${t}" TO "${r}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`set SCHEMA ${e}`:null}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`ALTER TABLE "${t}" RENAME TO "${n}"`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE USER [name] IDENTIFIED BY [password];"}showViewSource(e,t){return`CALL SP_VIEWDEF('${e}', '${t}');`}showProcedureSource(e,t){return`SELECT LISTAGG(text) within group(order by line) "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showFunctionSource(e,t){return`select DBMS_METADATA.GET_DDL('FUNCTION', '${t}','${e}') "Create Function";`}showColumns(e,t){return`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_TYPE "type",
        a.DATA_PRECISION "precision",
        a.DATA_SCALE "scale",
        a.data_length "maximum_length",
        a.NULLABLE "nullable",
        c.CONSTRAINT_TYPE "key",
        cc.COMMENTS "comment",
        sc."INFO2" "extra"
      from
        all_tab_columns a
        left join all_col_comments cc on a.COLUMN_NAME=cc.COLUMN_NAME and a.OWNER=cc.SCHEMA_NAME and a.table_name=cc.table_name
        left join ALL_CONS_COLUMNS b on a.COLUMN_NAME=b.COLUMN_NAME and a.OWNER=b.OWNER and a.table_name=b.table_name
        left join all_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME
        left join sys.syscolumns sc on sc.id = (
            SELECT OBJECT_ID
                FROM all_objects t
                WHERE t.owner =a.OWNER
                AND t.object_name = a.table_name
                AND t.OBJECT_TYPE='TABLE'
        ) and sc."NAME"=a.COLUMN_NAME
      where
        a.owner = '${e}'
        and a.table_name = '${t}';`}showProcedures(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'PROCEDURE' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showFunctions(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'FUNCTION' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showViews(e){return`select object_name "name" from all_objects where object_type = 'VIEW' and owner='${e}';`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT a.object_name "name",b.COMMENTS "comment" from all_objects a
join ALL_TAB_COMMENTS b on a.OWNER=b.OWNER and a.object_name=b.TABLE_NAME
where a.object_type = 'TABLE' and a.owner='${t}' and a.TEMPORARY<>'Y';`}showDatabases(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}showSchemas(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY IDENTITY(1,1),
    create_time DATETIME,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE $1 IS '$3';
COMMENT ON COLUMN $1.$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN int) RETURN int$2
AS
BEGIN
    $3
    return x*2;
END;`}}class ye extends ie{showVersion(){return"select @@version server_version;"}showAllForeignKeys(){return`SELECT 
        CONSTRAINT_NAME constraint_name,
        TABLE_SCHEMA table_schema,
        TABLE_NAME table_name,
        COLUMN_NAME column_name,
        REFERENCED_TABLE_SCHEMA referenced_schema,
        REFERENCED_TABLE_NAME referenced_table,
        REFERENCED_COLUMN_NAME referenced_column
         FROM information_schema.KEY_COLUMN_USAGE 
         WHERE REFERENCED_TABLE_NAME is not null`}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${t}'
        ORDER BY index_name, SEQ_IN_INDEX;`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}kill(e){return`KILL ${e==null?void 0:e.ID};`}processList(){return"SELECT ID, USER User, DB, COMMAND Command, STATE State, TIME Time, INFO `SQL`\nFROM information_schema.PROCESSLIST;"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var l,a;const{nullable:n,extra:r}=t;return this.updateColumnSql({table:e,...t,isNotNull:n!="YES",isAutoIncrement:(a=(l=r==null?void 0:r.toLowerCase())==null?void 0:l.includes)==null?void 0:a.call(l,"auto_increment")})}updateColumnSql(e){const{table:t,tableMeta:n,name:r,columnName:l=r,type:a,unsigned:i,zerofill:o,useCurrentTimestamp:N,isNotNull:R,isAutoIncrement:O,comment:L,defaultValue:b,character_set_name:h,collation_name:_}=e,C=a.match(/char|text|set|enum|blob|binary/i)&&(n==null?void 0:n.collation)!=_;return new V(`ALTER TABLE \`${t}\``).append(`
	CHANGE \`${l}\` \`${r}\` ${a}`).if(i=="1","UNSIGNED").if(o=="1","ZEROFILL").if(N,"ON UPDATE CURRENT_TIMESTAMP").if(C&&h,`CHARACTER SET ${h}`).if(C&&_,`COLLATE ${_}`).if(R,"NOT NULL").if(O,"AUTO_INCREMENT").if(L,`COMMENT '${L}'`).if(X(b)&&!R,"DEFAULT NULL").if(!X(b),`DEFAULT ${b=="CURRENT_TIMESTAMP"?b:`${re(b,a)}`}`).append(";").toString()}showCollations(){return'select DEFAULT_COLLATE_NAME "name",CHARACTER_SET_NAME "charset",DESCRIPTION "description" from information_schema.CHARACTER_SETS ORDER BY name;'}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:null}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l,collation:a,newCollation:i}=e;let o="";return l&&l!=r&&(o=`ALTER TABLE \`${t}\` COMMENT = '${l}';`),i&&i!=a&&(o+=`ALTER TABLE \`${t}\` collate = '${i}';`),n&&t!=n&&(o+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),o}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,t){return`SHOW CREATE TABLE \`${e}\`.\`${t}\`;`}showPartitions(e,t){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${t}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,t){return`SHOW CREATE VIEW  \`${e}\`.\`${t}\`;`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE \`${e}\`.\`${t}\`;`}showFunctionSource(e,t){return`SHOW CREATE FUNCTION \`${e}\`.\`${t}\`;`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maximum_length,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showForeignKeys(e,t){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${t}' ORDER BY ik.CONSTRAINT_NAME;`}showTriggers(e,t){const n=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT 
                    EVENT_OBJECT_TABLE table_name,
                    TRIGGER_NAME "trigger_name",
                    ACTION_TIMING timing,
                    EVENT_MANIPULATION event,
                    EVENT_MANIPULATION manipulation,
                    ACTION_ORIENTATION orientation,
                    ACTION_STATEMENT statement
                FROM 
                    information_schema.TRIGGERS 
                WHERE 
                    TRIGGER_SCHEMA = '${e}' 
                    ${n} 
                ORDER BY 
                    TRIGGER_NAME;`}showProcedures(e){return`SELECT 
    r.ROUTINE_NAME "name",
    p.PARAMETER_NAME "param_name",
    p.DATA_TYPE "param_type",
    p.PARAMETER_MODE "param_mode"
FROM 
    information_schema.routines r
LEFT JOIN 
    information_schema.parameters p 
ON 
    r.SPECIFIC_NAME = p.SPECIFIC_NAME
WHERE
    r.ROUTINE_SCHEMA = '${e}'
    AND r.ROUTINE_TYPE = 'PROCEDURE'
ORDER BY 
    r.ROUTINE_NAME, p.ORDINAL_POSITION;`}showFunctions(e){return`SELECT 
        ROUTINE_NAME "name",
        p.PARAMETER_NAME "param_name",
        p.DATA_TYPE "param_type",
        p.PARAMETER_MODE "param_mode"
    FROM 
        information_schema.routines  r
    LEFT JOIN 
        information_schema.parameters p 
    ON 
        r.SPECIFIC_NAME = p.SPECIFIC_NAME
    WHERE 
        r.ROUTINE_SCHEMA = '${e}' 
        AND r.ROUTINE_TYPE = 'FUNCTION' 
    ORDER BY 
        r.ROUTINE_NAME;`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e){return`SELECT TABLE_COMMENT "comment",TABLE_NAME "name",TABLE_ROWS "table_rows",\`AUTO_INCREMENT\` "auto_increment",
        row_format "row_format",DATA_LENGTH "data_length",INDEX_LENGTH "index_length",TABLE_COLLATION "collation",
        TABLE_TYPE "view_group",\`ENGINE\` engine
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${e}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show DATABASES"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name$2 VARCHAR(255)
) COMMENT '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class zt extends ye{showVersion(){return"select replace(@@version,'-MariaDB','') server_version;"}}class Zt extends ke{showVersion(){return"show version"}showDatabases(){return"show dbs"}buildPageSql(e,t,n){return`db('${e}').collection('${t}').find({}).limit(${n}).toArray()`}showIndex(e,t){return`db('${e}').collection('${t}').indexes();`}createIndex(e){const{database:t,table:n,column:r}=e;return`db('${t}').collection('${n}').createIndex({ ${r||"column_name"}: 1 });`}createDatabase(e){return'db("db_name").createCollection("collection")'}dropDatabase(e){return`db("${e}").dropDatabase()`}}class en extends ie{showVersion(){return"SELECT CAST(SERVERPROPERTY('ProductVersion') AS SYSNAME)+' '+CAST(SERVERPROPERTY('Edition') AS SYSNAME) AS server_version"}showAllForeignKeys(){return`SELECT 
    OBJECT_SCHEMA_NAME(fk.parent_object_id) AS table_schema,
    OBJECT_NAME(fk.parent_object_id) AS table_name,
    COL_NAME(fc.parent_object_id, fc.parent_column_id) AS column_name,
    OBJECT_SCHEMA_NAME(fk.referenced_object_id) AS referenced_schema,
    OBJECT_NAME(fk.referenced_object_id) AS referenced_table,
    COL_NAME(fc.referenced_object_id, fc.referenced_column_id) AS referenced_column
FROM 
    sys.foreign_keys fk
JOIN 
    sys.foreign_key_columns fc ON fk.object_id = fc.constraint_object_id`}showAllComments(){return`SELECT 
        s.name table_schema,
        t.name AS table_name,
        c2.name AS column_name,
        prop.value AS comment
        FROM 
           sys.columns c2 
                join sys.tables t on c2.object_id=t.object_id
                join sys.schemas s on t.schema_id=s.schema_id 
                join sys.extended_properties prop ON prop.major_id = c2.object_id AND prop.minor_id = c2.column_id`}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type} (${e.column})`}dropIndex(e,t){return`DROP INDEX ${e}.${t}`}showIndex(e,t){return`SELECT
        index_name = ind.name,
        column_name = col.name,
        ind.is_primary_key "isPrimary",
        ind.is_unique "isUnique",
        ind.is_unique_constraint,
        CASE 
            WHEN ind.is_primary_key=1 THEN 'PRIMARY'
            WHEN ind.is_unique=1 THEN 'UNIQUE'
            WHEN ind.is_unique_constraint=1 THEN 'UNIQUE'
        ELSE 'INDEX' END index_type
      FROM
        sys.indexes ind
        INNER JOIN sys.index_columns ic ON ind.object_id = ic.object_id
        and ind.index_id = ic.index_id
        INNER JOIN sys.columns col ON ic.object_id = col.object_id
        and ic.column_id = col.column_id
        INNER JOIN sys.tables t ON ind.object_id = t.object_id
      WHERE
        t.name = '${t}';`}variableList(){throw new Error("Method not implemented.")}statusList(){throw new Error("Method not implemented.")}kill(e){return`kill ${e.ID};`}processList(){return`SELECT
    s.session_id "ID",
    s.login_name "User",
    s.program_name "Client",
    r.status "Status",
    r.wait_time "Wait Time",
    d.text "SQL"
FROM sys.dm_exec_sessions s
LEFT JOIN sys.dm_exec_requests r ON s.session_id = r.session_id
Outer APPLY sys.dm_exec_sql_text(sql_handle) d
WHERE s.is_user_process = 1;`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD $1 [type]$2;`}createUser(){return`CREATE LOGIN loginName$1 WITH PASSWORD = 'password$2';
-- user master[YourDatabaseName]
CREATE USER userName$3 FOR LOGIN loginName$1;
ALTER ROLE db_datareader ADD MEMBER userName$3;
ALTER ROLE db_datawriter ADD MEMBER userName$3;
-- ALTER ROLE db_ddladmin ADD MEMBER userName$3;`}updateColumn(e,t){const{name:n,type:r,comment:l,nullable:a,defaultValue:i}=t,o=a=="YES"?"NULL":"NOT NULL";return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} ${r} ${o};
-- change column name
EXEC sp_rename '${e}.${n}', '${n}', 'COLUMN';`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:r,comment:l,oldRow:a,isNotNull:i,schema:o,table:N}=e,R=i?"NOT NULL":"NULL";return new V(`ALTER TABLE "${o}"."${N}" ALTER COLUMN ${t} ${n} ${R};`,`
`).if(t!=r,()=>`EXEC sp_rename '${o}.${N}.${t}' , '${r}', 'COLUMN';`).if(l!=a.comment,()=>`EXEC ${a.comment?"sp_updateextendedproperty":"sp_addextendedproperty"} 
@level0type = N'Schema', @level0name = '${o}',
@level1type = N'Table', @level1name = '${N}', 
@level2type = N'Column', @level2name = '${r}',
@name = N'MS_Description', @value = N'${l}';`).toString()}showUsers(){return"SELECT name [user] from sys.database_principals where type='S'"}updateTable(e){const{schema:t,table:n,newTableName:r,comment:l,newComment:a}=e;let i="";return a&&a!=l&&(i=`EXEC ${l?"sp_updateextendedproperty":"sp_addextendedproperty"} 
@level0type = N'Schema', @level0name = '${t}',
@level1type = N'Table', @level1name = '${n}', 
@name = N'MS_Description', @value = N'${a}';`),r&&n!=r&&(i+=`sp_rename '${n}', '${r}';`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE [',table_schema,'].[',TABLE_NAME, '];') trun FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'  AND TABLE_SCHEMA='${e}'`}createDatabase(e){return`create database ${e||"[name]"}`}showViewSource(e,t){return`SELECT definition 'Create View' FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showProcedureSource(e,t){return`SELECT definition 'Create Procedure','${e}.${t}' "Procedure" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showFunctionSource(e,t){return`SELECT definition 'Create Function','${e}.${t}' "Function" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showTriggerSource(e,t){return`SELECT definition 'SQL Original Statement','${e}.${t}' "Trigger" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showColumns(e,t){return["information_schema","sys"].includes(e==null?void 0:e.toLowerCase())?`SELECT
            name,
            type_name(system_type_id) "type",
            is_nullable nullable,
            max_length "maximum_length"
        FROM
            sys.all_columns
        WHERE
            object_id = OBJECT_ID('${e}.${t}') ;`:`SELECT 
               c.COLUMN_NAME "name",
               DATA_TYPE "type",
               numeric_precision "precision",
               numeric_scale "scale",
               IS_NULLABLE nullable, CHARACTER_MAXIMUM_LENGTH "maximum_length", COLUMN_DEFAULT "defaultValue", '' "comment", tc.constraint_type "key",
               COLUMNPROPERTY(object_id('${e}.${t}'), c.COLUMN_NAME, 'IsIdentity') extra
               FROM
               INFORMATION_SCHEMA.COLUMNS c
               left join  INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE ccu
               on c.COLUMN_NAME=ccu.column_name and c.table_name=ccu.table_name and ccu.TABLE_SCHEMA=c.TABLE_SCHEMA
               left join  INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
               on tc.constraint_name=ccu.constraint_name
               and tc.TABLE_SCHEMA=c.TABLE_SCHEMA and tc.table_name=c.table_name WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${t}' ORDER BY ORDINAL_POSITION`}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        "INFORMATION_SCHEMA"."CHECK_CONSTRAINTS" AS cc,
        "INFORMATION_SCHEMA"."TABLE_CONSTRAINTS" AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showForeignKeys(e,t){return`SELECT
        f.name AS "constraint_name",
        COL_NAME( fkc.parent_object_id, fkc.parent_column_id ) AS "column_name",
        OBJECT_NAME (fkc.referenced_object_id) AS "referenced_table",
        COL_NAME( fkc.referenced_object_id, fkc.referenced_column_id )  AS "referenced_column",
        update_referential_action_desc "updateRule",
        delete_referential_action_desc "deleteRule"
    FROM
        sys.foreign_key_columns fkc
        JOIN sys.foreign_keys f ON f.object_id = fkc.constraint_object_id
        JOIN sys.tables tab1 ON tab1.object_id = fkc.parent_object_id and tab1.name='${t}' and SCHEMA_NAME(tab1.schema_id)='${e}'
    ;`}showTriggers(e,t){const n=t?` AND tb.name='${t}'`:"";return`SELECT 
                tr.name AS trigger_name, 
                tb.name AS table_name,
                'Statement' AS orientation,
                OBJECT_DEFINITION(tr.object_id) AS source
            FROM 
                sys.triggers tr
                INNER JOIN sys.tables tb ON tr.parent_id = tb.object_id
                INNER JOIN sys.schemas sc ON tb.schema_id = sc.schema_id
            WHERE 
                tr.is_ms_shipped = 0
                AND sc.name = '${e}' ${n}`}showProcedures(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e,t){return`SELECT name FROM sys.all_views t where SCHEMA_NAME(t.schema_id)='${t}' order by name`}buildPageSql(e,t,n){return`SELECT TOP ${n} * FROM ${t};`}showTables(e,t,n){const{showRowCount:r}=n??{};return`SELECT t.name AS 'name', ep.value AS 'comment', t.is_ms_shipped 'isSystem'
        ${r?", ds.row_count 'table_rows'":""}
FROM sys.tables t
    LEFT JOIN sys.extended_properties ep ON ep.major_id = t.object_id
    AND ep.minor_id = 0 AND ep.name = 'MS_Description'
    ${r?`LEFT JOIN sys.dm_db_partition_stats ds on ds.object_id = object_id('${t}.'+ t.name)
    and ds.index_id IN (0, 1)`:""}
WHERE
    t.schema_id = SCHEMA_ID('${t}') ORDER BY t.name;`}showDatabases(){return"SELECT name 'Database' FROM sys.databases"}showSchemas(){return"SELECT SCHEMA_NAME [schema] FROM INFORMATION_SCHEMA.SCHEMATA"}tableTemplate(e){return`CREATE TABLE ${(e=="dbo"?"":`${e}.`)+"table_name"}$1(  
    id int IDENTITY(1,1) primary key,
    create_time DATETIME,
    update_time DATETIME,
    content$2 NVARCHAR(255)
);
EXECUTE sp_addextendedproperty N'MS_Description', '[table_comment]', N'user', N'dbo', N'table', N'[table_name]', NULL, NULL;
EXECUTE sp_addextendedproperty N'MS_Description', '[column_comment]', N'user', N'dbo', N'table', N'[table_name]', N'column', N'[column_name]';
`}viewTemplate(){return`CREATE VIEW dbo.view_name$1
AS
SELECT * FROM 
GO`}procedureTemplate(){return`CREATE PROCEDURE dbo.procedure_name$1
AS
BEGIN
    $2
END;`}functionTemplate(){return`CREATE FUNCTION dbo.function_name$1() RETURNS [TYPE]
BEGIN
    $2
    return [value];
END;`}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
ON ${e??"[table_name]$2"}
[FOR/AFTER] INSERT
AS
BEGIN
    $3
END;`}}class tn extends ke{showVersion(){return"call dbms.components() yield name, versions, edition unwind versions as server_version return server_version;"}showDatabases(){return"SHOW DATABASES yield name AS Database"}showSchemas(){return this.showDatabases()}showTables(e){return"call db.labels() yield label as name RETURN name ORDER BY toLower(name)"}addColumn(e,t){return`MATCH (n:${e}) WHERE id(n) = 1 SET n.name = 'name' RETURN n`}showColumns(e,t){return`MATCH(n:\`${t}\`) UNWIND keys(n) AS name RETURN DISTINCT name`}showIndex(e,t){return`show indexes yield name as index_name, properties as column_name, type as index_type, labelsOrTypes where '${t}' in labelsOrTypes`}showViews(e){return"call db.relationshipTypes() yield relationshipType AS name RETURN name ORDER BY toLower(name)"}showUsers(){return"SHOW USERS"}createUser(){return`CREATE USER [name] IF NOT EXISTS 
    SET PASSWORD 'password';`}buildPageSql(e,t,n){return`MATCH (n${t=="*"?"":`:${t}`}) RETURN n LIMIT ${n}`}createDatabase(e){return"CREATE DATABASE $1"}tableTemplate(){return"CREATE (n:node {id:1}) return n;"}createIndex(e){return`CREATE INDEX FOR (n:${e.table}) ON (n.id)`}dropIndex(e,t){return`DROP INDEX \`${t}\``}viewTemplate(){return"MATCH (n1:node {id:1}), (n2:node {id:2}) CREATE (n1)-[r:TO]->(n2) RETURN type(r)"}}class Ve extends Ue{defaultPart(){var R,O;const{oldRow:e,isAutoIncrement:t,defaultValue:n,columnType:r}=this.param,l=(R=n==null?void 0:n.match)==null?void 0:R.call(n,/\bnextval\b/);if(t&&!e.isAutoIncrement&&!l)return`${this.afterColumnPrefix} ADD GENERATED ALWAYS AS IDENTITY;`;if(!t&&e.isAutoIncrement&&!l)return`${this.afterColumnPrefix} DROP IDENTITY;`;if(!t&&e.isAutoIncrement&&l)return`${this.afterColumnPrefix} DROP DEFAULT;`;if(e.defaultValue==n)return"";const N=(O=n==null?void 0:n.match)!=null&&O.call(n,/\bnextval\b/)?n:re(n,r);return`${this.afterColumnPrefix} ${X(n)?"DROP DEFAULT":`SET DEFAULT ${N}`};`}commentPart(){const{oldRow:e,table:t,columnName:n,comment:r}=this.param;if(r!=e.comment)return`COMMENT ON COLUMN "${t}"."${n}" is '${r}';`}}class Be extends ie{showVersion(){return"SHOW server_version;"}createIndex(e){const t=e.name??`${e.column||"[column]"}`,n=e.indexType||"btree";return`CREATE INDEX ${t}_${new Date().getTime()}_index ON 
    ${e.table} USING ${n} ("${e.column||"[column]"}");`}dropIndex(e,t){return`DROP INDEX "${t}"`}showIndex(e,t){return`select
    t.relname as table_name,
    i.relname as index_name,
    a.attname as column_name,
    ix.indisprimary "isPrimary",
    ix.indisunique "isUnique",
    CASE ix.indisprimary
        WHEN true THEN 'PRIMARY'
    ELSE CASE ix.indisunique
        WHEN true THEN 'UNIQUE'
    ELSE 'KEY'
    END
    END AS index_type,
    am.amname index_method
  from
    pg_class t
    join pg_catalog.pg_namespace pgn ON pgn.oid=t.relnamespace and pgn.nspname='${e}'
    join pg_index ix on t.oid = ix.indrelid
    join pg_attribute a on t.oid = a.attrelid and a.attnum = ANY(string_to_array(textin(int2vectorout(ix.indkey)),' ')::int[])
    join pg_class i on ix.indexrelid = i.oid
    JOIN pg_am am ON am.oid=i.relam
  where
     t.relkind = 'r'
    and t.relname = '${t}'
  order by
    ix.indexrelid;`}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}kill(e){return`SELECT pg_terminate_backend(${e.ID})`}processList(){return`SELECT
        a.pid AS "ID",
        query_start AS "Time",
        datname AS "db",
        CASE
        WHEN c.relname IS NOT NULL THEN c.relname
        ELSE l.virtualtransaction
        END AS "Target",
        l.mode AS "State",
        query AS "SQL"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e} 
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return`CREATE USER $1 WITH PASSWORD 'password$2';
-- Grant select privilege;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO $1;
-- Grant all privileges;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $1;`}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:n,type:r,comment:l,nullable:a,defaultValue:i}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${r};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${n} TO ${n};
-- Change column comment
COMMENT ON COLUMN ${e}.${n} IS '${l||"comment"}';`}updateColumnSql(e){return new Ve(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}showAllForeignKeys(){return`SELECT
      refc.constraint_name "constraint_name",
      refc.constraint_schema "table_schema",
      kcu.table_name "table_name",
      kcu.column_name AS "column_name",
      ccu.table_name AS "referenced_table",
      ccu.column_name AS "referenced_column"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name;`}showForeignKeys(e,t){return`SELECT
      refc.constraint_name "constraint_name",
      kcu.column_name AS column_name,
      ccu.table_name AS referenced_table,
      ccu.column_name AS referenced_column,
      kcu.ordinal_position AS ord_position,
      refc.update_rule "updateRule",
      refc.delete_rule "deleteRule"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_schema = '${e}'
      AND refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name
      AND kcu.table_name = '${t}'
  ORDER BY ord_position;`}pingDataBase(e){return e?`set search_path to '${e}';`:null}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`ALTER TABLE "${t}" RENAME TO "${n}";`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showViewSource(e,t,n){return n?`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`:`SELECT CONCAT('CREATE VIEW ',table_name,'
AS
(',regexp_replace(view_definition,';$',''),')') "Create View"
    ,table_name,view_definition from information_schema.views 
    where table_schema='${e}' and table_name='${t}'`}showMaterialViewSource(e,t){return`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showColumns(e,t,n){return`SELECT 
          ${n?"c.*,":""}
          c.COLUMN_NAME "name", 
          atttypid::regtype AS pg_reg_type,
          DATA_TYPE "type",
          IS_NULLABLE nullable, 
          numeric_precision "precision",
          numeric_scale "scale",
          CHARACTER_MAXIMUM_LENGTH "maximum_length", 
          COLUMN_DEFAULT "defaultValue", 
          pg_catalog.col_description(pgc.oid, c.ordinal_position::int) AS "comment",
          tc.constraint_type "key",
          tc.constraint_name "constraint_name",
          cc.table_name "referenced_table",
          cc.column_name "referenced_column",
          pa.*
        FROM information_schema.columns c
        JOIN pg_catalog.pg_class pgc ON c.table_name = pgc.relname 
        JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=c.table_schema
        JOIN pg_attribute pa on pa.attname =c.column_name and pa.attrelid =pgc.oid 
        LEFT JOIN information_schema.key_column_usage ccu on ccu.table_schema=c.table_schema
          and ccu.table_name=c.table_name and ccu.column_name=c.COLUMN_NAME
        LEFT JOIN information_schema.table_constraints tc on tc.table_schema=c.table_schema 
          and tc.table_name=c.table_name and tc.constraint_name=ccu.constraint_name
        LEFT JOIN information_schema.constraint_column_usage cc on cc.table_schema=c.table_schema 
          and cc.constraint_name=tc.constraint_name and  tc.constraint_type='FOREIGN KEY'
        WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showChecks(e,t){return`SELECT
    tc.CONSTRAINT_NAME "name",
    cc.CHECK_CLAUSE "clause"
FROM
    "information_schema"."check_constraints" AS cc,
    "information_schema"."table_constraints" AS tc
WHERE
    tc.CONSTRAINT_SCHEMA = '${e}'
    AND tc.TABLE_NAME = '${t}'
    AND tc.CONSTRAINT_TYPE = 'CHECK'
    AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
    AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME
    AND cc.CONSTRAINT_NAME NOT LIKE '%_not_null'`}showPartitions(e,t){return`select col.column_name "columnName", pt.partition_strategy "strategy" from (
      select
          partrelid, partnatts, case partstrat when 'h' then 'HASH' when 'l' then 'LIST' when 'r' then 'RANGE' end as partition_strategy, unnest(partattrs) column_index
      from
          pg_partitioned_table ) pt
      join pg_class pc on pc.oid = pt.partrelid
      join information_schema.columns col on col.table_schema = pc.relnamespace :: regnamespace :: text
        and col.table_name = pc.relname and col.ordinal_position = pt.column_index
      WHERE col.table_schema='${e}' and col.table_name='${t}';`}showTriggers(e,t){const n=t?` AND event_object_table='${t}'`:"";return`SELECT 
              event_object_table table_name,
              trigger_name "trigger_name",
              action_timing timing,
              event_manipulation manipulation ,
              action_orientation orientation,
              action_statement "statement"
            FROM 
              information_schema.TRIGGERS 
            WHERE trigger_schema = '${e}' ${n} 
            ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT p.proname "ROUTINE_NAME",
    pg_get_functiondef(p.oid) source,
    p.oid,
    pg_get_function_identity_arguments(p.oid) "argDefs"
from
    pg_proc p
    JOIN pg_namespace n ON p.pronamespace = n.oid
    and n.nspname = '${e}'
    and p.prokind = 'p'
order by p.proname`}showFunctions(e){return`SELECT DISTINCT
    r.ROUTINE_NAME AS "name",
    p.oid,
    pg_get_function_identity_arguments(p.oid) "argDefs"
FROM 
    information_schema.routines r
    JOIN pg_proc p ON r.ROUTINE_NAME = p.proname 
    JOIN pg_namespace n ON p.pronamespace = n.oid 
    AND n.nspname = '${e}'
WHERE 
    r.ROUTINE_SCHEMA = '${e}' 
    AND r.ROUTINE_TYPE = 'FUNCTION' 
ORDER BY 
    r.ROUTINE_NAME ASC`}showFunctionSource(e,t,n){return n?`select pg_get_functiondef('${n}') "Create Function",'${t}' "Function";`:`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showViews(e,t){return`select table_name "name" from information_schema.tables where table_schema='${t}' and table_type='VIEW' order by "name";`}showMaterialViews(e,t){return`SELECT matviewname "name" from pg_matviews WHERE schemaname='${t}' order by "name" ASC`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment",pgc.reltuples "table_rows"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname 
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showDatabases(){return"SELECT datname FROM pg_database WHERE datistemplate = false order by datname ASC;"}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}showSequences(e){return`select sequencename as name,last_value as sequence from pg_sequences WHERE schemaname='${e}' ORDER BY name;`}showCustomTypes(e){return`SELECT  t.typname as name,typtype as type,string_agg(pg_enum.enumlabel, ',') enum_values
    FROM        pg_type t 
    LEFT JOIN   pg_enum ON pg_enum.enumtypid = t.oid
    LEFT JOIN   pg_catalog.pg_namespace n ON n.oid = t.typnamespace 
    WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' FROM pg_catalog.pg_class c WHERE c.oid = t.typrelid)) 
    AND     NOT EXISTS(SELECT 1 FROM pg_catalog.pg_type el WHERE el.oid = t.typelem AND el.typarray = t.oid)
    and n.nspname='${e}' GROUP BY name,type;`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
LANGUAGE SQL
as $$
[$2]
$$;`}triggerTemplate(e){return`CREATE FUNCTION trigger_fun$1() RETURNS TRIGGER AS 
\\$body\\$
BEGIN
    $2
    RETURN [value];
END;
\\$body\\$ 
LANGUAGE plpgsql;

CREATE TRIGGER [name]$3
[BEFORE/AFTER] INSERT
ON ${e??"[table_name]$4"}
FOR EACH ROW
EXECUTE PROCEDURE [trigger_fun]();`}dropTriggerTemplate(e,t){return`DROP TRIGGER ${e} on ${t}`}functionTemplate(){return`CREATE FUNCTION fun_name$1() 
RETURNS int$2 AS $$
BEGIN
    $3
    return 0;
END;
$$ LANGUAGE plpgsql;`}}class Qe extends Be{showVersion(){return"SELECT VERSION() as server_version"}createIndex(e){throw new Error("Redshift not support index!")}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}processList(){return`SELECT
        a.pid AS "Id",
        a.usename AS "User",
        a.client_addr AS "Host",
        a.client_port AS "Port",
        datname AS "db",
        query AS "Command",
        l.mode AS "State",
        query_start AS "Time",
        CASE
          WHEN c.relname IS NOT NULL THEN 'Locked Object: ' || c.relname
          ELSE 'Locked Transaction: ' || l.virtualtransaction
        END AS "Info"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e}
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password';"}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:n,type:r}=t;return`-- change column type
ALTER TABLE ${e}
    ALTER COLUMN ${n} TYPE ${r};
-- change column name
ALTER TABLE ${e}
    RENAME COLUMN ${n} TO ${n};`}updateColumnSql(e){return new Ve(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`ALTER TABLE "${t}" RENAME TO "${n}";`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return`SHOW TABLE "${e}"."${t}"`}showViewSource(e,t){return`SHOW VIEW "${e}"."${t}"`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showFunctionSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showPartitions(e,t){return""}showSequences(e){return`SELECT sequence_name name FROM information_schema.sequences WHERE sequence_schema = '${e}' ORDER BY sequence_name`}showTriggers(e,t){const n=t?` AND event_object_table='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name" FROM information_schema.TRIGGERS WHERE trigger_schema = '${e}' ${n} ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME ASC`}showFunctions(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME ASC `}showTables(e,t){return`  SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}tableTemplate(){return`CREATE TABLE table_name$1(
    id INT identity(1, 1) NOT NULL PRIMARY KEY,
    create_time DATE,
    update_time DATE,
    content$2 VARCHAR(255)
);
COMMENT ON TABLE table_name IS 'table_comment';
COMMENT ON COLUMN table_name.content IS 'content';`}procedureTemplate(){return`CREATE PROCEDURE procedure_name()
as $$
begin
    SELECT 1;
END;
$$ LANGUAGE plpgsql;`}functionTemplate(){return`CREATE FUNCTION function_name()
RETURNS int STABLE
AS $$
    SELECT 1
$$ LANGUAGE sql;`}}class nn extends ie{showVersion(){return'select CURRENT_VERSION() as "server_version";'}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return""}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var L;const{name:n,type:r,comment:l,nullable:a,defaultValue:i,extra:o,character_set_name:N,collation_name:R}=t,O=a!="YES";return new V(`ALTER TABLE ${e}`).append(`
	CHANGE ${n} ${n} ${r}`).if(N,`CHARACTER SET ${N}`).if(R,`COLLATE ${R}`).if(O,"NOT NULL").if((L=o==null?void 0:o.toLowerCase())==null?void 0:L.includes("auto_increment"),"AUTO_INCREMENT").if(l,`COMMENT '${l}'`).if(X(i)&&!O,"DEFAULT NULL").if(!X(i),`DEFAULT ${i=="CURRENT_TIMESTAMP"?i:`'${mt(i)}'`}`).toString()}updateColumnSql(e){const{table:t,columnName:n,newColumnName:r,columnType:l,isNotNull:a,isAutoIncrement:i,comment:o,defaultValue:N,oldRow:R}=e,O=`ALTER TABLE "${t}"`,L=a?"SET NOT NULL":"DROP NOT NULL";return new V(`${O} ALTER COLUMN "${n}" TYPE ${l};`,`
`).if(o&&o!=R.comment,`${O} ALTER COLUMN "${n}" COMMENT '${o}';`).if(a!=R.isNotNull,`${O} ALTER COLUMN "${n}" ${L};`).if(n!=r,`${O} RENAME COLUMN "${n}" TO "${r}";`).toString()}showCollations(){return""}showChecks(e,t){return""}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e,t){return e?`use "${t}"."${e}"`:"select 1"}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l,collation:a,newCollation:i}=e;let o="";return l&&l!=r&&(o=`ALTER TABLE \`${t}\` COMMENT = '${l}';`),i&&i!=a&&(o+=`ALTER TABLE \`${t}\` collate = '${i}';`),n&&t!=n&&(o+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),o}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,t){return`select get_ddl('table', '${e}.${t}') "Create Table";`}showViewSource(e,t){return`select get_ddl('view', '${e}.${t}') "Create View";`}showProcedureSource(e,t){return`select get_ddl('PROCEDURE', '${e}.${t}()') "Create Procedure";`}showFunctionSource(e,t){return`select get_ddl('FUNCTION', '${e}.${t}()') "Create Function";`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME "name",
        DATA_TYPE "type",
        CHARACTER_MAXIMUM_LENGTH "maximum_length",
        IS_IDENTITY "key",
        COMMENT "comment",
        IS_NULLABLE "nullable",
        COLUMN_DEFAULT "defaultValue",
        COLLATION_NAME "$"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showTriggers(e,t){const n=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT TRIGGER_NAME FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${n} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT PROCEDURE_NAME ROUTINE_NAME FROM information_schema.PROCEDURES WHERE PROCEDURE_SCHEMA = '${e}' ORDER BY PROCEDURE_NAME`}showFunctions(e){return`SELECT FUNCTION_NAME ROUTINE_NAME FROM INFORMATION_SCHEMA.FUNCTIONS WHERE FUNCTION_SCHEMA='${e}' ORDER BY FUNCTION_NAME`}showViews(e,t){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE='VIEW' ORDER BY TABLE_NAME;`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show databases;"}showSchemas(){return'SELECT SCHEMA_NAME "schema" FROM INFORMATION_SCHEMA.SCHEMATA;'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTOINCREMENT,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`create procedure proc_name$1() returns string
language javascript
as $$
    $2return 1+1;
$$;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int
AS
$$
    $2return 1;
$$`}}class Ye extends ke{showVersion(){return"select sqlite_version() as server_version"}updateColumn(e,t){throw new Error("SQLite not support update column.")}updateColumnSql(e){throw new Error("SQLite not support update column.")}createIndex(e){const{table:t,column:n="$2"}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n});`}showIndex(e,t){return`SELECT name index_name FROM sqlite_master WHERE type='index' and tbl_name='${t}' `}dropIndex(e,t){return`DROP INDEX ${t};`}showTables(e,t){return"SELECT name, type FROM sqlite_master WHERE type='table' ORDER BY type ASC, name ASC;"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type$2];`}showSequences(e){return"SELECT name,seq sequence FROM sqlite_sequence"}showColumns(e,t){return`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue",t2."table" "referenced_table",t2."to" "referenced_column" FROM PRAGMA_TABLE_INFO('${t}') t1
        left join (
            SELECT * FROM  pragma_foreign_key_list('${t}')
        ) t2  on t1.name=t2.'from';`}showViews(e,t){return"SELECT name, type FROM sqlite_master WHERE type='view' AND name <> 'sqlite_sequence' AND name <> 'sqlite_stat1' ORDER BY type ASC, name ASC;"}showTriggers(e,t){return`SELECT name, tbl_name, sql FROM sqlite_master WHERE type='trigger' ${t?` AND tbl_name='${t}'`:""} ORDER BY name ASC;`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTableSource(e,t){return`SELECT sql "Create Table" FROM sqlite_master where name='${t}' and type='table';`}showViewSource(e,t){return`SELECT sql "Create View" FROM sqlite_master where name='${t}' and type='view';`}showTriggerSource(e,t){return`SELECT sql FROM sqlite_master where name='${t}' and type='trigger';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    content TEXT
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}}class an extends Ye{showVersion(){return"SELECT library_version as server_version from pragma_version()"}pingDataBase(e,t){return e?`set schema '${e}';`:null}showDatabases(){return'SELECT DISTINCT catalog_name "Database" from information_schema.schemata ORDER BY catalog_name'}showSchemas(e){return`SELECT schema_name "schema" from information_schema.schemata WHERE catalog_name='${e}' ORDER BY schema_name`}showTables(e,t){return`SELECT table_name "name" FROM information_schema.tables
        WHERE table_type in ('BASE TABLE','LOCAL TEMPORARY') and table_catalog='${e}' and table_schema = '${t}' order by table_name`}showViews(e,t){return`
SELECT table_name "name",1 "view_group",null "source" FROM information_schema.tables
        WHERE table_type='VIEW' and table_catalog='${e}' and table_schema = '${t}'
        UNION all
SELECT viewname "name",2 "view_group",definition "source" FROM pg_catalog.pg_views
        WHERE schemaname = '${t}'
ORDER BY "view_group",name`}showSequences(e){return`SELECT sequence_name AS name, last_value AS sequence 
                FROM duckdb_sequences() 
                WHERE schema_name = '${e}'`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY,
    content TEXT
);`}showColumns(e,t){return["system","temp"].includes(e)?`SELECT column_name "name", data_type "type",
        column_default "defaultValue", is_nullable "nullable"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`:`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue" FROM PRAGMA_TABLE_INFO('${t}') t1;`}updateColumn(e,t){const{name:n,type:r}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${r};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${n} TO ${n};`}updateColumnSql(e){return new Ue(e).genAlterSQL()}}class nt extends Ne{showVersion(){return"select version() as server_version;"}showDatabases(){return"show databases"}showTables(e,t){return`show tables in ${e}`}showColumns(e,t){return`describe ${e}.${t};`}showViews(e,t){return`show views in ${e}`}}class rn extends Ne{showVersion(){return"SELECT node_version as server_version FROM system.runtime.nodes;"}pingDataBase(e){return e?`use ${e}`:null}showDatabases(){return"show catalogs"}}class ln extends Ne{showVersion(){return"select release_version from system.local;"}showUsers(){return'SELECT role as "user" FROM system_auth.roles;'}pingDataBase(e){return e?`use ${e}`:null}createDatabase(e){return`CREATE KEYSPACE $1
WITH REPLICATION = { 
    'class' : 'SimpleStrategy', 
    'replication_factor' : 1 
};`}dropDatabase(e){return`DROP KEYSPACE ${e}`}showDatabases(){return'select keyspace_name as "database" from system_schema.keyspaces;'}showTables(e,t){return`select table_name as "name" from system_schema.tables where keyspace_name='${e}'`}showColumns(e,t){return`select column_name as "name", type, kind as "key" 
                from system_schema.columns 
                where keyspace_name='${e}' 
                and table_name='${t}'`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int PRIMARY key,
    create_time DATE,
    update_time DATE,
    content TEXT
);`}}class sn extends Ue{otherPart(){const{oldRow:e,isAutoIncrement:t}=this.param;return!e.isAutoIncrement&&t?`${this.afterColumnPrefix} SET GENERATED ALWAYS as identity;`:e.isAutoIncrement&&!t?`${this.afterColumnPrefix} DROP GENERATED;`:null}commentPart(){const{oldRow:e,table:t,columnName:n,comment:r}=this.param;if(r!=e.comment)return`COMMENT ON COLUMN "${t}"."${n}" is '${r}';`}changeTypePart(){const{oldRow:e,columnType:t}=this.param;return e.type==t?"":`${this.afterColumnPrefix} SET DATA TYPE ${t};`}}class at extends Ne{showVersion(){return'SELECT SERVICE_LEVEL as "server_version" FROM SYSIBMADM.ENV_INST_INFO;'}showUsers(){return`SELECT GRANTEE "user" FROM syscat.dbauth WHERE GRANTEETYPE='U';`}pingDataBase(e){return e?`set SCHEMA ${e}`:null}showDatabases(){return'select schemaname "database" from syscat.schemata'}showTableSource(e,t){return null}showTables(e,t){return`select tabname "name", remarks "comment" from syscat.tables where tabschema='${t}' and TYPE='T' order by tabname`}showColumns(e,t){return`select COLUMN_NAME "name",
        DATA_TYPE "type",
        IS_NULLABLE "nullable",
        NUMERIC_PRECISION "precision",
        NUMERIC_SCALE "scale",
        CHARACTER_MAXIMUM_LENGTH "maximum_length",
        sc.length "number_length",
        COLUMN_DEFAULT "defaultValue",
        tc.TYPE "key",
        sc.remarks "comment",
        sc.IDENTITY "extra",
        r.REFTABNAME "referenced_table",
        trim(r.PK_COLNAMES) "referenced_column"
        from SYSIBM.columns c
        left join syscat.keycoluse kc
            on c.TABLE_SCHEMA=kc.TABSCHEMA and c.TABLE_NAME=kc.TABNAME  and c.COLUMN_NAME=kc.COLNAME
        left join SYSCAT.tabconst tc
            on c.TABLE_SCHEMA=tc.TABSCHEMA and c.TABLE_NAME=tc.TABNAME  and tc.CONSTNAME=kc.CONSTNAME
        left join sysibm.syscolumns sc
            on c.TABLE_SCHEMA=sc.TBCREATOR and c.TABLE_NAME=sc.TBNAME  and c.COLUMN_NAME=sc.NAME
        left join syscat.references r
            on c.TABLE_SCHEMA=r.TABSCHEMA and c.TABLE_NAME=r.TABNAME  and c.COLUMN_NAME=trim(r.FK_COLNAMES)
        where
            TABLE_SCHEMA = '${e}'
            and TABLE_NAME = '${t}'
        order by ORDINAL_POSITION;`}updateColumnSql(e){return new sn(e).genAlterSQL()}showAllForeignKeys(){return`SELECT 
        CONSTNAME "constraint_name",
        TABSCHEMA "table_schema",
        TABNAME "table_name",
        FK_COLNAMES "column_name",
    REFTABNAME "referenced_table",
    PK_COLNAMES "referenced_column"
     FROM syscat.references`}showForeignKeys(e,t){return`SELECT 
        FK_COLNAMES "column_name",
        CONSTNAME "constraint_name",
        REFTABNAME "referenced_table",
        PK_COLNAMES "referenced_column",
        UPDATERULE "updateRule",
        DELETERULE "deleteRule"
         FROM syscat.references WHERE 
        TABSCHEMA='${e}' and TABNAME='${t}'`}showIndex(e,t){return`SELECT 
        COLNAMES "column_name",
        INDNAME "index_name",
        UNIQUERULE='U' "isUnique"
         FROM SYSCAT.INDEXES WHERE TABNAME = '${t}' AND TABSCHEMA = '${e}'`}showViews(e,t){return`select VIEWNAME "name",TEXT "source" from SYSCAT.VIEWS where VIEWSCHEMA = '${t}';`}showProcedures(e){return`select PROCNAME "routine_name",TEXT "source" from SYSCAT.procedures where PROCSCHEMA = '${e}' order by PROCNAME;`}showChecks(e,t){return`SELECT CONSTNAME "name",TEXT "clause" FROM SYSCAT.CHECKS WHERE TABNAME = '${t}' AND TABSCHEMA = '${e}';`}showTriggers(e,t){let n=`SELECT TRIGNAME "trigger_name",TEXT "source",TABNAME "table_name",TRIGEVENT "event" FROM syscat.triggers WHERE TABSCHEMA = '${e}'`;return t&&(n+=`AND TABNAME = '${t}'`),n}showFunctions(e){return`select FUNCNAME "routine_name",BODY "source" from SYSCAT.FUNCTIONS where FUNCSCHEMA = '${e}' order by FUNCNAME;`}dropIndex(e,t){return`DROP INDEX "${t}"`}createDatabase(e){return`CREATE SCHEMA ${e}$1;`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}processList(){return`SELECT session_auth_id,
        application_handle,
        elapsed_time_sec,
        activity_state,
        rows_read,
        stmt_text info
 FROM sysibmadm.mon_current_sql
 ORDER BY elapsed_time_sec DESC`}}class on extends ye{tableTemplate(){return`CREATE TABLE table_name(  
    id int NOT NULL  COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255)
) 
AGGREGATE KEY(id,create_time,name)
DISTRIBUTED BY HASH(id) BUCKETS 1
PROPERTIES (
    "replication_allocation" = "tag.location.default: 1"
);`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maximum_length,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}}class En extends ie{showVersion(){return"SELECT SERVER_VERSION();"}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var l,a;const{nullable:n,extra:r}=t;return this.updateColumnSql({table:e,...t,isNotNull:n!="YES",isAutoIncrement:(a=(l=r==null?void 0:r.toLowerCase())==null?void 0:l.includes)==null?void 0:a.call(l,"auto_increment")})}updateColumnSql(e){const{table:t,name:n,columnName:r=n,type:l,unsigned:a,zerofill:i,useCurrentTimestamp:o,isNotNull:N,isAutoIncrement:R,comment:O,defaultValue:L,character_set_name:b,collation_name:h}=e,_=!Tt(l)&&!l.match(/json/i);return new V(`ALTER TABLE \`${t}\``).append(`
	CHANGE \`${r}\` \`${n}\` ${l}`).if(a=="1","UNSIGNED").if(i=="1","ZEROFILL").if(o,"ON UPDATE CURRENT_TIMESTAMP").if(_&&b,`CHARACTER SET ${b}`).if(_&&h,`COLLATE ${h}`).if(N,"NOT NULL").if(R,"AUTO_INCREMENT").if(O,`COMMENT '${O}'`).if(X(L)&&!N,"DEFAULT NULL").if(!X(L),`DEFAULT ${L=="CURRENT_TIMESTAMP"?L:`${re(L,l)}`}`).append(";").toString()}showCollations(){return null}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:null}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l,collation:a,newCollation:i}=e;let o="";return l&&l!=r&&(o=`ALTER TABLE \`${t}\` COMMENT = '${l}';`),i&&i!=a&&(o+=`ALTER TABLE \`${t}\` collate = '${i}';`),n&&t!=n&&(o+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),o}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`SHOW CREATE TABLE \`${e}\`.\`${t}\`;`}showPartitions(e,t){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${t}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,t){return`SHOW CREATE VIEW  \`${e}\`.\`${t}\`;`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE \`${e}\`.\`${t}\`;`}showFunctionSource(e,t){return`SHOW CREATE FUNCTION \`${e}\`.\`${t}\`;`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`desc ${t}`}showForeignKeys(e,t){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${t}' ORDER BY ik.CONSTRAINT_NAME;`}showProcedures(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e){return`show ${e}.tables;`}showDatabases(){return"show databases"}showSchemas(){return this.showDatabases()}tableTemplate(e){return`CREATE TABLE table_name$1(  
    create_time timestamp,
    name$2 NCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class un extends nt{showVersion(){return""}}class cn extends Ne{showDatabases(){return"SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA ORDER BY SCHEMA_NAME;"}showTables(e,t=e){return`SELECT table_name,ddl source FROM ${t}.INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showTableSource(e,t){return`SELECT ddl source FROM ${e}.INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = '${e}' and table_name='${t}' ORDER BY TABLE_NAME;`}showColumns(e,t){return`SELECT COLUMN_NAME name,DATA_TYPE type, IS_NULLABLE nullable 
            FROM ${e}.INFORMATION_SCHEMA.COLUMNS WHERE table_schema = '${e}' AND table_name = '${t}' ORDER BY ORDINAL_POSITION;`}showViews(e,t=e){return`SELECT TABLE_NAME,view_definition source FROM ${t}.INFORMATION_SCHEMA.VIEWS  WHERE TABLE_SCHEMA = '${t}' ORDER BY TABLE_NAME`}tableTemplate(e){return`CREATE TABLE ${e}.table_name$1(  
    id INT64,
    create_time DATE,
    update_time DATE,
    content STRING
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}}class mn extends at{showVersion(){return"SELECT SYSTEM_VALUE_NAME, CURRENT_CHARACTER_VALUE FROM QSYS2.SYSTEM_VALUE_INFO WHERE SYSTEM_VALUE_NAME IN ('QSRLNBR', 'QMODEL');"}showUsers(){return`SELECT AUTHORIZATION_NAME AS "user" FROM QSYS2.USER_INFO WHERE STATUS = 'ENABLED';`}pingDataBase(e){return e?`SET SCHEMA ${e}`:null}showDatabases(){return'SELECT SCHEMA_NAME AS "database" FROM QSYS2.SYSSCHEMAS;'}showTables(e,t){return`SELECT TABLE_NAME AS "name", TABLE_TEXT AS "comment" FROM QSYS2.SYSTABLES WHERE TABLE_SCHEMA='${t}' AND TABLE_TYPE='T' ORDER BY TABLE_NAME;`}showColumns(e,t){return`SELECT COLUMN_NAME AS "name",
                       DATA_TYPE AS "type",
                       IS_NULLABLE AS "nullable",
                       NUMERIC_PRECISION AS "precision",
                       NUMERIC_SCALE AS "scale",
                       CHARACTER_MAXIMUM_LENGTH AS "maximum_length",
                       COLUMN_DEFAULT AS "defaultValue",
                       COLUMN_TEXT AS "comment",
                       IDENTITY AS "extra"
                FROM QSYS2.SYSCOLUMNS
                WHERE TABLE_SCHEMA = '${e}'
                  AND TABLE_NAME = '${t}'
                ORDER BY ORDINAL_POSITION;`}showAllForeignKeys(){return`SELECT 
                    CONSTRAINT_NAME AS "constraint_name",
                    TABLE_SCHEMA AS "table_schema",
                    TABLE_NAME AS "table_name",
                    CONSTRAINT_KEYS AS "column_name",
                    SYSTEM_TABLE_NAME AS "referenced_table",
                    SYSTEM_CONSTRAINT_SCHEMA AS "referenced_column"
                FROM QSYS2.SYSCST
                WHERE CONSTRAINT_TYPE = 'FOREIGN KEY';`}showForeignKeys(e,t){return`SELECT 
                    CONSTRAINT_KEYS AS "column_name",
                    CONSTRAINT_NAME AS "constraint_name",
                    SYSTEM_TABLE_NAME AS "referenced_table",
                    SYSTEM_CONSTRAINT_SCHEMA AS "referenced_column"
                FROM QSYS2.SYSCST
                WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME='${t}' AND CONSTRAINT_TYPE='FOREIGN KEY';`}showIndex(e,t){return`SELECT 
                    INDEX_NAME AS "index_name",
                    COLUMN_NAME AS "column_name",
                    CASE WHEN NON_UNIQUE = 0 THEN 'YES' ELSE 'NO' END AS "isUnique"
                FROM QSYS2.SYSINDEXES
                WHERE TABLE_NAME = '${t}' AND TABLE_SCHEMA = '${e}';`}showViews(e,t){return`SELECT VIEW_NAME AS "name", VIEW_DEFINITION AS "source" FROM QSYS2.SYSVIEWS WHERE TABLE_SCHEMA = '${t}';`}showProcedures(e){return`SELECT SPECIFIC_NAME AS "routine_name", ROUTINE_DEFINITION AS "source" FROM QSYS2.SYSROUTINES WHERE ROUTINE_SCHEMA = '${e}' ORDER BY SPECIFIC_NAME;`}showChecks(e,t){return`SELECT CONSTRAINT_NAME AS "name", CHECK_CLAUSE AS "clause" FROM QSYS2.SYSCST WHERE TABLE_NAME = '${t}' AND TABLE_SCHEMA = '${e}' AND CONSTRAINT_TYPE = 'CHECK';`}showTriggers(e,t){return`SELECT TRIGGER_NAME AS "trigger_name", ACTION_STATEMENT AS "source", EVENT_OBJECT_TABLE AS "table_name", EVENT_MANIPULATION AS "event" FROM QSYS2.SYSTRIGGERS WHERE EVENT_OBJECT_SCHEMA = '${e}'${t?` AND EVENT_OBJECT_TABLE = '${t}'`:""};`}showFunctions(e){return`SELECT SPECIFIC_NAME AS "routine_name", ROUTINE_DEFINITION AS "source" FROM QSYS2.SYSFUNCS WHERE FUNCTION_SCHEMA = '${e}' ORDER BY SPECIFIC_NAME;`}dropIndex(e,t){return`DROP INDEX ${e}.${t};`}processList(){return`SELECT JOB_NAME, 
                       AUTHORIZATION_NAME, 
                       TOTAL_CPU_TIME, 
                       TOTAL_DISK_IO_COUNT, 
                       TOTAL_MEMORY_USAGE 
                FROM QSYS2.ACTIVE_JOB_INFO 
                ORDER BY TOTAL_CPU_TIME DESC;`}}class Xe extends ye{showDatabases(){return"show databases"}showTables(e){return`show tables from ${e}`}showColumns(e,t){return`show columns from ${t}`}showViews(e){return`show views from ${e}`}showIndexes(e,t){return`show indexes from ${t}`}showFunctions(e){return`show functions from ${e}`}showProcedures(e){return`show procedures from ${e}`}showTriggers(e,t){return`show triggers from ${t}`}}class Tn extends Be{showVersion(){return"select replace(version(), 'KingbaseES ', '');"}showViewSource(e,t,n){return n?`SELECT 
    'CREATE MATERIALIZED VIEW ' || schemaname || '.' || matviewname || ' AS ' ||
    definition as mview_ddl
FROM sys_matviews
WHERE schemaname = '${e}' 
    AND matviewname = '${t}';`:`SELECT 
    'CREATE OR REPLACE VIEW ' || schemaname || '.' || viewname || ' AS ' || 
    definition as view_ddl
FROM sys_views 
WHERE schemaname = '${e}' 
    AND viewname = '${t}';`}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
[BEFORE/AFTER] INSERT ON ${e??"[table_name]$2"}
FOR EACH ROW BEGIN
    $3
END;`}}class _n extends Ye{showDatabases(){return"list"}showTables(e){return`SELECT name, type FROM sqlite_master 
                WHERE type='table' 
                AND name NOT LIKE '_cf%' 
                ORDER BY type ASC, name ASC;`}}class An extends Be{showVersion(){return"SELECT VERSION() as server_version"}createIndex(e){throw new Error("Redshift not support index!")}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}processList(){return`SELECT
        a.pid AS "Id",
        a.usename AS "User",
        a.client_addr AS "Host",
        a.client_port AS "Port",
        datname AS "db",
        query AS "Command",
        l.mode AS "State",
        query_start AS "Time",
        CASE
          WHEN c.relname IS NOT NULL THEN 'Locked Object: ' || c.relname
          ELSE 'Locked Transaction: ' || l.virtualtransaction
        END AS "Info"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e}
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password';"}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:n,type:r}=t;return`-- change column type
ALTER TABLE ${e}
    ALTER COLUMN ${n} TYPE ${r};
-- change column name
ALTER TABLE ${e}
    RENAME COLUMN ${n} TO ${n};`}updateColumnSql(e){return new Ve(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}updateTable(e){const{table:t,newTableName:n,comment:r,newComment:l}=e;let a="";return l&&l!=r&&(a=`COMMENT ON TABLE "${t}" IS '${l}';`),n&&t!=n&&(a+=`ALTER TABLE "${t}" RENAME TO "${n}";`),a}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showViewSource(e,t,n){return n?`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`:`SELECT CONCAT('CREATE VIEW ',table_name,'
AS
(',regexp_replace(view_definition,';$',''),')') "Create View"
    ,table_name,view_definition from information_schema.views 
    where table_schema='${e}' and table_name='${t}'`}showMaterialViewSource(e,t){return`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showFunctionSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showPartitions(e,t){return""}showSequences(e){return`SELECT sequence_name name FROM information_schema.sequences WHERE sequence_schema = '${e}' ORDER BY sequence_name`}showTriggers(e,t){const n=t?` AND event_object_table='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name" FROM information_schema.TRIGGERS WHERE trigger_schema = '${e}' ${n} ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return` SELECT proname AS "ROUTINE_NAME",
       pg_catalog.pg_get_function_arguments(p.oid) AS "argDefs"
FROM pg_catalog.pg_proc p
     LEFT JOIN pg_catalog.pg_namespace n ON n.oid = p.pronamespace
WHERE pg_catalog.pg_function_is_visible(p.oid)
  AND n.nspname = '${e}'
  AND p.prokind = 'p'; `}showFunctions(e){return`SELECT proname AS name,
       pg_catalog.pg_get_function_result(p.oid) AS return_type,
       pg_catalog.pg_get_function_arguments(p.oid) AS "argDefs",
       CASE
           WHEN p.proisagg THEN 'agg'
           WHEN p.proiswindow THEN 'window'
           WHEN p.prorettype = 'pg_catalog.trigger'::pg_catalog.regtype THEN 'trigger'
           ELSE 'normal'
       END AS type
FROM pg_catalog.pg_proc p
     LEFT JOIN pg_catalog.pg_namespace n ON n.oid = p.pronamespace
WHERE pg_catalog.pg_function_is_visible(p.oid)
  AND n.nspname = '${e}'
  AND p.prokind = 'f';  `}showTables(e,t){return`  SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id serial NOT NULL PRIMARY KEY,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}procedureTemplate(){return`CREATE OR REPLACE PROCEDURE procedure_name()
AS
BEGIN
   SELECT 1;
END;`}functionTemplate(){return`CREATE FUNCTION function_name()
RETURNS int STABLE
AS $$
    SELECT 1
$$ LANGUAGE sql;`}}class dn extends Ne{showVersion(){return"select version() as server_version;"}showDatabases(){return"SHOW CATALOGS"}showTables(e,t){return`SELECT table_name FROM information_schema.tables
   WHERE table_catalog = '${e}' and table_schema = '${t}' and TABLE_TYPE<>'VIEW' `}tableTemplate(e){return`CREATE TABLE ${e=="default"?"":`${e}.`}table_name$1(
    id LONG PRIMARY KEY,
    create_time DATE,
    update_time DATE,
    content STRING
);`}showColumns(e,t){return`SELECT c.COLUMN_NAME name,
c.DATA_TYPE type, c.IS_NULLABLE nullable,
CASE WHEN tc.constraint_type = 'PRIMARY KEY' THEN 'YES' ELSE 'NO' END AS key
    FROM information_schema.columns c
    LEFT JOIN 
        information_schema.key_column_usage kcu ON c.table_schema = kcu.table_schema
        AND c.table_name = kcu.table_name AND c.column_name = kcu.column_name
    LEFT JOIN 
        information_schema.table_constraints tc ON kcu.constraint_name = tc.constraint_name
        AND kcu.table_schema = tc.table_schema AND kcu.table_name = tc.table_name
    WHERE c.table_schema = '${e}' AND c.table_name = '${t}'
    ORDER BY c.ordinal_position;`}createDatabase(e){return`CREATE CATALOG $1${e};`}dropDatabase(e){return`DROP CATALOG ${e};`}}function Nn(c,e){switch(c||(c=T.MYSQL),c){case T.MYSQL:return e?new Xe:new ye;case T.MARIA_DB:return new zt;case T.DORIS:return new on;case T.MYSQL_COMPATIBLE:return new Xe;case T.KINGBASE:return new Tn;case T.PG:case T.COCKROACH:return e?new Qe:new Be;case T.REDSHIFT:return new Qe;case T.GAUSS_DB:return new An;case T.SQLServer:return new en;case T.D1:return new _n;case T.libSQL:case T.SQLITE:return new Ye;case T.DUCK_DB:return new an;case T.SNOWFLAKE:return new nn;case T.CLICKHOUSE:return new Xt;case T.DM:return new Jt;case T.ORACLE:return new tt;case T.CASSANDRA:return new ln;case T.BIG_QUERY:return new cn;case T.PRESTO:case T.TRINO:return new rn;case T.HIVE:return new nt;case T.DATABRICKS:return new dn;case T.ATHENA:return new un;case T.DB2:return new at;case T.AS400:return new mn;case T.MONGO_DB:return new Zt;case T.NEO4J:return new tn;case T.TDengine:return new En}return new Ne}class ue{constructor(e){this.meta=e,this.dialect=Nn(e.dbType),this.wrappedTable=me(this.meta.table,this.meta.dbType,_t.Always)}updateTable(e){return this.dialect.updateTable(e)}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","TEXT","JSON","BLOB"]}strategies(){return["RESTRICT","CASCADE","SET NULL","SET DEFAULT","NO ACTION"]}newColumn(e){const{name:t,type:n,isNotNull:r}=e,l=r?" NOT NULL":"";return`ALTER TABLE ${this.wrappedTable} ADD COLUMN ${me(t,this.meta.dbType)} ${n}${l}`}updateColumn(e){return this.dialect.updateColumnSql({...e,table:this.meta.table,tableMeta:this.meta,schema:this.meta.schema})}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP COLUMN ${me(e,this.meta.dbType)}`}formatIndexType(e){return e.index_type}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"}]}newIndex(e){return`ALTER TABLE ${this.wrappedTable} ADD INDEX (${e.columns.join(",")})`}dropIndex(e){return this.dialect.dropIndex(this.wrappedTable,e)}dropTrigger(e){return this.dialect.dropTriggerTemplate(e,this.wrappedTable)}showChecks(){return this.dialect.showChecks(this.meta.schema,this.meta.table)}showForeignKeys(){return this.dialect.showForeignKeys(this.meta.schema,this.meta.table)}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:r,refColumn:l,onUpdate:a,onDelete:i}=e,o=a=="NO ACTION"?"":` ON UPDATE ${a}`,N=i=="NO ACTION"?"":` ON DELETE ${i}`;return new V(`ALTER TABLE "${this.meta.table}"`).if(n,()=>`ADD CONSTRAINT ${n}`).if(!n,"ADD").append(`FOREIGN KEY ("${t}") REFERENCES "${r}"("${l}")${o}${N};`).toString()}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT ${e};`}newCheck(e){return`ALTER TABLE ${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE ${this.wrappedTable} DROP CONSTRAINT ${e};`}splitColumn(e,t='"'){return e.map(n=>t+n+t).join(",")}}class Rn extends ue{columnTypes(){return["Int32","String","Float32","hr","Date","DateTime","hr","BOOLEAN","UUID",{label:"Array",value:"Array(String)"},"hr","JSON",{label:"Tuple",value:"Tuple(String)"},{label:"Map",value:"Map(String,String)"},"hr","Int8","Int16","Int64","Int128","Int256","UInt8","UInt16","UInt32","UInt64","UInt128","UInt256","hr","DateTime64","DateTime32","hr","Decimal32","Decimal64","Decimal128","Decimal256","hr","IPv4","IPv6","hr",{label:"Enum8",value:"Enum8('a'=1)"},{label:"Enum16",value:"Enum16('a'=1)"},"hr",{label:"FixedString",value:"FixedString(100)"}]}newColumn(e){const{name:t,type:n,defaultValue:r,comment:l}=e;return new V(`ALTER TABLE ${this.wrappedTable} ADD COLUMN "${t}" ${n}`).if(!X(r),`DEFAULT ${re(r,n)}`).if(l,`COMMENT '${l}'`).toString()}newIndex(e){const{columns:t}=e;return`ALTER TABLE "${this.meta.table}" ADD INDEX ${t.join("")}_${new Date().getTime()}_index expression TYPE type GRANULARITY value AFTER ${this.splitColumn(t)}`}showForeignKeys(){return null}showChecks(){return null}}class We extends ue{newColumn(e){const{name:t,type:n,defaultValue:r,isNotNull:l}=e;return new V(`ALTER TABLE "${this.meta.schema}".${me(this.meta.table,this.meta.dbType)} ADD ${me(t,this.meta.dbType)} ${n}`).if(l,"NOT NULL").if(!X(r),`DEFAULT ${re(r,n)}`).toString()}dropColumn(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP COLUMN ${me(e,this.meta.dbType)}`}newIndex(e){const{table:t=this.meta.table,columns:n,type:r}=e,l=`${t}_${n.join("_")}_${new Date().getTime()}`;return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${l} ON "${this.meta.schema}"."${t}"(${this.splitColumn(n)});`}newCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP CONSTRAINT ${e};`}dropForeignKey(e){return`ALTER TABLE "${this.meta.schema}"."${this.meta.table}" DROP CONSTRAINT ${e};`}newForeignKey(e){return super.newForeignKey(e).replace(`"${this.meta.table}"`,`"${this.meta.schema}"."${this.meta.table}"`)}}class Cn extends ue{indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"FULLTEXT",value:"FULLTEXT"}]}columnTypes(){return["INT",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATETIME","TIMESTAMP","DATE","hr","BIT","FLOAT","DOUBLE",{label:"DECIMAL",value:"DECIMAL(10,2)"},"BIGINT","hr","TEXT","JSON","BLOB","BINARY","hr",{label:"ENUM",value:"ENUM('item')"},{label:"SET",value:"SET('item')"},"hr","TINYINT","SMALLINT","MEDIUMINT","hr","TIME","YEAR","hr","VARBINARY","TINYBLOB","MEDIUMBLOB","LONGBLOB","TINYTEXT","MEDIUMTEXT","LONGTEXT","hr","GEOMETRY","POINT","LINESTRING","POLYGON","MULTIPOINT","MULTILINESTRING","MULTIPOLYGON","GEOMETRYCOLLECTION"]}newColumn(e){const{name:t,type:n,comment:r,defaultValue:l,isNotNull:a,unsigned:i,zerofill:o}=e;return console.log(e),new V(`ALTER TABLE ${this.wrappedTable} ADD COLUMN \`${t}\` ${n}`).if(i&&i!=0,"UNSIGNED").if(o,"ZEROFILL").if(a,"NOT NULL").if(r,`COMMENT '${r}'`).if(!X(l),`DEFAULT ${re(l,n)}`).toString()}formatIndexType(e){const t=e.index_type.toUpperCase();return t=="BTREE"?e.index_name=="PRIMARY"?"PRIMARY":He(e.isUnique)?"UNIQUE":"KEY":t}newIndex(e){const{type:t="key",columns:n}=e;return`ALTER TABLE \`${this.meta.table}\` ADD ${t} (${this.splitColumn(n,"`")})`}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:r,refColumn:l,onUpdate:a,onDelete:i}=e,o=a=="NO ACTION"?"":` ON UPDATE ${a}`,N=i=="NO ACTION"?"":` ON DELETE ${i}`;return new V(`ALTER TABLE \`${this.meta.table}\``).if(n,()=>`ADD CONSTRAINT ${n}`).if(!n,"ADD").append(`FOREIGN KEY (\`${t}\`) REFERENCES \`${r}\`(\`${l}\`)${o}${N};`).toString()}dropForeignKey(e){return`ALTER TABLE \`${this.meta.table}\` DROP FOREIGN KEY ${e};`}}class Sn extends ue{newIndex(e){const{table:t=this.meta.table,columns:n,type:r}=e,l=`${t}_${n.join("_")}_${new Date().getTime()}`;return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${l} ON "${t}"(${this.splitColumn(n)})`}newColumn(e){const{name:t,type:n,isNotNull:r,defaultValue:l,comment:a}=e;return new V(`ALTER TABLE ${me(this.meta.table,this.meta.dbType)} ADD ${t} ${n}`).if(!X(l),`DEFAULT ${re(l,n)}`).if(r,"NOT NULL").if(a,`;
COMMENT ON COLUMN ${this.wrappedTable}."${t.toUpperCase()}" is '${a}';`).toString()}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:r,refColumn:l,onUpdate:a,onDelete:i}=e,o=a=="NO ACTION"?"":` ON UPDATE ${a}`,N=i=="NO ACTION"?"":` ON DELETE ${i}`,R=n||`${t}_${r}_${l}_fk_${Math.floor(Math.random()*30)}`;return`ALTER TABLE "${this.meta.table}" ADD CONSTRAINT ${R} FOREIGN KEY ("${t}") REFERENCES ${r}(${l})${o}${N};`}showForeignKeys(){var t;let{schema:e}=this.meta;return(e==null?void 0:e.toLowerCase())==((t=this.meta.user)==null?void 0:t.toLowerCase())&&(e=void 0),this.dialect.showForeignKeys(e,this.meta.table)}columnTypes(){return["INTEGER",{label:"VARCHAR2",value:"VARCHAR2(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","hr","NUMBER","FLOAT","hr","CLOB","BLOB","hr","BINARY_FLOAT","BINARY_DOUBLE","hr","TIMESTAMP WITH TIME ZONE","TIMESTAMP WITH LOCAL TIME ZONE","hr","INTERVAL YEAR TO MONTH","INTERVAL DAY TO SECOND","hr","RAW","LONG RAW","LONG","hr","NCHAR","NVARCHAR2","NCLOB","hr","BFILE","ROWID","UROWID"]}}class pn extends ue{newColumn(e){const{name:t,type:n,comment:r,defaultValue:l,isNotNull:a}=e,i=this.wrappedTable;return new V(`ALTER TABLE ${i} ADD COLUMN "${t}" ${n}`).if(a,"NOT NULL").if(!X(l),`DEFAULT ${re(l,n)}`).append(";").if(r,`
COMMENT ON COLUMN ${i}."${t}" is '${r}';`).toString()}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"TIMESTAMP","DATE","BOOLEAN","FLOAT","TEXT","JSON","BLOB","hr","SMALLINT","BIGINT","REAL","DOUBLE PRECISION","hr","BYTEA","XML","UUID","ARRAY","hr","NUMERIC","MONEY","INTERVAL","CIDR","INET","MACADDR"]}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"HASH",value:"HASH"}]}newIndex(e){const{table:t=this.meta.table,columns:n,type:r}=e,l=r=="HASH"?"hash":"btree";return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${n.join("_")}_${new Date().getTime()}_index ON "${t}" USING ${l} (${this.splitColumn(n)});`}}class On extends ue{newIndex(e){throw new Error("Method not implemented.")}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT "${e}";`}showForeignKeys(){return`select
       rco.constraint_name "constraint_name",
       rco.UPDATE_RULE "updateRule",
       rco.DELETE_RULE "deleteRule",
       pk_tco.table_name "referenced_table"
from information_schema.referential_constraints rco
    join information_schema.table_constraints fk_tco on fk_tco.constraint_name = rco.constraint_name and fk_tco.constraint_schema = rco.constraint_schema
    join information_schema.table_constraints pk_tco on pk_tco.constraint_name = rco.unique_constraint_name and pk_tco.constraint_schema = rco.unique_constraint_schema
    WHERE fk_tco.TABLE_SCHEMA='${this.meta.schema}' and fk_tco.table_name='${this.meta.table}' 
    ORDER BY rco.CREATED`}}class Ln extends ue{newIndex(e){const{table:t=this.meta.table,columns:n}=e;return`CREATE INDEX ${`${t}_${n.join("_")}_${new Date().getTime()}`} ON "${t}"(${this.splitColumn(n)});`}showForeignKeys(){return`SELECT "from" column_name, "table" referenced_table, "to" referenced_column,
        on_update, on_delete 
        FROM pragma_foreign_key_list('${this.meta.table}');`}showChecks(){return null}}class bn extends ue{newColumn(e){const{type:t,defaultValue:n}=e;return new V(super.newColumn(e)).if(!X(n),`DEFAULT ${re(n,t)}`).toString()}newIndex(e){const{table:t=this.meta.table,columns:n}=e;return`CREATE INDEX ${`${t}_${n.join("_")}_${new Date().getTime()}`} ON "${t}"(${this.splitColumn(n)});`}showForeignKeys(){return`SELECT constraint_column_names "column_name" FROM duckdb_constraints()
        WHERE constraint_type='FOREIGN KEY' and database_name not in ('system','temp') and schema_name='${this.meta.schema}' and table_name='${this.meta.table}'`}showChecks(){return null}}class Mn extends We{columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","TIME","hr","BOOLEAN","FLOAT","DOUBLE","hr","TEXT","BLOB","hr","SMALLINT","BIGINT","DECFLOAT","hr","TIMESTAMP WITH TIME ZONE","TIME WITH TIME ZONE","hr","XML","GRAPHIC","VARGRAPHIC","hr","DBCLOB","CLOB"]}}class In extends We{columnTypes(){return["INTEGER","TEXT","hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","BLOB","hr","BIGINT","SMALLINT","TINYINT","VARINT","hr","TIME","TIMEUUID","hr","DECIMAL","COUNTER","hr","UUID","INET","ASCII","DURATION"]}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP ${me(e,this.meta.dbType)}`}}function $n(c){switch(c.dbType){case T.PG:case T.REDSHIFT:case T.KINGBASE:case T.GAUSS_DB:return new pn(c);case T.DM:case T.ORACLE:return new Sn(c);case T.DB2:return new Mn(c);case T.CASSANDRA:return new In(c);case T.SQLServer:return new We(c);case T.SNOWFLAKE:return new On(c);case T.CLICKHOUSE:return new Rn(c);case T.DUCK_DB:return new bn(c);case T.D1:case T.libSQL:case T.SQLITE:return new Ln(c);case T.MYSQL:case T.MARIA_DB:case T.DATABRICKS:return new Cn(c);default:return new ue(c)}}const hn={class:"mt-2 design-container"},gn={id:"infoPanel"},Dn={class:"tab"},wn=["onClick"],fn={class:"design-data-container"},Un=Te({__name:"design",setup(c){const e=P(!1),t=Ae(),n=x(()=>t.activePanel),r=x(()=>[{id:"ddl",i18n:"design.ddl",icon:"codicon-edit green"},{id:"column",i18n:"design.column",icon:"codicon-symbol-field blue"},{id:"foreignKey",i18n:"design.foreignKey",icon:"codicon-symbol-class yellow",hidden:x(()=>!t.supportForeignKey)},{id:"index",i18n:"design.index",icon:"codicon-github-action purple",hidden:x(()=>!t.supportIndex)},{id:"trigger",i18n:"design.trigger",icon:"codicon-github-action orange",hidden:x(()=>!t.supportTrigger)},{id:"check",i18n:"design.check",icon:"codicon-tools red",hidden:x(()=>!t.supportCheck||!e.value)}].filter(a=>{var i;return((i=a==null?void 0:a.hidden)==null?void 0:i.value)!=!0}));_e(()=>{w.on("dbType",a=>{t.updateDBType(a)}).on("designMeta",a=>{e.value=a.isSupportCheck,t.dialect=$n(a),t.updateFullInfo(a),w.emitImmediately("designMetaNext",a)}).on("success",()=>{Je(m("design.updateSuccess"))}).on("error",a=>{we(a)}).on("refresh_design",()=>{l()}),l(),At(55,["tableTab","infoPanel"],a=>{t.remainHeight=a})});const l=()=>{w.emit("init",{type:"design"})};return(a,i)=>(A(),f("div",hn,[$("div",gn,[s(Wt),$("ul",Dn,[(A(!0),f(ee,null,Ee(r.value,(o,N)=>(A(),f("li",{key:N,class:Ke(["tab__item",{"tab__item--active":n.value==o.id}]),onClick:R=>E(t).activePanel=o.id},[o.icon?(A(),f("i",{key:0,type:"icon",class:Ke(o.icon),style:{position:"relative",top:"3px"}},null,2)):g("",!0),B(" "+U(E(m)(o.i18n)),1)],10,wn))),128))])]),$("div",fn,[W(s(St,null,null,512),[[ne,n.value=="ddl"]]),W(s(Dt,null,null,512),[[ne,n.value=="column"]]),W(s(Lt,null,null,512),[[ne,n.value=="foreignKey"]]),W(s(Rt,null,null,512),[[ne,n.value=="index"]]),W(s(Qt,null,null,512),[[ne,n.value=="trigger"]]),W(s(Kt,null,null,512),[[ne,n.value=="check"]])])]))}}),ia=ze(Un,[["__scopeId","data-v-68f3d12d"]]);export{ia as default};
