const SearchCar = ({listCars, handleChange}) =>{
    return(
        <>
        <select id="mySelect" onChange={handleChange}>
        <option value="..." >
                ...
                </option>
            {listCars.map((item)=>{
                return <option value={item.brand}>
                {item.brand}
                </option>
            })}
        </select >
        </>
    )
}

export default SearchCar