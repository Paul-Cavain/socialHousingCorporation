const HomePageBottom = () => {
    return(
        <section className="grid grid-cols-2 lg:grid-cols-4 px-8 md:px-20 py-4">
            <div className="flex flex-row gap-4">
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
            {/* <div className="underline text-darkgray">
                <span>Disclaimer</span>
            </div> */}
            <div className="flex text-darkgray">
                <span>&copy; KnusWonen 2024</span>
            </div>
        </section>
    );
}

export default HomePageBottom;