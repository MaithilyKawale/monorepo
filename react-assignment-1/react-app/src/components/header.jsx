function Header({ title }) {
    const headerstyle = {
        color: 'black',
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
        padding: '10px',
        margin: '0' 
    }
    return <h1 style={headerstyle}>{title}</h1>;

}

export default Header;