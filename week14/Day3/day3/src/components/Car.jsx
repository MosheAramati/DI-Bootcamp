const Car = ({chosenCars, nameChosenCar}) => {
    return( <>
    <h2>{nameChosenCar}</h2>
    {chosenCars.map((car)=>{
        return(
            <ul>
                <li>Brand: {car.brand} </li>
                <li>Name: {car.name} </li>
                <li>Year: {car.year} </li>
                <li>Origin: {car.origin} </li>
            </ul>
        )
    })}
    </>)
}

export default Car