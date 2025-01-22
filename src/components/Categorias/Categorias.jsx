import './category.css'
import { Link } from 'react-router-dom';
const categoriasImg = [
    {
        name: 'Hombre',
        url: 'https://res.cloudinary.com/do36rxfoe/image/upload/v1737500023/li7yqpixhnzqx0fpzm8y.png',
        to: 'categoria/hombre'
    },
    {
        name: 'Mujer',
        url: 'https://res.cloudinary.com/do36rxfoe/image/upload/v1737565180/cztt76teu3avpxtjefit.png',
        to: 'categoria/mujer'
    },
    {
        name: 'Unisex',
        url: 'https://res.cloudinary.com/do36rxfoe/image/upload/v1737500351/sii7hh0b0thxtg8n5dba.png',
        to: 'categoria/unisex'
    },

]
export const Categorias = () => {
    return (
        <>
            <div className="categoriasContiner">
                {categoriasImg.map(category => {
                    return (
                        <Link className='category' to={category.to}>
                            <img src={category.url} alt={category.name} className="categoryImg">
                            </img>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
