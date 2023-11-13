import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { Text } from "./Text";
import { IoIosMenu } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { AvatarButton } from "./AvatarButton";
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
                    <div className="flex-shrink-0 px-6">
                        <a href={logolink} ><img src={logo} /></a>
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
                {/* 
                <div className="flex items-center gap-4">
                    <nav className="select-none">
                        <button
                            className="md:hidden flex items-center gap-2 h-fit p-0.5
                            bg-prepaf-orange-400 hover:bg-prepaf-orange-200 text-white transition-colors"
                            onBlur={() =>
                                setTimeout(() => setShowMenu(false), 100)
                            }
                            onMouseDown={() => {
                                setShowMenu(!showMenu);
                            }}
                        >
                            {showMenu ? (
                                <Icon icon="fe:close" width={25} />
                            ) : (
                                <Icon icon="ci:hamburger-md" width={25} />
                            )}
                        </button>
                        <ul
                            className={`${
                                showMenu
                                    ? "h-fit pt-1"
                                    : "h-0 py-0 m-0 border-0"
                            } flex flex-col justify-center items-center w-fit absolute z-10 mt-6 rounded
                        overflow-hidden transition-all border border-t-0 rounded-t-none border-prepaf-gray-600/10
                        bg-prepaf-gray-200 top-[58px] select-none`}
                        >
                            <li className="w-full">
                                <Link
                                    className={`flex justify-center py-2 px-4 hover:bg-gray-100 
                                    ${
                                        pathname == "/players" &&
                                        "text-prepaf-orange-400"
                                    }`}
                                    to="/players"
                                >
                                    Jogadores
                                </Link>
                            </li>
                            <li className="w-full ">
                                <Link
                                    className={`flex justify-center py-2 px-4 hover:bg-gray-100
                                    ${
                                        pathname == "/activities" &&
                                        "text-prepaf-orange-400"
                                    }`}
                                    to="/activities"
                                >
                                    Atividades
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    className={`flex gap-1 items-center justify-center py-2 px-4 hover:bg-gray-100 
                                    ${
                                        pathname == "/" &&
                                        "text-prepaf-orange-400"
                                    }`}
                                    to="/"
                                >
                                    Relatórios
                                    <Icon
                                        icon="bxs:down-arrow"
                                        width="10"
                                        height="10"
                                    />
                                </Link>
                            </li>
                        </ul>
                        
                    </nav>
                </div>
                */}
            </header>
        </div>
    );
}
