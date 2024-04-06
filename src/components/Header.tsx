import about from "../pages/About"
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="/logo.png" className="ml-8 mr-3 h-8 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-[2rem] font-semibold font-serif dark:text-white">Anonimo</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>Home</Navbar.Link>
        <Navbar.Link href="/about" className="text-lg">About</Navbar.Link>
        <Navbar.Link href="/pricing" className="text-lg">Pricing</Navbar.Link>
        <Navbar.Link href="/contact" className="text-lg">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header