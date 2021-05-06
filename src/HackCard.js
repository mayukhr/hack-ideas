import React from "react";

const HackCard = (props) => {
    const { post: {idea, createdBy, createdAt, tags} } = props;
    return (
        <div className="hack-card-wrapper">
            {idea}
            <div className="hack-card-createdBy">
                {`${createdBy} created this on: ${createdAt}`}
            </div>
            {tags.map(tag => {
                return <span className="hack-card-tag">{`#${tag}`}</span>
            })}
        </div>
    );
}

export default HackCard;