import React from "react";

const VotesSection = ({votes}) => {
    return (
        <>
            <div class='arrow-up'></div>
            <div class='vote-count'>{votes.length}</div>
        </>
    );
}

export default VotesSection;