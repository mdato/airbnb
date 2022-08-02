import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';

import { BiHomeAlt } from 'react-icons/bi';
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';
import {GiIsland} from 'react-icons/gi';
import {TbBeach, TbPool} from 'react-icons/tb';


export const locationsTab = [
  { id: 1, label: 'Island' , icon: <GiIsland size={24} /> },
  { id: 2, label: 'Beaches', icon: <TbBeach size={24} /> },
  { id: 3, label: 'Amazing Pools', icon: <TbPool size={24} /> },
  { id: 4, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 5, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 6, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 7, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 8, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 9, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 10, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 11, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 12, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 13, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
  { id: 14, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 15, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 16, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 17, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 18, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 19, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
  { id: 20, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 21, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 22, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },

];

export const locations = [
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1585232946945-795e753b3b63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1517017752111-e7ee4ab1ce6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1606852848696-e590f4bc02d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
      },
      
    ],
    location: 'Ushuaia, Argentina',
    days: 'Mar 5-9',
    price: '€130,9 night',
    isNew: false,
    rating: 4.8,
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1610135206707-0f03e4800631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1593014245414-cf9ce27cf1a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
      },
      
    ],
    location: 'Buenos Aires, Argentina',
    days: 'Ago 5-16',
    price: '€98 night',
    isNew: true,
    rating: 4.89,
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1561816646-b5b12a9b92ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1587856618088-bdef3070c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1595265940666-6e0a95c24c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
     
    ],
    location: 'Mar del Plata, Argentina',
    days: 'Jan 15-22',
    price: '€112 night',
    isNew: true,
    rating: 4.7,
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1508710285745-edc8137d6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1608746681266-242c3c78b131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1612012539426-4354858ba0a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
      
    ],
    location: 'Cataratas del Iguazu, Argentina',
    days: 'May 15-17',
    price: '€78 night',
    isNew: true,
    rating: 4.3,
  },
  {
    id: 5,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1559061211-1923837ec988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1586970741998-42cb95207547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1615213452107-76d74ba63c29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      
    ],
    location: 'El Calafate, Argentina',
    days: 'Aug 17-26',
    price: '€143 night',
    isNew: true,
    rating: 4.8,
  },
  {
    id: 6,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1520641082665-df9ec00b0953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1579114934263-74a3d7747fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1580583834225-37eaac02a819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      },
      
    ],
    location: 'El Chaltén, Argentina',
    days: 'Oct 1-5',
    price: '€198 night',
    isNew: false,
    rating: 4.6,
  },
  {
    id: 7,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1598162480222-b2c3d92548d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1589836107303-a09b66b1f0bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1577801599718-f4e3ad3fc794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
     
    ],
    location: 'Bariloche, Argentina',
    days: 'July 17-24',
    price: '€261 night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 8,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1633988595412-0c7e9df32f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1523295029613-4b96e13a8c21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1633968875521-767a68e572b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80',
      },

    ],
    location: 'Puerto Madryn, Argentina',
    days: 'Sep 11-16',
    price: '€127 night',
    isNew: false,
    rating: 4.2,
  },
  {
    id: 9,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      },

    ],
    location: 'Rio de Janeiro, Brasil',
    days: 'Ago 11-16',
    price: '€110 night',
    isNew: true,
    rating: 4.3,
  },
  {
    id: 10,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1628611658050-c5442800279d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1628547520335-614801ec534d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1017&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1628613977744-4b906db5ea70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
      },

    ],
    location: 'Camboriu, Brasil',
    days: 'Feb 2-8',
    price: '€129 night',
    isNew: true,
    rating: 4.6,
  },
  {
    id: 11,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1577346895253-445f05a6670d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1567609736695-17560ec625f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },

    ],
    location: 'Copenhagen, Denmark',
    days: 'Dec 12-15',
    price: '€215 night',
    isNew: false,
    rating: 4.8,
  },
  {
    id: 12,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },

    ],
    location: 'Berlin, Germany',
    days: 'May 13-20',
    price: '€49 night',
    isNew: false,
    rating: 4.2,
  },
  
];
