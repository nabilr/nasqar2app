(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{9417:function(e,n,a){"use strict";a.d(n,{Z:function(){return P}});var t=a(3366),i=a(7462),r=a(7294),o=a(512),l=a(2236),s=a(8510),c=a(2101),d=a(948),p=a(6206),u=a(7623),h=a(1295),m=a(8216),g=a(1977),x=a(5122);function v(e){return(0,x.ZP)("MuiButton",e)}let b=(0,g.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),k=r.createContext({}),f=r.createContext(void 0);var S=a(5893);let _=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>{let{color:n,disableElevation:a,fullWidth:t,size:r,variant:o,classes:l}=e,c={root:["root",o,`${o}${(0,m.Z)(n)}`,`size${(0,m.Z)(r)}`,`${o}Size${(0,m.Z)(r)}`,`color${(0,m.Z)(n)}`,a&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,m.Z)(r)}`],endIcon:["icon","endIcon",`iconSize${(0,m.Z)(r)}`]},d=(0,s.Z)(c,v,l);return(0,i.Z)({},l,d)},q=e=>(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,d.ZP)(h.Z,{shouldForwardProp:e=>(0,p.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:a}=e;return[n.root,n[a.variant],n[`${a.variant}${(0,m.Z)(a.color)}`],n[`size${(0,m.Z)(a.size)}`],n[`${a.variant}Size${(0,m.Z)(a.size)}`],"inherit"===a.color&&n.colorInherit,a.disableElevation&&n.disableElevation,a.fullWidth&&n.fullWidth]}})(({theme:e,ownerState:n})=>{var a,t;let r="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],o="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,i.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===n.variant&&"inherit"!==n.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===n.variant&&"inherit"!==n.color&&{border:`1px solid ${(e.vars||e).palette[n.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[n.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===n.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:o,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===n.variant&&"inherit"!==n.color&&{backgroundColor:(e.vars||e).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[n.color].main}}),"&:active":(0,i.Z)({},"contained"===n.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,i.Z)({},"contained"===n.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,i.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===n.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===n.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===n.variant&&{padding:"6px 8px"},"text"===n.variant&&"inherit"!==n.color&&{color:(e.vars||e).palette[n.color].main},"outlined"===n.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===n.variant&&"inherit"!==n.color&&{color:(e.vars||e).palette[n.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[n.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[n.color].main,.5)}`},"contained"===n.variant&&{color:e.vars?e.vars.palette.text.primary:null==(a=(t=e.palette).getContrastText)?void 0:a.call(t,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:r,boxShadow:(e.vars||e).shadows[2]},"contained"===n.variant&&"inherit"!==n.color&&{color:(e.vars||e).palette[n.color].contrastText,backgroundColor:(e.vars||e).palette[n.color].main},"inherit"===n.color&&{color:"inherit",borderColor:"currentColor"},"small"===n.size&&"text"===n.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===n.size&&"text"===n.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===n.size&&"outlined"===n.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===n.size&&"outlined"===n.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===n.size&&"contained"===n.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===n.size&&"contained"===n.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},n.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}}),C=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,n)=>{let{ownerState:a}=e;return[n.startIcon,n[`iconSize${(0,m.Z)(a.size)}`]]}})(({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},q(e))),M=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,n)=>{let{ownerState:a}=e;return[n.endIcon,n[`iconSize${(0,m.Z)(a.size)}`]]}})(({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},q(e)));var P=r.forwardRef(function(e,n){let a=r.useContext(k),s=r.useContext(f),c=(0,l.Z)(a,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:h="primary",component:m="button",className:g,disabled:x=!1,disableElevation:v=!1,disableFocusRipple:b=!1,endIcon:q,focusVisibleClassName:P,fullWidth:w=!1,size:Z="medium",startIcon:A,type:R,variant:E="text"}=d,I=(0,t.Z)(d,_),$=(0,i.Z)({},d,{color:h,component:m,disabled:x,disableElevation:v,disableFocusRipple:b,fullWidth:w,size:Z,type:R,variant:E}),j=y($),T=A&&(0,S.jsx)(C,{className:j.startIcon,ownerState:$,children:A}),N=q&&(0,S.jsx)(M,{className:j.endIcon,ownerState:$,children:q});return(0,S.jsxs)(z,(0,i.Z)({ownerState:$,className:(0,o.Z)(a.className,j.root,g,s||""),component:m,disabled:x,focusRipple:!b,focusVisibleClassName:(0,o.Z)(j.focusVisible,P),ref:n,type:R},I,{classes:j,children:[T,p,N]}))})},9026:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applications/rna_seq/bulk_rna/enrichment",function(){return a(1680)}])},1680:function(e,n,a){"use strict";a.r(n),a.d(n,{MyApp1:function(){return c},MyApp2:function(){return d},__toc:function(){return p}});var t=a(5893),i=a(2673),r=a(8619),o=a(3257);a(7954);var l=a(2643);a(7294);var s=a(9417);let c=()=>(0,t.jsx)(s.Z,{href:"/ClusterProfShinyGSEA/",target:"_blank",variant:"outlined",size:"small",style:{marginTop:"10px"},children:"Launch ClusterProfShinyGSEA"}),d=()=>(0,t.jsx)(s.Z,{href:"/ClusterProfShinyORA/",target:"_blank",variant:"outlined",size:"small",style:{marginTop:"10px"},children:"Launch ClusterProfShinyORA"}),p=[{depth:2,value:"Gene Enrichment Tools",id:"gene-enrichment-tools"},{depth:3,value:"ClusterProfShinyGSEA (Gene Set Enrichment Analysis)",id:"clusterprofshinygsea-gene-set-enrichment-analysis"},{depth:3,value:"ClusterProfShinyGSEA",id:"clusterprofshinygsea"}];function u(e){let n=Object.assign({h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,l.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"gene-enrichment-tools",children:"Gene Enrichment Tools"}),"\n","\n","\n","\n",(0,t.jsx)(n.h3,{id:"clusterprofshinygsea-gene-set-enrichment-analysis",children:"ClusterProfShinyGSEA (Gene Set Enrichment Analysis)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A web-based application to perform Gene Set Enrichment Analysis (GSEA) using clusterProfiler and shiny R libraries"}),"\n",(0,t.jsx)(n.li,{children:"This is based on clusterProfiler R package"}),"\n"]}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h3,{id:"clusterprofshinygsea",children:"ClusterProfShinyGSEA"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ClusterProfShinyORA (Over-Representation Analysis)"}),"\n",(0,t.jsx)(n.li,{children:"A web-based application to perform Over-Representation Analysis (ORA) using clusterProfiler and shiny R libraries"}),"\n",(0,t.jsx)(n.li,{children:"This is based on clusterProfiler R package"}),"\n"]}),"\n",(0,t.jsx)(d,{})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)},pageOpts:{filePath:"pages/applications/rna_seq/bulk_rna/enrichment.mdx",route:"/applications/rna_seq/bulk_rna/enrichment",pageMap:[{kind:"Meta",data:{index:"Overview",quickstart:"Quickstart Guide",applications:"Applications",contact:{title:"Contact ↗",type:"page",href:"#",newWindow:!0},about:"About"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",data:{data_preprocessing_and_qc:"Data preprocessing & QC",rna_seq:"RNA seq",meta_genomics:"Meta Genomics",epigenetics:"Epigenetics",varient_annotation:"Variant calling  and Annotation"}},{kind:"Folder",name:"data_preprocessing_and_qc",route:"/applications/data_preprocessing_and_qc",children:[{kind:"Meta",data:{gene_count_merger:"Gene Count Merger",merge_fpkms:"Merge FPKMS"}},{kind:"MdxPage",name:"gene_count_merger",route:"/applications/data_preprocessing_and_qc/gene_count_merger"},{kind:"MdxPage",name:"merge_fpkms",route:"/applications/data_preprocessing_and_qc/merge_fpkms"}]},{kind:"Folder",name:"epigenetics",route:"/applications/epigenetics",children:[{kind:"Meta",data:{bulk:"Bulk",single_cell:"Single Cell"}},{kind:"Folder",name:"bulk",route:"/applications/epigenetics/bulk",children:[{kind:"Meta",data:{atacseq_qc:"Atacseq QC"}},{kind:"MdxPage",name:"atacseq_qc",route:"/applications/epigenetics/bulk/atacseq_qc"}]}]},{kind:"Folder",name:"meta_genomics",route:"/applications/meta_genomics",children:[{kind:"Meta",data:{dada2:"DADA2",animalcules:"Animalcules"}},{kind:"MdxPage",name:"animalcules",route:"/applications/meta_genomics/animalcules"},{kind:"MdxPage",name:"dada2",route:"/applications/meta_genomics/dada2"}]},{kind:"Folder",name:"rna_seq",route:"/applications/rna_seq",children:[{kind:"Meta",data:{single_cell:"Single Cell",bulk_rna:"Bulk RNA"}},{kind:"Folder",name:"bulk_rna",route:"/applications/rna_seq/bulk_rna",children:[{kind:"Meta",data:{debrowser:"Debrowser",deseq2:"DEseq2",startapp:"STARTApp",enrichment:"Enrichment"}},{kind:"MdxPage",name:"debrowser",route:"/applications/rna_seq/bulk_rna/debrowser"},{kind:"MdxPage",name:"deseq2",route:"/applications/rna_seq/bulk_rna/deseq2"},{kind:"MdxPage",name:"enrichment",route:"/applications/rna_seq/bulk_rna/enrichment"},{kind:"MdxPage",name:"startapp",route:"/applications/rna_seq/bulk_rna/startapp"}]},{kind:"Folder",name:"single_cell",route:"/applications/rna_seq/single_cell",children:[{kind:"MdxPage",name:"monocle3",route:"/applications/rna_seq/single_cell/monocle3"},{kind:"MdxPage",name:"seuartV5",route:"/applications/rna_seq/single_cell/seuartV5"},{kind:"Meta",data:{monocle3:"Monocle3",seuartV5:"Seuartv5"}}]}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"quickstart",route:"/quickstart",children:[{kind:"MdxPage",name:"Installation",route:"/quickstart/Installation"},{kind:"Meta",data:{deseq2:"Example  RNAseq using DESeq2",Installation:"Installation"}},{kind:"MdxPage",name:"deseq2",route:"/quickstart/deseq2"}]},{kind:"MdxPage",name:"quickstart",route:"/quickstart"}],flexsearch:{codeblocks:!0},title:"Enrichment",headings:p},pageNextRoute:"/applications/rna_seq/bulk_rna/enrichment",nextraLayout:r.ZP,themeConfig:o.Z};n.default=(0,i.j)(h)},3257:function(e,n,a){"use strict";var t=a(5893);a(7294);let i={logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:"/CGSB-Logo.png",width:"60"}),(0,t.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"NASQAR2 : Nucleic Acid SeQuence Analysis Resource"})]}),themeSwitch:{useOptions:()=>({light:"Light",dark:"Dark",system:"System"})},project:{link:"https://github.com/nabilr/nasqar2app"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/nabilr/nasqar2app/tree/main",footer:{text:"Nextra Docs Template"},darkMode:!0,nextThemes:{defaultTheme:"light",forcedTheme:"light"}};n.Z=i},5789:function(){}},function(e){e.O(0,[692,481,295,888,774,179],function(){return e(e.s=9026)}),_N_E=e.O()}]);