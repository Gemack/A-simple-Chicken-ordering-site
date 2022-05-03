import React from "react";
import Link from "next/link";
import styles from "./ChickenCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ChickenCard = ({ chick }) => {
  return (
    <div className={styles.container}>
      <Link href={`/Products/${chick._id}`} passHref>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={chick.img}
              alt={chick.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h3 className={styles.title}>{chick.title}</h3>
                <span className={styles.price}> &#8358; {chick.prices[0]}</span>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.desc}
              >
                {chick.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default ChickenCard;
