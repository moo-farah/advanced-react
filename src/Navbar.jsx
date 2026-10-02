import styled from "styled-components"

const navItems = [
    { name: 'Features', href: '#features'},
    { name: 'Enterprise', href: '#enterprise'},
    { name: 'Pricing', href: '#pricing'},
    { name: 'Blog', href: '#blog'},
    { name: 'Careers', href: '#careers'}
]

const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  align-items: center;
  padding: 0.2rem;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
  margin: 0;
  padding: 0;
`;

 const NavLink = styled.a`
  color: #121212;
  text-decoration: none;
  transition: color 0.2s ease;
 `;

const Navbar = () => {
  return (
    <div>
    <Nav>
      <NavList>
      {navItems.map((link) => (
        <li key={link.name}>
          <NavLink href={link.href}>
              {link.name}
          </NavLink>
        </li>
      ))}
      </NavList>
    </Nav>
    </div>

     
  )
}

export default Navbar