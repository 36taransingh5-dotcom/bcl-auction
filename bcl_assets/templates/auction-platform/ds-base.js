// ds-base.js — BCL Auction Platform template
// Injects BCL styles only. _ds_bundle.js is loaded directly in the
// template's <helmet> as a synchronous <script> so it is guaranteed
// to execute before Babel processes the type="text/babel" UI-kit files.
(() => {
  const base = '../..';
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = base + '/styles.css';
  document.head.appendChild(l);
})();
