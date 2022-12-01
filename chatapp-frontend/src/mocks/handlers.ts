//https://mswjs.io/docs/getting-started
import {rest} from 'msw';
import {FriendListPreview, Friend, Message} from '../types/types';

const basePath = 'chatApp'; //TODO:



//Move to dummy data folder/files
const friendMap = new Map<number, Friend[]>([
    [1, 
        [{
            userId: 2,
            firstName: 'NotSeb',
            lastName: 'NotReal'
        },
        {
            userId: 3,
            firstName: 'Logan',
            lastName: 'Real'
        },
        {
            userId: 4,
            firstName: 'Dom',
            lastName: 'ReallyReal'
        }]
    ],
    [2, 
        [{
            userId: 1,
            firstName: 'Seb',
            lastName: 'Real'
        },
        {
            userId: 3,
            firstName: 'Logan',
            lastName: 'AlsoNotReal'
        }]
    ],
    [3, 
        [{
            userId: 1,
            firstName: 'Seb',
            lastName: 'Real'
        },
        {
            userId: 2,
            firstName: 'NotSeb',
            lastName: 'NotReal'
        }]
    ],
    [4, 
        [{
            userId: 1,
            firstName: 'Seb',
            lastName: 'Real'
        }]
    ],
    [5, []]
]);


//TODO: REWORK
const messageMap = new Map<number, Message>([
    [1, 
        {
            text: 'Youre so awesome Seb I wish I was you',
            dateReceived: undefined
        }
    ],
    [2, 
        {
            text: 'Yo dt Nape tn?',
            dateReceived: undefined
        }
    ],
    [3, 
        {
            text: 'Come to milwakeeeeeeeeeee',
            dateReceived: undefined
        }
    ],
    [4, 
        {
            text: 'baHHHHHHHHHH',
            dateReceived: undefined
        }
    ]
]);


const friendListPreviewMap = new Map<number, FriendListPreview[]>([
    [1, 
        [{
            userId: 2,
            firstName: 'NotSeb',
            lastName: 'NotReal',
            message: {
                text: 'Im awesome youre awesome'
            }
        },
        {
            userId: 3,
            firstName: 'Logan',
            lastName: 'Real',
            message: {
                text: 'BAHHHHHHHHHHHH'
            }
        },
        {
            userId: 4,
            firstName: 'Dom',
            lastName: 'ReallyReal',
            message: {
                text: 'Hey are you going to Scarabough fair tomorrow morning at 7:87pm or not???'
            }
        }]
    ],
    [2, 
        [{
            userId: 1,
            firstName: 'Seb',
            lastName: 'Real',
            message: {
                text: 'Im awesome youre awesome'
            }
        },
        {
            userId: 3,
            firstName: 'Logan',
            lastName: 'AlsoNotReal',
            message: {
                text: 'Im awesome youre awesome'
            }
        }]
    ],
    [3, 
        [{
            userId: 1,
            firstName: 'Seb',
            lastName: 'Real',
            message: {
                text: 'Im awesome youre awesome'
            }
        },
        {
            userId: 2,
            firstName: 'NotSeb',
            lastName: 'NotReal',
            message: {
                text: 'Im awesome youre awesome'
            }
        }]
    ],
    [4, 
        [{
            userId: 1,
            firstName: 'Seb',
            lastName: 'Real',
            message: {
                text: 'Im awesome youre awesome'
            }
        }]
    ],
    [5, []]
]);



//https://mswjs.io/docs/basics/request-matching
export const handlers = [

    //handles addition of new friend
    //rest.post('/friend', null),

    //handles get friendListPreview
    rest.get(basePath + "/user/:userId/friendsListPreview", (req, res, ctx) => {
        
        const {userId} = req.params;

        if(!friendListPreviewMap.has(Number(userId)))
        {
            return res(
                ctx.status(404),
                ctx.json({errorMessage: 'Not authorized'})
            )
        }
        
        return res(
            ctx.status(200),
            ctx.json(friendListPreviewMap.get(Number(userId))
            )
        );
    }),


    //handles get friendList
    rest.get(basePath + "/user/:userId/friends", (req, res, ctx) => {
        
        const {userId} = req.params;

        if(!friendMap.has(Number(userId)))
        {
            return res(
                ctx.status(404),
                ctx.json({errorMessage: 'Not authorized'})
            )
        }
        
        return res(
            ctx.status(200),
            ctx.json(friendMap.get(Number(userId))
            )
        );
    }),


    //TODO: REWORK
    //handles get friendList
    rest.get(basePath + "/messages/user/:userId/friend/:friendId", (req, res, ctx) => {
        
        const {userId, friendId} = req.params;

        if(!messageMap.has(Number(friendId)))
        {
            return res(
                ctx.status(404),
                ctx.json({errorMessage: 'Not found'})
            )
        }
        
        return res(
            ctx.status(200),
            ctx.json(messageMap.get(Number(friendId))
            )
        );
    }),

]
