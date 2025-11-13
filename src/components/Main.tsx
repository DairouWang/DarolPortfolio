import Image from "next/image";

export default function Main() {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden">
            <Image src="/Main.jpg" alt="Main background showcasing creative developer portfolio" fill className="object-cover object-center -z-10" priority />
            <div className="max-w-3xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                <p className="text-lg sm:text-xl font-light mb-4">Software Developer | Psychology & MPA background | Crafting user-centric products | Woman in Tech | Empathy-driven design | Photographer, Snowboarding/Skiing, Badminton Enthusiast</p>
            </div>
            <div className="absolute top-1/3 w-full overflow-hidden">
                <div className="text-white text-[300px] font-medium whitespace-nowrap animate-marquee">
                    Creative Developer & Designer
                </div>
            </div>
            {/*<h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-medium mt-8 text-center sm:text-left leading-tight">Creative Developer & Designer</h1>*/}
            {/*<div className="w-36 h-36 left-[1223px] top-[362px] absolute">*/}
            {/*    <div className="w-28 h-28 left-[17.62px] top-[17.62px] absolute outline outline-2 outline-offset-[-1px] outline-stone-300" />*/}
            {/*</div>*/}
        </section>

    );
}
