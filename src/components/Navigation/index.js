import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    // NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {UncontrolledTooltip} from 'reactstrap';
import icon from '../../images/icon.png';
import './style.css';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                    <Navbar className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
                        <div className='container'>
                        <NavbarBrand href="/">
                            <img alt='icon' className='nav_icon' src={icon}/></NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav caret >
                                        Movies
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink className="text-dark font-weight-bold" href="#MovieOfTheDay" >Movie of the day!</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink  className="text-dark font-weight-bold" href="#Gallery">Gallery</NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider/>
                                        <DropdownItem>
                                            <NavLink className="text-dark font-weight-bold" href="#Find a Movie!">Find a Movie!</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret disabled>

                                        <span id="UncontrolledTooltipExample">Books</span>
                                        <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                                            See U Soon!
                                        </UncontrolledTooltip>

                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink className="text-dark font-weight-bold" href="/">Book of the day!</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="text-dark font-weight-bold" href="/">Gallery</NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider/>
                                        <DropdownItem>
                                            <NavLink className="text-dark font-weight-bold" href="#">Find a Book!</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                        </div>
                    </Navbar>
            </div>
        );
    }
}