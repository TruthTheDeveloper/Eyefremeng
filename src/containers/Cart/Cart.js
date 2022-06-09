import EmptyCart from './components/EmptyCart';
import CartItem from './components/CartItem';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const Cart = () => {

    return(
        <section className="py-24">
            {/* <EmptyCart/> */}
            <CartItem/>
        </section>
    )
}

export default Cart;