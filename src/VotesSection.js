import React, {useState} from "react";

const VotesSection = ({votes, user}) => {
    const votedArrowClass = 'arrow-up-voted';
    const votedCountClass = 'vote-count-voted';
    const [voteCount, setVoteCount] = useState(votes.length);
    const isVotedAlready = votes.includes(user);
    const [isVotedArrowClass, setIsVotedArrowClass] = useState(isVotedAlready ? votedArrowClass : '');
    const [isVotedCountClass, setIsVotedCountClass] = useState(isVotedAlready ? votedCountClass : '');
    

    const addVote = () => {
        if(!votes.includes(user)) {
            votes.push(user);
            setIsVotedArrowClass(votedArrowClass);
            setIsVotedCountClass(votedCountClass);
        } else {
            votes.pop(user);
            setIsVotedArrowClass('');
            setIsVotedCountClass('');
        }
        setVoteCount(votes.length);
    }

    return (
        <>
            <div className={`arrow-up ${isVotedArrowClass}`} onClick={addVote}></div>
            <div className={`vote-count ${isVotedCountClass}`}>{voteCount}</div>
        </>
    );
}

export default VotesSection;