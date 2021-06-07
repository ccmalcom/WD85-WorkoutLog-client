import React, {useState} from 'react';
import { //1
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const Sitebar = (props) =>{ //2
    //3
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen)
    }
    
    return(
        <Navbar color='faded' light expand='md'>
            <NavbarBrand href='/'>Workout Log</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;

/*
    1: only importing navbar and navbarBrand from ReactStrap
    2: Function named Sitebar to avoid naming conflict with Navbar
    3: Rendering a single parent element (Navbar) which holds the child element (NavbarBrand). This 1-parent rule is important in React
*/  