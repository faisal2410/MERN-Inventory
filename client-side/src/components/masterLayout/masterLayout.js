import React, { Component, Fragment } from "react";
import {Container,Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {
    AiOutlineHome,
    AiOutlineInbox,
    AiOutlineLogout,
    AiOutlineMenuUnfold, AiOutlinePieChart,
    AiOutlineShop, AiOutlineShopping, AiOutlineShoppingCart,
    AiOutlineUser
} from "react-icons/ai";
import {BsArrowsFullscreen, BsBookmarkStar, BsBox, BsPeople} from "react-icons/bs";
import logo from "../../assets/images/logo.svg";
import {
    BiCategory,
    GrUpdate,
    MdAttachMoney,
    MdOutlineCategory,
    MdOutlineLocalShipping, MdOutlineRefresh, MdPeopleOutline,
    RiDashboardLine
} from "react-icons/all";

class MasterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
      logOutRedirect:false,
    };
  }

  MenuBarClickHandler = () => {
    let sideNav = this.sideNav;
    let content = this.content;
    let topNav = this.topNav;
    if (sideNav.classList.contains("side-nav-open")) {
      sideNav.classList.add("side-nav-close");
      sideNav.classList.remove("side-nav-open");
      content.classList.add("content-expand");
      content.classList.remove("content");
      topNav.classList.add("top-navbar-expand");
      topNav.classList.remove("top-navbar");
    } else {
      sideNav.classList.remove("side-nav-close");
      sideNav.classList.add("side-nav-open");
      content.classList.remove("content-expand");
      content.classList.add("content");
      topNav.classList.remove("top-navbar-expand");
      topNav.classList.add("top-navbar");
    }
  };

  FullScreen = () => {
    if (this.state.isFullScreen === true) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
      this.setState({ isFullScreen: false });
    } else {
      let elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
      this.setState({ isFullScreen: true });
    }
  };

  render() {
          return (
              <Fragment>
                  <div>
                      <Navbar ref={(div) => {this.topNav = div;}} className=" fixed-top top-navbar ">
                          <Container fluid={true}>
                              <Navbar.Brand >
                                  <a className="icon-nav" onClick={this.MenuBarClickHandler}><AiOutlineMenuUnfold /></a>
                                  <img className="nav-logo mx-3"  src={logo} alt="logo"/>
                              </Navbar.Brand>

                              <div className="float-right h-auto d-flex">
                                  <button className="mx-2 btn btn-sm btn-outline px-3" onClick={this.FullScreen}> <BsArrowsFullscreen className="mx-2" /> SCREEN  </button>
                                  <div className="user-dropdown">
                                      <img className="icon-nav-img icon-nav" src="https://yt3.ggpht.com/ytc/AKedOLRNgeV2pOHHLhb-uNlo95HH3yF3U_htLbT8_iWr=s48-c-k-c0x00ffffff-no-rj"/>
                                      <div className="user-dropdown-content ">
                                          <div className="mt-4 text-center">
                                              <img className="icon-nav-img" src="https://yt3.ggpht.com/ytc/AKedOLRNgeV2pOHHLhb-uNlo95HH3yF3U_htLbT8_iWr=s48-c-k-c0x00ffffff-no-rj"/>
                                              <h6>Rabbil Hasan</h6>
                                              <hr className="user-dropdown-divider  p-0"/>
                                          </div>
                                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/a" className="side-bar-item">
                                              <AiOutlineUser className="side-bar-item-icon" />
                                              <span className="side-bar-item-caption">Profile</span>
                                          </NavLink>
                                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/a" className="side-bar-item">
                                              <MdPeopleOutline className="side-bar-item-icon" />
                                              <span className="side-bar-item-caption">Users</span>
                                          </NavLink>
                                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/b" className="side-bar-item">
                                              <AiOutlineLogout className="side-bar-item-icon" />
                                              <span className="side-bar-item-caption">Logout</span>
                                          </NavLink>

                                      </div>
                                  </div>
                              </div>


                          </Container>
                      </Navbar>
                      <div ref={(div) => {this.sideNav = div;}} className="side-nav-open">
                          <div className="side-nav-top text-center bg-light ">
                              <Link to="/" className="text-center">

                              </Link>
                          </div>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/" className="side-bar-item">
                              <RiDashboardLine className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Dashboard</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Report" className="side-bar-item">
                              <AiOutlinePieChart className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Report</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Report" className="side-bar-item">
                              <AiOutlineShop className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Stock</span>
                          </NavLink>
                          <hr className="user-dropdown-divider my-2 p-0"/>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Brand" className="side-bar-item">
                              <BsBookmarkStar className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Brand</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Category" className="side-bar-item">
                              <BiCategory className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Category</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Product" className="side-bar-item">
                              <AiOutlineInbox className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Product</span>
                          </NavLink>
                          <hr className="user-dropdown-divider my-2 p-0"/>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Customer" className="side-bar-item">
                              <BsPeople className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Customer</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Supplier" className="side-bar-item">
                              <MdOutlineLocalShipping className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Supplier</span>
                          </NavLink>
                          <hr className="user-dropdown-divider my-2 p-0"/>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Purchase" className="side-bar-item">
                              <AiOutlineShopping className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Purchase</span>
                          </NavLink>
                          <hr className="user-dropdown-divider my-2 p-0"/>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/ExpenseType" className="side-bar-item">
                              <MdOutlineCategory className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Expense Type</span>
                          </NavLink>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Expense" className="side-bar-item">
                              <MdAttachMoney className="side-bar-item-icon" />
                              <span className="side-bar-item-caption">Expense</span>
                          </NavLink>
                          <hr className="user-dropdown-divider my-2 p-0"/>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Sell" className="side-bar-item">
                              <AiOutlineShoppingCart className="side-bar-item-icon" />
                              <span className="side-bar-item-caption ">Sell</span>
                          </NavLink>
                          <hr className="user-dropdown-divider my-2 p-0"/>
                          <NavLink exact={true} activeClassName="side-bar-item-active" to="/Return" className="side-bar-item">
                              <MdOutlineRefresh className="side-bar-item-icon" />
                              <span className="side-bar-item-caption ">Return</span>
                          </NavLink>

                      </div>
                      <div ref={(div) => {this.content = div;}} className="content">
                          {this.props.children}
                      </div>
                  </div>
              </Fragment>
          );
      }

}
export default MasterLayout;
