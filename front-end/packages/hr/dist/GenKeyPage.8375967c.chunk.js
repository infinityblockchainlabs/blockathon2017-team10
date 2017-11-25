webpackJsonp([5],{1180:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(7),c=r(u),s=n(1181),f=r(s);n(1387);var d=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement(f.default,null)}}]),t}(u.Component);d.propTypes={},d.defaultProps={},t.default=d},1181:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1182);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})},1182:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(7),c=r(u),s=n(314),f=r(s),d=n(526),p=r(d);n(1383);var y=n(544),m=r(y),g=n(545),h=(r(g),n(546)),b=(r(h),n(395)),_=r(b),v=new p.default,w=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onGenKey=function(){e.setState({isGenerated:!1,isShowPrivateKey:!1,address:null,privateKey:null});var t=v.eth.accounts.create(),n=t.address,r=t.privateKey;e.setState({isGenerated:!0,address:n,privateKey:r})},e.onToggleShowPrivateKey=function(){e.setState({isShowPrivateKey:!e.state.isShowPrivateKey})},e.state={isGenerated:!1,isShowPrivateKey:!1,address:null,privateKey:null},e}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"genkey-container container"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-8 offset-md-2"},this.state.isGenerated?c.default.createElement("div",null,c.default.createElement(m.default,{align:"center"},"Create A New Keypair"),c.default.createElement(f.default,{className:"content-wrapper",justify:"center",align:"center"},c.default.createElement(f.default,{margin:"medium",align:"center",justify:"start"},c.default.createElement(m.default,{tag:"h2",strong:!0},"Your address:"),c.default.createElement(m.default,{tag:"h3"},this.state.address),c.default.createElement(m.default,{tag:"h2",strong:!0},"Your private key:"),c.default.createElement(m.default,{tag:"h3"},this.state.isShowPrivateKey?c.default.createElement("span",null,this.state.privateKey," ",c.default.createElement("i",{style:{marginLeft:"5px",cursor:"pointer"},className:"fa fa-lock","aria-hidden":"true",onClick:this.onToggleShowPrivateKey})):c.default.createElement("i",{style:{cursor:"pointer"},className:"fa fa-unlock-alt fa-2x","aria-hidden":"true",onClick:this.onToggleShowPrivateKey})),c.default.createElement(_.default,{label:this.state.isGenerated?"Generate again":"Generate",onClick:this.onGenKey,primary:!0}),c.default.createElement(m.default,{tag:"h4"},c.default.createElement("i",null,c.default.createElement("i",{className:"fa fa-exclamation-circle fa-lg","aria-hidden":"true",style:{marginRight:"5px"}}),"Please store your private key carefully, you will need this key to access your file later"))))):c.default.createElement(f.default,{justify:"center",align:"center",pad:"medium"},c.default.createElement(m.default,{align:"center"},"Create A New Keypair"),c.default.createElement(_.default,{label:this.state.isGenerated?"Generate again":"Generate",onClick:this.onGenKey,primary:!0})))))}}]),t}(u.Component);w.propTypes={},w.defaultProps={},t.default=w},1383:function(e,t,n){var r=n(1384);"string"==typeof r&&(r=[[e.i,r,""]]);n(118)(r,{});r.locals&&(e.exports=r.locals)},1384:function(e,t,n){t=e.exports=n(68)(),t.push([e.i,".genkey-container{padding:20px 0}.genkey-container .content-wrapper{box-shadow:0 2px 13px 0 hsla(0,0%,75%,.5)}.genkey-container__goal-status{min-height:calc(100vh - 48px - 50px)}.genkey-container__goal-status>.grommetux-box__body{display:flex}.genkey-container__goal-status .empty-state{flex-grow:1;color:#9b9b9b;font-size:16px}.genkey-container .grommetux-heading h1{margin-top:100px}.genkey-container .grommetux-button{min-height:50px;min-width:200px;margin-top:30px;margin-bottom:15px;font-size:16px}.genkey-container__form-fields{margin-bottom:32px}.genkey-container__form{margin-top:35px;width:50%}.genkey-container__form .grommetux-form-field{width:100%;margin-bottom:23px}.genkey-container__form .grommetux-form-field:last-child{margin-bottom:0}.genkey-container__form-actions{text-align:center}.genkey-container__form-actions .grommetux-button{min-width:160px}",""])},1387:function(e,t,n){var r=n(1388);"string"==typeof r&&(r=[[e.i,r,""]]);n(118)(r,{});r.locals&&(e.exports=r.locals)},1388:function(e,t,n){t=e.exports=n(68)(),t.push([e.i,"",""])},269:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1180);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(a).default}})}});