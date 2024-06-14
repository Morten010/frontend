export function formatPrice(price: number) {
    const formattedPrice = (price / 100).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    return `${formattedPrice} DKK`;
}