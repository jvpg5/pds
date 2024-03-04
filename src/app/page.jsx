import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">

      <div className="m-[20px] flex flex-wrap gap-[20px] px-[20px] justify-center">
        <Link href="/link1"><Button>Sobre nós</Button></Link>
        <Link href="/link1"><Button>Nosso objetivo</Button></Link>
        <Link href="/link1"><Button>Procure passeador</Button></Link>
        <Link href="/link1"><Button>Seja um Passeador</Button></Link>
        <Link href="/link1"><Button>Contato</Button></Link>
      </div>
      <Separator className="w-full"/>

      <div className="justify-self-center m-auto">
        <Image src="/img/logo.svg" alt="logoMarca" width="500" height="667" />
      </div>
    </div>
  );
}
