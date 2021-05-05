import React from "react";
import data from "./initialData.json";
import HackCard from './HackCard';

const HomePage = (props) => {
    return (
        <div className="App">
            <div className="wrapperLong">
                <img src="logo.svg" className="logo-mini" alt="logo" />
                {/* {data.posts[0].idea} */}
                {data.posts.map( post => {
                    return <HackCard post={post} />
                })}
            </div>
        </div>
    );
}

export default HomePage;