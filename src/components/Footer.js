import { BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-between p-8 gap-3 bg-light-gray lg:px-20">
            <div className="flex-1">
                <span className="font-bold text-darkgray">Bel of mail ons</span>
                <ul className="my-4 text-sm text-darkgray">
                    <li>012 - 345 67 89</li>
                    <li>klantenservice@knuswonen.nu</li>
                </ul>
            </div>

            <div className="flex-1">
                <span className="font-bold text-darkgray">Openingstijden</span>
                <ul className="my-4 text-sm text-darkgray">
                    <li>Maandag t/m donderdag van 8:30 tot 16:30 uur.</li>
                    <li>Vrijdag van 8:30 tot 12:00 uur</li>
                </ul>
            </div>

            <div className="flex-1">
                <span className="font-bold text-darkgray">Kom langs op afspraak</span>
                <ul className="my-4 text-sm text-darkgray">
                    <li>Straatweglaan 123</li>
                    <li>1234 AB Dorpstad</li>
                </ul>
            </div>

            <div className="flex-1">
                <span className="font-bold text-darkgray">Volg ons op onze sociale kanalen</span>
                <ul className="text-orangecustom my-4 flex flex-row space-x-4 md:text-xl">
                    <li className="hover:bg-orangecustom hover:text-white p-2 rounded-full"><a href="#"><BsFacebook /></a></li>
                    <li className="hover:bg-orangecustom hover:text-white p-2 rounded-full"><a href="#"><BsLinkedin /></a></li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;
