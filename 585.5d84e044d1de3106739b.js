"use strict";(self.webpackChunksmartlocker_workspace=self.webpackChunksmartlocker_workspace||[]).push([[585],{79585:(zt,D,r)=>{r.r(D),r.d(D,{StateModule:()=>gt});var d=r(38583),h=r(39895),c=r(3679),g=r(34100),_=r(23815),q=r(68548),v=r(94878),F=r(12974),t=r(37716),E=r(91841);let k=(()=>{class s{constructor(e){this.httpClient=e}getStatesUser(e,n){return this.httpClient.get("smartlocker-ticket/api/v1/state-users?page="+e+"&size="+n)}getAllStatesUser(){return this.httpClient.get("smartlocker-ticket/api/v1/state-users")}getLstStatesUserById(e){return this.httpClient.get("smartlocker-ticket/api/v1/state-users?stateId.equals="+e)}getAllUser(){return this.httpClient.get("smartlocker/api/v1/users")}getAllRoles(){return this.httpClient.get("smartlocker/api/v1/authorities")}searchUser(e,n,i,o){let u="smartlocker/api/v1/users/search?page="+e+"&size="+n;return i&&""!==i.trim()&&(u+="&search="+i),o&&""!==o.trim()&&(u+="&authority="+o),this.httpClient.get(u)}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(E.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var m=r(26214),z=r(16704),A=r(84514),Z=r(57674),T=r(80269),f=r(14453),b=r(29374),l=r(43654),S=r(53599);function N(s,a){1&s&&(t.TgZ(0,"div"),t._uU(1,"Danh s\xe1ch ng\u01b0\u1eddi d\xf9ng"),t.qZA())}function M(s,a){1&s&&t._UZ(0,"i",17)}function J(s,a){if(1&s&&t._UZ(0,"nz-option",18),2&s){const e=a.$implicit;t.Q6J("nzValue",e.name)("nzLabel",e.description)}}function L(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",19),t.NdJ("nzCheckedChange",function(i){const u=t.CHM(e).$implicit;return t.oxw().onItemChecked(u.id,i)}),t.qZA(),t.TgZ(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t.TgZ(5,"span"),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"td"),t.TgZ(8,"span"),t._uU(9),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=a.$implicit,n=a.index,i=t.oxw();t.xp6(1),t.Q6J("nzChecked",i.setOfCheckedId.has(e.id)),t.xp6(2),t.Oqu(n+1),t.xp6(3),t.Oqu(e.firstName+e.lastName),t.xp6(3),t.Oqu(e.email)}}function Q(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"button",20),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSubmit()}),t._uU(2," X\xe1c nh\u1eadn "),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){return t.CHM(e),t.oxw().onCancel()}),t._uU(4,"H\u1ee7y"),t.qZA(),t.qZA()}}const w=function(){return{y:"100%"}};let I=(()=>{class s{constructor(e,n,i){this.stateUserService=e,this.modalRef=n,this.messageBusService=i,this.pageNumber=1,this.pageSize=10,this.totalPage=0,this.keyword="",this.role="",this.checkedAll=!1,this.setOfCheckedId=new Set,this.indeterminate=!1,this.listOfCurrentPageData=[]}ngOnInit(){this.getAllRoles(),this.getAllUser()}onSearch(){this.getAllUser()}onSubmit(){const e=this.listUsers.filter(n=>this.setOfCheckedId.has(n.id));this.messageBusService.addMessage(q.g.listUserStateChannel,v.q.submitListUserState,e),this.modalRef.destroy()}onCancel(){this.modalRef.destroy()}updateCheckedSet(e,n){n?this.setOfCheckedId.add(e):this.setOfCheckedId.delete(e)}onItemChecked(e,n){this.updateCheckedSet(e,n),this.refreshCheckedStatus()}onAllChecked(e){this.listOfCurrentPageData.forEach(n=>this.updateCheckedSet(n.id,e)),this.refreshCheckedStatus()}onCurrentPageDataChange(e){this.listOfCurrentPageData=e,this.refreshCheckedStatus()}refreshCheckedStatus(){this.checkedAll=this.listOfCurrentPageData.every(e=>this.setOfCheckedId.has(e.id)),this.indeterminate=this.listOfCurrentPageData.some(e=>this.setOfCheckedId.has(e.id))&&!this.checkedAll}getAllUser(){this.stateUserService.searchUser(this.pageNumber-1,this.pageSize,this.keyword,this.role).subscribe(e=>{e&&e.data&&(this.listUsers=e.data.data)})}getAllRoles(){this.stateUserService.getAllRoles().subscribe(e=>{0==e.error&&(this.listRoles=e.data)})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(k),t.Y36(m.Lf),t.Y36(F.Fs))},s.\u0275cmp=t.Xpm({type:s,selectors:[["cms-listing-user-modal"]],decls:29,vars:13,consts:[[4,"nzModalTitle"],["nz-row","",1,"mt-3","mb-4","filter-panel",3,"nzGutter"],["nz-col","","nzXs","8","nzSm","14","nzMd","14","nzLg","14","nzXl","14","nzXXl","14",1,"mt-4"],[3,"nzPrefix"],["type","text","nz-input","","placeholder","Email,T\xe0i kho\u1ea3n, T\xean",3,"ngModel","ngModelChange","keyup.enter"],["suffixIconSearch",""],["nz-col","","nzXs","10","nzSm","6","nzMd","6","nzLg","6","nzXl","6","nzXXl","6",1,"mt-4"],["nzPlaceHolder","Vai tr\xf2","nzBlock","","nzAllowClear","",2,"width","100%",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nz-col","","nzXs","6","nzSm","4","nzMd","4","nzLg","4","nzXl","4","nzXXl","4",1,"mt-4"],["nz-button","","nzType","default","nzBlock","",3,"click"],["nzShowSizeChanger","",3,"nzFrontPagination","nzTotal","nzData","nzScroll","nzCurrentPageDataChange"],["iDataTable",""],["nzWidth","50px",3,"nzChecked","nzIndeterminate","nzCheckedChange"],["nzWidth","50px"],[4,"ngFor","ngForOf"],[4,"nzModalFooter"],["nz-icon","","nzType","search"],[3,"nzValue","nzLabel"],[3,"nzChecked","nzCheckedChange"],["nz-button","","nzType","primary",1,"m-2",3,"click"],["nz-button","","nzType","default",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,N,2,0,"div",0),t.TgZ(2,"div"),t.TgZ(3,"div",1),t.TgZ(4,"div",2),t.TgZ(5,"nz-input-group",3),t.TgZ(6,"input",4),t.NdJ("ngModelChange",function(o){return n.keyword=o})("keyup.enter",function(){return n.onSearch()}),t.qZA(),t.qZA(),t.YNc(7,M,1,0,"ng-template",null,5,t.W1O),t.qZA(),t.TgZ(9,"div",6),t.TgZ(10,"nz-select",7),t.NdJ("ngModelChange",function(o){return n.role=o})("ngModelChange",function(){return n.onSearch()}),t.YNc(11,J,1,2,"nz-option",8),t.qZA(),t.qZA(),t.TgZ(12,"div",9),t.TgZ(13,"button",10),t.NdJ("click",function(){return n.onSearch()}),t._uU(14," T\xecm ki\u1ebfm "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"nz-table",11,12),t.NdJ("nzCurrentPageDataChange",function(o){return n.onCurrentPageDataChange(o)}),t.TgZ(17,"thead"),t.TgZ(18,"tr"),t.TgZ(19,"th",13),t.NdJ("nzCheckedChange",function(o){return n.checkedAll=o})("nzCheckedChange",function(o){return n.onAllChecked(o)}),t.qZA(),t.TgZ(20,"th",14),t._uU(21,"Stt"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"T\xean ng\u01b0\u1eddi d\xf9ng"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Email"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"tbody"),t.YNc(27,L,10,4,"tr",15),t.qZA(),t.qZA(),t.qZA(),t.YNc(28,Q,5,0,"div",16),t.qZA()),2&e){const i=t.MAs(8),o=t.MAs(16);t.xp6(3),t.Q6J("nzGutter",12),t.xp6(2),t.Q6J("nzPrefix",i),t.xp6(1),t.Q6J("ngModel",n.keyword),t.xp6(4),t.Q6J("ngModel",n.role),t.xp6(1),t.Q6J("ngForOf",n.listRoles),t.xp6(4),t.Q6J("nzFrontPagination",!1)("nzTotal",n.totalPage)("nzData",n.listUsers)("nzScroll",t.DdM(12,w)),t.xp6(4),t.Q6J("nzChecked",n.checkedAll)("nzIndeterminate",n.indeterminate),t.xp6(8),t.Q6J("ngForOf",o.data)}},directives:[m.h1,z.SK,z.t3,A.w,Z.gB,Z.ke,Z.Zp,c.Fj,c.JJ,c.On,T.Vq,d.sg,f.ix,b.dQ,l.N8,l.Om,l.$Z,l.Uo,l._C,l.g6,l.p0,m.Uh,S.Ls,T.Ip,l.h7],styles:[""]}),s})();var P=r(10826);let x=(()=>{class s{constructor(e){this.httpClient=e}getAllStates(e,n){return this.httpClient.get("smartlocker-ticket/api/v1/states?page="+e+"&size="+n)}getDetailState(e){return this.httpClient.get("smartlocker-ticket/api/v1/states/"+e)}createStates(e){return this.httpClient.post("smartlocker-ticket/api/v1/states",e)}updateStates(e,n){return this.httpClient.put("smartlocker-ticket/api/v1/states/"+n,e)}deleteStates(e){return this.httpClient.delete("smartlocker-ticket/api/v1/states/"+e)}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(E.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var X=r(24520),p=r(75887),y=r(82677);function Y(s,a){if(1&s&&t._UZ(0,"nz-option",28),2&s){const e=a.$implicit;t.Q6J("nzValue",e.id)("nzLabel",e.firstName+" "+e.lastName)}}function H(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"td"),t.TgZ(7,"span"),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"td"),t.TgZ(10,"span"),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"td"),t.TgZ(13,"div",29),t.TgZ(14,"button",30),t.NdJ("click",function(){const o=t.CHM(e).index;return t.oxw().onDeleteUser(o)}),t._UZ(15,"i",31),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=a.$implicit,n=a.index;t.xp6(2),t.Oqu(n+1),t.xp6(3),t.Oqu(e.firstName+e.lastName),t.xp6(3),t.Oqu(e.email),t.xp6(3),t.Oqu(e.phoneNumber)}}function B(s,a){1&s&&(t.TgZ(0,"span",33),t._uU(1,"Kh\xf4ng \u0111\u1ec3 tr\u1ed1ng danh s\xe1ch!"),t.qZA())}function R(s,a){if(1&s&&t.YNc(0,B,2,0,"span",32),2&s){const e=t.oxw();t.Q6J("ngIf",e.isSubmit&&0===e.lstUser.length)}}function V(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"a",34),t.NdJ("click",function(){return t.CHM(e),t.oxw().addLstStateUser()}),t._UZ(1,"i",3),t.TgZ(2,"span",35),t._uU(3,"Th\xeam danh s\xe1ch ng\u01b0\u1eddi d\xf9ng"),t.qZA(),t.qZA()}}const j=function(){return[60,20]},$=function(){return{y:"100%"}};let O=(()=>{class s{constructor(e,n,i,o,u,C,dt,ht,pt,mt){this.stateService=e,this.stateUserService=n,this.userService=i,this.modalService=o,this.baseService=u,this.fb=C,this.router=dt,this.activeRouter=ht,this.messageBusService=pt,this.cdr=mt,this.lstUserHolder=[],this.lstUser=[],this.totalPage=0,this.isSubmit=!1,this.checkedAll=!1,this.setOfCheckedId=new Set,this.indeterminate=!1,this.isEdit=!1,this.isLoadingTable=!1,this.currentStateId=null,this.listOfCurrentPageData=[],this.obj={id:null,description:null,name:null,stateUsers:[],userHolder:{id:null}},this._subscription=new P.w,this.activeRouter.paramMap.subscribe(U=>{U&&U.params.id&&(this.isEdit=!0,this.currentStateId=U.params.id,this.getDetailState(U.params.id))})}ngOnInit(){this.getAllUserHolder();const e=this.messageBusService.hookMessageChannel(q.g.listUserStateChannel,v.q.submitListUserState).subscribe(n=>{if(n)if(this.lstUser.length>0){const i=this.lstUser;_.each(n,o=>{0===_.filter(this.lstUser,C=>o.id===C.id).length&&i.push(o)}),this.lstUser=i}else this.lstUser=n});this._subscription.add(e),this.createForm()}ngOnDestroy(){this._subscription&&!this._subscription.closed&&this._subscription.unsubscribe(),this.messageBusService.deleteChannelMessage(q.g.listUserStateChannel,v.q.submitListUserState),this.cdr.detach()}buildObj(){const e=[];_.each(this.lstUser,n=>{e.push({user:{id:n.id}})}),this.obj.description=this.mainForm.controls.description.value,this.obj.name=this.mainForm.controls.name.value,this.obj.stateUsers=e,this.obj.userHolder.id=this.mainForm.controls.userHolder.value,this.obj.id=this.currentStateId}onSubmit(){this.isSubmit=!0,this.mainForm.valid&&this.lstUser.length>0?(this.baseService.showLoading(!0),this.buildObj(),this.isEdit?this.stateService.updateStates(this.obj,this.currentStateId).subscribe(e=>{e&&e.data&&(this.baseService.showLoading(!1),this.baseService.showNotification("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng state",g.gT.NOTI_OK),this.router.navigateByUrl("state"))}):this.stateService.createStates(this.obj).subscribe(e=>{e&&e.data&&(this.baseService.showLoading(!1),this.baseService.showNotification("Kh\u1edfi t\u1ea1o th\xe0nh c\xf4ng state",g.gT.NOTI_OK),this.router.navigateByUrl("state"))})):Object.values(this.mainForm.controls).forEach(e=>{e.invalid&&(e.markAsDirty(),e.updateValueAndValidity({onlySelf:!0}))})}onDeleteUser(e){e>=0&&(this.lstUser=this.lstUser.filter((n,i)=>i!==e))}addLstStateUser(){this.modalService.create({nzContent:I,nzClosable:!1})}createForm(){this.mainForm=this.fb.group({name:new c.NI(null,c.kI.required),description:new c.NI(null),userHolder:new c.NI(null,c.kI.required),stateUsers:new c.NI([])})}setValue(e){this.mainForm.controls.name.setValue(e.name),this.mainForm.controls.description.setValue(e.description),this.mainForm.controls.userHolder.setValue(e.userHolder?e.userHolder.id:null)}getAllUserHolder(){this.stateUserService.getAllUser().subscribe(e=>{e&&e.data&&(this.lstUserHolder=e.data.data)})}getDetailState(e){this.stateService.getDetailState(e).subscribe(n=>{if(n&&n.data){this.setValue(n.data);const i=[];_.each(n.data.stateUsers,o=>{i.push(o.user)}),this.lstUser=i}})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(x),t.Y36(k),t.Y36(X.K),t.Y36(m.Sf),t.Y36(g.bQ),t.Y36(c.qu),t.Y36(h.F0),t.Y36(h.gz),t.Y36(F.Fs),t.Y36(t.sBO))},s.\u0275cmp=t.Xpm({type:s,selectors:[["cms-create-states"]],decls:52,vars:27,consts:[[3,"title","close"],["action",""],["nz-button","","nzType","primary",1,"mr-3",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline"],[1,"d-none","d-md-inline-block"],["content",""],["nz-form","",1,"login-form",3,"formGroup"],["nz-row","",1,"my-2","p-0","p-lg-4"],["nz-col","","nzXs","24"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],["nzFor","name","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Kh\xf4ng \u0111\u1ec3 tr\u1ed1ng t\xean State!",3,"nzSm","nzXs"],["type","text","nz-input","","formControlName","name","placeholder","Nh\u1eadp t\xean State"],["nzFor","userHolder","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Kh\xf4ng \u0111\u1ec3 tr\u1ed1ng ng\u01b0\u1eddi s\u1edf h\u1eefu!",3,"nzSm","nzXs"],["nzShowSearch","","formControlName","userHolder","nzPlaceHolder","Ng\u01b0\u1eddi qu\u1ea3n l\xfd State","nzAllowClear","",1,"width-full"],["class","width-full",3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzFor","description",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nz-input","","formControlName","description","id","description","name","description","placeholder","Nh\u1eadp ghi ch\xfa",3,"nzAutosize"],[3,"nzFooter","nzFrontPagination","nzTotal","nzTitle","nzData","nzScroll"],["iDataTable",""],["nzWidth","50px"],["nzWidth","150px"],[4,"ngFor","ngForOf"],["titleTable",""],["header",""],[1,"width-full",3,"nzValue","nzLabel"],[1,"btn-delete"],["nz-button","","nzType","text","title","X\xf3a",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline",1,"text-danger"],["nz-typography","","nzType","danger",4,"ngIf"],["nz-typography","","nzType","danger"],[1,"add-form-array",3,"click"],[1,"ml-1"]],template:function(e,n){if(1&e&&(t.TgZ(0,"cms-page",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return n.onSubmit()}),t._UZ(3,"i",3),t.TgZ(4,"span",4),t._uU(5,"X\xe1c nh\u1eadn"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"form",6),t.TgZ(8,"div",7),t.TgZ(9,"div",8),t.TgZ(10,"div",9),t.TgZ(11,"div",10),t.TgZ(12,"nz-form-item"),t.TgZ(13,"nz-form-label",11),t.TgZ(14,"span"),t._uU(15,"T\xean State"),t.qZA(),t.qZA(),t.TgZ(16,"nz-form-control",12),t._UZ(17,"input",13),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",10),t.TgZ(19,"nz-form-item"),t.TgZ(20,"nz-form-label",14),t.TgZ(21,"span"),t._uU(22,"Ng\u01b0\u1eddi s\u1edf h\u1eefu State"),t.qZA(),t.qZA(),t.TgZ(23,"nz-form-control",15),t.TgZ(24,"nz-select",16),t.YNc(25,Y,1,2,"nz-option",17),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"nz-form-item"),t.TgZ(27,"nz-form-label",18),t.TgZ(28,"span"),t._uU(29,"Ghi ch\xfa"),t.qZA(),t.qZA(),t.TgZ(30,"nz-form-control",19),t._UZ(31,"textarea",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"nz-table",21,22),t.TgZ(34,"thead"),t.TgZ(35,"tr"),t.TgZ(36,"th",23),t._uU(37,"Stt"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"T\xean ng\u01b0\u1eddi d\xf9ng"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Email"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),t.qZA(),t.TgZ(44,"th",24),t._uU(45,"H\xe0nh \u0111\u1ed9ng"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(46,"tbody"),t.YNc(47,H,16,4,"tr",25),t.qZA(),t.qZA(),t.YNc(48,R,1,1,"ng-template",null,26,t.W1O),t.YNc(50,V,4,0,"ng-template",null,27,t.W1O),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const i=t.MAs(49),o=t.MAs(51);t.MGl("title","",n.isEdit?"C\u1eadp nh\u1eadt":"T\u1ea1o m\u1edbi"," State"),t.Q6J("close",!0),t.xp6(7),t.Q6J("formGroup",n.mainForm),t.xp6(3),t.Q6J("nzGutter",t.DdM(25,j)),t.xp6(3),t.Q6J("nzSm",6)("nzXs",24),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(4),t.Q6J("nzSm",6)("nzXs",24),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(2),t.Q6J("ngForOf",n.lstUserHolder),t.xp6(2),t.Q6J("nzSm",6)("nzXs",24),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(1),t.Q6J("nzAutosize",!0),t.xp6(1),t.Q6J("nzFooter",i)("nzFrontPagination",!1)("nzTotal",n.totalPage)("nzTitle",o)("nzData",n.lstUser)("nzScroll",t.DdM(26,$)),t.xp6(15),t.Q6J("ngForOf",n.lstUser)}},directives:[g.Zd,f.ix,b.dQ,A.w,S.Ls,c._Y,c.JL,p.Lr,c.sg,z.SK,z.t3,p.Nx,p.iK,p.Fd,Z.Zp,c.Fj,c.JJ,c.u,T.Vq,d.sg,Z.rh,l.N8,l.Om,l.$Z,l.Uo,l._C,l.p0,T.Ip,d.O5,y.ZU],styles:[".add-form-array[_ngcontent-%COMP%]{color:#ee1a30;font-size:13px;font-weight:500;cursor:pointer}.add-form-array[_ngcontent-%COMP%]:hover{color:#f01229}.view-edit-table[_ngcontent-%COMP%]{text-align:end}"]}),s})();function G(s,a){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Oqu(e.iData.userHolder.firstName+" "+e.iData.userHolder.lastName)}}function K(s,a){if(1&s&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"td"),t.TgZ(7,"span"),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"td"),t.TgZ(10,"span"),t._uU(11),t.qZA(),t.qZA(),t.qZA()),2&s){const e=a.$implicit,n=a.index;t.xp6(2),t.Oqu(n+1),t.xp6(3),t.Oqu(e.firstName+e.lastName),t.xp6(3),t.Oqu(e.email),t.xp6(3),t.Oqu(e.phoneNumber)}}const W=function(){return[60,20]},tt=function(){return{y:"100%"}};let et=(()=>{class s{constructor(e,n,i){this.router=e,this.activeRouter=n,this.stateService=i,this.lstUser=[],this.iData={},this.activeRouter.paramMap.subscribe(o=>{o&&o.params.id&&this.getDetailState(o.params.id)})}ngOnInit(){}onEdit(e){this.router.navigateByUrl("state/edit/"+e.id)}getDetailState(e){this.stateService.getDetailState(e).subscribe(n=>{if(n&&n.data){this.iData=n.data;const i=[];_.each(n.data.stateUsers,o=>{i.push(o.user)}),this.lstUser=i}})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(h.F0),t.Y36(h.gz),t.Y36(x))},s.\u0275cmp=t.Xpm({type:s,selectors:[["cms-detail-states"]],decls:46,vars:24,consts:[["title","Chi ti\u1ebft State",3,"close"],["action",""],["nz-button","","nzType","primary",1,"mr-3"],["nz-icon","","nzType","edit","nzTheme","outline"],[1,"d-none","d-md-inline-block",3,"click"],["content",""],["nz-row","",1,"my-2","p-0","p-lg-4"],["nz-col","","nzXs","24",1,"infor-wrapper"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","12"],["nzFor","name",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["nzFor","userHolder",3,"nzSm","nzXs"],[4,"ngIf"],["nzFor","description",3,"nzSm","nzXs"],[3,"nzFrontPagination","nzTotal","nzData","nzScroll"],["iDataTable",""],["nzWidth","50px"],[4,"ngFor","ngForOf"]],template:function(e,n){1&e&&(t.TgZ(0,"cms-page",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t._UZ(3,"i",3),t.TgZ(4,"span",4),t.NdJ("click",function(){return n.onEdit(n.iData)}),t._uU(5,"C\u1eadp nh\u1eadt"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"div",7),t.TgZ(9,"div",8),t.TgZ(10,"div",9),t.TgZ(11,"nz-form-item"),t.TgZ(12,"nz-form-label",10),t.TgZ(13,"span"),t._uU(14,"T\xean State"),t.qZA(),t.qZA(),t.TgZ(15,"nz-form-control",11),t.TgZ(16,"span"),t._uU(17),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",9),t.TgZ(19,"nz-form-item"),t.TgZ(20,"nz-form-label",12),t.TgZ(21,"span"),t._uU(22,"Ng\u01b0\u1eddi s\u1edf h\u1eefu State"),t.qZA(),t.qZA(),t.TgZ(23,"nz-form-control",11),t.YNc(24,G,2,1,"span",13),t.qZA(),t.qZA(),t.TgZ(25,"nz-form-item"),t.TgZ(26,"nz-form-label",14),t.TgZ(27,"span"),t._uU(28,"Ghi ch\xfa"),t.qZA(),t.qZA(),t.TgZ(29,"nz-form-control",11),t.TgZ(30,"span"),t._uU(31),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"nz-table",15,16),t.TgZ(34,"thead"),t.TgZ(35,"tr"),t.TgZ(36,"th",17),t._uU(37,"Stt"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"T\xean ng\u01b0\u1eddi d\xf9ng"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Email"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"tbody"),t.YNc(45,K,12,4,"tr",18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("close",!0),t.xp6(9),t.Q6J("nzGutter",t.DdM(22,W)),t.xp6(3),t.Q6J("nzSm",6)("nzXs",24),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(2),t.Oqu(n.iData.name),t.xp6(3),t.Q6J("nzSm",6)("nzXs",24),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(1),t.Q6J("ngIf",n.iData.userHolder),t.xp6(2),t.Q6J("nzSm",6)("nzXs",24),t.xp6(3),t.Q6J("nzSm",18)("nzXs",24),t.xp6(2),t.Oqu(n.iData.description),t.xp6(1),t.Q6J("nzFrontPagination",!1)("nzTotal",n.lstUser.length)("nzData",n.lstUser)("nzScroll",t.DdM(23,tt)),t.xp6(13),t.Q6J("ngForOf",n.lstUser))},directives:[g.Zd,f.ix,b.dQ,A.w,S.Ls,z.SK,z.t3,p.Nx,p.iK,p.Fd,d.O5,l.N8,l.Om,l.$Z,l.Uo,l._C,l.p0,d.sg],styles:["[_nghost-%COMP%]     .infor-wrapper .ant-form-item-content{font-size:14px;margin-top:10px}[_nghost-%COMP%]     .infor-wrapper .ant-form-item-label{font-weight:500}"]}),s})();function nt(s,a){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.userHolder.firstName+" "+e.userHolder.lastName)}}function st(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"a",12),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().routerLink(o.id)}),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"td"),t.YNc(7,nt,2,1,"span",13),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t.TgZ(11,"button",14),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().onEdit(o)}),t._UZ(12,"i",15),t.qZA(),t.TgZ(13,"button",16),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().onDelete(o)}),t._UZ(14,"i",17),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=a.$implicit,n=a.index,i=t.oxw();t.xp6(2),t.Oqu((i.pageNumber-1)*i.pageSize+n+1),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Q6J("ngIf",e.userHolder),t.xp6(2),t.Oqu(e.description)}}function it(s,a){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.hij("T\u1ed5ng ",e.totalPage," b\u1ea3n ghi")}}function at(s,a){if(1&s&&t.YNc(0,it,2,1,"span",13),2&s){const e=t.oxw();t.Q6J("ngIf",e.totalPage)}}const ot=[{path:"",component:(()=>{class s{constructor(e,n,i,o,u){this.stateService=e,this.baseService=n,this.fb=i,this.modal=o,this.router=u,this.lstState=[],this.listStateChildrenData=[],this.pageSize=10,this.pageNumber=1,this.totalPage=0,this.isEdit=!1,this.isVisibleForm=!1,this.isLoading=!1,this.currentWorkflow=null,this.obj={id:null,description:null,name:null}}ngOnInit(){this.getAllState()}routerLink(e){this.router.navigateByUrl("state/detail/"+e)}getAllState(){this.baseService.showLoading(!0),this.stateService.getAllStates(this.pageNumber-1,this.pageSize).subscribe(e=>{e&&e.data?(this.baseService.showLoading(!1),this.lstState=e.data.data,this.totalPage=e.data.total):this.baseService.showLoading(!1)})}pageChange(e){this.pageNumber=e,this.getAllState()}onEdit(e){this.router.navigateByUrl("state/edit/"+e.id)}onDelete(e){this.modal.confirm({nzTitle:`<i>B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a state <b>${e.name}</b> n\xe0y kh\xf4ng?</i>`,nzOnOk:()=>{this.baseService.showLoading(!0),this.stateService.deleteStates(e.id).subscribe(n=>{this.baseService.showLoading(!1),0===n.error&&(this.baseService.showToast("X\xf3a state h\xe0ng th\xe0nh c\xf4ng",g.gT.TOAST_OK),this.getAllState())},()=>{this.baseService.showLoading(!1)})},nzClosable:!1,nzCancelText:"T\xf4i kh\xf4ng mu\u1ed1n",nzOkText:"\u0110\u1ed3ng \xfd"})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(x),t.Y36(g.bQ),t.Y36(c.qu),t.Y36(m.Sf),t.Y36(h.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["cms-state"]],decls:26,vars:9,consts:[[3,"title","close"],["action",""],["nz-button","","nzType","primary","routerLink","create"],["nz-icon","","nzType","plus","nzTheme","outline"],[1,"d-none","d-md-inline-block"],["content",""],[1,"my-3","pt-5"],[3,"nzData","nzFrontPagination","nzPageSize","nzPageIndex","nzTotal","nzFooter","nzPageIndexChange"],["expandTable",""],["nzWidth","160px"],[4,"ngFor","ngForOf"],["footer",""],[3,"click"],[4,"ngIf"],["nz-button","","nzType","text","title","S\u1eeda",1,"mr-1",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline"],["nz-button","","nzType","text","title","X\xf3a",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline",1,"text-danger"]],template:function(e,n){if(1&e&&(t.TgZ(0,"cms-page",0),t.TgZ(1,"div",1),t.TgZ(2,"a",2),t._UZ(3,"i",3),t.TgZ(4,"span",4),t._uU(5,"T\u1ea1o m\u1edbi"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"nz-table",7,8),t.NdJ("nzPageIndexChange",function(o){return n.pageChange(o)}),t.TgZ(10,"thead"),t.TgZ(11,"tr"),t.TgZ(12,"th"),t._uU(13,"STT"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"T\xean State"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Ng\u01b0\u1eddi s\u1edf h\u1eefu State"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Ghi ch\xfa"),t.qZA(),t.TgZ(20,"th",9),t._uU(21,"H\xe0nh \u0111\u1ed9ng"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"tbody"),t.YNc(23,st,15,4,"tr",10),t.qZA(),t.YNc(24,at,1,1,"ng-template",null,11,t.W1O),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const i=t.MAs(9),o=t.MAs(25);t.Q6J("title","Qu\u1ea3n l\xfd State")("close",!1),t.xp6(8),t.Q6J("nzData",n.lstState)("nzFrontPagination",!1)("nzPageSize",n.pageSize)("nzPageIndex",n.pageNumber)("nzTotal",n.totalPage)("nzFooter",o),t.xp6(15),t.Q6J("ngForOf",i.data)}},directives:[g.Zd,f.ix,h.yS,A.w,S.Ls,l.N8,l.Om,l.$Z,l.Uo,l._C,l.p0,d.sg,d.O5],styles:[".bbottom-uset[_ngcontent-%COMP%]{border-bottom:unset}"]}),s})()},{path:"detail/:id",component:et},{path:"create",component:O},{path:"edit/:id",component:O}];let rt=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[h.Bz.forChild(ot)],h.Bz]}),s})();var lt=r(84828),ct=r(83385),ut=r(55329);let gt=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[d.ez,rt,g.IR,l.HQ,c.u5,c.UX,f.sL,S.PV,m.Qp,p.U5,Z.o7,lt.we,ct.S,T.LV,ut.Rt,y.ZJ]]}),s})()}}]);