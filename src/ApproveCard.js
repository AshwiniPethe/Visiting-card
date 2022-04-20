import React from 'react';

const ApproveCard = (props)=>{
    return (
    <div class="ui cards">
        <div class="card">
            <div class="content">{props.children}</div>
            <div class="ui two buttons">
                <div class="ui basic green button">{props.button1}</div>
                <div class="ui basic red button">{props.button2}</div>
            </div>
        </div>
    </div>
);
}

ApproveCard.defaultProps = {
    button1:'Approve',
    button2:'Decline'
}
export default ApproveCard;