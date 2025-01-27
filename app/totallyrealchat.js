"use client"
import React from 'react'
import { ChatCard, Message } from "@/components/ui/chat-card";
import { useState } from "react";
import pic1 from "./assets/pfp/1.png"
import pic2 from "./assets/pfp/2.png"
import pic3 from "./assets/pfp/3.png"
import pic4 from "./assets/pfp/4.png"
import pic5 from "./assets/pfp/5.png"

const CURRENT_USER = {
    name: "You",
    avatar: pic5
  };

  const INITIAL_MESSAGES = [
    {
      id: "1",
      content: "WOW Guys HRITWIK is SO SMART HE SHOULD TOTALLY Be in the Devsoc TEAM! 🎨",
      sender: {
        name: "Alex Chen",
        avatar: pic1,
        isOnline: true,
      },
      timestamp: "10:24 AM",
      status: "read",
      reactions: [
        { emoji: "👍", count: 2, reacted: true },
        { emoji: "🎉", count: 1, reacted: false },
      ],
    },
    {
      id: "2",
      content: "I agree his programming skills are fire 🔥",
      sender: {
        name: "Sarah Kim",
        avatar: pic2,
        isOnline: true,
      },
      timestamp: "10:26 AM",
      status: "delivered",
    },
    {
      id: "3",
      content: "Yeah, Hritwik's projects go crazyyy 🚀",
      sender: {
        name: "Michael Lee",
        avatar: pic3,
        isOnline: true,
      },
      timestamp: "10:27 AM",
      status: "delivered",
    },
    {
      id: "4",
      content: "Aww Thanks yall",
      sender: {
        name: CURRENT_USER.name,
        avatar: CURRENT_USER.avatar,
        isOnline: true,
        isCurrentUser: true,
      },
      timestamp: "10:30 AM",
      status: "delivered",
    },
  ];
  

export const TRC = () => {
    const [chats] = useState([
      {
        id: 1,
        name: "Team Chat",
        membersCount: 3,
        onlineCount: 2,
        messages: INITIAL_MESSAGES,
      }
    ]);
  
    return (
      <div className="p-8 space-y-8">
        <div className="max-w-4xl mx-auto">
          <ChatCard
            chatName={chats[0].name}
            membersCount={chats[0].membersCount}
            onlineCount={chats[0].onlineCount}
            initialMessages={chats[0].messages}
            currentUser={CURRENT_USER}
            theme={"dark"}
            className={"light"}
            onSendMessage={(message) => console.log('Sent:', message)}
            onReaction={(messageId, emoji) => console.log('Reaction:', messageId, emoji)}
            onMoreClick={() => console.log('More clicked')}
          />
        </div>
      </div>
    )
}
