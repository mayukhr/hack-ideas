import React from "react";
import data from "./initialData.json";
import HackCard from './HackCard';

const HomePage = (props) => {
    return (
        <div className="App">
            <div className="wrapperLong">
                <img src="logo.svg" className="logo-mini" alt="logo" />
                <div className="container-top">
                    <span className="user-display">{`Hello, ${props.user}`}</span>
                    <button className="btn-primary right-float" type="button"> Add a Hack Idea </button>
                </div>
                {/* {data.posts[0].idea} */}
                {data.posts.map( post => {
                    return <HackCard post={post} />
                })}
            </div>
        </div>
    );
}

export default HomePage;