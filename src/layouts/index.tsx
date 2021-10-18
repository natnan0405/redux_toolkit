/*
 * @Author: SmartNan
 * @Date: 2021-10-14 10:17:51
 * @LastEditTime: 2021-10-18 16:04:44
 * @Description: 相关描述
 */
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default function Layouts(props) {
  return (
    <div>
      <h1>THIS IS HEADER</h1>
      {props.children}
      <h1>THIS IS FOOTER</h1>
    </div>
  );
}
