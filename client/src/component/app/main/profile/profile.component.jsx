import React from 'react';
import './profile.styles.scss';

//importing context
import CurrentUserContext from '../../../globalContext/currentUser.context';

//importing reusable components
import InfoCard from '../../../reusableComponents/infoCard/infoCard.component';
import SelectModel from '../../../reusableComponents/selectModels/selectModel.component';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            ownedModels: [],
            ownedAvatars: [],
        }
    }
    render() {
        return (
            <CurrentUserContext.Consumer>
                {
                    ({ currentUser, setCurrentUser }) => (
                        <div className="profile">
                            <InfoCard {...currentUser} />
                            <SelectModel />
                            selectAvatar
                            selectCar
                            selectWeapon
                        </div>
                    )
                }
            </CurrentUserContext.Consumer>
        );
    }
}

export default Profile;