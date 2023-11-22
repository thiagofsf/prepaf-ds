import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { AvatarButton } from "./AvatarButton";
import { LogoImg } from "./LogoImg";
export interface Props {
    logo?: string;
    logolink?:string;
    links?: string;
    avatarbutton?: boolean;
    avatarimage?: string;
    avatarname?: string;
}

export function Navbar({ logo = 'assets/logo.png', logolink='', links = '[{"label":"Exemplo", "href":"/", "id":"exemplo"}]', avatarbutton = true, avatarimage = '/assets/foca.png', avatarname = 'Foca Silva'} : Props ) {

    let parsedlinks = JSON.parse(links);
    let [open,setOpen]=useState(false);

    return (
        <div className="flex justify-center w-screen max-w-full bg-gray-200 border-b border-prepaf-gray-600/10">
            <header className="flex items-center justify-between py-4 px-8 w-full max-w-[1200px]">
                <div className="flex items-center w-full">
                    <div className="flex-shrink-0 pr-10 w-full max-w-[200px]">
                        {(!logolink)?(<LogoImg link={logolink} image={logo} size="full"></LogoImg>):(<LogoImg noLink image={logo} size="full"></LogoImg>)}
                    </div>
                    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {open?<IoMdCloseCircle className="text-prepaf-orange" />:<IoIosMenu className="text-prepaf-orange"/>}
                    </div>
                    <nav className="select-none md:flex md:justify-between md:flex-grow">
                        <ul className={`md:flex md:flex-grow md:justify-self-start md:items-center md:pb-0 pb-4 gap-7 absolute md:static bg-gray-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                            {parsedlinks.map((link: {href: string; id: string; label: string}) => (
                                <li key={link.id} className="text-xl md:my-0 my-7">
                                    <a href={link.href} id={link.id} className="font-sans font-semibold text-sm hover:text-prepaf-orange transition-all">{link.label}</a>
                                </li>
                            ) )}

                            <div className="flex flex-grow md:justify-end justify-center">
                                {avatarbutton?(<AvatarButton image = {avatarimage} name = {avatarname} />):(<></>)}
                            </div>
                        </ul> 
                    </nav>
                </div>
            </header>
        </div>
    );
}
