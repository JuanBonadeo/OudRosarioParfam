import { useEffect, useState } from 'react'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import './Ofertas.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { Loader } from '../../ui/';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';





var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    atoplaySpeed: 700,
    centerPadding: "60px",
    pauseOnHover: true,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    nextArrow: <ArrowForwardIosIcon sx={{color: 'white', fontSize: '40px', ml: '60px', '&:hover': {color: 'white'}}} />,
    prevArrow: <ArrowBackIosIcon sx={{ color: 'white', fontSize: '40px', ml: '10px', zIndex: 1000,'&:hover': {color: 'white'} }} />,
    appendDots: dots => (
        <div
            style={{
                marginBottom: "30px",
                color: "white"
            }}
        >
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
    ),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 948,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

export const Ofertas = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchProducts = async () => {
        setLoading(true)
        try {
            const productsRef = query(collection(db, 'products'), where('descuento', '>', 0))
            const snapShot = await getDocs(productsRef);
            const productosAdapted = snapShot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            if (productosAdapted.length < 3) return
            setProducts(productosAdapted);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts()

    }, [])


    return (
        <div className="sliderContainer">
            <h2>Ofertas</h2>
            {loading
                ? <Loader />
                :
                <Slider {...settings} className="slides">
                    {products.map(product => <ProductCard key={product.id} {...product} />)}

                </Slider>
            }

        </div>
    );
}
