import PropTypes from 'prop-types';
import { 
    OptionsList,
    Item,
    Button,
 } from "./Options-styled";


export const Options = ({ onLeaveFeedback, options }) => {
    return (
      <OptionsList>
        {options.map(button => (
          <Item key={button}>
            <Button type="button" onClick={() => onLeaveFeedback(button)}>
              {button}
            </Button>
          </Item>
        ))}
      </OptionsList>
    );
  };


Options.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  };