import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    :root {
    --oc-gray-0: #f8f9fa;
    --oc-gray-1: #f1f3f5;
    --oc-gray-2: #e9ecef;
    --oc-gray-3: #dee2e6;
    --oc-gray-4: #ced4da;
    --oc-gray-5: #adb5bd;
    --oc-gray-6: #868e96;
    --oc-gray-7: #495057;
    --oc-gray-8: #343a40;
    --oc-gray-9: #212529;
    }

    body {
        display: flex;
        justify-content: center;
        background-color: #15171A;
        padding: 40px 80px;
    }

    header {
        display: flex;
        width: 100%;
        height: 80px;
        justify-content: space-between;
        align-items: top;
    }

    header a{
        font-family: 'JetBrains Mono Regular';
        line-height: 18px;
        font-weight: 400;
        font-size: 14px;
        color: #4c6ef5;
        text-decoration: underline;
        cursor: pointer;
    }

    a::before{
        content:'👉';
    }

    .wrapper {
        width: 50vw;
    }

    h1 {
        font-family: 'JetBrains Mono Regular';
        color: white;
        font-weight: 400;
        margin:0;
    }

    p,ul {
        color: var(--oc-gray-5);
    }

    li {
        line-height: 32px;
    }
    
    @font-face {
        font-family: 'JetBrains Mono Regular';
        src: url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/eot/JetBrainsMono-Regular.eot') format('embedded-opentype'),
        url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/woff2/JetBrainsMono-Regular.woff2') format('woff2'),
        url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/woff/JetBrainsMono-Regular.woff') format('woff'),
        url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/ttf/JetBrainsMono-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

        
    @font-face {
        font-family: 'JetBrains Mono Bold';
        src: url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/eot/JetBrainsMono-Bold.eot') format('embedded-opentype'),
        url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/woff2/JetBrainsMono-Bold.woff2') format('woff2'),
        url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/web/woff/JetBrainsMono-Bold.woff') format('woff'),
        url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/ttf/JetBrainsMono-Bold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
    }
`;

