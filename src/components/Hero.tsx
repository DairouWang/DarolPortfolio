import Image from "next/image";

export default function Hero() {
    return (
        <div
            className="self-stretch h-[972px] py-9 relative inline-flex flex-col justify-start items-center bg-[url('/Hero.jpg')] bg-cover bg-center"
        >
            <div className="w-[1797px] inline-flex justify-start items-start gap-[1017px]">
                <div className="justify-start text-white text-xl font-medium font-['Inter']">@ Code by Ashwin</div>
                <div className="w-[600px] h-16 text-right justify-start text-white text-xl font-light font-['Inter']">
                    Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies
                </div>
            </div>
            <div className="left-[-1049px] top-[474px] absolute justify-start text-white text-[300px] font-medium font-['Inter']">
                Creative Developer & Designer
            </div>
            <div className="w-36 h-36 left-[1223px] top-[362px] absolute">
                <div className="w-28 h-28 left-[17.62px] top-[17.62px] absolute outline outline-2 outline-offset-[-1px] outline-stone-300" />
            </div>
        </div>

    );
}
