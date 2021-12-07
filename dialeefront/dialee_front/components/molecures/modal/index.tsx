import FixedDiv from "../../atoms/fixedDiv"
import { ComponentProps, useState,memo } from "react"
import FlexContainer from '../../atoms/flexcontainer';
import Span from '../../atoms/span';
import Button from '../../atoms/button';
import Image from '../../atoms/image';
import styled from "styled-components";

const StyledModal = styled.div<{animationDelay:string,animated:boolean}>`
background:linear-gradient(180deg,rgba(0,0,0,1) 0%, rgba(30,30,30,0.8) 5%, rgba(30,30,30,0.4) 30%, rgba(20,20,20,0.5) 50%, rgba(30,30,30,0.4) 70% ,rgba(0,0,0,0.8) 90%,rgba(0,0,0,0.8) 100%);
z-index:100;
position:absolute;
width:100%;
overflow-y:auto;
height:100%;
padding-bottom:10vh;
padding-top:10vh;
transform:${props=>props.animated===false?"none":"translateY(-100vh)"};
animation:${props=>props.animated===false?"none":"slideInTopAnim 1s forwards"};
animation-delay:${props=>props.animationDelay||'1.7s'};
`


const Modal=({title,confirmBtn,additionalBtns,children,isCancle,animated,animationDelay}:ComponentProps<any>)=>{
    const [isActive,setActive]=useState(true);
    const allowCancle=isCancle==="no"?false:true;
    const onCancle=(e:MouseEvent)=>{
        e.preventDefault();
        setActive(false);
    }
    return(<>
        {isActive?<>
                <StyledModal animationDelay={animationDelay} animated={animated}> 
                    <FlexContainer direction="column" align="center" alignItems="center" alignContent="center">
                            <FlexContainer height="auto" align="center" direction="column" alignItems="center" flexGrow={2}>   
                                <Span size="30">{title}</Span>
                                {children}
                                <FlexContainer direction="row" align="center" alignItems="center">
                                {confirmBtn?confirmBtn:null}
                                {allowCancle?<Button btn_type="cancle" onClick={onCancle} >취소</Button>:null}
                                </FlexContainer>
                                <br/><br/>
                                {additionalBtns?additionalBtns:<Image src="/imoticon/Anchorpink.png" width="30px"height="30px"/>}
                            </FlexContainer>
                    </FlexContainer>                
                </StyledModal>
    </>:null}
    </>)
}
export default Modal