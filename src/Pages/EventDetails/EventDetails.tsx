import { FC, useState } from 'react';
import SY from './EventDetails.module.scss';
import { BsTicketPerforated, BsBookmark } from 'react-icons/bs';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { IoChevronBackOutline } from 'react-icons/io5';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { EventCard, Navbar } from '../../Components/index';
import T from '/Assets/Images/EventDetails/mainPhoto.jpg';
import U from '/Assets/Images/EventDetails/yoal-desurmont-ddawgJ7eGDA-unsplash.jpg';
interface EventDetailsProps {}

const EventDetails: FC<EventDetailsProps> = () => {
const Thumbnails = [U, T, T];
const [index, setIndex] = useState(0);

const check = (index: number) => {
  if (index < 0){
    return Thumbnails.length - 1; 
  }
  else if (index >= Thumbnails.length){
    return 0;
  }
  else return index;
}  

return (
  <>
    <Navbar />
    <main>
      {/* <button className={SY.QuitBtn}>
        <IoChevronBackOutline className={SY.QuitBtn__icon} />
      </button> */}
      <section className={SY.mainPhoto}>
        <img src={Thumbnails[index]} />
        <article className={SY.Thumbnails}>
          <button
            onClick={() => setIndex(check(index - 1))}
            className={SY.NavBtn}
          >
            <GrFormPrevious />
          </button>
          {Thumbnails.map((thumbnail, index) => {
            return (
              <button className={SY.Thumbnails__Img} onClick={() => setIndex(index)}>
                <img src={thumbnail} alt='' />
              </button>
            );
          })}
          <button
            onClick={() => setIndex(check(index + 1))}
            className={SY.NavBtn}
          >
            <GrFormNext />
          </button>
        </article>
      </section>
      <main className={SY.EventMain}>
        <section className={SY.Organizer__cnt}>
          <div className={SY.Organizer}>
            <div className={SY.Organizer__info}>
              <img src='/Assets/Icons/organizer icon.png' alt='' />
              <div>
                <p>
                  <span>1k</span> followers
                </p>
                <h4>Alphabit club</h4>
              </div>
            </div>
            <div className={SY.btncnt}>
              <button className={SY.btn}>+ follow</button>
            </div>
          </div>
          <div className={SY.Share}>
            <p>Share with Friends:</p>
            <div className={SY.Share__Icons}>
              <a className={SY.Socialmedia}>
                <FiFacebook />
              </a>
              <a className={SY.Socialmedia}>
                <FiInstagram />
              </a>
              <a className={SY.Socialmedia}>
                <FiLinkedin />
              </a>
              <a>
                <FiTwitter />
              </a>
            </div>
          </div>
        </section>
        <section className={SY.EventForm}>
          <div className={SY.MainTitle}>
            <h1>Constantine</h1>
            <h2>Free</h2>
          </div>
          <div className={SY.EventDetails}>
            <div className={SY.EventDetails__item}>
              <img src='/Assets/Icons/Map_light.svg' alt='' />
              <div className={SY.EventDetails__info}>
                <h2>City</h2>
                <p>Exact location</p>
              </div>
            </div>
            <div className={`${SY.EventDetails__item} ${SY.EventDetails__mod}`}>
              <img src='/Assets/Icons/Vector.svg' alt='' />
              <div className={SY.EventDetails__info}>
                <h2>16 June</h2>
                <p>18:00 Pm</p>
              </div>
            </div>
          </div>
          <article className={SY.Description}>
            <h1>Description</h1>
            <p>
              This event is all about Constantine. I’m too lazy to think of a
              description right now so I’m just going to write down a bunch of
              words to fill in the space. This is almost done and I’m so proud
              of the way it turned out!
            </p>
          </article>
          <div className={SY.Attendance}>
            <div className={SY.Attendee__block}>
              <div className={SY.Attendee}>
                <div className={SY.Attendance__Photo}>
                  <img src='/Assets/Images/EventDetails/Photo1.jpg' alt='' />
                  <img src='/Assets/Images/EventDetails/Photo2.jpg' alt='' />
                  <img src='/Assets/Images/EventDetails/Photo3.jpg' alt='' />
                </div>
              </div>
              <p>
                <span>5/10</span> people are attending.
              </p>
            </div>
            <h4>view all</h4>
          </div>
          <div className={SY.EventCTA}>
            <button>
              <BsBookmark className={SY.btnIcon} />
              <div>Save</div>
            </button>
            <button className={SY.Reservebtn}>
              <BsTicketPerforated className={SY.btnIcon} />
              <div>Reserve</div>
            </button>
          </div>
        </section>
      </main>
      <section className={SY.Like}>
        <h1>You might also like:</h1>
        <section className={SY.Like__cnt}>
          <EventCard
            img='./Assets/Images/EventDetails/mainPhoto.jpg'
            location='Location'
            date='16 june'
            title='Lorem ipsum'
            category='Business'
          />
          <EventCard
            img='./Assets/Images/EventDetails/mainPhoto.jpg'
            location='Location'
            date='16 june'
            title='Lorem ipsum'
            category='Business'
          />
          <EventCard
            img='./Assets/Images/EventDetails/mainPhoto.jpg'
            location='Location'
            date='16 june'
            title='Lorem ipsum'
            category='Business'
          />
        </section>
      </section>
    </main>
  </>
);
};

export default EventDetails;
