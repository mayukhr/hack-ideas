import React, {useState} from "react";

const VotesSection = ({votes, user}) => {
    const [voteCount, setVoteCount] = useState(votes.length);
    const addVote = () => {
        if(!votes.includes(user)) {
            votes.push(user);
            setVoteCount(votes.length);
        }
    }
    
    return (
        <>
            <div class='arrow-up' onClick={addVote}></div>
            <div class='vote-count'>{voteCount}</div>
        </>
    );
}

export default VotesSection;