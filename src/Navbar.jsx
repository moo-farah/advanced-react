const navItems = [
    { name: 'Careers'},
    { name: 'Resources'},
    { name: 'Documentation'},
    { name: 'Pricing'},
    { name: 'Watch videos'}
]


const Navbar = () => {
  return (
    <div>
        {navItems.map((link) => (
            <li>{link.name}</li>
        ))}
    </div>
  )
}

export default Navbar