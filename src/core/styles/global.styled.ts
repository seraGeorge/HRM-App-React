import { createGlobalStyle } from 'styled-components';
import ManropeBold from "../fonts/Manrope-Bold.ttf"
import ManropeMedium from "../fonts/Manrope-Medium.ttf"
const GlobalStyle = createGlobalStyle`
  :root {
  --primary-color: #7e3af2;
  --secondary-color: rgba(36, 38, 45);
  --placeholder-color: rgba(112, 114, 117);
  --background-color: #f9fafb;
}

* {
  box-sizing: border-box;
}
@font-face {
  font-family: 'Manrope';
  src: local('Manrope'),
  url(${ManropeBold}) ,
  url(${ManropeMedium}) ,
  font-weight: 700;
  font-weight: 500;
}
html {
  height: 100%;
}
body {
  margin: 0 auto;
  padding: 0;
  background-color: var(--background-color);
  font-family: "Manrope";
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.ul-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
.global-width {
  max-width: 1200px;
  margin: 0 auto;
}
.page-title {
  margin: 0;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--secondary-color);
}
.subheading {
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: var(--secondary-color);
}
.modal-heading,
.chip-heading {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--secondary-color);
}

.common-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.common-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-wrap {
  text-decoration: none;
}
.material-symbols-outlined {
  color: white;
}
.button-decoration {
  font-weight: 500;
  text-decoration: none;
  color: white;
}
::placeholder {
  color: var(--secondary-color);
  font-size: 16px;
  font-family: "Manrope";
}
.rotate {
  transform: rotate(180deg);
}
.display {
  display: block;
}
.no-display {
  display: none;
}
.overlay {
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  position: fixed;
  z-index: 3;
  top: 0;
  pointer-events: none;
  transition: 0.5s ease;
}
.open{
  opacity: 0.6;
  pointer-events: visible;
}
.main-section {
  height: 100%;
  margin-bottom: 80px;
}
`;

export default {
  GlobalStyle,
};
