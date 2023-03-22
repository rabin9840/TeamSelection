const Footer=()=>{
    var today= new Date();
    return(
        <footer>
            <h1>Footer</h1>
            <h5>Team Member Allocation App:{today.getFullYear()}</h5>
        </footer>
    )
}

export default Footer;