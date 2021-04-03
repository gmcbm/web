import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="h-16 flex items-center justify-center">
                <span className="text-center text-gray-300">Copyright &copy; {new Date().getFullYear()} <a href="https://gmcbm.net">GMCBM.net</a></span>
            </div>
            <div className="h-12 flex justify-center space-x-16">
                <span className="text-center text-gray-300"><Link href="/legal/imprint">Imprint</Link></span>
                <span className="text-center text-gray-300"><Link href="/legal/privacy">Privacy Police </Link></span>
                <span className="text-center text-gray-300"><Link href="/legal/tos">Terms of Service</Link></span>
            </div>
        </footer>
    )
}