/*! For license information please see component---src-pages-index-js-80453cb10b17b7020641.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"01oN":function(e,t,a){e.exports=a.p+"static/minipalm-89a96343b705c10daf3d2b24bbc77532.jpg"},"7W2i":function(e,t,a){var n=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},ALOV:function(e,t,a){e.exports=a.p+"static/PeaceLilly-1c597c12693f761c2e631f434634ffdd.jpg"},Bdhx:function(e,t,a){e.exports=a.p+"static/neopothosbig-b5d1fe1c1baf3f73848e60f862702c66.jpg"},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EIqs:function(e,t,a){e.exports=a.p+"static/sapna_blesson_resume-1a897853314705cf7c6f0bb41c8446ba.pdf"},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var l=+new Date;!!t&&l<t+n?(clearTimeout(a),a=setTimeout((function(){t=l,e()}),n)):(t=l,e())}};t.default=n},Ijbi:function(e,t,a){var n=a("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,a(t)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},"Pp/3":function(e,t,a){e.exports=a.p+"static/pothoswall-a1399752a9fdf3a9199d21eccd068d4e.jpg"},RIqP:function(e,t,a){var n=a("Ijbi"),l=a("EbDI"),r=a("ZhPi"),s=a("Bnag");e.exports=function(e){return n(e)||l(e)||r(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("7oih");function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var o=a("dI71"),i=a("YIkO"),c=a.n(i),m=a("dwco"),u=a.n(m),d=function(e){return e.children},p=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(s(t)),t}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){u.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,l=n.type,r=n.element,s=n.offset,o=n.timeout;if(l&&r)switch(l){case"class":a=!!(t=document.getElementsByClassName(r)[0]);break;case"id":a=!!(t=document.getElementById(r))}a?this.scrollTo(t,s,o):console.log("Element not found: "+r)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},a.render=function(){return l.a.createElement(d,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(l.a.Component),f=a("mfl7"),h=a.n(f),g=a("obyI"),b=a.n(g),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"},{content:"Download",href:"download"}],isCollapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(s(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},a.render=function(){var e=this.state,t=e.tabs,a=e.isCollapsed;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},l.a.createElement("a",{className:"navbar-brand",href:"#page-top"},l.a.createElement("span",{className:"d-block d-lg-none"},b.a.firstName," ",b.a.lastName),l.a.createElement("span",{className:"d-none d-lg-block"},l.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:h.a,alt:""}))),l.a.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(a?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse "+(a?"":"show"),id:"navbarSupportedContent"},l.a.createElement(c.a,{items:t.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},t.map((function(e,t){var a=e.href,n=e.content;return l.a.createElement("li",{className:"nav-item",key:a},l.a.createElement(p,{type:"id",element:a},l.a.createElement("a",{className:"nav-link",href:"#"+a},n)))})))))},t}(n.Component),E=a("EIqs"),y=a.n(E),N=a("Bdhx"),w=a.n(N),x=(a("ot38"),a("ALOV")),S=a.n(x),k=(a("Pp/3"),a("o+8R")),C=a.n(k),I=a("01oN"),T=a.n(I);t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(v,null),l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h4",{className:"mainheading mb-0"},b.a.firstName," ",l.a.createElement("span",{className:"text-primary"},b.a.lastName)),l.a.createElement("div",{className:"subheading mb-5"},b.a.address," · ",b.a.phone," ·",l.a.createElement("a",{href:"mailto:"+b.a.email},b.a.email)),l.a.createElement("p",{className:"lead mb-5"},"​A very passionate, kind and empathetic individual with a passion for building products with great user experience. I have over 9+ years of industry experience as a front-end development from different companies in Silicon Valley ranging from start-ups to big corporations. I was employee #9 of early stage start-up Cybercube, worked across the functions; wear mutiple hats and helped building the company from ground up all the way to series B funding.",l.a.createElement("br",null)," ",l.a.createElement("br",null)),l.a.createElement("div",{className:"social-icons"},b.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return l.a.createElement("a",{key:a,href:a},l.a.createElement("i",{className:"fab "+t}))}))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Experience"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Founder"),l.a.createElement("div",{className:"subheading mb-3"},"myclasspals"),l.a.createElement("p",null,"I created an online community website for connecting families in school. I build the front-end of the product using react, redux, JavaScript (ES6), HTML5, CSS3. I used CSS pre-processor SASS & styled components. I used Ant Design component library to build react components.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Jan 2020 - Present"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Founding engineer"),l.a.createElement("div",{className:"subheading mb-3"},"CyberCube"),l.a.createElement("p",null,"Founding Engineer (employee #9) of early stage startup Cybercube based in San san Francisco responsible for all the User Interface aspect of products and features.",l.a.createElement("br",null)," Epic lead bridging the gap between product and engineering, co-ordinated with engineering team in SF and remote team, understanding end-to-end requirement, responsible for building highly integrative application in demanding fast paced start-up",l.a.createElement("br",null)," Great team player passionate about company culture helped in scaling company from 16 employees to 85+ and was involved in every aspect of companies growth ",l.a.createElement("br",null),"Product front-end built on React, Redux, Webpack, Angular JS, HTML5, CSS3, SASS, Bootstrap, Highcharts, Serverless Architecture, AWS S3 bucket, NodeJS, Puppeteer for PDF generation")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Jan 2018 - Nov 2019"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Senior UI Engineer"),l.a.createElement("div",{className:"subheading mb-3"},"​SYMANTEC"),l.a.createElement("p",null,"Being the only UI developer on catastrophe modelling product for cyber insurance ⎯ team responsible for building high quality Catastrophe modelling product for cyber insurance ",l.a.createElement("br",null)," Product built on AngularJS, HTML5, CSS3, SASS, Bootstrap, Highcharts , babel and web-pack. ",l.a.createElement("br",null)," Work with product manager and user experience designer to refine the requirements and implement new features ",l.a.createElement("br",null)," Participate and collaborate with product manager, UX designer and back-end engineers, QA, data analysts and building the product with an eye on improving user experience")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"August 2016 - December 2018"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Senior UI Engineer "),l.a.createElement("div",{className:"subheading mb-3"},"​ERICSSON"),l.a.createElement("p",null,"Developed GUI UI components utilizing the Javascript Module Design Pattern producing self-contained, event-driven, self-testing software components. ⎯ Worked with HTML5, CSS3, Javascript and use third party libraries Require.js, jQuery, Backbone.js, Underscore.js, Mocha.js, Chai.js, Sinon.js as well as web development tools such as Node.js, Less, jsdoc3 and grunt August 2016 – December 2018 July 2014 – August 2016 Oct 2011 – July 2014 ⎯ Followed Agile (Scrum) Software Development Life Cycle (SDLC) model, including participation in scrum meetings, sprint planning, backlog grooming sessions. ⎯ Focused on quality, reusability and maintainability by writing UNIT and BIT test suit along with developing software ⎯ Participated and collaborated on an internal open source framework, with the goal of contributing and improving the existing toolset.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"July 2014 – August 2016"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"}," UI Engineer "),l.a.createElement("div",{className:"subheading mb-3"},"​DEUTSCHE TELEKOM HBS"),l.a.createElement("p",null,"Involved in UI development of an early stage start-up which was purchased for $100M in 2 years (2013) by Deutsche Telekom. ⎯ Responsible for UI development of company site using CoffeeScript, JQuery, CanJS , HTML, SASS, CSS , ​MySQL, ​JQuery template Handlebars, AJAX ⎯ High-quality front-end development modular, scalable, robust, and reusable code. ⎯ UI automation using selenium, experience working with Git, continuous delivery and agile process ⎯ Lead UI developer in implementing Choochee's Payment Processing System using JQuery, Extjs, HTML, CSS ⎯ Responsible for fixing P1 bugs and cross browser issues")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"October 2011 – July 2014"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"}," UI Engineer "),l.a.createElement("div",{className:"subheading mb-3"},"POWER ASSURE"),l.a.createElement("p",null,"⎯ Worked on UI development and server side development using PHP, jQuery, AJAX, JavaScript, CSS, XHTML. ⎯ Worked in enhancement of the EM/4 and PAR4 products of Power Assure. Primary responsibilities include migrating code into object oriented zend PHP MVC Framework. ⎯ Created Alert System using PHP which creates new alerts and save to the database and sends notification email. ⎯ Integrated CSV Upload functionalities/ features from Web(front-end), CLI Tool and Balancer side(back-end) using PHP")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"April 2011 – October 2011"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"}," UI Engineer "),l.a.createElement("div",{className:"subheading mb-3"},"YAHOO"),l.a.createElement("p",null,"Designed, developed and implemented Software Tool for Yahoo! Customer Care to build a communication process and portal for 2,000 call center agents to more effectively communicate improved suggestions back to leadership. Client won a prestigious leadership award through the roll-out of this program. ⎯ Designed & developed the interactive user interface using HTML, JQuery, JavaScript, CSS, PHP, YUI, AJAX, Apache HTTP Web Server, and ORACLE. ⎯ Collaborated with project manager, clients and engineering team to deliver high-quality products that meet corporate and client needs")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Jun 2010 – Apr 2011"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"}," UI Engineer "),l.a.createElement("div",{className:"subheading mb-3"},"FUNDAVISION"),l.a.createElement("p",null,"⎯ Designed and developed company website based on requirements using XHTML, CSS, JavaScript, JQuery, AJAX, Java, and Flex. ⎯ Implemented the presentation layer with HTML, DHTML, Ajax, CSS, JavaScript,MySQL")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Feb 2010 – Jun 2010"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"}," UI Engineer "),l.a.createElement("div",{className:"subheading mb-3"},"MYLAWSUIT, Inc"),l.a.createElement("p",null,"Developed website and fixing bugs using PHP, MySQL, JavaScript, XHTML, CSS, XAMPP, Joomla ",l.a.createElement("br",null),"Created templates in Joomla and worked closely with CEO, Chief Architect, VP of Engineering ⎯ Involved in designing the user interface mainly focusing on easing access to registration, plans and features available on the website using HTML and CSS.")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"August 2009 – Jan 2010"))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Education"),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"SAN JOSE STATE UNIVERSITY"),l.a.createElement("div",{className:"subheading mb-3"},"Master's in Computer Science")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"Jan 2008 - May 2009"))),l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0"},"Cochin University of Science and Technology"),l.a.createElement("div",{className:"subheading mb-3"}," ","Bachelor's in Computer Science")),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"August 2001 - June 2005"))))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Skills"),l.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),l.a.createElement("ul",{className:"list-inline dev-icons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-html5"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-css3-alt"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-js-square"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-angular"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-react"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-node-js"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-sass"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-less"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-wordpress"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-gulp"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-grunt"})),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fab fa-npm"}))),l.a.createElement("div",{className:"subheading mb-3"},"Workflow"),l.a.createElement("ul",{className:"fa-ul mb-0"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Responsive Front-end Development"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Cross Browser Testing & Debugging"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Cross Functional Teams"),l.a.createElement("li",null,l.a.createElement("i",{className:"fa-li fa fa-check"}),"Agile Development & Scrum")))),l.a.createElement("hr",{className:"m-0"}),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Interests"),l.a.createElement("p",null,"Apart from front-end development, I love learning new things, building different skills. I took classes from various online platforms to learn anything that sparks my curiosity. I also love listening to audio book on personal growth, enterprenuership and leadership. I love container gardening and working with plants, they gave a positive, creative vibe to any space. I volunteered to green Cybercube's office space. Few pictures shown below:"),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row row-cols-1 row-cols-sm-2 row-cols-md-4"},l.a.createElement("div",{class:"col"},l.a.createElement("img",{className:"img-fluid   mx-auto mb-2 ml-5",src:C.a,alt:""})),l.a.createElement("div",{class:"col"}," ",l.a.createElement("img",{className:"img-fluid  mx-auto mb-2 ml-5",src:S.a,alt:""})),l.a.createElement("div",{class:"col"}," ",l.a.createElement("img",{className:"img-fluid  mx-auto mb-2",src:T.a,alt:""})),l.a.createElement("div",{class:"col"}," ",l.a.createElement("img",{className:"img-fluid  mx-auto mb-2",src:w.a,alt:""})))))),l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"download"},l.a.createElement("div",{className:"w-100"},l.a.createElement("p",null," ",l.a.createElement("div",{class:"about-resume"},l.a.createElement("a",{href:y.a,download:"",class:"about-download-button"},"DOWNLOAD CV"))))," "),l.a.createElement("hr",{className:"m-0"})))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var s=l.apply(null,n);s&&e.push(s)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n},e.exports.default=e.exports,e.exports.__esModule=!0},YIkO:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("pVnL")),r=n(a("lSNA")),s=n(a("RIqP")),o=n(a("lwsE")),i=n(a("a1gu")),c=n(a("Nsbk")),m=n(a("PJYZ")),u=n(a("W8MJ")),d=n(a("7W2i")),p=n(a("17x9")),f=n(a("q1tI")),h=n(a("TSYQ")),g=n(a("Fxm3"));var b=function(e){function t(e){var a;return(0,o.default)(this,t),(a=(0,i.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,d.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:p.default.arrayOf(p.default.string).isRequired,currentClassName:p.default.string.isRequired,scrolledPastClassName:p.default.string,style:p.default.object,componentTag:p.default.oneOfType([p.default.string,p.default.elementType]),offset:p.default.number,rootEl:p.default.string,onUpdate:p.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,l=e.length;n<l;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],l=e||this.state.targetItems,r=!1,o=0,i=l.length;o<i;o++){var c=l[o],m=!r&&this._isInView(c);m?(r=!0,t.push(c)):a.push(c);var u=o===i-1,d=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&d&&(a.pop(),a.push.apply(a,(0,s.default)(t)),t=[c],n=this._fillArray(n,!1),m=!0),n.push(m)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,l=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var r=e.getBoundingClientRect(),s=n?t.height:window.innerHeight,o=this._getScrollDimension().scrollTop,i=o+s,c=n?r.top+o-t.top+l:r.top+o+l,m=c+e.offsetHeight;return c<i&&m>o}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,g.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,s=a.className,o=a.scrolledPastClassName,i=a.style,c=0,m=f.default.Children.map(n,(function(t,a){var n;if(!t)return null;var s=t.type,i=o&&e.state.isScrolledPast[a],m=(0,h.default)((n={},(0,r.default)(n,"".concat(t.props.className),t.props.className),(0,r.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,r.default)(n,"".concat(e.props.scrolledPastClassName),i),n));return f.default.createElement(s,(0,l.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,r.default)({},"".concat(s),s));return f.default.createElement(t,{className:u,style:i},m)}}]),t}(f.default.Component);t.default=b},ZhPi:function(e,t,a){var n=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},a1gu:function(e,t,a){var n=a("cDf5").default,l=a("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?l(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||o,scrollIntoView:n.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,s=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var a=d(this),n=a.getBoundingClientRect(),r=this.getBoundingClientRect();a!==t.body?(f.call(this,a,a.scrollLeft+r.left-n.left,a.scrollTop+r.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function o(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+s<e.scrollHeight:"X"===t?e.clientWidth+s<e.scrollWidth:void 0}function m(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function d(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function p(t){var a,n,l,s,o=(r()-t.startTime)/468;s=o=o>1?1:o,a=.5*(1-Math.cos(Math.PI*s)),n=t.startX+(t.x-t.startX)*a,l=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,l),n===t.x&&l===t.y||e.requestAnimationFrame(p.bind(e,t))}function f(a,n,s){var i,c,m,u,d=r();a===t.body?(i=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=l.scroll):(i=a,c=a.scrollLeft,m=a.scrollTop,u=o),p({scrollable:i,method:u,startTime:d,startX:c,startY:m,x:n,y:s})}}}}()},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},mfl7:function(e,t,a){e.exports=a.p+"static/profile-0bf3a1d47c81225ba92455547bf71e5b.jpeg"},"o+8R":function(e,t,a){e.exports=a.p+"static/ficus-b68d655fc705272af8fe26aa88d3710d.jpg"},obyI:function(e,t){e.exports={siteTitle:"Sapna Blesson Resume",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/resume_sapnabl",firstName:"Sapna",lastName:"Blesson",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/sblesson"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://www.linkedin.com/in/sapnablesson/"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/sapnabl"}],email:"sapnablesson@gmail.com",phone:"408-569-5278",address:"Fremont, CA"}},ot38:function(e,t,a){e.exports=a.p+"static/neonpothossmall-1b6ce5cca4ac419b8fceeea6d0f8621d.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-80453cb10b17b7020641.js.map