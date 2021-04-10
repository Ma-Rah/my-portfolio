(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{130:function(e,t,c){"use strict";c.r(t);var s=c(0),l=c.n(s),n=c(19),a=c.n(n),r=(c(51),c(8)),i=c(3),o=c.p+"static/media/bg.867286d6.jpg",d=c(1);function j(){return Object(d.jsxs)("main",{children:[Object(d.jsx)("img",{src:o,alt:"Winter in Sweden",className:"absolute min-w-screen min-h-screen object-cover overflow-hidden lg:h-full 2xl:w-full"}),Object(d.jsxs)("section",{className:"relative flex flex-col flex-nowrap justify-start items-center content-center min-h-screen pt-12 px-8",children:[Object(d.jsx)("h1",{className:"text-4xl text-gray-500 font-bold leading-none md:text-6xl cursive py-2",children:"Hej! I'm Martin."}),Object(d.jsx)("h2",{className:"text-2xl text-gray-500 leading-none md:text-3xl cursive  py-2 ",children:"Welcome to my portfolio page that will host some of my projects and personal content."}),Object(d.jsx)("p",{className:"text-1xl text-gray-500 leading-none md:text-2xl cursive  py-2 ",children:"I am currently attending a Full-Stack Developer bootcamp at Coding Bootcamp Praha."}),Object(d.jsx)("p",{className:"text-1xl text-gray-500 leading-none md:text-2xl cursive  py-2 ",children:"My goal is to work as a web developer in Czech Republic after the bootcamp."}),Object(d.jsx)("p",{className:"text-1xl text-gray-500 leading-none md:text-2xl cursive  py-2 ",children:"Feel free to contact me if you have any questions!"})]})]})}var x=c(9),m=c(45),h=c.n(m)()({projectId:"gj7javeh",dataset:"production"}),b=c(14),u=c.n(b),g=c(20),p=c.n(g),f=u()(h);function O(){var e,t=Object(s.useState)(null),c=Object(x.a)(t,2),l=c[0],n=c[1];return Object(s.useEffect)((function(){h.fetch('*[_type == "author"]{\n\t\t\tname,\n\t\t\tbio,\n\t\t\t"authorImage": image.asset->url\n\t\t}').then((function(e){return n(e[0])})).catch(console.error)}),[]),l?Object(d.jsxs)("main",{className:"relative ",children:[Object(d.jsx)("img",{src:o,alt:"Swedish winter",className:"absolute min-w-screen min-h-screen object-cover overflow-hidden lg:h-full 2xl:w-full"}),Object(d.jsx)("div",{className:"p-10 lg:pt-48 container mx-auto relative",children:Object(d.jsxs)("section",{className:"bg-gray-600 rounded-lg shadow-2xl lg:flex p-5 md:p-10 lg:p-15",children:[Object(d.jsx)("img",{src:(e=l.authorImage,f.image(e)).url(),alt:l.name,className:"rounded w-auto h-16 md:h-32 lg:w-auto lg:h-64 mr-8"}),Object(d.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(d.jsxs)("h1",{className:"cursive text-1xl md:text-4xl lg:text-6xl text-green-300 mb-4",children:["Hi there! I'm ",Object(d.jsx)("span",{className:"text-green-100",children:l.name})]}),Object(d.jsx)("div",{className:"prose prose-sm md:prose-md lg:prose-xl text-white",children:Object(d.jsx)(p.a,{blocks:l.bio,projectId:"gj7javeh",dataset:"production"})})]})]})})]}):Object(d.jsx)("div",{children:"Loading..."})}var v=u()(h);function y(){var e,t=Object(s.useState)(null),c=Object(x.a)(t,2),l=c[0],n=c[1],a=Object(i.f)().slug;return Object(s.useEffect)((function(){h.fetch('*[slug.current == "'.concat(a,'"] {\n\t\t\ttitle,\n\t\t\t_id,\n\t\t\tslug,\n\t\t\tmainImage{\n\t\t\t\tasset->{\n\t\t\t\t\t_id,\n\t\t\t\t\turl\n\t\t\t\t}\n\t\t\t},\n\t\t\tbody,\n\t\t\t"name": author->name,\n\t\t\t"authorImage": author->image\n\t\t}')).then((function(e){return n(e[0])})).catch(console.error)}),[a]),l?Object(d.jsx)("main",{className:"bg-gray-200 min-h-screen p-12",children:Object(d.jsxs)("article",{className:"container shadow-lg mx-auto bg-blue-50 rounded-lg",children:[Object(d.jsxs)("header",{className:"relative",children:[Object(d.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(d.jsxs)("div",{className:"bg-white bg-opacity-75 rounded p-12",children:[Object(d.jsx)("h1",{className:"cursive text-3xl lg:text-6xl mb-4",children:l.title}),Object(d.jsxs)("div",{className:"flex justify-center text-gray-800",children:[Object(d.jsx)("img",{src:(e=l.authorImage,v.image(e)).url(),alt:l.name,className:"rounded-full w-10 h-10"}),Object(d.jsx)("p",{className:"cursive flex items-center pl-2 text-2xl",children:l.name})]})]})}),Object(d.jsx)("img",{src:l.mainImage.asset.url,alt:l.title,className:"w-full object-cover rounded-t",style:{height:"400px"}})]}),Object(d.jsx)("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full",children:Object(d.jsx)(p.a,{blocks:l.body,projectId:"gj7javeh",dataset:"production"})})]})}):Object(d.jsx)("div",{children:"Loading...."})}function N(){var e=Object(s.useState)(null),t=Object(x.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){h.fetch('*[_type =="post"]{\n\t\t\ttitle,\n\t\t\tslug,\n\t\t\tmainImage{\n\t\t\t\tasset->{\n\t\t\t\t\t_id,\n\t\t\t\t\turl\n\t\t\t\t},\n\t\t\t\talt\n\t\t\t}\n\t\t}').then((function(e){return l(e)})).catch(console.error)}),[]),Object(d.jsx)("main",{className:"bg-gray-100 min-h-screen p-12",children:Object(d.jsxs)("section",{className:"container mx-auto",children:[Object(d.jsx)("h1",{className:"text-3xl md:text-5xl flex justify-center cursive mb-12",children:"Blog Posts"}),Object(d.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:c&&c.map((function(e,t){return Object(d.jsx)("article",{children:Object(d.jsx)(r.b,{to:"/post/"+e.slug.current,children:Object(d.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400",children:[Object(d.jsx)("img",{src:e.mainImage.asset.url,alt:e.mainImage.alt,className:"w-full h-full rounded-r object-cover absolute"}),Object(d.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(d.jsx)("h3",{className:"text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)})}))})]})})}function w(){var e=Object(s.useState)(null),t=Object(x.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){h.fetch('*[_type == "project"]{\n\t\t\ttitle,\n\t\t\tdate,\n\t\t\tplace,\n\t\t\tdescription,\n\t\t\tprojectType,\n\t\t\tlink,\n\t\t\ttags\n\t\t}').then((function(e){return l(e)})).catch(console.error)}),[]),Object(d.jsx)("main",{className:"bg-gray-100 min-h-screen p-12",children:Object(d.jsxs)("section",{className:"container mx-auto",children:[Object(d.jsx)("h1",{className:"text-3xl md:text-5xl flex justify-center cursive mb-12",children:"My Projects"}),Object(d.jsx)("section",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:c&&c.map((function(e,t){return Object(d.jsxs)("article",{className:"relative rounded-lg shadow-xl bg-white p-16",children:[Object(d.jsx)("h3",{className:"text-gray-800 text-3xl font-bold mb-2 hover:text-red-700",children:Object(d.jsx)("a",{href:e.link,alt:e.title,target:"_blank",rel:"noopener noreferrer",children:e.title})}),Object(d.jsxs)("div",{className:"text-gray-500 text-lg ",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("strong",{className:"font-bold",children:"Finished on"}),":"," ",new Date(e.date).toLocaleDateString()]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("strong",{className:"font-bold",children:"Type"}),": ",e.projectType]}),Object(d.jsx)("p",{className:"my-6 text-lg text-gray-700 leading-relaxed",children:e.description}),Object(d.jsx)("strong",{className:"font-bold",children:"Tags:"}),Object(d.jsx)("div",{className:"text-sm text-gray-700 grid grid-cols-1",children:e.tags.map((function(e){return Object(d.jsx)("p",{children:e})}))}),Object(d.jsxs)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"text-red-500 font-bold hover:underline hover:text-red-400",children:["View The Project"," ",Object(d.jsx)("span",{role:"img","aria-label":"right pointer",children:"\ud83d\udc49"})]})]})]})}))})]})})}var I=c(28);function k(){return Object(d.jsx)("header",{className:"bg-gray-600",children:Object(d.jsx)("div",{className:"container mx-auto flex flex-col justify-around min-w-screen p-3 md:flex-row text-2xl ",children:Object(d.jsxs)("nav",{className:"flex flex-col text-base md:text-xl md:flex-row  ",children:[Object(d.jsx)(r.c,{to:"/",exact:!0,className:"inline-flex items-center pb-2 px-3 mr-4 text-white hover:text-blue-300 text-3xl md:text-5xl font-bold cursive tracking-widest",children:"Home"}),Object(d.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:col-auto",children:[Object(d.jsx)(r.c,{to:"/project",className:"inline-flex items-center py-2 px-3 md:my-6 rounded text-white hover:text-blue-300",activeClassName:"bg-red-700",children:"Projects"}),Object(d.jsx)(r.c,{to:"/about",className:"inline-flex items-center py-2 px-3 md:my-6 rounded text-white hover:text-blue-300",activeClassName:"bg-red-700",children:"About"}),Object(d.jsx)(r.c,{to:"/gallery",className:"inline-flex items-center py-2 px-3 md:my-6 rounded text-white hover:text-blue-300",activeClassName:"bg-red-700",children:"Gallery"}),Object(d.jsx)(r.c,{to:"/post",className:"inline-flex items-center py-2 px-3 md:my-6 rounded text-white hover:text-blue-300",activeClassName:" bg-red-700",children:"Posts"})]}),Object(d.jsxs)("div",{className:"inline-flex py-3 px-3 md:my-6",children:[Object(d.jsx)(I.SocialIcon,{url:"https://github.com/Ma-Rah",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(d.jsx)(I.SocialIcon,{url:"https://www.linkedin.com/in/martin-rahm-913856b0/",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}})]})]})})})}var S=c(21);function _(){var e=Object(s.useState)(null),t=Object(x.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){h.fetch('*[_type =="photo"]{\n\t\t\t\t\tmainImage{\n\t\t\t\t\t\tasset->{\n\t\t\t\t\t\t\t_id,\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t},\n\t\t\t\t\t}\n\t\t}').then((function(e){return l(e)})).catch(console.error)}),[]),Object(d.jsx)("main",{className:"bg-white min-h-screen w-min-screen p-2",children:Object(d.jsxs)("section",{className:"",children:[Object(d.jsx)("h1",{className:"text-3xl md:text-5xl flex justify-center cursive pt-10",children:"My Gallery"}),Object(d.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-5",children:"Some of my favorite photos I've shot in recent years!"}),Object(d.jsx)(S.a,{children:Object(d.jsx)("div",{className:"grid auto-cols-auto sm:grid-cols-2 lg:grid-cols-6 gap-5 cursor-pointer  ",children:c&&c.map((function(e,t){return Object(d.jsx)("img",{src:e.mainImage.asset.url,alt:"",className:" object-cover h-full w-full transform hover:scale-105 transition duration-700 ease-in-out"})}))})})]})})}var C=function(){return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(k,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{component:j,path:"/",exact:!0}),Object(d.jsx)(i.a,{component:O,path:"/about"}),Object(d.jsx)(i.a,{component:y,path:"/post/:slug"}),Object(d.jsx)(i.a,{component:N,path:"/post"}),Object(d.jsx)(i.a,{component:w,path:"/project"}),Object(d.jsx)(i.a,{component:_,path:"/gallery"})]})]})};a.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(S.b,{children:Object(d.jsx)(C,{})})}),document.getElementById("root"))},51:function(e,t,c){}},[[130,1,2]]]);
//# sourceMappingURL=main.a720980c.chunk.js.map