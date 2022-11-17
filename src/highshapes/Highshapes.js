import { SvgContainer } from './utils';

let Highshapes = {
    rectangle(options) {
        let height = options.attribute.length || 0;
        let width = options.attribute.width || 0;
        let renderShape = <SvgContainer height={height} width={width}><rect height={height} width={width}></rect></SvgContainer>;
        const getArea = () => {
            return height * width;
        }
        return {getArea, renderShape};
    },
    circle(options) {
        let radius = options.attribute.radius || 0;
        let height = (radius * 2);
        let width = (radius * 2);
        let renderShape = <SvgContainer height={height} width={width}><circle r={radius} cx={radius} cy={radius}></circle></SvgContainer>;
        const getArea = () => {
            return Math.PI * radius * radius;
        }
        return {getArea, renderShape};
    },
};

export default Highshapes;