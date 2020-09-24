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
          profilePic="https://scontent.fmia1-1.fna.fbcdn.net/v/t1.0-9/42394604_2095447923798887_4400486546449367040_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=ijJMRrBehScAX8sZf_o&_nc_ht=scontent.fmia1-1.fna&oh=3d931dad43dbd71182d4785211c42499&oe=5F92815F"
          message="This Works!!"
          timestamp="this is a timestamp"
          username="noormir1295"
          image="https://cdn.bmwblog.com/wp-content/uploads/2020/09/2021-bmw-m3-competition-race-track-11.jpg"
        />
        <Post
          profilePic="https://scontent.fmia1-1.fna.fbcdn.net/v/t1.0-9/42394604_2095447923798887_4400486546449367040_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=ijJMRrBehScAX8sZf_o&_nc_ht=scontent.fmia1-1.fna&oh=3d931dad43dbd71182d4785211c42499&oe=5F92815F"
          message="This Works!!"
          timestamp="this is a timestamp"
          username="noormir1295"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/giants/dmkcae520ksf1oba3p1o.jpg"
        />
        <Post
          profilePic="https://scontent.fmia1-1.fna.fbcdn.net/v/t1.0-9/42394604_2095447923798887_4400486546449367040_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=ijJMRrBehScAX8sZf_o&_nc_ht=scontent.fmia1-1.fna&oh=3d931dad43dbd71182d4785211c42499&oe=5F92815F"
          message="This Works!!"
          timestamp="this is a timestamp"
          username="noormir1295"
          image="https://cnet1.cbsistatic.com/img/chT5xA-aYgT0OyZojEImUmE41pY=/940x0/2019/11/07/09be7e4c-9801-4d03-b86d-248f501538ff/iphone-12-render-phone-arena-2.jpg"
        />
      </div>
    );
}

export default Feed
