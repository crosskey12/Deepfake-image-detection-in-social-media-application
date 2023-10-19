import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ProfileCard } from '../components';
import { FriendsCard } from '../components';
import { TopBar } from '../components';
import { PostCard } from '../components';
import { Loading } from '../components';
const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {id}=useParams();
  const [loading, setLoading] = useState(false);
  // const {posts}=useSelector((state)=>state.posts)
  const [userInfo, setUserInfo] = useState(user);
  const handleDelete = () => {};
  const handleLikePost = () => {};

  return<>
  <div className='w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor lg:rounded-lg h-screen overflow-hidden'>
    <TopBar />
    <div className='w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full'>
    <div className='hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto'>
          <ProfileCard user={userInfo} />
          <div className='block lg:hidden'>
          <FriendsCard friends={userInfo?.friends} />
          </div>
          </div>
          <div className='flex-1 h-full px-4 flex flex-col gap-6 overflow-y-auto'>
          { loading ? (<Loading />) : posts?.length > 0 ? (
            posts?.map((post) => (
              <PostCard key={post?._id} post={post}
              user={user}
              deletePost={handleDelete}
              likePost={handleLikePost}
              />
            ))
          ):(
            <div className='flex w-full h-full items-center justify-center'>
              <p className='text-lg text-ascent-2'>No Post Available</p>
            </div>
          )}
          </div>
          <div className='hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-y-auto'>
          <FriendsCard friends={userInfo?.friends} />
          </div>

      </div>
    </div>
  </>
}

export default Profile;
