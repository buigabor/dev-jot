import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --main-b-color: #339989;
  --secondary-b-color: #2b2c28;
  --tertiary-b-color: #f7b501;
}

[hidden] {
  display: none !important;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
  letter-spacing: 0.02em;
}

.button {
  color: white;
  background: var(--main-b-color);
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font: inherit;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05), 0 3px 6px 0 rgba(0, 0, 0, 0.05);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
}

.overlay.dark {
  background-color: rgba(0, 0, 0, 0.8);
}

.app-container {
  display: flex;
  justify-content: space-between;
}

/* modal styles */

.modal,
.modal-lesson {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 0.25rem;
  box-shadow: 4px 12px 47px 0 rgba(0, 0, 0, 0.15);
  z-index: 3;
}

.modal {
  background-color: white;
}

.modal-lesson {
  flex-direction: column;
  padding: 5px;
}

.modal-lesson-close {
  position: absolute;
  top: 5px;
  right: 5px;
}

.modal:not(.modal-lesson):hover button.sign-in {
  cursor: pointer;
  background: var(--secondary-b-color);
  color: white;
  transition: 0.2s;
}

.modal button.sign-in {
  display: block;
  min-height: 85px;
  min-width: 250px;
  border: none;
  background: white;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: bold;
}

/* modal lesson styles */

.modal-lesson {
  max-width: 1050px;
  width: 100%;
  max-height: calc(100vh - 250px);
  padding: 5px;
  overflow: auto;
  justify-content: flex-start;
}

.modal-lesson-title {
  margin-top: 50px;
  align-self: flex-start;
  padding: 15px 60px;
  font-size: 32px;
  position: relative;
}

.modal-lesson-title::before {
  content: "";
  position: absolute;
  width: calc(100% - 100px);
  height: 20px;
  left: 50px;
  top: 40px;
  z-index: -1;
  background-color: var(--tertiary-b-color);
  opacity: 50%;
}

.modal-lesson-content {
  padding: 15px 60px;
  align-self: flex-start;
}

/* header styles */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: relative;
  background: var(--main-b-color);
  padding: 15px 20px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.07), 0 3px 10px 0 rgba(0, 0, 0, 0.07);
  color: white;
  min-height: 50px;
  max-height: 50px;
}

.header-title {
  display: flex;
}

.header-title img {
  width: 24px;
  margin-left: 6px;
  margin-bottom: -6px;
}

.sign-out .button {
  background: white;
  color: var(--main-b-color);
  border-radius: 3px;
  font-size: 14px;
  font-weight: 700;
}

.profile {
  display: flex;
  align-items: center;
}

.avatar img {
  height: 50px;
  width: 50px;
  border-radius: 53px;
  margin-left: 20px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.07), 0 3px 10px 0 rgba(0, 0, 0, 0.07);
}

.header h1,
.header h2 {
  margin: 0;
}

.header h1 {
  font-size: 28px;
}

.header h2 {
  font-size: 16px;
}

/* loading skeleton styles */

.pre-auth-container,
.app-container {
  display: flex;
  color: var(--secondary-b-color);
  flex-wrap: wrap;
  overflow: hidden;
}

.pre-auth-lesson-container,
.lessons-container {
  width: 35%;
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 100px);
}

span.lessons-count {
  margin: 25px;
  font-size: 1rem;
  font-weight: bold;
}

.pre-auth-create-lesson-container,
.create-lesson-container {
  flex: 1;
  display: flex;
}

.container {
  margin: 2rem auto;
  max-width: 800px;
  display: flex;
  justify-content: center;
}

.card {
  overflow: hidden;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05), 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  transition: ease box-shadow 0.3s;
}

.pre-auth-lesson-container .card {
  margin: 8px;
  min-width: 200px;
  flex: 1;
}

.pre-auth-create-lesson-container .card {
  flex: 1;
  margin: 8px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
}

