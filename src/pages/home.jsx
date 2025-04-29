const Home = () => {
    return (
        <>
        <div id="home" className='h-screen place-content-center mx-4'>
            <h1 className='flex justify-center font-bold text-emerald-500 p-3 text-5xl'>
            Hi, i'm Chua Yi Xuan
            </h1>
            <h2 className="flex justify-center text-white mx-4">
                A web developer. Someone who wants to make the world a better place.
            </h2>
            <div className='flex justify-center'>
                <button className="mt-8 px-3 py-2 rounded-full text-white border border-white hover:border-emerald-500 hover:text-emerald-500">My experience</button>
            </div>
        </div>
        </>
    );
}

export default Home