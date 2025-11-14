import Image from "next/image";

export default function Main() {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden">
            <Image src="/Main.jpg" alt="Main background showcasing creative developer portfolio" fill className="object-cover object-center -z-10" priority />
            <div className="absolute top-12 left-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">Dairou Wang</h1>
            </div>
            <div className="absolute top-8 right-8 max-w-xl px-4 sm:px-6 lg:px-8 text-right">
                <p className="text-lg sm:text-xl font-light mb-4">Software Developer | Psychology & MPA background | Crafting user-centric products | Woman in Tech | Empathy-driven design | Photographer, Snowboarding/Skiing, Badminton Enthusiast</p>
            </div>
            <div className="absolute bottom-8 w-full overflow-hidden pb-2">
                <div className="text-white text-[20rem] font-medium whitespace-nowrap animate-marquee leading-tight inline-block">
                    Creative Developer & Designer&nbsp;&nbsp;Creative Developer & Designer&nbsp;&nbsp;Creative Developer & Designer&nbsp;&nbsp;Creative Developer & Designer&nbsp;&nbsp;
                </div>
            </div>
        </section>

    );
}
