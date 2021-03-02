import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PageFooter from '../../components/Footer/index';

describe('<Footer />', () => {
  it('renders an `span` with `data - All rights reserved`', ()=>{
    const data = new Date().getFullYear()
    const wrapper = shallow((
        <PageFooter>
            <span>
                {data} - All rights reserved
            </span> 
        </PageFooter>
    ))
    expect(wrapper.contains(<span>{data} - All rights reserved</span>)).to.equal(true);
  })

})
