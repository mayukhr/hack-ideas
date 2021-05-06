import React from 'react';
import VotesSection from './VotesSection';

const HackCard = (props) => {
    const { post: {idea, createdBy, createdAt, tags, votes} } = props;
    return (
            <div className="hack-card-wrapper">
                <div>
                    <VotesSection votes={votes}/>
                </div>
                <div>
                    {idea}
                    <div className="hack-card-createdBy">
                        {`${createdBy} created this on: ${new Date(createdAt).toLocaleString()}`}
                    </div>
                    {tags.map(tag => {
                        return <span className="hack-card-tag">{`#${tag}`}</span>
                    })}
                </div>
            </div>
    );
}

export default HackCard;