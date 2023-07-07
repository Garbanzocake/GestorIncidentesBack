"use strict";(self.webpackChunkGestorIncidentesFront=self.webpackChunkGestorIncidentesFront||[]).push([[293],{5293:(H,_,a)=>{a.r(_),a.d(_,{UsuariosModule:()=>K});var c=a(6814),v=a(3057),e=a(4946),I=a(5898),A=a(4567),q=a(3519),p=a.n(q),n=a(95),C=a(333),M=a(5568),D=a(9862),S=a(553);let x=(()=>{class t{constructor(){this.baseUrl=S.N.baseUrl,this.http=(0,e.f3M)(D.eN),this.ApiUrl="api/dependencias"}getDependencias(){return this.http.get(`${this.baseUrl}/${this.ApiUrl}`)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var N=a(9988);function F(t,r){1&t&&(e.TgZ(0,"h1",42),e._uU(1," Editar Usuario "),e.qZA())}function O(t,r){1&t&&(e.TgZ(0,"h1",42),e._uU(1," Registrar Usuario "),e.qZA())}function y(t,r){1&t&&(e.TgZ(0,"div",43)(1,"div",11)(2,"label",12),e._uU(3,"Id Usuario:"),e.qZA(),e._UZ(4,"input",44),e.qZA()())}function J(t,r){if(1&t&&(e.TgZ(0,"option",45),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.tdoc_nombre," ")}}function k(t,r){if(1&t&&(e.TgZ(0,"option",45),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.rol_nombre," ")}}function w(t,r){if(1&t&&(e.TgZ(0,"option",45),e._uU(1),e.qZA()),2&t){const o=r.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.dep_nombre," ")}}function L(t,r){1&t&&e._UZ(0,"input",46)}function Q(t,r){1&t&&e._UZ(0,"input",47)}function B(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,"Actualizar"),e.qZA())}function R(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,"Registrar"),e.qZA())}let Y=(()=>{class t{constructor(){this.fb=(0,e.f3M)(n.qu),this.tipoDocumentosService=(0,e.f3M)(M.h),this.dependenciasService=(0,e.f3M)(x),this.rolesService=(0,e.f3M)(N.f),this.usuariosService=(0,e.f3M)(I.J),this.authService=(0,e.f3M)(A.e),this.validatorService=(0,e.f3M)(C.S),this.TipoDocumentos=[],this.Dependencias=[],this.Roles=[],this.closeModal=new e.vpe,this.OnUsuario=!1,this.miFormulario=this.fb.group({id:[0],username:["",[n.kI.required,n.kI.minLength(4)]],nombre:["",[n.kI.required,n.kI.minLength(3)]],correo:["",[n.kI.required,n.kI.pattern(this.validatorService.emailPattern)]],password:["",[n.kI.required,n.kI.minLength(6)]],apellido:["",[n.kI.required,n.kI.minLength(3)]],telefono:["",[n.kI.required,n.kI.minLength(10),n.kI.pattern(this.validatorService.numberPattern)]],numDocumento:["",[n.kI.required,n.kI.minLength(6),n.kI.pattern(this.validatorService.numberPattern)]],roleId:[0,[n.kI.required,this.validatorService.cantBeZero]],tipoDocumentoId:[0,[n.kI.required,this.validatorService.cantBeZero]],dependenciaId:[0,[n.kI.required,this.validatorService.cantBeZero]]})}ngOnInit(){this.obtenerDependencias(),this.obtenerTipoDocumentos(),this.obtenerRoles(),this.usuarioRegistro=this.authService.usuarioLogueado(),this.miFormulario.setValue({id:0,username:"",nombre:"",correo:"",password:"",apellido:"",telefono:"",numDocumento:"",roleId:0,tipoDocumentoId:0,dependenciaId:0})}ngOnChanges(o){if(this.OnUsuario=void 0!==this.UsuarioInput,!0===this.OnUsuario){let{id:i,nombre:s,apellido:l,username:u,correo:f,telefono:h,numDocumento:g,dependenciaId:Z,roleId:d,tipoDocumentoId:m}=this.UsuarioInput;if("MONGO"===this.BDIncidente){const{idMYSQL:V}=this.UsuarioInput;i=V}this.miFormulario.setValue({id:i,nombre:s,apellido:l,username:u,correo:f,password:"",telefono:h,numDocumento:g,dependenciaId:Z,roleId:d,tipoDocumentoId:m})}}obtenerTipoDocumentos(){this.tipoDocumentosService.getTipoDocumentos().subscribe(({tipoDocumentosMy:o,tipoDocumentosMo:i})=>{this.TipoDocumentos=void 0===o?i:o})}obtenerDependencias(){this.dependenciasService.getDependencias().subscribe(({dependenciasMy:o,dependenciasMo:i})=>{this.Dependencias=void 0===o?i:o})}obtenerRoles(){this.rolesService.getRoles().subscribe(({rolesMy:o,rolesMo:i})=>{this.Roles=void 0===o?i:o})}onSubmit(){let{username:o,nombre:i,correo:s,password:l,apellido:u,telefono:f,roleId:h,tipoDocumentoId:g,dependenciaId:b,numDocumento:Z}=this.miFormulario.value,T=+b;if(this.miFormulario.invalid)this.miFormulario.markAllAsTouched();else if(!0===this.OnUsuario){let d={id:this.UsuarioInput.id,username:o,nombre:i,correo:s,password:l,apellido:u,telefono:f,roleId:h,tipoDocumentoId:g,dependenciaId:T,numDocumento:Z};console.log("Usuario a Actualizar",d),this.usuariosService.actualizarUsuario(d).subscribe(U=>{p().fire("Usuario Actualizado",U.msg,"success").then(m=>{m.isConfirmed&&location.reload()})})}else{let d={username:o,nombre:i,correo:s,password:l,apellido:u,telefono:f,roleId:h,tipoDocumentoId:g,dependenciaId:b,numDocumento:Z};console.log("Usuario a registrar",d),this.usuariosService.agregarUsuario(d).subscribe(U=>{p().fire("Usuario Creado",U.msg,"success").then(m=>{m.isConfirmed&&location.reload()})})}}cerrarModal(){this.closeModal.emit(!1),this.miFormulario.reset()}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-usuarioModal"]],inputs:{UsuarioInput:"UsuarioInput",BDIncidente:"BDIncidente",esAdmin:"esAdmin"},outputs:{closeModal:"closeModal"},features:[e.TTD],decls:76,vars:12,consts:[["id","Modal","tabindex","-1","aria-labelledby","Modal","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-xl","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["class","modal-title fs-5 m-0","id","exampleModalLabel",4,"ngIf"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],["autocomplete","off",1,"row",3,"formGroup","ngSubmit"],[1,"row"],["class","col-4 col-sm-2 p-0 mb-3",4,"ngIf"],[1,"col","col-sm"],[1,"mb-3"],["for","nombre",1,"form-label"],["type","text","id","nombre","formControlName","nombre","required","",1,"form-control"],[1,"col-6","col-sm"],["for","apellido",1,"form-label"],["type","text","id","apellido","formControlName","apellido","required","",1,"form-control"],["for","numDocumento",1,"form-label"],["type","text","id","numDocumento","formControlName","numDocumento","required","",1,"form-control"],["for","telefono",1,"form-label"],["type","text","id","telefono","formControlName","telefono","required","",1,"form-control"],[1,"col-12","col-sm"],["for","tipoDocumentoId"],["id","tipoDocumentoId","formControlName","tipoDocumentoId","required","",1,"form-select"],["value","0"],[3,"value",4,"ngFor","ngForOf"],["for","roleId"],["id","roleId","formControlName","roleId","required","",1,"form-select"],["for","dependenciaId"],["id","dependenciaId","formControlName","dependenciaId","required","",1,"form-select"],[1,"col-12","col-sm-4"],["for","username",1,"form-label"],["type","text","id","username","formControlName","username","required","",1,"form-control"],["for","correo",1,"form-label"],["type","text","id","correo","formControlName","correo","required","",1,"form-control"],[1,"col-12","col-sm-4","mb-3"],["for","password",1,"form-label"],["class","form-control","type","password","id","password","formControlName","password","placeholder","Ingrese una contrase\xf1a si desea cambiarla",4,"ngIf"],["class","form-control","type","password","id","password","formControlName","password","placeholder","Ingrese una contrase\xf1a ",4,"ngIf"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],[4,"ngIf"],["id","exampleModalLabel",1,"modal-title","fs-5","m-0"],[1,"col-4","col-sm-2","p-0","mb-3"],["type","text","id","id","formControlName","id","required","",1,"form-control-plaintext"],[3,"value"],["type","password","id","password","formControlName","password","placeholder","Ingrese una contrase\xf1a si desea cambiarla",1,"form-control"],["type","password","id","password","formControlName","password","placeholder","Ingrese una contrase\xf1a ",1,"form-control"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,F,2,0,"h1",4),e.YNc(5,O,2,0,"h1",4),e.TgZ(6,"button",5),e.NdJ("click",function(){return i.cerrarModal()}),e.qZA()(),e.TgZ(7,"div",6)(8,"form",7),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(9,"div",8),e.YNc(10,y,5,0,"div",9),e.TgZ(11,"div",10)(12,"div",11)(13,"label",12),e._uU(14," Nombre:"),e.qZA(),e._UZ(15,"input",13),e.qZA()(),e.TgZ(16,"div",14)(17,"div",11)(18,"label",15),e._uU(19,"Apellido:"),e.qZA(),e._UZ(20,"input",16),e.qZA()(),e.TgZ(21,"div",14)(22,"div",11)(23,"label",17),e._uU(24,"N. Documento:"),e.qZA(),e._UZ(25,"input",18),e.qZA()(),e.TgZ(26,"div",10)(27,"div",11)(28,"label",19),e._uU(29,"Telefono :"),e.qZA(),e._UZ(30,"input",20),e.qZA()()(),e.TgZ(31,"div",8)(32,"div",21)(33,"div",11)(34,"label",22),e._uU(35,"Tipo Documento:"),e.qZA(),e.TgZ(36,"select",23)(37,"option",24),e._uU(38,"Seleccionar opci\xf3n"),e.qZA(),e.YNc(39,J,2,2,"option",25),e.qZA()()(),e.TgZ(40,"div",21)(41,"div",11)(42,"label",26),e._uU(43,"Role:"),e.qZA(),e.TgZ(44,"select",27)(45,"option",24),e._uU(46,"Seleccionar opci\xf3n"),e.qZA(),e.YNc(47,k,2,2,"option",25),e.qZA()()(),e.TgZ(48,"div",21)(49,"div",11)(50,"label",28),e._uU(51,"Dependencia:"),e.qZA(),e.TgZ(52,"select",29)(53,"option",24),e._uU(54,"Seleccionar opci\xf3n"),e.qZA(),e.YNc(55,w,2,2,"option",25),e.qZA()()()(),e.TgZ(56,"div",8)(57,"div",30)(58,"div",11)(59,"label",31),e._uU(60," Username"),e.qZA(),e._UZ(61,"input",32),e.qZA()(),e.TgZ(62,"div",30)(63,"div",11)(64,"label",33),e._uU(65,"Correo del Usuario"),e.qZA(),e._UZ(66,"input",34),e.qZA()(),e.TgZ(67,"div",35)(68,"label",36),e._uU(69,"password :"),e.qZA(),e.YNc(70,L,1,0,"input",37),e.YNc(71,Q,1,0,"input",38),e.qZA()()()(),e.TgZ(72,"div",39)(73,"button",40),e.NdJ("click",function(){return i.onSubmit()}),e.YNc(74,B,2,0,"span",41),e.YNc(75,R,2,0,"span",41),e.qZA()()()()()),2&o&&(e.xp6(4),e.Q6J("ngIf",void 0!==i.UsuarioInput),e.xp6(1),e.Q6J("ngIf",void 0===i.UsuarioInput),e.xp6(3),e.Q6J("formGroup",i.miFormulario),e.xp6(2),e.Q6J("ngIf",i.OnUsuario),e.xp6(29),e.Q6J("ngForOf",i.TipoDocumentos),e.xp6(8),e.Q6J("ngForOf",i.Roles),e.xp6(8),e.Q6J("ngForOf",i.Dependencias),e.xp6(15),e.Q6J("ngIf",void 0!==i.UsuarioInput),e.xp6(1),e.Q6J("ngIf",void 0===i.UsuarioInput),e.xp6(2),e.Q6J("disabled",i.miFormulario.invalid),e.xp6(1),e.Q6J("ngIf",i.OnUsuario),e.xp6(1),e.Q6J("ngIf",!1===i.OnUsuario))},dependencies:[c.sg,c.O5,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.Q7,n.sg,n.u]}),t})();function z(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"tr",9)(1,"th",12),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"titlecase"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.ALo(20,"date"),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.ALo(23,"date"),e.qZA(),e.TgZ(24,"td")(25,"div",13)(26,"button",14),e.NdJ("click",function(){const l=e.CHM(o).$implicit,u=e.oxw();return e.KtG(u.editarUsuario(l))}),e._UZ(27,"i",15),e._uU(28," Editar "),e.qZA(),e.TgZ(29,"button",16),e.NdJ("click",function(){const l=e.CHM(o).$implicit,u=e.oxw();return e.KtG(u.eliminarUsuario(l))}),e._UZ(30,"i",17),e._uU(31," Eliminar "),e.qZA()()()()}if(2&t){const o=r.$implicit;e.xp6(2),e.Oqu(o.id),e.xp6(2),e.Oqu(e.lcZ(5,10,o.nombre)),e.xp6(3),e.Oqu(o.apellido),e.xp6(2),e.Oqu(o.correo),e.xp6(2),e.Oqu(o.dependencia.dep_nombre),e.xp6(2),e.Oqu(o.telefono),e.xp6(2),e.Oqu(o.numDocumento),e.xp6(2),e.Oqu(o.role.rol_nombre),e.xp6(2),e.Oqu(e.lcZ(20,12,o.createdAt)),e.xp6(3),e.Oqu(e.lcZ(23,14,o.updatedAt))}}let $=(()=>{class t{constructor(){this.usuarios=[],this.usuariosService=(0,e.f3M)(I.J),this.authService=(0,e.f3M)(A.e),this.router=(0,e.f3M)(v.F0),this.BDIncidente="",this.modalOn=!1,this.esAdmin=!1}ngOnInit(){"ADMIN_ROLE"===this.authService.role()&&(this.esAdmin=!0),this.obtenerUsuarios()}obtenerUsuarios(){this.usuariosService.getUsuarios().subscribe(({usuariosMy:o,usuariosMo:i})=>{o?(this.usuarios=o,this.BDIncidente="MYSQL"):(this.usuarios=i,this.BDIncidente="MONGO")})}crearUsuario(){}editarUsuario(o){this.usuarioSeleccionado=o}eliminarUsuario(o){console.log("Clickeado elimiar",o.nombre),this.usuarioSeleccionado=o,p().fire({title:"Seguro que desea eliminar el usuario?",text:"No podra revertir esto",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar Usuario!"}).then(i=>{i.isConfirmed&&this.usuariosService.borrarUsuario(o.id).subscribe(s=>{p().fire(`Usuario ${s.usuarioMy.nombre} Eliminado!`,`${s.msg}`,"success").then(l=>{l.isConfirmed&&location.reload()})})})}onCloseModal(o){this.modalOn=o,this.usuarioSeleccionado=void 0}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-listado"]],decls:35,vars:4,consts:[[1,"container-fluid","p-0","m-0"],[1,"row","d-flex","justify-content-around","m-0","p-0","animate__animated","animate__fadeIn"],[1,"col","p-2"],["type","button","data-bs-toggle","modal","data-bs-target","#Modal",1,"btn","btn-primary"],[1,"bi","bi-plus-lg"],[1,"col","d-flex","justify-content-end","p-2"],[1,"table-responsive"],[1,"table","table-bordered","table-hover","text-center","animate__animated","animate__fadeIn"],["scope","col"],[1,"animate__animated","animate__fadeIn"],["class","animate__animated animate__fadeIn",4,"ngFor","ngForOf"],[3,"UsuarioInput","BDIncidente","esAdmin","closeModal"],["scope","row"],[1,"d-flex","justify-content-center","align-content-center"],["type","button","data-bs-toggle","modal","data-bs-target","#Modal",1,"btn","btn-sm","me-1","backgroundColor","text-light","text-nowrap",3,"click"],["aria-hidden","true",1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm","me-1","text-nowrap",3,"click"],["aria-hidden","true",1,"fa","fa-trash-o"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e._UZ(4,"i",4),e.qZA()(),e._UZ(5,"div",5),e.qZA(),e.TgZ(6,"div",6)(7,"table",7)(8,"thead")(9,"tr")(10,"th",8),e._uU(11,"#"),e.qZA(),e.TgZ(12,"th",8),e._uU(13,"Nombre"),e.qZA(),e.TgZ(14,"th",8),e._uU(15,"Apellido"),e.qZA(),e.TgZ(16,"th",8),e._uU(17,"Correo"),e.qZA(),e.TgZ(18,"th",8),e._uU(19,"Dependencia"),e.qZA(),e.TgZ(20,"th",8),e._uU(21,"Telefono"),e.qZA(),e.TgZ(22,"th",8),e._uU(23,"Numero de Documento"),e.qZA(),e.TgZ(24,"th",8),e._uU(25,"Role"),e.qZA(),e.TgZ(26,"th",8),e._uU(27,"Fecha Creacion"),e.qZA(),e.TgZ(28,"th",8),e._uU(29,"Fecha Actualizacion"),e.qZA(),e.TgZ(30,"th",8),e._uU(31,"Acciones"),e.qZA()()(),e.TgZ(32,"tbody",9),e.YNc(33,z,32,16,"tr",10),e.qZA()()(),e.TgZ(34,"app-usuarioModal",11),e.NdJ("closeModal",function(l){return i.onCloseModal(l)}),e.qZA()()),2&o&&(e.xp6(33),e.Q6J("ngForOf",i.usuarios),e.xp6(1),e.Q6J("UsuarioInput",i.usuarioSeleccionado)("BDIncidente",i.BDIncidente)("esAdmin",i.esAdmin))},dependencies:[c.sg,Y,c.rS,c.uU],styles:[".backgroundColor[_ngcontent-%COMP%]{background-color:#3086f2}"]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-perfil"]],decls:2,vars:0,template:function(o,i){1&o&&(e.TgZ(0,"p"),e._uU(1,"perfil works!"),e.qZA())}}),t})();const G=[{path:"",children:[{path:"listado",canActivate:[a(1354).EQ],component:$},{path:"perfil",component:j},{path:"**",redirectTo:"listado"}]}];let P=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[v.Bz.forChild(G),v.Bz]}),t})();var X=a(2898);let K=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,n.UX,X.D,P]}),t})()}}]);