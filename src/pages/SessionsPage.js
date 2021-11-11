import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../utils/axios';
import { swalStyled } from '../components/SwalCongfig';
import Session from '../components/Session';
import Loader2 from '../components/Loader2';

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
    <div>
      <div>
        <h1>My training sessions</h1>
      </div>
      <div>
        {isloading ? (
          <Loader2 />
        ) : (
          sessions?.map((session) => (
            <div key={session._id} className="session-page__list-container">
              <Session data={session} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SessionsPage;
