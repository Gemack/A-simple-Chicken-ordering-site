import React from "react";
import Image from "next/image";
import styles from "./Cart.module.css";
import { reset } from "../../Redux/cartSlice";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const dispatch = useDispatch();
  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/order/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((p) => (
              <tr className={styles.tr} key={p._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image src={p.img} layout="fill" objectFit="cover" alt="" />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{p.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {p.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}</span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>&#8358;{p.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{p.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    &#8358;{p.price * p.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>&#8358;
            {cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>&#8358; {cart.total}
          </div>
          <button
            className={styles.button}
            onClick={() =>
              createOrder({
                total: cart.total,
                method: 1,
                customer: "John Doe",
                address: "louis street amat",
              })
            }
          >
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
