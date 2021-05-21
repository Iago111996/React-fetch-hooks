import { Button } from '.';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

//test unit => spec
//test global => test
describe('Button />', () => {
it('should render button winth the test "load more"', () => {
    //render => for when want show in screen
    render(<Button text="load more" />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i});
    expect(button).toBeInTheDocument();
});

it('should call function on click button', () => {
    const fn = jest.fn();
    //render => for when want show in screen
    render(<Button text="load more" onClick={fn} />);


    const button = screen.getByRole('button', { name: /load more/i});
    
    userEvent.click(button);
    // fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
});

it('should be desabled when desable is "true"', () => {
    //render => for when want show in screen
    render(<Button text="load more" disabled={true} />);


    const button = screen.getByRole('button', { name: /load more/i});

    expect(button).toBeDisabled();
});
}) ;