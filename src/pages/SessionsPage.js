import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../utils/axios';
import { swalStyled } from '../components/SwalCongfig';
import Session from '../components/Session';
import Loader2 from '../components/Loader2';
import '../assets/styles/pages/Sessions.scss';

function SessionsPage() {
  const user_id = useSelector((state) => state.currentUser._id);
  const [sessions, setSessions] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSessions(user_id) {
      try {
        const response = await axios.get(`/sessions/${user_id}`);
        setSessions(response.data.sessions);
        setIsLoading(false);
      } catch (err) {
        swalStyled.fire({
          icon: 'error',
          title: 'Oops... Please try again',
          text: err.message,
        });
      }
    }
    getSessions(user_id);
  }, [user_id]);

  return (
    <div className="sessions__page-container">
      <div className="sessions__title-container">
        <h1>My training sessions</h1>
      </div>
      <div className="sessions__sessions-container">
        {isloading ? (
          <Loader2 />
        ) : sessions.length === 0 ? (
          <h2 className="sessions__title-no-sessions">
            You have no sessions yet, start practicing
          </h2>
        ) : (
          sessions?.map((session) => <Session data={session} key={session._id} />)
        )}
      </div>
    </div>
  );
}

export default SessionsPage;
