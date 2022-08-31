import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        
      </a>
    </div>
  );
}

/*---> Styles <---*/
export const Image = styled.img`
  height: 32px;
  width: 108px;
`;

export default Logo;
