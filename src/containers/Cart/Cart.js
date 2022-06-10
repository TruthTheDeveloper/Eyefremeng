import EmptyCart from './components/EmptyCart';
import CartItem from './components/CartItem';
import { useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Cart = () => {

    const {initialState, setInitialState} = useContext(AuthContext)

    return(
        <section className="py-24">
            {/* <EmptyCart/> */}
            {initialState.items.length === 0 ? <EmptyCart/>: <CartItem/>}
        </section>
    )
}

export default Cart;