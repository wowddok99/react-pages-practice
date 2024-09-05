import LayOutHeader from "./header";
import LayOutBanner from "./banner";
import LayOutNavigation from "./navigation";
import LayOutFooter from "./footer";

interface LayOutProps{
    children: JSX.Element;
}

export default function LayOut(props: LayOutProps){

    return (
        <div>
            {/* isHiddenHeader가 false면 LayOutHeader 렌더링 */}
            <LayOutHeader/>
            <LayOutBanner/>
            {/* <LayOutNavigation/> */}
                {props.children}
            <LayOutFooter/>
        </div>
    )
}