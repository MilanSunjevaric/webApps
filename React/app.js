const Title = (props) => {
    return (
        <p>Pera ECC</p>
    )

}

const Paragraf = (props) => {
    return (
        <p>{props.text}</p>
    )
}


const cars = ['BMW', 'MERCEDES', 'OPEL'
]

const Products = (props) => {
    return (
        <li>
            {props.option}
        </li>
    )
}

const ProductItem = (props) => {
    return (
        <p>{props.name}</p>
    )
}

const CarList = (props) => {
    return props.list.map((el) => {
        return <ProductItem name={el} />
    })

}






const phones = ['iphone', 'samsung', 'huawei']

const PhoneItem = (props) => {
    return (<li>{props.model}</li>)
}

const PhoneList = (props) => {
    return props.li.map((x) => {
        return <PhoneItem model={x} />
    })
}

const App = (props) => {
    return (
        <div>
            <h1>This is heading!</h1>
            <Title />
            <Paragraf text='This is new Paragraph' />
            <ul>
                <Products option={cars[0]} />
                <Products option={cars[1]} />
                <Products option={cars[2]} />
            </ul>
            <CarList list={cars} />
            <ul>
                <PhoneList li={phones} />
            </ul>
        </div>
    )
}


const rootEl = document.querySelector('.root')
ReactDOM.render(<App />, rootEl)