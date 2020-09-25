import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post";


function Feed() {
    return (
      <div className="feed">
        <StoryReel />
        <MessageSender />

        <Post
          profilePic="https://scontent.fmia1-1.fna.fbcdn.net/v/t31.0-8/1658195_10153836833980223_2012324332_o.jpg?_nc_cat=106&_nc_sid=174925&_nc_ohc=VeZXJ7btm90AX8D-Bfk&_nc_ht=scontent.fmia1-1.fna&oh=ae0b44f242d39d2acd4d66c91ce16544&oe=5F8C974A"
          message="The new BMW M3"
          timestamp="this is a timestamp"
          username="Zain Mir"
          image="https://cdn.bmwblog.com/wp-content/uploads/2020/09/2021-bmw-m3-competition-race-track-11.jpg"
        />
        <Post
          profilePic="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/18011127_10213065867625149_8773596060351402133_n.jpg?_nc_cat=104&_nc_sid=174925&_nc_ohc=5f9KcY-emEMAX9LdwOQ&_nc_ht=scontent.fmia1-2.fna&oh=b26498f4af71fcdad507b323c6fc4282&oe=5F8C8005"
          message="Devonte Freeman signs with the New York Giants"
          timestamp="this is a timestamp"
          username="Asham Amir"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/giants/dmkcae520ksf1oba3p1o.jpg"
        />
        <Post
          profilePic="https://scontent.fmia1-2.fna.fbcdn.net/v/t1.0-9/16730667_10208622764982184_552602404117941872_n.jpg?_nc_cat=104&_nc_sid=174925&_nc_ohc=O8deC8JWunsAX_UZaR5&_nc_ht=scontent.fmia1-2.fna&oh=2b084a893d5d29e402b2eb1cac2155d9&oe=5F8B9C37"
          message="The all new Iphone 12 Pro"
          timestamp="this is a timestamp"
          username="Omar Mirza"
          image="https://cnet1.cbsistatic.com/img/chT5xA-aYgT0OyZojEImUmE41pY=/940x0/2019/11/07/09be7e4c-9801-4d03-b86d-248f501538ff/iphone-12-render-phone-arena-2.jpg"
        />
      </div>
    );
}

export default Feed
