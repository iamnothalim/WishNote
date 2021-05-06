import { createGlobalStyle } from "styled-components";
import Itim_Regular from "./Itim-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family : 'Itim_Regular';
        src: local('Itim_Regular'), url(${Itim_Regular})format('ttf');
    }

`;
