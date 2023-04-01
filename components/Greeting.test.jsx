import{render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe('Greeting components',() => {
test('render hello as a text', () => {
    // 3 A's rules:

//1.Arrange
    render(<Greeting/>);
    //2.Act
//......nothing

//3. Assert
    const helloElement = screen.getByText('hello');// write exact match hello here or Add {exact :false} in case of has something with hello  or something missing
    expect(helloElement).toBeInTheDocument();
  });

  test('renders good to see you if the button was NOT clicked', ()=>{
    render(<Greeting/>);

    const outputElement = screen.getByText('good to see you',{ exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders Changed! if the button was clicked', () =>{
//Arrange
  render(<Greeting />); 
//Act
  const buttonElement = screen.getByRole('button');
  userEvent.click(buttonElement)
//Assert
  const outputElement = screen.getByText('Changed !');
  expect(outputElement).toBeInTheDocument();

  });


  test('does not render "good to see you !" if the button was clicked', () =>{
//Arrange
render(<Greeting />); 

//Act
  const buttonElement = screen.getByRole('button');
  userEvent.click(buttonElement)

//Assert
  const outputElement = screen.queryByText('good to see you !', {exect : false });
  expect(outputElement).toBeNull();
  });

});