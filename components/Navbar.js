function Navbar() {
    return (
        <>
            <nav className="bg-primary">
                <div className="flex content-center justify-between px-10 py-6">
                    <div>
                        <a href="#" className="font-extrabold text-2xl text-white">[ Edufree ]</a>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="font-normal text-white px-5">Home</a>
                        <a href="#" className="font-normal text-white px-5">Tentang Kami</a>
                        <a href="#" className="font-normal text-white px-5">Kursus</a>
                        <a href="#" className="font-normal text-white px-5">FAQ</a>
                        <a href="#" className="font-normal text-white px-5">Kursus</a>
                        <button href="#" className="font-normal ml-10 text-white px-7 py-2 border border-white rounded-md hover:bg-white hover:text-primary transition hover:delay-100">Login</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar