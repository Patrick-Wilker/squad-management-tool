import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PageHeader from '../../components/Header/index';
import PageFooter from '../../components/Footer/index';
import Home from '../../pages/Home/index';

describe('<Home />', () => {
  it("should render an header", ()=>{
    const wrapper = shallow(<Home />)

    expect(wrapper.find(PageHeader)).to.have.lengthOf(1);
  })

  it("should render an footer", ()=>{
    const wrapper = shallow(<Home />)

    expect(wrapper.find(PageFooter)).to.have.lengthOf(1);
  })
})
