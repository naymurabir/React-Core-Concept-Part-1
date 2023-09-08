export default function Book({ book }) {
    return (
        <div style={{ border: '2px solid yellowGreen', marginBottom: '5px' }}>
            <h3>Book's Name: {book.name}</h3>
            <p>Price: {book.price}</p>
        </div>
    )
}
