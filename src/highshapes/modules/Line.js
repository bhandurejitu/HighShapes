import { SvgContainer } from './../utils';

const lineConfig = {
    line(options) {
        let [x1, x2, y1, y2] = [options.attribute.x1 || 0, options.attribute.x2 || 0,options.attribute.y1 || 0, options.attribute.y2 || 0];
        let width = Math.max(x1, x2);
        let height = Math.max(y1, y2);
        let renderShape = <SvgContainer height={height} width={width}><line stroke={'#000000'} x1={x1} x2={x2} y1={y1} y2={y2}></line></SvgContainer>;
        return { renderShape };
    }
};

const lineModule = (Highshapes) => {
    Highshapes.line = lineConfig.line;
    return Highshapes;
};

export default lineModule;