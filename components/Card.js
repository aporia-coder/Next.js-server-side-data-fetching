import Image from "next/image";
import Link from "next/link";
import cardStyles from "../styles/Card.module.scss";

const Card = ({ galaxy }) => {
  return (
    <Link href="/pictures/[id]" as={`/pictures/${galaxy.date}`}>
      <div className={cardStyles.card}>
        <h2>{galaxy.title}</h2>
        <p>{galaxy.explanation}</p>
        <Image src={galaxy.url} width={500} height={500} />
      </div>
    </Link>
  );
};

export default Card;
