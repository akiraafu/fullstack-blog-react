import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const SinglePost = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="blogImage"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          sequi.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          tempora aliquid magnam quaerat quam accusantium, vel similique maiores
          accusamus eveniet soluta eaque ipsam unde quae sint magni ab animi.
          Impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi tempora aliquid magnam quaerat quam accusantium, vel
          similique maiores accusamus eveniet soluta eaque ipsam unde quae sint
          magni ab animi. <br />
          Impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi tempora aliquid magnam quaerat quam accusantium, vel
          similique maiores accusamus eveniet soluta eaque ipsam unde quae sint
          magni ab animi. Impedit! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi tempora aliquid magnam quaerat quam
          accusantium, vel similique maiores accusamus eveniet soluta eaque
          ipsam unde quae sint magni ab animi. Impedit!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          tempora aliquid magnam quaerat quam accusantium, vel similique maiores
          accusamus eveniet soluta eaque ipsam unde quae sint magni ab animi.
          Impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi tempora aliquid magnam quaerat quam accusantium, vel
          similique maiores accusamus eveniet soluta eaque ipsam unde quae sint
          magni ab animi. <br />
          Impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi tempora aliquid magnam quaerat quam accusantium, vel
          similique maiores accusamus eveniet soluta eaque ipsam unde quae sint
          magni ab animi. Impedit!
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default SinglePost;
