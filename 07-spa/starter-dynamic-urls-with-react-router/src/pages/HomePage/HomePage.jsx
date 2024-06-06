import './HomePage.scss';

const HomePage = ({username}) => {

    return (
        <>
        <h1>Home Page</h1>
        <p>Hi, <b>{username}</b>. Welcome.</p>
        </>
    )
}

export default HomePage
