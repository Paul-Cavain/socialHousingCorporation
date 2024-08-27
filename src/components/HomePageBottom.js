const HomePageBottom = () => {
    return(
        <section className="flex flex-col md:flex-row justify-between px-8 md:px-20 py-4 gap-3 md:gap-0">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="underline text-darkgray">
                    <span>Privacy</span>
                </div>
                <div className="underline text-darkgray">
                    <span>Cookieverklaring</span>
                </div>
                <div className="underline text-darkgray">
                    <span>Disclaimer</span>
                </div>
            </div>
            <div className="flex text-darkgray ">
                <span>&copy; KnusWonen 2024</span>
            </div>
        </section>
    );
}

export default HomePageBottom;