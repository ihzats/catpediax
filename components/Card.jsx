"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Catapage() {
    const [kucingData, setKucingData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCat, setSelectedCat] = useState(null);

    useEffect(() => {
        axios
            .get('https://kucingku.digiraya.com/kucing')
            .then((response) => {
                // Mengambil data dari respons
                const data = response.data;

                // Mengatur data ke dalam state
                setKucingData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Fungsi ini akan memfilter data berdasarkan kata kunci pencarian
    const filteredKucingData = kucingData.filter((kucing) => {
        return kucing.jenis.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Fungsi ini akan menampilkan modal dengan detail kucing saat "Read more..." di klik
    const handleReadMoreClick = (cat) => {
        setSelectedCat(cat);
    };

    // Fungsi ini akan menutup modal
    const handleCloseModal = () => {
        setSelectedCat(null);
    };

    return (
        <div className="container mx-auto my-10 mt-32">
            <div className="mb-6">
                <h1 className="text-3xl font-semibold mb-2">Daftar Kucing</h1>
                <input
                    type="text"
                    placeholder="Cari Kucing..."
                    className="w-full border rounded-md p-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredKucingData.map((kucing) => (
                    <div key={kucing.id} className="bg-white p-4 rounded-md shadow-md">
                        <img
                            src={kucing.image}
                            alt={kucing.jenis}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold">{kucing.jenis}</h2>
                        <div className="mt-12 mb-2">
                            <button
                                className="bg-black text-white px-5 py-2 rounded-lg hover:bg-teal-500"
                                onClick={() => handleReadMoreClick(kucing)}
                            >
                                Read more...
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal untuk menampilkan detail kucing */}
            {selectedCat && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-md shadow-md text-center">
                        <img
                            src={selectedCat.image}
                            alt={selectedCat.jenis}
                            className="w-full h-80 object-cover rounded-md mb-4"
                            style={{ objectFit: 'cover' }} // Proporsi gambar akan disesuaikan
                        />
                        <h2 className="text-xl font-semibold mb-2">{selectedCat.jenis}</h2>
                        <p className='text-sm'>{selectedCat.deskripsi}</p>
                        <p className='text-sm'>{selectedCat.karateristik}</p>
                        <div className='pt-5'>
                            <button
                                className="bg-black text-white px-5 py-2 rounded-lg hover:bg-teal-500"
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}
