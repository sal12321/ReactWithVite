export default function ({price}){

    let styles = {margin : "0 auto" , padding : " 10px 50px", backgroundColor : "grey", borderRadius : "10px"}

    return (
        <>
        <span style={styles}>
             {price}
        </span>
        </>
    );
}