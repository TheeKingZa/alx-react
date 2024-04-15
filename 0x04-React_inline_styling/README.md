# React inline styling
[]() 0x04 []()
---

`Read` or `watch`:

* [Aphrodite]()
* [Inline styling]()
* [Enzyme Render]()
* [Enzyme Prop]()
* [CSS Viewport]()
* [CSS Media queries]()
* [CSS Animations]()

---
# NEED TO KNOW?
* [the differences between using a CSS file and inline styling?](#differences-between-using-a-css-file-and-inline-styling)
* [how to use a CSS-in-JS tool like Aphrodite?](#how-to-use-a-css-in-js-tool-like-aphrodite)
* [how to use conditions within JS to apply different styles?](#how-to-use-conditions-within-js-to-apply-different-styles)
* [how to use responsive design and make the application show a different UI according to the screen size?](#how-to-use-responsive-design-and-make-the-application-show-a-different-ui-according-to-the-screen-size)
* [how to create small animations within the app?](#how-to-create-small-animations-within-the-app)
---

# Differences between using a CSS file and inline styling:

    * CSS File: When you use a CSS file, you separate your styles from your HTML. This makes your code more maintainable and scalable, as you can easily manage styles across multiple pages. CSS files are cached by the browser, so once loaded, subsequent pages load faster.
    * Inline Styling: Inline styling involves applying CSS directly within HTML elements using the style attribute. While this is convenient for small-scale styling changes and can be dynamically generated using JavaScript, it can become cumbersome to maintain as your project grows. Inline styles also prioritize over external stylesheets and can make it harder to maintain consistent styles across your project.
---

[`^`](#need-to-know)

---
# How to use a CSS-in-JS tool like Aphrodite:

Aphrodite is a CSS-in-JS library that allows you to write CSS directly in your JavaScript files. Here's a basic example:

```
    import { StyleSheet, css } from 'aphrodite';

    const styles = StyleSheet.create({
    heading: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    });

    const MyComponent = () => (
    <h1 className={css(styles.heading)}>Hello, world!</h1>
    );

```
This example defines a stylesheet using Aphrodite's StyleSheet.create() method, then applies the defined style using css() function.
---

[`^`](#need-to-know)

---
# How to use conditions within JS to apply different styles:

You can use JavaScript to conditionally apply styles based on certain conditions. Here's a simple example:

```
    const isLargeScreen = window.innerWidth > 1024;

    const styles = {
    fontSize: isLargeScreen ? '24px' : '16px',
    color: isLargeScreen ? 'blue' : 'red',
    };

```

In this example, the font size and color will change based on whether the screen size is larger than 1024 pixels.
---

[`^`](#need-to-know)

---
# How to use responsive design and make the application show a different UI according to the screen size:

Responsive design involves creating layouts that adapt to different screen sizes. You can achieve this using CSS media queries:

```
    @media (max-width: 768px) {
    /* Styles for screens smaller than 768px */
    }

    @media (min-width: 768px) and (max-width: 1024px) {
    /* Styles for screens between 768px and 1024px */
    }

    @media (min-width: 1024px) {
    /* Styles for screens larger than 1024px */
    }

```

You can also use JavaScript to dynamically adjust styles based on screen size, as shown in the previous example.
---

[`^`](#need-to-know)

---
# How to create small animations within the app:

You can create animations using CSS animations or JavaScript libraries like anime.js or react-spring. Here's a basic CSS animation example:

```
    .box {
    width: 100px;
    height: 100px;
    background-color: red;
    animation: move 2s infinite alternate;
    }

    @keyframes move {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100px);
    }
    }

```

This animation moves a box horizontally back and forth. You can adjust the properties to create different effects.

---

[`^`](#need-to-know)

---