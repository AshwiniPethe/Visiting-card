import React from "react";
import Faker from "faker";

const Content = (props) => {
  return (
    <div class="ui cards">
      <div class="card" style={{ backgroundImage: 'url("visitingcard.png")' }}>
        <div style={{padding:'8px'}}>
          <div className="comment">
            <a href="/" className="avatar">
              <img alt="avatar" src={Faker.image.image()} />
            </a>
            <div className="content">
              <a href="/" style={{ color: "black" }} className="author">
                {props.name}
              </a>
              <p style={{ color: "brown" }}>{props.occupation}</p>
              <div>
                <i class="phone volume icon" />
                {props.contact}
              </div>
              <br />
              <div>
                <i class="envelope icon" />
                {props.email}
              </div>
              <br />
              <div>
                <i class="home icon" />
                {props.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
