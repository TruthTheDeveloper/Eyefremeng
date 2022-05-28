import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';//

import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`

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
                showArrow={false}
                bordered={false}
                defaultActiveKey={['1']}
                // expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
            >
                <Panel header="Clear" key="1" className="site-collapse-custom-panel">
                <p>{text}</p>
                </Panel>
                <Panel header="PhotoChromic" key="2" className="site-collapse-custom-panel">
                <p>{text}</p>
                </Panel>
                <Panel header="Polarized" key="3" className="site-collapse-custom-panel">
                <p>{text}</p>
                </Panel>
            </Collapse>
        </form>
    )
}

export default LensForm;