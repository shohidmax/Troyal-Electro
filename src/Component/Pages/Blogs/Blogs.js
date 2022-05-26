import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mt-2 mb-2">
            <h2>
              {" "}
              How will you improve the performance of a React Application ?
            </h2>
            <p>
              <ins>
                <span style={{ color: "red" }}>React : </span>
              </ins>
              To Clean Code and Recomended System Can get best Performance in
              React Project. According to research by Akamai, a second delay in
              load time can cause a 7 percent reduction in conversions, making
              it imperative for developers to create apps with optimized
              performance. In React applications, we are guaranteed a very fast
              UI by default. However, as an application grows, developers may
              encounter some performance issues. In this guide, we will discuss
              five important ways to optimize the performance of a React
              application, including pre-optimization techniques. These include:
              Keeping component state local where necessary Memoizing React
              components to prevent unnecessary re-renders Code-splitting in
              React using dynamic import() Windowing or list virtualization in
              React Lazy loading images in React React pre-optimization
              techniques Before optimizing a React application, we must
              understand how React updates its UI and how to measure an app’s
              performance. This makes it easy to solve any React performance
              problems.
            </p>
          </div>

          <div className="mt-2 mb-2">
            <h2>
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              Use Local state is most often managed in React using the useState
              hook. For example, local state would be needed to show or hide a
              modal component or to track values for a form component, such as
              form submission, when the form is disabled and the values of a
              form’s inputs. Global (UI) state – Global state is data we manage
              across multiple components. Global state is necessary when we want
              to get and update data anywhere in our app, or in multiple
              components at least. A common example of global state is
              authenticated user state. If a user is logged into our app, it is
              necessary to get and change their data throughout our application.
              Sometimes state we think should be local might become global.
              Server state – Data that comes from an external server that must
              be integrated with our UI state. Server state is a simple concept,
              but can be hard to manage alongside all of our local and global UI
              state. There are several pieces of state that must be managed
              every time you fetch or update data from an external server,
              including loading and error state. Fortunately there are tools
              such as SWR and React Query that make managing server state much
              easier. URL state – Data that exists on our URLs, including the
              pathname and query parameters. URL state is often missing as a
              category of state, but it is an important one. In many cases, a
              lot of major parts of our application rely upon accessing URL
              state. Try to imagine building a blog without being able to fetch
              a post based off of its slug or id that is located in the URL!
              There are undoubtedly more pieces of state that we could identify,
              but these are the major categories worth focusing on for most
              applications you build.
            </p>
          </div>
          <div className="mt-2 mb-2">
            <h2>How does prototypical inheritance work ?</h2>
            <p>
              When it comes to inheritance, JavaScript only has one construct:
              objects. Each object has a private property which holds a link to
              another object called its prototype. That prototype object has a
              prototype of its own, and so on until an object is reached with
              null as its prototype. By definition, null has no prototype, and
              acts as the final link in this prototype chain. Nearly all objects
              in JavaScript are instances of Object, which has null as its
              prototype. While this confusion is often considered to be one of
              JavaScript's weaknesses, the prototypal inheritance model itself
              is, in fact, more powerful than the classic model. It is, for
              example, fairly trivial to build a classic model on top of a
              prototypal model. JavaScript objects are dynamic "bags" of
              properties (referred to as own properties). JavaScript objects
              have a link to a prototype object. When trying to access a
              property of an object, the property will not only be sought on the
              object but on the prototype of the object, the prototype of the
              prototype, and so on until either a property with a matching name
              is found or the end of the prototype chain is reached.{" "}
            </p>
          </div>
          <div className="mt-2 mb-2">
            <h2>Find Product From arry By Product name ?</h2>
            <p> arry =--
              `"Producrt_title": "FABER-CASTELL DUST FREE ERASER",
                "Product_barcode": "|||||",
                "produc_price": 5,
                 "Product_img_url": "https:\/\/www.faber-castell.com\/-\/media\/Products\/Product-Repository\/Eraser\/24-24-22-Eraser\/187120-Eraser-DUST-FREE-187120\/Images\/187120_60_PX_9999989899_2637.ashx?bc=ffffff&as=0&h=900&w=900&hash=24506E1491CBF06194F0F01288216398D353CF39",
                "product_category": "STATIONERY",
                "product_brand": "FABER-CASTELL",
                "product_type": "ERASER",
                "products_tags": "FABER-CASTELL DUST FREE ERASER,|||||,STATIONERY,FABER-CASTELL,ERASER",
                "product_short data":  STATIONERY ",
                "long_discription": "FABER-CASTELL DUST FREE ERASER is the original Product of FABER-CASTELL. It is a STATIONERY item . It is ERASER. To chaque it online by this barcode - ||||| ."` --
            </p>
            <p>tO FIND BY NAME with ....api http://localhost:5000/api/product/Producrt_title=FABER-CASTELL DUST FREE ERASER
</p>
          </div>
          <div className="mt-2 mb-2">
            <h2>What is a unit test? Why should write unit tests?</h2>
            <p>
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper
              operation..Unit testing is a component of test-driven development
              (TDD), a pragmatic methodology that takes a meticulous approach to
              building a product by means of continual testing and revision.
              This testing method is also the first level of software testing,
              which is performed before other testing methods such as
              integration testing. Unit tests are typically isolated to ensure a
              unit does not rely on any external code or functions. Testing can
              be done manually but is often automated.All of the factors listed
              above are interconnected and imply that unit testing undeniably
              contributes to improving your software. Unit testing may seem like
              a tedious process at first, but in the long run, its benefits are
              clear. Unit testing ensures that all code meets quality standards
              before it’s deployed. This ensures a reliable engineering
              environment where quality is paramount. Over the course of the
              product development life cycle, unit testing saves time and money,
              and helps developers write better code, more efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
