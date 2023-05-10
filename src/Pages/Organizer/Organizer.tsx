import { FC, useEffect, useState } from 'react';
import SY from './Organizer.module.scss';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { MdDone } from 'react-icons/md';
import { EventCard, Footer, Navbar } from '../../Components/index';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { useParams} from 'react-router-dom';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import {
  getUserDetails,
  getFollowersList,
  followUser,
  unfollowUser,
} from '../../Services/Users';
import { organizedEventList } from '../../Services/Subscriptions';
interface OrganizerProps {
  config: any;
  user: any;
}

const Organizer: FC<OrganizerProps> = ({ config, user }) => {
  const { id } = useParams<{ id: any }>();
  const [organizer, setOrganizer] = useState<any>(null);
  const [upEvents, setUpEvents] = useState<any>({});
  const [pastEvents, setPastEvents] = useState<any>({});
  const [follow, setFollow] = useState(false);

  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const firstItemIndex = index * 2;
  const secondItemIndex = index * 2 + 1;

  const firstItemIndex2 = index2 * 2;
  const secondItemIndex2 = index2 * 2 + 1;
  const handleNextClick = (
    events: any,
    setindex: any,
    index: any,
    ItemIndex: any
  ) => {
    if (ItemIndex < events?.length) {
      setindex(index + 1);
    }
  };

  const handlePrevClick = (index: any, setindex: any) => {
    if (index > 0) {
      setindex(index - 1);
    }
  };

  useEffect(() => {
    const getOrganizer = async () => {
      try {
        const response = await getUserDetails(id, config);
        setOrganizer(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getOrganizer();
    const getEvents = async () => {
      try {
        const response = await organizedEventList(id, config);
        const f = response.filter((m: any) => m.status === 1);
        setUpEvents(f);
        const g = response.filter((m: any) => m.status === 0);
        setPastEvents(g);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();

    const getFollowers = async () => {
      const response = await getFollowersList(id, config);
      console.log('Follow', response);
      setFollow(response?.some((m: any) => m.username === user?.username));
    };
    getFollowers();
  }, [user, id]);

  const handleFollow = async () => {
    if (!follow) {
      try {
        const response = await followUser(id, config);
        setFollow(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await unfollowUser(id, config);
        setFollow(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {/* <button className={SY.QuitBtn}>
        <IoChevronBackOutline className={SY.QuitBtn__icon} />
      </button> */}
      <section className={SY.Cover}>
        <img src='/public/Assets/Images/Organizer/nabajyoti-ray-0gZy38p9XJE-unsplash.jpg' />
      </section>
      <main className={SY.Main}>
        <section className={SY.Description}>
          <div className={SY.Description__img}>
            <img src={organizer?.profilePictureUrl}></img>
          </div>
          <div className={SY.Description__CTA}>
            <div>
              <h1>{organizer?.firstName}</h1>
              <p>{organizer?.userName}</p>
            </div>
            <div className={SY.Description__CTACnt}>
              <div>
                <button className={SY.Description__msg}>
                  <p>message</p>
                  <HiOutlineEnvelope />
                </button>
              </div>
              <div>
                <button onClick={handleFollow}>
                  {follow ? (
                    <>
                      <MdDone /> followed
                    </>
                  ) : (
                    '+ follow'
                  )}
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
                img={upEvents[firstItemIndex]?.coverUrl}
                location='Location'
                date={upEvents[firstItemIndex]?.dateAndTime}
                title={upEvents[firstItemIndex]?.title}
                category={upEvents[firstItemIndex]?.categoryName}
                id={upEvents[firstItemIndex]?.id}
              />
              {secondItemIndex < upEvents.length ? (
                <EventCard
                  img={upEvents[secondItemIndex]?.coverUrl}
                  location='Location'
                  date={upEvents[secondItemIndex]?.dateAndTime}
                  title={upEvents[secondItemIndex]?.title}
                  category={upEvents[secondItemIndex]?.categoryName}
                  id={upEvents[secondItemIndex]?.id}
                />
              ) : null}
            </div>
            <div className={SY.Events__CTA}>
              <button
                onClick={() => handlePrevClick(index, setIndex)}
                disabled={index === 0}
              >
                <IoChevronBackOutline />
                Previous
              </button>
              <button
                onClick={() =>
                  handleNextClick(upEvents, setIndex, index, secondItemIndex)
                }
                disabled={secondItemIndex >= upEvents?.length}
              >
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
                img={pastEvents[firstItemIndex2]?.coverUrl}
                location='Location'
                date={pastEvents[firstItemIndex2]?.dateAndTime}
                title={pastEvents[firstItemIndex2]?.title}
                category={pastEvents[firstItemIndex2]?.categoryName}
                id={pastEvents[firstItemIndex2]?.id}
              />
              {secondItemIndex2 < pastEvents.length ? (
                <EventCard
                  img={pastEvents[secondItemIndex2]?.coverUrl}
                  location='Location'
                  date={pastEvents[secondItemIndex2]?.dateAndTime}
                  title={pastEvents[secondItemIndex2]?.title}
                  category={pastEvents[secondItemIndex2]?.categoryName}
                  id={pastEvents[secondItemIndex2]?.id}
                />
              ) : null}
            </div>
            <div className={SY.Events__CTA}>
              <button
                onClick={() => handlePrevClick(index2, setIndex2)}
                disabled={index2 === 0}
              >
                <IoChevronBackOutline />
                Previous
              </button>
              <button
                onClick={() =>
                  handleNextClick(
                    pastEvents,
                    setIndex2,
                    index2,
                    secondItemIndex2
                  )
                }
                disabled={secondItemIndex2 >= pastEvents?.length}
              >
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
