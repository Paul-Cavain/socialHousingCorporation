import { BsHammer, BsArrowBarRight, BsBoxArrowUp, BsWechat } from 'react-icons/bs';

const Home = () => {
    
    return (
        <main className="flex flex-col justify-center text-center w-full">

            {/* Hero section */}
            <section className="relative">
                {/* herobackground image */}
                <div className="">
                    <img src={`herobackground.png`} alt="herobackground"  className="h-screen pt-28 max-w-full bg-cover object-cover" />
                </div>

                {/* How can we help you */}
                <section className="absolute top-0 left-0 w-full h-screen flex justify-center items-center md:mt-72 lg:mt-56 mt-56 px-4 md:px-10 lg:px-20">
                    <div className="space-y-4 md:space-y-6">
                        <div className="text-white text-xl md:text-3xl text-start">
                            <h3>Waarmee kunnen we je helpen?</h3>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center md:space-x-4">
                            <a href='#'>
                                <div className="bg-white flex flex-row items-center px-4 md:px-12 py-2 md:py-3 rounded-md md:space-x-3 w-56 md:w-68 lg:w-full">
                                    <div className="flex-shrink-0">
                                        <BsHammer className="text-darkblue text-xl transform rotate-90" />
                                    </div>
                                    
                                    <div className="text-darkblue">
                                        <h3 className="text-lg font-semibold">Reparatie melden</h3>
                                    </div>
                                </div>
                            </a>

                            <a href='#'>
                                <div className="bg-white flex flex-row items-center px-8 md:px-16 py-2 md:py-3 rounded-md space-x-3 w-56 md:w-68 lg:w-full">
                                    <div className="flex-shrink-0">
                                        <BsBoxArrowUp className="text-darkblue text-xl "/>
                                    </div>
                                    <div className="text-darkblue">
                                        <h3 className="text-lg font-semibold">Huur betalen</h3>
                                    </div>
                                </div>
                            </a>

                            <a href='#'>
                                <div className="bg-white flex flex-row items-center px-8 md:px-20 py-2 md:py-3 rounded-md space-x-3 w-56 md:w-68 lg:w-full">
                                    <div>
                                        <BsWechat className="text-darkblue text-2xl"/>
                                    </div>
                                    <div className="text-darkblue">
                                        <h3 className="text-lg font-semibold">Contact</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section> 
            </section>

            {/* CTA section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8 px-8 lg:px-20">
                {/* cta image */}
                <div className="w-full">
                    <img src={`cta.png`} alt="nieuwsbrief image" className="object-cover h-auto w-full rounded-md" />
                </div>

                {/* cta words */}
                <div className="w-full px-4 md:px-8 lg:mt-20">
                    <div className="flex md:justify-start text-lg md:text-2xl text-skyblue">
                        <h3>We verbeteren onze woningen</h3>
                    </div>
                    <div className="py-2 text-lg md:text-xl lg:text-lg break-all">
                        <div className="text-left leading-relaxed">
                            <p className="mb-4">
                            Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot. Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.
                            </p>
                            <p>
                            Wilt u meer weten over onze energiebesparende maatregelen?
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-start py-6">
                        <button className="bg-gradient-sky-green w-32 h-10 md:h-12 rounded-md text-white hover:gradient-sky-green hover:text-black transition ease-out duration-500">
                            Lees meer
                        </button>
                    </div>
                </div>
            </section>


            {/* Laatste nieuws section */}
            <section className="bg-custom-blue py-4 md:py-20 px-4 md:px-12">
                <div className="flex flex-col justify-center mx-auto md:mx-8">
                    {/* Heading */}
                    <div className="text-darkblue text-2xl py-4 md:py-4 text-start px-2">
                        <h3>Laatste nieuws</h3>
                    </div>

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center w-full px-3 md:px-0">

                        {/* First card */}
                        <div className="flex flex-col bg-white rounded-md w-full overflow-hidden">
                            <div className="">
                                <img
                                    src={`LaatsteCardImageOne.jpg`}
                                    alt="Telefoonstoring image"
                                    className="object-cover w-full shadow-md"
                                />
                            </div>
                            <div className="flex flex-col justify-between flex-1 p-4 md:p-6">
                                <div className="flex flex-col mb-auto">
                                    <span className="text-graycustom uppercase text-start">
                                        <p className="mb-2 text-xl lg:text-md">5 Maart 2024</p>
                                    </span>
                                    <span className="text-darkblue text-left leading-relaxed">
                                        <p className="font-semibold mb-1 text-xl lg:text-md">Telefoonstoring</p>
                                    </span>
                                    <span className="text-darkblue text-left leading-relaxed">
                                        <p className="text-lg lg:text-sm">Telefoonstoring verholpen</p>
                                    </span>
                                </div>
                                <div className="flex items-center justify-end text-darkblue mt-auto space-x-2">
                                    <a href="#">
                                        <div className="text-xl lg:text-sm">Lees Meer</div>
                                    </a>
                                    <div className="text-orangecustom">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="32"
                                            fill="currentColor"
                                            className="bi bi-arrow-right mt-1"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second card */}
                        <div className="flex flex-col bg-white rounded-md w-full overflow-hidden">
                            <div className="">
                                <img
                                    src={`LaatsteCardImageTwo.jpg`}
                                    alt="Energiebesparing image"
                                    className="object-coverw-full  shadow-md"
                                />
                            </div>
                            <div className="flex flex-col justify-between flex-1 p-4 md:p-6">
                                <div className="flex flex-col mb-auto">
                                    <span className="text-graycustom uppercase text-start">
                                        <p className="mb-2 text-xl lg:text-md">17 februari 2024</p>
                                    </span>
                                    <span className="text-darkblue text-left leading-relaxed">
                                        <p className="font-semibold mb-1 text-xl lg:text-md">
                                            Energiebesparing - Wat doet KnusWonen?
                                        </p>
                                    </span>
                                    <span className="text-darkblue text-left leading-relaxed">
                                        <p className="text-lg lg:text-sm">
                                            KnusWonen werkt hard aan het energiezuiniger maken van ...
                                        </p>
                                    </span>
                                </div>
                                <div className="flex items-center justify-end text-darkblue mt-auto space-x-2">
                                    <a href="#">
                                        <div className="text-xl lg:text-sm">Lees Meer</div>
                                    </a>
                                    <div className="text-orangecustom">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="32"
                                            fill="currentColor"
                                            className="bi bi-arrow-right mt-1"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third card */}
                        <div className="flex flex-col bg-white rounded-md w-full overflow-hidden">
                            <div className="">
                                <img
                                    src={`LaatsteCardImageThree.jpg`}
                                    alt="Energietoeslag image"
                                    className="object-cover w-full shadow-md h-64"
                                />
                            </div>
                            <div className="flex flex-col justify-between flex-1 p-4 md:p-6">
                                <div className="flex flex-col mb-auto">
                                    <span className="text-graycustom uppercase text-left leading-relaxed">
                                        <p className="mb-2 text-xl lg:text-md">30 januari 2024</p>
                                    </span>
                                    <span className="text-darkblue text-left leading-relaxed mb-2">
                                        <p className="font-semibold mb-1 text-xl lg:text-md">Energietoeslag: Heeft u er recht op?</p>
                                    </span>
                                    <span className="text-darkblue text-left leading-relaxed">
                                        <p className="text-lg lg:text-sm">
                                            Steeds meer mensen hebben moeite om hun energierekening te ...
                                        </p>
                                    </span>
                                </div>
                                <div className="flex items-center justify-end text-darkblue mt-auto space-x-2">
                                    <a href="#">
                                        <div className="text-xl lg:text-sm">Lees Meer</div>
                                    </a>
                                    <div className="text-orangecustom">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="32"
                                            fill="currentColor"
                                            className="bi bi-arrow-right mt-1"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row justify-end text-center text-darkblue space-x-2 px-6 md:px-6 my-6">
                        <a href="#">
                            <span className="my-1 text-xl lg:text-sm">Bekijk alle nieuwsberichten</span>
                        </a>
                        <span className="text-orangecustom">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="32"
                            fill="currentColor"
                            className="bi bi-arrow-right mt-[-1]"
                            viewBox="0 0 16 16"
                            >
                            <path
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                            </svg>
                        </span>
                    </div>
                </div>
            </section>


            {/* nieuwsbrief section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center px-8 lg:px-20 gap-8 lg:space-x-8 mt-12">
                {/* Nieuwsbrief words */}
                <div className="w-full">
                    <div className="flex justify-start text-orangecustom text-lg md:text-2xl">
                        <h3>Schrijf je in voor onze nieuwsbrief</h3>
                    </div>
                    <div className="py-3 md:py-2 text-lg md:text-xl lg:text-lg break-all">
                        <p className="text-left leading-relaxed break-all">
                            Wil je als eerste op de hoogte zijn van het laatste nieuws over jouw woning en buurt? Schrijf je dan in voor de nieuwsbrief van KnusWonen! Iedere maand sturen we je een update met belangrijk nieuws, praktische tips, en informatie over onderhoudsprojecten en buurtactiviteiten. Of je nu wilt weten wanneer er werkzaamheden gepland zijn, of je geïnteresseerd bent in nieuwe initiatieven in de wijk, onze nieuwsbrief zorgt ervoor dat je niets mist.
                        </p>
                    </div>
                    <div className="py-2 text-lg md:text-xl break-all">
                        <p className="text-left leading-relaxed break-all">
                            Schrijf je vandaag nog in en blijf verbonden met KnusWonen!
                        </p>
                    </div>
                    <div className="flex justify-start py-6">
                        <button className="bg-gradient-sunset-sunrise w-40 h-12 rounded-md text-white hover:bg-gradient-sunset-sunrise hover:text-black transition ease-out duration-500">Inschrijven</button>
                    </div>
                </div>

                {/* Nieuwsbrief image */}
                <div className="w-full">
                    <img src={`brief.png`} alt="nieuwsbrief image" className="object-cover w-full rounded-md" />
                </div>
            </section>
            
        </main>
    );
}

export default Home;
