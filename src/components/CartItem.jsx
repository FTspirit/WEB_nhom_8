import React, { useState } from 'react';
import '../App.css'
import { IMAGE } from '../assets';


export const CartItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const buttonStyle = {
        // alignItems: 'center',
        display: 'flex', flexDirection: 'column',
        gap: 8, border: isHovered ? '1px solid #ccc' : '0px',
        borderRadius: '5px',
        padding: 6,

    };

    console.log('vv',item);
    return (
        <div md={4} style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            // href={`/product-detail?id=${item?.id}`}
            
        >
            <div className={`image-container ${isHovered ? 'hovered' : ''}`}
                style={{ padding:4}}>
                <img
                    src={item?.image}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 6 }}
                />
            </div>
            <span style={{ fontWeight: '600' }}>
                {item?.title}
            </span>
            <span style={{ fontWeight: '600', backgroundColor: 'red', padding: '2px 18px', borderRadius: 16, color: 'white', width: 'max-content' }}>

                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item?.product_detail?.[0]?.price)}
            </span>
            <div style={{ width: '100%', flexWrap: 'wrap', display: 'flex', gap: 16, padding: 6, backgroundColor: 'gray', borderRadius: 4 }}>
               
                <div>
                    <img
                        src={IMAGE.monitor}
                        style={{ width: 18, height: 18, objectFit: 'contain', borderRadius: 6 }}
                    />
                    <span style={{ fontSize: 12, marginLeft: 2 }}>
                        {item?.product_detail?.[0]?.screen}
                    </span>
                </div>
                <div>
                    <img
                        src={IMAGE.cpu}
                        style={{ width: 18, height: 18, objectFit: 'contain', borderRadius: 6 }}
                    />
                    <span style={{ fontSize: 12, marginLeft: 2 }}>
                        {item?.product_detail?.[0]?.cpu}
                    </span>
                </div>
                <div>
                    <img
                        src={IMAGE.ram}
                        style={{ width: 18, height: 18, objectFit: 'contain', borderRadius: 6 }}
                    />
                    <span style={{ fontSize: 12, marginLeft: 2 }}>
                        {item?.product_detail?.[0]?.ram}
                    </span>
                </div>
                <div>
                    <img
                        src={IMAGE.rom}
                        style={{ width: 18, height: 18, objectFit: 'contain', borderRadius: 6 }}
                    />
                    <span style={{ fontSize: 12, marginLeft: 2 }}>
                        {item?.product_detail?.[0]?.rom}
                    </span>
                </div>
            </div>
            <span style={{ fontWeight: '600', backgroundColor: 'red', padding: '2px 18px', borderRadius: 4, color: 'white', width: 'max-content', display: isHovered ? 'flex' : 'none' }}>
                Mua ngay
            </span>
        </div>
    )
}
