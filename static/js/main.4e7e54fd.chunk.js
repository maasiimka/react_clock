(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),r=n(4),s=n(1),u=(n(12),n(0)),m=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={today:new Date},e.clockId=null,e.formatDateToUTC=function(e){return e.toUTCString().slice(-12,-4)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.clockId=window.setInterval((function(){e.setState({today:new Date}),console.info(e.formatDateToUTC(e.state.today))}),1e3)}},{key:"componentWillUnmount",value:function(){var e=this.clockId;null!==e&&(window.clearInterval(e),this.clockId=null)}},{key:"render",value:function(){var e=this.formatDateToUTC,t=this.props.clockName;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e(this.state.today)})]})}}]),n}(s.Component);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=null,e.handleTimerOpening=function(){e.setState({hasClock:!0})},e.handleTimerClosing=function(t){t.preventDefault(),e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:d()})}),3300),document.addEventListener("click",this.handleTimerOpening),document.addEventListener("contextmenu",this.handleTimerClosing)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,c=n.clockName,a=n.hasClock;t.clockName!==c&&a&&console.debug("Renamed from ".concat(t.clockName," to ").concat(c))}},{key:"componentWillUnmount",value:function(){var e=this.timerId;null!==e&&window.clearInterval(e),document.removeEventListener("click",this.handleTimerOpening),document.removeEventListener("contextmenu",this.handleTimerClosing)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(m,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4e7e54fd.chunk.js.map