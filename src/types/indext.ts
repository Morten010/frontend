
export interface ProductProps {
    id: number
    title: string;
    price: number;
    image: {
        src: string;
        alt: string;
    };
}