declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// For CSS modules (e.g., filename.module.css) if used
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
