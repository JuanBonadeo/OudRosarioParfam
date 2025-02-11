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

    const response = await fetch('https://api.cloudinary.com/v1_1/do36rxfoe/image/upload', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Error al subir la imagen a Cloudinary');
    }

    const data = await response.json();
    return data.secure_url;
};

export const Admin = () => {
    const [images, setImages] = useState({ image1: null, image2: null, image3: null, image4: null });
    const [previews, setPreviews] = useState({ imagePreview1: '', imagePreview2: '', imagePreview3: '', imagePreview4: '' });
    const [category, setCategory] = useState('hombre');
    const [nombre, setNombre] = useState('');

    const handleNombre = (e) => {
        setNombre(e.target.value);
    };

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleImageChange = (e, imageKey, previewKey) => {
        const file = e.target.files[0];
        setImages((prev) => ({ ...prev, [imageKey]: file }));
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreviews((prev) => ({ ...prev, [previewKey]: reader.result }));
            reader.readAsDataURL(file);
        }
    };

    const addProduct = async (e) => {
        e.preventDefault();

        try {
            const precio = parseInt(document.getElementById('precio').value);
            const descuento = parseInt(document.getElementById('descuento').value);
            const stock = document.getElementById('stock').checked;
            const destacados = document.getElementById('destacados').checked;
            const descripcion = document.getElementById('descripcion').value;
            const nombreProducto = nombre.toUpperCase().replace(/\s+/g, '-');

            const imageUrls = await Promise.all(
                [images.image1, images.image2, images.image3, images.image4].map((img) =>
                    img ? uploadToCloudinary(img, category, nombreProducto) : null
                )
            );

            const nuevoProducto = {
                nombre,
                precio,
                descuento,
                stock,
                destacados,
                categoria: category,
                descripcion,
                img1: imageUrls[0],
                img2: imageUrls[1],
                img3: imageUrls[2],
                img4: imageUrls[3],
            };

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
                <div className="info1">
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required value={nombre} onChange={handleNombre} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Stock:</label>
                        <input type="checkbox" id="stock" name="stock" className="stock" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="destacados">Destacados:</label>
                        <input type="checkbox" id="destacados" name="destacados" className="destacados" />
                    </div>

                </div>
                <div className="info1">
                    <div className="form-group">
                        <label htmlFor="price">Precio:</label>
                        <input type="number" id="precio" name="precio" required />
                    </div>
                    <div className="form-group">
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
                </div>
                <div className="info1">
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripción:</label>
                        <input type="text" id="descripcion" name="descripcion" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Categoría:</label>
                        <select name="category" id="category" required value={category} onChange={handleCategory}>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                            <option value="unisex">Unisex</option>
                            <option value="bodysplash">Body Splash</option>
                        </select>
                    </div>

                </div>
                {[1, 2, 3, 4].map((num) => (
                    <div key={num}>
                        <label htmlFor={`imagen${num}`}>Imagen {num}:</label>
                        <input
                            type="file"
                            id={`img${num}`}
                            name={`imagen${num}`}
                            onChange={(e) =>
                                handleImageChange(e, `image${num}`, `imagePreview${num}`)
                            }
                        />
                        {previews[`imagePreview${num}`] && (
                            <img src={previews[`imagePreview${num}`]} alt={`Preview ${num}`} style={{ maxWidth: '100px' }} />
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
