import Countdown from './Countdown'

const Home = () => {
    return (
        <>
            <section className='header'>
                <div className="content">
                    <img src="https://ik.imagekit.io/evuf2rglq/logo?updatedAt=1765798573820" className="img-fluid" />
                    <h1>Allama Shabbir Ahmed Usmani Medical Complex</h1>
                    <Countdown />
                    <p>Website designed & developed by <br /> <a target='_rizwan' className='text-white' href="https://smiletechsolutions.tech/">Smile Tech Solutions</a></p>
                </div>
            </section>
        </>
    )
}
export default Home