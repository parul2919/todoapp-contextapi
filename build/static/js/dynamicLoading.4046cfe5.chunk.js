webpackJsonp([3],{86:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),i=n.n(u),c=n(24),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this;return i.a.createElement(c.a.Consumer,null,function(t){var n=t.list,r=t.createItem,o=t.handleInput,a=t.handleKeyPress;return i.a.createElement(u.Fragment,null,i.a.createElement("div",{className:"ToDo-Container"},i.a.createElement("input",{type:"text",onChange:o.bind(e),onKeyPress:a.bind(e)}),i.a.createElement("button",{className:"button todo-add",onClick:r.bind(e)},"ADD ITEM")),n.map(function(e,t){return i.a.createElement("div",{key:t},e.todo)}))})}}]),t}(u.Component);t.default=f}});
//# sourceMappingURL=dynamicLoading.4046cfe5.chunk.js.map