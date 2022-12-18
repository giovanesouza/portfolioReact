export default function Project({img, alt, caption }) {
    return (

            <figure>
                <img src={img} alt={alt} />

                <figcaption>{caption}</figcaption>
            </figure>
    );
}