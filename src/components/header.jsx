import Image from "next/image";
import Link from "next/link";


export default function Header(){

    const navContent = [
        {
            label : "Início",
            href : "/"  
        },
        {
            label : "Sobre nós",
            href : "/"  
        },
        {
            label : "Início",
            href : "/"  
        },
        {
            label : "Início",
            href : "/"  
        },
        {
            label : "Início",
            href : "/"  
        },
    ]

    return(
        <header className="flex flex-row w-full bg-[#0099DD] h-[80px] px-4 content-between">
            <div className="flex flex-row ">
                <Image src={"/img/Logo-simples.svg"} alt="Logo" width={80} height={80}/>
                <h1 className="text-white text-6xl self-center ml-3">DDW</h1>
            </div>

            {/* <nav className="flex flex-row ">
                {navContent.map((item, index)=>(
                    <Link href={item.href}>
                        <div className="flex h-[80px] px-[20px] bg-[#0099DD] hover:bg-cyan-700 border-slate-500 border-x transform">
                            <p className="text-white self-center justify-self-center m-auto text-4xl">
                                {item.label}
                            </p>
                        </div>
                    </Link>
                ))}
            </nav> */}
        </header>
    )
}