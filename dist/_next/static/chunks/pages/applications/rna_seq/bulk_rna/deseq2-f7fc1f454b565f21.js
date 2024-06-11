(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{9417:function(e,a,t){"use strict";t.d(a,{Z:function(){return C}});var n=t(3366),o=t(7462),i=t(7294),r=t(512),l=t(2236),s=t(8510),d=t(2101),c=t(948),p=t(6206),u=t(7623),m=t(1295),g=t(8216),h=t(1977),x=t(5122);function v(e){return(0,x.ZP)("MuiButton",e)}let b=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),k=i.createContext({}),_=i.createContext(void 0);var f=t(5893);let S=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],q=e=>{let{color:a,disableElevation:t,fullWidth:n,size:i,variant:r,classes:l}=e,d={root:["root",r,`${r}${(0,g.Z)(a)}`,`size${(0,g.Z)(i)}`,`${r}Size${(0,g.Z)(i)}`,`color${(0,g.Z)(a)}`,t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,g.Z)(i)}`],endIcon:["icon","endIcon",`iconSize${(0,g.Z)(i)}`]},c=(0,s.Z)(d,v,l);return(0,o.Z)({},l,c)},y=e=>(0,o.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,c.ZP)(m.Z,{shouldForwardProp:e=>(0,p.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[a.root,a[t.variant],a[`${t.variant}${(0,g.Z)(t.color)}`],a[`size${(0,g.Z)(t.size)}`],a[`${t.variant}Size${(0,g.Z)(t.size)}`],"inherit"===t.color&&a.colorInherit,t.disableElevation&&a.disableElevation,t.fullWidth&&a.fullWidth]}})(({theme:e,ownerState:a})=>{var t,n;let i="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,o.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:`1px solid ${(e.vars||e).palette[a.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}),"&:active":(0,o.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${b.focusVisible}`]:(0,o.Z)({},"contained"===a.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${b.disabled}`]:(0,o.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===a.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===a.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[a.color].main,.5)}`},"contained"===a.variant&&{color:e.vars?e.vars.palette.text.primary:null==(t=(n=e.palette).getContrastText)?void 0:t.call(n,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:i,boxShadow:(e.vars||e).shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}}),M=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[a.startIcon,a[`iconSize${(0,g.Z)(t.size)}`]]}})(({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e))),w=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{let{ownerState:t}=e;return[a.endIcon,a[`iconSize${(0,g.Z)(t.size)}`]]}})(({ownerState:e})=>(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e)));var C=i.forwardRef(function(e,a){let t=i.useContext(k),s=i.useContext(_),d=(0,l.Z)(t,e),c=(0,u.Z)({props:d,name:"MuiButton"}),{children:p,color:m="primary",component:g="button",className:h,disabled:x=!1,disableElevation:v=!1,disableFocusRipple:b=!1,endIcon:y,focusVisibleClassName:C,fullWidth:Z=!1,size:P="medium",startIcon:I,type:$,variant:R="text"}=c,E=(0,n.Z)(c,S),A=(0,o.Z)({},c,{color:m,component:g,disabled:x,disableElevation:v,disableFocusRipple:b,fullWidth:Z,size:P,type:$,variant:R}),N=q(A),F=I&&(0,f.jsx)(M,{className:N.startIcon,ownerState:A,children:I}),T=y&&(0,f.jsx)(w,{className:N.endIcon,ownerState:A,children:y});return(0,f.jsxs)(z,(0,o.Z)({ownerState:A,className:(0,r.Z)(t.className,N.root,h,s||""),component:g,disabled:x,focusRipple:!b,focusVisibleClassName:(0,r.Z)(N.focusVisible,C),ref:a,type:$},E,{classes:N,children:[F,p,T]}))})},2451:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applications/rna_seq/bulk_rna/deseq2",function(){return t(2889)}])},2889:function(e,a,t){"use strict";t.r(a),t.d(a,{Deseq2App:function(){return d},__toc:function(){return c}});var n=t(5893),o=t(2673),i=t(8619),r=t(3257);t(7954);var l=t(2643);t(7294);var s=t(9417);let d=()=>(0,n.jsx)(s.Z,{href:"/deseq2shiny/",target:"_blank",variant:"outlined",size:"small",style:{marginTop:"10px"},children:"Launch DEseq2"}),c=[{depth:2,value:"DEseq2 App",id:"deseq2-app"}];function p(e){let a=Object.assign({h2:"h2",p:"p"},(0,l.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"deseq2-app",children:"DEseq2 App"}),"\n","\n","\n",(0,n.jsx)(a.p,{children:"This Shiny app is a wrapper around DESeq2, an R package for “Differential gene expression analysis based on the negative binomial distribution”"}),"\n",(0,n.jsx)(d,{})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,l.a)(),e.components);return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)},pageOpts:{filePath:"pages/applications/rna_seq/bulk_rna/deseq2.mdx",route:"/applications/rna_seq/bulk_rna/deseq2",timestamp:1709040858e3,pageMap:[{kind:"Meta",data:{index:"Overview",quickstart:"Quickstart Guide",applications:"Applications",contact:{title:"Contact ↗",type:"page",href:"#",newWindow:!0},about:"About"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"applications",route:"/applications",children:[{kind:"Meta",data:{data_preprocessing_and_qc:"Data preprocessing & QC",rna_seq:"RNA seq",meta_genomics:"Meta Genomics",epigenetics:"Epigenetics",varient_annotation:"Variant calling  and Annotation"}},{kind:"Folder",name:"data_preprocessing_and_qc",route:"/applications/data_preprocessing_and_qc",children:[{kind:"Meta",data:{gene_count_merger:"Gene Count Merger",merge_fpkms:"Merge FPKMS"}},{kind:"MdxPage",name:"gene_count_merger",route:"/applications/data_preprocessing_and_qc/gene_count_merger"},{kind:"MdxPage",name:"merge_fpkms",route:"/applications/data_preprocessing_and_qc/merge_fpkms"}]},{kind:"Folder",name:"epigenetics",route:"/applications/epigenetics",children:[{kind:"Meta",data:{bulk:"Bulk",single_cell:"Single Cell"}},{kind:"Folder",name:"bulk",route:"/applications/epigenetics/bulk",children:[{kind:"Meta",data:{atacseq_qc:"Atacseq QC"}},{kind:"MdxPage",name:"atacseq_qc",route:"/applications/epigenetics/bulk/atacseq_qc"}]}]},{kind:"Folder",name:"meta_genomics",route:"/applications/meta_genomics",children:[{kind:"Meta",data:{dada2:"DADA2",animalcules:"Animalcules"}},{kind:"MdxPage",name:"animalcules",route:"/applications/meta_genomics/animalcules"},{kind:"MdxPage",name:"dada2",route:"/applications/meta_genomics/dada2"}]},{kind:"Folder",name:"rna_seq",route:"/applications/rna_seq",children:[{kind:"Meta",data:{single_cell:"Single Cell",bulk_rna:"Bulk RNA"}},{kind:"Folder",name:"bulk_rna",route:"/applications/rna_seq/bulk_rna",children:[{kind:"Meta",data:{debrowser:"Debrowser",deseq2:"DEseq2",startapp:"STARTApp",enrichment:"Enrichment"}},{kind:"MdxPage",name:"debrowser",route:"/applications/rna_seq/bulk_rna/debrowser"},{kind:"MdxPage",name:"deseq2",route:"/applications/rna_seq/bulk_rna/deseq2"},{kind:"MdxPage",name:"enrichment",route:"/applications/rna_seq/bulk_rna/enrichment"},{kind:"MdxPage",name:"startapp",route:"/applications/rna_seq/bulk_rna/startapp"}]},{kind:"Folder",name:"single_cell",route:"/applications/rna_seq/single_cell",children:[{kind:"MdxPage",name:"monocle3",route:"/applications/rna_seq/single_cell/monocle3"},{kind:"MdxPage",name:"seuartV5",route:"/applications/rna_seq/single_cell/seuartV5"},{kind:"Meta",data:{monocle3:"Monocle3",seuartV5:"Seuartv5"}}]}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"quickstart",route:"/quickstart",children:[{kind:"MdxPage",name:"Installation",route:"/quickstart/Installation"},{kind:"Meta",data:{deseq2:"Example  RNAseq using DESeq2",Installation:"Installation"}},{kind:"MdxPage",name:"deseq2",route:"/quickstart/deseq2"}]},{kind:"MdxPage",name:"quickstart",route:"/quickstart"}],flexsearch:{codeblocks:!0},title:"Deseq2",headings:c},pageNextRoute:"/applications/rna_seq/bulk_rna/deseq2",nextraLayout:i.ZP,themeConfig:r.Z};a.default=(0,o.j)(u)},3257:function(e,a,t){"use strict";var n=t(5893);t(7294);let o={logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:"/CGSB-Logo.png",width:"60"}),(0,n.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"NASQAR2 : Nucleic Acid SeQuence Analysis Resource"})]}),themeSwitch:{useOptions:()=>({light:"Light",dark:"Dark",system:"System"})},project:{link:"https://github.com/nabilr/nasqar2app"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/nabilr/nasqar2app/tree/main",footer:{text:"Nextra Docs Template"},darkMode:!0,nextThemes:{defaultTheme:"light",forcedTheme:"light"}};a.Z=o},5789:function(){}},function(e){e.O(0,[692,481,295,888,774,179],function(){return e(e.s=2451)}),_N_E=e.O()}]);