import type { NextPage } from 'next'
import { useState } from 'react'
import styled from 'styled-components'



const PageWaveCover2=styled.div<{clicked:string}>`
 
  height:${({clicked})=>clicked==="true"?'300vh':'190vw'};
  width:${({clicked})=>clicked==="true"?'300vh':'180vw'};
  position:absolute;
  left:${({clicked})=>clicked==="true"?'-70%':'-50%;'};
  top:${({clicked})=>clicked==="true"?'-60%':'70%'};
  background: linear-gradient(#590995 ,#03C4A1);
  border:2px white solid;
  transform-origin: 52% 48%;
  border-radius: 39%;
  animation:wave  20s linear infinite;
  @keyframes wave{
    0% {  transform: rotate(0deg); }
    25%{  transform: rotate(180deg);}
    50% {transform:  rotate(360deg) ; }
    75% {transform:  rotate(540deg) ; }
    100%{ transform:  rotate(720deg) ;}
  };
  transition:4s;
  
`
const HomeDiv=styled.div`
    z-index: 3000;
    width: 100%;
    position: absolute;
    overflow: hidden;
    left:0;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(black,${props=>props.theme.colors.color1} );
`
const MoonDiv=styled.div<{clicked:string}>`
  border-radius:100%;
  background:linear-gradient(rgba(255,255,255,0.01),rgba(255,255,255,0.9));
  position:absolute;
  width:70px;
  z-index:40;
  height:70px;
  top:20%;
  left:46%;
  // transform:${({clicked})=>clicked==="true"?'translate3d(-100px,100px,0) scale(80%)':'none'};
  // transition:4s;
`
const MoonLightDiv=styled.div<{clicked:string}>`
  border-radius:100%;
  width:70px;
  height:70px;
  background:radial-gradient(rgba(255,255,255,0.01),rgba(255,255,255,0.9));
  position:absolute;
  width:70px;
  z-index:39;
  height:70px;
  top:20%;
  left:46%;
  // transform:${({clicked})=>clicked==="true"?'translate3d(-100px,100px,0) scale(80%)':'none'};
  // transition:4s;
`
const Home: NextPage = () => {
  const [clicked,setClicked]=useState("false");

  return (
        <HomeDiv onClick={function(){console.log("jo");setClicked("true")}}>
            <MoonDiv clicked={clicked}/>
            <MoonLightDiv clicked={clicked}/>
            
            <PageWaveCover2 clicked={clicked} />
        </HomeDiv>
  )
}

export default Home
