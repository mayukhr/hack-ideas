import React from "react";

const HackCard = (props) => {
    const { post:{idea, createdBy, createdAt} } = props;
    return (
        <div className="hack-card-wrapper">
            {idea}
            <div className="hack-card-createdBy">
                {`${createdBy} created this on: ${createdAt}`}
            </div>
        </div>
    );
}

export default HackCard;