.pre-auth-create-lesson-container .card-detail {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.pre-auth-create-lesson-container .card-detail p {
  flex: 1;
}

.pre-auth-create-lesson-container .card-detail h2 {
  margin-bottom: 10px;
}

.card-detail {
  padding: 0.5rem 1rem;
}

.card-detail h2 {
  font-size: 1.5rem;
  margin-bottom: none;
  line-height: 0.09;
}

.card-detail p {
  line-height: 1.3rem;
}

.card-image {
  margin: 0;
  padding: 0;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  max-width: 100%;
  height: auto;
}

.loading {
  position: relative;
  background-color: #e2e2e2;
}

.loading.card-image {
  border-radius: 0;
}

.loading::after {
  display: block;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: loading 1.5s infinite;
}

.card-title.loading {
  height: 1.8rem;
}

.card-image.image {
  max-width: 100%;
  height: auto;
}

.card-description.loading {
  height: 80px;
}

/* lessons styles */

.lessons-container {
  padding: 15px 45px;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  background: var(--secondary-b-color);
  flex-wrap: nowrap;
  max-height: calc(100vh - 110px);
  overflow-y: auto;
  flex-direction: column;
}

.lessons-container-header {
  margin-left: 5px;
  color: white;
}

.lessons {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

/* issue asked to remove cursor: pointer in the lesson card so it has been removed */

.lesson-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5), 0 5px 20px 0 rgba(0, 0, 0, 0.5);
  height: 200px;
}

.lesson-card-title-container {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.lesson-card-title-container .button,
.modal-lesson .button {
  display: flex;
  align-items: center;
  max-height: 30px;
  border-radius: 3px;
  padding: 5px 8px;
}

.lesson-card-title {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 17px;
  color: var(--main-b-color);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 20px;
}

.lesson-card-content {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 5px 8px;
  flex: 1;
}

.lesson-card-content-buttons {
  display: flex;
  justify-content: flex-start;
  margin-top: 12px;
}

.lesson-card-content-buttons .button {
  font-size: 12px;
  border-radius: 3px;
}

.lesson-card-content-buttons button:first-of-type {
  margin-right: 2px;
  min-width: 115px;
  letter-spacing: 1px;
  padding: 5px 8px;
  background: var(--tertiary-b-color);
  color: black;
}

.lesson-card-content-buttons button:last-of-type {
  padding: 5px 8px;
  max-width: 50px;
}

.no-lessons {
  color: white;
  font-weight: 600;
  margin-left: 8px;
}

/* create lesson styles */

.create-lesson-container {
  padding: 15px 50px 15px 45px;
}

.create-lesson-container-header,
.lessons-container-header {
  display: flex;
}

.create-lesson-container-header img,
.lessons-container-header img {
  width: 24px;
  margin-right: 5px;
}

.create-lesson-container-header,
.lessons-container-header {
  margin: 5px 0;
}

.create-lesson-clear {
  margin-left: auto;
  min-width: 70px;
  max-height: 39px;
}

.create-lesson-input {
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
}

.create-lesson-input::placeholder {
  font-style: italic;
  font-size: 14px;
}

.create-lesson .button {
  margin-top: 20px;
  max-width: 150px;
  padding: 10px 12px;
  border-radius: 3px;
  background: var(--tertiary-b-color);
  color: black;
  letter-spacing: 1px;
  font-size: 14px;
  white-space: nowrap;
}

form {
  display: flex;
  flex-direction: column;
}

.create-lesson {
  width: 100%;
}

/* Quill editor styles */

#editor {
  width: 100%;
  background: white;
  height: calc(100vh - 360px);
  overflow: visible;
}

.ql-container > .ql-editor.ql-blank::before {
  font-size: 14px;
}

.lesson-card .ql-editor {
  overflow: hidden;
}

/* footer styles */

.footer {
  background: var(--main-b-color);
  padding: 10px 15px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.07), 0 3px 10px 0 rgba(0, 0, 0, 0.07);
  color: white;
  font-size: 12px;
}

.footer a {
  color: white;
}

/* media queries */

@media only screen and (max-width: 1090px) {
  body {
    min-width: 1090px;
    overflow-x: scroll;
  }

  .modal-lesson {
    max-width: 90%;
  }
}
`;

export default GlobalStyle;
