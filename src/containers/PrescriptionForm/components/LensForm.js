import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';//

import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const LensForm = () => {

    return(
        <form className="mx-3 md:mx-16">
            <div className=" text-xl my-3 font-semibold bg-indigo-900 py-3 px-3">
                <div className="flex">
                    <FontAwesomeIcon icon={faCircle} className="text-orange-400 mr-2 text-2xl"/>
                    <p className="text-white text-xl">Lenses</p>
                </div>
                <h1 className="text-white text-xs">All lenses includes Anti-Scratch and Anti-Reflective Coating</h1>
            </div>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                
            >
                <Panel header="This is panel header 1" key="1" >
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2" >
                <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3" >
                <p>{text}</p>
                </Panel>
                </Collapse>
        </form>
        )
}

export default LensForm;