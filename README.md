## ng-book

This book contains a series of chapters that carefully discuss the concepts of the Angular Frontend Framework. Being an intermediate angular developer, this book serves as a medium to re-iterate and cement the concepts I have learnt before. It also breathes meaning into some of the scary fundamentals I had issues with.

# A Breakdown Of The Chapters.

1. **Writing Your First Angular App.** <br>
    In this chapter, I built my first angular app in the book. An app that was perceived to be a reddit clone. Using basic components, models, binding and some very basic concepts were explained. The source code for this repo can be found <a href="https://github.com/OlaoreFouad/ng-book/tree/master/ng-reddit">here</a>. At the end of the chapter, I deployed the website to ZEIT now - on this <a href="https://ng-reddit.now.sh">url</a>.

2. **TypeScript**<br>
    Well, this wasn't really centered around Angular in any way. It only served as an introduction to TypeScript - a superset of the JavaScript language. ES6 provides a handful of features that makes web development easy and approachable - classes and modules. TypeScript ensures the use of types in code. While this may not feel needed, but it greatly improves the readability of code in many ways - as developers can clearly visualize the type and nature of data being passed in (function arguments) and data being returned. Apart from that, it also provides annotations. We also looked at the REPL program for TS - TSUN (TypeScript Upgraded Node).

3. **How Angular Works**<br>
    This chapter helped me wrap my head around the general structure of Angular. It explains that Angular works as a tree of components - independent blocks of the program. It can be seen as the various parts of a program. Supposed a school management system that contains the _navigation_, _view students_ section and _view admins_ section. These are all components of the whole angular application. Angular also starts a process called bootstrapping the appliication in the beginning. It **boots** the AppModule which houses the root component - **AppComponent**. After all we went through, I built a mini-inventory application, whose source code can be found <a href="https://github.com/OlaoreFouad/ng-book/tree/master/inventory-app">here</a>. At the end of the chapter, I deployed the website to ZEIT now - on this <a href="https://inventory-app-blond-two.now.sh/">url</a>.

4. **Built-In Directives** <br>
    In the previous chapter, we discusses the basic building block of an Angular app - A component. Once more, a component basically encapsulates a view and its logic. For example a _contact form_ can be a component - as it has views specific to it (inputs) and underlying **logic** that is supposed to handle the data. Directives are special attributes, handed to us by Angular that give elements dynamic behavior. In summary, I built this <a href="https://built-in-directives-three.now.sh/">app</a> to showcase the use of some basic built-in angular directives. Source code can be found <a href="https://github.com/OlaoreFouad/ng-book/tree/master/built-in-directives">here</a>

5. **Forms: A Crucial Part Of Every Web Application**
    Or something similar?. Well, you get the gist. Every web application needs at one point or the other, to retrieve information from the visitors. It might be details to help improve a personalised vacation or just student data on a school's application form. Angular provides out of the box, an efficient way(s) to create, manage and control the forms in our application. Simply put, it hands us the _template_ and _reactive_ driven approach. The prominent one used in this chapter is the reactive form as it provides more features than the template-driven approach. It provides a mechanism for creating forms explicitly and registering controls in them. There is also a validator module that gives us basic validation techniques to plug into and utilise. We can also provide custom validators based on the business logic of the application. I built this <a href="https://forms.olaorefouad.now.sh">app</a> that shows a bit of validation, controls and more. The source code can be located <a href="https://github.com/OlaoreFouad/ng-book/tree/master/forms">here</a>

6. **Dependency Injection - Services**
    In our day-to-day applications, especially apps built with a component-based architecture where every implementation for a component is secluded from the component next door, common operations need to be processed in these components. More than one component might want to do the exact same thing at intervals or concurrently, and this most likely can be viewed as a _dependency_. So the concept of dependency injection can be explained as creating a single point where the operation to be executed is declared and implemented, the resulting object can then be _injected_ into components that would be in need of the service. Angular Services need to be provided in the NgModule declaration. In cases where we would need to provide string values like an API URL, we can easily use the provide and useValue props and inject in the constructor (see code.). Another twist to the story is the use of factories. Basically, these are implementations that are supposed to be provided to services, say a layer of abstraction being added to the operations the service is looking to implement. This factory serves as an encapsulation for a certain amount of logic that can be used cross-service. I created a factory and passed its reference into the service for usage. Well, it was really nice!

7. **Network Calls using HTTP**
    Data is available in a lot of places, in books and archives as much as web servers. In this chapter, we build a youtube search service where queries entered into a search box is sent over to YouTube's API to return videos matching the query string. Learnt how to attach query params, headers and a lot more!. Find the working application <a href="https://http.olaorefouad.vercel.app">here</a>