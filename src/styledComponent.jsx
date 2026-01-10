// import styled from "styled-components";     // wrong
import { styled } from "@mui/material";      // right

export const MainButton1 = styled('button')`
    color: var(--secondary-color);
    background-color: transparent;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all .3s ease;
    border-radius: 5px;
    border: 1px solid var(--secondary-color);
    padding: 14px 35px;
    position: relative;
    z-index: 1;
    /* overflow: hidden; */
    box-sizing: border-box;
    white-space: nowrap;

    &:hover{
        color: var(--white-color);
    }

    &::before{
        content: '';
        position: absolute;
        background-color: var(--secondary-color);
        color: var(--white-color);
        height: 0%;
        width: 100%;
        bottom: 0;
        top: auto;
        left: 0;
        transition: all .3s ease-in-out;
        z-index: -1;
    }
    &:hover::before{
        height: 100%;
        bottom: auto;
        top: 0;
    }

    @media (max-width:480px){
        
    }  

`;


export const MainButton2 = styled('button')`
    color: var(--white-color);
    background-color: var(--secondary-color);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all .3s ease;
    border-radius: 5px;
    border: 1px solid var(--secondary-color);
    padding: 14px 35px;
    position: relative;
    z-index: 1;
    /* overflow: hidden; */
    box-sizing: border-box;
    white-space: nowrap;

    &:hover{
        color: var(--white-color);
        border-color: var(--primary-color);
    }

    &::before{
        content: '';
        position: absolute;
        background-color: var(--primary-color);
        color: var(--white-color);
        height: 0%;
        width: 100%;
        bottom: 0;
        top: auto;
        left: 0;
        transition: all .3s ease-in-out;
        z-index: -1;
    }
    &:hover::before{
        height: 100%;
        bottom: auto;
        top: 0;
    }
`;

export const MainButton3 = styled('button')`
    color: var(--white-color);
    background-color: var(--primary-color);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all .3s ease;
    border-radius: 5px;
    border: 1px solid var(--primary-color);
    padding: 14px 35px;
    position: relative;
    z-index: 1;
    /* overflow: hidden; */
    box-sizing: border-box;
    white-space: nowrap;

    &:hover{
        color: var(--secondary-color);
        border-color: var(--white-color);
    }

    &::before{
        content: '';
        position: absolute;
        background-color: var(--white-color);
        color: var(--secondary-color);
        height: 0%;
        width: 100%;
        bottom: 0;
        top: auto;
        left: 0;
        transition: all .3s ease-in-out;
        z-index: -1;
    }
    &:hover::before{
        height: 100%;
        bottom: auto;
        top: 0;
    }
`;


export const MainButton4 = styled('button')`
    color: var(--white-color);
    background-color: transparent;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all .3s ease;
    border-radius: 5px;
    border: 1px solid var(--white-color);
    padding: 14px 35px;
    position: relative;
    z-index: 1;
    /* overflow: hidden; */
    box-sizing: border-box;
    white-space: nowrap;

    &:hover{
        color: var(--secondary-color);
        border-color: var(--white-color);
    }

    &::before{
        content: '';
        position: absolute;
        background-color: var(--white-color);
        color: var(--secondary-color);
        height: 0%;
        width: 100%;
        bottom: 0;
        top: auto;
        left: 0;
        transition: all .3s ease-in-out;
        z-index: -1;
    }
    &:hover::before{
        height: 100%;
        bottom: auto;
        top: 0;
    }
`;