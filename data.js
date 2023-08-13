import { friend, groups, img, gallery, map, messages, reach, help, sav, geo, geko, jujutsu, bg1, bg2 } from "./src/assets"


export const menu = [
    {
        id: 1,
        title: "Followed",
        icon: friend,
        link: "follows"
    },
    {
        id: 2,
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

export const friendSuggestions = [
    {
        id: 1,
        image: groups,
        name: "Ahmed khalouta",
        url: "/profile/1",
    },
    {
        id: 2,
        image: gallery,
        name: "Baloumi 9adour",
        url: "/profile/2",
    },
    {
        id: 3,
        image: reach,
        name: "Ali Housan",
        url: "/profile/3",
    },
]

export const hottestVotes = [
    {
        id: 1,
        image: groups,
        publisher: "Ahmed khalouta",
        publisherUrl: "/profile/1",
        postUrl: "/post/1",
        description: "What is this?"
    },
    {
        id: 2,
        image: gallery,
        publisher: "Baloumi 9adour",
        publisherUrl: "/profile/2",
        postUrl: "/post/2",
        description: "Am i Handsome?"
    },
    {
        id: 3,
        image: reach,
        publisher: "Ali Housan",
        publisherUrl: "/profile/3",
        postUrl: "/post/3",
        description: "XQC is retarded?"
    },
]

export const users = [
    {
        id: 1,
        username: "Ahmed",
        password: "khalouta",
        image: groups,
        background: jujutsu,
        name: "Ahmed khalouta",
        url: "/profile/1",
    },
    {
        id: 2,
        username: "Baloumi",
        password: "9adour",
        image: gallery,
        background: bg1,
        name: "Baloumi 9adour",
        url: "/profile/2",
    },
    {
        id: 3,
        username: "Djalil",
        password: "Selamnia",
        image: reach,
        background: bg2,
        name: "Djalil Selamnia",
        url: "/profile/3",
    },
]

export const posts = [
    {
        id: 1,
        pfp: groups,
        image: sav,
        publisher: "Ahmed khalouta",
        publisherUrl: "/profile/1",
        postUrl: "/post/1",
        description: "What is this?"
    },
    {
        id: 2,
        pfp: gallery,
        image: geo,
        publisher: "Baloumi 9adour",
        publisherUrl: "/profile/2",
        postUrl: "/post/2",
        description: "Am i Handsome?"
    },
    {
        id: 3,
        pfp: reach,
        image: geko,
        publisher: "Ali Housan",
        publisherUrl: "/profile/3",
        postUrl: "/post/3",
        description: "XQC is retarded?"
    },
]