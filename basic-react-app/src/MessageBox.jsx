


export default function MessageBox({username, color}){
    // let username = prompt("Enter your name");
    // let color = prompt("Enter your color");
 
console.log(username);
console.log(color);

let styles = {backgroundColor : color }

    return (

        <div className = "box" style={styles} > Hey there, my name is <b> {username.toUpperCase()} </b> </div>
    )

}


 