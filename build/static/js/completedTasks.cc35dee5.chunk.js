webpackJsonp([1],{84:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),c=n.n(l),u=n(87),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c.a.createElement(u.a,{className:"completed",labelContent:"completed"})}}]),t}(l.Component);t.default=s},87:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var o=n(0),a=n.n(o),l=n(24),c=function(e){var t=e.className,n=e.labelContent;e.list,r(e,["className","labelContent","list"]);return console.log("labelContent",n),a.a.createElement(l.a.Consumer,null,function(e){return e.list.map(function(e,r){return a.a.createElement("div",{className:t,key:r},n===e.status?e.todo:"")})})};c.defaultProps={className:"",labelContent:"",list:[]},t.a=c}});
//# sourceMappingURL=completedTasks.cc35dee5.chunk.js.map