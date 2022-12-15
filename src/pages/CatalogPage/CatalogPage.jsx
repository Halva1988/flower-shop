import React, { useEffect, useState } from 'react';
import './CatalogPage.css'

export const defaultCategory = 'All'
export const API_URL = 'https://raw.githubusercontent.com/SoraMaruyama/flowerAPI/master/flowers.json'


const CatalogPage = () => {
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [categories, setCategories] = useState([defaultCategory])
    const [activeCategory, setActiveCategory] = useState(defaultCategory)

    const getCategoriesFromProduct = (products) => {
        const allCategories = products.map(({ category }) => category)
        const uniqueCategoryNames = new Set(allCategories)
        return Array.from(uniqueCategoryNames)
    }

    const fetchProducts = () => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((response) => {
                const newProducts = response.flowerlist.map((product) => ({
                    ...product,
                    index: product.productId
                }))

                const newCategories = getCategoriesFromProduct(newProducts)

                setProducts(newProducts)
                setFilterProducts(newProducts)
                setCategories([...categories, ...newCategories])
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log(categories);

    return (
        <div>

        </div>
    )
}

export default CatalogPage;