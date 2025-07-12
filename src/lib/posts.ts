export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  author: string;
}

export const mockPosts: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-react",
    title: "Getting Started with React",
    content: `React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll explore the fundamentals of React and how to get started with your first project.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components."

## Key Concepts

### Components
Components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces.

### JSX
JSX is a syntax extension to JavaScript that allows you to write HTML-like code in your JavaScript files.

### State and Props
State allows components to manage their own data, while props allow data to be passed from parent to child components.

## Getting Started

To create a new React application, you can use Create React App or modern tools like Vite for faster development.

This is just the beginning of your React journey. There's so much more to explore!`,
    excerpt: "Learn the fundamentals of React and how to build your first application with this comprehensive guide.",
    publishedAt: "2024-01-15",
    author: "Alex Johnson"
  },
  {
    id: "2",
    slug: "mastering-typescript",
    title: "Mastering TypeScript for React Development",
    content: `TypeScript has become an essential tool for React development, providing type safety and improved developer experience. Let's dive into how to effectively use TypeScript with React.

## Why TypeScript?

TypeScript adds static type definitions to JavaScript, which helps catch errors early in the development process and provides better IDE support.

## Setting Up TypeScript with React

Most modern React setups come with TypeScript support out of the box. Here's what you need to know:

### Type Definitions
- Props interfaces
- State types
- Event handlers
- Custom hooks

### Best Practices
1. Always define interfaces for your props
2. Use generic types for reusable components
3. Leverage union types for flexible APIs
4. Don't overuse 'any' type

## Advanced Patterns

TypeScript enables powerful patterns like:
- Generic components
- Conditional types
- Utility types
- Mapped types

With TypeScript, your React applications become more maintainable and less prone to runtime errors.`,
    excerpt: "Discover how TypeScript enhances React development with type safety and better tooling support.",
    publishedAt: "2024-01-20",
    author: "Sarah Chen"
  },
  {
    id: "3",
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques for 2024",
    content: `CSS has evolved tremendously in recent years. Let's explore the latest techniques and features that are shaping modern web design.

## CSS Grid and Flexbox

These layout systems have revolutionized how we approach web layouts:

### CSS Grid
Perfect for two-dimensional layouts with precise control over rows and columns.

### Flexbox
Ideal for one-dimensional layouts and component-level styling.

## CSS Custom Properties (Variables)

CSS variables provide dynamic theming capabilities:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
}
\`\`\`

## Container Queries

The future of responsive design is here with container queries, allowing components to respond to their container's size rather than the viewport.

## CSS-in-JS vs. Traditional CSS

Modern frameworks offer various approaches:
- Styled Components
- Emotion
- Tailwind CSS
- CSS Modules

Each has its place depending on your project's needs.

## Performance Considerations

- Critical CSS
- CSS-in-JS runtime implications
- Build-time optimizations
- Progressive enhancement

Stay ahead of the curve by embracing these modern CSS techniques!`,
    excerpt: "Explore the latest CSS features and techniques that are transforming web development in 2024.",
    publishedAt: "2024-01-25",
    author: "Mike Rodriguez"
  },
  {
    id: "4",
    slug: "react-performance-optimization",
    title: "React Performance Optimization Guide",
    content: `Performance is crucial for great user experiences. Learn how to optimize your React applications for maximum efficiency.

## Understanding React Performance

React's virtual DOM is fast, but there are still ways to optimize your applications:

### Common Performance Issues
- Unnecessary re-renders
- Large bundle sizes
- Memory leaks
- Inefficient algorithms

## Optimization Techniques

### 1. React.memo()
Prevent unnecessary re-renders of functional components:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data.title}</div>;
});
\`\`\`

### 2. useMemo() and useCallback()
Memoize expensive calculations and callback functions.

### 3. Code Splitting
Use dynamic imports to split your code into smaller chunks:

\`\`\`jsx
const LazyComponent = lazy(() => import('./LazyComponent'));
\`\`\`

### 4. Virtual Scrolling
For large lists, implement virtual scrolling to render only visible items.

## Profiling Tools

- React DevTools Profiler
- Chrome DevTools Performance tab
- Bundle analyzers

## Best Practices

1. Keep components small and focused
2. Avoid inline objects and functions
3. Use proper keys for list items
4. Implement proper loading states
5. Optimize images and assets

Remember: premature optimization is the root of all evil. Profile first, then optimize!`,
    excerpt: "Learn essential techniques to optimize your React applications for better performance and user experience.",
    publishedAt: "2024-02-01",
    author: "Emma Thompson"
  },
  {
    id: "5",
    slug: "building-accessible-web-apps",
    title: "Building Accessible Web Applications",
    content: `Web accessibility ensures that your applications can be used by everyone, including people with disabilities. Let's explore how to build inclusive web experiences.

## Understanding Web Accessibility

Web accessibility (a11y) is about creating web content that can be used by people with various abilities and disabilities.

## WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for accessibility:

### Four Principles (POUR)
1. **Perceivable** - Information must be presentable in ways users can perceive
2. **Operable** - Interface components must be operable
3. **Understandable** - Information and UI operation must be understandable
4. **Robust** - Content must be robust enough for various assistive technologies

## Practical Implementation

### Semantic HTML
Use proper HTML elements for their intended purpose:

\`\`\`html
<button>Click me</button> <!-- Not <div onclick="..."> -->
<main>Main content</main>
<nav>Navigation</nav>
<article>Article content</article>
\`\`\`

### ARIA Attributes
Enhance semantic meaning when HTML isn't enough:

\`\`\`html
<button aria-expanded="false" aria-controls="menu">
  Menu
</button>
\`\`\`

### Keyboard Navigation
Ensure all interactive elements are keyboard accessible:
- Tab order
- Focus management
- Keyboard shortcuts

### Color and Contrast
- Sufficient color contrast ratios
- Don't rely solely on color to convey information
- Test with color blindness simulators

## Testing Tools

- axe DevTools
- WAVE Web Accessibility Evaluator
- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation testing

## React-Specific Considerations

- Focus management in SPAs
- Live regions for dynamic content
- Accessible form validation
- Skip links for navigation

Building accessible applications isn't just about compliance—it's about creating better experiences for all users.`,
    excerpt: "Learn how to build web applications that are accessible to all users, including those with disabilities.",
    publishedAt: "2024-02-05",
    author: "David Kim"
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return mockPosts.find(post => post.slug === slug);
};

export const getAllPosts = (): BlogPost[] => {
  return mockPosts;
};