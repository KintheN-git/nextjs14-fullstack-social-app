import { getPosts } from "@/actions/post.action";
import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import React from "react";
import ProfilePageClient from "./ProfilePageClient";

export const generateMetadata = async ({
  params,
}: {
  params: { username: string };
}) => {
  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    title: `${user.name} (@${user.username})`,
    describtion: user.bio || `Check out ${user.name}'s profile.`,
  };
};
const ProfilePageServer = async ({
  params,
}: {
  params: { username: string };
}) => {
  const { username } = params;
  const user = await getProfileByUsername(username);

  if (!user) return notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
};

export default ProfilePageServer;
