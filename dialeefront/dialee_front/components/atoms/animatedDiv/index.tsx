import { ComponentProps } from 'react'
import styled from 'styled-components'

const StyledDiv=styled.div<{animation:string,animationDelay:string,animationTime:string,animationFill:string}>`
animation-name:${({animation})=>animation};
animation-delay:${({animationDelay})=>animationDelay};
animation-duration:${({animationTime})=>animationTime};
animation-fill-mode:${({animationFill})=>animationFill};

@keyframes slideInTopAnim{
    from{
        opacity:0;
        transform: translateY(-600px);
    }
    to{
        transform: translateY(0px);
    }
};
@keyframes slideInLeftAnim{
    0%{
        opacity:0;
        transform: translateX(-600px);
    }
    90%{
        opacity:1;
        transform: translateX(50px);
    }
   
}

`
const AnimatedDiv=({animationFill,animationTime,animationDelay,animation,children}:ComponentProps<any>)=>{
    return(
        <StyledDiv animation={animation} animationDelay={animationDelay} animationFill={animationFill} animationTime={animationTime}>
            {children}
        </StyledDiv>
        )
}
export default AnimatedDiv;