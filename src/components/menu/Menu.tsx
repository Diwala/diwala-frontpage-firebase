import * as React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import Scrollchor from 'react-scrollchor';
import { withRouter } from 'react-router';

class Menu extends React.Component {
  animationSpeed: number;
  state: {
    menuOpen: boolean
  };

  constructor(props: any) {
    super(props);
    this.animationSpeed = 600;
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange = (state: any) => {
    this.setState({menuOpen: state.isOpen});
  }

  closeMenu = () => {
    this.setState({menuOpen: false});
  }

  getMainMenu = () => {
    return (
      <>
        <Scrollchor beforeAnimate={() => this.closeMenu()} to="#home" animate={{duration: this.animationSpeed}}>Home</Scrollchor>
        <Scrollchor beforeAnimate={() => this.closeMenu()} to="#benefits" animate={{duration: this.animationSpeed}}>Benefits</Scrollchor>
        <Scrollchor beforeAnimate={() => this.closeMenu()} to="#mission" animate={{ duration: this.animationSpeed}}>Our mission</Scrollchor>
        <Scrollchor beforeAnimate={() => this.closeMenu()} to="#partners" animate={{ duration: this.animationSpeed}}>Partners</Scrollchor>
        <Scrollchor beforeAnimate={() => this.closeMenu()} to="#support" animate={{ duration: this.animationSpeed}}>Support</Scrollchor>
        <Scrollchor beforeAnimate={() => this.closeMenu()} to="#team" animate={{ duration: this.animationSpeed}}>Team</Scrollchor>
        <Scrollchor beforeAnimate={() => this.closeMenu()} to="#footer" animate={{ duration: this.animationSpeed}}>Contact</Scrollchor>
      </>
    );
  }

  getCertificateMenu = () => {
    return (
      <>
        <a href="/">Home</a>
      </>
    );
  }

  render () {
    const getMenuPoints = (props: any) => {
      if (props.location.pathname === '/') {
        return this.getMainMenu();
      } else if (props.location.pathname === '/certificates' || props.location.pathname === '/blog') {
        return this.getCertificateMenu();
      } else {
        return this.getMainMenu();
      }
    };

    return (
      <BurgerMenu isOpen={this.state.menuOpen} onStateChange={this.handleStateChange} right={true}>
        <div className="flex-list">
          {getMenuPoints.bind(this, this.props)()}
        </div>
      </BurgerMenu>
    );
  }
}

export default withRouter(Menu);
