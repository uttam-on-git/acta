"use client"

import { useState } from "react"

export function CategoryFilter({onCategoryChange}) {

    const [selectedCategory, setSelectedCategory] = useState("")

    const handleChange = (e) => {
        const value = e.target.value
        console.log("hellllllllooo mf i got the value", value)
        setSelectedCategory(value)
        onCategoryChange(value)
    }
    return (
        <div className="bg-white shadow rounded-lg px-4 py-6 mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2" id="category-select">Select category</label>
            <select name="category" onChange={handleChange}  value={selectedCategory} id="category-select" className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option value="">All</option>
                <option value="shopping">Shopping</option>
                <option value="healthcare">Healthcare</option>
                <option value="entertainment">Entertainment</option>
                <option value="transportation">Transportation</option>
            </select>
        </div>
    )
}