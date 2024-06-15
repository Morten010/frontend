
export interface ProductProps {
    id: number
    title: string;
    price: number;
    image: {
        src: string;
        alt: string;
    };
}

export interface CategoryProps {
    title: string;
    href: string;
    underLinks: {
        title: string;
        href: string;
    }[];
}