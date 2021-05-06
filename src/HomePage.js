import React, { useState } from "react";
import data from "./initialData.json";
import HackCard from './HackCard';
import AddHackIdea from './AddHackIdea';

const HomePage = ({user}) => {
    const [ isEnabledAddHackForm, setIsEnabledAddHackForm ] = useState(false);
    const openAddHackIdea = () => {
        setIsEnabledAddHackForm(true);
    }
    
    return (
        <div className="App">
            <div className="wrapperLong">
                <img src="logo.svg" className="logo-mini" alt="logo" />
                
                { !isEnabledAddHackForm ? (
                    <>
                        <div className="container-top">
                            <span className="user-display">{`Hello, ${user}`}</span>
                            <button className="btn-primary right-float" type="button" onClick={openAddHackIdea}> Add a Hack Idea </button>
                        </div>
                
                        {data.posts.map( post => {
                            return <HackCard post={post} />
                        })}
                    </>
                ):
                <AddHackIdea user={user} />
            }
            </div>
        </div>
    );
}

export default HomePage;