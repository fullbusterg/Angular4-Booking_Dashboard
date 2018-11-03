webpackJsonp([6],{u7w9:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("3j3K"),l=function(){return function(){}}(),i=e("mzNJ"),a=e("aYYk"),d=e("685D"),p=e("WtPQ"),r=e("qkbC"),s=e("ARuB"),c=e("71di"),m=e("g5jc"),u=e("ttK3"),f=e("gz6t"),g=e("PJh5"),h=function(){function t(t,n,e){this.header=t,this.apis=n,this.tokenStorage=e,this.componetDestroyed=new m.Subject,this.loading=!1,this.pageSize=10,this.pageNumber=0,this.offSet=0,this.totalElements=0,this.columns=[{prop:"No"},{prop:"Type"},{prop:"Date"},{prop:"Comment"}],this.offset=0,this.all_count=0}return t.prototype.ngOnInit=function(){var t=this;this.header.setPage(c.e.Notifications,c.f.None),this.notifications=[],this.displayedColumns=["No","Type","Date","Comment"],this.tokenStorage.getUserInfo().takeUntil(this.componetDestroyed).subscribe(function(n){t.current_user=n,t.getNotification()})},t.prototype.getNotification=function(){var t=this;this.startLoading(),this.apis.getNotification(this.current_user.id,this.offset).takeUntil(this.componetDestroyed).subscribe(function(n){t.endLoading();var e=[];if(n.data.data.length){var o=t.notifications.slice(0);n.data.data.forEach(function(t,n){var o={b_id:t.id,Type:t.type,Date:t.updated_at,Comment:t.updated_at,params1:"",params2:"",template:""};switch(o.params2=g(t.updated_at).format("hh:mm A MMM D"),t.type){case"BookingCreated":o.params1="#"+t.key_info1,o.template="NOTIFICATION_BOOKING_CREATED";break;case"BookingChanged":o.params1="#"+t.key_info1,o.template="NOTIFICATION_BOOKING_CHANGED";break;case"BookingDeleted":o.params1="#"+t.key_info1,o.template="NOTIFICATION_BOOKING_DELETED";break;case"GuestCreated":o.params1=t.key_info2,o.template="NOTIFICATION_GUEST_CREATED";break;case"GuestChanged":o.params1=t.key_info2,o.template="NOTIFICATION_GUEST_CHANGED";break;case"GuestDeleted":o.params1=t.key_info2,o.template="NOTIFICATION_GUEST_DELETED";break;case"StaffCreated":o.params1=t.key_info2,o.template="NOTIFICATION_STAFF_CREATED";break;case"StaffChanged":o.params1=t.key_info2,o.template="NOTIFICATION_STAFF_CHANGED";break;case"StaffDeleted":o.params1=t.key_info2,o.template="NOTIFICATION_STAFF_DELETED";break;default:o.params1=t.type,o.template="NOTIFICATION_BOOKING_CREATED"}e.push(o)}),o=o.concat(e),t.offset=n.data.next_offset,t.all_count=n.data.all_count,t.notifications=o}},function(n){t.endLoading(),console.log("error"),t.notifications=[]})},t.prototype.ngOnDestroy=function(){this.componetDestroyed.next(),this.componetDestroyed.unsubscribe()},t.prototype.onScrollDown=function(){console.log("Scrolled"),-1==this.offset||this.loading||this.getNotification()},t.prototype.startLoading=function(){this.loading=!0},t.prototype.endLoading=function(){this.loading=!1},t.ctorParameters=function(){return[{type:c.d},{type:u.a},{type:f.a}]},t}(),b=e("slB3"),N=e("2Je8"),_=[["[hidden]{display:none!important}app-notifications{width:100%;height:100%;background:#25292d}.notifications{position:relative;overflow:hidden;height:100%}.notifications-list{margin-top:20px;overflow:scroll;height:calc(100% - 140px);padding:50px 20px}.notifications-list__notify{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#292f35;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.2);box-shadow:0 1px 2px 0 rgba(0,0,0,.2);border-radius:4px;padding:32px 36px;margin-top:20px;margin-left:20px;margin-right:20px}.notifications-list__notify:first-child{margin-top:0}"]],y=o["\u0275crt"]({encapsulation:2,styles:_,data:{}});function C(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,8,"div",[["class","notifications-list__notify"]],null,null,null,null,null)),(t()(),o["\u0275ted"](-1,null,["\n            "])),(t()(),o["\u0275ted"](-1,null,["\n            "])),(t()(),o["\u0275ted"](-1,null,["\n            "])),(t()(),o["\u0275eld"](4,0,null,null,3,"div",[["class","notifications-list__notify-comment"]],null,null,null,null,null)),(t()(),o["\u0275ted"](5,null,["",""])),o["\u0275pod"](6,{params1:0,params2:1}),o["\u0275pid"](131072,d.a,[p.a,o.ChangeDetectorRef]),(t()(),o["\u0275ted"](-1,null,["\n        "]))],null,function(t,n){t(n,5,0,o["\u0275unv"](n,5,0,o["\u0275nov"](n,7).transform(n.context.$implicit.template,t(n,6,0,n.context.$implicit.params1,n.context.$implicit.params2))))})}function T(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,11,"div",[["class","notifications"]],null,null,null,null,null)),(t()(),o["\u0275ted"](-1,null,["\n    "])),(t()(),o["\u0275eld"](2,0,null,null,1,"ngx-loading",[],null,null,null,r.b,r.a)),o["\u0275did"](3,114688,null,0,s.b,[s.c],{show:[0,"show"]},null),(t()(),o["\u0275ted"](-1,null,["  \n\n    "])),(t()(),o["\u0275eld"](5,0,null,null,5,"div",[["class","notifications-list"],["infiniteScroll",""]],null,[[null,"scrolled"]],function(t,n,e){var o=!0,l=t.component;"scrolled"===n&&(o=!1!==l.onScrollDown()&&o);return o},null,null)),o["\u0275did"](6,4866048,null,0,b.a,[o.ElementRef,o.NgZone],{infiniteScrollDistance:[0,"infiniteScrollDistance"],infiniteScrollThrottle:[1,"infiniteScrollThrottle"],scrollWindow:[2,"scrollWindow"]},{scrolled:"scrolled"}),(t()(),o["\u0275ted"](-1,null,["\n        "])),(t()(),o["\u0275and"](16777216,null,null,1,null,C)),o["\u0275did"](9,802816,null,0,N.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),o["\u0275ted"](-1,null,["\n    "])),(t()(),o["\u0275ted"](-1,null,["\n"])),(t()(),o["\u0275ted"](-1,null,["\n"]))],function(t,n){var e=n.component;t(n,3,0,e.loading);t(n,6,0,2,100,!1),t(n,9,0,e.notifications)},null)}var k=o["\u0275ccf"]("app-notifications",h,function(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"app-notifications",[],null,null,null,T,y)),o["\u0275did"](1,245760,null,0,h,[c.d,u.a,f.a],null,null)],function(t,n){t(n,1,0)},null)},{},{},[]),I=e("NVOs"),D=e("9Sd6"),O=e("Qbdm"),E=e("XHgV"),x=e("6sdf"),S=e("U/+3"),v=e("Uo70"),A=e("1T37"),F=e("+j5Y"),w=e("NwsS"),R=e("SSMX"),M=e("214W"),G=e("/jm2"),L=e("gsLf"),j=e("8A5H"),U=e("86rF"),B=e("bkcK"),H=e("TBIh"),K=e("XMYV"),z=e("W91W"),W=e("idUy"),Z=e("K4ha"),P=e("5ilh"),Y=e("pBHo"),J=e("/j9b"),V=e("5oXY"),X=function(){return function(){}}();e.d(n,"NotificationsModuleNgFactory",function(){return $});var $=o["\u0275cmf"](l,[],function(t){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,a.a,k]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,N.NgLocalization,N.NgLocaleLocalization,[o.LOCALE_ID]),o["\u0275mpd"](4608,I.C,I.C,[]),o["\u0275mpd"](4608,I.f,I.f,[]),o["\u0275mpd"](6144,D.b,null,[O.DOCUMENT]),o["\u0275mpd"](4608,D.c,D.c,[[2,D.b]]),o["\u0275mpd"](4608,E.a,E.a,[]),o["\u0275mpd"](4608,x.a,x.a,[]),o["\u0275mpd"](4608,S.j,S.j,[E.a]),o["\u0275mpd"](4608,S.i,S.i,[S.j,E.a,o.NgZone]),o["\u0275mpd"](136192,S.e,S.c,[[3,S.e],E.a]),o["\u0275mpd"](5120,S.n,S.m,[[3,S.n],[2,S.k],E.a]),o["\u0275mpd"](5120,S.h,S.f,[[3,S.h],o.NgZone,E.a]),o["\u0275mpd"](4608,O.HAMMER_GESTURE_CONFIG,v.f,[]),o["\u0275mpd"](5120,A.c,A.a,[[3,A.c],o.NgZone,E.a]),o["\u0275mpd"](5120,A.f,A.e,[[3,A.f],E.a,o.NgZone,A.c]),o["\u0275mpd"](4608,F.g,F.g,[A.c,A.f]),o["\u0275mpd"](5120,F.d,F.j,[[3,F.d]]),o["\u0275mpd"](4608,F.m,F.m,[A.f]),o["\u0275mpd"](4608,F.b,F.b,[F.g,F.d,o.ComponentFactoryResolver,F.m,o.ApplicationRef,o.Injector,o.NgZone]),o["\u0275mpd"](5120,F.k,F.l,[F.b]),o["\u0275mpd"](5120,w.a,w.b,[F.b]),o["\u0275mpd"](4608,v.e,v.e,[]),o["\u0275mpd"](4608,R.g,R.g,[]),o["\u0275mpd"](4608,R.h,R.h,[]),o["\u0275mpd"](4608,s.c,s.c,[[2,"loadingConfig"]]),o["\u0275mpd"](4608,M.ScrollbarHelper,M.ScrollbarHelper,[O.DOCUMENT]),o["\u0275mpd"](4608,G.DimensionsHelper,G.DimensionsHelper,[]),o["\u0275mpd"](512,N.CommonModule,N.CommonModule,[]),o["\u0275mpd"](512,I.z,I.z,[]),o["\u0275mpd"](512,I.l,I.l,[]),o["\u0275mpd"](512,I.w,I.w,[]),o["\u0275mpd"](512,L.g,L.g,[]),o["\u0275mpd"](512,L.c,L.c,[]),o["\u0275mpd"](512,j.a,j.a,[]),o["\u0275mpd"](512,v.c,v.c,[]),o["\u0275mpd"](512,D.a,D.a,[]),o["\u0275mpd"](256,v.g,!0,[]),o["\u0275mpd"](512,v.m,v.m,[[2,v.g]]),o["\u0275mpd"](512,E.b,E.b,[]),o["\u0275mpd"](512,v.y,v.y,[]),o["\u0275mpd"](512,x.c,x.c,[]),o["\u0275mpd"](512,S.a,S.a,[]),o["\u0275mpd"](512,U.b,U.b,[]),o["\u0275mpd"](512,B.f,B.f,[]),o["\u0275mpd"](512,A.b,A.b,[]),o["\u0275mpd"](512,F.e,F.e,[]),o["\u0275mpd"](512,v.w,v.w,[]),o["\u0275mpd"](512,v.t,v.t,[]),o["\u0275mpd"](512,H.c,H.c,[]),o["\u0275mpd"](512,w.d,w.d,[]),o["\u0275mpd"](512,K.n,K.n,[]),o["\u0275mpd"](512,z.k,z.k,[]),o["\u0275mpd"](512,R.d,R.d,[]),o["\u0275mpd"](512,W.a,W.a,[]),o["\u0275mpd"](512,Z.a,Z.a,[]),o["\u0275mpd"](512,P.a,P.a,[]),o["\u0275mpd"](512,Y.a,Y.a,[]),o["\u0275mpd"](512,s.a,s.a,[]),o["\u0275mpd"](512,J.NgxDatatableModule,J.NgxDatatableModule,[]),o["\u0275mpd"](512,V.n,V.n,[[2,V.s],[2,V.k]]),o["\u0275mpd"](512,X,X,[]),o["\u0275mpd"](512,b.b,b.b,[]),o["\u0275mpd"](512,l,l,[]),o["\u0275mpd"](1024,V.i,function(){return[[{path:"",component:h}]]},[])])})}});