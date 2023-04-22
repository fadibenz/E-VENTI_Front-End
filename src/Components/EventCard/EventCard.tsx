import type { FC } from 'react';
import SY from './EventCard.module.scss'
import { BsTicketPerforated } from 'react-icons/bs';


interface EventCardProps {
  img: string;
  location: string;
  date: string;
  title: string,
  category: string;
  className?: string;
}

const EventCard: FC<EventCardProps> = ({img, location, date, title, category, className}) => {
    return (
      <article className={`${SY.Like__item} ${className} `}>
        <div className={SY.Like__Img}>
          <img
            src={img}
            alt=''
            className={SY.Like__Img_Main}
          />
          <img
            src='./Assets/Icons/Barcode.png'
            alt=''
            className={SY.Barcode}
          />
          <button>
            <img src='./Assets/Icons/pin_duotone.svg' alt='' />
          </button>
          <div className={SY.Like__info}>
            <h2>{category}</h2>
            <p>{title}</p>
          </div>
        </div>
        <div className={SY.LikeIcons}>
          <div className={SY.Icon__cnt}>
            <img src='./Assets/Icons/Map_light.svg' alt='' />
            <h4>{location}</h4>
          </div>
          <div className={SY.Icon__cnt}>
            <img src='./Assets/Icons/Vector.svg' alt='' />
            <h4>{date}</h4>
          </div>
          <div className={SY.Icon__cnt}>
            <BsTicketPerforated className={SY.Ticket} />
            <h4>Free</h4>
          </div>
        </div>
      </article>
    );
}

export default EventCard;
