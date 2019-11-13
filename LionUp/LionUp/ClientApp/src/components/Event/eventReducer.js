import { createReducer } from '../../common/util/reducerUtils'
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './eventConstants';

const initialState = [
    {
        id: '1',
        title: 'UNO Tournament',
        date: '11 Nov 2019 5:00 PM',
        category: 'fun',
        description: 'We will have free pizza and drinks available for everyone during the tournament. This is a fun event so bring your friends! ',
        city: 'Hammond, LA, USA',
        venue: 'Fayard Hall, North Oak Street, Hammond, LA, USA',
        venueLatLng: {
            lat: 30.5148347,
            lng: -90.46647639999998
        },
        hostedBy: 'WIT @southeastern',
        hostPhotoURL: '../../../assets/user.png',
        attendees: [
            {
                id: 'a',
                name: 'Bobby',
                photoURL: '../../../assets/user.png'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: '../../../assets/user.png'
            },
            {
                id: 'c',
                name: 'Harry',
                photoURL: '../../../assets/user.png'
            },
            {
                id: 'd',
                name: 'Ali',
                photoURL: '../../../assets/user.png'
            },
            {
                id: 'e',
                name: 'Walker',
                photoURL: '../../../assets/user.png'
            }
        ]
    },
    {
        id: '2',
        title: 'Thanksgiving Luncheon',
        date: '26 Nov 2019 2:00 PM',
        category: 'festival',
        description: 'Thanksgiving is a national holiday in the United States, celebrated on the fourth Thursday of November. It originated as a harvest festival. ... The event that Americans commonly call the "First Thanksgiving" was celebrated by the Pilgrims after their first harvest in the New World in October 1621.',
        city: 'Hammond, LA',
        venue: 'Southeastern Louisiana University, West University Avenue, Hammond, LA, USA',
        venueLatLng: {
            lat: 30.5173159,
            lng: -90.4688572
        },
        hostedBy: 'Bob',
        hostPhotoURL: '../../../assets/user.png',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: '../../../assets/user.png'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: '../../../assets/user.png'
            }
        ]
    },
    {
        id: '3',
        title: 'Football vs Stephen F. Austin',
        date: '2 Nov 2019 4:00 PM',
        category: 'soccer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        city: 'Hammond, LA',
        venue: 'Strawberry Stadium, Western Avenue, Hammond, LA, USA',
        venueLatLng: {
            lat: 30.5110264,
            lng: -90.46857920000002
        },
        hostedBy: 'SLU ATHLETICS',
        hostPhotoURL: '../../../assets/user.png',
        attendees: [
            {
                id: 'a',
                name: 'Bobby',
                photoURL: '../../../assets/user.png'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: '../../../assets/user.png'
            },
            {
                id: 'c',
                name: 'Harry',
                photoURL: '../../../assets/user.png'
            },
            {
                id: 'd',
                name: 'Ali',
                photoURL: '../../../assets/user.png'
            },
            {
                id: 'e',
                name: 'Walker',
                photoURL: '../../../assets/user.png'
            }
        ]
    }
];

const createEvent = (state, payload) => {
    return [...state, payload.event]
}

const updateEvent = (state, payload) => {
    return [
        ...state.filter(event => event.id !== payload.event.id), payload.event
    ]
}

const deleteEvent = (state, payload) => {
    return [
        ...state.filter(event => event.id !== payload.eventId)
    ]
}

export default createReducer(initialState, {
    [CREATE_EVENT]: createEvent,
    [UPDATE_EVENT]: updateEvent,
    [DELETE_EVENT]: deleteEvent
})