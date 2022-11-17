import _ from 'lodash';

const defaultOptions = {
    shape: {
        type: null,
    },
    attribute: {
        length: 0,
        width: 0,
        height: 0,
        radius: 0,
        xRadius: 0,
        yRadius: 0,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
    },
    function: {
        getArea: false,
    },
};

export function formatOption(source) {
    const customizer = (objValue, srcValue) => {
        if (_.isEqual(srcValue, []) || _.isEqual(srcValue, {})) {
          return srcValue;
        }
    }
    return _.mergeWith(_.cloneDeep(defaultOptions), _.cloneDeep(source), customizer);
}

export function SvgContainer(props) {
    return <svg height={props.height} width={props.width}>{props.children}</svg>;
}