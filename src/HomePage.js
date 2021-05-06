import React, { useState } from "react";
import data from "./initialData.json";
import HackCard from './HackCard';
import AddHackIdea from './AddHackIdea';

const HomePage = ({user}) => {
    const [ isEnabledAddHackForm, setIsEnabledAddHackForm ] = useState(false);
    const openAddHackIdea = () => {
        setIsEnabledAddHackForm(true);
    }
    const posts = data.posts;
    
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
                
                        {posts.map( post => {
                            return <HackCard post={post} user={user} />
                        })}
                    </>
                ):
                <AddHackIdea user={user} posts={posts} setIsEnabledAddHackForm={setIsEnabledAddHackForm}/>
            }
            </div>
        </div>
    );
}

export default HomePage;