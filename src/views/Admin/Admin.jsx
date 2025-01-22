import React, { useState } from 'react';
import './Admin.css';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import Swal from 'sweetalert2';

const uploadToCloudinary = async (file, category, productName) => {
    const formData = new FormData();
    formData.append('file', file); 
    formData.append('upload_preset', 'OudPerfumes'); 
    formData.append('folder', `oud/products/${category}/${productName}`); 

    // Enviar la solicitud de carga
    const response = await fetch('https://api.cloudinary.com/v1_1/do36rxfoe/image/upload', {
        method: 'POST',
        body: formData,
    });

    // Verificar si la carga fue exitosa
    if (!response.ok) {
        throw new Error('Error al subir la imagen a Cloudinary');
    }

    // Obtener la URL de la imagen subida
    const data = await response.json();
    return data.secure_url; // Devuelve la URL de la imagen subida
};



export const Admin = () => {
    const [image1, setImg1] = useState(null);
    const [image2, setImg2] = useState(null);
    const [image3, setImg3] = useState(null);
    const [image4, setImg4] = useState(null);
    const [category, setCategory] = useState('mates');
    const [nombre, setNombre] = useState('');
    const [imagePreview1, setImagePreview1] = useState('');
    const [imagePreview2, setImagePreview2] = useState('');
    const [imagePreview3, setImagePreview3] = useState('');
    const [imagePreview4, setImagePreview4] = useState('');

    const handleNombre = (e) => {
        setNombre(e.target.value);
    };

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleImageChange = (e, setImage, setPreview) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const addProduct = async (e) => {
        e.preventDefault();
    
        try {
            const precio = parseInt(document.getElementById('precio').value);
            const descuento = parseInt(document.getElementById('descuento').value);
            const stock = document.getElementById('stock').checked;
            const descripcion = document.getElementById('descripcion').value;
            const nombreProducto = nombre.toUpperCase().replace(/\s+/g, '-');
    
            // Subir imágenes a Cloudinary con carpetas dinámicas
            const imageUrls = await Promise.all(
                [image1, image2, image3, image4].map((img) =>
                    img ? uploadToCloudinary(img, category, nombreProducto) : null
                )
            );
    
            const nuevoProducto = {
                nombre,
                precio,
                descuento,
                stock,
                categoria: category,
                descripcion,
                img1: imageUrls[0],
                img2: imageUrls[1],
                img3: imageUrls[2],
                img4: imageUrls[3],
            };
    
            // Guardar producto en Firestore
            await setDoc(doc(db, 'products', nombreProducto), nuevoProducto);
    
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado',
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.error('Error al agregar producto:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al agregar producto',
                text: error.message,
                showConfirmButton: true,
            });
        }
    };
    

    return (
        <div className="adminContainer">
            <form className="adminForm" onSubmit={addProduct}>
                <h1>Administrar Productos</h1>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required value={nombre} onChange={handleNombre} />
                    <label htmlFor="stock">Stock:</label>
                    <input type="checkbox" id="stock" name="stock" className="stock" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Precio:</label>
                    <input type="number" id="precio" name="precio" required />
                    <label htmlFor="descuento">Descuento:</label>
                    <select name="descuento" id="descuento" required>
                        <option value="0">0%</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                        <option value="25">25%</option>
                        <option value="30">30%</option>
                        <option value="35">35%</option>
                        <option value="40">40%</option>
                        <option value="45">45%</option>
                        <option value="50">50%</option>
                        <option value="60">60%</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" name="descripcion" />
                    <label htmlFor="category">Categoría:</label>
                    <select name="category" id="category" required value={category} onChange={handleCategory}>
                        <option value="mates">Mates</option>
                        <option value="yerbas">Yerbas</option>
                        <option value="termos">Termos</option>
                        <option value="bombillas">Bombillas</option>
                        <option value="materas">Materas</option>
                        <option value="vasos">Vasos</option>
                        <option value="accesorios">Accesorios</option>
                        <option value="combos">Combos</option>
                    </select>
                </div>
                {[1, 2, 3, 4].map((num) => (
                    <div key={num}>
                        <label htmlFor={`imagen${num}`}>Imagen {num}:</label>
                        <input
                            type="file"
                            id={`img${num}`}
                            name={`imagen${num}`}
                            onChange={(e) =>
                                handleImageChange(e, eval(`setImg${num}`), eval(`setImagePreview${num}`))
                            }
                        />
                        {eval(`imagePreview${num}`) && (
                            <img src={eval(`imagePreview${num}`)} alt={`Preview ${num}`} style={{ maxWidth: '100px' }} />
                        )}
                    </div>
                ))}
                <button className="Button" type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default Admin;
