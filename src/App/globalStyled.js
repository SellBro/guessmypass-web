import { createGlobalStyle } from 'styled-components';

import { font, color } from 'shared/utils/styles';

export const Styles = createGlobalStyle`

    *, *:after, *:before, input {
        box-sizing: border-box;
    }

    #root , html, body {
        height: 100%;
        margin: 0;
    }

    body {
        background-color: ${color.background};
        ${font.regular};
    }

    button {
        border: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px ${color.backgroundForm} inset !important;
        -webkit-text-fill-color: ${color.textPrimary} !important;
    }

    html {
        touch-action: manipulation;
    }

    [role="button"], button, input, select, textarea {
        outline: none;
        &:focus {
            outline: none;
        }
        &:disabled {
            opacity: 1;
        }
    }

`;
