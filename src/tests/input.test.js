import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import InputTodo from './../components/InputTodo';
import Todos from './../components/Todos';
import Todo from './../components/Todo';


describe('<InputTodo />', () => {
    it('render ---> InputTodo', () => {
        const wrapper = shallow(<InputTodo />)
        console.log(wrapper.debug())
    })
})
