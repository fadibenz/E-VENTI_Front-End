import type { FC } from 'react';
import SY from './Organizer.module.scss';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { EventCard } from '../../Components/index';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
interface OrganizerProps {}

const Organizer: FC<OrganizerProps> = () => {
  return (
    <>
      <button className={SY.QuitBtn}>
        <IoChevronBackOutline className={SY.QuitBtn__icon} />
      </button>
      <section className={SY.Cover}>
        <img src='./Assets/Images/EventDetails/yoal-desurmont-ddawgJ7eGDA-unsplash.jpg' />
      </section>
      <main className={SY.Main}>
        <section className={SY.Description}>
          <div className={SY.Description__img}>
            <img src='./Assets/Images/Organizer/lost.jpg'></img>
          </div>
          <div className={SY.Description__CTA}>
            <div>
              <h1>Organizer</h1>
              <p>Location</p>
            </div>
            <div className={SY.Description__CTACnt}>
              <div>
                <button className={SY.Description__msg}>
                  <p>message</p>
                  <HiOutlineEnvelope />
                </button>
              </div>
              <div>
                <button>
                  <p>+ follow</p>
                  <span>1K</span>
                </button>
              </div>
            </div>
          </div>
          <div className={SY.Description__Icons}>
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
          <article className={SY.Description__About}>
            <h2>About</h2>
            <p>
              I’m tired of coming up with bios for people. I can’t even think of
              a bio for me, let alone others haha. I’m really hungry right now.
              All I could think about is food. I woke up at 4 p.m today...that’s
              something. What else? I can’t believe how long this is taking us
              haha...I’m not really that hungry. I’m just really excited to eat!
              I want to have fun but school keeps on getting in the way.
            </p>
          </article>
          <hr />
        </section>
        <section className={SY.Events}>
          <article>
            <div className={SY.Events__Title}>
              <h2>Upcoming events :</h2>
            </div>
            <div className={SY.Events__Cnt}>
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
            </div>
            <div className={SY.Events__CTA}>
              <button>
                <IoChevronBackOutline />
                Previous
              </button>
              <button>
                Next
                <IoChevronForwardOutline />
              </button>
            </div>
          </article>
          <article>
            <div className={SY.Events__Title}>
              <h2>Past events :</h2>
            </div>
            <div className={SY.Events__Cnt}>
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
            </div>
            <div className={SY.Events__CTA}>
              <button>
                <IoChevronBackOutline />
                Previous
              </button>
              <button>
                Next
                <IoChevronForwardOutline />
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Organizer;
