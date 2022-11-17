import { SvgContainer } from './../utils';

const triangleConfig = {
    triangle(options) {
        let height = options.attribute.height || 0;
        let width  = options.attribute.width || 0;
        let points = [0, height, width / 2, 0, width, height];
        let renderShape = <SvgContainer height={height} width={width}><polygon points={points.join()}></polygon></SvgContainer>;
        return { renderShape };
    }
};

const triangleModule = (Highshapes) => {
    Highshapes.triangle = triangleConfig.triangle;
    return Highshapes;
};

export default triangleModule;