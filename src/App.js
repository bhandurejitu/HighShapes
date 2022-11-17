import HighshapesReact from './highshapes/HighshapesReact';
import Highshapes from './highshapes/Highshapes';
import LineModule from './highshapes/modules/Line';
import TriangleModule from './highshapes/modules/Triangle';
import EllipseModule from './highshapes/modules/Ellipse';

LineModule(Highshapes);
TriangleModule(Highshapes);
EllipseModule(Highshapes);

function App() {

    const optionRectangle = {
        shape: {
            type: 'rectangle',
        },
        attribute: {
            length: 100,
            width: 100,
        },
        function: {
            getArea: true
        },
    };

    const optionCircle = {
        shape: {
            type: 'circle',
        },
        attribute:{
            radius: 50,
        },
        function: {
            getArea: true
        },
    };

    const optionLine = {
        shape: {
            type: 'line',
        },
        attribute: {
            x1: 0,
            y1: 0,
            x2: 100,
            y2: 100,
        },
    };

    const optionTriangle = {
        shape: {
            type: 'triangle',
        },
        attribute: {
            width: 100,
            height: 100,
        }
    };

    const optionEllipse = {
        shape: {
            type: 'ellipse',
        },
        attribute: {
            xRadius: 100,
            yRadius: 40,
        },
    };

    return (
        <>
            <HighshapesReact Highshapes={Highshapes} options={optionRectangle} />
            <HighshapesReact Highshapes={Highshapes} options={optionCircle} />
            <HighshapesReact Highshapes={Highshapes} options={optionLine} />
            <HighshapesReact Highshapes={Highshapes} options={optionTriangle} />
            <HighshapesReact Highshapes={Highshapes} options={optionEllipse} />
        </>
    );
}

export default App;
