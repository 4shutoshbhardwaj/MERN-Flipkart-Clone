import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Box, styled, Typography, Button, Divider } from '@mui/material';
import Countdown from 'react-countdown';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Component = styled(Box)`
    margin-top:10px;
    background-color:#ffffff;
`

const Deal = styled(Box)`
    padding:15px 20px;
    display:flex;
    align-items:center;
`

const Timer = styled(Box)`
    display:flex;
    margin-left:10px;
    align-items:center;
    color:#7f7f7f;
`

const DealText = styled(Typography)`
    font-size:22px;
    font-weight:600;
    line-height:32px;
    margin-right:25px;
`

const ViewAllButton = styled(Button)`
    margin-left:auto;
    background-color:#2874f0;
    border-radius:2px;
    font-size:13px;
    font-weight:600;
`

const Text = styled(Typography)`
    font-size:14px;
    margin-top:5px;
`

const Image = styled('img')({
    width: "auto",
    height: 150
})

const RenderTimer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Slide = ({ products, title, timer }) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds, completed }) => {
        return <RenderTimer variant="span">{hours} : {minutes} : {seconds} Left</RenderTimer>
    };

    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer && <Timer>
                        <img src={timerURL} alt="Timer" style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                }
                <ViewAllButton variant="contained" >View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlaySpeed={4000}
                autoPlay={true}
                slidesToSlide={1}
                keyBoardControl={true}
                ssr={true}
                centerMode={true}>
                {
                    products.map(el => (
                        <Box textAlign="center" style={{ padding: "25px 15px" }} key={el._id}>
                            <Image src={el.url} alt="products" />
                            <Text style={{ fontWeight: 600, color: "#212121" }}>{el.title.shortTitle}</Text>
                            <Text style={{ color: 'green' }}>{el.discount}</Text>
                            <Text style={{ color: '#212121', opacity: ".6" }}>{el.tagline}</Text>
                        </Box>
                    ))
                }

            </Carousel>
            <Box>

            </Box>
        </Component>
    )
}

export default Slide