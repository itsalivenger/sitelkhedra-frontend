
import css from './profile.css';
import ProfileInfo from "./components/profile info/profileInfo.js";
import Security from "./components/security/security.js";
import ManageItems from './components/manageItems/manageItems.js';

let Profile = ({ isAdmin })=> {
    return (
        <div>
            <div className="mappy container container-fluid">
                <div className='header'>
                    <h2>Profile</h2>
                    <ProfileInfo />
                </div>


                <div className='header'>
                    <h2>Security</h2>
                    <Security />
                </div>


                {isAdmin && <div className='header'>
                    <h2>ManageItems</h2>
                    <ManageItems/>
                </div>}
            </div>
        </div>
    );
}

export default Profile;