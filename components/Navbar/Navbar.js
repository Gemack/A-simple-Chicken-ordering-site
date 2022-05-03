import { AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";
import { GiRoastChicken } from "react-icons/gi";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.call}>
          <AiOutlinePhone
            size={70}
            style={{ background: "white", borderRadius: "50%", padding: 10 }}
          />
        </div>
        <Link href="/" passHref>
          <div className={styles.text}>+234940193581</div>
        </Link>
        <Link href="/" passHref>
          <div className={styles.text}>PLACE AN ORDER</div>
        </Link>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <li className={styles.listItem}>Events</li>
          <GiRoastChicken size={90} color="white" />
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <AiOutlineShoppingCart size={50} color="white" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
