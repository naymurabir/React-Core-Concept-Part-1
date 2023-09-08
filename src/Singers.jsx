export default function Singers({ singer }) {
    return (
        <div>
            <h3>Name: {singer.name}</h3>
            <p>Age: {singer.age}</p>
        </div>
    )
}