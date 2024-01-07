import PropTypes from "prop-types";

function User({name,surname,isLogged,age,friends, address}) {
    if(!isLogged) { return <div>Not logged in</div>}
    return (
        <div>
            <h1>
                {isLogged ? `Welcome ${name} ${surname} (${age})` : "Please login"}
            </h1>
            {address.title} / {address.zip}

            {friends && friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLogged: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array.isRequired,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),
};

User.defaultProps = {
    isLogged: false,
};

export default User;