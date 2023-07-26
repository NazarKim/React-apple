import './inf.css'
const Inf = (props) => {
    return (
        <main style={{ backgroundImage: `url(${props.headerData.img.photoLogo})`}}>
            <aside>
                <h1>Information</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda beatae ex expedita, harum, id itaque laboriosam odit qui quibusdam recusandae repellat rerum suscipit? Ab aspernatur magni minus praesentium velit.</p>
            </aside>
        </main>
    );
};

export default Inf;