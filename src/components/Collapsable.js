import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

function Collapsable(props) {
  const [open, setOpen] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    console.log(props);
    if (props.model) {
      let newProps = cloneDeep(props.model);
      newProps = newProps.filter(pinsa => pinsa.type === props.type);
      setData(newProps);
    }
  }, [props])

  return (
    <>
      <div className={`collapsable-item ${!open && 'close'}`}
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
        <div id='collapsable-menu'>
          {data && data.length > 0 && (
            data.map((pinsa, key) => {
              return (
                <div key={key}>
                  {pinsa.name}
                  {pinsa.type}
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