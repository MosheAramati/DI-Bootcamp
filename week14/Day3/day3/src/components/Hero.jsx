const Heroes = ({name})=>{
if(name =="thanos"){
    throw new Error ("Not a hero")
}
return(
    <>
    <h2>{name}</h2>
    </>
)
}

export default Heroes