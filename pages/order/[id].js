import React from "react";
import styles from "./order.module.css";
import { CgFileDocument } from "react-icons/cg";
import { GiCampCookingPot } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import axios from "axios";

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>{order._id}</span>
              </td>
              <td>
                <span className={styles.name}>{order.customer}</span>
              </td>
              <td>
                <span className={styles.address}>Abc st. 1234</span>
              </td>
              <td>
                <span className={styles.total}>&#8358;{order.total}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <CgFileDocument size={50} />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <AiOutlineCheck size={50} color="lime" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <GiCampCookingPot size={50} />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <AiOutlineCheck size={50} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <MdDeliveryDining size={50} />
            <span>Delivery</span>
            <div className={styles.checkedIcon}>
              <AiOutlineCheck size={50} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>&#8358;
            {order.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>&#8358; 0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>&#8358;{order.total}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
