import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.support.gray};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};