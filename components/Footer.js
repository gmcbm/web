const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="h-16 flex items-center justify-center">
                <span className="text-center text-gray-300">Copyright &copy; {new Date().getFullYear()} <a href="https://gmcbm.net">GMCBM.net</a></span>
            </div>
        </footer>
    )
}

export default Footer