import{render, screen} from '@testing-library/react';
import Greeting from "./Greeting";

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