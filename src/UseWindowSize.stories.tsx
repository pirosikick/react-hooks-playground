import { storiesOf } from '@storybook/react';
import * as React from 'react';
import useWindowSize from '@rehooks/window-size';

interface IState {
  width: number;
  height: number;
}

class ClassComponent extends React.Component<{}, IState> {
  // 目的を達成するための手続き
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  handleResize = () =>
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  componentWillMount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <h1>
        width: {this.state.width}, height: {this.state.height}
      </h1>
    );
  }
}

const FunctionalComponent = () => {
  // 画面サイズを使うことを宣言
  const size = useWindowSize();
  return (
    <h1>
      width: {size.innerWidth}, height: {size.innerHeight}
    </h1>
  );
};

storiesOf('window size', module)
  .add('Class Component', () => <ClassComponent />)
  .add('React Hooks', () => <FunctionalComponent />);
