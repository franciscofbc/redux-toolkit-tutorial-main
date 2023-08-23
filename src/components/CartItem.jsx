import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, toggle } from '../features/cart/cartSlice';

const CartItem = ({ amount, id, img, price, title }) => {
  const dispatch = useDispatch()

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button type="button" className="remove-btn"
          onClick={() => dispatch(removeItem({ id }))}>
          remove
        </button>
      </div>
      <div>
        <button type="button" className="amount-btn"
          onClick={() => dispatch(toggle({ id, type: 'increase' }))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button type="button" className="amount-btn"
          onClick={() => dispatch(amount > 1
            ? toggle({ id, type: 'decrease' })
            : removeItem({ id }))}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
