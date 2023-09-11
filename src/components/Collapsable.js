import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import Card from './Card';

function Collapsable(props) {
  const [open, setOpen] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if (props.model) {
      let newProps = cloneDeep(props.model);
      newProps = newProps.filter(pinsa => pinsa.type === props.type);
      setData(newProps);
    }
  }, [props])

  return (
    <>
      <div className={`collapsable-item ${!open && 'close'} mb-4`}
        onClick={() => setOpen(!open)}
        aria-controls="collapsable-menu"
        aria-expanded={open}
      >
        <div className='text-primary item-title'>Pinse {props.label}</div>
        {!open ?
          <IoIosArrowDown className='text-primary' size={24} />
          : <IoIosArrowUp className='text-primary' size={24} />
        }
      </div>
      <Collapse in={open}>
        <div id='collapsable-menu' className='collaps-menu'>
          {data && data.length > 0 && (
            data.map((pinsa, key) => {
              return (
                <div key={key}>
                  <Card
                    img={`data:image/jpg;base64,${pinsa.image}`}
                    name={pinsa.name}
                    description={pinsa.description}

                  />
                </div>

              )
            })
          )}
        </div>
      </Collapse>

    </>
  )
}

export default Collapsable