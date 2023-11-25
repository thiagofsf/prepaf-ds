import clsx from "clsx";
import '../styles/global.css';
import { tokens, secondTokens } from "../tokens/Tokens";
import { Text } from "../components/Text";


export function ColorTokens(){
    const globalColors = Object.values(tokens.colors);
    const localColors = Object.values(secondTokens.colors);
    return(
        <div className='w-full flex align-middle justify-center'>
            <div className="w-full w-max-[800px]">
                <Text size="md" weight="medium">Global Colors</Text><br />
                <Text size="sm">Global Colors are the most atomic color tokens.</Text><br />
                {globalColors.map(({token, value})=>(
                    <div className="w-full grid grid-cols-3 align-middle justify-center border border-solid border-black-800">
                        <div className={clsx(
                            'flex align-middle self-center justify-center',
                        )}
                        style={{backgroundColor:value, height:30}}
                        ></div>
                        <div className={`flex align-middle self-center justify-center`}>{token}</div>
                        <div className={`flex align-middle self-center justify-center`}>{value}</div>
                    </div>
                ))}
                <div className="py-2">
                    <br />
                    <Text size="md" weight="medium">Secondary Color Tokens</Text><br />
                    <Text size="sm">This tokens are defined using an global token, it can be used to distribute and maintain modularity.</Text><br />
                    
                </div>
                {localColors.map(({token, value})=>(
                    <div className="w-full grid grid-cols-3 align-middle justify-center border border-solid border-black-800">
                        <div className={clsx(
                            'flex align-middle self-center justify-center',
                        )}
                        style={{backgroundColor:value, height:30}}
                        ></div>
                        <div className={`flex align-middle self-center justify-center`}>{token}</div>
                        <div className={`flex align-middle self-center justify-center`}>{value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export function TextTokens(){
    const font = Object.values(tokens.family);
    const fontSize = Object.values(tokens.fontSize);
    return(
        <div className='w-full flex align-middle justify-center'>
            <div className="w-full w-max-[800px]">
                <Text size="md" weight="medium">Font Family</Text><br />
                <Text size="sm">tokens for defining font-family class.</Text><br />
                {font.map(({token, value})=>(
                    <div className="w-full grid grid-cols-2 align-middle justify-center border border-solid border-black-800">
                        <div className={`flex align-middle self-center justify-center`}>{token}</div>
                        <div className={`flex align-middle self-center justify-center`}>{value}</div>
                    </div>
                ))}
                <div className="py-2">
                    <br />
                    <Text size="md" weight="medium">Font Size</Text><br />
                    <Text size="sm">Defines all the sizes available.</Text><br />
                    
                </div>
                {fontSize.map(({token, value})=>(
                    <div className="w-full grid grid-cols-2 align-middle justify-center border border-solid border-black-800">
                        <div className={`flex align-middle self-center justify-center`}>{token}</div>
                        <div className={`flex align-middle self-center justify-center`}>{value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}