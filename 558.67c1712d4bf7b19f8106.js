"use strict";(self.webpackChunksmartlocker_workspace=self.webpackChunksmartlocker_workspace||[]).push([[558],{7558:(ie,x,a)=>{a.r(x),a.d(x,{PermisionsModule:()=>te});var p=a(8583),A=a(9895),u=a(3679),l=a(9090),e=a(7716),T=a(9765),v=a(1841);let Z=(()=>{class t{constructor(n){this.httpClient=n,this.reloadGroupList$=new T.xQ,this.reloadPermissionList$=new T.xQ,this.editPermissionGroupDialog$=new T.xQ,this.editPermissionDialog$=new T.xQ}reloadGroup(){this.reloadGroupList$.next()}reloadPermission(){this.reloadPermissionList$.next()}showEditPermissionGroup(n){this.editPermissionGroupDialog$.next(n)}showEditPermission(n){this.editPermissionDialog$.next(n)}getAllGroup(){return this.httpClient.get("smartlocker/api/v1/admin/permision-groups")}setListPermissionGroup(n){this.listPermissionGroup=n}createGroup(n){return this.httpClient.post("smartlocker/api/v1/admin/permision-groups",JSON.stringify({id:null,name:n}))}updateGroup(n,i){return this.httpClient.put("smartlocker/api/v1/admin/permision-groups/"+n,JSON.stringify({id:n,name:i}))}deleteGroup(n){return this.httpClient.delete("smartlocker/api/v1/admin/permision-groups/"+n)}getPermission(n=0,i=10,o="",r=0){let c="smartlocker/api/v1/admin/permissions?page="+n+"&size="+i;return o&&""!==o.trim()&&(c+="&name.contains="+o),r&&(c+="&groupId.equals="+r),this.httpClient.get(c)}createPermission(n,i){return this.httpClient.post("smartlocker/api/v1/admin/permissions",JSON.stringify({group:{id:i,name:null},id:null,name:n}))}deletePermission(n){return this.httpClient.delete("smartlocker/api/v1/admin/permissions/"+n)}updatePermission(n,i,o){return this.httpClient.put("smartlocker/api/v1/admin/permissions/"+n,JSON.stringify({group:{id:o,name:null},id:n,name:i}))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(v.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=a(4453),S=a(9374),P=a(4514),C=a(3599),b=a(4828),g=a(6214),h=a(6704),_=a(7674),d=a(269),m=a(3654);function E(t,s){1&t&&e._UZ(0,"i",15)}function F(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"i",17),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).keyword=null}),e.qZA()}}function y(t,s){if(1&t&&e.YNc(0,F,1,0,"i",16),2&t){const n=e.oxw();e.Q6J("ngIf",n.keyword)}}function G(t,s){if(1&t&&e._UZ(0,"nz-option",18),2&t){const n=s.$implicit;e.Q6J("nzValue",n.id)("nzLabel",n.name)}}function q(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td",19),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e.TgZ(6,"button",20),e.NdJ("click",function(){const r=e.CHM(n).$implicit;return e.oxw().editPermission(r)}),e._UZ(7,"i",21),e.qZA(),e.TgZ(8,"button",22),e.NdJ("click",function(){const r=e.CHM(n).$implicit;return e.oxw().deletePermission(r)}),e._UZ(9,"i",23),e.qZA(),e.qZA(),e.qZA()}if(2&t){const n=s.$implicit;e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.group.name)}}function N(t,s){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.hij("T\u1ed5ng ",n.total," b\u1ea3n ghi")}}function k(t,s){if(1&t&&e.YNc(0,N,2,1,"span",24),2&t){const n=e.oxw();e.Q6J("ngIf",n.total)}}let J=(()=>{class t{constructor(n,i,o){this.baseService=n,this.permissionService=i,this.modal=o,this.page=1,this.size=10,this.total=0,this.keyword="",this.group=0,this.permissionService.reloadPermissionList$.subscribe(()=>{this.reload()})}ngOnInit(){this.page=1,this.size=10,setTimeout(()=>{this.reload()},300),setTimeout(()=>{this.groupList=this.permissionService.listPermissionGroup},3e3)}reload(){this.baseService.showLoading(!0),this.permissionService.getPermission(this.page-1,this.size,this.keyword,this.group).subscribe(n=>{this.baseService.showLoading(!1),0===n.error&&(this.listPermissions=n.data.data,this.total=n.data.total)},()=>this.baseService.showLoading(!1))}editPermission(n){this.permissionService.showEditPermission(n)}deletePermission(n){this.modal.confirm({nzTitle:"<i>B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a quy\u1ec1n n\xe0y kh\xf4ng?</i>",nzContent:"<b>"+n.name+"</b>",nzOnOk:()=>{this.baseService.showLoading(!0),this.permissionService.deletePermission(n.id).subscribe(i=>{this.baseService.showLoading(!1),0===i.error&&(this.baseService.showToast("X\xf3a quy\u1ec1n th\xe0nh c\xf4ng",l.gT.TOAST_OK),this.reload())},()=>{this.baseService.showLoading(!1)})},nzClosable:!1,nzCancelText:"T\xf4i kh\xf4ng mu\u1ed1n",nzOkText:"\u0110\u1ed3ng \xfd"})}pageChange(n){this.page=n,this.reload()}changePage(n){this.page=n,this.reload()}changeSize(n){this.size=n,this.reload()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.bQ),e.Y36(Z),e.Y36(g.Sf))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cms-permission-list"]],decls:27,vars:13,consts:[["nz-row","",1,"mt-2","mb-4","filter-panel",3,"nzGutter"],["nz-col","","nzXs","8","nzSm","14","nzMd","14","nzLg","14","nzXl","14","nzXXl","14"],[3,"nzPrefix","nzSuffix"],["type","text","nz-input","","placeholder","Nh\u1eadp t\u1eeb kh\xf3a",3,"ngModel","ngModelChange","keyup.enter"],["suffixIconSearch",""],["inputClearTpl",""],["nz-col","","nzXs","10","nzSm","6","nzMd","6","nzLg","6","nzXl","6","nzXXl","6"],["nzPlaceHolder","Nh\xf3m quy\u1ec1n","nzBlock","","nzAllowClear","",2,"width","100%",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nz-col","","nzXs","6","nzSm","4","nzMd","4","nzLg","4","nzXl","4","nzXXl","4"],["nz-button","","nzType","primary","nzBlock","",3,"click"],[3,"nzData","nzFrontPagination","nzPageSize","nzPageIndex","nzTotal","nzFooter","nzPageSizeChange","nzPageIndexChange"],["nzWidth","160px"],[4,"ngFor","ngForOf"],["footer",""],["nz-icon","","nzType","search"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],[3,"nzValue","nzLabel"],[1,"text-bold"],["nz-button","","nzType","text","title","S\u1eeda",1,"mr-1",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline"],["nz-button","","nzType","text","title","X\xf3a",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline",1,"text-danger"],[4,"ngIf"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"nz-input-group",2),e.TgZ(3,"input",3),e.NdJ("ngModelChange",function(r){return i.keyword=r})("keyup.enter",function(){return i.reload()}),e.qZA(),e.qZA(),e.YNc(4,E,1,0,"ng-template",null,4,e.W1O),e.YNc(6,y,1,1,"ng-template",null,5,e.W1O),e.qZA(),e.TgZ(8,"div",6),e.TgZ(9,"nz-select",7),e.NdJ("ngModelChange",function(r){return i.group=r}),e.YNc(10,G,1,2,"nz-option",8),e.qZA(),e.qZA(),e.TgZ(11,"div",9),e.TgZ(12,"button",10),e.NdJ("click",function(){return i.reload()}),e._uU(13," T\xecm ki\u1ebfm "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"nz-table",11),e.NdJ("nzPageSizeChange",function(r){return i.changeSize(r)})("nzPageIndexChange",function(r){return i.changePage(r)}),e.TgZ(15,"thead"),e.TgZ(16,"tr"),e.TgZ(17,"th"),e._uU(18,"T\xean Quy\u1ec1n"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Nh\xf3m"),e.qZA(),e.TgZ(21,"th",12),e._uU(22,"H\xe0nh \u0111\u1ed9ng"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"tbody"),e.YNc(24,q,10,2,"tr",13),e.qZA(),e.YNc(25,k,1,1,"ng-template",null,14,e.W1O),e.qZA()),2&n){const o=e.MAs(5),r=e.MAs(7),c=e.MAs(26);e.Q6J("nzGutter",12),e.xp6(2),e.Q6J("nzPrefix",o)("nzSuffix",r),e.xp6(1),e.Q6J("ngModel",i.keyword),e.xp6(6),e.Q6J("ngModel",i.group),e.xp6(1),e.Q6J("ngForOf",i.groupList),e.xp6(4),e.Q6J("nzData",i.listPermissions)("nzFrontPagination",!1)("nzPageSize",i.size)("nzPageIndex",i.page)("nzTotal",i.total)("nzFooter",c),e.xp6(10),e.Q6J("ngForOf",i.listPermissions)}},directives:[h.SK,h.t3,P.w,_.gB,_.ke,_.Zp,u.Fj,u.JJ,u.On,d.Vq,p.sg,f.ix,S.dQ,m.N8,m.Om,m.$Z,m.Uo,m._C,m.p0,C.Ls,p.O5,d.Ip],styles:[".filter-panel[_ngcontent-%COMP%]{max-width:800px}"]}),t})();function w(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td",3),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.TgZ(4,"button",4),e.NdJ("click",function(){const r=e.CHM(n).$implicit;return e.oxw().editPermissionGroup(r)}),e._UZ(5,"i",5),e.qZA(),e.TgZ(6,"button",6),e.NdJ("click",function(){const r=e.CHM(n).$implicit;return e.oxw().deletePermissionGroup(r)}),e._UZ(7,"i",7),e.qZA(),e.qZA(),e.qZA()}if(2&t){const n=s.$implicit;e.xp6(2),e.Oqu(n.name)}}let Q=(()=>{class t{constructor(n,i,o){this.permissionService=n,this.modal=i,this.baseService=o,this.page=1,this.size=10,this.total=0,this.keyword="",this.group=0,this.permissionService.reloadGroupList$.subscribe(()=>{this.reloadPermissionGroup()})}ngOnInit(){this.reloadPermissionGroup()}reloadPermissionGroup(){this.permissionService.getAllGroup().subscribe(n=>{this.listOfGroup=n.data.data,this.permissionService.setListPermissionGroup(this.listOfGroup)})}deletePermissionGroup(n){this.modal.confirm({nzTitle:"<i>B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a nh\xf3m quy\u1ec1n n\xe0y kh\xf4ng?</i>",nzContent:"<b>"+n.name+"</b>",nzOnOk:()=>{this.baseService.showLoading(!0),this.permissionService.deleteGroup(n.id).subscribe(i=>{this.baseService.showLoading(!1),0===i.error&&(this.baseService.showToast("X\xf3a nh\xf3m quy\u1ec1n th\xe0nh c\xf4ng",l.gT.TOAST_OK),this.reloadPermissionGroup())},()=>{this.baseService.showLoading(!1)})},nzClosable:!1,nzCancelText:"T\xf4i kh\xf4ng mu\u1ed1n",nzOkText:"\u0110\u1ed3ng \xfd"})}editPermissionGroup(n){this.permissionService.showEditPermissionGroup(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(Z),e.Y36(g.Sf),e.Y36(l.bQ))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cms-group-permission"]],decls:9,vars:3,consts:[[3,"nzData","nzFrontPagination"],["nzWidth","160px"],[4,"ngFor","ngForOf"],[1,"text-bold"],["nz-button","","nzType","text","title","S\u1eeda",1,"mr-1",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline"],["nz-button","","nzType","text","title","X\xf3a",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline",1,"text-danger"]],template:function(n,i){1&n&&(e.TgZ(0,"nz-table",0),e.TgZ(1,"thead"),e.TgZ(2,"tr"),e.TgZ(3,"th"),e._uU(4,"T\xean Nh\xf3m"),e.qZA(),e.TgZ(5,"th",1),e._uU(6,"H\xe0nh \u0111\u1ed9ng"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"tbody"),e.YNc(8,w,8,1,"tr",2),e.qZA(),e.qZA()),2&n&&(e.Q6J("nzData",i.listOfGroup)("nzFrontPagination",!1),e.xp6(8),e.Q6J("ngForOf",i.listOfGroup))},directives:[m.N8,m.Om,m.$Z,m.Uo,m._C,m.p0,p.sg,f.ix,P.w,C.Ls],styles:[""]}),t})();var z=a(5887);function L(t,s){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"form",15),e.NdJ("ngSubmit",function(){return e.CHM(n),e.oxw().submitGroup()}),e.TgZ(2,"nz-form-item"),e.TgZ(3,"nz-form-label",16),e.TgZ(4,"span"),e._uU(5,"T\xean nh\xf3m"),e.qZA(),e.qZA(),e.TgZ(6,"nz-form-control",17),e._UZ(7,"input",18),e.qZA(),e.qZA(),e._UZ(8,"button",19),e.qZA(),e.BQk()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("formGroup",n.createGroupForm)("nzLayout","vertical"),e.xp6(2),e.Q6J("nzSm",22)("nzXs",24),e.xp6(3),e.Q6J("nzSm",24)("nzXs",24)}}function O(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"button",20),e.NdJ("click",function(){return e.CHM(n),e.oxw().submitGroup()}),e._uU(2," T\u1ea1o Nh\xf3m Quy\u1ec1n "),e.qZA(),e.TgZ(3,"button",21),e.NdJ("click",function(){return e.CHM(n),e.oxw().cancelGroup()}),e._uU(4,"H\u1ee7y"),e.qZA(),e.qZA()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("nzLoading",n.groupSubmitting)}}function U(t,s){1&t&&(e.ynx(0),e._uU(1,"Vui l\xf2ng t\xean nh\xf3m quy\u1ec1n!"),e.BQk())}function V(t,s){1&t&&(e.ynx(0),e._uU(1,"Vui l\xf2ng kh\xf4ng nh\u1eadp c\xe1c k\xed t\u1ef1 \u0111\u1eb7c bi\u1ec7t: ~,!,#,$,%,^,&,*,(,),+,[,],;,?"),e.BQk())}function M(t,s){if(1&t&&(e.YNc(0,U,2,0,"ng-container",25),e.YNc(1,V,2,0,"ng-container",25)),2&t){const n=s.$implicit;e.Q6J("ngIf",(n.hasError("required")||n.hasError("whitespace"))&&!n.hasError("specialcharacter")),e.xp6(1),e.Q6J("ngIf",n.hasError("specialcharacter"))}}function D(t,s){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"form",15),e.NdJ("ngSubmit",function(){return e.CHM(n),e.oxw().submitGroup()}),e.TgZ(2,"nz-form-item",19),e._UZ(3,"input",22),e.qZA(),e.TgZ(4,"nz-form-item"),e.TgZ(5,"nz-form-label",16),e.TgZ(6,"span"),e._uU(7,"T\xean nh\xf3m"),e.qZA(),e.qZA(),e.TgZ(8,"nz-form-control",23),e._UZ(9,"input",18),e.YNc(10,M,2,2,"ng-template",null,24,e.W1O),e.qZA(),e.qZA(),e._UZ(12,"button",19),e.qZA(),e.BQk()}if(2&t){const n=e.MAs(11),i=e.oxw();e.xp6(1),e.Q6J("formGroup",i.createGroupForm)("nzLayout","vertical"),e.xp6(4),e.Q6J("nzSm",22)("nzXs",24),e.xp6(3),e.Q6J("nzSm",24)("nzXs",24)("nzErrorTip",n)}}function X(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"button",20),e.NdJ("click",function(){return e.CHM(n),e.oxw().submitGroup()}),e._uU(2),e.qZA(),e.TgZ(3,"button",26),e.NdJ("click",function(){return e.CHM(n),e.oxw().cancelGroup()}),e._uU(4," H\u1ee7y "),e.qZA(),e.qZA()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("nzLoading",n.groupSubmitting),e.xp6(1),e.hij(" ",n.editGroupFlag?"C\u1eadp nh\u1eadt":"T\u1ea1o Nh\xf3m Quy\u1ec1n"," "),e.xp6(1),e.Q6J("disabled",n.groupSubmitting)}}function Y(t,s){1&t&&(e.ynx(0),e._uU(1,"Vui l\xf2ng t\xean quy\u1ec1n!"),e.BQk())}function I(t,s){if(1&t&&(e.ynx(0),e._uU(1),e.BQk()),2&t){const n=e.oxw(3);e.xp6(1),e.hij("Vui l\xf2ng kh\xf4ng nh\u1eadp c\xe1c k\xed t\u1ef1 \u0111\u1eb7c bi\u1ec7t: ",n.regexcheck,"")}}function $(t,s){if(1&t&&(e.YNc(0,Y,2,0,"ng-container",25),e.YNc(1,I,2,1,"ng-container",25)),2&t){const n=s.$implicit;e.Q6J("ngIf",(n.hasError("required")||n.hasError("whitespace"))&&!n.hasError("specialcharacter")),e.xp6(1),e.Q6J("ngIf",n.hasError("specialcharacter"))}}function H(t,s){if(1&t&&e._UZ(0,"nz-option",33),2&t){const n=s.$implicit;e.Q6J("nzValue",n.id)("nzLabel",n.name)}}function B(t,s){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"form",15),e.NdJ("ngSubmit",function(){return e.CHM(n),e.oxw().submitPermission()}),e.TgZ(2,"nz-form-item",19),e._UZ(3,"input",22),e.qZA(),e.TgZ(4,"nz-form-item"),e.TgZ(5,"nz-form-label",27),e.TgZ(6,"span"),e._uU(7,"T\xean quy\u1ec1n"),e.qZA(),e.qZA(),e.TgZ(8,"nz-form-control",23),e._UZ(9,"input",28),e.YNc(10,$,2,2,"ng-template",null,29,e.W1O),e.qZA(),e.qZA(),e.TgZ(12,"nz-form-item"),e.TgZ(13,"nz-form-label",16),e.TgZ(14,"span"),e._uU(15,"Thu\u1ed9c nh\xf3m"),e.qZA(),e.qZA(),e.TgZ(16,"nz-form-control",30),e.TgZ(17,"nz-select",31),e.YNc(18,H,1,2,"nz-option",32),e.qZA(),e.qZA(),e.qZA(),e._UZ(19,"button",19),e.qZA(),e.BQk()}if(2&t){const n=e.MAs(11),i=e.oxw();e.xp6(1),e.Q6J("formGroup",i.createPermissionForm)("nzLayout","vertical"),e.xp6(4),e.Q6J("nzSm",22)("nzXs",24),e.xp6(3),e.Q6J("nzSm",24)("nzXs",24)("nzErrorTip",n),e.xp6(5),e.Q6J("nzSm",22)("nzXs",24),e.xp6(3),e.Q6J("nzSm",24)("nzXs",24),e.xp6(2),e.Q6J("ngForOf",i.listGroup)}}function j(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"button",20),e.NdJ("click",function(){return e.CHM(n),e.oxw().submitPermission()}),e._uU(2),e.qZA(),e.TgZ(3,"button",26),e.NdJ("click",function(){return e.CHM(n),e.oxw().cancelPermission()}),e._uU(4," H\u1ee7y "),e.qZA(),e.qZA()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("nzLoading",n.permissionSubmitting),e.xp6(1),e.hij(" ",n.editPermissionFlag?"C\u1eadp nh\u1eadt":"T\u1ea1o Quy\u1ec1n"," "),e.xp6(1),e.Q6J("disabled",n.permissionSubmitting)}}const W=[{path:"",component:(()=>{class t{constructor(n,i,o){this.fb=n,this.baseService=i,this.permissionService=o,this.tabSelected=0,this.showCreateGroup=!1,this.groupSubmitting=!1,this.editGroupFlag=!1,this.showCreatePermission=!1,this.permissionSubmitting=!1,this.editPermissionFlag=!1,this.regexcheck="~,!,@,#,$,%,^,&,*,|,+,-,=,?,;,',\",.,<,>,{,},[,],,/",this.permissionService.editPermissionGroupDialog$.subscribe(r=>{this.showCreateGroupModal(!0),this.createGroupForm.get("id").setValue(r.id),this.createGroupForm.get("groupName").setValue(r.name)}),this.permissionService.editPermissionDialog$.subscribe(r=>{this.showCreatePermissionModal(!0),this.createPermissionForm.get("id").setValue(r.id),this.createPermissionForm.get("name").setValue(r.name),this.createPermissionForm.get("groupName").setValue(r.group.id)})}noWhitespaceValidator(n){return 0!==(n.value||"").trim().length?null:{whitespace:!0}}checkspecialcharacter(n){return/[`~!@#$%^&*|+\-=?;'",.<>\{\}\[\]\\\/]/gi.test(n.value)?{specialcharacter:!0}:null}ngOnInit(){this.createGroupForm=this.fb.group({id:[null],groupName:[null,[u.kI.required,this.noWhitespaceValidator,this.checkspecialcharacter]]}),this.createPermissionForm=this.fb.group({id:[null],name:[null,[u.kI.required,this.noWhitespaceValidator,this.checkspecialcharacter]],groupName:[null,[u.kI.required]]})}showCreateGroupModal(n=!1){this.groupSubmitting=!1,this.showCreateGroup=!0,this.editGroupFlag=n,this.createGroupForm.get("id").setValue(null),this.createGroupForm.get("groupName").setValue(null)}showCreatePermissionModal(n=!1){this.permissionSubmitting=!1,this.showCreatePermission=!0,this.listGroup=this.permissionService.listPermissionGroup,this.editPermissionFlag=n,this.createPermissionForm.get("id").setValue(null),this.createPermissionForm.get("name").setValue(null),this.createPermissionForm.get("groupName").setValue(null)}submitGroup(){for(const n in this.createGroupForm.controls)this.createGroupForm.controls.hasOwnProperty(n)&&(this.createGroupForm.controls[n].markAsDirty(),this.createGroupForm.controls[n].updateValueAndValidity());this.createGroupForm.invalid||(this.groupSubmitting=!0,this.editGroupFlag?this.permissionService.updateGroup(this.createGroupForm.get("id").value,this.createGroupForm.get("groupName").value).subscribe(n=>{this.groupSubmitting=!1,0===n.error&&(this.baseService.showToast("C\u1eadp nh\u1eadt nh\xf3m quy\u1ec1n th\xe0nh c\xf4ng",l.gT.TOAST_OK),setTimeout(()=>{this.cancelGroup(),this.tabSelected=1,this.permissionService.reloadGroup()},300))},n=>{this.groupSubmitting=!1}):this.permissionService.createGroup(this.createGroupForm.get("groupName").value).subscribe(n=>{this.groupSubmitting=!1,0===n.error&&(this.baseService.showToast("T\u1ea1o m\u1edbi nh\xf3m quy\u1ec1n th\xe0nh c\xf4ng",l.gT.TOAST_OK),setTimeout(()=>{this.cancelGroup(),this.tabSelected=1,this.permissionService.reloadGroup()},300))},n=>{this.groupSubmitting=!1}))}submitPermission(){for(const n in this.createPermissionForm.controls)this.createPermissionForm.controls.hasOwnProperty(n)&&(this.createPermissionForm.controls[n].markAsDirty(),this.createPermissionForm.controls[n].updateValueAndValidity());this.createPermissionForm.invalid||(this.permissionSubmitting=!0,this.editPermissionFlag?this.permissionService.updatePermission(this.createPermissionForm.get("id").value,this.createPermissionForm.get("name").value,this.createPermissionForm.get("groupName").value).subscribe(n=>{0===n.error&&(this.baseService.showToast("C\u1eadp nh\u1eadt quy\u1ec1n th\xe0nh c\xf4ng",l.gT.TOAST_OK),setTimeout(()=>{this.cancelPermission(),this.tabSelected=0,this.permissionService.reloadPermission()},300))}):this.permissionService.createPermission(this.createPermissionForm.get("name").value,this.createPermissionForm.get("groupName").value).subscribe(n=>{0===n.error&&(this.baseService.showToast("T\u1ea1o quy\u1ec1n th\xe0nh c\xf4ng",l.gT.TOAST_OK),setTimeout(()=>{this.cancelPermission(),this.tabSelected=0,this.permissionService.reloadPermission()},300))}))}cancelGroup(){this.showCreateGroup=!1}cancelPermission(){this.showCreatePermission=!1}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.qu),e.Y36(l.bQ),e.Y36(Z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cms-permisions"]],decls:25,vars:11,consts:[[3,"title","close"],["action",""],["nz-button","","nzType","primary",1,"mr-3",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline"],[1,"d-none","d-md-inline-block"],["nz-button","","nzType","primary",3,"click"],["nz-icon","","nzType","folder-add","nzTheme","outline"],["content","",1,"my-3","mx-0","mx-md-3"],[3,"nzSelectedIndex"],["nzTitle","Quy\u1ec1n"],["nzTitle","Nh\xf3m quy\u1ec1n"],["nzTitle","T\u1ea1o m\u1edbi nh\xf3m quy\u1ec1n",3,"nzVisible","nzClosable","nzVisibleChange"],[4,"nzModalContent"],[4,"nzModalFooter"],[3,"nzVisible","nzClosable","nzTitle","nzVisibleChange"],["nz-form","",3,"formGroup","nzLayout","ngSubmit"],["nzFor","groupName","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Vui l\xf2ng nh\u1eadp t\xean nh\xf3m!",3,"nzSm","nzXs"],["nz-input","","id","groupName","formControlName","groupName","placeholder","Nh\u1eadp t\xean nh\xf3m"],[1,"d-none"],["nz-button","","nzType","primary",1,"m-2",3,"nzLoading","click"],["nz-button","","nzType","default",3,"click"],["type","hidden","nz-input","","id","id","formControlName","id"],[3,"nzSm","nzXs","nzErrorTip"],["errorGroupName",""],[4,"ngIf"],["nz-button","","nzType","default",3,"disabled","click"],["nzFor","name","nzRequired","",3,"nzSm","nzXs"],["nz-input","","id","name","formControlName","name","placeholder","Nh\u1eadp t\xean quy\u1ec1n"],["errorName",""],["nzErrorTip","Vui l\xf2ng ch\u1ecdn nh\xf3m quy\u1ec1n!",3,"nzSm","nzXs"],["formControlName","groupName","nzPlaceHolder","Ch\u1ecdn nh\xf3m quy\u1ec1n"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(n,i){1&n&&(e.TgZ(0,"cms-page",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return i.showCreatePermissionModal()}),e._UZ(3,"i",3),e.TgZ(4,"span",4),e._uU(5,"T\u1ea1o Quy\u1ec1n"),e.qZA(),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return i.showCreateGroupModal()}),e._UZ(7,"i",6),e.TgZ(8,"span",4),e._uU(9,"T\u1ea1o Nh\xf3m quy\u1ec1n"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",7),e.TgZ(11,"nz-tabset",8),e.TgZ(12,"nz-tab",9),e._UZ(13,"cms-permission-list"),e.qZA(),e.TgZ(14,"nz-tab",10),e._UZ(15,"cms-group-permission"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"nz-modal",11),e.NdJ("nzVisibleChange",function(r){return i.showCreateGroup=r}),e.YNc(17,L,9,6,"ng-container",12),e.YNc(18,O,5,1,"div",13),e.qZA(),e.TgZ(19,"nz-modal",14),e.NdJ("nzVisibleChange",function(r){return i.showCreateGroup=r}),e.YNc(20,D,13,7,"ng-container",12),e.YNc(21,X,5,3,"div",13),e.qZA(),e.TgZ(22,"nz-modal",14),e.NdJ("nzVisibleChange",function(r){return i.showCreatePermission=r}),e.YNc(23,B,20,12,"ng-container",12),e.YNc(24,j,5,3,"div",13),e.qZA()),2&n&&(e.Q6J("title","Qu\u1ea3n l\xfd Quy\u1ec1n")("close",!1),e.xp6(11),e.Q6J("nzSelectedIndex",i.tabSelected),e.xp6(5),e.Q6J("nzVisible",i.showCreateGroup)("nzClosable",!1),e.xp6(3),e.Q6J("nzVisible",i.showCreateGroup)("nzClosable",!1)("nzTitle",i.editGroupFlag?"Ch\u1ec9nh s\u1eeda nh\xf3m quy\u1ec1n":"T\u1ea1o m\u1edbi nh\xf3m quy\u1ec1n"),e.xp6(3),e.Q6J("nzVisible",i.showCreatePermission)("nzClosable",!1)("nzTitle",i.editPermissionFlag?"Ch\u1ec9nh s\u1eeda Quy\u1ec1n":"T\u1ea1o m\u1edbi Quy\u1ec1n"))},directives:[l.Zd,f.ix,S.dQ,P.w,C.Ls,b.xH,b.xw,J,Q,g.du,g.Hf,g.Uh,u._Y,u.JL,z.Lr,u.sg,h.SK,z.Nx,h.t3,z.iK,z.Fd,_.Zp,u.Fj,u.JJ,u.u,p.O5,d.Vq,p.sg,d.Ip],styles:[""]}),t})(),data:{shouldDetach:!0}}];let K=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[A.Bz.forChild(W)],A.Bz]}),t})();var R=a(7018),ee=a(2079),ne=a(2677);let te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.ez,K,R.vh,l.IR,f.sL,C.PV,_.o7,z.U5,u.u5,u.UX,h.Jb,m.HQ,d.LV,ee.Wr,ne.ZJ,b.we,g.Qp,v.JF]]}),t})()}}]);