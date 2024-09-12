import LayOutHeader from "./header";
import LayOutFooter from "./footer";
import LayOutBanner from "./banner";

interface LayOutProps{
    children: JSX.Element;
}

export default function LayOut(props: LayOutProps){

    return (
        <div>
            <LayOutHeader/>
            <LayOutBanner/>
                {props.children}
            <LayOutFooter/>
        </div>
    )
}