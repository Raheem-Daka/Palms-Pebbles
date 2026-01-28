import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import reception from './reception.jpeg'
import receptionChairs from './receptionChairs.jpeg'
import backyard1 from './backyard1.jpeg'
import boardEntrance from './boardEntrance.jpeg'
import pathWay from './pathWay.jpeg'
import pathWay2 from './pathWay2.jpeg'
import heroImage from './heroImage.jpeg'
import roomImg1 from './roomImg1.jpeg'
import roomImg1_2 from './roomImg1_2.jpeg'
import roomImg1_3 from './roomImg1_3.jpeg'
import roomImg1_4 from './roomImg1_4.jpeg'
import roomImg2 from './roomImg2.jpeg'
import roomImg2_2 from './roomImg2_2.jpeg'
import roomImg2_3 from './roomImg2_3.jpeg'
import roomImg2_4 from './roomImg2_4.jpeg'
import roomImg3 from './roomImg3.jpeg'
import roomImg3_2 from './roomImg3_2.jpeg'
import roomImg3_3 from './roomImg3_3.jpeg'
import roomImg3_4 from './roomImg3_4.jpeg'
import roomImg4 from './roomImg3.jpeg'
import roomImg4_2 from './roomImg4_2.jpeg'
import roomImg4_3 from './roomImg4_3.jpeg'
import roomImg4_4 from './roomImg4_4.jpeg'
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import singleBed from "./singleBed.svg";
import doubleBed from "./doubleBed.svg";
import email from "./email.png";
import mail2 from "./mail2.svg";
import whatsapp from "./whatsapp.svg";
import phone from "./phone.png";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    singleBed,
    doubleBed,
    email,
    mail2,
    whatsapp,
    phone,
    heroImage
}

export const city = [
    "Lilongwe",
    
];

export const photos = [
    reception,
    receptionChairs,
    boardEntrance,
    backyard1,
    pathWay2,
    pathWay,
    roomImg1,
    roomImg1_2,
    roomImg1_3,
    roomImg1_4,
    roomImg2,
    roomImg2_2,
    roomImg2_3,
    roomImg2_4,
    roomImg3,
    roomImg3_2,
    roomImg3_3,
    roomImg3_4,
    roomImg4,
    roomImg4_2,
    roomImg4_3,
    roomImg4_4,

    
];

//Room categories with associated icons
export const roomCategories = [
    { name: "Singles", icon: singleBed },
    { name: "Couples", icon: doubleBed },
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "67f8a1c2197ac559e401a0d1",
        "name": "Room 1",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Double Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0d2",
        "name": "Room 2",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Double Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg2, roomImg2_2, roomImg2_3, roomImg2_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0d3",
        "name": "Room 3",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Double Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg3_2, roomImg3_3, roomImg3_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0d4",
        "name": "Room 4",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg4, roomImg4_2, roomImg4_3, roomImg4_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0d5",
        "name": "Room 5",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0d6",
        "name": "Room 6",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0d7",
        "name": "Room 7",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0d8",
        "name": "Room 8",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0d9",
        "name": "Room 9",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0da",
        "name": "Room 10",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0db",
        "name": "Room 11",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0dc",
        "name": "Room 12",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0dd",
        "name": "Room 13",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
 
    {
        "_id": "67f8a1c2197ac559e401a0de",
        "name": "Room 14",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0df",
        "name": "Room 15",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
    {
        "_id": "67f8a1c2197ac559e401a0dg",
        "name": "Room 16",
        //"hotel": hotelDummyData,
        "address": "Lilongwe , Chilinde",
        "roomType": "Single Bed",
        "pricePerNight": "40",
        "pricePerNight2": "45",
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg1, roomImg1_2, roomImg1_3, roomImg1_4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    },
 
]
