import styled from "styled-components"


const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 5px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${props => props.variant === 'primary' ? '#403d39' : '#343a40'};
  color: ${props => props.variant === 'primary' ? '#f2f2f2' : '#f5f5f5'};
  &:hover {
    background-color: ${props => 
      props.$variant === 'primary' ? '#f8f9fa' : '#0056b3'
    };
`;

const Button = ({ children, variant = 'primary', ...props}) => {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
    
  )
}

export default Button