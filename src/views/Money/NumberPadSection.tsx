import {Wrapper} from './NumberPadSection/Wrapper';
import React from 'react';
import {generateOutput} from './NumberPadSection/generateOutput';


type Props = {
  value: string;
  onChange: (value: string) => void;
  onOK?: () => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value;

  const setOutput = (output: string) => {
    let value: string;
    if (output.length >= 16) {
      value = output.slice(0, 16);
    } else if (output.length === 0) {
      value = '0';
    } else {
      value = output;
    }
    props.onChange(value);
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLInputElement).textContent;
    if (text === null) return;
    if (text === 'OK') {
      if (props.onOK) props.onOK();
      return;
    }

    function textIsInputString(text: any): text is InputString {
      return typeof text === 'string';
    }

    if ('0123456789.'.split('').concat(['删除', '清空']).includes(text)) {
      if (textIsInputString(text)) setOutput(generateOutput(text, output));
    }
  };

  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix"
           onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export {NumberPadSection};
