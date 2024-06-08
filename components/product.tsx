import FootController from "./foot-controller";
import FormFactor from "./form--factor";
import ImageCarousel from "./image-carousel";
import PowerAmp from "./power-amp";
import ProductHeader from "./product-header";
import Specification from "./specification";

type ProductProps = {
    setIsPowerAmp: (isPowerAmp: boolean) => void;
    setIsFootController: (isFootController: boolean) => void;
};

const Product = ({ setIsPowerAmp, setIsFootController }: ProductProps) => {
    return (
        <div className="p-5 flex items-start justify-between">
            <div className="w-1/2 sticky top-10">
                <ImageCarousel />
            </div>
            <div className="w-1/2 px-10">
                <ProductHeader />
                <FormFactor />
                <PowerAmp setIsPowerAmp={setIsPowerAmp} />
                <FootController setIsFootController={setIsFootController} />
                <Specification />
            </div>
        </div>
    )
}

export default Product