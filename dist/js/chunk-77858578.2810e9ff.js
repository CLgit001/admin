(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77858578"],{"17cc":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVEOUI4NjUyQTE0RTExRUFBNTJEODdBMjkwMDJFMzg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVEOUI4NjUzQTE0RTExRUFBNTJEODdBMjkwMDJFMzg1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUQ5Qjg2NTBBMTRFMTFFQUE1MkQ4N0EyOTAwMkUzODUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUQ5Qjg2NTFBMTRFMTFFQUE1MkQ4N0EyOTAwMkUzODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5kINUzAAAAQElEQVR42mL8//8/AymAiYFEwAJjiDb8QhaHWcsIE3jdwEaeDeQ7CckZDDjEGCm2gRGfp8n2A8kaGGke0wABBgC/WA0XtnZZKAAAAABJRU5ErkJggg=="},"43c9":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAA7klEQVQokYXPMStFYRgH8N97k8lwE4MsYpDFjshos8mmDJReJV1ypJySXmWRzuILGH0Eq4VZyWhUslwpOZZzdem6nnq237/n/4Q8z/01RZk1MIceHMWQbmpd8A5O8YRLHEPHQFFm+1jHIK6RcNsxUJTZGVYxGUN6Rh2fOFF1a8fnWMZYDKlZ1drGaAzp7UegKLM1zGKkwrtoYKqFvwNFma3gAkMV3sMGxmNIL+0twsDhex1X1Q6jFwuYjiG9/v6xhi08xpAKLGITM51w68IBlvCAuxhS6gS/A3meK8psIoZ03w22X5hHE/3o+8d/fAG1m09L45kEGQAAAABJRU5ErkJggg=="},5319:function(e,t,i){"use strict";var a=i("d784"),r=i("825a"),n=i("7b0b"),l=i("50c4"),o=i("a691"),s=i("1d80"),c=i("8aa5"),u=i("14c3"),d=Math.max,m=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,i,a){var b=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=a.REPLACE_KEEPS_$0,_=b?"$":"$0";return[function(i,a){var r=s(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,r,a):t.call(String(r),i,a)},function(e,a){if(!b&&g||"string"===typeof a&&-1===a.indexOf(_)){var n=i(t,e,this,a);if(n.done)return n.value}var s=r(e),f=String(this),h="function"===typeof a;h||(a=String(a));var v=s.global;if(v){var A=s.unicode;s.lastIndex=0}var F=[];while(1){var k=u(s,f);if(null===k)break;if(F.push(k),!v)break;var w=String(k[0]);""===w&&(s.lastIndex=c(f,l(s.lastIndex),A))}for(var E="",I=0,x=0;x<F.length;x++){k=F[x];for(var C=String(k[0]),N=d(m(o(k.index),f.length),0),S=[],M=1;M<k.length;M++)S.push(p(k[M]));var R=k.groups;if(h){var G=[C].concat(S,N,f);void 0!==R&&G.push(R);var O=String(a.apply(void 0,G))}else O=y(C,f,N,S,R,a);N>=I&&(E+=f.slice(I,N)+O,I=N+C.length)}return E+f.slice(I)}];function y(e,i,a,r,l,o){var s=a+e.length,c=r.length,u=v;return void 0!==l&&(l=n(l),u=h),t.call(o,u,(function(t,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return i.slice(0,a);case"'":return i.slice(s);case"<":o=l[n.slice(1,-1)];break;default:var u=+n;if(0===u)return t;if(u>c){var d=f(u/10);return 0===d?t:d<=c?void 0===r[d-1]?n.charAt(1):r[d-1]+n.charAt(1):t}o=r[u-1]}return void 0===o?"":o}))}}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var a=i("1d80"),r=i("5899"),n="["+r+"]",l=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),s=function(e){return function(t){var i=String(a(t));return 1&e&&(i=i.replace(l,"")),2&e&&(i=i.replace(o,"")),i}};e.exports={start:s(1),end:s(2),trim:s(3)}},"5e89":function(e,t,i){var a=i("861d"),r=Math.floor;e.exports=function(e){return!a(e)&&isFinite(e)&&r(e)===e}},7156:function(e,t,i){var a=i("861d"),r=i("d2bb");e.exports=function(e,t,i){var n,l;return r&&"function"==typeof(n=t.constructor)&&n!==i&&a(l=n.prototype)&&l!==i.prototype&&r(e,l),e}},"7cdd":function(e,t,i){"use strict";var a=i("802d"),r=i.n(a);r.a},"802d":function(e,t,i){},"8ba4":function(e,t,i){var a=i("23e7"),r=i("5e89");a({target:"Number",stat:!0},{isInteger:r})},"940a":function(e,t,i){e.exports=i.p+"img/addrs.d7091055.png"},a9e3:function(e,t,i){"use strict";var a=i("83ab"),r=i("da84"),n=i("94ca"),l=i("6eeb"),o=i("5135"),s=i("c6b6"),c=i("7156"),u=i("c04e"),d=i("d039"),m=i("7c73"),f=i("241c").f,h=i("06cf").f,v=i("9bf2").f,p=i("58a8").trim,b="Number",g=r[b],_=g.prototype,y=s(m(_))==b,A=function(e){var t,i,a,r,n,l,o,s,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=p(c),t=c.charCodeAt(0),43===t||45===t){if(i=c.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+c}for(n=c.slice(2),l=n.length,o=0;o<l;o++)if(s=n.charCodeAt(o),s<48||s>r)return NaN;return parseInt(n,a)}return+c};if(n(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var F,k=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof k&&(y?d((function(){_.valueOf.call(i)})):s(i)!=b)?c(new g(A(t)),i,k):A(t)},w=a?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)o(g,F=w[E])&&!o(k,F)&&v(k,F,h(g,F));k.prototype=_,_.constructor=k,l(r,b,k)}},f15f:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"body"},[a("div",{staticClass:"content"},[a("div",{staticClass:"user_info"},[a("div",{staticClass:"info"},[a("div",{staticClass:"info_tip"},[e._v("账号信息")]),a("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogFormVisible=!0}}},[a("div",{staticClass:"img_bnt"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:i("43c9")}})]),a("div",{staticClass:"btn"},[e._v("编辑")])])]),a("el-dialog",{attrs:{customClass:"customWidth",title:"修改账户信息",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"customForm",attrs:{model:e.form,rules:e.formRules}},[a("el-form-item",{attrs:{label:"账户昵称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.nick_name,callback:function(t){e.$set(e.form,"nick_name",t)},expression:"form.nick_name"}})],1),a("el-form-item",{attrs:{label:"所属行业","label-width":e.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.selectChanged},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},e._l(e.industrylist,(function(e){return a("el-option",{key:e.industry_id,attrs:{label:e.industry_name,value:e.industry_id}})})),1)],1),a("el-form-item",{attrs:{prop:"email",label:"绑定邮箱","label-width":e.formLabelWidth}},[a("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}},[e.emailcod?a("el-button",{staticStyle:{"background-color":"#147FF9",color:"#fff"},attrs:{slot:"append",type:"primary"},on:{click:function(t){return e.sende()}},slot:"append"},[e._v("发送验证码")]):a("el-button",{attrs:{slot:"append",type:"primary"},slot:"append"},[e._v(" "+e._s(e.emailtime)+"s后发送")])],1)],1),a("el-form-item",{attrs:{label:"邮箱验证码","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.verify_email,callback:function(t){e.$set(e.form,"verify_email",t)},expression:"form.verify_email"}})],1),a("el-form-item",{attrs:{prop:"mobile",label:"绑定手机","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}},[e.phonecod?a("el-button",{staticStyle:{"background-color":"#147FF9",color:"#fff"},attrs:{slot:"append",type:"primary"},on:{click:function(t){return e.authCode()}},slot:"append"},[e._v(" 发送验证码")]):a("el-button",{attrs:{slot:"append",type:"primary"},slot:"append"},[e._v(" "+e._s(e.phonetime)+"s后发送")])],1)],1),a("el-form-item",{attrs:{label:"手机验证码","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.verify_mobile,callback:function(t){e.$set(e.form,"verify_mobile",t)},expression:"form.verify_mobile"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.popcancel}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1)],1),a("div",{staticClass:"user"},[a("div",{staticClass:"nickname"},[e._v("账户昵称"),a("span",[e._v(e._s(e.userinfo.nick_name))])]),a("div",{staticClass:"industry"},[e._v("所属行业"),a("span",[e._v(e._s(e.userinfo.industry_name))])]),a("div",{staticClass:"email"},[e._v("绑定邮箱 "),e.userinfo.email?e._e():a("span",[e._v("暂无信息")]),e.userinfo.email?a("span",[e._v(e._s(e.userinfo.email))]):e._e()]),a("div",{staticClass:"phone"},[e._v("绑定手机 "),e.userinfo.mobile?e._e():a("span",[e._v("暂无信息")]),e.userinfo.mobile?a("span",[e._v(e._s(e.userinfo.mobile))]):e._e()])])])]),a("div",{staticClass:"content"},[a("div",{staticClass:"user_info"},[a("div",{staticClass:"info"},[a("div",{staticClass:"info_tip"},[e._v("收货信息")]),a("el-button",{attrs:{type:"text"},on:{click:e.addrsspopclk}},[a("div",{staticClass:"img_bnt"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:i("17cc")}})]),a("div",{staticClass:"btn"},[e._v("新增收货地址")])])]),a("el-dialog",{attrs:{title:"添加地址信息",visible:e.addrsspop},on:{"update:visible":function(t){e.addrsspop=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"收货人",prop:"name"}},[a("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),a("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[a("el-input",{model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),a("el-form-item",{attrs:{label:"收件邮箱",prop:"email"}},[a("el-input",{model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),a("div",[a("el-form-item",{attrs:{label:"拍摄地址",prop:"valueAdress"}},[a("div",{staticClass:"man_bg"},[a("el-select",{staticStyle:{width:"33%"},attrs:{placeholder:"请选择"},on:{change:e.stair},model:{value:e.ruleForm.valueAdress,callback:function(t){e.$set(e.ruleForm,"valueAdress",t)},expression:"ruleForm.valueAdress"}},e._l(e.onlist,(function(e,t){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),a("el-select",{attrs:{stle:"width: 33%",placeholder:"请选择"},on:{change:e.secondary},model:{value:e.valueb,callback:function(t){e.valueb=t},expression:"valueb"}},e._l(e.secondarylist,(function(e,t){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),a("el-select",{staticStyle:{width:"33%"},attrs:{placeholder:"请选择"},on:{change:e.threeLevel},model:{value:e.valuec,callback:function(t){e.valuec=t},expression:"valuec"}},e._l(e.threelist,(function(e,t){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)])],1),a("el-form-item",{attrs:{label:"详细地址",prop:"address"}},[a("el-input",{model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1),a("el-form-item",{attrs:{prop:"delivery","label-width":"21px"}},[a("el-switch",{attrs:{"active-color":"#13ce66","active-text":"是否设置为默认地址"},model:{value:e.ruleForm.default,callback:function(t){e.$set(e.ruleForm,"default",t)},expression:"ruleForm.default"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("清空")]),e.addoramend?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.reserveadd("ruleForm")}}},[e._v("保存地址")]):e._e(),e.addoramend?e._e():a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.reserveamend("ruleForm")}}},[e._v("确认修改")])],1)],1)],1),0==e.siteList.length?a("div",{staticClass:"user"},[e._m(0),a("div",{staticClass:"nothing"},[e._v("您的收货信息空空如也，快点"),a("span",{staticClass:"addx",on:{click:e.addrsspopclk}},[e._v("添加")]),e._v("您的收货信息吧")])]):a("div",{staticClass:"man_cont"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.siteList}},[a("el-table-column",{attrs:{prop:"name",label:"收件人",width:"100"}}),a("el-table-column",{attrs:{prop:"phone",label:"联系电话",width:"130"}}),a("el-table-column",{attrs:{prop:"email",label:"收件邮箱",width:"210"}}),a("el-table-column",{attrs:{prop:"addresstxt",label:"拍摄地址",width:"210"}}),a("el-table-column",{attrs:{prop:"handle",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"cursora",attrs:{size:"mini"},on:{click:function(i){return e.handleadd(t.row)}}},[e._v("编辑")]),a("div",{staticClass:"cursora",attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])}),a("el-table-column",{attrs:{prop:"default",label:"默认地址",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66",align:"center"},on:{change:function(i){return e.changeswi(t.row)}},model:{value:t.row.defaultx,callback:function(i){e.$set(t.row,"defaultx",i)},expression:"scope.row.defaultx"}})]}}])})],1)],1)])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addr_img"},[a("img",{attrs:{src:i("940a")}})])}],n=(i("b0c0"),i("a9e3"),i("8ba4"),i("ac1f"),i("5319"),i("5381")),l={name:"management",data:function(){var e=function(e,t,i){var a=/^1[3|4|5|6|7|8][0-9]{9}$/;if(!t)return i(new Error("电话号码不能为空"));setTimeout((function(){Number.isInteger(+t)?a.test(t)?i():i(new Error("电话号码格式不正确")):i(new Error("请输入数字值"))}),100)};return{phonecod:!0,emailcod:!0,emailtime:60,phonetime:60,options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",valuea:"",valueb:"",valuec:"",addoramend:!0,siteList:[],valuebx:11e4,valuecx:0,secondarylist:[],onlist:[],threelist:[],industrylist:[],value1:"",provinceList:[],cityList:[],areaList:[],provinceCode:"",cityCode:"",areaCode:"",cityFlag:!1,provinceFlag:!1,areaFlag:!1,userinfo:[],dialogTableVisible:!1,dialogFormVisible:!1,addrsspop:!1,form:{nick_name:"",email:"",mobile:"",industry:0,verify_email:"",verify_mobile:""},formRules:{email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],mobile:[{validator:e,message:"请输入正确的号码",trigger:"blur"}]},ruleForm:{name:"",county__id:0,phone:"",email:"",default:!1,address:"",valueAdress:""},rules:{name:[{required:!0,message:"请输入收货人地址",trigger:"change"}],phone:[{required:!0,validator:e,trigger:"change"}],email:[{required:!0,message:"请输入收货人邮箱",trigger:"change"},{type:"email",message:"请输入正确的邮箱",trigger:"blur"}],valueAdress:[{required:!0,message:"请选择收货地址",trigger:"change"}],address:[{required:!0,message:"请输入收货人详细地址",trigger:"change"}]},formLabelWidth:"120px"}},computed:{span:function(){return this.hideCity?24:this.hideArea?12:8}},watch:{},created:function(){},methods:{addrsspopclk:function(){this.resetForm(),this.addrsspop=!0,this.addoramend=!0},select:function(){var e=this;Object(n["y"])().then((function(t){var i=t;e.userinfo=i,e.form.nick_name=i.nick_name,e.form.industry=i.industry,e.form.email=i.email,e.form.mobile=i.mobile,e.value1=i.industry_name})).catch((function(e){}))},changeswi:function(e){var t={address_id:e.id},i={name:e.name,county__id:e.county__id,phone:e.phone,email:e.email,default:e.defaultx,address:e.address};console.log(i),this.amendadrs(t,i)},amendadrs:function(e,t){var i=this;Object(n["c"])(e,t).then((function(e){i.adrchaxun()})).catch((function(e){}))},handleDelete:function(e){var t=this;console.log(e),this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!1}).then((function(){var i={id:e.id};Object(n["i"])(i).then((function(e){t.adrchaxun()})).catch((function(e){}))})).catch((function(){}))},deleteall:function(){this.ruleForm={name:"",county__id:0,phone:"",email:"",default:!1,address:""}},seletuser:function(){var e=this;this.select(),this.adrchaxun(),Object(n["n"])().then((function(t){var i=t.res;e.industrylist=i})).catch((function(e){}))},adrchaxun:function(){var e=this;Object(n["v"])().then((function(t){var i=t.res;for(var a in i=JSON.parse(JSON.stringify(i).replace(/default/g,"defaultx")),i)i[a]["addresstxt"]=i[a].region__name+" "+i[a].city__name+" "+i[a].county__name+" "+i[a].address;e.siteList=i})).catch((function(e){}))},selectChanged:function(e){this.form.industry=e,console.log(e)},onSubmit:function(){var e=this,t=this.form;Object(n["o"])(t).then((function(t){t.error?e.$message.error(t.error):(e.dialogFormVisible=!1,e.select())})).catch((function(e){console.log(e)})),console.log(this.form)},popcancel:function(){this.dialogFormVisible=!1,this.form.verify_email="",this.form.verify_mobile=""},authCode:function(){var e=this;if(this.form.mobile)if(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.form.mobile)){var t={mobile:this.form.mobile},i=this;i.phonecod=!1,console.log(this.form),Object(n["s"])(t).then((function(t){var a=60,r=setInterval((function(){a>0?(a-=1,i.phonetime=a):(i.phonecod=!0,clearInterval(r),i.emailtime=60),i.phonetime=a}),1e3);t.error&&e.$message({type:"error",message:t.error})})).catch((function(e){}))}else this.$message({type:"error",message:"手机格式不正确"});else this.$message({type:"error",message:"请输入手机号码"})},sende:function(){if(console.log(this.form.email),this.form.email){var e=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(e.test(this.form.email)){var t={email:this.form.email},i=this,a=this.emailtime;Object(n["j"])(t).then((function(e){i.emailcod=!1;var t=setInterval((function(){a>0?(a-=1,i.emailtime=a):(i.emailcod=!0,clearInterval(t),i.emailtime=60)}),1e3)})).catch((function(e){}))}else this.$message({type:"error",message:"邮箱格式不正确"})}else this.$message({type:"error",message:"请输入邮箱"})},reserveadd:function(e){var t=this;console.log(this.ruleForm),this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var i=t.ruleForm;Object(n["a"])(i).then((function(e){t.addrsspop=!1,t.adrchaxun()})).catch((function(e){}))}))},reserveamend:function(e){var t=this;this.$refs[e].validate((function(e){if(console.log(t.ruleForm),!e)return console.log("error submit!!"),!1;var i=t.ruleForm,a=JSON.parse(JSON.stringify(i).replace(/county__id/g,"county__id"));0!=t.ruleForm.county__id?a.county__id=t.ruleForm.county__id:a.county__id=t.numberid;var r={address_id:t.nunid};t.amendadrs(r,a),t.addrsspop=!1}))},resetForm:function(e){this.ruleForm={name:"",county__id:0,phone:"",email:"",default:!1,address:""},this.valuea="",this.valueb="",this.valuec=""},stair:function(e){for(var t in console.log(e),this.addrval=e,this.value=e,console.log(this.ruleForm),console.log("==================="),this.onlist)this.onlist[t].id==e&&(this.secondarylist=this.onlist[t].children,this.valueb=this.secondarylist[0].name,console.log(this.secondarylist[0].id),this.secondary(this.secondarylist[0].id))},secondary:function(e){for(var t in console.log(e),this.onlist)if(this.onlist[t].id==this.addrval)for(var i in this.onlist[t].children)this.onlist[t].children[i].id==e&&(this.threelist=this.onlist[t].children[i].children,this.valuec=this.threelist[0].name,this.ruleForm.county__id=this.threelist[0].id,console.log(this.threelist[0].id),console.log(this.threelist[0].name),console.log(this.ruleForm))},threeLevel:function(e){console.log(this.threelist),this.ruleForm.county__id=e},handleadd:function(e){console.log(e),console.log("===========到账==============="),this.addrsspop=!0,this.addoramend=!1,this.ruleForm={name:e.name,county__id:e.county__id,phone:e.phone,email:e.email,default:e.defaultx,address:e.address,valuea:e.region__name,valueAdress:e.region__name},this.value=this.ruleForm.region__name,this.stair(e.region__id),this.secondary(e.city__id),this.value=e.region__name,this.valueb=e.city__name,this.valuec=e.county__name,this.nunid=e.id,this.numberid=e.county__id},layered:function(){var e=this,t={level:2};Object(n["b"])(t).then((function(t){var i=t.result;e.onlist=i})).catch((function(e){}))},editor:function(){}},mounted:function(){this.seletuser(),this.layered()}},o=l,s=(i("7cdd"),i("2877")),c=Object(s["a"])(o,a,r,!1,null,"d1d6944a",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-77858578.2810e9ff.js.map