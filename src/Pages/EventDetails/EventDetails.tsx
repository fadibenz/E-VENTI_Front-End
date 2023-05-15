import { FC, useState, useEffect } from 'react';
import SY from './EventDetails.module.scss';
import { BsTicketPerforated, BsBookmark } from 'react-icons/bs';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { MdDone } from 'react-icons/md';
import { IoChevronBackOutline } from 'react-icons/io5';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';
import { EventCard, Navbar, Footer } from '../../Components/index';
import { getEventDetails, getEventList } from '../../Services/Event';
import {
  saveEvent,
  unsaveEvent,
  subscribe,
  Unsubscribe,
  subscribeList,
  getSavedList,
} from '../../Services/Subscriptions';
import {
  followUser,
  getFollowersList,
  unfollowUser,
} from '../../Services/Users';
import { getDate } from '../../Helpers';

import T from '/Assets/Images/EventDetails/mainPhoto.jpg';
import U from '/Assets/Images/EventDetails/yoal-desurmont-ddawgJ7eGDA-unsplash.jpg';
interface EventDetailsProps {
  config: any;
  token: any;
  user: any;
}

const EventDetails: FC<EventDetailsProps> = ({ config, token, user }) => {
  const { id } = useParams<{ id: any }>();
  const Thumbnails = [U, T, T];
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [exists, setExists] = useState({
    reserve: false,
    save: false,
    follow: false,
  });
  const [ended, setEnded] = useState(false);
  const [event, setEvent] = useState<any>(null);
  const [eventList, setEventList] = useState<any>(null);
  const [subscribed, setSubscribed] = useState<any>(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await getEventList(id, config);
        console.log(response);
        setEventList(response.slice(1, 4));
      } catch (error) {
        console.log(error);
      }
    };

    const getDetails = async () => {
      try {
        const response = await getEventDetails(id, config);
        console.log(response);
        setEvent(response);
        const eventdate = new Date(event?.dateAndTime);
        const currentDate = new Date();
        if (eventdate < currentDate) {
          setEnded(true);
        } else {
          setEnded(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
    getDetails();
  }, [user, id, exists.reserve]);

  useEffect(() => {
    const getSubscribed = async () => {
      try {
        const response = await subscribeList(id, config);
        if (response) {
          setSubscribed(response);
          setExists((prevExists) => ({
            ...prevExists,
            reserve: response?.some((m: any) => m.username === user?.username),
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getSaved = async () => {
      const response = await getSavedList(config);
      console.log('saved:', response);
      if (response) {
        setExists((prevExists) => ({
          ...prevExists,
          save: response?.some((m: any) => m.id === id),
        }));
      }
    };

    const getFollowers = async () => {
      const response = await getFollowersList(event?.organizerId, config);
      console.log(response);
      if (response) {
        setExists((prevExists) => ({
          ...prevExists,
          follow: response?.some((m: any) => m.username === user?.username),
        }));
      }
    };
    getSubscribed();
    getSaved();
    getFollowers();
  }, [id, user, event]);

  const handleReserve = async () => {
    if (!exists.reserve) {
      try {
        if (window.confirm('do you want to subscribe to this event ?')) {
          const response = await subscribe(id, config);
          if (response) {
            setExists({ ...exists, reserve: true });
          }
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        if (window.confirm('do you want to unsubscribe to this event ?')) {
          const response = await Unsubscribe(id, config);
          setExists({ ...exists, reserve: false });
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSave = async () => {
    if (!exists.save) {
      try {
        const response = await saveEvent(id, config);
        setExists({ ...exists, save: true });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await unsaveEvent(id, config);
        setExists({ ...exists, save: false });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleFollow = async () => {
    let id = event?.organizerid;

    if (!exists.follow) {
      try {
        const response = await followUser(id, config);
        setExists({ ...exists, follow: true });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await unfollowUser(id, config);
        setExists({ ...exists, follow: false });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const check = (index: number) => {
    if (index < 0) {
      return Thumbnails.length - 1;
    } else if (index >= Thumbnails.length) {
      return 0;
    } else return index;
  };

  return (
    <>
      <main>
        {/* <button className={SY.QuitBtn}>
        <IoChevronBackOutline className={SY.QuitBtn__icon} />
      </button> */}
        <section className={SY.mainPhoto}>
          <img src={event?.coverUrl} />
          <article className={SY.Thumbnails}>
            <button
              onClick={() => setIndex(check(index - 1))}
              className={SY.NavBtn}
            >
              <GrFormPrevious />
            </button>
            {Thumbnails.map((thumbnail, index) => {
              return (
                <button
                  className={SY.Thumbnails__Img}
                  onClick={() => setIndex(index)}
                >
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
              <span className={SY.category}>{event?.categoryName}</span>
              <div className={SY.Organizer__info}>
                <img src={event?.organizerProfilePicture} alt='' />
                <a onClick={() => navigate(`/Organizer/${event?.organizerId}`)}>
                  <p>
                    <span>1k</span> followers
                  </p>
                  <h4>{event?.organizerName}</h4>
                </a>
              </div>
              <div className={SY.btncnt}>
                <button className={SY.btn} onClick={handleFollow}>
                  {exists.follow ? (
                    <>
                      <MdDone /> followed
                    </>
                  ) : (
                    '+ follow'
                  )}
                </button>
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
              <h1>{event?.title}</h1>
              <h2>{event?.price}</h2>
            </div>
            <div className={SY.EventDetails}>
              <div className={SY.EventDetails__item}>
                <img src='/Assets/Icons/Map_light.svg' alt='' />
                <div className={SY.EventDetails__info}>
                  <h2>City</h2>
                  <p>Exact location</p>
                </div>
              </div>
              <div
                className={`${SY.EventDetails__item} ${SY.EventDetails__mod}`}
              >
                <img src='/Assets/Icons/Vector.svg' alt='' />
                <div className={SY.EventDetails__info}>
                  <h2>
                    {getDate(event?.dateAndTime).day}
                    {'  '} {getDate(event?.dateAndTime).month}
                  </h2>
                  <p>{getDate(event?.dateAndTime).time} UTC</p>
                </div>
              </div>
            </div>
            <article className={SY.Description}>
              <h1>Description</h1>
              <p>{event?.description}</p>
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
                  <span>
                    {event?.numberOfSubscribers} /{event?.maxAttendees}
                  </span>
                  {'  '}people are attending.
                </p>
              </div>
              <h4>view all</h4>
            </div>
            <div className={SY.EventCTA}>
              <button onClick={handleSave}>
                {exists.save ? (
                  <MdDone className={SY.btnIcon} />
                ) : (
                  <BsBookmark className={SY.btnIcon} />
                )}{' '}
                <div>Save</div>
              </button>
              <button
                className={SY.Reservebtn}
                onClick={handleReserve}
                disabled={ended}
              >
                {exists.reserve ? (
                  <MdDone className={SY.btnIcon} />
                ) : (
                  <BsTicketPerforated className={SY.btnIcon} />
                )}
                <div>Reserve</div>
              </button>
            </div>
          </section>
        </main>
        <section className={SY.Like}>
          <h1>You might also like:</h1>
          <section className={SY.Like__cnt}>
            {eventList?.map((event: any) => {
              return (
                <EventCard
                  img={event?.coverUrl}
                  location='Location'
                  date={event?.dateAndTime}
                  title={event?.title}
                  category={event?.categoryName}
                  className={SY.EventCard}
                  id={event?.id}
                  price='1000'
                />
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
};

export default EventDetails;
