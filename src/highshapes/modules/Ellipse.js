import { SvgContainer } from './../utils';

const ellipseConfig = {
    ellipse(options) {
        let rx = options.attribute.xRadius || 0;
        let ry = options.attribute.yRadius || 0;
        let height = (ry * 2);
        let width = (rx * 2);
        let cx = rx;
        let cy = ry;
        let renderShape = <SvgContainer height={height} width={width}><ellipse rx={rx} ry={ry} cx={cx} cy={cy}></ellipse></SvgContainer>;
        return { renderShape };
    }
};

const ellipseModule = (Highshapes) => {
    Highshapes.ellipse = ellipseConfig.ellipse;
    return Highshapes;
};

export default ellipseModule;