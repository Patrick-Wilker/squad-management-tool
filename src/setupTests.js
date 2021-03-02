import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });  


var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());
