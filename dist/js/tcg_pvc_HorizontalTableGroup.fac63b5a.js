(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tcg_pvc_HorizontalTableGroup"],{1723:function(t,a,e){"use strict";var o=e("573e"),l=e.n(o);l.a},"1b4b":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[this.$props.options.filters?e("div",{staticClass:"mb-horizontal-table-controls"},t._l(this.$props.options.filters,function(a,o){return e("div",{staticClass:"inline-block",attrs:{id:"filter-"+o}},[e("div",{staticClass:"vertically-centered mb-select-text"},[t._v(t._s(a.label))]),e("select",{staticClass:"mb-select",on:{change:t.handleFilterValueChange}},[e("optgroup",t._l(a.values,function(a){return e("option",{staticClass:"mb-select-option",domProps:{value:t.slugifyFilterValue(a)}},[t._v("\n            "+t._s(a.label)+"\n          ")])}),0)])])}),0):t._e(),t._l(t.options.tables,function(a){return e("horizontal-table",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowTable(a.options.id),expression:"shouldShowTable(table.options.id)"}],attrs:{item:t.tableGroupData,options:a.options,slots:a.slots}})})],2)},l=[],i=e("768b"),n=(e("f000"),e("5d73")),s=e.n(n),r=(e("5adb"),e("f577")),u={mixins:[r["a"]],components:{HorizontalTable:function(){return Promise.all([e.e("htg_pvc_HorizontalTable~tcg_pvc_HorizontalTable~tcg_pvc_ePayForm"),e.e("htg_pvc_HorizontalTable")]).then(e.bind(null,"efca"))}},data:function(){var t={tableGroupId:this.options.horizontalTableGroupId,activeTable:null,activeTableId:null};return{tableGroupData:t}},created:function(){if(console.log("horizontalTableGroup created is starting, this.tableGroupData:",this.tableGroupData),this.options.filters){console.log("horizontalTableGroup created, if this.options.filters is running:",this.options.filters,this.options.filters.entries());var t=!0,a=!1,e=void 0;try{for(var o,l=s()(this.options.filters);!(t=(o=l.next()).done);t=!0){var i=o.value;console.log("for loop, this.options.filters:",this.options.filters[0]),console.log("for loop, filter:",i);var n=i.values[0].value||{};console.log("for loop, defaultTableName:",n),this.tableGroupData.activeTable=n;var r=!0,u=!1,c=void 0;try{for(var p,b=s()(this.options.tables);!(r=(p=b.next()).done);r=!0){var h=p.value;h.options.id===n&&(this.tableGroupData.activeTableId=h._id)}}catch(v){u=!0,c=v}finally{try{r||null==b.return||b.return()}finally{if(u)throw c}}console.log("horizontalTableGroup this.tableGroupData:",this.tableGroupData),this.$store.commit("setHorizontalTableGroupActiveTable",this.tableGroupData)}}catch(v){a=!0,e=v}finally{try{t||null==l.return||l.return()}finally{if(a)throw e}}console.log("horizontalTableGroup created, if this.options.filters is ending")}if(this.options.alternate){console.log("horizontalTableGroup created, if this.options.alternate - mainTable",this.options.alternate.mainTable,this.altMainTable,"dependentTable",this.options.alternate.dependentTable,this.altDepTable);var d=this.$store.state.sources;d[this.altDepTable.dataSource].data&&!d[this.altMainTable.dataSource].data?(this.activeTable=this.altDepTable.id,this.activeTableId="aaa",this.$store.commit("setHorizontalTableGroupActiveTable",this.tableGroupData)):d[this.altMainTable.dataSource].data&&(this.activeTable=this.altMainTable.id,this.activeTableId="bbb",this.$store.commit("setHorizontalTableGroupActiveTable",this.tableGroupData))}this.options.showBoth&&console.log("tableGroup showBoth")},computed:{altMainTable:function(){return this.options.alternate?this.options.alternate.mainTable:null},altDepTable:function(){return this.options.alternate?this.options.alternate.dependentTable:null}},methods:{shouldShowTable:function(t){var a=!0;return this.tableGroupData.activeTable!=t&&(a=!1),a},slugifyFilterValue:function(t){var a=t.direction,e=t.value,o=t.unit;return[a,e,o].join("-")},deslugifyFilterValue:function(t){var a=t.split("-"),e=Object(i["a"])(a,3),o=e[0],l=e[1],n=e[2];return{value:l,unit:n,direction:o}},handleFilterValueChange:function(t){console.log("handle activeTable value change",t);var a=t.target,e=a.value,o=this.deslugifyFilterValue(e),l=o.value;this.tableGroupData.activeTable=l;var i=!0,n=!1,r=void 0;try{for(var u,c=s()(this.options.tables);!(i=(u=c.next()).done);i=!0){var p=u.value;console.log("tableName:",l,"comp.options.id:",p.options.id,"comp:",p),p.options.id===l&&(this.tableGroupData.activeTableId=p._id)}}catch(b){n=!0,r=b}finally{try{i||null==c.return||c.return()}finally{if(n)throw r}}console.log("handleFilterValueChange, this.tableGroupData:",this.tableGroupData),this.$store.commit("setHorizontalTableGroupActiveTable",this.tableGroupData)}}},c=u,p=(e("1723"),e("2877")),b=Object(p["a"])(c,o,l,!1,null,"c9649164",null);a["default"]=b.exports},"573e":function(t,a,e){}}]);
//# sourceMappingURL=tcg_pvc_HorizontalTableGroup.fac63b5a.js.map