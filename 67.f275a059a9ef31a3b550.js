"use strict";(self.webpackChunksmartlocker_workspace=self.webpackChunksmartlocker_workspace||[]).push([[67],{4067:(tt,P,s)=>{s.r(P),s.d(P,{PostofficesModule:()=>j});var p=s(8583),v=s(9895),t=s(7716);let O=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cms-postman"]],decls:2,vars:0,template:function(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"postman works!"),t.qZA())},styles:[""]}),e})();var y=s(9023);class M{constructor(i){this.parse(i)}parse(i){this.id=i.id,this.maBuuCuc=i.maBuuCuc,this.id=i.id,this.name=i.name,this.description=i.description,this.address=i.address,this.maQuanHuyen=i.maQuanHuyen,this.maTinh=i.maTinh,this.maChiNhanh=i.maChiNhanh,this.maVung=i.maVung,this.latitude=i.latitude,this.longitude=i.longitude,this.phuongXa=i.phuongXa,this.capBuuCuc=i.capBuuCuc}}var m=s(9765),T=s(1841);let S=(()=>{class e{constructor(n){this.http=n,this.provinceSelectes$=new m.xQ,this.distSelectes$=new m.xQ,this.wardSelectes$=new m.xQ}selectProvinceTab(){this.provinceSelectes$.next()}selectDistTab(){this.distSelectes$.next()}selectWardTab(){this.wardSelectes$.next()}getAllBuuCuc(n=0,o=10,a,l,u,f){let c="smartlocker/api/v1/buu-cucs?page="+n+"&size="+o;return a&&""!==a.trim()&&(c=c.concat("&maBuuCuc.contains=",a.trim())),l&&""!==l.trim()&&(c=c.concat("&maTinh.equals=",l)),null!=u&&(c=c.concat("&maQuanHuyen.equals=",u)),null!=f&&(c=c.concat("&phuongXaId.equals="+f)),this.http.get(c)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(T.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var z=s(9090),x=s(7570),w=s(1450),C=s(6704),E=s(4514),g=s(7674),h=s(3679),d=s(7190),_=s(269),Z=s(4453),J=s(9374),r=s(471),A=s(3599);function N(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"i",20),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).keyword=null}),t.qZA()}}function Q(e,i){if(1&e&&t.YNc(0,N,1,0,"i",19),2&e){const n=t.oxw();t.Q6J("ngIf",n.keyword)}}function F(e,i){1&e&&t._UZ(0,"i",21)}function B(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"nz-auto-option",22),t.NdJ("click",function(){const l=t.CHM(n).$implicit;return t.oxw().seachKeyword(l.ma_buu_cuc)}),t._uU(1),t.qZA()}if(2&e){const n=i.$implicit;t.Q6J("nzValue",n.ma_buu_cuc),t.xp6(1),t.hij(" ",n.ma_buu_cuc?n.name?n.ma_buu_cuc.concat(" - ",n.name):n.ma_buu_cuc:"","")}}function D(e,i){if(1&e&&t._UZ(0,"nz-option",23),2&e){const n=i.$implicit;t.Q6J("nzValue",n.maTinh)("nzLabel",n.name)}}function I(e,i){if(1&e&&t._UZ(0,"nz-option",23),2&e){const n=i.$implicit;t.Q6J("nzValue",n.id)("nzLabel",n.tenQuanHuyen)}}function b(e,i){if(1&e&&t._UZ(0,"nz-option",23),2&e){const n=i.$implicit;t.Q6J("nzValue",n.id)("nzLabel",n.name)}}function U(e,i){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td",24),t._uU(2),t.qZA(),t.TgZ(3,"td",24),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.qZA()),2&e){const n=i.$implicit;t.xp6(2),t.Oqu(n.maBuuCuc),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.address)}}function Y(e,i){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.hij("T\u1ed5ng ",n.total," b\u1ea3n ghi")}}function L(e,i){if(1&e&&t.YNc(0,Y,2,1,"span",25),2&e){const n=t.oxw();t.Q6J("ngIf",n.total)}}const V=[{path:"",children:[{path:"",component:(()=>{class e{constructor(n,o,a,l){this.postService=n,this.baseSevice=o,this.storeService=a,this.elastic=l,this.page=1,this.size=10,this.total=0,this.listOfCode=[]}seachKeyword(n){this.keyword=n,this.page=1,this.getAllPostOffice()}onChangeKeyword(n){this.inputKeyword(n)}inputKeyword(n){this.listOfCode=[],this.elastic.getBuuCucSearchElas(n).subscribe(o=>{0==o.error&&this.responseProcessCode(o)},o=>{console.log("Kh\xf4ng g\u01b0i \u0111\u01b0\u1ee3c th\xf4ng tin l\u1ea5y b\u01b0u c\u1ee5c",o)})}responseProcessCode(n){n.data&&n.data.forEach(o=>{let a=new y.y3(o);this.listOfCode.push(a)})}onFocusEventKeyword(n){this.inputKeyword("H\xe0 N\u1ed9i")}ngOnInit(){this.page=1,this.size=10,this.getAllPostOffice(),this.getProvince()}getAllPostOffice(){this.baseSevice.showLoading(!0),this.postService.getAllBuuCuc(this.page-1,this.size,this.keyword,this.provinceName,this.distName,this.wardName).subscribe(n=>{this.baseSevice.showLoading(!1),0==n.error&&(this.listPost=[],this.total=n.data.total,n.data.data.forEach(o=>{let a=new M(o);this.listPost.push(a)}))})}getProvince(){this.storeService.getAllProvince().subscribe(n=>{0==n.error&&(this.listOfProvince=n.data.data)})}changeSearch(n){this.listOfProvince=[],this.storeService.getAllProvince().subscribe(o=>{0==o.error&&o.data.data.forEach(a=>{a.name===n&&this.listOfProvince.push(a)})})}reload(){this.page=1,this.size=10,this.getAllPostOffice()}pageChange(n){this.page=n,this.getAllPostOffice()}sizeChange(n){this.size=n,this.getAllPostOffice()}provinceChange(n){this.provinceName=n,null!=n?this.storeService.getDistByProvince(n).subscribe(o=>{0==o.error&&(this.distChange(null),this.listOfDist=o.data.data)}):(this.listOfDist=[],this.distName=null,this.wardName=null,this.distChange(null)),this.page=1,this.size=10,this.getAllPostOffice()}distChange(n){if(this.distId=n,null!=n){for(let o=0;o<this.listOfDist.length;o++)if(n==this.listOfDist[o].id){this.distName=this.listOfDist[o].maQuanHuyen;break}this.storeService.getWardByDist(n).subscribe(o=>{0==o.error&&(this.wardChange(null),this.listOfWard=o.data.data)})}else this.listOfWard=[],this.wardName=null,this.wardChange(null);this.page=1,this.size=10,this.getAllPostOffice()}wardChange(n){if(this.wardId=n,null!=n)for(let o=0;o<this.listOfDist.length;o++)if(n==this.listOfWard[o].id){this.wardName=this.listOfWard[o].id;break}this.page=1,this.size=10,this.getAllPostOffice()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(S),t.Y36(z.bQ),t.Y36(x.d),t.Y36(w.B))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cms-postoffices"]],decls:38,vars:21,consts:[[3,"title","close"],["content","",1,"my-3","mx-0","mx-md-3"],["nz-row","",1,"mt-5","mb-4","filter-panel",3,"nzGutter"],["nz-col","","nzXs","8","nzSm","5","nzMd","5","nzLg","5","nzXl","4","nzXXl","4",1,"mb-2","mt-4"],[3,"nzSuffix","nzPrefix"],["id","inputSearch","placeholder","T\xecm ki\u1ebfm","nz-input","","nzAllowClear","",3,"ngModel","nzAutocomplete","ngModelChange","focus"],["suffixIcon",""],["prefixIcon",""],["auto",""],[3,"nzValue","click",4,"ngFor","ngForOf"],["nzShowSearch","","nzPlaceHolder","Ch\u1ecdn t\u1ec9nh/th\xe0nh","nzAllowClear","",2,"width","100%",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzPlaceHolder","Ch\u1ecdn qu\u1eadn/huy\u1ec7n","nzAllowClear","",2,"width","100%",3,"ngModel","ngModelChange"],["nzPlaceHolder","Ch\u1ecdn Ph\u01b0\u1eddng/X\xe3","nzAllowClear","",2,"width","100%",3,"ngModel","ngModelChange"],["nz-col","","nzXs","6","nzSm","4","nzMd","4","nzLg","4","nzXl","3","nzXXl","2",1,"mb-2","mt-4"],["nz-button","","nzType","primary","nzBlock","",3,"click"],["nzShowSizeChanger","",1,"mt-3",3,"nzData","nzFrontPagination","nzPageSize","nzPageIndex","nzTotal","nzFooter","nzPageSizeChange","nzPageIndexChange"],[4,"ngFor","ngForOf"],["footer",""],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nz-icon","","nzType","search"],[3,"nzValue","click"],[3,"nzValue","nzLabel"],[1,"text-bold"],[4,"ngIf"]],template:function(n,o){if(1&n&&(t.TgZ(0,"cms-page",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"nz-input-group",4),t.TgZ(5,"input",5),t.NdJ("ngModelChange",function(l){return o.keyword=l})("ngModelChange",function(l){return o.onChangeKeyword(l)})("focus",function(l){return o.onFocusEventKeyword(l)}),t.qZA(),t.qZA(),t.YNc(6,Q,1,1,"ng-template",null,6,t.W1O),t.YNc(8,F,1,0,"ng-template",null,7,t.W1O),t.TgZ(10,"nz-autocomplete",null,8),t.YNc(12,B,2,2,"nz-auto-option",9),t.qZA(),t.qZA(),t.TgZ(13,"div",3),t.TgZ(14,"nz-select",10),t.NdJ("ngModelChange",function(l){return o.provinceChange(l)}),t.YNc(15,D,1,2,"nz-option",11),t.qZA(),t.qZA(),t.TgZ(16,"div",3),t.TgZ(17,"nz-select",12),t.NdJ("ngModelChange",function(l){return o.distChange(l)}),t.YNc(18,I,1,2,"nz-option",11),t.qZA(),t.qZA(),t.TgZ(19,"div",3),t.TgZ(20,"nz-select",13),t.NdJ("ngModelChange",function(l){return o.wardChange(l)}),t.YNc(21,b,1,2,"nz-option",11),t.qZA(),t.qZA(),t.TgZ(22,"div",14),t.TgZ(23,"button",15),t.NdJ("click",function(){return o.reload()}),t._uU(24," T\xecm ki\u1ebfm "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"nz-table",16),t.NdJ("nzPageSizeChange",function(l){return o.sizeChange(l)})("nzPageIndexChange",function(l){return o.pageChange(l)}),t.TgZ(26,"thead"),t.TgZ(27,"tr"),t.TgZ(28,"th"),t._uU(29,"M\xe3 B\u01b0u C\u1ee5c"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"T\xean B\u01b0u c\u1ee5c"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"\u0110\u1ecba ch\u1ec9"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"tbody"),t.YNc(35,U,7,3,"tr",17),t.qZA(),t.YNc(36,L,1,1,"ng-template",null,18,t.W1O),t.qZA(),t.qZA(),t.qZA()),2&n){const a=t.MAs(7),l=t.MAs(9),u=t.MAs(11),f=t.MAs(37);t.Q6J("title","Qu\u1ea3n l\xfd b\u01b0u c\u1ee5c")("close",!1),t.xp6(2),t.Q6J("nzGutter",12),t.xp6(2),t.Q6J("nzSuffix",a)("nzPrefix",l),t.xp6(1),t.Q6J("ngModel",o.keyword)("nzAutocomplete",u),t.xp6(7),t.Q6J("ngForOf",o.listOfCode),t.xp6(2),t.Q6J("ngModel",o.provinceId),t.xp6(1),t.Q6J("ngForOf",o.listOfProvince),t.xp6(2),t.Q6J("ngModel",o.distId),t.xp6(1),t.Q6J("ngForOf",o.listOfDist),t.xp6(2),t.Q6J("ngModel",o.wardId),t.xp6(1),t.Q6J("ngForOf",o.listOfWard),t.xp6(4),t.Q6J("nzData",o.listPost)("nzFrontPagination",!1)("nzPageSize",o.size)("nzPageIndex",o.page)("nzTotal",o.total)("nzFooter",f),t.xp6(10),t.Q6J("ngForOf",o.listPost)}},directives:[z.Zd,C.SK,C.t3,E.w,g.gB,g.ke,g.Zp,h.Fj,d.Pf,h.JJ,h.On,d.gi,p.sg,_.Vq,Z.ix,J.dQ,r.N8,r.Om,r.$Z,r.Uo,r._C,r.p0,p.O5,A.Ls,d.NB,_.Ip],styles:[""]}),e})()},{path:"postmans",component:O,data:{breadcrumb:"Qu\u1ea3n l\xfd b\u01b0u t\xe1"}}]}];let $=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[v.Bz.forChild(V)],v.Bz]}),e})();var X=s(7018),H=s(5887),K=s(2079),W=s(2677),q=s(4828),k=s(6214),R=s(7966),G=s(4401);let j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,$,X.vh,z.IR,Z.sL,A.PV,g.o7,H.U5,h.u5,C.Jb,r.HQ,_.LV,K.Wr,W.ZJ,q.we,k.Qp,R.Hb,G.b1,T.JF,d.ic]]}),e})()}}]);