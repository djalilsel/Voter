import { friend, groups, img, gallery, map, messages, reach, help } from "./src/assets"


export const menu = [
    {
        id: 1,
        title: "Profile",
        icon: img,
        link: "profile"
    },
    {
        id: 2,
        title: "Followed",
        icon: friend,
        link: "follows"
    },
    {
        id: 3,
        title: "Groups",
        icon: groups,
        link: "groups"
    },
]

export const shortcuts = [
    {
        id: 1,
        title: "Posts",
        icon: gallery,
        link: "posts"
    },
    {
        id: 2,
        title: "Votings",
        icon: map,
        link: "votings"
    },
    {
        id: 3,
        title: "Messages",
        icon: messages,
        link: "messages"
    },
]

export const others = [
    {
        id: 1,
        title: "Help me out",
        icon: help,
        link: "help"
    },
    {
        id: 2,
        title: "Reach for me",
        icon: reach,
        link: "reach"
    },
]