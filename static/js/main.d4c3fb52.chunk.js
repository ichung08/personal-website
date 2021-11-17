(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{30:function(e,t,n){},38:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(15),a=n.n(s),i=n(11),r=(n(38),n(3)),o=n(16),d=n(1),l=function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)(i.b,{to:"/",className:"logo",children:"ISAAC CHUNG"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(o.Link,{className:"header__link",to:"about",rel:"noreferrer",spy:!0,smooth:!0,offset:-120,duration:500,children:"About"}),Object(d.jsx)(o.Link,{className:"header__link",to:"experience",rel:"noreferrer",spy:!0,smooth:!0,offset:-120,duration:500,children:"Experience"}),Object(d.jsx)(o.Link,{className:"header__link",to:"projects",rel:"noreferrer",spy:!0,smooth:!0,offset:-120,duration:500,children:"Projects"}),Object(d.jsx)(i.b,{to:"/thoughts",className:"header__link",style:{color:"inherit",textDecoration:"none"},children:"Thoughts"})]})]})},h=(n(51),function(){return Object(d.jsxs)("div",{className:"title__container","data-aos":"zoom-in","data-aos-offset":"50","data-aos-duration":"400",children:[Object(d.jsxs)("h1",{className:"title",children:["Hey, I'm ",Object(d.jsx)("b",{children:"Isaac Chung"}),". ",Object(d.jsx)("span",{className:"wave",children:"\ud83d\udc4b"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("h1",{className:"title",children:"I'm an aspiring software engineer, passionate about combining tech and communities."}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"mailto:isaackcchung8@gmail.com",className:"intro__link",children:"Let's Chat"})]})}),j=n(7),b=n(32),u=function(){return Object(d.jsxs)("footer",{children:[Object(d.jsx)("p",{children:"BUILT BY ISAAC CHUNG \xa9 2021"}),Object(d.jsx)("a",{href:"https://twitter.com/isaackcchung",rel:"noreferrer",target:"_blank",children:Object(d.jsx)(j.e,{className:"footer-icon"})}),Object(d.jsx)("a",{href:"https://github.com/ichung08",rel:"noreferrer",target:"_blank",children:Object(d.jsx)(j.c,{className:"footer-icon"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/isaac-chung-08/",rel:"noreferrer",target:"_blank",children:Object(d.jsx)(j.d,{className:"footer-icon"})}),Object(d.jsx)("a",{href:"mailto:isaackcchung8@gmail.com",rel:"noreferrer",target:"_blank",children:Object(d.jsx)(b.a,{className:"footer-icon"})})]})},g=function(){return Object(d.jsxs)("div",{id:"about","data-aos":"fade-up",children:[Object(d.jsx)("h2",{children:"About Me"}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:["I'm a student at the ",Object(d.jsx)("b",{children:"University of British Columbia studying Cognitive Systems + CS"}),". This website is an overview of some of my experiences and thoughts."]}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"I started coding halfway through my first year, and I'm still navigating through the tech industry. My future career is still unclear, but I hope to sample and gain a general understanding of the industry before specializing in the future."}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"When I'm not in front of a computer screen,"})," you'll find me reading, playing basketball, working out at the gym, or spending time with family and friends."]}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:["Check out my"," ",Object(d.jsx)("a",{href:"https://isaacchung.com/Isaac_Chung_Resume.pdf",className:"about__link",rel:"noreferrer",children:"resume"}),", read some of my"," ",Object(d.jsx)("a",{href:"#thoughts",className:"about__link",rel:"noreferrer",children:"thoughts"}),", or follow me on"," ",Object(d.jsx)("a",{href:"https://open.spotify.com/user/sophieknowington?si=1721bf00ead043a8",className:"about__link",rel:"noreferrer",target:"_blank",children:"Spotify"}),"!"]}),Object(d.jsx)("br",{})]})},m=n(10),p=(n(30),function(e){var t=Object(c.useState)(""),n=Object(m.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)("0px"),r=Object(m.a)(i,2),o=r[0],l=r[1],h=Object(c.useState)("accordion__icon"),b=Object(m.a)(h,2),u=b[0],g=b[1],p=Object(c.useRef)(null),O=e.tech.split(",");return Object(d.jsxs)("div",{className:"accordion__section",children:[Object(d.jsxs)("button",{className:"accordion ".concat(s),onClick:function(){a(""===s?"active":""),l("active"===s?"0px":"".concat(p.current.scrollHeight,"px")),g("active"===s?"accordion__icon":"accordion__icon rotate")},children:[Object(d.jsx)("h3",{className:"accordion__title",children:e.title}),Object(d.jsx)(j.a,{className:"".concat(u)})]}),Object(d.jsxs)("div",{ref:p,style:{maxHeight:"".concat(o)},className:"accordion__content",children:[Object(d.jsx)("div",{className:"accordion__date",children:e.date}),Object(d.jsx)("div",{className:"accordion__text",children:e.desc}),e.tech&&Object(d.jsxs)("div",{className:"accordion__tech__container",children:[" ",O.map((function(e,t){return Object(d.jsx)("span",{className:"accordion__tech",children:e},t)}))]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"accordion__links__container",children:[e.website&&Object(d.jsx)("a",{href:e.website,rel:"noreferrer",target:"_blank",children:Object(d.jsx)(j.b,{className:"accordion__links"})}),e.website2&&Object(d.jsx)("a",{href:e.website2,rel:"noreferrer",target:"_blank",children:Object(d.jsx)(j.b,{className:"accordion__links"})})]})]})]})}),O=function(){return Object(d.jsxs)("div",{id:"experience","data-aos":"fade-up",children:[Object(d.jsx)("h2",{children:"Experience"}),Object(d.jsx)("br",{}),Object(d.jsx)(p,{title:"Build Engineer Co-op @ Visier",website:"https://www.visier.com/",date:"09/2021 - Present",desc:"Optimizing codebase compiling and testing through the build system with Java and Scala.Improving processes around development efficiency and extending the current CI pipeline with Jenkins and Groovy.Redesigned a Slack, Bitbucket and Jira notification plugin to more effectively assist developers, improving efficiency by 15%. Managed development build health in Jenkins, notifying developers regarding broken builds, reverting changes and assigning bugs to responsible developers.",tech:"Java,Groovy,Scala,Jenkins,Docker,Bash,Linux,Bitbucket,Jira"}),Object(d.jsx)("br",{}),Object(d.jsx)(p,{title:"Work Learn IT Support/Web Assistant @ The University of British Columbia",website:"https://cps.med.ubc.ca/",website2:"https://biochem.ubc.ca/?login",date:"06/2021 - 08/2021",desc:"Redesigned and restructed CPS and Biochemistry department webpages to improve overall appearance and SEO.  Managed website content, design and updates for CPS and Biochemistry department. Documented and taught WordPress workflow and standard of procedure to colleagues.",tech:"WordPress,HTML,CSS"}),Object(d.jsx)("br",{}),Object(d.jsx)(p,{title:"nwHacks Logistics Coordinator @ nwPlus",website:"https://www.nwhacks.io/",date:"06/2021 - Present",desc:"Organized volunteer and organizer logistics, opening and closing ceremonies, food and snacks, and judging and registration. Crafted hacker experience with workshops, events and activities for 900+ hackers.",tech:""}),Object(d.jsx)("br",{}),Object(d.jsx)(p,{title:"Undergraduate Computer Science Teaching Assistant @ The University of British Columbia",date:"10/2020 - 04/2021",desc:"Taught an introductory programming course in Python, led labs with 25+ students, graded 600+ lab assignments, and hosted weekly office hours. Curated and edited 10+ tutorial videos as new course development materials for remote learning.",tech:"Python,Camtasia"})]})},x=function(e){var t=Object(c.useState)(""),n=Object(m.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)("0px"),r=Object(m.a)(i,2),o=r[0],l=r[1],h=Object(c.useState)("accordion__icon"),b=Object(m.a)(h,2),u=b[0],g=b[1],p=Object(c.useRef)(null),O=e.tech.split(",");return Object(d.jsxs)("div",{className:"accordion__section",children:[Object(d.jsxs)("button",{className:"accordion ".concat(s),onClick:function(){a(""===s?"active":""),l("active"===s?"0px":"".concat(p.current.scrollHeight,"px")),g("active"===s?"accordion__icon":"accordion__icon rotate")},children:[Object(d.jsx)("h3",{className:"accordion__title",children:e.title}),Object(d.jsx)(j.a,{className:"".concat(u)})]}),Object(d.jsxs)("div",{ref:p,style:{maxHeight:"".concat(o)},className:"accordion__content",children:[Object(d.jsx)("div",{className:"accordion__date",children:e.event}),Object(d.jsx)("div",{className:"accordion__text",children:e.desc}),e.tech&&Object(d.jsx)("div",{className:"accordion__tech__container",children:O.map((function(e,t){return Object(d.jsx)("span",{className:"accordion__tech",children:e},t)}))}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"accordion__links__container",children:[e.github&&Object(d.jsx)("a",{href:e.github,rel:"noreferrer",target:"_blank",children:Object(d.jsx)(j.c,{className:"accordion__links"})}),e.website&&Object(d.jsx)("a",{href:e.website,rel:"noreferrer",target:"_blank",children:Object(d.jsx)(j.b,{className:"accordion__links"})})]})]})]})},f=function(){return Object(d.jsxs)("div",{id:"projects","data-aos":"fade-up",children:[Object(d.jsx)("h2",{children:"Projects"}),Object(d.jsx)("br",{}),Object(d.jsx)(x,{title:"Ambience",github:"https://github.com/ichung08/ambience",event:"Hack the North 2021",desc:"Developed a music player that recommends music based on facial emotion and expression using JavaScript, ReactJS, and face-api. Integrated a journaling feature using Firebase, allowing users to journal their emotions.",tech:"JavaScript,ReactJS,HTML,CSS,Firebase"}),Object(d.jsx)("br",{}),Object(d.jsx)(x,{title:"Battle To-Do",github:"https://github.com/ichung08/battle-todo",event:"nwHacks 2021",desc:"Developed a user authenticated to-do list game web app to encourage online productivity. Built login system, to-do list, and frontend web pages using Django, HTML and CSS. Achieved \u2018Honourable Mention\u2019 award amongst 200+ teams at nwHacks 2021.",tech:"Python,Django,HTML,CSS"}),Object(d.jsx)("br",{}),Object(d.jsx)(x,{title:"UBC Course Explorer",github:"https://github.com/ichung08/ubc-course-explorer",website:"https://ubc-course-app.herokuapp.com/",event:"Oakhacks 2020",desc:"Built a school course search web app with Python and Django, integrating a UBC Grades and RateMyProfessors API to display course, grades and professor information. Containerized and deployed using Docker and Heroku and implemented Python Linter with Github Actions. Designed and implemented frontend web pages using Django, HTML and CSS. Achieved first place amongst 40+ teams at Oakhacks 2020.",tech:"Python,Django,JavaScript,Heroku,Docker,Github Actions,HTML,CSS"}),Object(d.jsx)("br",{}),Object(d.jsx)(x,{title:"Modelling Meteorological Factors of COVID-19",github:"https://github.com/ericlee0920/2021-Data-Science-Projects",event:"Research Project",desc:"Evaluated the significance of meterological factors on COVID-19 infection rates in various regions of Canada using linear regression, decision tree regression, and a random forest regressor in Python. Presented project at Multidisciplinary Undergraduate Research Conference (MURC).",tech:"Python,scikit-learn,Django,MongoDB"}),Object(d.jsx)("br",{}),Object(d.jsx)(x,{title:"Restaurant List",github:"https://github.com/ichung08/Restaurant-List-App",event:"Independent Project",desc:"Created an application to help users record and list restaurants utilizing OOP concepts. Developed desktop application in Java, with SwingUI GUI. Aquired 100% code coverage with JUnit.",tech:"Java,SwingUI,JUnit,JSON"}),Object(d.jsx)("br",{}),Object(d.jsx)(x,{title:"Personal Website",github:"https://github.com/ichung08/personal-website",website:"https://isaacchung.com",event:"Independent Project",desc:"The website you're currently on, designed and implemented using React, HTML, and CSS with a CI/CD pipeline using Github Actions.",tech:"JavaScript,React,HTML,CSS,Github Actions"})]})},_=(n(52),function(){return Object(d.jsxs)("div",{id:"thoughts",className:"container",children:[Object(d.jsx)("h1",{children:"Thoughts"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{className:"quote",children:"\u201cLife can only be understood backwards; but it must be lived forwards.\u201d \u2015 S\xf8ren Kierkegaard"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"Currently under construction"})]})}),v=n(33),k=n.n(v);n(53);k.a.init({offset:200,delay:200,duration:300,easing:"ease-in",once:!1,mirror:!1,anchorPlacement:"top-bottom"});var w=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(l,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/thoughts",component:_}),Object(d.jsx)(r.a,{path:"/",exact:!0,render:function(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{}),Object(d.jsx)(g,{}),Object(d.jsx)(O,{}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{})]})}})]}),Object(d.jsx)(u,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};a.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),y()}},[[54,1,2]]]);
//# sourceMappingURL=main.d4c3fb52.chunk.js.map