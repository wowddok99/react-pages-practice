import LayOutHeader from "./header";
import LayOutFooter from "./footer";

interface LayOutProps{
    children: JSX.Element;
}

export default function LayOut(props: LayOutProps){

    return (
        <div>
            {/* <LayOutBanner/> */}
            <LayOutHeader/>
                {props.children}
            <LayOutFooter/>
        </div>
    )
}