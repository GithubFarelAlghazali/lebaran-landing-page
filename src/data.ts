export interface Product {
    id: string;
    title: string;
    price: number;
    img: string;
    category: 'product' | 'hamper';
    description?: string;
    isFeatured?: boolean;
}

export const products: Product[] = [
    // Products
    {
        id: 'p1',
        title: "Nastar",
        price: 25000,
        img: "/products/nastar.webp",
        category: 'product',
        description: "Kue kering klasik dengan selai nanas asli yang manis dan asam segar.",
        isFeatured: true
    },
    {
        id: 'p2',
        title: "Choco Chips",
        price: 30000,
        img: "/products/choco-chips.webp",
        category: 'product',
        description: "Kue kering coklat renyah dengan taburan choco chips melimpah.",
        isFeatured: true
    },
    {
        id: 'p3',
        title: "Kacang Mete",
        price: 25000,
        img: "/products/kacang-mete.webp",
        category: 'product',
        description: "Kue kacang gurih dengan topping kacang mete panggang.",
        isFeatured: false
    },
    {
        id: 'p4',
        title: "Kastangel",
        price: 25000,
        img: "/products/kastangel.webp",
        category: 'product',
        description: "Kue keju gurih dengan taburan keju cheddar parut.",
        isFeatured: true
    },
    {
        id: 'p5',
        title: "Kembang Goyang",
        price: 30000,
        img: "/products/kembang-goyang.webp",
        category: 'product',
        description: "Kue tradisional renyah dengan bentuk bunga yang cantik.",
        isFeatured: false
    },
    {
        id: 'p6',
        title: "Kue Kering Coklat Batang",
        price: 30000,
        img: "/products/kering-cokelat-batang.webp",
        category: 'product',
        description: "Kue kering dengan topping coklat batang premium.",
        isFeatured: true
    },
    {
        id: 'p7',
        title: "Kuping Gajah",
        price: 25000,
        img: "/products/kuping-gajah.webp",
        category: 'product',
        description: "Cemilan manis renyah dengan motif spiral khas.",
        isFeatured: false
    },
    {
        id: 'p8',
        title: "Tumbrint Cokelat",
        price: 27000,
        img: "/products/tumbrint-cokelat.webp",
        category: 'product',
        description: "Kue kering dengan isian coklat lumer di tengah.",
        isFeatured: true
    },
    // Hampers
    {
        id: 'h1',
        title: "Paket Idul Fitri A",
        price: 150000,
        img: "/hampers/hampers1.webp",
        category: 'hamper',
        description: "Berisi 3 toples kue kering pilihan (Nastar, Kastangel, Putri Salju).",
        isFeatured: true
    },
    {
        id: 'h2',
        title: "Paket Berkah B",
        price: 200000,
        img: "/hampers/hampers2.webp",
        category: 'hamper',
        description: "Berisi 4 toples kue kering premium + 1 botol sirup.",
        isFeatured: true
    },
    {
        id: 'h3',
        title: "Paket Keluarga C",
        price: 350000,
        img: "/hampers/hampers3.webp",
        category: 'hamper',
        description: "Paket lengkap 6 toples kue kering untuk keluarga besar.",
        isFeatured: true
    }
];

export const reviews = [
    {
        id: 1,
        name: "Siti Aminah",
        text: "Kue nastarnya enak banget! Selainya pas, gak terlalu manis. Pasti pesan lagi tahun depan.",
        rating: 5
    },
    {
        id: 2,
        name: "Budi Santoso",
        text: "Hampersnya rapi dan elegan. Cocok banget buat kirim ke kolega kantor.",
        rating: 5
    },
    {
        id: 3,
        name: "Ratna Sari",
        text: "Pengiriman cepat dan aman. Kuenya utuh gak ada yang hancur. Recommended!",
        rating: 4
    }
];
