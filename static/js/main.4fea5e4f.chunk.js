(this["webpackJsonpreact-hw-02-feedback"]=this["webpackJsonpreact-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),o=a(3),u=a(4),i=a(5),s=a(7),m=a(6),d=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement(r.a.Fragment,null,Object.keys(t).map((function(e){return r.a.createElement("button",{key:e,name:e,onClick:function(e){return a(e)}},e)})))},b=function(e){var t=e.message;return r.a.createElement("p",null,t)},g=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,l=e.positivePercentage;return r.a.createElement("div",null,c>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"good: ",t),r.a.createElement("p",null,"neutral: ",a),r.a.createElement("p",null,"bad: ",n),r.a.createElement("p",null,"total: ",c),r.a.createElement("p",null,"percentage: ",l," %")):r.a.createElement(b,{message:"No feedback given"}))},p=function(e){var t=e.title,a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),r.a.createElement("div",null,a))},E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.changeStatistics=function(t){t.persist();var a=t.target.name;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return(100*e.state.good/e.countTotalFeedback()).toFixed(2)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"Please leave feedback"},r.a.createElement(d,{options:this.state,onLeaveFeedback:this.changeStatistics})),r.a.createElement(p,{title:"Statistics"},r.a.createElement(g,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})))}}]),a}(n.Component);var f=function(){return r.a.createElement(E,null)};l.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.4fea5e4f.chunk.js.map