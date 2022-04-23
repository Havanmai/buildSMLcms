"use strict";(self.webpackChunksmartlocker_workspace=self.webpackChunksmartlocker_workspace||[]).push([[67],{14067:(H,P,i)=>{i.r(P),i.d(P,{PostofficesModule:()=>q});var g=i(38583),Z=i(39895),t=i(37716);let O=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cms-postman"]],decls:2,vars:0,template:function(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"postman works!"),t.qZA())},styles:[""]}),e})();class S{constructor(s){this.parse(s)}parse(s){this.id=s.id,this.maBuuCuc=s.maBuuCuc,this.id=s.id,this.name=s.name,this.description=s.description,this.address=s.address,this.maQuanHuyen=s.maQuanHuyen,this.maTinh=s.maTinh,this.maChiNhanh=s.maChiNhanh,this.maVung=s.maVung,this.latitude=s.latitude,this.longitude=s.longitude,this.phuongXa=s.phuongXa,this.capBuuCuc=s.capBuuCuc}}var h=i(79765),v=i(91841);let _=(()=>{class e{constructor(n){this.http=n,this.provinceSelectes$=new h.xQ,this.distSelectes$=new h.xQ,this.wardSelectes$=new h.xQ}selectProvinceTab(){this.provinceSelectes$.next()}selectDistTab(){this.distSelectes$.next()}selectWardTab(){this.wardSelectes$.next()}getAllBuuCuc(n=0,o=10,a,l,z,C){let r="smartlocker/api/v1/buu-cucs?page="+n+"&size="+o;return a&&""!==a.trim()&&(r=r.concat("&maBuuCuc.contains=",a)),l&&""!==l.trim()&&(r=r.concat("&maTinh.equals=",l)),null!=z&&(r=r.concat("&maQuanHuyen.equals=",z)),null!=C&&(r=r.concat("&phuongXaId.equals="+C)),this.http.get(r)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(v.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=i(34100),M=i(77570),p=i(16704),y=i(84514),u=i(57674),d=i(3679),m=i(80269),T=i(14453),E=i(29374),c=i(43654),A=i(53599);function J(e,s){1&e&&t._UZ(0,"i",16)}function Q(e,s){if(1&e&&t._UZ(0,"nz-option",17),2&e){const n=s.$implicit;t.Q6J("nzValue",n.maTinh)("nzLabel",n.name)}}function N(e,s){if(1&e&&t._UZ(0,"nz-option",17),2&e){const n=s.$implicit;t.Q6J("nzValue",n.id)("nzLabel",n.tenQuanHuyen)}}function B(e,s){if(1&e&&t._UZ(0,"nz-option",17),2&e){const n=s.$implicit;t.Q6J("nzValue",n.id)("nzLabel",n.name)}}function w(e,s){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td",18),t._uU(2),t.qZA(),t.TgZ(3,"td",18),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.qZA()),2&e){const n=s.$implicit;t.xp6(2),t.Oqu(n.maBuuCuc),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.address)}}function x(e,s){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.hij("T\u1ed5ng ",n.total," b\u1ea3n ghi")}}function F(e,s){if(1&e&&t.YNc(0,x,2,1,"span",19),2&e){const n=t.oxw();t.Q6J("ngIf",n.total)}}const D=[{path:"",children:[{path:"",component:(()=>{class e{constructor(n,o,a){this.postService=n,this.baseSevice=o,this.storeService=a,this.page=1,this.size=10,this.total=0,this.getAllPostOffice()}ngOnInit(){this.getProvince()}getAllPostOffice(){this.baseSevice.showLoading(!0),this.postService.getAllBuuCuc(this.page-1,this.size,this.keyword,this.provinceName,this.distName,this.wardName).subscribe(n=>{this.baseSevice.showLoading(!1),0==n.error&&(this.listPost=[],this.total=n.data.total,n.data.data.forEach(o=>{let a=new S(o);this.listPost.push(a)}))})}getProvince(){this.storeService.getAllProvince().subscribe(n=>{0==n.error&&(this.listOfProvince=n.data.data)})}reload(){this.getAllPostOffice()}pageChange(n){this.page=n,this.reload()}sizeChange(n){this.size=n,this.reload()}provinceChange(n){this.provinceName=n,null!=n?this.storeService.getDistByProvince(n).subscribe(o=>{0==o.error&&(this.distChange(null),this.listOfDist=o.data.data)}):(this.listOfDist=[],this.distName=null,this.wardName=null,this.distChange(null)),this.getAllPostOffice()}distChange(n){if(this.distId=n,null!=n){for(let o=0;o<this.listOfDist.length;o++)if(n==this.listOfDist[o].id){this.distName=this.listOfDist[o].maQuanHuyen;break}this.storeService.getWardByDist(n).subscribe(o=>{0==o.error&&(this.wardChange(null),this.listOfWard=o.data.data)})}else this.listOfWard=[],this.wardName=null,this.wardChange(null);this.getAllPostOffice()}wardChange(n){if(this.wardId=n,null!=n)for(let o=0;o<this.listOfDist.length;o++)if(n==this.listOfWard[o].id){this.wardName=this.listOfWard[o].id;break}this.getAllPostOffice()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_),t.Y36(f.bQ),t.Y36(M.d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cms-postoffices"]],decls:33,vars:18,consts:[[3,"title","close"],["content","",1,"my-3","mx-0","mx-md-3"],["nz-row","",1,"mt-5","mb-4","filter-panel",3,"nzGutter"],["nz-col","","nzXs","8","nzSm","5","nzMd","5","nzLg","5","nzXl","4","nzXXl","4",1,"mb-2","mt-4"],[3,"nzPrefix"],["type","text","nz-input","","placeholder","Nh\u1eadp m\xe3 b\u01b0u c\u1ee5c",3,"ngModel","ngModelChange","keyup.enter"],["suffixIconSearch",""],["nzShowSearch","","nzPlaceHolder","Ch\u1ecdn T\u1ec9nh/Th\xe0nh","nzAllowClear","",2,"width","100%",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzShowSearch","","nzPlaceHolder","Ch\u1ecdn Qu\u1eadn/Huy\u1ec7n","nzAllowClear","",2,"width","100%",3,"ngModel","ngModelChange"],["nzShowSearch","","nzPlaceHolder","Ch\u1ecdn Ph\u01b0\u1eddng/X\xe3","nzAllowClear","",2,"width","100%",3,"ngModel","ngModelChange"],["nz-col","","nzXs","6","nzSm","4","nzMd","4","nzLg","4","nzXl","3","nzXXl","2",1,"mb-2","mt-4"],["nz-button","","nzType","default","nzBlock","",3,"click"],["nzShowSizeChanger","",1,"mt-3",3,"nzData","nzFrontPagination","nzPageSize","nzPageIndex","nzTotal","nzFooter","nzPageSizeChange","nzPageIndexChange"],[4,"ngFor","ngForOf"],["footer",""],["nz-icon","","nzType","search"],[3,"nzValue","nzLabel"],[1,"text-bold"],[4,"ngIf"]],template:function(n,o){if(1&n&&(t.TgZ(0,"cms-page",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"nz-input-group",4),t.TgZ(5,"input",5),t.NdJ("ngModelChange",function(l){return o.keyword=l})("keyup.enter",function(){return o.reload()}),t.qZA(),t.qZA(),t.YNc(6,J,1,0,"ng-template",null,6,t.W1O),t.qZA(),t.TgZ(8,"div",3),t.TgZ(9,"nz-select",7),t.NdJ("ngModelChange",function(l){return o.provinceChange(l)}),t.YNc(10,Q,1,2,"nz-option",8),t.qZA(),t.qZA(),t.TgZ(11,"div",3),t.TgZ(12,"nz-select",9),t.NdJ("ngModelChange",function(l){return o.distChange(l)}),t.YNc(13,N,1,2,"nz-option",8),t.qZA(),t.qZA(),t.TgZ(14,"div",3),t.TgZ(15,"nz-select",10),t.NdJ("ngModelChange",function(l){return o.wardChange(l)}),t.YNc(16,B,1,2,"nz-option",8),t.qZA(),t.qZA(),t.TgZ(17,"div",11),t.TgZ(18,"button",12),t.NdJ("click",function(){return o.reload()}),t._uU(19," T\xecm ki\u1ebfm "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"nz-table",13),t.NdJ("nzPageSizeChange",function(l){return o.sizeChange(l)})("nzPageIndexChange",function(l){return o.pageChange(l)}),t.TgZ(21,"thead"),t.TgZ(22,"tr"),t.TgZ(23,"th"),t._uU(24,"M\xe3 B\u01b0u C\u1ee5c"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"T\xean B\u01b0u c\u1ee5c"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"\u0110\u1ecba ch\u1ec9"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"tbody"),t.YNc(30,w,7,3,"tr",14),t.qZA(),t.YNc(31,F,1,1,"ng-template",null,15,t.W1O),t.qZA(),t.qZA(),t.qZA()),2&n){const a=t.MAs(7),l=t.MAs(32);t.Q6J("title","Qu\u1ea3n l\xfd b\u01b0u c\u1ee5c")("close",!1),t.xp6(2),t.Q6J("nzGutter",12),t.xp6(2),t.Q6J("nzPrefix",a),t.xp6(1),t.Q6J("ngModel",o.keyword),t.xp6(4),t.Q6J("ngModel",o.provinceId),t.xp6(1),t.Q6J("ngForOf",o.listOfProvince),t.xp6(2),t.Q6J("ngModel",o.distId),t.xp6(1),t.Q6J("ngForOf",o.listOfDist),t.xp6(2),t.Q6J("ngModel",o.wardId),t.xp6(1),t.Q6J("ngForOf",o.listOfWard),t.xp6(4),t.Q6J("nzData",o.listPost)("nzFrontPagination",!1)("nzPageSize",o.size)("nzPageIndex",o.page)("nzTotal",o.total)("nzFooter",l),t.xp6(10),t.Q6J("ngForOf",o.listPost)}},directives:[f.Zd,p.SK,p.t3,y.w,u.gB,u.ke,u.Zp,d.Fj,d.JJ,d.On,m.Vq,g.sg,T.ix,E.dQ,c.N8,c.Om,c.$Z,c.Uo,c._C,c.p0,A.Ls,m.Ip,g.O5],styles:[""]}),e})()},{path:"postmans",component:O,data:{breadcrumb:"Qu\u1ea3n l\xfd b\u01b0u t\xe1"}}]}];let I=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[Z.Bz.forChild(D)],Z.Bz]}),e})();var U=i(17018),L=i(75887),b=i(52079),X=i(82677),Y=i(84828),$=i(26214),V=i(87966),W=i(94401);let q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.ez,I,U.vh,f.IR,T.sL,A.PV,u.o7,L.U5,d.u5,p.Jb,c.HQ,m.LV,b.Wr,X.ZJ,Y.we,$.Qp,V.Hb,W.b1,v.JF]]}),e})()}}]);