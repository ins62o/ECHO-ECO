import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import reset from 'styled-reset';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from './theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

${reset}
  
@font-face {
    font-family: 'NanumSquareRound';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
  font-family: 'NanumSquareRound';
}



a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  background: none;
  border: none;
}

ul, ol {
  list-style: none;
}
`;

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
