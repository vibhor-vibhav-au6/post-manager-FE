import React from 'react';
import { connect} from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount () {
        this.props.fetchUser(this.props.userId)
    }

    render () {
        const {user} = this.props;
        console.log(user)
        if(!user) {
            return null;
        }
        return <div className="header">Author : {user.name}</div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {user:state.users.find(user => user._id === ownProps.userId)}
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);
