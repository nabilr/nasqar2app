(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{9417:function(e,a,n){"use strict";n.d(a,{Z:function(){return C}});var t=n(3366),o=n(7462),i=n(7294),r=n(512),l=n(2236),s=n(8510),c=n(2101),d=n(948),p=n(6206),u=n(7623),m=n(1295),g=n(8216),h=n(1977),x=n(5122);function v(e){return(0,x.ZP)("MuiButton",e)}let b=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),k=i.createContext({}),_=i.createContext(void 0);var f=n(5893);let S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>{let{color:a,disableElevation:n,fullWidth:t,size:i,variant:r,classes:l}=e,c={root:["root",r,`${r}${(0,g.Z)(a)}`,`size${(0,g.Z)(i)}`,`${r}Size${(0,g.Z)(i)}`,`color${(0,g.Z)(a)}`,n&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,g.Z)(i)}`],endIcon:["icon","endIcon",`iconSize${(0,g.Z)(i)}`]},d=(0,s.Z)(c,v,l);return(0,o.Z)({},l,d)},q=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,d.ZP)(m.Z,{shouldForwardProp:e=>(0,p.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:n}=e;return[a.root,a[n.variant],a[`${n.variant}${(0,g.Z)(n.color)}`],a[`size${(0,g.Z)(n.size)}`],a[`${n.variant}Size${(0,g.Z)(n.size)}`],"inherit"===n.color&&a.colorInherit,n.disableElevation&&a.disableElevation,n.fullWidth&&a.fullWidth]}})(({theme:e,ownerState:a})=>{var n,t;let i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,o.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,o.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(t=e.palette).getContrastText)?void 0:n.call(t,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}}),M=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{let{ownerState:n}=e;return[a.startIcon,a[`iconSize${(0,g.Z)(n.size)}`]]}})(({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},q(e))),w=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{let{ownerState:n}=e;return[a.endIcon,a[`iconSize${(0,g.Z)(n.size)}`]]}})(({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},q(e)));var C=i.forwardRef(function(e,a){let n=i.useContext(k),s=i.useContext(_),c=(0,l.Z)(n,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:m="primary",component:g="button",className:h,disabled:x=!1,disableElevation:v=!1,disableFocusRipple:b=!1,endIcon:q,focusVisibleClassName:C,fullWidth:Z=!1,size:I="medium",startIcon:P,type:$,variant:R="text"}=d,E=(0,t.Z)(d,S),N=(0,o.Z)({},d,{color:m,component:g,disabled:x,disableElevation:v,disableFocusRipple:b,fullWidth:Z,size:I,type:$,variant:R}),A=y(N),j=P&&(0,f.jsx)(M,{className:A.startIcon,ownerState:N,children:P}),F=q&&(0,f.jsx)(w,{className:A.endIcon,ownerState:N,children:q});return(0,f.jsxs)(z,(0,o.Z)({ownerState:N,className:(0,r.Z)(n.className,A.root,h,s||""),component:g,disabled:x,focusRipple:!b,focusVisibleClassName:(0,r.Z)(A.focusVisible,C),ref:a,type:$},E,{classes:A,children:[j,p,F]}))})},3319:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applications/rna_seq/single_cell/monocle3",function(){return n(6887)}])},6887:function(e,a,n){"use strict";n.r(a),n.d(a,{MyApp:function(){return c},__toc:function(){return d}});var t=n(5893),o=n(2673),i=n(8619),r=n(3257);n(7954);var l=n(2643);n(7294);var s=n(9417);let c=()=>(0,t.jsx)(s.Z,{href:"/monocle3/",target:"_blank",variant:"outlined",size:"small",style:{marginTop:"10px"},children:"Launch monocle3"}),d=[{depth:2,value:"Monocle3",id:"monocle3"}];function p(e){let a=Object.assign({h2:"h2",p:"p",a:"a"},(0,l.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"monocle3",children:"Monocle3"}),"\n","\n","\n",(0,t.jsxs)(a.p,{children:["Monocle 3 is a computational tool for analyzing single-cell RNA sequencing (scRNA-seq) data,\nspecializing in inferring dynamic biological processes such as cell differentiation.\nIt reconstructs developmental trajectories, calculates pseudotime, identifies differentially\nexpressed genes, and offers visualization tools. Monocle 3 is widely used in research fields\nlike developmental biology and cancer biology to study cell fate decisions and gene regulatory\nnetworks at the single-cell level.For more information\nclick ",(0,t.jsx)(a.a,{href:"https://cole-trapnell-lab.github.io/monocle3/",children:"here"})]}),"\n",(0,t.jsx)(c,{})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,l.a)(),e.components);return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)},pageOpts:{filePath:"pages/applications/rna_seq/single_cell/monocle3.mdx",route:"/applications/rna_seq/single_cell/monocle3",timestamp:1709040858e3,pageMap:[{kind:"Meta",data:{index:"Overview",quickstart:"Quickstart Guide",applications:"Applications",contact:{title:"Contact ↗",type:"page",href:"#",newWindow:!0},about:"About"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",data:{data_preprocessing_and_qc:"Data preprocessing & QC",rna_seq:"RNA seq",meta_genomics:"Meta Genomics",epigenetics:"Epigenetics",varient_annotation:"Variant calling  and Annotation"}},{kind:"Folder",name:"data_preprocessing_and_qc",route:"/applications/data_preprocessing_and_qc",children:[{kind:"Meta",data:{gene_count_merger:"Gene Count Merger",merge_fpkms:"Merge FPKMS"}},{kind:"MdxPage",name:"gene_count_merger",route:"/applications/data_preprocessing_and_qc/gene_count_merger"},{kind:"MdxPage",name:"merge_fpkms",route:"/applications/data_preprocessing_and_qc/merge_fpkms"}]},{kind:"Folder",name:"epigenetics",route:"/applications/epigenetics",children:[{kind:"Meta",data:{bulk:"Bulk",single_cell:"Single Cell"}},{kind:"Folder",name:"bulk",route:"/applications/epigenetics/bulk",children:[{kind:"Meta",data:{atacseq_qc:"Atacseq QC"}},{kind:"MdxPage",name:"atacseq_qc",route:"/applications/epigenetics/bulk/atacseq_qc"}]}]},{kind:"Folder",name:"meta_genomics",route:"/applications/meta_genomics",children:[{kind:"Meta",data:{dada2:"DADA2",animalcules:"Animalcules"}},{kind:"MdxPage",name:"animalcules",route:"/applications/meta_genomics/animalcules"},{kind:"MdxPage",name:"dada2",route:"/applications/meta_genomics/dada2"}]},{kind:"Folder",name:"rna_seq",route:"/applications/rna_seq",children:[{kind:"Meta",data:{single_cell:"Single Cell",bulk_rna:"Bulk RNA"}},{kind:"Folder",name:"bulk_rna",route:"/applications/rna_seq/bulk_rna",children:[{kind:"Meta",data:{debrowser:"Debrowser",deseq2:"DEseq2",startapp:"STARTApp",enrichment:"Enrichment"}},{kind:"MdxPage",name:"debrowser",route:"/applications/rna_seq/bulk_rna/debrowser"},{kind:"MdxPage",name:"deseq2",route:"/applications/rna_seq/bulk_rna/deseq2"},{kind:"MdxPage",name:"enrichment",route:"/applications/rna_seq/bulk_rna/enrichment"},{kind:"MdxPage",name:"startapp",route:"/applications/rna_seq/bulk_rna/startapp"}]},{kind:"Folder",name:"single_cell",route:"/applications/rna_seq/single_cell",children:[{kind:"MdxPage",name:"monocle3",route:"/applications/rna_seq/single_cell/monocle3"},{kind:"MdxPage",name:"seuartV5",route:"/applications/rna_seq/single_cell/seuartV5"},{kind:"Meta",data:{monocle3:"Monocle3",seuartV5:"Seuartv5"}}]}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"quickstart",route:"/quickstart",children:[{kind:"MdxPage",name:"Installation",route:"/quickstart/Installation"},{kind:"Meta",data:{deseq2:"Example  RNAseq using DESeq2",Installation:"Installation"}},{kind:"MdxPage",name:"deseq2",route:"/quickstart/deseq2"}]},{kind:"MdxPage",name:"quickstart",route:"/quickstart"}],flexsearch:{codeblocks:!0},title:"Monocle3",headings:d},pageNextRoute:"/applications/rna_seq/single_cell/monocle3",nextraLayout:i.ZP,themeConfig:r.Z};a.default=(0,o.j)(u)},3257:function(e,a,n){"use strict";var t=n(5893);n(7294);let o={logo:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("img",{src:"/CGSB-Logo.png",width:"60"}),(0,t.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"NASQAR2 : Nucleic Acid SeQuence Analysis Resource"})]}),themeSwitch:{useOptions:()=>({light:"Light",dark:"Dark",system:"System"})},project:{link:"https://github.com/nabilr/nasqar2app"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/nabilr/nasqar2app/tree/main",footer:{text:"Nextra Docs Template"},darkMode:!0,nextThemes:{defaultTheme:"light",forcedTheme:"light"}};a.Z=o},5789:function(){}},function(e){e.O(0,[692,481,295,888,774,179],function(){return e(e.s=3319)}),_N_E=e.O()}]);