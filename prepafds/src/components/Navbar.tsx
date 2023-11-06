import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import { Text } from "./Text";

export interface Props {
    logo?: string;
    logolink?:string;
    links?: string;
}

export function Navbar({ logo = 'assets/logo.png', logolink='', links = '[{"label":"Exemplo", "href":"/", "id":"exemplo"}]'} : Props ) {

    let parsedlinks = JSON.parse(links);

    return (
        <div className="flex justify-center w-screen max-w-full bg-gray-200 border-b border-prepaf-gray-600/10">
            <header className="flex items-center justify-between py-4 px-8 w-full max-w-[1000px]">
                <div className="flex items-center">
                    <div className="flex-shrink-0 px-6">
                        <a href={logolink} ><img src={logo} /></a>
                    </div>
                    <nav className="select-none">
                        <ul className="hidden md:flex justify-between gap-8 transition-all">
                            {parsedlinks.map(link => <li className=""><a href={link.href} id={link.id} className="font-sans font-semibold text-sm hover:text-prepaf-orange transition-all">{link.label}</a></li> )}
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
