(function(t){function a(a){for(var n,r,i=a[0],c=a[1],s=a[2],u=0,h=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(a);while(h.length)h.shift()();return l.push.apply(l,s||[]),e()}function e(){for(var t,a=0;a<l.length;a++){for(var e=l[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==o[c]&&(n=!1)}n&&(l.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},o={dashboard:0},l=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var s=0;s<i.length;s++)a(i[s]);var d=c;l.push([3,"chunk-vendors","chunk-common"]),e()})({2343:function(t,a,e){},"2f4e":function(t,a,e){"use strict";e.r(a);e("e623"),e("e379"),e("5dc8"),e("37e1");var n=e("7b01"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Dashboard"),t._v(", "),e("Navbar")],1)},l=[],r=e("5b4c"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.loading?e("div",[t._m(0),e("div",{staticClass:"bg"})]):e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"medium"},[e("line-chart",{staticClass:"chart",attrs:{"chart-data":t.datacollection}})],1)]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"medium"},[e("bar-chart",{staticClass:"chart",attrs:{"chart-data":t.datacollection1}})],1)]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"medium"},[e("line-chart",{staticClass:"chart",attrs:{"chart-data":t.datacollection2}})],1)])]),e("div",{staticClass:"mlchart"},[e("line-chart",{staticClass:"chart",attrs:{"chart-data":t.datacollection3}})],1),e("div",{staticClass:"dataform"},[e("h4",[t._v(" Enter Stock Symbol")]),e("ul",[e("label",{staticClass:"pull-left"},[t._v(" Stock ID ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.new_data.x_value,expression:"new_data.x_value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Date"},domProps:{value:t.new_data.x_value},on:{input:function(a){a.target.composing||t.$set(t.new_data,"x_value",a.target.value)}}})]),e("button",{staticClass:"btn btn-block btn-primary",on:{click:t.addToAPI}},[t._v("Process Data")]),e("button",{staticClass:"btn btn-block btn-primary",on:{click:t.fillData}},[t._v("Update Chart")]),e("button",{staticClass:"btn btn-block btn-primary",on:{click:t.addToAPIML}},[t._v("Process Data Machine Learning")]),e("button",{staticClass:"btn btn-block btn-primary",on:{click:t.fillDataML}},[t._v("Update Chart Machine Learning")])])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"brand_landing"},[e("div",{attrs:{id:"landing"}},[e("p",[t._v("loading...")])])])}],s=(e("3119"),e("4bd8")),d=e("3fdc"),u=e("62c3"),h=e.n(u),p=(e("5b9e"),e("6210"),{components:{LineChart:s["a"],BarChart:d["a"]},data:function(){return{datacollection:null,datacollection1:null,datacollection2:null,datacollection3:null,loading:!1,new_data:{x_value:"096770"}}},mounted:function(){this.fillData(),this.fillDataML()},methods:{fillData:function(){var t="http://localhost:5000/processed_data";h.a.get(t).then(function(t){for(var a=[],e=[],n=[],o=[],l=[],r=[],i=0;i<t.data.length;i++){var c=t.data[i];a.push(c["Date"]),e.push(parseInt(c["Close"])),n.push(c["Date"]),o.push(parseInt(c["Volume"])),l.push(c["Date"]),r.push(parseInt(c["DJI_Close"]))}var s={labels:a,datasets:[{label:"Closing Price by Date",fill:!1,data:e,borderColor:"#ffb6c1",backgroundColor:"#ffb6c1",borderWidth:1,pointRadius:1}]},d={labels:n,datasets:[{label:"Volume by Date",fill:!1,data:o,borderColor:"#2554FF",backgroundColor:"#2554FF",borderWidth:1,pointRadius:1}]},u={labels:l,datasets:[{label:"Dow Jones Index Closing Price by Date",fill:!1,data:r,borderColor:"#90EE90",backgroundColor:"#90EE90",borderWidth:1,pointRadius:1}]};this.datacollection=s,this.datacollection1=d,this.datacollection2=u,console.log(this.datacollection)}.bind(this)).catch((function(t){console.log(t)}))},fillDataML:function(){var t="http://localhost:5000/model_fitting";h.a.get(t).then(function(t){for(var a=[],e=[],n=0;n<t.data.length;n++){var o=t.data[n];a.push(o["Date"]),e.push(parseInt(o["Pred_Close"]))}var l={labels:a,datasets:[{label:"Predicted Price by Date",fill:!1,data:e,borderColor:"#90EE90",backgroundColor:"#90EE90",borderWidth:1,pointRadius:1}]};this.datacollection3=l,console.log(this.datacollection)}.bind(this)).catch((function(t){console.log(t)}))},addToAPI:function(){var t=this,a={stock_id:this.new_data.x_value};console.log(a),this.loading=!0,h.a.post("http://localhost:5000/processed_data",a).then((function(a){alert("Complete! Now Update Chart"),t.response=a.data,console.log(a)})).catch((function(t){console.log(t)})).finally((function(){return t.loading=!1}))},addToAPIML:function(){var t=this;this.loading=!0,h.a.post("http://localhost:5000/model_fitting").then((function(a){alert("Complete! Now Update Chart"),t.response=a.data,console.log(a)})).catch((function(t){console.log(t)})).finally((function(){return t.loading=!1}))}}}),f=p,b=(e("8823"),e("2877")),v=Object(b["a"])(f,i,c,!1,null,null,null),g=v.exports,m={name:"App",components:{Dashboard:g,Navbar:r["a"]}},C=m,_=(e("b9d7"),Object(b["a"])(C,o,l,!1,null,null,null)),y=_.exports,w=e("a18c");n["a"].config.productionTip=!1,new n["a"]({router:w["a"],render:function(t){return t(y)}}).$mount("#app")},3:function(t,a,e){t.exports=e("2f4e")},"4cd4":function(t,a,e){},8823:function(t,a,e){"use strict";var n=e("4cd4"),o=e.n(n);o.a},b9d7:function(t,a,e){"use strict";var n=e("2343"),o=e.n(n);o.a}});
//# sourceMappingURL=dashboard.2b15b3e1.js.map