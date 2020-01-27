(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/spin.629ea48a.gif"},42:function(e,t,a){e.exports=a(79)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=(a(47),a(12)),l=a(13),s=a(15),u=a(14),m=a(16),p=(a(48),a(17),function(e){return r.a.createElement("div",{id:"input"},r.a.createElement("i",{className:"fas fa-search fa-2x"}),r.a.createElement("h2",null,"Search for Movie and Tv Series..."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:" form-control my-2 ",placeholder:"Type here for get info",onChange:function(t){e.takeInput(t,"text")}})),r.a.createElement("button",{className:"btn btn-dark ",onClick:e.takeOperation},"Search Now..."))}),f=(a(49),function(e){return r.a.createElement("div",{id:"error"},r.a.createElement("h1",null,"Not found page"))}),d=a(7),E=(a(54),a(11)),h=Object(d.b)((function(e){return{fetchMovies:e.fetchMovies,status:e.status}}))((function(e){return r.a.createElement("div",{className:"row",id:"movie"},e.fetchMovies.map((function(t){return!0===e.status?r.a.createElement("div",{key:t.imdbID,className:"col-xl-4 col-lg-4 col-sm-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{id:"imgOfCard"},r.a.createElement("img",{src:t.Poster,alt:"not found"})),r.a.createElement("p",null,t.Title," - ",t.Year),r.a.createElement(E.b,{to:"/MovieInfo/"+t.imdbID,className:"btn btn-dark text-light"},"More Details"))):!1===e.status?r.a.createElement("div",{key:0},r.a.createElement(f,null)):void 0})))})),v=a(39),b=a.n(v).a.create({baseURL:"https://www.omdbapi.com/",timeout:1e4}),O="3f2aa8ea",g=a(19),I=a(22),y={inputValue:"",status:!1,loading:!1,fetchMovies:[],movieInfoObj:{}},j=a(40),k=Object(g.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return Object(I.a)({},e,{status:t.payLoad.status,fetchMovies:t.payLoad.fetchMovies,inputValue:t.payLoad.searchValue,loading:!1});case"FETCH_MOVIE":return Object(I.a)({},e,{movieInfoObj:t.payLoad,loading:!1});case"LOADING":return Object(I.a)({},e,{loading:!0});default:return e}}),Object(g.a)(j.a));k.subscribe((function(){}));var M=a(41),N=a.n(M),x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{id:"spinnerImage",src:N.a,style:{width:"300px",margin:"auto",display:"block"},alt:"Loading...."}))},D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).searchObj={},a.state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"takeInput",value:function(e,t){this.searchObj[t]=e.target.value}},{key:"takeOperation",value:function(){k.dispatch({type:"LOADING"});var e=function(e){var t="?apikey=".concat(O,"&s=").concat(e);return function(a){b.get(t).then((function(t){"True"===t.data.Response?a({payLoad:{fetchMovies:t.data.Search,searchValue:e,status:!0},type:"SEARCH_MOVIE"}):a({payLoad:{fetchMovies:[{}],searchValue:e,status:!1},type:"SEARCH_MOVIE"})})).catch((function(e){console.log("Error:- ",e)}))}}(this.searchObj.text);k.dispatch(e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{takeOperation:this.takeOperation.bind(this),takeInput:this.takeInput.bind(this)}),r.a.createElement("div",{className:"container"},this.props.loading?r.a.createElement(x,null):r.a.createElement(h,null)))}}]),t}(r.a.Component),L=Object(d.b)((function(e){return{loading:e.loading}}))(D),S=a(10),w=(a(74),Object(d.b)((function(e){return{movieInfo:e.movieInfoObj}}))((function(e){return r.a.createElement("div",{id:"about"},r.a.createElement("h1",null,"Quick Story"),r.a.createElement("p",null,e.movieInfo.Plot),r.a.createElement(E.b,{to:"/Movies-Series-Info/",className:"link btn btn-primary"},"Go Back To Search"))}))),R=(a(75),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){k.dispatch({type:"LOADING"});var e=function(e){var t="?apikey=".concat(O,"&i=").concat(e);return function(e){b.get(t).then((function(t){e({payLoad:t.data,type:"FETCH_MOVIE"}),console.log(t.data)})).catch((function(e){console.log("Rejected due to:- ",e)}))}}(this.props.match.params.ID);k.dispatch(e)}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"moviesInfo"},r.a.createElement("div",{className:"row",key:this.props.movieInfo.imdbID},r.a.createElement("div",{className:"col imgOfMovie"},r.a.createElement("img",{src:this.props.movieInfo.Poster,alt:"not found"})),r.a.createElement("div",{className:"col disc"},r.a.createElement("h2",null,this.props.movieInfo.Title),r.a.createElement("p",null,"Released : ",r.a.createElement("span",null,this.props.movieInfo.Released)),r.a.createElement("p",null,"Genre : ",r.a.createElement("span",null,this.props.movieInfo.Genre)),r.a.createElement("p",null,"Rated : ",r.a.createElement("span",null,this.props.movieInfo.imdbRating)),r.a.createElement("p",null,"Director : ",r.a.createElement("span",null,this.props.movieInfo.Director)),r.a.createElement("p",null,"Writer : ",r.a.createElement("span",null,this.props.movieInfo.Writer)),r.a.createElement("p",null,"Actor : ",r.a.createElement("span",null,this.props.movieInfo.Actors)),r.a.createElement("p",null,"Language : ",r.a.createElement("span",null,this.props.movieInfo.Language)),r.a.createElement("p",null,"Box Office : ",r.a.createElement("span",null,this.props.movieInfo.BoxOffice))))),r.a.createElement(w,null)),t=this.props.loading?r.a.createElement(x,null):e;return r.a.createElement("div",null,t)}}]),t}(r.a.Component)),C=Object(d.b)((function(e){return{movieInfo:e.movieInfoObj,loading:e.loading}}))(R),V=(a(76),function(e){return r.a.createElement("div",{className:"d-flex justify-content-around",id:"navbar"},r.a.createElement("h1",null,"Movies & TV Series Info"),r.a.createElement("i",{className:"fas fa-video fa-4x"}))}),A=(a(77),function(e){return r.a.createElement("div",{id:"footerDiv"},r.a.createElement("h6",null,"Developed By: ",r.a.createElement("span",{id:"name"},r.a.createElement("a",{href:"https://yusuf4all.github.io/Resume/index.html",target:"_blank",rel:"noopener noreferrer"},"Yusuf Khan"))," , Using ",r.a.createElement("i",{className:"fab fa-react"})," React JS & Redux JS Integrated With External Movies Data API ",r.a.createElement("span",{id:"api"},r.a.createElement("a",{href:"http://www.omdbapi.com/",target:"_blank",rel:"noopener noreferrer"},"OMDB")),"."))}),T=(a(78),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"app"},r.a.createElement(V,{id:"navbar"}),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/Movies-Series-Info/",component:L}),r.a.createElement(S.a,{path:"/MovieInfo/:ID",component:C}),r.a.createElement(S.a,{render:function(){return r.a.createElement("h1",null,"Wrong Url")}})),r.a.createElement(A,null))}}]),t}(r.a.Component));o.a.render(r.a.createElement(d.a,{store:k},r.a.createElement(E.a,null,r.a.createElement(T,null))),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e57017e1.chunk.js.map