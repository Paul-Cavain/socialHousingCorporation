import { BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6 px-6 md:px-12 lg:px-20 py-8 md:py-12 bg-light-gray">
            <div className="flex-1">
                <span className="font-semibold text-darkgray">Bel of mail ons</span>
                <ul className="my-4 text-sm text-darkgray">
                    <li>012 - 345 67 89</li>
                    <li>klantenservice@knuswonen.nu</li>
                </ul>
            </div>

            <div className="flex-1">
                <span className="font-semibold text-darkgray">Openingstijden</span>
                <ul className="my-4 text-sm text-darkgray">
                    <li>Maandag t/m donderdag van 8:30 tot 16:30 uur.</li>
                    <li>Vrijdag van 8:30 tot 12:00 uur</li>
                </ul>
            </div>

            <div className="flex-1">
                <span className="font-semibold text-darkgray">Kom langs op afspraak</span>
                <ul className="my-4 text-sm text-darkgray">
                    <li>Straatweglaan 123</li>
                    <li>1234 AB Dorpstad</li>
                </ul>
            </div>

            <div className="flex-1">
                <span className="font-semibold text-darkgray">Volg ons op onze sociale kanalen</span>
                <ul className="text-orangecustom my-4 flex flex-row space-x-4 md:text-xl">
                    <li className="hover:bg-orangecustom hover:text-white p-2 rounded-full"><a href="#"><BsFacebook /></a></li>
                    <li className="hover:bg-orangecustom hover:text-white p-2 rounded-full"><a href="#"><BsLinkedin /></a></li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;
