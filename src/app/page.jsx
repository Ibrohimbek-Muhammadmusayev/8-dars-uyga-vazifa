'use client'

import '@/styles/home.css'
import axios from 'axios'
import { Link } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState([])
    const [category, setCategory] = useState('')

    const getData = async () => {
        await axios.get('https://fakestoreapi.com/products')
        .then((res)=> {
            console.log(res.data);
            setData(res.data)
        })
    }
    
    const hendleCategory = (e)=> {
        setCategory(e.target.value);
        console.log(e);
    }
    useEffect(() => {
        getData()
    }, [])
    
    const filteredData = category
        ? data.filter(item => item.category.toLowerCase().includes(category.toLowerCase()))
        : data;
    return (
        <div>
            <header>
                <nav className='bar'>
                    <div className="container">
                        <div className="navbar">
                            <select className='dropdoun' onChange={hendleCategory}>
                                <option value="">hammasi</option>
                                <option value="men's clothing">Erkaklar kiyimlari</option>
                                <option value="electronics">Elektron qurilmalar</option>
                                <option value="jewelery">Qimmatbaho buyumlar</option>
                                <option value="women's clothing">Ayollar kiyimlari</option>
                            </select>
                            <ul className='top-bar'>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                            <img
                            src="/image.svg"
                            width={100}
                            height={50}
                            alt="image" />
                            <ul className='top-bar'>
                                <li><a href="">Pages</a></li>
                                <li><a href="">Free Version</a></li>
                                <li><a href="">Purchase</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div className="container">
                    <div className="top-element">
                        {filteredData.map((item) => (
                            <div key={item.id} className="card">
                                <a href={`${item.id}`}>
                                    <img className='card-images' src={item.image} alt="images" />
                                    <h1 className='card-name'>{item.category}</h1>
                                    <p className='card-text'>{item.title}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}