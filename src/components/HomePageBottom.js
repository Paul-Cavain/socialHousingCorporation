const HomePageBottom = () => {
    return(
        <section className="flex flex-col md:flex-row md:justify-between justify-start px-8 md:px-20 py-4">
            <div>
                <ul className="flex flex-col md:flex-row md:space-x-8 underline text-darkgray">
                    <li>Privacy</li>
                    <li>Cookieverklaring</li>
                    <li>Disclaimer</li>
                </ul>
            </div>
            <div className="text-darkgray">
                <span>© KnusWonen 2024</span>
            </div>
        </section>
    );
}

export default HomePageBottom;