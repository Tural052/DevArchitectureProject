// @ts-nocheck
import React from "react";
import RoundedButton from "./../buttons/RoundedButton";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { selectAllServices } from './../../components/services/servicesSlice';
import { useSelector } from 'react-redux';
import styles from './gallery.module.css';




const GalleryServices = ( { data, boxContainerClass, boxClass, imgClass, spanClass, isWhite, buttonSize } ) => {
    const handleDragStart = ( e ) => e.preventDefault();

    const services = useSelector( selectAllServices );

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
        1440: { items: 4 }
    };

    const renderedServices = services.map(( item ) => {
        return (
            <div className={`${boxContainerClass} container-testimonials-data`}>
                <div className={`${styles.services_alignment}`} key={item.id}>
                    <img
                        src={item.img}
                        alt="think-wise-service"
                        className={imgClass}
                        onDragStart={handleDragStart}/>
                    <span className={spanClass}>{item.name}</span>
                    <br />
                    <Link to={item.to}>
                        <RoundedButton top="10px" color={"#000"} size={buttonSize}/>
                    </Link>
                </div>
            </div>
        );
    });

    return (
        <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            autoPlay
            infinite={true}
            autoPlayStrategy={"none"}
            responsive={responsive}
            items={renderedServices}
            autoPlayInterval={2400}
            animationDuration={2400}/>
    );
};

export default GalleryServices;