import { createGlobalStyle } from "styled-components";
export const PanigationStyle = createGlobalStyle`
:root {
    --primary: #23adad;
    --greyLight: #23adade1;
    --greyLight-2: #cbe0dd;
    --greyDark: #2d4848;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px    100% = 16px
    overflow-y: scroll;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.6px;
    line-height: 1.4;
    -webkit-user-select: none;
    backface-visibility: hidden;
    -webkit-font-smoothing: subpixel-antialiased;
  }
  
  .container {
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--greyLight-2);
    color: var(--greyDark);
  }
  
  ul {
    list-style-type: none;
  }
  
  .items-list {
    max-width: 90vw;
    margin: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3rem;
    justify-content: center;
    align-content: center;
  
    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .item {
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--greyDark);
    cursor: pointer;
  
    span {
      background: #ffffff;
      box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
      border-radius: 0.6rem;
      padding: 2rem;
      font-size: 3rem;
      transition: all 0.3s ease;
    }
  
    &:hover {
      span {
        transform: scale(1.2);
        color: var(--primary);
      }
    }
  
    p {
      font-size: 1.2rem;
      margin-top: 1rem;
      color: var(--greyLight);
    }
  }
  
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    margin: 3rem;
    border-radius: 0.6rem;
    background: #ffffff;
    box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
  
    &__numbers,
    &__btn,
    &__dots {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.8rem;
      font-size: 1.4rem;
      cursor: pointer;
    }
  
    &__dots {
      width: 2.6rem;
      height: 2.6rem;
      color: var(--greyLight);
      cursor: initial;
    }
  
    &__numbers {
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.4rem;
  
      &:hover {
        color: var(--primary);
      }
  
      &.active {
        color: #ffffff;
        background: var(--primary);
        font-weight: 600;
        border: 1px solid var(--primary);
      }
    }
  
    &__btn {
      color: var(--greyLight);
      pointer-events: none;
  
      &.active {
        color: var(--greyDark);
        pointer-events: initial;
  
        &:hover {
          color: var(--primary);
        }
      }
    }
  }
  `;
