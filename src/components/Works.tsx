import Image from "next/image";

export default function Works() {
    return (
        <div className="self-stretch inline-flex flex-col justify-start items-center gap-16">
            <div className="self-stretch inline-flex justify-between items-start">
                <div className="justify-start text-black text-8xl font-medium font-['Inter']">Impressive Works</div>
                <div className="w-96 h-20 justify-start text-black text-xl font-light font-['DM_Sans']">HERE’S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.</div>
            </div>
            <div className="w-[1654px] h-[1184px] relative">
                <div className="w-[1654px] left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-[572px] inline-flex justify-start items-center gap-10">
                        <div className="w-[807px] self-stretch inline-flex flex-col justify-start items-start gap-7">
                            <img className="self-stretch h-[470px] rounded-[42px]" src="https://placehold.co/807x470" />
                            <div className="self-stretch h-16 inline-flex justify-start items-center gap-3">
                                <div className="w-12 h-12 relative origin-top-left rotate-[44deg]">
                                    <div className="w-12 h-12 left-[8.48px] top-[8.48px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                                </div>
                                <div className="w-[726px] justify-start text-black text-4xl font-normal font-['Inter']">Learnlogicify Landing Page</div>
                            </div>
                        </div>
                        <div className="w-[807px] self-stretch inline-flex flex-col justify-start items-start gap-7">
                            <img className="self-stretch h-[470px] rounded-[42px]" src="https://placehold.co/807x470" />
                            <div className="self-stretch h-16 inline-flex justify-start items-center gap-3">
                                <div className="w-12 h-12 relative origin-top-left rotate-[44deg]">
                                    <div className="w-12 h-12 left-[8.48px] top-[8.48px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                                </div>
                                <div className="w-[726px] justify-start text-black text-4xl font-normal font-['Inter']">Winzee Web Chat application</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1654px] left-0 top-[612px] absolute inline-flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch h-[572px] inline-flex justify-start items-center gap-10">
                        <div className="w-[807px] self-stretch inline-flex flex-col justify-start items-start gap-7">
                            <div className="self-stretch h-[470px] bg-black rounded-[42px] inline-flex justify-center items-center gap-2.5">
                                <img className="w-60 h-60" src="https://placehold.co/236x236" />
                            </div>
                            <div className="self-stretch h-16 inline-flex justify-start items-center gap-3">
                                <div className="w-12 h-12 relative origin-top-left rotate-[44deg]">
                                    <div className="w-12 h-12 left-[8.48px] top-[8.48px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                                </div>
                                <div className="w-[726px] justify-start text-black text-4xl font-normal font-['Inter']">ChatGPT clone</div>
                            </div>
                        </div>
                        <div className="w-[807px] self-stretch inline-flex flex-col justify-start items-start gap-7">
                            <img className="self-stretch h-[470px] rounded-[42px]" src="https://placehold.co/807x470" />
                            <div className="self-stretch h-16 inline-flex justify-start items-center gap-3">
                                <div className="w-12 h-12 relative origin-top-left rotate-[44deg]">
                                    <div className="w-12 h-12 left-[8.48px] top-[8.48px] absolute outline outline-2 outline-offset-[-1px] outline-black" />
                                </div>
                                <div className="w-[726px] justify-start text-black text-4xl font-normal font-['Inter']">Gemini Clone</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-8 py-3 rounded-[37px] outline outline-1 outline-offset-[-1px] outline-zinc-400 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
                <div className="w-36 h-6 relative">
                    <div className="left-[22px] top-0 absolute justify-start text-black text-xl font-normal font-['Inter']">Explore more</div>
                    <div className="w-2.5 h-2.5 left-0 top-[7px] absolute bg-black rounded-3xl" />
                </div>
            </div>
        </div>

    );
}
