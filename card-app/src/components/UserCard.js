import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const UserCard = (props) => {
    return (
        <Card>
        <CardImg src={props.user.avatar_url} />
         <CardBody>
         <CardTitle>{props.user.login}</CardTitle>
         <CardSubtitle>{props.user.location}</CardSubtitle>
        <CardText>{props.user.bio}</CardText>
        <CardText>
            {props.followers.map(followers => (
            <div
            key={followers.id}>
            {followers.login}
            {followers.bio}
            <div className="follower_pic">
                <CardImg src={followers.avatar_url} />
            </div>
               
           </div>))}
           </CardText>
        </CardBody>
       
           </Card>
    )   
        };

export default UserCard;