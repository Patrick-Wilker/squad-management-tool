import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PageHeader from '../../components/Header/index';
import PageFooter from '../../components/Footer/index';
import Home from '../../pages/Home/index';

describe('<Home />', () => {
  it("should render an header", ()=>{
    const pageHeader = shallow(<Home />)

    expect(pageHeader.find(PageHeader)).to.have.lengthOf(1);
  })

  it("should render an footer", ()=>{
    const pageHeader = shallow(<Home />)

    expect(pageHeader.find(PageFooter)).to.have.lengthOf(1);
  })
})
