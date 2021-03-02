import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PageHeader from '../../components/Header/index';

describe('<Header />', () => {
  it('renders an `.logo` and `.login`', ()=>{
    const wrapper = shallow(<PageHeader />)

    expect(wrapper.find('.logo')).to.have.lengthOf(1);
    expect(wrapper.find('.login')).to.have.lengthOf(1);
  })

})
