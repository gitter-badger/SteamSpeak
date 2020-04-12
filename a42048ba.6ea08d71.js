(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(1),i=n(7),o=(n(0),n(123)),r={id:"contributing",title:"Contributing"},l={id:"about/contributing",title:"Contributing",description:"# Contributing to SteamSpeak",source:"@site/docs\\about\\contributing.md",permalink:"/SteamSpeak/docs/about/contributing",editUrl:"https://github.com/dalexhd/steamspeak/edit/master/docs/docs/about/contributing.md",sidebar:"docs",previous:{title:"What is SteamSpeak?",permalink:"/SteamSpeak/docs/about/what-is-steamspeak"},next:{title:"Installation",permalink:"/SteamSpeak/docs/setup/installation"}},s=[{value:"Get Involved",id:"get-involved",children:[{value:"Join our Discord Channel",id:"join-our-discord-channel",children:[]}]},{value:"Development Process",id:"development-process",children:[{value:"Branch Organization",id:"branch-organization",children:[]}]},{value:"Bugs",id:"bugs",children:[]},{value:"Reporting New Issues",id:"reporting-new-issues",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Online one-click setup for contributing",id:"online-one-click-setup-for-contributing",children:[]},{value:"Pull Requests",id:"pull-requests",children:[{value:"Your First Pull Request",id:"your-first-pull-request",children:[]},{value:"Sending a Pull Request",id:"sending-a-pull-request",children:[]},{value:"What Happens Next?",id:"what-happens-next",children:[]}]},{value:"Style Guide",id:"style-guide",children:[]},{value:"Semantic Commit Messages",id:"semantic-commit-messages",children:[]},{value:"Example",id:"example",children:[{value:"Code Conventions",id:"code-conventions",children:[]},{value:"Documentation",id:"documentation",children:[]}]},{value:"License",id:"license",children:[]}],b={rightToc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"contributing-to-steamspeak"},"Contributing to SteamSpeak"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dalexhd.github.io/SteamSpeak/"}),"SteamSpeak")," is a tool that power ups your TeamSpeak3 server. If you're interested in contributing to SteamSpeak, hopefully this document makes the process for contributing clear."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://opensource.guide/"}),"Open Source Guides")," website has a collection of resources for individuals, communities, and companies who want to learn how to run and contribute to an open source project. Contributors and people new to open source alike will find the following guides especially useful:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://opensource.guide/how-to-contribute/"}),"How to Contribute to Open Source")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://opensource.guide/building-community/"}),"Building Welcoming Communities"))),Object(o.b)("h2",{id:"get-involved"},"Get Involved"),Object(o.b)("p",null,"There are many ways to contribute to SteamSpeak, and many of them do not involve writing any code. Here's a few ideas to get started:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Simply start using SteamSpeak. Go through the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://dalexhd.github.io/SteamSpeak/docs/setup/installation"}),"Getting Started")," guide. Does everything work as expected? If not, we're always looking for improvements. Let us know by ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#reporting-new-issues"}),"opening an issue"),"."),Object(o.b)("li",{parentName:"ul"},"Look through the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/dalexhd/steamspeak/issues"}),"open issues"),". Provide workarounds, ask for clarification, or suggest labels."),Object(o.b)("li",{parentName:"ul"},"If you find an issue you would like to fix, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#your-first-pull-request"}),"open a pull request"),". Issues tagged as ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/dalexhd/steamspeak/labels/Good%20first%20issue"}),Object(o.b)("em",{parentName:"a"},"Good first issue"))," are a good place to get started."),Object(o.b)("li",{parentName:"ul"},"Read through the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://dalexhd.github.io/SteamSpeak/docs/setup/installation"}),"SteamSpeak docs"),'. If you find anything that is confusing or can be improved, you can make edits by clicking "Edit" at the end of most docs.'),Object(o.b)("li",{parentName:"ul"},"Take a look at the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/dalexhd/steamspeak/labels/enhancement"}),"features requested")," by others in the community and consider opening a pull request if you see something you want to work on.")),Object(o.b)("h3",{id:"join-our-discord-channel"},"Join our Discord Channel"),Object(o.b)("p",null,"We have ",Object(o.b)("inlineCode",{parentName:"p"},"#steamspeak-dev")," on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.gg/st4nsXw"}),"Discord")," to discuss all things SteamSpeak development."),Object(o.b)("h2",{id:"development-process"},"Development Process"),Object(o.b)("p",null,"SteamSpeak uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dalexhd/steamspeak"}),"GitHub")," as its source of truth. All changes will be public from the beginning."),Object(o.b)("p",null,"When a change made on GitHub is approved, it will be checked by our continuous integration system, Travis CI and Github Actions."),Object(o.b)("h3",{id:"branch-organization"},"Branch Organization"),Object(o.b)("p",null,"SteamSpeak has three primary branches: ",Object(o.b)("inlineCode",{parentName:"p"},"master"),", ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," and ",Object(o.b)("inlineCode",{parentName:"p"},"gh-pages"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"master")," is where our code lives. We will do our best to keep ",Object(o.b)("inlineCode",{parentName:"p"},"master")," in good shape, with tests passing at all times."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dev")," is where the development takes place."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"gh-pages")," contains the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dalexhd.github.io/SteamSpeak/"}),"SteamSpeak documentation"),". This branch is pushed to by Travis CI and not generally managed manually."),Object(o.b)("h2",{id:"bugs"},"Bugs"),Object(o.b)("p",null,"We use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dalexhd/steamspeak/issues"}),"GitHub Issues")," for our public bugs. If you would like to report a problem, take a look around and see if someone already opened an issue about it. If you a are certain this is a new, unreported bug, you can submit a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#reporting-new-issues"}),"bug report"),"."),Object(o.b)("p",null,"You can also file issues as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dalexhd/steamspeak/labels/enhancement"}),"enhancements"),". If you see anything you'd like to be implemented, create an issue with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/dalexhd/steamspeak/master/.github/ISSUE_TEMPLATE/feature.md"}),"feature template")),Object(o.b)("h2",{id:"reporting-new-issues"},"Reporting New Issues"),Object(o.b)("p",null,"When ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dalexhd/steamspeak/issues/new/choose"}),"opening a new issue"),", always make sure to fill out the issue template. ",Object(o.b)("strong",{parentName:"p"},"This step is very important!")," Not doing so may result in your issue not managed in a timely fashion. Don't take this personally if this happens, and feel free to open a new issue once you've gathered all the information required by the template."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"One issue, one bug:")," Please report a single bug per issue."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Provide reproduction steps:")," List all the steps necessary to reproduce the issue. The person reading your bug report should be able to follow these steps to reproduce your issue with minimal effort.")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ensure you have ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/"}),"NodeJS")," installed."),Object(o.b)("li",{parentName:"ol"},"After cloning the repository, run ",Object(o.b)("inlineCode",{parentName:"li"},"npm install")," in the root of the repository."),Object(o.b)("li",{parentName:"ol"},"To start a development server:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"make config")),Object(o.b)("li",{parentName:"ul"},"edit ",Object(o.b)("inlineCode",{parentName:"li"},"src/backend/config")," config files"),Object(o.b)("li",{parentName:"ul"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"npm run start:frontend")),Object(o.b)("li",{parentName:"ul"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"npm run start:backend"))),Object(o.b)("h2",{id:"online-one-click-setup-for-contributing"},"Online one-click setup for contributing"),Object(o.b)("p",null,"You can use Gitpod (a free, online, VS Code-like IDE) for contributing. With a single click it will launch a workspace:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"make config")),Object(o.b)("li",{parentName:"ul"},"edit ",Object(o.b)("inlineCode",{parentName:"li"},"src/backend/config")," config files"),Object(o.b)("li",{parentName:"ul"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"npm run start:frontend")),Object(o.b)("li",{parentName:"ul"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"npm run start:backend"))),Object(o.b)("p",null,"So that you can start contributing straight away."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitpod.io/#https://github.com/dalexhd/steamspeak"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"})))),Object(o.b)("h2",{id:"pull-requests"},"Pull Requests"),Object(o.b)("h3",{id:"your-first-pull-request"},"Your First Pull Request"),Object(o.b)("p",null,"So you have decided to contribute code back to upstream by opening a pull request. You've invested a good chunk of time, and we appreciate it. We will do our best to work with you and get the PR looked at."),Object(o.b)("p",null,"Working on your first Pull Request? You can learn how from this free video series:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"}),Object(o.b)("strong",{parentName:"a"},"How to Contribute to an Open Source Project on GitHub"))),Object(o.b)("p",null,"We have a list of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dalexhd/steamspeak/labels/good%20first%20issue"}),"beginner friendly issues")," to help you get your feet wet in the SteamSpeak codebase and familiar with our contribution process. This is a great place to get started."),Object(o.b)("h3",{id:"sending-a-pull-request"},"Sending a Pull Request"),Object(o.b)("p",null,"Small pull requests are much easier to review and more likely to get merged. Make sure the PR does only one thing, otherwise please split it. It is recommended to follow this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#semantic-commit-messages"}),"commit message style"),"."),Object(o.b)("p",null,"Please make sure the following is done when submitting a pull request:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Fork ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/dalexhd/steamspeak"}),"the repository")," and create your branch from ",Object(o.b)("inlineCode",{parentName:"li"},"master"),"."),Object(o.b)("li",{parentName:"ol"},"Make sure your code lints (",Object(o.b)("inlineCode",{parentName:"li"},"npm run lint:frontend && npm run lint:backend"),")."),Object(o.b)("li",{parentName:"ol"},"Make sure your Jest tests pass (",Object(o.b)("inlineCode",{parentName:"li"},"npm run test:frontend && npm run test:backend"),").")),Object(o.b)("p",null,"All pull requests should be opened against the ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch."),Object(o.b)("h4",{id:"breaking-changes"},"Breaking Changes"),Object(o.b)("p",null,"When adding a new breaking change, follow this template in your pull request:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-md"}),"### New breaking change here\n\n- **Who does this affect**:\n- **How to migrate**:\n- **Why make this breaking change**:\n- **Severity (number of people affected x effort)**:\n")),Object(o.b)("h3",{id:"what-happens-next"},"What Happens Next?"),Object(o.b)("p",null,"We are monitoring for pull requests. Do help us by keeping pull requests consistent by following the guidelines above."),Object(o.b)("h2",{id:"style-guide"},"Style Guide"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prettier.io"}),"Prettier")," will catch most styling issues that may exist in your code. You can check the status of your code styling by simply running ",Object(o.b)("inlineCode",{parentName:"p"},"npm run lint:frontend && npm run lint:backend"),"."),Object(o.b)("p",null,"However, there are still some styles that Prettier cannot pick up."),Object(o.b)("h2",{id:"semantic-commit-messages"},"Semantic Commit Messages"),Object(o.b)("p",null,"See how a minor change to your commit message style can make you a better programmer."),Object(o.b)("p",null,"Format: ",Object(o.b)("inlineCode",{parentName:"p"},"<type>(<scope>): <subject>")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<scope>")," is optional"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"feat: allow overriding of webpack config\n^--^  ^------------^\n|     |\n|     +-> Summary in present tense.\n|\n+-------\x3e Type: chore, docs, feat, fix, refactor, style, or test.\n")),Object(o.b)("p",null,"The various types of commits:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"feat"),": (new feature for the user, not a new feature for build script)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fix"),": (bug fix for the user, not a fix to a build script)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"docs"),": (changes to the documentation)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"style"),": (formatting, missing semi colons, etc; no production code change)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"refactor"),": (refactoring production code, eg. renaming a variable)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"test"),": (adding missing tests, refactoring tests; no production code change)")),Object(o.b)("p",null,"Use lower case not title case!"),Object(o.b)("h3",{id:"code-conventions"},"Code Conventions"),Object(o.b)("h4",{id:"general"},"General"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Most important: Look around.")," Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation."),Object(o.b)("li",{parentName:"ul"},'"Attractive"')),Object(o.b)("h3",{id:"documentation"},"Documentation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Do not wrap lines at 80 characters - configure your editor to soft-wrap when editing documentation.")),Object(o.b)("h2",{id:"license"},"License"),Object(o.b)("p",null,"By contributing to SteamSpeak, you agree that your contributions will be licensed under its MIT license."))}c.isMDXComponent=!0}}]);