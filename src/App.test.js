import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import App, {Test} from './App';
import TestRenderer from 'react-test-renderer'
import Button from './components/written/Button'
// enzyme
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe("Enzyme tests", ()=>{
  it("Renderizado correcto", ()=>{
    const wrapper = shallow(<App/>)
    // console.log(wrapper.debug())
    expect(wrapper).toMatchSnapshot()
  })

  it("shallow with selectors", ()=>{
    const wrapper = shallow(<App/>)
    const p = wrapper.find('.bliss')
    expect(p.text()).toBe("Shallow")
  })

  it("select img and check props", ()=>{
    const wrapper = shallow(<App/>)
    const img = wrapper.find({alt: 'logo'})
    //console.log(img.props())
    expect(img.props().src).toBe("")
  })

  it("testing state", ()=>{
    const wrapper = mount(<Test />)
    // console.log(wrapper.state())
    // wrapper.setState({name: "DonGuillito"}) <----- esto es una asignacion directa
    // console.log(wrapper.state())
    expect(wrapper.state().name).toEqual("Blissito")
  })

  // events
  it("simulate events with enzyme", ()=>{
    const wrapper = shallow(<App/>)
    const button = wrapper.find('Button')
    button.simulate('click')
    const h2 = wrapper.find('h2')
    expect(h2.text()).toBe('1')
  })

  it("simulate onchange in an input", ()=>{
    const wrapper = shallow(<Test />)
    const input = wrapper.find('input')
    input.simulate('change', {target:{value:"BlisS"}}) // <--- esto es una asignación directa
    expect(wrapper.find('p').text()).toBe('BlisS')
  })

  it("checking on methods", ()=>{
    const wrapper = shallow(<Test/>)
    const result = wrapper.instance().sendForm() // class components
    expect(result).toBe("yes!")
  })

})





























describe("Using snapshots", ()=>{
  test("should match snapshot", ()=>{
    const snap = TestRenderer.create(<App />).toJSON()
    expect(snap).toMatchSnapshot()
  })
  
  test('Should have the correct type in props', ()=>{
    const snap = TestRenderer.create(<App/>)
    const btn = snap.root.findByType(Button)
    // console.log(btn.props)
    expect(typeof btn.props.onClick).toBe("function")
  })

  test('Should match correct text', ()=>{
    const snap = TestRenderer.create(<App/>)
    const btn = snap.root.findByProps({className: "red_text"})
    expect(btn.children).toEqual(["Puchame!"])
  })

  test("should be only one item", ()=>{
    const snap = TestRenderer.create(<App/>)
    const root = snap.root
    const numOfChildren = root.findAllByType(Button).length
    expect(numOfChildren).toEqual(1)
  })

  
})




























describe('Button functionality', ()=>{
  it('Should not render when 0', ()=>{
    // 1.- Renderisar (virtualmente)
    // 1.- Decidir el selector
    const { queryByRole } = render(<App />)
    // 2.- select dom manipulation
    const h2 = queryByRole('heading', {level: 2})
    // 3.- test ??
    expect(h2).not.toBeInTheDocument() // matchers
  })

  it('Should render when is gratter than 0', ()=>{
    render(<App/>)
    const button = screen.getByRole('button')
    // event????
    fireEvent.click(button) // esto es muy simple
    const h2 = screen.getByRole('heading')
    expect(h2).toBeInTheDocument()
  })

  it('Should render "4" when tap 4 times the button', ()=>{
    render(<App />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    const h2 = screen.queryByText(/4/i) // <h2>4</h2>
    expect(h2.innerHTML).toBe('4')
  })

})