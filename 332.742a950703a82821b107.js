"use strict";(self.webpackChunksmartlocker_workspace=self.webpackChunksmartlocker_workspace||[]).push([[332],{16332:($,f,i)=>{i.r(f),i.d(f,{LockerCategoryModule:()=>X});var p=i(38583),c=i(34100),y=i(39895),s=i(3679),L=i(80887),e=i(37716),Z=i(80357),u=i(26214),m=i(43654),z=i(14453),k=i(29374),S=i(84514),C=i(53599),T=i(93845),d=i(75887),h=i(16704),F=i(57674),x=i(52079);function A(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(){return e.CHM(t),e.oxw().createCategoryLocker()}),e._UZ(1,"i",12),e.TgZ(2,"span",13),e._uU(3,"T\u1ea1o m\u1edbi nh\xf3m Locker"),e.qZA(),e.qZA()}}function b(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",14),e._uU(4),e.qZA(),e.TgZ(5,"td"),e.TgZ(6,"nz-tag",15),e._uU(7),e.qZA(),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e.TgZ(11,"button",16),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw().onEdit(l)}),e._UZ(12,"i",17),e.qZA(),e.TgZ(13,"button",18),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw().onDelete(l)}),e._UZ(14,"i",19),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=r.$implicit,o=r.index;e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Q6J("nzColor",1==t.status?"green":"red"),e.xp6(1),e.Oqu(1==t.status?"Active":"Inactive"),e.xp6(2),e.Oqu(t.note)}}function E(n,r){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("T\u1ed5ng ",t.total," b\u1ea3n ghi")}}function N(n,r){if(1&n&&e.YNc(0,E,2,1,"span",20),2&n){const t=e.oxw();e.Q6J("ngIf",t.total)}}function U(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"form",21),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw().submitCategory()}),e.TgZ(2,"nz-form-item"),e.TgZ(3,"nz-form-label",22),e.TgZ(4,"span"),e._uU(5,"T\xean nh\xf3m Locker"),e.qZA(),e.qZA(),e.TgZ(6,"nz-form-control",23),e._UZ(7,"input",24),e.qZA(),e.TgZ(8,"nz-form-control",25),e.TgZ(9,"label",26),e._uU(10,"Active"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"nz-form-item"),e.TgZ(12,"nz-form-label",27),e.TgZ(13,"span"),e._uU(14,"Ghi ch\xfa"),e.qZA(),e.qZA(),e.TgZ(15,"nz-form-control",25),e._UZ(16,"textarea",28),e.qZA(),e.qZA(),e._UZ(17,"button",29),e.qZA(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.createCategoryForm),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",10)("nzXs",24),e.xp6(2),e.Q6J("nzSm",2)("nzXs",24),e.xp6(4),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24)}}function O(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"button",30),e.NdJ("click",function(){return e.CHM(t),e.oxw().submitCategory()}),e._uU(2),e.qZA(),e.TgZ(3,"button",31),e.NdJ("click",function(){return e.CHM(t),e.oxw().cancelModal()}),e._uU(4,"H\u1ee7y"),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("nzLoading",t.submitting),e.xp6(1),e.hij(" ",t.editCategory?"C\u1eadp nh\u1eadt Nh\xf3m Locker":"T\u1ea1o Nh\xf3m Locker"," ")}}const I=[{path:"",component:(()=>{class n{constructor(t,o,a,l){this.baseService=t,this.lockerCategoryService=o,this.fb=a,this.modal=l,this.showCreateCategory=!1,this.editCategory=!1,this.submitting=!1,this.tabSelected=2,this.typeModal={location:1,category:2,ratingBuilding:3},this.isLoading=!1,this.listCategoryLocker=[],this.filterCategory={pageSize:10,pageNumber:1},this.objCategory={id:null,name:null,note:null},this.lockerCategoryService.reloadCategoryLocker$.subscribe(g=>{this.getAllLockerCategory()}),this.lockerCategoryService.editCategoryLocker$.subscribe(g=>{this.editGroupLocker(g)})}ngOnInit(){this.filterCategory.pageNumber=1,this.filterCategory.pageSize=10,this.getAllLockerCategory(),this.createCategoryForm=this.fb.group({categoryName:[null,[s.kI.required]],status:[!1],note:[null]})}onPageChange(t){this.filterCategory.pageNumber=t,this.getAllLockerCategory()}onEdit(t){this.lockerCategoryService.editCategory(t)}onDelete(t){this.modal.confirm({nzTitle:`<i>B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a nh\xf3m Locker ${t.name} n\xe0y kh\xf4ng?</i>`,nzOnOk:()=>{this.baseService.showLoading(!0),this.lockerCategoryService.deleteCategoryLocker(t.id).subscribe(o=>{this.baseService.showLoading(!1),0===o.error&&(this.baseService.showToast("X\xf3a nh\xf3m Locker th\xe0nh c\xf4ng",c.gT.TOAST_OK),this.getAllLockerCategory())},()=>{this.baseService.showLoading(!1)})},nzClosable:!1,nzCancelText:"T\xf4i kh\xf4ng mu\u1ed1n",nzOkText:"\u0110\u1ed3ng \xfd"})}getAllLockerCategory(){this.baseService.showLoading(!0),this.lockerCategoryService.getAllLockerCategory(this.filterCategory.pageNumber-1,this.filterCategory.pageSize).subscribe(t=>{console.log(t),this.baseService.showLoading(!1),0==t.error&&this.responseProcess(t)},t=>{console.log("Kh\xf4ng g\u1eedi \u0111\u01b0\u1ee3c y\xeau c\u1ea7u l\u1ea5y th\xf4ng tin",t)})}responseProcess(t){this.listCategoryLocker=[],this.total=t.data.total,t.data.data.forEach(o=>{let a=new L.c(o);this.listCategoryLocker.push(a)})}createCategoryLocker(){this.showCreateCategory=!0,this.editCategory=!1,this.createCategoryForm.controls.categoryName.setValue(null),this.createCategoryForm.controls.note.setValue(null),this.createCategoryForm.controls.status.setValue(!1)}editGroupLocker(t){this.showCreateCategory=!0,this.editCategory=!0,this.id=t.id,this.createCategoryForm.controls.categoryName.setValue(t.name),this.createCategoryForm.controls.note.setValue(t.note),this.createCategoryForm.controls.status.setValue(1==t.status)}submitCategory(){for(const t in this.createCategoryForm.controls)this.createCategoryForm.controls.hasOwnProperty(t)&&(this.createCategoryForm.controls[t].markAsDirty(),this.createCategoryForm.controls[t].updateValueAndValidity());if(!this.createCategoryForm.invalid){let t;t=this.createCategoryForm.controls.status.value?1:0,this.editCategory?this.onFormEdit(t):this.onFormCreate(t)}}onFormCreate(t){this.submitting=!0,this.lockerCategoryService.postCategoryLocker(this.createCategoryForm.controls.categoryName.value,this.createCategoryForm.controls.note.value,t).subscribe(o=>{this.submitting=!1,0===o.error?(this.baseService.showToast("T\u1ea1o nh\xf3m Locker th\xe0nh c\xf4ng",c.gT.TOAST_OK),this.cancelModal(),this.lockerCategoryService.reloadCategoryLocker()):this.baseService.showToast("T\u1ea1o nh\xf3m Locker kh\xf4ng th\xe0nh c\xf4ng",c.gT.TOAST_ERROR)},o=>{this.submitting=!1})}onFormEdit(t){this.submitting=!0,this.lockerCategoryService.updateCategoryLocker(this.id,this.createCategoryForm.controls.categoryName.value,this.createCategoryForm.controls.note.value,t).subscribe(o=>{this.submitting=!1,0===o.error?(this.baseService.showToast("C\u1eadp nh\u1eadt nh\xf3m Locker th\xe0nh c\xf4ng",c.gT.TOAST_OK),this.cancelModal(),this.lockerCategoryService.reloadCategoryLocker()):this.baseService.showToast("C\u1eadp nh\u1eadt nh\xf3m Locker kh\xf4ng th\xe0nh c\xf4ng",c.gT.TOAST_ERROR)},o=>{this.submitting=!1})}cancelModal(){this.showCreateCategory=!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.bQ),e.Y36(Z.G),e.Y36(s.qu),e.Y36(u.Sf))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cms-locker-category"]],decls:24,vars:11,consts:[["title","Qu\u1ea3n l\xfd nh\xf3m Locker",3,"close"],["action",""],["nz-button","","nzType","primary","class","mr-3",3,"click",4,"ngIf"],["content","",1,"mt-8"],[1,"mt-11",3,"nzData","nzFrontPagination","nzPageSize","nzPageIndex","nzTotal","nzFooter","nzPageIndexChange"],["nzWidth","160px"],[4,"ngFor","ngForOf"],["footer",""],["nzTitle","T\u1ea1o m\u1edbi nh\xf3m Locker",2,"width","500px !important",3,"nzVisible","nzClosable","nzVisibleChange"],[4,"nzModalContent"],[4,"nzModalFooter"],["nz-button","","nzType","primary",1,"mr-3",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline"],[1,"d-none","d-md-inline-block"],[1,"text-bold"],[3,"nzColor"],["nz-button","","nzType","text","title","S\u1eeda",1,"mr-1",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline"],["nz-button","","nzType","text","title","X\xf3a",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline",1,"text-danger"],[4,"ngIf"],["nz-form","",3,"formGroup","ngSubmit"],["nzFor","categoryName","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean nh\xf3m locker!",1,"mr-5",3,"nzSm","nzXs"],["nz-input","","id","categoryName","formControlName","categoryName","placeholder","Nh\u1eadp t\xean nh\xf3m Locker"],[3,"nzSm","nzXs"],["nz-checkbox","","formControlName","status"],["nzFor","note",3,"nzSm","nzXs"],["nz-input","","id","note","formControlName","note","placeholder","Ghi ch\xfa"],[1,"d-none"],["nz-button","","nzType","primary",1,"m-2",3,"nzLoading","click"],["nz-button","","nzType","default",3,"click"]],template:function(t,o){if(1&t&&(e.TgZ(0,"cms-page",0),e.TgZ(1,"div",1),e.YNc(2,A,4,0,"button",2),e.qZA(),e.TgZ(3,"div",3),e.TgZ(4,"nz-table",4),e.NdJ("nzPageIndexChange",function(l){return o.onPageChange(l)}),e.TgZ(5,"thead"),e.TgZ(6,"tr"),e.TgZ(7,"th"),e._uU(8,"STT"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"T\xean nh\xf3m locker"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Tr\u1ea1ng th\xe1i"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Ghi ch\xfa"),e.qZA(),e.TgZ(15,"th",5),e._uU(16,"H\xe0nh \u0111\u1ed9ng"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"tbody"),e.YNc(18,b,15,5,"tr",6),e.qZA(),e.YNc(19,N,1,1,"ng-template",null,7,e.W1O),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"nz-modal",8),e.NdJ("nzVisibleChange",function(l){return o.showCreateCategory=l}),e.YNc(22,U,18,11,"ng-container",9),e.YNc(23,O,5,2,"div",10),e.qZA()),2&t){const a=e.MAs(20);e.Q6J("close",!1),e.xp6(2),e.Q6J("ngIf",o.tabSelected===o.typeModal.category),e.xp6(2),e.Q6J("nzData",o.listCategoryLocker)("nzFrontPagination",!1)("nzPageSize",o.filterCategory.pageSize)("nzPageIndex",o.filterCategory.pageNumber)("nzTotal",o.total)("nzFooter",a),e.xp6(14),e.Q6J("ngForOf",o.listCategoryLocker),e.xp6(3),e.Q6J("nzVisible",o.showCreateCategory)("nzClosable",!1)}},directives:[c.Zd,p.O5,m.N8,m.Om,m.$Z,m.Uo,m._C,m.p0,p.sg,u.du,u.Hf,u.Uh,z.ix,k.dQ,S.w,C.Ls,T.j,s._Y,s.JL,d.Lr,s.sg,h.SK,d.Nx,h.t3,d.iK,d.Fd,F.Zp,s.Fj,s.JJ,s.u,x.Ie],styles:[""]}),n})()}];let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[y.Bz.forChild(I)],y.Bz]}),n})();var M=i(91841),w=i(84828),R=i(44788),q=i(47420),D=i(53197),V=i(53516),Q=i(25716);let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,s.u5,R.cS,q.cg,D.Ph,V.XD,Q.j,C.PV]]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,v],v]}),n})();i(23815);let X=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,c.IR,J,z.sL,C.PV,m.HQ,M.JF,d.U5,s.u5,s.UX,h.Jb,F.o7,w.we,u.Qp,P,T.X,x.Wr]]}),n})()}}]);