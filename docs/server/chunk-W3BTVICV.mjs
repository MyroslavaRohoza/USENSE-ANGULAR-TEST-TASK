import './polyfills.server.mjs';
import{A as I,B as G,C as T,D as V,E as D,F as j,G as Ce,H as Ve,J as De,N as be,Q as Me,R as re,T as Ae,U as Ee,V as we,W as Fe,Z as Ie,a as pe,b as ge,c as me,d as ve,da as Se,e as k,f as _,g as K,h as J,i as v,j as C,k as Q,l as h,m as ye,n as ee,o as _e,p as te,q as w,r as u,s as o,t as ie,u as y,v as f,w as ne,x as p,y as g,z as F}from"./chunk-36GBWWG5.mjs";import{a as l,b as d}from"./chunk-NDYDZJSS.mjs";var je=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(o(ie),o(te))},e.\u0275dir=h({type:e});let t=e;return t})(),gt=(()=>{let e=class e extends je{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=_e(e)))(s||e)}})(),e.\u0275dir=h({type:e,features:[y]});let t=e;return t})(),X=new v("");var mt={provide:X,useExisting:_(()=>Re),multi:!0};function vt(){let t=re()?re().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var yt=new v(""),Re=(()=>{let e=class e extends je{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!vt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(o(ie),o(te),o(yt,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&I("input",function(c){return s._handleInput(c.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(c){return s._compositionEnd(c.target.value)})},features:[V([mt]),y]});let t=e;return t})();var Ue=new v(""),Be=new v("");function He(t){return t!=null}function $e(t){return De(t)?ge(t):t}function Le(t){let e={};return t.forEach(n=>{e=n!=null?l(l({},e),n):e}),Object.keys(e).length===0?null:e}function We(t,e){return e.map(n=>n(t))}function _t(t){return!t.validate}function qe(t){return t.map(e=>_t(e)?e:n=>e.validate(n))}function Ct(t){if(!t)return null;let e=t.filter(He);return e.length==0?null:function(n){return Le(We(n,e))}}function ze(t){return t!=null?Ct(qe(t)):null}function Vt(t){if(!t)return null;let e=t.filter(He);return e.length==0?null:function(n){let i=We(n,e).map($e);return ve(i).pipe(me(Le))}}function Ze(t){return t!=null?Vt(qe(t)):null}function xe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Xe(t){return t._rawValidators}function Ye(t){return t._rawAsyncValidators}function se(t){return t?Array.isArray(t)?t:[t]:[]}function U(t,e){return Array.isArray(t)?t.includes(e):t===e}function Oe(t,e){let n=se(e);return se(t).forEach(r=>{U(n,r)||n.push(r)}),n}function Ne(t,e){return se(e).filter(n=>!U(t,n))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ze(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ze(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},A=class extends B{get formDirective(){return null}get path(){return null}},P=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},H=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},pi=d(l({},Dt),{"[class.ng-submitted]":"isSubmitted"}),Ke=(()=>{let e=class e extends H{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(P,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&ne("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[y]});let t=e;return t})(),Je=(()=>{let e=class e extends H{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(A,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&ne("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[y]});let t=e;return t})();var S="VALID",R="INVALID",b="PENDING",x="DISABLED",m=class{},$=class extends m{constructor(e,n){super(),this.value=e,this.source=n}},O=class extends m{constructor(e,n){super(),this.pristine=e,this.source=n}},N=class extends m{constructor(e,n){super(),this.touched=e,this.source=n}},M=class extends m{constructor(e,n){super(),this.status=e,this.source=n}},oe=class extends m{constructor(e){super(),this.source=e}},ae=class extends m{constructor(e){super(),this.source=e}};function Qe(t){return(Y(t)?t.validators:t)||null}function bt(t){return Array.isArray(t)?ze(t):t||null}function et(t,e){return(Y(e)?e.asyncValidators:t)||null}function Mt(t){return Array.isArray(t)?Ze(t):t||null}function Y(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function At(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new k(1e3,"");if(!i[n])throw new k(1001,"")}function Et(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new k(1002,"")})}var L=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new pe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===S}get invalid(){return this.status===R}get pending(){return this.status==b}get disabled(){return this.status===x}get enabled(){return this.status!==x}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Oe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ne(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(l({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new N(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new N(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(l({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new O(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new O(!0,i))}markAsPending(e={}){this.status=b;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new M(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(l({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=x,this.errors=null,this._forEachChild(r=>{r.disable(d(l({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,i)),this._events.next(new M(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(l({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this._forEachChild(i=>{i.enable(d(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(l({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S||this.status===b)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,n)),this._events.next(new M(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(l({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:S}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=b,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=$e(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new M(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(b)?b:this._anyControlsHaveStatus(R)?R:S}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new O(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new N(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Y(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=bt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Mt(this._rawAsyncValidators)}},W=class extends L{constructor(e,n,i){super(Qe(n),et(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Et(this,!0,e),Object.keys(e).forEach(i=>{At(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var tt=new v("CallSetDisabledState",{providedIn:"root",factory:()=>le}),le="always";function wt(t,e){return[...e.path,t]}function Pe(t,e,n=le){ue(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),It(t,e),xt(t,e),St(t,e),Ft(t,e)}function ke(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),z(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function q(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Ft(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ue(t,e){let n=Xe(t);e.validator!==null?t.setValidators(xe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Ye(t);e.asyncValidator!==null?t.setAsyncValidators(xe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();q(e._rawValidators,r),q(e._rawAsyncValidators,r)}function z(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Xe(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Ye(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return q(e._rawValidators,i),q(e._rawAsyncValidators,i),n}function It(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&it(t,e)})}function St(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&it(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function it(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function xt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Ot(t,e){t==null,ue(t,e)}function Nt(t,e){return z(t,e)}function Pt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function kt(t){return Object.getPrototypeOf(t.constructor)===gt}function Gt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Tt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===Re?n=s:kt(s)?i=s:r=s}),r||i||n||null}function jt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ge(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Te(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var de=class extends L{constructor(e=null,n,i){super(Qe(n),et(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Te(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ge(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ge(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Te(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Rt=t=>t instanceof de;var nt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var rt=new v("");var Ut={provide:A,useExisting:_(()=>ce)},ce=(()=>{let e=class e extends A{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new w,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Pe(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){ke(i.control||null,i,!1),jt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Gt(this.form,this.directives),this.ngSubmit.emit(i),this.form._events.next(new oe(this.control)),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1,this.form._events.next(new ae(this.form))}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(ke(r||null,i),Rt(s)&&(Pe(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Ot(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Nt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ue(this.form,this),this._oldForm&&z(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(o(Ue,10),o(Be,10),o(tt,8))},e.\u0275dir=h({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&I("submit",function(c){return s.onSubmit(c)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[V([Ut]),y,ee]});let t=e;return t})();var Bt={provide:P,useExisting:_(()=>he)},he=(()=>{let e=class e extends P{set isDisabled(i){}constructor(i,r,s,a,c){super(),this._ngModelWarningConfig=c,this._added=!1,this.name=null,this.update=new w,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Tt(this,a)}ngOnChanges(i){this._added||this._setUpControl(),Pt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return wt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(A,13),o(Ue,10),o(Be,10),o(X,10),o(rt,8))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[V([Bt]),y,ee]});let t=e;return t})();var Ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Q({type:e}),e.\u0275inj=J({});let t=e;return t})();var E=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:rt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:tt,useValue:i.callSetDisabledState??le}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Q({type:e}),e.\u0275inj=J({imports:[Ht]});let t=e;return t})();var st=(()=>{let e=class e{constructor(){this.value="",this.onChange=()=>{},this.onTouched=()=>{},this.label="Password"}writeValue(i){this.value=i}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}onInputChange(i){let r=i.target;this.value=r.value,this.onChange(this.value)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=C({type:e,selectors:[["app-custom-input"]],standalone:!0,features:[V([{provide:X,useExisting:_(()=>e),multi:!0}]),D],decls:4,vars:2,consts:[[1,"password-label"],["type","password","placeholder","Enter password...","id","password",1,"password-field",3,"input","value"]],template:function(r,s){r&1&&(p(0,"label",0)(1,"p"),G(2),g(),p(3,"input",1),I("input",function(c){return s.onInputChange(c)}),g()()),r&2&&(u(2),T(s.label),u(),f("value",s.value))},dependencies:[E],styles:[".password-field[_ngcontent-%COMP%]{padding:4px 8px}.password-label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-bottom:8px}"]});let t=e;return t})();var ot=/^[a-zA-Z]+$|^\d+$|^[^a-zA-Z\d]+$/,at=/^[a-zA-Z\d]+$|^[a-zA-Z^\W_]+$|^[\d^\W_]+$/,lt=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\W_]).+$/;var ut=(()=>{let e=class e{constructor(){}checkPasswordStrength(i){if(i.length===0)return"empty";if(i.length<8)return"not enough";if(i.length>=8){if(ot.test(i))return"easy";if(at.test(i))return"medium";if(lt.test(i))return"strong"}return"invalid"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var fe=t=>["indicator",t],dt=(()=>{let e=class e{setIndicators(i,r,s){this.firstIndicator=i,this.secondIndicator=r,this.thirdIndicator=s}constructor(i){this.passwordStrength=i,this.inputValue="",this.firstIndicator="gray",this.secondIndicator="gray",this.thirdIndicator="gray",this.form=new W({password:new de("")}),this.form.valueChanges.subscribe(r=>{this.onInputChange(r.password)})}onInputChange(i){let r=this.passwordStrength.checkPasswordStrength(i);switch(console.log(r),r){case"easy":this.setIndicators("red","gray","gray");break;case"medium":this.setIndicators("yellow","yellow","gray");break;case"strong":this.setIndicators("green","green","green");break;case"not enough":this.setIndicators("red","red","red");break;case"empty":this.setIndicators("gray","gray","gray");break;default:this.setIndicators("gray","gray","gray");break}}};e.\u0275fac=function(r){return new(r||e)(o(ut))},e.\u0275cmp=C({type:e,selectors:[["app-password-strength"]],standalone:!0,features:[D],decls:7,vars:11,consts:[[1,"password-strength-container"],[3,"formGroup"],[3,"formControlName"],[1,"difficulty-indicator-container"],[3,"ngClass"]],template:function(r,s){r&1&&(p(0,"div",0)(1,"form",1),F(2,"app-custom-input",2),p(3,"div",3),F(4,"div",4)(5,"div",4)(6,"div",4),g()()()),r&2&&(u(),f("formGroup",s.form),u(),f("formControlName","password"),u(2),f("ngClass",j(5,fe,s.firstIndicator)),u(),f("ngClass",j(7,fe,s.secondIndicator)),u(),f("ngClass",j(9,fe,s.thirdIndicator)))},dependencies:[Ae,E,nt,Ke,Je,ce,he,st],styles:[".difficulty-indicator-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:2px}.password-strength-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.indicator[_ngcontent-%COMP%]{height:3px;border-radius:1.5px}.gray[_ngcontent-%COMP%]{border:1px solid lightgray;background-color:#d3d3d3}.red[_ngcontent-%COMP%]{border:1px solid rgb(255,0,0);background-color:red}.yellow[_ngcontent-%COMP%]{border:1px solid rgb(255,255,0);background-color:#ff0}.green[_ngcontent-%COMP%]{border:1px solid rgb(0,255,0);background-color:#0f0}"]});let t=e;return t})();var ct=(()=>{let e=class e{constructor(){this.title="usense-angular-test-task"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=C({type:e,selectors:[["app-root"]],standalone:!0,features:[D],decls:5,vars:3,consts:[[1,"password-strength-section"],[1,"title"]],template:function(r,s){r&1&&(p(0,"section",0)(1,"h1",1),G(2),Ce(3,"uppercase"),g(),F(4,"app-password-strength"),g()),r&2&&(u(2),T(Ve(3,1,s.title)))},dependencies:[Ee,dt],styles:[".title[_ngcontent-%COMP%]{text-align:center;color:#00bff4;margin:40px 0}.password-strength-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"]});let t=e;return t})();var ht=[];var ft={providers:[be({eventCoalescing:!0}),Se(ht),Fe(),ye(E)]};var Wt={providers:[Ie()]},pt=Me(ft,Wt);var qt=()=>we(ct,pt),Wi=qt;export{Wi as a};