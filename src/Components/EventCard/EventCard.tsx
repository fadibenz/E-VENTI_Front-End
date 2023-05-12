import type { FC } from 'react';
import SY from './EventCard.module.scss';
import { BsTicketPerforated } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';
import { getDate } from '../../Helpers';
interface EventCardProps {
  img: string;
  location: string;
  date: string;
  title: string;
  category: string;
  className?: string;
  id: string;
  price : string ;
}

const EventCard: FC<EventCardProps> = ({
  img,
  location,
  date,
  title,
  category,
  className,
  id,
  price}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/EventDetails/${id}`);
  };
  return (
    <article className={`${SY.Like__item} ${className} `}>
      <Link
        to={`/EventDetails/${id}`}
        className={`${SY.Like__item} ${className} `}
      >
        <div className={SY.Like__Img}>
          <img src={img} alt='' className={SY.Like__Img_Main} />
          <img
            src='/public/Assets/Icons/Barcode.png'
            alt=''
            className={SY.Barcode}
          />
          {/* <button onClick={() => setSave({...save, [index]: !save[index] })}>
          {save[index] ? (
            <MdDone className={SY.done} />
          ) : (
            <img src='./Assets/Icons/pin_duotone.svg' alt='' />
          )}
        </button> */}
          <div className={SY.Like__info}>
            <h2>{category}</h2>
            <p>{title}</p>
          </div>
        </div>
        <div className={SY.LikeIcons}>
          <div className={SY.Icon__cnt}>
            <img src='/public/Assets/Icons/Map_light.svg' alt='' />
            <h4>{location}</h4>
          </div>
          <div className={SY.Icon__cnt}>
            <img src='/public/Assets/Icons/Vector.svg' alt='' />
            <h4>
              {getDate(date).day} {'  '} {getDate(date).month}
            </h4>
          </div>
          <div className={SY.Icon__cnt}>
            <BsTicketPerforated className={SY.Ticket} />
            <h4>{price}</h4>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default EventCard;
