import React, { useState } from "react";
import { FaShare } from "react-icons/fa";
import { TiThumbsUp } from "react-icons/ti";
import { AiOutlineMessage } from "react-icons/ai";
import "./home.css";

const Home = () => {
  const [like, setLike] = useState(85);
  const [likeStyle, setLikeStyle] = useState("");

  // Handle Like
  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <section className="home">
      <div className="container">
        <div className="home_wrapper">
          <div className="hero_post">
            <div className="hero_img">
              <img src="./image-1.jpeg" alt="MainPost Image" />
            </div>
            <h1>How to Improve Your English Daily</h1>
            <p className="hero_details">
              It’s just so incredible how time flies when you enjoy what you do!
              I’m more than amazed to say: I’ve completed a whole year of
              publishing series How to Improve Your English Daily!
            </p>
            <p className="author">
              By <span>Denisse Landau</span>
            </p>
            <div className="reaction">
              <div className="icon_info">
                <div className="react_icon">
                  <TiThumbsUp onClick={handleLike} />
                </div>
                <p className={likeStyle}>{like}</p>
              </div>
              <div className="icon_info">
                <div className="react_icon">
                  <FaShare />
                </div>
                <p>65</p>
              </div>
              <div className="icon_info">
                <div className="react_icon">
                  <AiOutlineMessage />
                </div>
                <p>125</p>
              </div>
            </div>
          </div>
          <div className="two_post">
            <div className="post-1">
              <div className="post1_img">
                <img src="./post-2.jpg" alt="" />
              </div>
              <h3>Apps I Use And Why You Should Too</h3>
              <p>
                Let’s skip past the usual suspects like YouTube, WhatsApp and
                Instagram. I want to share with you some less familiar apps
                .....
              </p>
            </div>
            <div className="post-2">
              <div className="post1_img">
                <img src="./post-1.jpg" alt="" />
              </div>
              <h3>Apps I Use And Why You Should Too</h3>
              <p>
                Let’s skip past the usual suspects like YouTube, WhatsApp and
                Instagram. I want to share with you some less familiar apps
                .....
              </p>
            </div>
          </div>
          <div className="recent_post">
            <h3>Recent Post</h3>
            <div className="recent">
              <div className="post_img">
                <img src="./post-3.jpg" alt="" />
              </div>
              <div className="post_info">
                <h4>
                  JavaScript Secrets Revealed: 21 Tricks Every Coder Should
                  Master!
                </h4>
                <p>Nov 2</p>
              </div>
            </div>
            <div className="recent">
              <div className="post_img">
                <img src="./post-4.jpeg" alt="" />
              </div>
              <div className="post_info">
                <h4>5 Unique Final Year Machine Learning Project Ideas</h4>
                <p>Oct 5</p>
              </div>
            </div>
            <div className="recent">
              <div className="post_img">
                <img src="./post-5.jpeg" alt="" />
              </div>
              <div className="post_info">
                <h4>
                  98 Creative Campaigns That Caught Our Eye in the First Half of
                  2023
                </h4>
                <p>Jul 7</p>
              </div>
            </div>
            <div className="recent">
              <div className="post_img">
                <img src="./post-6.jpeg" alt="" />
              </div>
              <div className="post_info">
                <h4>How to win in Marketing With a Small Budget</h4>
                <p>Jun 22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
