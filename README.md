## ng-book

This book contains a series of chapters that carefully discuss the concepts of the Angular Frontend Framework. Being an intermediate angular developer, this book serves as a medium to re-iterate and cement the concepts I have learnt before. It also breathes meaning into some of the scary fundamentals I had issues with.

# A Breakdown Of The Chapters.

1. **Writing Your First Angular App.** <br>
    In this chapter, I built my first angular app in the book. An app that was perceived to be a reddit clone. Using basic components, models, binding and some very basic concepts were explained. The source code for this repo can be found <a href="https://github.com/OlaoreFouad/ng-book/tree/master/ng-reddit">here</a>. At the end of the chapter, I deployed the website to ZEIT now - on this <a href="https://ng-reddit.now.sh">url</a>.

2. **TypeScript**<br>
    Well, this wasn't really centered around Angular in any way. It only served as an introduction to TypeScript - a superset of the JavaScript language. ES6 provides a handful of features that makes web development easy and approachable - classes and modules. TypeScript ensures the use of types in code. While this may not feel needed, but it greatly improves the readability of code in many ways - as developers can clearly visualize the type and nature of data being passed in (function arguments) and data being returned. Apart from that, it also provides annotations. We also looked at the REPL program for TS - TSUN (TypeScript Upgraded Node).

3. **How Angular Works**<br>
    This chapter helped me wrap my head around the general structure of Angular. It explains that Angular works as a tree of components - independent blocks of the program. It can be seen as the various parts of a program. Supposed a school management system that contains the _navigation_, _view students_ section and _view admins_ section. These are all components of the whole angular application. Angular also starts a process called bootstrapping the appliication in the beginning. It **boots** the AppModule which houses the root component - **AppComponent**. After all we went through, I built a mini-inventory application, whose source code can be found <a href="https://github.com/OlaoreFouad/ng-book/tree/master/inventory-app">here</a>. At the end of the chapter, I deployed the website to ZEIT now - on this <a href="https://inventory-app-blond-two.now.sh/">url</a>.

4. **Built-In Directives**
    In the previous chapter, we discusses the basic building block of an Angular app - A component. Once more, a component basically encapsulates a view and its logic. For example a _contact form_ can be a component - as it has views specific to it (inputs) and underlying **logic** that is supposed to handle the data. Directives are special attributes, handed to us by Angular that give elements dynamic behavior. In summary, I built this <a href="https://built-in-directives-three.now.sh/">app</a> to showcase the use of some basic built-in angular directives.