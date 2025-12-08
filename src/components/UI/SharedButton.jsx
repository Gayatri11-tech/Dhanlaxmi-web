import { Button } from "react-bootstrap";


export const SharedButton = ({
    BtnVariant,
    Btnlabel,
    BtnSize,
    className,
    BtnClick,
    Btntype

}) => {
    return (
        <>
            <Button
                variant={BtnVariant}
                size={BtnSize}
                className={className}
                onClick={BtnClick}
                type={Btntype}
            >{Btnlabel}</Button>
        </>
    );
};
