(this["webpackJsonpreact-timer-stateful-component"]=this["webpackJsonpreact-timer-stateful-component"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),r=a.n(c),o=(a(13),a(3)),i=a(4),l=a(6),m=a(5),u=a(7),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).Start=function(){a.myInterval=setInterval((function(){a.setState({seconds:a.state.seconds+1})}),1e3),a.setState({isOn:!0,btnText:"Pause"})},a.Reset=function(){clearInterval(a.myInterval),a.setState({seconds:0,isOn:!1,btnText:"Start"})},a.Stop=function(){clearInterval(a.myInterval),a.setState({isOn:!1,btnText:"Start"})},a.state={seconds:0,isOn:!1,btnText:"Start"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"msToTime",value:function(e){var t=e%60,a=(e=(e-t)/60)%60,n=(e-a)/60;return n=n<10?"0"+n:n,a=a<10?"0"+a:a,t=t<10?"0"+t:t,s.a.createElement("div",{className:"output"},s.a.createElement("div",{className:"output-flex"},s.a.createElement("span",{id:"hours"},n),s.a.createElement("span",{className:"date-text"},"Hours")),s.a.createElement("div",{className:"output-flex"},s.a.createElement("span",{id:"hours"},":"),s.a.createElement("span",{className:"date-text"},":")),s.a.createElement("div",{className:"output-flex"},s.a.createElement("span",{id:"minutes"},a),s.a.createElement("span",{className:"date-text"},"Minutes")),s.a.createElement("div",{className:"output-flex"},s.a.createElement("span",{id:"hours"},":"),s.a.createElement("span",{className:"date-text"},":")),s.a.createElement("div",{className:"output-flex"},s.a.createElement("span",{id:"secondes"},t),s.a.createElement("span",{className:"date-text"},"Secondes")))}},{key:"render",value:function(){return s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"main-container-output"},this.msToTime(this.state.seconds),s.a.createElement("div",{className:"btns"},s.a.createElement("button",{id:"btn-start-pause",onClick:this.state.isOn?this.Stop:this.Start},this.state.btnText),s.a.createElement("button",{id:"btn-reset",onClick:this.Reset},"Reset"))))}}]),t}(n.Component);a(14);var p=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4c434bfe.chunk.js.map