import { useState } from "react";
import styles from "./Product.module.css";
import { GiRoastChicken } from "react-icons/gi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const ProductPage = ({ chicken }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(chicken.prices[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...chicken, extras, price, quantity }));
  };

  const handleSize = (sizeIndex) => {
    const difference = chicken.prices[sizeIndex] - chicken.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.img}>
          <img src={chicken.img} alt="chicken" />
        </div>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>{chicken.title}</h3>
        <span className={styles.price}>&#8358;{price}</span>
        <p className={styles.desc}>{chicken.desc}</p>
        <h3 className={styles.choose}>Choose your size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <GiRoastChicken size={60} color="lime" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <GiRoastChicken size={100} color="lime" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choosePrepared}>Want it prepared ?</h3>
        <div className={styles.ingredient}>
          {chicken.extraOptions.map((o) => (
            <div className={styles.option} key={o._id}>
              <input
                type="checkbox"
                id={o.text}
                name={o.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, o)}
              />
              <label htmlFor="double">{o.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            type="number"
            defaultValue={1}
            className={styles.quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      chicken: res.data,
    },
  };
};
