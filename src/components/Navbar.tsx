import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "../assets/shopping-cart-svgrepo-com.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            {" "}
            Home{" "}
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{
              width: "3rem",
              height: "3rem",
              background: "none",
              cursor: "pointer",
              padding: 5,
              position: "relative",
            }}
            className="rounded-circle"
          >
            <img
              src={ShoppingCartIcon}
              alt="Shopping Cart"
              style={{ width: "2rem", height: "2rem" }}
            />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                width: "1.3rem",
                height: "1.3rem",
                position: "absolute",
                top: -5,
                right: -10,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}
