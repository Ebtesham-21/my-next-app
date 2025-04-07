import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../api/blogs';
import BlogSingle from '../BlogSingle';
import Link from 'next/link';
import Image from 'next/image';


const BlogSection = () => {
    const [open, setOpen] = useState(false);
    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({})

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }

    const [number, setCount] = useState(3);
    
}