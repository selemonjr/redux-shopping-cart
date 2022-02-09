import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
const Navigation = () => {
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    return (
        <>
        <header>
            <nav>
                <div>
                   <Link to="/"><h2 className="nav_logo">Redux Store</h2></Link>
                </div>
                <div>
                    <p>Item(s) in Cart : {cartTotalQuantity}</p>
                </div>
                <div>
                    <Link to="/cart"><h4><i class='bx bx-shopping-bag'></i></h4></Link>
                </div>
            </nav>
        </header>
        </>
    )
}
export default Navigation